<p align="right">
  <a href="./README.md">English</a> |
  <a href="./docs/README.zh-CN.md">简体中文</a>
</p>

# BlockBenchMCP

Minecraft-oriented **[Model Context Protocol](https://modelcontextprotocol.io/)** as a **pure Blockbench desktop plugin** (≥ 5.1.0).

Install the plugin → it hosts loopback HTTP MCP → point Cursor at the URL. **No separate Node adapter.** Closing Blockbench stops MCP.

Intent-level tools (`scaffold_biped`, `check_model`, …) — not a thin UI mirror.

## Install

**Artifact (recommended):** download `blockbench_mcp.js` from [GitHub Releases](https://github.com/SwagRee/BlockBenchMCP/releases).

From source:

```bash
git clone https://github.com/SwagRee/BlockBenchMCP.git
cd BlockBenchMCP
npm install && npm run build
```

Output: `packages/plugin/dist/blockbench_mcp.js`.

1. Blockbench: **File → Plugins → Load Plugin from File**
2. Allow **network / net** when prompted
3. Listens on `http://127.0.0.1:39741/mcp` (or Tools → Start / Stop MCP Server)
4. Settings: port + Bearer (default `dev-local-secret`)

## Cursor

```json
{
  "url": "http://127.0.0.1:39741/mcp",
  "headers": { "Authorization": "Bearer dev-local-secret" }
}
```

Open Blockbench first, enable MCP, call `health`.

## Architecture

```
AI client  --HTTP MCP-->  packages/plugin (inside Blockbench)
```

| Package  | Role                                             |
| -------- | ------------------------------------------------ |
| `shared` | Zod, guides, tool contracts, tests               |
| `plugin` | Desktop plugin; in-process HTTP MCP + Host ports |

Security: loopback only; Bearer required; file export needs `propose_scoped_directory` confirmation.

## Scope (v1)

| Format                                   | Priority     |
| ---------------------------------------- | ------------ |
| `java_block`                             | P0           |
| `geckolib_model` (needs GeckoLib plugin) | P0           |
| Bedrock entity / geo                     | P1           |
| Generic free-model / mesh brush          | Out of scope |

**Non-goals:** `trigger_action` / `emulate_clicks` / `risky_eval`, full paint UI, Hytale, etc.

## Main tools

| Area         | Tools                                                                                                                                                                             |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Discover     | `health`, `list_formats`, `get_project_summary`, `get_elements`, `get_guide`                                                                                                      |
| Review       | `check_model`, `capture_views` (native MCP image previews)                                                                                                                        |
| Project      | `create_project`, `set_project_meta`                                                                                                                                              |
| Geometry     | `scaffold_biped`, `apply_geometry_batch`, `update_elements`, `create_limb`, `mirror_elements`                                                                                     |
| UV & texture | `ensure_texture`, `list_textures`, `assign_texture`, `auto_uv_cubes`, `pack_box_uv`, `set_face_uv`, `shade_model_base`, `paint_face_features`, `paint_pixel_batch`, `get_texture` |
| Animation    | `upsert_animation`, `list_animations`, `delete_animation`                                                                                                                         |
| Files        | `propose_scoped_directory`, `save_project`, `export_model`                                                                                                                        |

Mutations return explicit success/failure; unknown params hard-error. Prefer `check_model` over vision spam.

The safe edit loop is complete: inspect exact element geometry and per-face UVs with
`get_elements`, make bounded changes with `update_elements` / `set_face_uv`, then read
back and review. `save_project` writes a real `.bbmodel`; `export_model` compiles through
the active format codec. Both require an approved scoped directory and explicit overwrite.

## Workflow

1. `get_guide(modeling)`
2. `create_project`
3. Entities: `scaffold_biped` / blocks: `apply_geometry_batch`
4. Fix errors, then texture
5. `pack_box_uv` → `shade_model_base` → `paint_face_features` (`pack_box_uv` / geometry follow project `uv_mode`: box vs per-face)
6. `capture_views` only if needed

`capture_views` and `get_texture` return native MCP image content so compatible
clients can render previews directly. For crisp pixel work, `paint_pixel_batch`
accepts multiple face-local paths with square or circle brushes, clips them to
their UV faces by default, and commits the whole batch as one undo step.

Check `uv_mode` on `health` / `get_project_summary`: `java_block` → face; Bedrock-style → box.

## Agent skill

Pixel-art modeling playbook: [`skills/blockbench-pixel-art/openai`](./skills/blockbench-pixel-art/openai/SKILL.md).

## License

MIT
