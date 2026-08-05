import { DEFAULTS } from "@blockbench-mcp/shared";

export interface PluginRuntimeConfig {
  port: number;
  secret: string;
}

export function readPluginConfig(): PluginRuntimeConfig {
  const portRaw = settings?.mcp_port?.value;
  const secretRaw = settings?.mcp_secret?.value;
  const port =
    typeof portRaw === "number"
      ? portRaw
      : typeof portRaw === "string"
        ? Number(portRaw)
        : DEFAULTS.wsPort;
  return {
    port: Number.isFinite(port) ? port : DEFAULTS.wsPort,
    secret:
      typeof secretRaw === "string" && secretRaw.length > 0
        ? secretRaw
        : "dev-local-secret",
  };
}

export function registerPluginSettings(): void {
  Settings.add?.("mcp_port", {
    value: DEFAULTS.wsPort,
    category: "general",
    name: "MCP Adapter Port",
    description: "Loopback WebSocket port for blockbench-mcp adapter",
    type: "number",
  });
  Settings.add?.("mcp_secret", {
    value: "dev-local-secret",
    category: "general",
    name: "MCP Shared Secret",
    description: "Must match BLOCKBENCH_MCP_SECRET / adapter --secret",
    type: "text",
  });
}
