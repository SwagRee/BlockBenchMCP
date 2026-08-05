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
      const liveEls: unknown[] = [];
      const liveTex: unknown[] = [];
      // Avoid empty `elements: []` — BB 5.1 can throw getUndoCopy on bad aspect entries.
      const initAspects = { ...aspects };
      if (Array.isArray(initAspects.elements) && (initAspects.elements as unknown[]).length === 0) {
        delete initAspects.elements;
      }
      if (Array.isArray(initAspects.textures) && (initAspects.textures as unknown[]).length === 0) {
        delete initAspects.textures;
      }
      Undo.initEdit(initAspects);
      try {
        const track: UndoTrack = {
          addElements: (els) => {
            createdEls.push(...els);
            for (const e of els) {
              if (e && typeof e === "object" && "uuid" in e && "getUndoCopy" in (e as object)) {
                liveEls.push(e);
              }
            }
          },
          addTextures: (texs) => {
            createdTex.push(...texs);
            for (const t of texs) {
              if (t && typeof t === "object" && "uuid" in t && "getUndoCopy" in (t as object)) {
                liveTex.push(t);
              }
            }
          },
        };
        const result = fn(track);
        const finish: Record<string, unknown> = { ...initAspects };
        const els = liveEls.length ? liveEls : resolveLive(createdEls);
        const texs = liveTex.length ? liveTex : resolveLiveTextures(createdTex);
        if (els.length) finish.elements = els;
        else delete finish.elements;
        if (texs.length) finish.textures = texs;
        else delete finish.textures;
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
