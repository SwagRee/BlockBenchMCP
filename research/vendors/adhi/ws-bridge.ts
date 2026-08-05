// Loopback WebSocket bridge between the MCP adapter and the Blockbench plugin.
// Owns the listener, shared-secret authentication, the single-active-plugin
// lock, heartbeats, and request/response correlation. The plugin connects as
// a WebSocket client; this side never initiates connections.
import { createHash, randomUUID, timingSafeEqual } from 'node:crypto';

import { WebSocketServer, WebSocket, type RawData } from 'ws';

import {
  PROTOCOL_VERSION,
  COMMAND_SPECS,
  pluginToAdapterMessageSchema,
  scopeStatusSchema,
  makeError,
  type ErrorPayload,
  type HelloMessage,
  type ScopeStatus,
} from '../shared/protocol.js';
import type { SetupIssue } from './config.js';

// Application close codes (4000-range is reserved for applications by RFC 6455).
export const CLOSE_CODES = {
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
  scope: ScopeStatus | null;
}

export interface BridgeOptions {
  port: number;
  secret: string | null;
  requestTimeoutMs: number;
  heartbeatIntervalMs: number;
  heartbeatMissLimit: number;
  handshakeTimeoutMs: number;
  maxMessageBytes: number;
  /** Receives sanitized log lines only; secrets must never reach this. */
  log: (line: string) => void;
}

export interface BridgeRequestResult {
  ok: boolean;
  result?: unknown;
  error?: ErrorPayload;
}

interface PendingRequest {
  resolve: (value: BridgeRequestResult) => void;
  timer: NodeJS.Timeout;
}

function secretsMatch(expected: string, provided: string): boolean {
  // Hash both sides so timingSafeEqual gets equal-length buffers.
  const a = createHash('sha256').update(expected, 'utf8').digest();
  const b = createHash('sha256').update(provided, 'utf8').digest();
  return timingSafeEqual(a, b);
}

export function listenerSetupIssue(error: NodeJS.ErrnoException, port: number): SetupIssue {
  return error.code === 'EADDRINUSE'
    ? { code: 'E_PORT_IN_USE', message: `WebSocket port 127.0.0.1:${port} is already in use.` }
    : {
        code: 'E_LISTENER_FAILED',
        message: `WebSocket listener failed to start on 127.0.0.1:${port} (${error.code ?? 'unknown error'}).`,
      };
}

export class WsBridge {
  readonly #options: BridgeOptions;
  #server: WebSocketServer | null = null;
  #active: WebSocket | null = null;
  #pluginInfo: PluginInfo | null = null;
  #pending = new Map<string, PendingRequest>();
  #heartbeatTimer: NodeJS.Timeout | null = null;
  #heartbeatMisses = 0;
  #listening = false;
  #sockets = new Set<WebSocket>();
  #handshakeTimers = new Map<WebSocket, NodeJS.Timeout>();

  constructor(options: BridgeOptions) {
    this.#options = options;
  }

  get listening(): boolean {
    return this.#listening;
  }

  get connected(): boolean {
    return this.#active !== null && this.#active.readyState === WebSocket.OPEN;
  }

  get pluginInfo(): PluginInfo | null {
    return this.#pluginInfo;
  }

