import type { PreviewPort } from "./ports.js";
import { CommandError } from "../errors.js";

const FALLBACK: Record<string, Record<string, unknown>> = {
  north: { id: "north", projection: "orthogonal", position: [0, 16, -64], target: [0, 16, 0] },
  south: { id: "south", projection: "orthogonal", position: [0, 16, 64], target: [0, 16, 0] },
  east: { id: "east", projection: "orthogonal", position: [64, 16, 0], target: [0, 16, 0] },
  west: { id: "west", projection: "orthogonal", position: [-64, 16, 0], target: [0, 16, 0] },
  up: { id: "up", projection: "orthogonal", position: [0, 64, 0], target: [0, 16, 0] },
  down: { id: "down", projection: "orthogonal", position: [0, -64, 0], target: [0, 16, 0] },
  iso: { id: "isometric", projection: "orthogonal", position: [40, 40, 40], target: [0, 16, 0] },
};

export function createPreviewPort(): PreviewPort {
  return {
    capture(view, size) {
      return new Promise((resolve, reject) => {
        const g = globalThis as unknown as {
          Screencam?: {
            NoAAPreview?: {
              loadAnglePreset?: (p: unknown) => void;
              resize?: (w: number, h: number) => void;
            };
            screenshotPreview?: (
              preview: unknown,
              opts: { width: number; height: number; crop?: boolean },
              cb: (url: string) => void,
            ) => void;
          };
          Preview?: { selected?: unknown };
          DefaultCameraPresets?: Array<Record<string, unknown> & { id?: string }>;
        };
        const preview = g.Screencam?.NoAAPreview ?? g.Preview?.selected;
        if (!preview || !g.Screencam?.screenshotPreview) {
          reject(
            new CommandError(
              "E_BLOCKBENCH_ERROR",
              "Screenshot API missing (need desktop Blockbench 5.1+)",
            ),
          );
          return;
        }
        const key = view === "iso" ? "isometric" : view;
        const preset =
          g.DefaultCameraPresets?.find((p) => p.id === key || p.id === view) ??
          FALLBACK[view] ??
          FALLBACK.iso;
        g.Screencam.NoAAPreview?.loadAnglePreset?.(preset);
        g.Screencam.NoAAPreview?.resize?.(size, size);
        const t = setTimeout(
          () => reject(new CommandError("E_TIMEOUT", "Screenshot timed out")),
          20_000,
        );
        try {
          g.Screencam.screenshotPreview(
            preview,
            { width: size, height: size, crop: false },
            (url) => {
              clearTimeout(t);
              resolve(url);
            },
          );
        } catch (err) {
          clearTimeout(t);
          reject(err);
        }
      });
    },
  };
}
