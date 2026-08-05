# BlockBenchMCP

**English** | [简体中文](README.zh-CN.md)

> GitHub README cannot run JavaScript, so file links above will navigate.  
> For **in-page show/hide** (no jump): **[Docs site language toggle](https://swagree.github.io/BlockBenchMCP/)**

Minecraft-oriented **[Model Context Protocol](https://modelcontextprotocol.io/)** bridge for [Blockbench](https://www.blockbench.net/) desktop **≥ 5.1.0**.

AI client → **stdio MCP adapter** → loopback WebSocket → **Blockbench plugin** (only the plugin mutates the model).

Intent tools (`scaffold_biped`, `check_model`, …) — not a kitchen-sink UI remote.

### Why this exists

Typical BB MCPs expose raw UI ops → too many tool calls, silent failures, huge screenshots, MCP dies when BB closes.

This repo: stdio adapter stays up; bulk/intent tools; structured checks before vision; BbHost ports (`undo` / `textures` / `canvas` / `formats` / `preview`); formats `java_block` + `geckolib_model`.

More: [docs/SPIKE_COMPARE.md](docs/SPIKE_COMPARE.md) · [docs/DECISION.md](docs/DECISION.md) · [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)

### Architecture

```
AI client  --stdio MCP-->  packages/adapter  --ws://127.0.0.1:39741-->  packages/plugin (Blockbench)
```

| Package | Role |
|---------|------|
| `packages/shared` | Protocol, Zod, guides, capabilities, tests |
| `packages/adapter` | stdio MCP + WS listener (`get_guide` is local) |
| `packages/plugin` | Desktop plugin; BB 5.1 Undo/Texture/Canvas via host ports |

Each source file ≤ 500 lines (test guard).

### Requirements

- Node.js ≥ 22 · Blockbench desktop ≥ 5.1.0 · GeckoLib plugin for animated entities · MCP client (Cursor / Claude / …)

### Install

```bash
git clone https://github.com/SwagRee/BlockBenchMCP.git
cd BlockBenchMCP
npm install && npm run build && npm test
```

- Adapter: `packages/adapter/dist/cli.js`
- Plugin: `packages/plugin/dist/blockbench_mcp.js`

### Setup

```bash
node packages/adapter/dist/cli.js   # secret: dev-local-secret  port: 39741
```

Cursor: [`.vscode/mcp.json`](.vscode/mcp.json). In Blockbench: load the plugin file, match port/secret, call `health`.

### Quality workflow

1. `get_guide` → `modeling`
2. `create_project`
3. **Entities:** `scaffold_biped` · **Blocks:** `apply_geometry_batch`
4. Fix `check_model` errors
5. `auto_uv_cubes` → `paint_face_feature`
6. `capture_views` only if needed (256px JPEG)

### Tools (v1)

`health` · `get_guide` · `get_project_summary` · `check_model` · `capture_views` · `create_project` · `scaffold_biped` · `create_limb` · `apply_geometry_batch` · `mirror_elements` · `ensure_texture` · `auto_uv_cubes` · `paint_face_feature` · `upsert_animation` · `propose_scoped_directory` · `export_model`

Out of scope: `trigger_action` / `emulate_clicks` / `risky_eval`.

### Security

Loopback only · shared secret · scoped export after user confirm.

### License

MIT
