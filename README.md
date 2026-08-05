# BlockBenchMCP

<details open>
<summary><strong>简体中文</strong>（点击展开 / 收起）</summary>

面向 Minecraft 的 **[Model Context Protocol](https://modelcontextprotocol.io/)**，以 **纯 Blockbench 桌面插件** 形式运行（≥ 5.1.0）。

安装插件 → 插件在本机 `127.0.0.1` 拉起 HTTP MCP → Cursor / 其他客户端用 URL 连接。**不再需要单独的 Node 适配器进程。**

意图级工具（`scaffold_biped`、`check_model` 等），不是把 UI 原样甩给模型。

### 安装（插件）

**成品（推荐）：** 从 [GitHub Releases](https://github.com/SwagRee/BlockBenchMCP/releases) 下载 `blockbench_mcp.js`。

从源码构建：

```bash
git clone https://github.com/SwagRee/BlockBenchMCP.git
cd BlockBenchMCP
npm install && npm run release:pack
```

会在本地生成 `release/blockbench_mcp.js`（该目录不进仓库）。

1. Blockbench 桌面版：**File → Plugins → Load Plugin from File**  
   选择刚下载或本地打包出的 `blockbench_mcp.js`
2. 首次启动若弹出 **network / net** 权限，选 Always allow
3. 默认自动监听：`http://127.0.0.1:39741/mcp`  
   也可 **Tools → Start / Stop MCP Server**
4. 设置里可改端口 / Bearer 密钥（默认 `dev-local-secret`）

### 连接 Cursor

在 Cursor MCP 配置里加上（URL + Bearer）：

```json
{
  "url": "http://127.0.0.1:39741/mcp",
  "headers": { "Authorization": "Bearer dev-local-secret" }
}
```

先开 Blockbench（插件已加载），再在 Cursor 里启用该 MCP，然后调用 `health`。

> 关 Blockbench = MCP 停用（这是纯插件方案的取舍）。

### 架构

```
AI 客户端  --HTTP MCP-->  packages/plugin（Blockbench 内）
```

| 包 | 职责 |
|----|------|
| `shared` | Zod、指南、工具契约、测试 |
| `plugin` | 桌面插件；内嵌 HTTP MCP + Host 端口调 BB API |
| `adapter` | **遗留** stdio 方案（默认不再构建） |

### 推荐出模流程

1. `get_guide(modeling)`
2. `create_project`
3. 实体：`scaffold_biped`／方块：`apply_geometry_batch`
4. 修完 error 再贴图
5. `pack_box_uv` → `shade_model_base` → `paint_face_features`
6. 需要时再 `capture_views`

### 许可证

MIT

</details>

<details>
<summary><strong>English</strong> (click to expand / collapse)</summary>

Minecraft-oriented **[Model Context Protocol](https://modelcontextprotocol.io/)** as a **pure Blockbench desktop plugin** (≥ 5.1.0).

Install the plugin → it hosts loopback HTTP MCP → point Cursor at the URL. **No separate Node adapter process.**

### Install

**Artifact (recommended):** download `blockbench_mcp.js` from [GitHub Releases](https://github.com/SwagRee/BlockBenchMCP/releases).

From source:

```bash
git clone https://github.com/SwagRee/BlockBenchMCP.git
cd BlockBenchMCP
npm install && npm run release:pack
```

This writes local `release/blockbench_mcp.js` (not tracked in git).

1. Blockbench desktop: **File → Plugins → Load Plugin from File** → the downloaded or locally packed `blockbench_mcp.js`
2. Allow **network / net** permission when prompted
3. Autostart listens on `http://127.0.0.1:39741/mcp` (or **Tools → Start MCP Server**)
4. Settings: port + Bearer secret (default `dev-local-secret`)

### Cursor

Add this MCP config (URL + Bearer). Open Blockbench first, then enable MCP and call `health`.

```json
{
  "url": "http://127.0.0.1:39741/mcp",
  "headers": { "Authorization": "Bearer dev-local-secret" }
}
```

Closing Blockbench stops MCP — expected for in-process hosting.

### Architecture

```
AI client  --HTTP MCP-->  packages/plugin (inside Blockbench)
```

Legacy stdio adapter remains under `packages/adapter` but is not part of the default build (`npm run build:legacy-adapter`).

### License

MIT

</details>
