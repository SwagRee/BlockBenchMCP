import { homedir } from "node:os";
import { join } from "node:path";
import { DEFAULTS } from "@blockbench-mcp/shared";

export interface AdapterConfig {
  port: number;
  secret: string;
  requestTimeoutMs: number;
  handshakeTimeoutMs: number;
  maxMessageBytes: number;
}

export function defaultConfigPath(): string {
  const base =
    process.env.APPDATA ??
    process.env.XDG_CONFIG_HOME ??
    join(homedir(), ".config");
  return join(base, "blockbench-mcp", "config.json");
}

export function loadConfig(argv: string[]): AdapterConfig {
  const args = parseArgs(argv);
  const secret =
    args.secret ??
    process.env.BLOCKBENCH_MCP_SECRET ??
    "dev-local-secret";

  return {
    port: num(args.port, process.env.BLOCKBENCH_MCP_PORT, DEFAULTS.wsPort),
    secret,
    requestTimeoutMs: num(
      args.timeout,
      process.env.BLOCKBENCH_MCP_TIMEOUT_MS,
      DEFAULTS.requestTimeoutMs,
    ),
    handshakeTimeoutMs: DEFAULTS.handshakeTimeoutMs,
    maxMessageBytes: DEFAULTS.maxMessageBytes,
  };
}

function parseArgs(argv: string[]): Record<string, string> {
  const out: Record<string, string> = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith("--")) continue;
    const key = a.slice(2);
    const val = argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[++i] : "true";
    out[key] = val;
  }
  return out;
}

function num(
  arg: string | undefined,
  env: string | undefined,
  fallback: number,
): number {
  const raw = arg ?? env;
  if (raw === undefined) return fallback;
  const n = Number(raw);
  return Number.isFinite(n) ? n : fallback;
}
