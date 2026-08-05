import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import {
  ADAPTER_VERSION,
  COMMAND_SPECS,
  PROTOCOL_VERSION,
  resolveGuide,
  type CommandName,
  type CommandSpec,
  type ErrorPayload,
  type GuideTopic,
} from "@blockbench-mcp/shared";
import type { WsBridge } from "./ws-bridge.js";
import type { AdapterConfig } from "./config.js";
import { z } from "zod";

type Content = Array<
  | { type: "text"; text: string }
  | { type: "image"; data: string; mimeType: string }
>;

function envelope(
  ok: boolean,
  summary: string,
  result?: unknown,
  error?: ErrorPayload,
): { content: Content; isError?: boolean } {
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify({ summary, ok, result, error }, null, 2),
      },
    ],
    ...(ok ? {} : { isError: true }),
  };
}

function attachImages(
  base: { content: Content; isError?: boolean },
  result: unknown,
): { content: Content; isError?: boolean } {
  if (!result || typeof result !== "object") return base;
  const views = (result as { views?: unknown }).views;
  if (!Array.isArray(views)) return base;
  const images: Content = [];
  for (const v of views) {
    if (!v || typeof v !== "object") continue;
    const dataUrl = (v as { data_url?: string }).data_url;
    if (!dataUrl?.startsWith("data:")) continue;
    const m = /^data:([^;]+);base64,(.+)$/.exec(dataUrl);
    if (!m) continue;
    images.push({ type: "image", data: m[2], mimeType: m[1] });
  }
  if (images.length === 0) return base;
  return { ...base, content: [...base.content, ...images] };
}

export function buildMcpServer(options: {
  bridge: WsBridge;
  config: AdapterConfig;
}): McpServer {
  const { bridge, config } = options;
  const server = new McpServer({
    name: "blockbench-mcp",
    version: ADAPTER_VERSION,
  });

  server.registerTool(
    "health",
    {
      description:
        "Adapter status: WS listening, plugin connected, versions. Works while Blockbench is closed.",
      inputSchema: z.object({}).strict(),
    },
    async () =>
      envelope(true, bridge.connected ? "Plugin connected" : "Waiting for plugin", {
        protocol_version: PROTOCOL_VERSION,
        adapter_version: ADAPTER_VERSION,
        port: config.port,
        ws_listening: bridge.listening,
        plugin_connected: bridge.connected,
        plugin: bridge.pluginInfo,
      }),
  );

  for (const [name, spec] of Object.entries(COMMAND_SPECS) as Array<
    [CommandName, CommandSpec]
  >) {
    const schema = spec.params as z.ZodTypeAny;
    server.registerTool(
      name,
      {
        description: spec.description,
        inputSchema: schema,
      },
      async (params: unknown) => {
        const parsed = schema.safeParse(params ?? {});
        if (!parsed.success) {
          return envelope(false, "Invalid parameters", undefined, {
            code: "E_INVALID_PARAM",
            message: parsed.error.message,
            details: parsed.error.flatten(),
          });
        }
        // Guides are local — no Blockbench required.
        if (name === "get_guide") {
          const topic = (parsed.data as { topic?: GuideTopic }).topic;
          const guide = resolveGuide(topic);
          return envelope(true, `Guide: ${guide.topic}`, guide);
        }
        const reply = await bridge.request(name, parsed.data);
        if (!reply.ok) {
          return envelope(
            false,
            reply.error?.message ?? "Command failed",
            undefined,
            reply.error,
          );
        }
        const base = envelope(true, `OK: ${name}`, reply.result);
        return name === "capture_views" ? attachImages(base, reply.result) : base;
      },
    );
  }

  return server;
}
