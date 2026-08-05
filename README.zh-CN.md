# BlockBenchMCP

[English](README.md) | **中文**

面向 Minecraft 的 **[Model Context Protocol](https://modelcontextprotocol.io/)** 桥接，对接 [Blockbench](https://www.blockbench.net/) 桌面版（**≥ 5.1.0**）。

AI 客户端（Cursor / Claude 等）通过 **stdio MCP 适配器** 通信；适配器再经本机 WebSocket 连接 **Blockbench 插件**。只有插件进程会真正改模型。

> 不是「把 Blockbench UI 原样暴露给 LLM」的方案。工具面是**意图级**的，用更少、更安全的调用，更容易做出像样的低模。

---

## 项目要解决什么问题

常见 Blockbench MCP 往往把底层操作直接甩给模型（`place_cube`、`trigger_action`、全分辨率截图），结果是：

- 做一个角色要几十～上百次 tool call
- schema / 关键帧静默失败，看起来成功其实是空动画
- 截图撑爆上下文
- 关掉 Blockbench，MCP 一起挂掉

本仓库的选择：

| 决策 | 说明 |
|------|------|
| 传输 | Pattern B：stdio 适配器常驻；插件连 `ws://127.0.0.1` |
| 工具 | 意图 API：`scaffold_biped`、`create_limb`、`apply_geometry_batch`、`check_model` |
| 反馈 | 先结构化 `check_model`；截图默认 **256px JPEG** |
| 宿主端口 | 插件业务只经 `undo` / `textures` / `canvas` / `formats` / `preview` |
| v1 格式 | `java_block`、`geckolib_model`（实体需安装 GeckoLib 插件） |

调研对照：[docs/SPIKE_COMPARE.md](docs/SPIKE_COMPARE.md) · 范围决策：[docs/DECISION.md](docs/DECISION.md) · 架构：[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)

---

## 当前仓库结构（仔细说明）

### 总体数据流

```
AI 客户端（Cursor / Claude）
        │  stdio MCP
        ▼
┌──────────────────────────┐
│  packages/adapter        │  注册 MCP 工具、health、本地 get_guide
│  Node 进程               │  本机 WS 监听 + 共享密钥
└────────────┬─────────────┘
             │  ws://127.0.0.1:39741
             ▼
┌──────────────────────────┐
│  packages/plugin         │  命令分发 + BbHost 端口
│  Blockbench 桌面插件     │  按 BB 5.1 使用 Undo / Texture / Canvas
└──────────────────────────┘
```

### 三个包各自干什么

| 包 | 职责 | 关键入口 |
|----|------|----------|
| [`packages/shared`](packages/shared) | 协议版本、错误码、Zod 参数/结果、命令注册表、建模指南文案、能力枚举、契约测试 | `src/commands.ts`、`src/wire.ts`、`src/guides.ts` |
| [`packages/adapter`](packages/adapter) | stdio MCP 服务；校验参数后转发插件；`get_guide` 本地应答（不依赖 BB）；截图结果附加 image content | `src/cli.ts`、`src/mcp-server.ts`、`src/ws-bridge.ts` |
| [`packages/plugin`](packages/plugin) | 桌面插件；握手探测 capabilities；执行几何/贴图/检查/截图 | `src/main.ts`、`src/dispatch.ts`、`src/host/` |

构建产物：

- 适配器：`packages/adapter/dist/cli.js`（给 MCP 客户端启动）
- 插件：`packages/plugin/dist/blockbench_mcp.js`（在 Blockbench 里「从文件加载」）

源码单文件 **≤ 500 行**（测试护栏）。插件侧宿主说明见 [`packages/plugin/src/host/README.md`](packages/plugin/src/host/README.md)。

### 插件 Host 端口（基建细分）

命令实现不直接乱碰全局，而是走窄端口：

| 端口 | 作用 |
|------|------|
| `undo` | `initEdit` → 工作 → 成功 `finishEdit`（带回新建元素）/ 失败 `cancelEdit(true)` |
| `textures` | `Texture.fromDataURL().add(false)` + `texture.edit()` 绘制 |
| `canvas` | `Canvas.updateView({ elements, element_aspects })` |
| `formats` | 创建 `java_block` / `geckolib_model`，探测 GeckoLib |
| `preview` | Screencam 低分辨率多视角截图 |

### 文档与调研目录

| 路径 | 内容 |
|------|------|
| `docs/DECISION.md` | 自研而非 fork 的决策、P0 格式、非目标 |
| `docs/ARCHITECTURE.md` | 拓扑、工具面、截图/check 契约、错误码 |
| `docs/SPIKE_COMPARE.md` | 对 jasonjgardner / adhi / sosadly 的失败模式对照 |
| `research/vendors/` | 调研时拉取的上游源码摘录（只读参考） |

---

## 环境要求

- **Node.js ≥ 22**
- **Blockbench 桌面版 ≥ 5.1.0**（插件声明 `min_version`）
- 做带骨骼动画的实体：需安装 [GeckoLib Blockbench 插件](https://github.com/bernie-g/geckolib)
- 支持 MCP 的客户端（Cursor、Claude Code/Desktop 等）

---

## 安装与构建

```bash
git clone https://github.com/SwagRee/BlockBenchMCP.git
cd BlockBenchMCP
npm install
npm run build
npm test
```

---

## 使用步骤

### 1. 启动 / 注册适配器

默认密钥：`dev-local-secret` · 默认端口：`39741`

```bash
node packages/adapter/dist/cli.js
# 可选：--port 39741 --secret your-secret
# 环境变量：BLOCKBENCH_MCP_SECRET、BLOCKBENCH_MCP_PORT
```

**Cursor** — 仓库内 [`.vscode/mcp.json`](.vscode/mcp.json)（按需改绝对路径）：

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

**Claude Code** 示例：

```bash
claude mcp add blockbench -e BLOCKBENCH_MCP_SECRET=dev-local-secret -- node /绝对路径/BlockBenchMCP/packages/adapter/dist/cli.js
```

### 2. 在 Blockbench 加载插件

1. 打开**桌面版** Blockbench → **文件 → 插件 → 从文件加载插件**
2. 选择 `packages/plugin/dist/blockbench_mcp.js`
3. **设置 → 通用**：MCP Adapter Port 填 `39741`，MCP Shared Secret 与适配器一致
4. 调用 MCP 工具 `health`，应看到 `plugin_connected: true`、`blockbench_supported: true`

握手还会上报 `capabilities`（geometry、textures、screenshots、geckolib 等）。

---

## 推荐 Agent 工作流（出模质量）

**不要跳过 1–3 步。**

1. `get_guide`，topic 用 `modeling`（再按需 `geckolib` / `java_block`）
2. `create_project` 选定格式
3. **实体：** 优先 `scaffold_biped`（标准关节枢轴 + 贴图；返回值里带 `check`）  
   **方块：** 用 `apply_geometry_batch`
4. 看 `check_model` / 嵌入的 check —— **先修完 error 再贴图**
5. `auto_uv_cubes` → `paint_face_feature`（眼睛、镶边等，面局部 UV）
6. 仍需要看图时才 `capture_views`（默认最长边 **256**，JPEG）
7. 可选：`upsert_animation`；导出前 `propose_scoped_directory` → `export_model`

---

## MCP 工具一览（v1）

### 会话 / 观测

| 工具 | 作用 |
|------|------|
| `health` | 适配器是否在听、插件是否连上、版本与能力 |
| `get_guide` | 建模/贴图/动画/格式 playbook（适配器本地返回，可不连 BB） |
| `get_project_summary` | 紧凑 outliner + 计数（优先于截图） |
| `check_model` | 空组、零体积、坏枢轴、未贴图面、重叠等 |
| `capture_views` | 低分辨率多视角预览图 |

### 几何 / 贴图

| 工具 | 作用 |
|------|------|
| `create_project` | `java_block` 或 `geckolib_model` |
| `scaffold_biped` | 人形最佳起点：正确关节枢轴 |
| `create_limb` | 关节处建骨骼+方块；可 X 镜像 |
| `apply_geometry_batch` | 一批创建/删除，**一次 Undo**，禁止半成功 |
| `mirror_elements` | 镜像 + left/right 智能改名 |
| `ensure_texture` | 创建或复用纯色贴图 |
| `auto_uv_cubes` | Box / Face 自动 UV |
| `paint_face_feature` | 在**面局部 UV** 上画矩形/椭圆/填充 |

### 动画 / 文件

| 工具 | 作用 |
|------|------|
| `upsert_animation` | 简单骨骼动画创建/替换（依赖当前格式） |
| `propose_scoped_directory` | 弹窗请用户批准会话目录 |
| `export_model` | 仅写入已批准目录（覆盖必须显式 `overwrite: true`） |

**v1 明确不做：** `trigger_action`、`emulate_clicks`、`risky_eval`、完整笔刷套件、网格雕刻、Hytale/PBR 一等公民工具。

---

## 有利于「生成效果好」的设计原则

1. **枢轴在关节** — `scaffold_biped` / `create_limb` 从髋/肩往下挂肢，而不是立方体中心  
2. **失败要响** — Zod `.strict()`；未知字段拒绝；批次失败整批中止  
3. **Undo 按 BB 5.1** — 失败 `cancelEdit`；成功 `finishEdit` 带上新建元素  
4. **反馈要便宜** — 先 `check_model` / summary，再截图  
5. **职责单一** — Host 端口把 Blockbench 全局 API 与命令逻辑隔开  

---

## 脚本

| 命令 | 作用 |
|------|------|
| `npm run build` | 依次构建 shared → adapter → plugin |
| `npm test` | 协议/冒烟契约 + ≤500 行护栏 |
| `npm run typecheck` | 全 workspace 类型检查 |
| `npm start` | 启动适配器 CLI |

---

## 安全说明

- WebSocket 只绑 **127.0.0.1**
- 必须共享密钥（默认 `dev-local-secret` 仅适合本机开发，共享环境请更换）
- 导出文件前必须经用户确认的 `propose_scoped_directory`

---

## 当前完成度（诚实说明）

**已具备：** 完整通路、意图工具面、Host 端口、BB 5.1 Undo/Texture 路径、能力握手、契约测试、质量向 guide / `scaffold_biped`。

**仍偏弱 / 需真机验证：** GeckoLib 关键帧深度、codec 级导出、全分辨率之外的更多贴图工作流，以及在你本机 Blockbench 5.1.x 上的端到端验收。

建议验收顺序：`health` → `create_project(geckolib_model)` → `scaffold_biped` → 看返回的 `check` → `capture_views`。

---

## 许可证

MIT
