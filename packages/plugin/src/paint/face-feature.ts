import { requireCube, requireProject, refreshView } from "../bb/elements.js";
import { getHost } from "../host/live.js";
import { CommandError } from "../errors.js";

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

export function paintFaceFeature(opts: {
  cube: string;
  face: string;
  feature: "rect" | "ellipse" | "fill";
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  texture?: string;
}): { ok: true; undo_label: string } {
  requireProject();
  const cube = requireCube(opts.cube);
  const face = cube.faces?.[opts.face];
  if (!face) {
    throw new CommandError("E_INVALID_PARAM", `Face not found: ${opts.face}`);
  }
  const host = getHost();
  const tex =
    (opts.texture ? host.textures.find(opts.texture) : undefined) ??
    host.textures.defaultOrFirst();
  if (!tex) throw new CommandError("E_NOT_FOUND", "No texture available");

  const uv = face.uv ?? [0, 0, 16, 16];
  const originX = Math.min(uv[0], uv[2]);
  const originY = Math.min(uv[1], uv[3]);

  return host.undo.run(
    { textures: [], bitmap: true, uv_only: true },
    "paint_face_feature",
    (track) => {
      track.addTextures([tex]);
      tex.applyToCube(cube.uuid, [opts.face]);
      tex.edit((ctx) => {
        const x = originX + opts.x;
        const y = originY + opts.y;
        ctx.fillStyle = opts.color;
        if (opts.feature === "fill") {
          ctx.fillRect(
            originX,
            originY,
            Math.abs(uv[2] - uv[0]),
            Math.abs(uv[3] - uv[1]),
          );
        } else if (opts.feature === "rect") {
          ctx.fillRect(x, y, opts.width, opts.height);
        } else {
          ctx.beginPath();
          ctx.ellipse(
            x + opts.width / 2,
            y + opts.height / 2,
            opts.width / 2,
            opts.height / 2,
            0,
            0,
            Math.PI * 2,
          );
          ctx.fill();
        }
      }, "paint_face_feature");
      refreshView([{ uuid: cube.uuid, name: cube.name }]);
      return { ok: true as const, undo_label: "paint_face_feature" };
    },
  );
}
