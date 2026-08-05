import { randomUUID } from "node:crypto";
import { WebSocketServer, WebSocket, type RawData } from "ws";
import {
  PROTOCOL_VERSION,
  MIN_BLOCKBENCH_VERSION,
  makeError,
  pluginToAdapterSchema,
  isBlockbenchSupported,
  type ErrorPayload,
  type HelloMessage,
} from "@blockbench-mcp/shared";
import { secretsMatch } from "./secret.js";
import type { AdapterConfig } from "./config.js";

const CLOSE = {
  invalidHandshake: 4400,
  authFailed: 4401,
  handshakeTimeout: 4408,
  sessionExists: 4409,
  protocolMismatch: 4426,
} as const;

export interface PluginInfo {
  plugin_version: string;
  blockbench_version: string;
  capabilities: string[];
  blockbench_supported: boolean;
}

interface Pending {
  resolve: (v: { ok: boolean; result?: unknown; error?: ErrorPayload }) => void;
  timer: NodeJS.Timeout;
}

export class WsBridge {
  #server: WebSocketServer | null = null;
  #active: WebSocket | null = null;
  #pluginInfo: PluginInfo | null = null;
  #pending = new Map<string, Pending>();
  #listening = false;
  #sockets = new Set<WebSocket>();

  constructor(private readonly config: AdapterConfig) {}

  get listening(): boolean {
    return this.#listening;
  }

  get connected(): boolean {
    return this.#active !== null && this.#active.readyState === WebSocket.OPEN;
  }

  get pluginInfo(): PluginInfo | null {
    return this.#pluginInfo;
  }

  start(): Promise<void> {
    return new Promise((resolve, reject) => {
      const server = new WebSocketServer({
        host: "127.0.0.1",
        port: this.config.port,
        maxPayload: this.config.maxMessageBytes,
      });
      this.#server = server;
      server.once("listening", () => {
        this.#listening = true;
        resolve();
      });
      server.once("error", reject);
      server.on("connection", (socket) => this.#onConnection(socket));
    });
  }

  async stop(): Promise<void> {
    for (const [, p] of this.#pending) {
      clearTimeout(p.timer);
      p.resolve({
        ok: false,
        error: makeError("E_PLUGIN_DISCONNECTED", "Bridge shutting down"),
      });
    }
    this.#pending.clear();
    for (const s of this.#sockets) {
      try {
        s.close();
      } catch {
        /* ignore */
      }
    }
    this.#sockets.clear();
    this.#active = null;
    this.#pluginInfo = null;
    await new Promise<void>((resolve) => {
      if (!this.#server) return resolve();
      this.#server.close(() => resolve());
      this.#server = null;
      this.#listening = false;
    });
  }

  request(command: string, params: unknown): Promise<{
    ok: boolean;
    result?: unknown;
    error?: ErrorPayload;
  }> {
    if (!this.connected || !this.#active) {
      return Promise.resolve({
        ok: false,
        error: makeError(
          "E_PLUGIN_DISCONNECTED",
          "Blockbench plugin is not connected. Open Blockbench with the MCP plugin loaded.",
        ),
      });
    }
    const id = randomUUID();
    const socket = this.#active;
    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        this.#pending.delete(id);
        resolve({
          ok: false,
          error: makeError("E_TIMEOUT", `Command timed out: ${command}`),
        });
      }, this.config.requestTimeoutMs);
      this.#pending.set(id, { resolve, timer });
      socket.send(JSON.stringify({ type: "request", id, command, params }));
    });
  }

  #onConnection(socket: WebSocket): void {
    this.#sockets.add(socket);
    const handshakeTimer = setTimeout(() => {
      if (this.#active !== socket) socket.close(CLOSE.handshakeTimeout);
    }, this.config.handshakeTimeoutMs);

    socket.on("message", (raw) => this.#onMessage(socket, raw, handshakeTimer));
    socket.on("close", () => {
      clearTimeout(handshakeTimer);
      this.#sockets.delete(socket);
      if (this.#active === socket) {
        this.#active = null;
        this.#pluginInfo = null;
        for (const [id, p] of this.#pending) {
          clearTimeout(p.timer);
          this.#pending.delete(id);
          p.resolve({
            ok: false,
            error: makeError("E_PLUGIN_DISCONNECTED", "Plugin disconnected"),
          });
        }
      }
    });
  }

  #onMessage(
    socket: WebSocket,
    raw: RawData,
    handshakeTimer: NodeJS.Timeout,
  ): void {
    let parsed: unknown;
    try {
      parsed = JSON.parse(raw.toString());
    } catch {
      socket.close(CLOSE.invalidHandshake);
      return;
    }
    const msg = pluginToAdapterSchema.safeParse(parsed);
    if (!msg.success) {
      socket.close(CLOSE.invalidHandshake);
      return;
    }
    if (msg.data.type === "hello") {
      this.#handleHello(socket, msg.data, handshakeTimer);
      return;
    }
    if (msg.data.type === "response") {
      const pending = this.#pending.get(msg.data.id);
      if (!pending) return;
      clearTimeout(pending.timer);
      this.#pending.delete(msg.data.id);
      pending.resolve({
        ok: msg.data.ok,
        result: msg.data.result,
        error: msg.data.error,
      });
    }
  }

  #handleHello(
    socket: WebSocket,
    hello: HelloMessage,
    handshakeTimer: NodeJS.Timeout,
  ): void {
    clearTimeout(handshakeTimer);
    if (hello.protocol_version !== PROTOCOL_VERSION) {
      socket.close(CLOSE.protocolMismatch);
      return;
    }
    if (!secretsMatch(this.config.secret, hello.secret)) {
      socket.close(CLOSE.authFailed);
      return;
    }
    if (this.#active && this.#active !== socket) {
      socket.close(CLOSE.sessionExists);
      return;
    }
    this.#active = socket;
    this.#pluginInfo = {
      plugin_version: hello.plugin_version,
      blockbench_version: hello.blockbench_version,
      capabilities: hello.capabilities ?? [],
      blockbench_supported: isBlockbenchSupported(hello.blockbench_version),
    };
    socket.send(
      JSON.stringify({
        type: "hello_ack",
        protocol_version: PROTOCOL_VERSION,
        ok: true,
        min_blockbench_version: MIN_BLOCKBENCH_VERSION,
      }),
    );
  }
}
