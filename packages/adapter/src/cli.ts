#!/usr/bin/env node
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { loadConfig } from "./config.js";
import { buildMcpServer } from "./mcp-server.js";
import { WsBridge } from "./ws-bridge.js";

async function main(): Promise<void> {
  const config = loadConfig(process.argv.slice(2));
  const bridge = new WsBridge(config);
  try {
    await bridge.start();
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`[blockbench-mcp] WS listen failed on 127.0.0.1:${config.port}: ${msg}`);
    process.exit(1);
  }
  console.error(
    `[blockbench-mcp] listening ws://127.0.0.1:${config.port} (secret from env/config; default dev-local-secret)`,
  );

  const server = buildMcpServer({ bridge, config });
  const transport = new StdioServerTransport();
  await server.connect(transport);

  const shutdown = async () => {
    await bridge.stop();
    process.exit(0);
  };
  process.on("SIGINT", () => void shutdown());
  process.on("SIGTERM", () => void shutdown());
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
