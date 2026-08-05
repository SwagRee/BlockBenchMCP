import { z } from "zod";
import {
  applyGeometryBatchParamsSchema,
  captureViewsParamsSchema,
  checkModelResultSchema,
  createLimbParamsSchema,
  createProjectParamsSchema,
  paintFaceFeatureParamsSchema,
  projectSummarySchema,
} from "./contracts.js";
import {
  autoUvCubesParamsSchema,
  ensureTextureParamsSchema,
  mirrorElementsParamsSchema,
  scaffoldBipedParamsSchema,
  upsertAnimationParamsSchema,
} from "./contracts-extra.js";

export interface CommandSpec<P extends z.ZodType = z.ZodType> {
  description: string;
  mutates: boolean;
  params: P;
  result?: z.ZodType;
}

export const COMMAND_SPECS = {
  get_project_summary: {
    description:
      "Compact outliner + counts. Prefer over screenshots for situational awareness.",
    mutates: false,
    params: z.object({}).strict(),
    result: projectSummarySchema,
  },
  check_model: {
    description:
      "Audit overlaps, empty groups, zero-size cubes, bad pivots, untextured faces. Call after geometry batches.",
    mutates: false,
    params: z.object({}).strict(),
    result: checkModelResultSchema,
  },
  capture_views: {
    description:
      "Low-res multi-angle screenshots. Default max_edge 256 jpeg. Use sparingly after check_model.",
    mutates: false,
    params: captureViewsParamsSchema,
  },
  get_guide: {
    description:
      "Playbook before building. Topics: modeling|texturing|animation|java_block|geckolib. ALWAYS call modeling first for entities.",
    mutates: false,
    params: z
      .object({
        topic: z
          .enum(["modeling", "texturing", "animation", "java_block", "geckolib"])
          .optional(),
      })
      .strict(),
  },
  create_project: {
    description: "Create java_block or geckolib_model project (closes nothing silently — requires format).",
    mutates: true,
    params: createProjectParamsSchema,
  },
  apply_geometry_batch: {
    description:
      "Create/delete groups+cubes in ONE undo. All-or-nothing. Prefer for multi-part shapes.",
    mutates: true,
    params: applyGeometryBatchParamsSchema,
  },
  create_limb: {
    description:
      "Bone+cube with pivot at joint. Optional X mirror (arm_left/arm_right). Prefer for characters.",
    mutates: true,
    params: createLimbParamsSchema,
  },
  scaffold_biped: {
    description:
      "BEST START for humanoids: Steve-like biped bones+cubes+64² texture with correct pivots. Prefer over hand-placing limbs.",
    mutates: true,
    params: scaffoldBipedParamsSchema,
  },
  ensure_texture: {
    description: "Create or reuse a project texture (default 64×64 solid fill).",
    mutates: true,
    params: ensureTextureParamsSchema,
  },
  auto_uv_cubes: {
    description: "Box-UV (or face) map named cubes / all cubes.",
    mutates: true,
    params: autoUvCubesParamsSchema,
  },
  mirror_elements: {
    description: "Mirror named groups/cubes across an axis with smart rename.",
    mutates: true,
    params: mirrorElementsParamsSchema,
  },
  paint_face_feature: {
    description: "Paint rect/ellipse/fill in face-local UV space (eyes, trim). Not raw brushes.",
    mutates: true,
    params: paintFaceFeatureParamsSchema,
  },
  upsert_animation: {
    description: "Create/replace a simple bone animation clip (rotation/position keys).",
    mutates: true,
    params: upsertAnimationParamsSchema,
  },
  propose_scoped_directory: {
    description: "Ask user to allow session file access under an absolute directory.",
    mutates: false,
    params: z.object({ path: z.string().min(1) }).strict(),
  },
  export_model: {
    description: "Save/export project into scoped directory. overwrite must be explicit.",
    mutates: false,
    params: z
      .object({
        path: z.string().min(1),
        overwrite: z.boolean().optional(),
      })
      .strict(),
  },
} as const satisfies Record<string, CommandSpec>;

export type CommandName = keyof typeof COMMAND_SPECS;
export const COMMAND_NAMES = Object.keys(COMMAND_SPECS) as CommandName[];

export function isCommandName(value: string): value is CommandName {
  return value in COMMAND_SPECS;
}
