import { withUndo } from "../bb/undo.js";
import { requireProject } from "../bb/elements.js";
import { bbAnimation } from "../bb/globals.js";
import { CommandError } from "../errors.js";

export function upsertAnimation(opts: {
  name: string;
  length: number;
  loop?: "once" | "hold" | "loop";
  bones?: Record<
    string,
    {
      rotation?: Array<{ time: number; value: [number, number, number] }>;
      position?: Array<{ time: number; value: [number, number, number] }>;
    }
  >;
  replace?: boolean;
}): { ok: true; undo_label: string; name: string } {
  requireProject();
  const AnimationApi = bbAnimation();
  if (!AnimationApi) {
    throw new CommandError(
      "E_UNSUPPORTED_FORMAT",
      "Animations are not available in this format/plugin set.",
    );
  }
  const existing = AnimationApi.all.find((a) => a.name === opts.name);
  if (existing && opts.replace !== true) {
    throw new CommandError(
      "E_INVALID_PARAM",
      `Animation "${opts.name}" exists; pass replace:true`,
    );
  }

  return withUndo({ animations: true }, `upsert_animation ${opts.name}`, () => {
    if (existing && opts.replace) {
      const idx = AnimationApi.all.indexOf(existing);
      if (idx >= 0) AnimationApi.all.splice(idx, 1);
    }
    const AnimCtor = AnimationApi as unknown as {
      new?: (data?: Record<string, unknown>) => {
        name: string;
        length: number;
        loop: string;
        add?: (undo?: boolean) => void;
      };
    };
    if (typeof AnimCtor.new !== "function") {
      const rec = {
        name: opts.name,
        length: opts.length,
        loop: opts.loop ?? "loop",
        bones: opts.bones ?? {},
      };
      AnimationApi.all.push(rec);
      return {
        ok: true as const,
        undo_label: `upsert_animation ${opts.name}`,
        name: opts.name,
      };
    }
    const anim = new (AnimCtor as unknown as {
      new (data?: Record<string, unknown>): {
        name: string;
        length: number;
        loop: string;
        add?: (undo?: boolean) => void;
      };
    })({
      name: opts.name,
      length: opts.length,
      loop: opts.loop ?? "loop",
    });
    anim.add?.(false);
    (anim as unknown as { mcp_bones?: unknown }).mcp_bones = opts.bones ?? {};
    return {
      ok: true as const,
      undo_label: `upsert_animation ${opts.name}`,
      name: opts.name,
    };
  });
}
