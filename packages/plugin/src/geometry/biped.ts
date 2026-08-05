import type { Vec3 } from "@blockbench-mcp/shared";
import { refreshView, requireProject } from "../bb/elements.js";
import { getHost } from "../host/live.js";
import { runCheckModel } from "../check/rules.js";

/**
 * Classic Minecraft player proportions. Returns check_model so agents see issues immediately.
 */
export function scaffoldBiped(opts: {
  scale?: number;
  texture_size?: number;
  name_prefix?: string;
  include_outer_layers?: boolean;
}): {
  ok: true;
  undo_label: string;
  created: { uuid: string; name: string; type: string }[];
  check: ReturnType<typeof runCheckModel>;
} {
  requireProject();
  const s = opts.scale ?? 1;
  const prefix = opts.name_prefix ?? "";
  const texSize = opts.texture_size ?? 64;
  const label = `scaffold_biped scale=${s}`;
  const host = getHost();

  return host.undo.run({ outliner: true, elements: [], textures: [], bitmap: true }, label, (track) => {
    const skin = host.textures.ensure({
      name: `${prefix || ""}skin`,
      width: texSize,
      height: texSize,
      fill: "#8a8a8a",
    });
    track.addTextures([skin]);

    // Soft shade: darker lower half for volume cue
    skin.edit((ctx, canvas) => {
      ctx.fillStyle = "#6e6e6e";
      ctx.fillRect(0, Math.floor(canvas.height / 2), canvas.width, Math.ceil(canvas.height / 2));
      ctx.fillStyle = "#9a9a9a";
      ctx.fillRect(0, 0, canvas.width, Math.floor(canvas.height / 2));
    }, "scaffold base shade");

    const created: { uuid: string; name: string; type: string }[] = [];
    const push = (el: { uuid: string; name: string }, type: string) => {
      const row = { uuid: el.uuid, name: el.name, type };
      created.push(row);
      track.addElements([row]);
    };

    const root = bone(`${prefix}root`, [0, 0, 0], "root");
    push(root, "group");
    const body = bone(`${prefix}body`, [0, 24 * s, 0], root);
    push(body, "group");
    push(cubeOn(`${prefix}body_cube`, body, [-4 * s, 12 * s, -2 * s], [8 * s, 12 * s, 4 * s], [0, 24 * s, 0], skin.uuid), "cube");

    const head = bone(`${prefix}head`, [0, 24 * s, 0], body);
    push(head, "group");
    push(cubeOn(`${prefix}head_cube`, head, [-4 * s, 24 * s, -4 * s], [8 * s, 8 * s, 8 * s], [0, 24 * s, 0], skin.uuid), "cube");

    const armR = bone(`${prefix}arm_right`, [-6 * s, 22 * s, 0], body);
    const armL = bone(`${prefix}arm_left`, [6 * s, 22 * s, 0], body);
    push(armR, "group");
    push(armL, "group");
    push(cubeOn(`${prefix}arm_right_cube`, armR, [-8 * s, 12 * s, -2 * s], [4 * s, 12 * s, 4 * s], [-6 * s, 22 * s, 0], skin.uuid), "cube");
    push(cubeOn(`${prefix}arm_left_cube`, armL, [4 * s, 12 * s, -2 * s], [4 * s, 12 * s, 4 * s], [6 * s, 22 * s, 0], skin.uuid), "cube");

    const legR = bone(`${prefix}leg_right`, [-2 * s, 12 * s, 0], body);
    const legL = bone(`${prefix}leg_left`, [2 * s, 12 * s, 0], body);
    push(legR, "group");
    push(legL, "group");
    push(cubeOn(`${prefix}leg_right_cube`, legR, [-4 * s, 0, -2 * s], [4 * s, 12 * s, 4 * s], [-2 * s, 12 * s, 0], skin.uuid), "cube");
    push(cubeOn(`${prefix}leg_left_cube`, legL, [0, 0, -2 * s], [4 * s, 12 * s, 4 * s], [2 * s, 12 * s, 0], skin.uuid), "cube");

    if (opts.include_outer_layers) {
      push(cubeOn(`${prefix}hat`, head, [-4.5 * s, 23.5 * s, -4.5 * s], [9 * s, 9 * s, 9 * s], [0, 24 * s, 0], skin.uuid, 0.25 * s), "cube");
    }

    refreshView(created);
    const check = runCheckModel();
    return { ok: true as const, undo_label: label, created, check };
  });
}

function bone(name: string, origin: Vec3, parent: Group | "root"): Group {
  const g = new Group({ name, origin: [...origin], rotation: [0, 0, 0] })
    .init()
    .addTo(parent);
  g.createUniqueName?.();
  return g;
}

function cubeOn(
  name: string,
  parent: Group,
  from: Vec3,
  size: Vec3,
  origin: Vec3,
  textureUuid: string,
  inflate = 0,
): Cube {
  const to: Vec3 = [from[0] + size[0], from[1] + size[1], from[2] + size[2]];
  const c = new Cube({
    name,
    from: [...from],
    to,
    origin: [...origin],
    inflate,
    autouv: 1,
    box_uv: true,
  })
    .init()
    .addTo(parent);
  c.mapAutoUV?.();
  getHost().textures.find(textureUuid)?.applyToCube(c.uuid, true);
  return c;
}
