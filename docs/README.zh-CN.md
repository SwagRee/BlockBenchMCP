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

| 包       | 职责                                         |
| -------- | -------------------------------------------- |
| `shared` | Zod、指南、工具契约、测试                    |
| `plugin` | 桌面插件；内嵌 HTTP MCP + Host 端口调 BB API |

安全：仅绑定 `127.0.0.1`；请求需 Bearer；文件导出前须 `propose_scoped_directory` 用户确认。

## 范围（v1）

| 格式                                 | 优先级 |
| ------------------------------------ | ------ |
| `java_block`                         | P0     |
| `geckolib_model`（需 GeckoLib 插件） | P0     |
| Bedrock entity / geo                 | P1     |
| 通用自由建模 / 网格刷子              | 不做   |

**不做：** `trigger_action` / `emulate_clicks` / `risky_eval`、完整画笔 UI、Hytale 等。

## 主要工具

| 类别      | 工具                                                                                                                                                                                                                               |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 发现      | `health`、`list_formats`、`get_project_summary`、`get_elements`、`get_guide`                                                                                                                                                       |
| 检查      | `check_model`、`capture_views`（原生 MCP 图片预览）                                                                                                                                                                                |
| 项目      | `create_project`、`set_project_meta`                                                                                                                                                                                               |
| 几何      | `scaffold_biped`、`apply_geometry_batch`、`update_elements`、`create_limb`、`mirror_elements`                                                                                                                                      |
| UV 与贴图 | `ensure_texture`、`list_textures`、`assign_texture`、`auto_uv_cubes`、`pack_box_uv`、`get_uv_layout`、`get_uv_map`、`set_face_uv`、`resize_texture`、`shade_model_base`、`paint_face_features`、`paint_pixel_batch`、`get_texture` |
| 动画      | `upsert_animation`、`list_animations`、`delete_animation`                                                                                                                                                                          |
| 文件      | `propose_scoped_directory`、`save_project`、`export_model`                                                                                                                                                                         |

突变工具显式返回成功/失败；未知参数硬报错，不静默丢弃。优先 `check_model`，少刷截图。

现在已经补齐安全的“读取—修改—复查”闭环：`get_elements` 可读回精确几何和逐面 UV，
`update_elements` / `set_face_uv` 负责有边界的精修，然后可再次读取和预览确认。
`save_project` 会写出真实 `.bbmodel`，`export_model` 会调用当前格式的 Codec 编译；
两者都必须先确认会话目录，覆盖已有文件时必须显式传入 `overwrite: true`。

## 推荐出模流程

1. `get_guide(modeling)`
2. `create_project`
3. 实体：`scaffold_biped`／方块：`apply_geometry_batch`
4. 修完 error 再贴图
5. `pack_box_uv` → `get_uv_layout`（越界必须为 0，并检查重叠与密度）→ `get_uv_map` → 绘制 → `get_texture` / `capture_views`
6. 需要时再 `capture_views`

`capture_views` 和 `get_texture` 会返回原生 MCP 图片内容，兼容客户端可直接显示预览。
精细像素绘制可使用 `paint_pixel_batch`：一次提交多条逐面路径，支持方形／圆形笔刷，
默认裁剪在各自 UV 面内，并把整批操作合并为一次撤销。

`get_uv_layout` 会结构化返回 UV 岛、重叠对、纹素密度、翻转、旋转和边界；
`get_uv_map` 返回带标签的图集预览。逐面绘制现已正确处理旋转／翻转 UV；局部打包默认保护已有 UV 岛，
`resize_texture` 可按最近邻同步缩放位图和全部 UV。

先看 `health` / `get_project_summary` 的 `uv_mode`：`java_block` 为逐面（face），Bedrock 类多为箱型（box）。

## Agent Skill

像素风建模手册：[`skills/blockbench-pixel-art/openai`](../skills/blockbench-pixel-art/openai/SKILL.md)。

## 许可证

MIT
