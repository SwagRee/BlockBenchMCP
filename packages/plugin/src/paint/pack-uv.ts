import { requireCube, requireProject, refreshView } from "../bb/elements.js";
import { getHost } from "../host/live.js";
import { CommandError } from "../errors.js";
import { applyPackedUvs, resolveUvMode, type UvMode } from "./uv-mode.js";

/**
 * Pack UV islands so cubes/faces do not share pixels.
 * Auto-detects box vs per-face from Project/Format/cubes (java_block → face).
 */
export function packBoxUv(opts: {
  cubes?: string[];
  padding?: number;
  auto_resize?: boolean;
  mode?: UvMode | "auto";
}): {
  ok: true;
  undo_label: string;
  mode: UvMode;
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

  const mode = resolveUvMode({
    explicit: opts.mode ?? "auto",
    cubes: list,
  });
  const pad = opts.padding ?? 1;
  let texW = Project?.texture_width ?? 64;
  let texH = Project?.texture_height ?? 64;
  const host = getHost();

  return host.undo.run({ elements: list, uv_only: true }, "pack_box_uv", () => {
    const { used, packed } = applyPackedUvs(list, {
      mode,
      texW,
      padding: pad,
    });

    if (opts.auto_resize !== false) {
      const needW = Math.max(texW, used[0]);
      const needH = Math.max(texH, used[1]);
      if (needW !== texW || needH !== texH) {
        texW = needW;
        texH = needH;
        if (Project) {
          Project.texture_width = texW;
          Project.texture_height = texH;
        }
        const tex = host.textures.defaultOrFirst();
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

    const tex = host.textures.defaultOrFirst();
    for (const c of list) tex?.applyToCube(c.uuid, true);

    refreshView(list.map((c) => ({ uuid: c.uuid, name: c.name })));
    return {
      ok: true as const,
      undo_label: "pack_box_uv",
      mode,
      packed,
      used,
      texture_size: [texW, texH],
    };
  });
}
