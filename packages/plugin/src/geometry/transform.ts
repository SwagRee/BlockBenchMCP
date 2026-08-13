import type { Vec3 } from "@blockbench-mcp/shared";
import { findElement, refreshView, requireProject } from "../bb/elements.js";
import { CommandError } from "../errors.js";
import { getHost } from "../host/live.js";

function rotatePoint(point: Vec3, pivot: Vec3, rotation: Vec3): Vec3 {
  let [x, y, z] = [
    point[0] - pivot[0],
    point[1] - pivot[1],
    point[2] - pivot[2],
  ];
  for (const [axis, degrees] of rotation.entries()) {
    if (degrees === 0) continue;
    const r = (degrees * Math.PI) / 180;
    const c = Math.cos(r);
    const s = Math.sin(r);
    if (axis === 0) [y, z] = [y * c - z * s, y * s + z * c];
    else if (axis === 1) [x, z] = [x * c + z * s, -x * s + z * c];
    else [x, y] = [x * c - y * s, x * s + y * c];
  }
  return [x + pivot[0], y + pivot[1], z + pivot[2]];
}

export function transformElements(opts: {
  refs: string[];
  translate?: Vec3;
  scale?: Vec3;
  pivot?: Vec3;
  rotate?: Vec3;
  uv_policy?: "preserve" | "auto";
  undo_label?: string;
}): { ok: true; undo_label: string; updated: string[] } {
  requireProject();
  const elements = opts.refs.map((ref) => {
    const element = findElement(ref);
    if (!element)
      throw new CommandError("E_NOT_FOUND", `Element not found: ${ref}`);
    return element;
  });
  const translate = opts.translate ?? [0, 0, 0];
  const scale = opts.scale ?? [1, 1, 1];
  const rotate = opts.rotate ?? [0, 0, 0];
  if (scale.some((value) => value <= 0))
    throw new CommandError(
      "E_INVALID_PARAM",
      "Scale components must be positive; use mirror_elements for reflection",
    );
  const pivot = opts.pivot ?? [0, 0, 0];
  const label = opts.undo_label ?? "transform_elements";
  return getHost().undo.run({ outliner: true, elements }, label, () => {
    for (const element of elements) {
      const transform = (point: Vec3): Vec3 => {
        const scaled = point.map(
          (value, i) => pivot[i] + (value - pivot[i]) * scale[i],
        ) as Vec3;
        const rotated = rotatePoint(scaled, pivot, rotate);
        return rotated.map((value, i) => value + translate[i]) as Vec3;
      };
      if (element instanceof Cube) {
        const center = element.from.map(
          (value, i) => (value + element.to[i]) / 2,
        ) as Vec3;
        const nextCenter = transform(center);
        const halfSize = element.from.map(
          (value, i) =>
            (Math.abs(element.to[i] - value) * Math.abs(scale[i])) / 2,
        ) as Vec3;
        element.from = nextCenter.map(
          (value, i) => value - halfSize[i],
        ) as Vec3;
        element.to = nextCenter.map((value, i) => value + halfSize[i]) as Vec3;
        element.origin = transform(element.origin as Vec3);
        element.rotation = element.rotation.map(
          (value, i) => value + rotate[i],
        ) as Vec3;
        if (opts.uv_policy === "auto") {
          element.autouv = 1;
          element.mapAutoUV?.();
        }
      } else {
        element.origin = transform(element.origin as Vec3);
        element.rotation = element.rotation.map(
          (value, i) => value + rotate[i],
        ) as Vec3;
      }
    }
    refreshView(elements);
    return {
      ok: true as const,
      undo_label: label,
      updated: elements.map((e) => e.uuid),
    };
  });
}
