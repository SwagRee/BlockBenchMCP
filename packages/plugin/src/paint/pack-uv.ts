import { requireCube, requireProject, refreshView } from "../bb/elements.js";
import { getHost } from "../host/live.js";
import { CommandError } from "../errors.js";

function boxUVFootprint(cube: Cube): { w: number; h: number } {
  const w = Math.max(1, Math.ceil(Math.abs(cube.to[0] - cube.from[0])));
  const h = Math.max(1, Math.ceil(Math.abs(cube.to[1] - cube.from[1])));
  const d = Math.max(1, Math.ceil(Math.abs(cube.to[2] - cube.from[2])));
  return { w: 2 * (w + d), h: h + d };
}

/**
 * Shelf-pack box UVs so cubes do not share the same pixels (sosadly-style).
 */
export function packBoxUv(opts: {
  cubes?: string[];
  padding?: number;
  auto_resize?: boolean;
}): {
  ok: true;
  undo_label: string;
  packed: number;
  used: [number, number];
  texture_size: [number, number];
} {
  requireProject();
  const list =
    opts.cubes && opts.cubes.length > 0
      ? opts.cubes.map((n) => requireCube(n))
      : [...Cube.all];
  if (list.length === 0) {
    throw new CommandError("E_NOT_FOUND", "No cubes to pack UV.");
  }

  const pad = opts.padding ?? 1;
  const Project = (globalThis as unknown as {
    Project?: { texture_width?: number; texture_height?: number };
  }).Project;
  let texW = Project?.texture_width ?? 64;
  let texH = Project?.texture_height ?? 64;

  const host = getHost();
  return host.undo.run({ elements: list, uv_only: true }, "pack_box_uv", () => {
    const items = list
      .map((c) => ({ c, f: boxUVFootprint(c) }))
      .sort((a, b) => b.f.h - a.f.h);

    let x = 0;
    let y = 0;
    let rowH = 0;
    let maxX = 0;
    for (const it of items) {
      if (x + it.f.w + pad > texW && x > 0) {
        x = 0;
        y += rowH + pad;
        rowH = 0;
      }
      it.c.box_uv = true;
      it.c.uv_offset = [x, y];
      it.c.autouv = 0;
      it.c.mapAutoUV?.();
      x += it.f.w + pad;
      rowH = Math.max(rowH, it.f.h);
      maxX = Math.max(maxX, x);
    }
    const usedH = y + rowH;
    const used: [number, number] = [maxX, usedH];

    if (opts.auto_resize !== false) {
      const needW = Math.max(texW, maxX);
      const needH = Math.max(texH, usedH);
      if (needW !== texW || needH !== texH) {
        texW = needW;
        texH = needH;
        if (Project) {
          Project.texture_width = texW;
          Project.texture_height = texH;
        }
        const tex = host.textures.defaultOrFirst();
        // Remap existing bitmap into a larger canvas via edit when possible.
        tex?.edit((ctx, canvas) => {
          if (canvas.width >= texW && canvas.height >= texH) return;
          const prev = document.createElement("canvas");
          prev.width = canvas.width;
          prev.height = canvas.height;
          prev.getContext("2d")?.drawImage(canvas, 0, 0);
          canvas.width = Math.max(canvas.width, texW);
          canvas.height = Math.max(canvas.height, texH);
          ctx.imageSmoothingEnabled = false;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(prev, 0, 0);
        }, "pack_box_uv resize");
      }
    }

    refreshView(list.map((c) => ({ uuid: c.uuid, name: c.name })));
    return {
      ok: true as const,
      undo_label: "pack_box_uv",
      packed: items.length,
      used,
      texture_size: [texW, texH],
    };
  });
}
