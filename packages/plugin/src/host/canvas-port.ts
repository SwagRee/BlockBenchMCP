import type { BbElementRef, CanvasPort } from "./ports.js";

export function createCanvasPort(): CanvasPort {
  return {
    updateElements(elements, aspects = { geometry: true, uv: true, faces: true }) {
      const Canvas = (globalThis as unknown as {
        Canvas?: {
          updateView?: (opts: Record<string, unknown>) => void;
          updateAll?: () => void;
        };
        Cube?: { all: Array<{ uuid: string }> };
        Group?: { all: Array<{ uuid: string }> };
      }).Canvas;
      const Cube = (globalThis as unknown as { Cube?: { all: Array<{ uuid: string }> } }).Cube;
      const Group = (globalThis as unknown as { Group?: { all: Array<{ uuid: string }> } }).Group;
      const live = elements
        .map(
          (r) =>
            Cube?.all.find((c) => c.uuid === r.uuid) ??
            Group?.all.find((g) => g.uuid === r.uuid),
        )
        .filter(Boolean);
      if (Canvas?.updateView && live.length) {
        Canvas.updateView({
          elements: live,
          element_aspects: aspects,
          selection: false,
        });
        return;
      }
      Canvas?.updateAll?.();
    },
    updateAll() {
      const Canvas = (globalThis as unknown as {
        Canvas?: { updateAll?: () => void; updateView?: (o: Record<string, unknown>) => void };
      }).Canvas;
      Canvas?.updateAll?.();
    },
  };
}

export function refsOf(
  ...els: Array<{ uuid: string; name: string } | undefined | null>
): BbElementRef[] {
  return els.filter(Boolean).map((e) => ({ uuid: e!.uuid, name: e!.name }));
}
