# BlockBenchMCP

**English** | [中文](README.zh-CN.md)

Minecraft-oriented **[Model Context Protocol](https://modelcontextprotocol.io/)** bridge for [Blockbench](https://www.blockbench.net/) (desktop **≥ 5.1.0**).

An AI client (Cursor / Claude / etc.) talks to a **stdio MCP adapter**; the adapter talks to a **Blockbench plugin** over loopback WebSocket. The plugin is the only process that mutates the model.

> Not a fork of kitchen-sink UI remotes. Tools are **intent-level** so agents can produce better low-poly Minecraft models with fewer, safer calls.

---

## Why this exists

Common Blockbench MCP plugins expose raw UI actions (`place_cube`, `trigger_action`, full-res screenshots). That causes:

- dozens–hundreds of tool calls for one character
- silent schema / keyframe failures
- context blown up by screenshots
- MCP dying when Blockbench closes

This project instead:

| Choice | Detail |
|--------|--------|
| Transport | Pattern B: stdio adapter stays alive; plugin connects via `ws://127.0.0.1` |
| Tools | Intent APIs: `scaffold_biped`, `create_limb`, `apply_geometry_batch`, `check_model` |
| Feedback | Structured `check_model` first; screenshots default **256px JPEG** |
| Host ports | Plugin domain code goes through `undo` / `textures` / `canvas` / `formats` / `preview` |
| Formats (v1) | `java_block`, `geckolib_model` (GeckoLib plugin required for entities) |

Survey notes: [docs/SPIKE_COMPARE.md](docs/SPIKE_COMPARE.md) · decisions: [docs/DECISION.md](docs/DECISION.md) · architecture: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)

---

## Architecture

```
AI client (Cursor / Claude)
        │  stdio MCP
        ▼
┌──────────────────────────┐
│  packages/adapter        │  McpServer, health, get_guide (local)
│  Node process            │  WS listener + shared secret
└────────────┬─────────────┘
             │  ws://127.0.0.1:39741
             ▼
┌──────────────────────────┐
│  packages/plugin         │  Command handlers + BbHost ports
│  Blockbench desktop      │  Undo / Texture / Canvas (BB 5.1 APIs)
└──────────────────────────┘
```

| Package | Role |
|---------|------|
| [`packages/shared`](packages/shared) | Protocol, Zod contracts, guides, capabilities, tests |
| [`packages/adapter`](packages/adapter) | stdio MCP server + WebSocket bridge |
| [`packages/plugin`](packages/plugin) | Blockbench desktop plugin (esbuild → `dist/blockbench_mcp.js`) |

Source files are kept **≤ 500 lines** (enforced by test). Plugin host ports: [`packages/plugin/src/host/`](packages/plugin/src/host/).

---

## Requirements

