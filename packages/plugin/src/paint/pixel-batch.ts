import { requireCube, requireProject, refreshView } from "../bb/elements.js";
import { CommandError } from "../errors.js";
import { getHost } from "../host/live.js";

type Point = { x: number; y: number };
type Stroke = {
  cube: string;
  face: string;
  color: string;
  points: Point[];
  size?: number;
  shape?: "square" | "circle";
};

function walkLine(
  a: Point,
  b: Point,
  visit: (x: number, y: number) => void,
): void {
  let x = a.x;
  let y = a.y;
  const dx = Math.abs(b.x - a.x);
  const sx = a.x < b.x ? 1 : -1;
  const dy = -Math.abs(b.y - a.y);
  const sy = a.y < b.y ? 1 : -1;
  let error = dx + dy;
  for (;;) {
    visit(x, y);
    if (x === b.x && y === b.y) return;
    const twice = error * 2;
    if (twice >= dy) {
      error += dy;
      x += sx;
    }
    if (twice <= dx) {
      error += dx;
      y += sy;
    }
  }
}

function stamp(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  shape: "square" | "circle",
): void {
  const offset = Math.floor(size / 2);
  if (shape === "square") {
    ctx.fillRect(x - offset, y - offset, size, size);
    return;
  }
  const center = (size - 1) / 2;
  const radiusSquared = (size / 2) ** 2;
  for (let py = 0; py < size; py += 1) {
    for (let px = 0; px < size; px += 1) {
      const dx = px - center;
      const dy = py - center;
      if (dx * dx + dy * dy <= radiusSquared) {
        ctx.fillRect(x - offset + px, y - offset + py, 1, 1);
      }
    }
  }
}

/** Deterministic face-local pixel brush paths in one undo step. */
export function paintPixelBatch(opts: {
  texture?: string;
  strokes: Stroke[];
  clip_to_face?: boolean;
}): { ok: true; undo_label: string; strokes: number; stamps: number } {
  requireProject();
  if (!opts.strokes?.length) {
    throw new CommandError("E_INVALID_PARAM", "strokes[] required");
  }
  const host = getHost();
  const tex =
    (opts.texture ? host.textures.find(opts.texture) : undefined) ??
    host.textures.defaultOrFirst();
  if (!tex) throw new CommandError("E_NOT_FOUND", "No texture available");

  const jobs = opts.strokes.map((stroke) => {
    const cube = requireCube(stroke.cube);
    const face = cube.faces?.[stroke.face];
    if (!face) {
      throw new CommandError(
        "E_INVALID_PARAM",
        `Face not found: ${stroke.cube}.${stroke.face}`,
      );
    }
    const uv = face.uv ?? [0, 0, 16, 16];
    return {
      ...stroke,
      cube,
      originX: Math.floor(Math.min(uv[0], uv[2])),
      originY: Math.floor(Math.min(uv[1], uv[3])),
      faceW: Math.max(1, Math.ceil(Math.abs(uv[2] - uv[0]))),
      faceH: Math.max(1, Math.ceil(Math.abs(uv[3] - uv[1]))),
      size: stroke.size ?? 1,
      shape: stroke.shape ?? "square",
    };
  });

  let stamps = 0;
  return host.undo.run(
    { textures: [], bitmap: true, uv_only: true },
    "paint_pixel_batch",
    (track) => {
      track.addTextures([tex]);
      for (const job of jobs) tex.applyToCube(job.cube.uuid, [job.face]);
      tex.edit((ctx) => {
        ctx.imageSmoothingEnabled = false;
        for (const job of jobs) {
          ctx.save();
          if (opts.clip_to_face !== false) {
            ctx.beginPath();
            ctx.rect(job.originX, job.originY, job.faceW, job.faceH);
            ctx.clip();
          }
          ctx.fillStyle = job.color;
          const draw = (x: number, y: number) => {
            stamp(ctx, job.originX + x, job.originY + y, job.size, job.shape);
            stamps += 1;
          };
          draw(job.points[0].x, job.points[0].y);
          for (let i = 1; i < job.points.length; i += 1) {
            const previous = job.points[i - 1];
            const current = job.points[i];
            let first = true;
            walkLine(previous, current, (x, y) => {
              if (first) {
                first = false;
                return;
              }
              draw(x, y);
            });
          }
          ctx.restore();
        }
      }, "paint_pixel_batch");
      refreshView(
        jobs.map((job) => ({ uuid: job.cube.uuid, name: job.cube.name })),
      );
      return {
        ok: true as const,
        undo_label: "paint_pixel_batch",
        strokes: jobs.length,
        stamps,
      };
    },
  );
}
