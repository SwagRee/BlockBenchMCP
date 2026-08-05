import { MIN_BLOCKBENCH_VERSION, PLUGIN_VERSION } from "@blockbench-mcp/shared";
import { readPluginConfig, registerPluginSettings } from "./config.js";
import { createSession, revokeScope } from "./session.js";
import { startBridge, type BridgeHandle } from "./ws-client.js";
import { bbBlockbench, bbPlugin } from "./bb/globals.js";

let bridge: BridgeHandle | null = null;
const session = createSession();

bbPlugin().register("blockbench_mcp", {
  title: "Blockbench MCP",
  author: "BlockBenchMCP",
  description:
    "AI modeling bridge: stdio adapter over loopback WebSocket. Intent tools for quality Minecraft models.",
  icon: "smart_toy",
  version: PLUGIN_VERSION,
  variant: "desktop",
  min_version: MIN_BLOCKBENCH_VERSION,
  onload() {
    registerPluginSettings();
    const config = readPluginConfig();
    bridge = startBridge(config, session);
    bbBlockbench().showQuickMessage?.(
      `MCP ${PLUGIN_VERSION} (BB≥${MIN_BLOCKBENCH_VERSION}) → :${config.port}`,
      3000,
    );
  },
  onunload() {
    bridge?.stop();
    bridge = null;
    revokeScope(session);
  },
});