  /** Start the loopback listener. Resolves with a setup issue instead of throwing. */
  start(): Promise<{ ok: true } | { ok: false; issue: SetupIssue }> {
    if (this.#options.secret === null) {
      return Promise.resolve({
        ok: false,
        issue: {
          code: 'E_SECRET_MISSING',
          message:
            'No shared secret is configured; the plugin listener was not started. Set --secret, BLOCKBENCH_MCP_SECRET, or the config file secret.',
        },
      });
    }
    return new Promise((resolve) => {
      const server = new WebSocketServer({
        host: '127.0.0.1',
        port: this.#options.port,
        maxPayload: this.#options.maxMessageBytes,
      });
      const onListenError = (error: NodeJS.ErrnoException) => {
        const issue = listenerSetupIssue(error, this.#options.port);
        resolve({ ok: false, issue });
      };
      server.once('error', onListenError);
      server.once('listening', () => {
        server.off('error', onListenError);
        server.on('error', (error) => this.#options.log(`WebSocket server error: ${String(error)}`));
        this.#server = server;
        this.#listening = true;
        this.#options.log(`Plugin WebSocket listener bound to 127.0.0.1:${this.#options.port}`);
        server.on('connection', (socket) => this.#handleConnection(socket));
        resolve({ ok: true });
      });
    });
  }

  async stop(): Promise<void> {
    this.#detachActive('adapter shutdown');
    const server = this.#server;
    this.#server = null;
    this.#listening = false;
    if (server !== null) {
      for (const timer of this.#handshakeTimers.values()) clearTimeout(timer);
      this.#handshakeTimers.clear();
      for (const socket of this.#sockets) socket.terminate();
      await new Promise<void>((resolve) => server.close(() => resolve()));
    }
  }

  /** Relay one typed operation request to the authenticated plugin session. */
  request(command: string, params: unknown, timeoutMs?: number): Promise<BridgeRequestResult> {
    const active = this.#active;
    if (active === null || active.readyState !== WebSocket.OPEN) {
      return Promise.resolve({
        ok: false,
        error: makeError('E_PLUGIN_NOT_CONNECTED', 'Blockbench plugin is not connected.'),
      });
    }
    const id = randomUUID();
    const timeout = timeoutMs ?? this.#options.requestTimeoutMs;
    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        this.#pending.delete(id);
        const spec = command in COMMAND_SPECS ? COMMAND_SPECS[command as keyof typeof COMMAND_SPECS] : undefined;
        const details = spec?.mutates
          ? {
              execution_state: 'unknown',
              retry: 'Do not retry automatically; the plugin may have completed the command.',
              reconciliation: this.#reconciliationFor(command),
            }
          : undefined;
        resolve({
          ok: false,
          error: makeError('E_TIMEOUT', `The plugin did not answer within ${timeout} ms (command ${command}).`, details),
        });
      }, timeout);
      this.#pending.set(id, { resolve, timer });
      try {
        active.send(JSON.stringify({ type: 'request', id, command, params }));
      } catch {
        clearTimeout(timer);
        this.#pending.delete(id);
        resolve({ ok: false, error: makeError('E_PLUGIN_NOT_CONNECTED', 'Plugin disconnected before the request could be sent.') });
        this.#detachActive('request send failed');
      }
    });
  }

  #handleConnection(socket: WebSocket): void {
    this.#sockets.add(socket);
    let authenticated = false;
    const handshakeTimer = setTimeout(() => {
      if (!authenticated) {
        socket.close(CLOSE_CODES.handshakeTimeout, 'handshake_timeout');
      }
    }, this.#options.handshakeTimeoutMs);
    this.#handshakeTimers.set(socket, handshakeTimer);

    socket.on('message', (data: RawData) => {
      if (!authenticated) {
        const hello = this.#parseHello(data);
        if (hello === null) {
          clearTimeout(handshakeTimer);
          socket.close(CLOSE_CODES.invalidHandshake, 'invalid_handshake');
          return;
        }
        if (hello.protocol_version !== PROTOCOL_VERSION) {
          clearTimeout(handshakeTimer);
          socket.close(CLOSE_CODES.protocolMismatch, 'protocol_mismatch');
          return;
        }
        if (!secretsMatch(this.#options.secret!, hello.secret)) {
          clearTimeout(handshakeTimer);
          this.#options.log('Rejected a plugin connection: shared secret mismatch.');
          socket.close(CLOSE_CODES.authFailed, 'auth_failed');
          return;
        }
        if (this.#active !== null) {
          clearTimeout(handshakeTimer);
          this.#options.log('Rejected an additional plugin connection: a session is already active.');
          socket.close(CLOSE_CODES.sessionExists, 'session_exists');
          return;
        }
        if (socket.readyState !== WebSocket.OPEN) {
          // A queued hello can arrive after this socket was already closed
          // (handshake timeout or an earlier rejection); it must not take the lock.
          clearTimeout(handshakeTimer);
          return;
        }
        // Authentication succeeded: this connection becomes the active session.
        authenticated = true;
        clearTimeout(handshakeTimer);
        this.#active = socket;
        this.#pluginInfo = {
          plugin_version: hello.plugin_version,
          blockbench_version: hello.blockbench_version,
          capabilities: hello.capabilities,
          scope: null,
        };
        if (!this.#send(socket,
          JSON.stringify({
            type: 'hello_ack',
            protocol_version: PROTOCOL_VERSION,
            heartbeat_interval_ms: this.#options.heartbeatIntervalMs,
            capabilities: ['java_block', 'geckolib_model'],
          }),
        )) return;
        this.#startHeartbeat(socket);
        this.#options.log(
          `Plugin session authenticated (plugin ${hello.plugin_version}, Blockbench ${hello.blockbench_version}).`,
        );
        return;
      }
      this.#handleSessionMessage(socket, data);
    });

