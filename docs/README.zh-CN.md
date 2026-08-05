<p align="right">
  <a href="../README.md">English</a> |
  <a href="./README.zh-CN.md">简体中文</a>
</p>

# BlockBenchMCP

面向 Minecraft 的 **[Model Context Protocol](https://modelcontextprotocol.io/)**，以 **纯 Blockbench 桌面插件** 形式运行（≥ 5.1.0）。

安装插件 → 插件在本机 `127.0.0.1` 拉起 HTTP MCP → Cursor / 其他客户端用 URL 连接。**不需要单独的 Node 适配器进程。**关 Blockbench = MCP 停用。

意图级工具（`scaffold_biped`、`check_model` 等），不是把 UI 原样甩给模型。

## 安装

**成品（推荐）：** 从 [GitHub Releases](https://github.com/SwagRee/BlockBenchMCP/releases) 下载 `blockbench_mcp.js`。

从源码构建：

```bash
git clone https://github.com/SwagRee/BlockBenchMCP.git
cd BlockBenchMCP
npm install && npm run build
```

产物：`packages/plugin/dist/blockbench_mcp.js`。

1. Blockbench：**File → Plugins → Load Plugin from File**（下载文件或构建产物）
2. 首次若弹出 **network / net** 权限，选 Always allow
3. 默认监听：`http://127.0.0.1:39741/mcp`（也可 Tools → Start / Stop MCP Server）
4. 设置可改端口 / Bearer（默认 `dev-local-secret`）

## 连接 Cursor

```json
{
  "url": "http://127.0.0.1:39741/mcp",
  "headers": { "Authorization": "Bearer dev-local-secret" }
}
```

先开 Blockbench（插件已加载），再启用 MCP，调用 `health`。

## 架构

```
AI 客户端  --HTTP MCP-->  packages/plugin（Blockbench 内）
```

| 包 | 职责 |
|----|------|
| `shared` | Zod、指南、工具契约、测试 |
| `plugin` | 桌面插件；内嵌 HTTP MCP + Host 端口调 BB API |

安全：仅绑定 `127.0.0.1`；请求需 Bearer；文件导出前须 `propose_scoped_directory` 用户确认。

## 范围（v1）

| 格式 | 优先级 |
|------|--------|
| `java_block` | P0 |
| `geckolib_model`（需 GeckoLib 插件） | P0 |
| Bedrock entity / geo | P1 |
| 通用自由建模 / 网格刷子 | 不做 |

**不做：** `trigger_action` / `emulate_clicks` / `risky_eval`、完整画笔 UI、Hytale 等。

## 主要工具

| 类别 | 工具 |
|------|------|
| 观察 | `health`、`get_project_summary`、`check_model`、`capture_views`（默认低分辨率）、`get_guide` |
| 几何 | `create_project`、`scaffold_biped`、`apply_geometry_batch`、`create_limb`、`mirror_elements` |
| 贴图 | `ensure_texture`、`pack_box_uv`、`shade_model_base`、`paint_face_features`、`get_texture`、`auto_uv_cubes` |
| 导出 | `propose_scoped_directory`、`export_model`、`upsert_animation` |

突变工具显式返回成功/失败；未知参数硬报错，不静默丢弃。优先 `check_model`，少刷截图。

## 推荐出模流程

1. `get_guide(modeling)`
2. `create_project`
3. 实体：`scaffold_biped`／方块：`apply_geometry_batch`
4. 修完 error 再贴图
5. `pack_box_uv` → `shade_model_base` → `paint_face_features`（按项目 `uv_mode` 自动选箱型或逐面）
6. 需要时再 `capture_views`

先看 `health` / `get_project_summary` 的 `uv_mode`：`java_block` 为逐面（face），Bedrock 类多为箱型（box）。

## Agent Skill

像素风建模手册：[`skills/blockbench-pixel-art`](../skills/blockbench-pixel-art/SKILL.md)。

## 许可证

MIT