- **Node.js ≥ 22**
- **Blockbench desktop ≥ 5.1.0** (plugin sets `min_version`)
- For animated entities: [GeckoLib Blockbench plugin](https://github.com/bernie-g/geckolib)
- MCP-capable client (Cursor, Claude Code/Desktop, …)

---

## Install & build

```bash
git clone https://github.com/SwagRee/BlockBenchMCP.git
cd BlockBenchMCP
npm install
npm run build
npm test
```

Artifacts:

- Adapter: `packages/adapter/dist/cli.js`
- Plugin: `packages/plugin/dist/blockbench_mcp.js`

---

## Setup

### 1. Start / register the adapter

Default secret: `dev-local-secret` · default port: `39741`

```bash
node packages/adapter/dist/cli.js
# optional: --port 39741 --secret your-secret
# env: BLOCKBENCH_MCP_SECRET, BLOCKBENCH_MCP_PORT
```

**Cursor** — [`.vscode/mcp.json`](.vscode/mcp.json) (adjust absolute path if needed):

```json
{
  "servers": {
    "blockbench": {
      "type": "stdio",
      "command": "node",
      "args": ["${workspaceFolder}/packages/adapter/dist/cli.js"],
      "env": {
        "BLOCKBENCH_MCP_SECRET": "dev-local-secret"
      }
    }
  }
}
```

**Claude Code** example:

```bash
claude mcp add blockbench -e BLOCKBENCH_MCP_SECRET=dev-local-secret -- node /absolute/path/to/BlockBenchMCP/packages/adapter/dist/cli.js
```

### 2. Load the plugin in Blockbench

1. Desktop Blockbench → **File → Plugins → Load Plugin from File**
2. Select `packages/plugin/dist/blockbench_mcp.js`
3. **Settings → General**: MCP Adapter Port `39741`, MCP Shared Secret must match the adapter
4. Call tool `health` → expect `plugin_connected: true`, `blockbench_supported: true`

Handshake also sends `capabilities` (geometry, textures, screenshots, geckolib, …).

---

## Recommended agent workflow (quality)

Do **not** skip steps 1–3.

1. `get_guide` → topic `modeling` (then `geckolib` or `java_block`)
2. `create_project` with the right format
3. **Entities:** `scaffold_biped` (Steve-like bones + pivots + texture; result includes embedded `check`)  
   **Blocks:** `apply_geometry_batch`
4. Read `check_model` / embedded check — fix every **error** before painting
5. `auto_uv_cubes` → `paint_face_feature` (eyes, trim — face-local UVs)
6. `capture_views` only if you still need vision (default max edge **256**, JPEG)
7. Optional: `upsert_animation`, `propose_scoped_directory` → `export_model`

---

## MCP tools (v1)

### Session / observation

| Tool | Purpose |
|------|---------|
| `health` | Adapter up, plugin connected, versions, capabilities |
| `get_guide` | Playbooks (served by adapter; Blockbench not required) |
| `get_project_summary` | Compact outliner + counts (prefer over screenshots) |
| `check_model` | OVERLAP / EMPTY_GROUP / ZERO_VOLUME / BAD_PIVOT / UNTEXTURED_FACE / … |
| `capture_views` | Low-res multi-angle preview images |

### Geometry / texture

| Tool | Purpose |
|------|---------|
| `create_project` | `java_block` \| `geckolib_model` |
| `scaffold_biped` | Best start for humanoids — correct joint pivots |
| `create_limb` | Bone + cube at joint; optional X mirror |
| `apply_geometry_batch` | Create/delete groups+cubes in **one** undo (all-or-nothing) |
| `mirror_elements` | Mirror + smart left/right rename |
| `ensure_texture` | Create/reuse solid texture (BB `fromDataURL`) |
| `auto_uv_cubes` | Box / face auto UV |
| `paint_face_feature` | Rect / ellipse / fill in **face-local** UV space |

### Animation / files

| Tool | Purpose |
|------|---------|
| `upsert_animation` | Simple bone clip create/replace (format-dependent) |
| `propose_scoped_directory` | User confirms session file root |
| `export_model` | Write under scoped directory (`overwrite` must be explicit) |

**Explicitly out of scope (v1):** `trigger_action`, `emulate_clicks`, `risky_eval`, full paint chrome, mesh sculpt suite, Hytale/PBR-first tools.

---

## Design rules that improve output

1. **Pivots at joints** — `scaffold_biped` / `create_limb` hang limbs from hip/shoulder, not cube centers  
2. **Fail loud** — Zod `.strict()`; unknown params rejected; batch aborts instead of half-applying  
3. **Undo correctness (BB 5.1)** — `cancelEdit(true)` on failure; `finishEdit` includes created elements  
4. **Cheap feedback** — `check_model` / summary before any screenshot  
5. **Single responsibility files** — host ports isolate Blockbench globals from command logic  

---

## Scripts

| Script | Action |
|--------|--------|
| `npm run build` | Build shared → adapter → plugin |
| `npm test` | Protocol + smoke contracts + ≤500-line guard |
| `npm run typecheck` | Typecheck all workspaces |
| `npm start` | Run adapter CLI |

---

## Security notes

- WebSocket binds **127.0.0.1** only  
- Shared secret required (default `dev-local-secret` is for local dev — change for anything shared)  
- File export only after user-approved `propose_scoped_directory`  

---

## License

MIT
