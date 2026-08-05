/** Blockbench desktop grants a scoped `require` for `net` (network permission). */
export type NetModule = {
  createServer: (
    listener: (socket: NetSocket) => void,
  ) => NetServer;
};

export type NetSocket = {
  on: (event: string, cb: (...args: never[]) => void) => void;
  write: (data: string | Uint8Array) => void;
  destroy: () => void;
  setTimeout: (ms: number, cb: () => void) => void;
};

export type NetServer = {
  listen: (port: number, host: string, cb?: () => void) => void;
  close: (cb?: () => void) => void;
  on: (event: string, cb: (...args: never[]) => void) => void;
};

export function loadNet(): NetModule {
  const req =
    (globalThis as { require?: (id: string) => unknown }).require ??
    // eslint-disable-next-line no-undef
    (typeof require !== "undefined" ? require : undefined);
  if (typeof req !== "function") {
    throw new Error(
      "Blockbench desktop `require` is unavailable. Use the desktop app, not the web app.",
    );
  }
  const net = req("net") as NetModule | null;
  if (!net?.createServer) {
    throw new Error(
      "Network access (net module) was denied. Allow it for this plugin, then Start MCP Server.",
    );
  }
  return net;
}
