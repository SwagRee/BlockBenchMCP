# Release artifacts

Prebuilt Blockbench desktop plugin for install without cloning the monorepo.

| File | Version | Install |
|------|---------|---------|
| [`blockbench_mcp.js`](./blockbench_mcp.js) | 0.1.0 | Blockbench → **File → Plugins → Load Plugin from File** |

After load, allow **network / net** permission. MCP listens at `http://127.0.0.1:39741/mcp` (Bearer `dev-local-secret` by default).

Cursor example:

```json
{
  "mcpServers": {
    "blockbench": {
      "url": "http://127.0.0.1:39741/mcp",
      "headers": {
        "Authorization": "Bearer dev-local-secret"
      }
    }
  }
}
```

Rebuild from source: `npm run build && npm run release:pack`