    socket.on('pong', () => {
      if (socket === this.#active) this.#heartbeatMisses = 0;
    });

    socket.on('close', () => {
      clearTimeout(handshakeTimer);
      this.#handshakeTimers.delete(socket);
      this.#sockets.delete(socket);
      if (socket === this.#active) {
        this.#detachActive('connection closed');
      }
    });

    socket.on('error', (error) => {
      this.#options.log(`Plugin socket error: ${String(error)}`);
    });
  }

  #parseHello(data: RawData): HelloMessage | null {
    let json: unknown;
    try {
      json = JSON.parse(data.toString());
    } catch {
      return null;
    }
    const parsed = pluginToAdapterMessageSchema.safeParse(json);
    if (!parsed.success || parsed.data.type !== 'hello') return null;
    return parsed.data;
  }

  #handleSessionMessage(socket: WebSocket, data: RawData): void {
    if (socket !== this.#active) return;
    let json: unknown;
    try {
      json = JSON.parse(data.toString());
    } catch {
      this.#options.log('Dropping a malformed frame from the plugin session.');
      return;
    }
    const parsed = pluginToAdapterMessageSchema.safeParse(json);
    if (!parsed.success) {
      this.#options.log('Dropping a frame from the plugin session that does not match the protocol.');
      return;
    }
    const message = parsed.data;
    if (message.type === 'response') {
      const pending = this.#pending.get(message.id);
      if (pending === undefined) return; // stale or unknown correlation id
      this.#pending.delete(message.id);
      clearTimeout(pending.timer);
      if (message.ok) {
        pending.resolve({ ok: true, result: message.result });
      } else {
        pending.resolve({ ok: false, error: message.error });
      }
      return;
    }
    if (message.type === 'event') {
      if (message.event === 'scope_changed' && this.#pluginInfo !== null) {
        const scope = scopeStatusSchema.safeParse(message.data);
        if (scope.success) this.#pluginInfo.scope = scope.data;
      }
      return;
    }
    // A second hello on an authenticated session is a protocol violation.
    socket.close(CLOSE_CODES.invalidHandshake, 'unexpected_hello');
  }

  #startHeartbeat(socket: WebSocket): void {
    this.#heartbeatMisses = 0;
    this.#heartbeatTimer = setInterval(() => {
      if (socket !== this.#active || socket.readyState !== WebSocket.OPEN) return;
      if (this.#heartbeatMisses >= this.#options.heartbeatMissLimit) {
        this.#options.log('Plugin session became stale (missed heartbeats); releasing the session lock.');
        socket.terminate();
        // 'close' fires asynchronously; detach immediately so tools report
        // not-connected without waiting for the TCP teardown.
        this.#detachActive('heartbeat timeout');
        return;
      }
      this.#heartbeatMisses += 1;
      socket.ping();
    }, this.#options.heartbeatIntervalMs);
  }

  #detachActive(reason: string): void {
    if (this.#heartbeatTimer !== null) {
      clearInterval(this.#heartbeatTimer);
      this.#heartbeatTimer = null;
    }
    const active = this.#active;
    this.#active = null;
    this.#pluginInfo = null;
    for (const [id, pending] of this.#pending) {
      clearTimeout(pending.timer);
      pending.resolve({
        ok: false,
        error: makeError('E_PLUGIN_NOT_CONNECTED', `Plugin disconnected before answering (${reason}).`),
      });
      this.#pending.delete(id);
    }
    if (active !== null && active.readyState === WebSocket.OPEN) {
      active.close(1001, 'going_away');
    }
    if (active !== null) {
      this.#options.log(`Plugin session ended (${reason}).`);
    }
  }

  #send(socket: WebSocket, data: string): boolean {
    if (socket.readyState !== WebSocket.OPEN) return false;
    try {
      socket.send(data);
      return true;
    } catch {
      socket.terminate();
      if (socket === this.#active) this.#detachActive('socket send failed');
      return false;
    }
  }

  #reconciliationFor(command: string): { command?: string; manual_check?: string } {
    if (command === 'propose_scoped_directory') return { command: 'get_plugin_status' };
    if (new Set([
      'write_files',
      'save_project',
      'open_model',
      'open_geckolib_model',
      'export_model',
      'export_geckolib_model',
      'export_geckolib_animations',
    ]).has(command)) {
      return { command: 'read_file', manual_check: 'Inspect the target path in Blockbench or on disk before retrying.' };
    }
    return { command: 'get_project_state', manual_check: 'Read back the affected objects before retrying the mutation.' };
  }
}

