import { requireCube, requireProject, refreshView } from "../bb/elements.js";
import { getHost } from "../host/live.js";
import { CommandError } from "../errors.js";

export { paintFaceFeature, paintFaceFeatures } from "./face-batch.js";
export { shadeModelBase } from "./shade-base.js";
export { packBoxUv } from "./pack-uv.js";

export function autoUvCubes(opts: {
  cubes?: string[];
  mode?: "box" | "face";
}): { ok: true; undo_label: string; updated: string[] } {
  requireProject();
  const list =
    opts.cubes && opts.cubes.length > 0
      ? opts.cubes.map((n) => requireCube(n))
      : [...Cube.all];
  if (list.length === 0) {
    throw new CommandError("E_NOT_FOUND", "No cubes to UV.");
  }
  const mode = opts.mode ?? "box";
  const host = getHost();
  return host.undo.run({ elements: list, uv_only: true }, "auto_uv_cubes", () => {
    const updated: string[] = [];
    for (const cube of list) {
      cube.box_uv = mode === "box";
      cube.autouv = 1;
      cube.mapAutoUV?.();
      updated.push(cube.uuid);
    }
    refreshView(list.map((c) => ({ uuid: c.uuid, name: c.name })));
    return { ok: true as const, undo_label: "auto_uv_cubes", updated };
  });
}
