import type { FormatPort } from "./ports.js";
import { CommandError } from "../errors.js";

export function createFormatPort(): FormatPort {
  return {
    currentId() {
      return (
        (globalThis as unknown as { Format?: { id?: string } }).Format?.id ?? null
      );
    },
    hasGeckoLib() {
      const Formats = (globalThis as unknown as {
        Formats?: Record<string, unknown>;
      }).Formats;
      if (!Formats) return false;
      if (Formats.geckolib_model) return true;
      return Object.keys(Formats).some((id) => id.toLowerCase().includes("gecko"));
    },
    createProject(opts) {
      const Formats = (globalThis as unknown as {
        Formats?: Record<string, { new?: () => void }>;
      }).Formats;
      if (!Formats) {
        throw new CommandError("E_BLOCKBENCH_ERROR", "Formats unavailable");
      }
      let api = Formats[opts.format];
      let id = opts.format;
      if (!api && opts.format === "geckolib_model") {
        const hit = Object.keys(Formats).find((k) =>
          k.toLowerCase().includes("gecko"),
        );
        if (!hit) {
          throw new CommandError(
            "E_UNSUPPORTED_FORMAT",
            "Install the GeckoLib Blockbench plugin.",
          );
        }
        id = hit;
        api = Formats[hit];
      }
      if (!api?.new) {
        throw new CommandError("E_UNSUPPORTED_FORMAT", `Cannot create ${opts.format}`);
      }
      api.new();
      const Project = (globalThis as unknown as {
        Project?: { name?: string; texture_width?: number; texture_height?: number };
        Format?: { id?: string };
      }).Project;
      const Format = (globalThis as unknown as { Format?: { id?: string } }).Format;
      if (Project) {
        if (opts.name) Project.name = opts.name;
        if (opts.texture_width) Project.texture_width = opts.texture_width;
        if (opts.texture_height) Project.texture_height = opts.texture_height;
      }
      return { format: Format?.id ?? id, name: Project?.name };
    },
  };
}
