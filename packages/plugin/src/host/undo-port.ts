import type { UndoPort, UndoTrack, BbElementRef } from "./ports.js";
import { CommandError } from "../errors.js";

type UndoApi = {
  initEdit: (aspects: Record<string, unknown>) => void;
  finishEdit: (label: string, aspects?: Record<string, unknown>) => void;
  cancelEdit: (revert?: boolean) => void;
};

function undoApi(): UndoApi {
  const u = (globalThis as unknown as { Undo?: UndoApi }).Undo;
  if (!u?.initEdit || !u.finishEdit) {
    throw new CommandError("E_BLOCKBENCH_ERROR", "Undo API unavailable");
  }
  return {
    initEdit: u.initEdit.bind(u),
    finishEdit: u.finishEdit.bind(u),
    cancelEdit:
      typeof u.cancelEdit === "function"
        ? u.cancelEdit.bind(u)
        : () => {
            /* older builds */
          },
  };
}

/**
 * BB 5.1-correct undo: cancelEdit on failure; finishEdit includes created elements.
 */
export function createUndoPort(): UndoPort {
  return {
    run<T>(
      aspects: Record<string, unknown>,
      label: string,
      fn: (track: UndoTrack) => T,
    ): T {
      const Undo = undoApi();
      const createdEls: BbElementRef[] = [];
      const createdTex: BbElementRef[] = [];
      Undo.initEdit(aspects);
      try {
        const track: UndoTrack = {
          addElements: (els) => createdEls.push(...els),
          addTextures: (texs) => createdTex.push(...texs),
        };
        const result = fn(track);
        const finish: Record<string, unknown> = { ...aspects };
        if (createdEls.length) {
          // Pass live objects when available on global Cube/Group lists.
          finish.elements = resolveLive(createdEls);
        }
        if (createdTex.length) {
          finish.textures = resolveLiveTextures(createdTex);
        }
        Undo.finishEdit(label, finish);
        return result;
      } catch (err) {
        try {
          Undo.cancelEdit(true);
        } catch {
          /* ignore */
        }
        throw err;
      }
    },
  };
}

function resolveLive(refs: BbElementRef[]): unknown[] {
  const Cube = (globalThis as unknown as { Cube?: { all: Array<{ uuid: string }> } }).Cube;
  const Group = (globalThis as unknown as { Group?: { all: Array<{ uuid: string }> } }).Group;
  const out: unknown[] = [];
  for (const r of refs) {
    const hit =
      Cube?.all.find((c) => c.uuid === r.uuid) ??
      Group?.all.find((g) => g.uuid === r.uuid);
    if (hit) out.push(hit);
  }
  return out;
}

function resolveLiveTextures(refs: BbElementRef[]): unknown[] {
  const Texture = (globalThis as unknown as { Texture?: { all: Array<{ uuid: string }> } })
    .Texture;
  return refs
    .map((r) => Texture?.all.find((t) => t.uuid === r.uuid))
    .filter(Boolean) as unknown[];
}
