import { MIN_BLOCKBENCH_VERSION, PLUGIN_VERSION } from "@blockbench-mcp/shared";
import { readPluginConfig, registerPluginSettings } from "./config.js";
import { createSession, revokeScope } from "./session.js";
import { bbBlockbench, bbPlugin } from "./bb/globals.js";
import { startMcpHttp, type McpHandle } from "./mcp/server.js";
import { registerMcpActions } from "./mcp/actions.js";

let mcp: McpHandle | null = null;
let disposeActions: (() => void) | null = null;
const session = createSession();

function startServer(): void {
  if (mcp?.running()) return;
  mcp?.stop();
  const config = readPluginConfig();
  try {
    mcp = startMcpHttp(config, session);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    bbBlockbench().showQuickMessage?.(`MCP start failed: ${message}`, 5000);
    mcp = null;
  }
}

function stopServer(): void {
  mcp?.stop();
  mcp = null;
  bbBlockbench().showQuickMessage?.("MCP server stopped", 1500);
}

bbPlugin().register("blockbench_mcp", {
  title: "Blockbench MCP",
  author: "SwagRee",
  description:
    "In-process MCP for Minecraft modeling. Install the plugin, start the server, point Cursor at http://127.0.0.1:<port>/mcp.",
  icon: "smart_toy",
  version: PLUGIN_VERSION,
  variant: "desktop",
  min_version: MIN_BLOCKBENCH_VERSION,
  onload() {
    registerPluginSettings();
    disposeActions = registerMcpActions({
      getHandle: () => mcp,
      start: startServer,
      stop: stopServer,
    });
    const config = readPluginConfig();
    if (config.autostart) startServer();
    bbBlockbench().showQuickMessage?.(
      `Blockbench MCP ${PLUGIN_VERSION} (BB≥${MIN_BLOCKBENCH_VERSION})`,
      2500,
    );
  },
  onunload() {
    disposeActions?.();
    disposeActions = null;
    stopServer();
    revokeScope(session);
  },
});
