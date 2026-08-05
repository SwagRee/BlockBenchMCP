import type { SessionState } from "../session.js";
import { CommandError } from "../errors.js";
import { requireProject } from "../bb/elements.js";

export function proposeScopedDirectory(
  session: SessionState,
  path: string,
): { scoped_directory: string; confirmed: boolean } {
  // Desktop Blockbench: confirm via native confirm dialog.
  const ok =
    typeof window !== "undefined" &&
    window.confirm(
      `Allow MCP file access for this session?\n\n${path}\n\nOnly this folder will be writable/readable by AI tools.`,
    );
  if (!ok) {
    throw new CommandError("E_SCOPE_DENIED", "User denied scoped directory access.");
  }
  session.scopedDirectory = path;
  return { scoped_directory: path, confirmed: true };
}

export function exportModel(
  session: SessionState,
  opts: { path: string; overwrite?: boolean },
): { path: string } {
  requireProject();
  if (!session.scopedDirectory) {
    throw new CommandError(
      "E_SCOPE_DENIED",
      "Call propose_scoped_directory first and get user approval.",
    );
  }
  const root = session.scopedDirectory.replace(/\\/g, "/");
  const target = opts.path.replace(/\\/g, "/");
  if (!target.startsWith(root)) {
    throw new CommandError(
      "E_SCOPE_DENIED",
      `Export path must be inside scoped directory: ${root}`,
    );
  }
  // Prefer codec save if available; otherwise instruct the agent.
  const codec = (window as unknown as { Codecs?: Record<string, { export?: () => void }> }).Codecs;
  if (codec) {
    // Best-effort: many formats expose project save via UI; we write JSON project dump.
  }
  const payload = {
    meta: { format: Format?.id, name: Project?.name },
    note: "Full codec export depends on format plugins; project metadata recorded.",
    overwrite: opts.overwrite === true,
    path: target,
  };
  // Use Blockbench filesystem when in app:
  const fs = (window as unknown as { require?: (m: string) => unknown }).require?.("fs") as
    | {
        existsSync?: (p: string) => boolean;
        writeFileSync?: (p: string, data: string) => void;
      }
    | undefined;
  if (!fs?.writeFileSync) {
    throw new CommandError(
      "E_BLOCKBENCH_ERROR",
      "Filesystem not available (use Blockbench desktop app).",
    );
  }
  if (fs.existsSync?.(target) && opts.overwrite !== true) {
    throw new CommandError("E_SCOPE_DENIED", "File exists; pass overwrite:true");
  }
  fs.writeFileSync(target, JSON.stringify(payload, null, 2));
  return { path: target };
}
