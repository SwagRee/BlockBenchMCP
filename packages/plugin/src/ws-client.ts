import {
  PLUGIN_VERSION,
  PROTOCOL_VERSION,
  helloAckSchema,
  requestMessageSchema,
} from "@blockbench-mcp/shared";
import type { PluginRuntimeConfig } from "./config.js";
import type { SessionState } from "./session.js";
import { dispatchCommand } from "./dispatch.js";
import { toErrorPayload } from "./errors.js";
import { currentFormatId } from "./bb/elements.js";
import { bbBlockbench } from "./bb/globals.js";
import { getHost } from "./host/live.js";

export interface BridgeHandle {
  stop: () => void;
}

export function startBridge(
  config: PluginRuntimeConfig,
  session: SessionState,
): BridgeHandle {
  let socket: WebSocket | null = null;
  let stopped = false;
  let retryTimer: ReturnType<typeof setTimeout> | null = null;

  const connect = () => {
    if (stopped) return;
    const url = `ws://127.0.0.1:${config.port}`;
    try {
      socket = new WebSocket(url);
    } catch {
      scheduleRetry();
      return;
    }
    socket.addEventListener("open", () => {
      socket?.send(
        JSON.stringify({
          type: "hello",
          protocol_version: PROTOCOL_VERSION,
          secret: config.secret,
          plugin_version: PLUGIN_VERSION,
          blockbench_version: bbBlockbench().version ?? "unknown",
          capabilities: getHost().probeCapabilities(),
        }),
      );
    });
    socket.addEventListener("message", (ev) => {
      void onMessage(String(ev.data));
    });
    socket.addEventListener("close", () => {
      socket = null;
      scheduleRetry();
    });
    socket.addEventListener("error", () => {
      /* close handler retries */
    });
  };

  const scheduleRetry = () => {
    if (stopped) return;
    if (retryTimer) clearTimeout(retryTimer);
    retryTimer = setTimeout(connect, 2000);
  };

  const onMessage = async (raw: string) => {
    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return;
    }
    const ack = helloAckSchema.safeParse(parsed);
    if (ack.success) {
      bbBlockbench().showQuickMessage?.(
        `MCP connected (format=${currentFormatId() ?? "none"})`,
        2000,
      );
      return;
    }
    const req = requestMessageSchema.safeParse(parsed);
    if (!req.success || !socket || socket.readyState !== WebSocket.OPEN) return;
    const { id, command, params } = req.data;
    try {
      const result = await dispatchCommand(session, command, params);
      socket.send(JSON.stringify({ type: "response", id, ok: true, result }));
    } catch (err) {
      const error =
        err && typeof err === "object" && "payload" in err
          ? (err as { payload: ReturnType<typeof toErrorPayload> }).payload
          : toErrorPayload(err);
      socket.send(JSON.stringify({ type: "response", id, ok: false, error }));
    }
  };

  connect();

  return {
    stop: () => {
      stopped = true;
      if (retryTimer) clearTimeout(retryTimer);
      socket?.close();
      socket = null;
    },
  };
}
