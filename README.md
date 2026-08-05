# BlockBenchMCP

<details open>
<summary><strong>简体中文</strong>（点击展开 / 收起）</summary>

面向 Minecraft 的 **[Model Context Protocol](https://modelcontextprotocol.io/)** 桥接，对接 [Blockbench](https://www.blockbench.net/) 桌面版 **≥ 5.1.0**。

AI 客户端 → **stdio MCP 适配器** → 本机 WebSocket → **Blockbench 插件**（只有插件会改模型）。

意图级工具（`scaffold_biped`、`check_model` 等），不是把 UI 原样甩给模型。

### 要解决什么问题

常见 BB MCP：工具过碎、静默失败、截图炸上下文、关编辑器 MCP 就挂。

本仓库：适配器常驻；意图/批量工具；先 `check_model` 再截图；Host 端口隔离 BB API；P0 格式 `java_block` / `geckolib_model`。

详见：[docs/SPIKE_COMPARE.md](docs/SPIKE_COMPARE.md) · [docs/DECISION.md](docs/DECISION.md) · [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)

### 当前仓库怎么组织

```
AI 客户端  --stdio-->  packages/adapter  --ws://127.0.0.1:39741-->  packages/plugin
```

| 包 | 职责 |
|----|------|
| `shared` | 协议、Zod、指南、能力、测试 |
| `adapter` | stdio MCP + WS（`get_guide` 本地返回） |
| `plugin` | 桌面插件；经 `undo`/`textures`/`canvas`/`formats`/`preview` 调 BB 5.1 API |

单文件 ≤ 500 行。构建产物：`adapter/dist/cli.js`、`plugin/dist/blockbench_mcp.js`。

### 环境

Node ≥ 22 · Blockbench 桌面 ≥ 5.1.0 · 实体动画需 GeckoLib 插件 · MCP 客户端

### 安装

```bash
git clone https://github.com/SwagRee/BlockBenchMCP.git
cd BlockBenchMCP
npm install && npm run build && npm test
node packages/adapter/dist/cli.js
```

默认密钥 `dev-local-secret`、端口 `39741`。Blockbench 加载插件并与密钥一致后调用 `health`。

### 推荐出模流程

1. `get_guide(modeling)`
2. `create_project`
3. 实体：`scaffold_biped`（返回里带 `check`）／方块：`apply_geometry_batch`
4. 修完 error 再贴图
5. `auto_uv_cubes` → `paint_face_feature`
6. 需要时再 `capture_views`

### 完成度（诚实）

已具备：通路、意图工具、Host 端口、能力握手、契约测试、`scaffold_biped`。  
仍弱：GeckoLib 关键帧深度、codec 级导出、真机 E2E。

### 许可证

MIT

</details>

<details>
<summary><strong>English</strong> (click to expand / collapse)</summary>

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

</details>
