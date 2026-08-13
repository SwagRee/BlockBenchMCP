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
import {
  getTextureParamsSchema,
  getUvLayoutParamsSchema,
  getUvMapParamsSchema,
  packBoxUvParamsSchema,
  paintFaceFeaturesParamsSchema,
  paintPixelBatchParamsSchema,
  resizeTextureParamsSchema,
  shadeModelBaseParamsSchema,
  paintFaceGridParamsSchema,
  getFaceGridParamsSchema,
  editTexturePixelsParamsSchema,
  replaceTextureColorParamsSchema,
  copyFacePixelsParamsSchema,
  analyzeTexturePaletteParamsSchema,
  getTextureRegionParamsSchema,
  importTexturePngParamsSchema,
  exportTexturePngParamsSchema,
} from "./contracts-texture.js";
import {
  assignTextureParamsSchema,
  deleteAnimationParamsSchema,
  getElementsParamsSchema,
  setFaceUvParamsSchema,
  setProjectMetaParamsSchema,
  updateElementsParamsSchema,
} from "./contracts-management.js";

export interface CommandSpec<P extends z.ZodType = z.ZodType> {
  description: string;
  mutates: boolean;
  params: P;
  result?: z.ZodType;
}

export const COMMAND_SPECS = {
  list_formats: {
    description:
      "List model formats currently registered in Blockbench, including plugin formats.",
    mutates: false,
    params: z.object({}).strict(),
  },
  get_project_summary: {
    description:
      "Compact outliner + counts. Prefer over screenshots for situational awareness.",
    mutates: false,
    params: z.object({}).strict(),
    result: projectSummarySchema,
  },
  get_elements: {
    description:
      "Read exact cube/group geometry, hierarchy, visibility, UV rectangles, rotations, and texture references.",
    mutates: false,
    params: getElementsParamsSchema,
  },
  list_textures: {
    description:
      "List project textures with UUID, name, and bitmap dimensions.",
    mutates: false,
    params: z.object({}).strict(),
  },
  list_animations: {
    description: "List project animations with name, length, and loop mode.",
    mutates: false,
    params: z.object({}).strict(),
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
          .enum([
            "modeling",
            "texturing",
            "animation",
            "java_block",
            "geckolib",
          ])
          .optional(),
      })
      .strict(),
  },
  create_project: {
    description:
      "Create java_block or geckolib_model project (closes nothing silently — requires format).",
    mutates: true,
    params: createProjectParamsSchema,
  },
  set_project_meta: {
    description:
      "Update project name, geometry identifier, or texture resolution in one undo.",
    mutates: true,
    params: setProjectMetaParamsSchema,
  },
  apply_geometry_batch: {
    description:
      "Create/delete groups+cubes in ONE undo. All-or-nothing. Prefer for multi-part shapes.",
    mutates: true,
    params: applyGeometryBatchParamsSchema,
  },
  update_elements: {
    description:
      "Batch rename, transform, resize, reparent, or show/hide existing cubes and groups in ONE undo.",
    mutates: true,
    params: updateElementsParamsSchema,
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
    description:
      "Create or reuse a project texture (default 64×64 solid fill).",
    mutates: true,
    params: ensureTextureParamsSchema,
  },
  auto_uv_cubes: {
    description:
      "Auto-UV cubes. mode auto|box|face (default auto from Project/Format: java_block→face, Bedrock→box). Prefer pack_box_uv for unique islands.",
    mutates: true,
    params: autoUvCubesParamsSchema,
  },
  get_uv_layout: {
    description:
      "Inspect the atlas as semantic face islands: UV rect, flips, rotation, model-face texel size/density, bounds, and overlaps.",
    mutates: false,
    params: getUvLayoutParamsSchema,
  },
  get_uv_map: {
    description:
      "Render the selected texture with UV island borders and optional cube.face labels as a native MCP image preview.",
    mutates: false,
    params: getUvMapParamsSchema,
  },
  get_face_grid: {
    description:
      "Read exact face-local texels as RGBA rows while honoring rotated and flipped UVs.",
    mutates: false,
    params: getFaceGridParamsSchema,
  },
  get_texture_region: {
    description:
      "Return a nearest-neighbor zoom of one face or atlas region with checkerboard and pixel grid.",
    mutates: false,
    params: getTextureRegionParamsSchema,
  },
  analyze_texture_palette: {
    description:
      "Count exact RGBA colors and transparency for a texture or one face.",
    mutates: false,
    params: analyzeTexturePaletteParamsSchema,
  },
  set_face_uv: {
    description:
      "Set exact per-face UV rectangles and optional quarter-turn rotation for multiple cube faces in ONE undo.",
    mutates: true,
    params: setFaceUvParamsSchema,
  },
  pack_box_uv: {
    description:
      "Pack unique UV islands before shade/paint. Auto-detects box vs per-face (java_block→face). Optional mode box|face|auto; auto_resize grows atlas.",
    mutates: true,
    params: packBoxUvParamsSchema,
  },
  resize_texture: {
    description:
      "Resize a texture with nearest-neighbor sampling and optionally rescale all UV coordinates in ONE undo.",
    mutates: true,
    params: resizeTextureParamsSchema,
  },
  shade_model_base: {
    description:
      "BEST texture base: assign texture, region colors by name regex, soft face lighting + mottle + blur (sosadly-style). Then paint features.",
    mutates: true,
    params: shadeModelBaseParamsSchema,
  },
  mirror_elements: {
    description: "Mirror named groups/cubes across an axis with smart rename.",
    mutates: true,
    params: mirrorElementsParamsSchema,
  },
  paint_face_feature: {
    description:
      "Paint one rect/ellipse/fill in face-local UV space. Prefer paint_face_features for batches.",
    mutates: true,
    params: paintFaceFeatureParamsSchema,
  },
  paint_face_features: {
    description:
      "Batch face-local paint ops (fill/rect/ellipse/line) in ONE undo — eyes, mouth, trim across many faces.",
    mutates: true,
    params: paintFaceFeaturesParamsSchema,
  },
  paint_pixel_batch: {
    description:
      "Batch pixel brush paths in face-local UV space. Square/circle brushes, clipped to each face by default, in ONE undo.",
    mutates: true,
    params: paintPixelBatchParamsSchema,
  },
  paint_face_grid: {
    description:
      "Write palette-indexed face-sized texel grids exactly, including transparent erase, in one undo.",
    mutates: true,
    params: paintFaceGridParamsSchema,
  },
  edit_texture_pixels: {
    description:
      "Set or erase exact atlas or face-local RGBA pixels in one undo.",
    mutates: true,
    params: editTexturePixelsParamsSchema,
  },
  replace_texture_color: {
    description:
      "Replace or erase a color globally or on one face with bounded RGBA tolerance.",
    mutates: true,
    params: replaceTextureColorParamsSchema,
  },
  copy_face_pixels: {
    description:
      "Copy face pixels to another face with optional mirror and quarter-turn rotation.",
    mutates: true,
    params: copyFacePixelsParamsSchema,
  },
  import_texture_png: {
    description:
      "Import a PNG only from the user-approved scoped directory into a texture.",
    mutates: true,
    params: importTexturePngParamsSchema,
  },
  export_texture_png: {
    description:
      "Export a texture as original-resolution PNG inside the user-approved scoped directory.",
    mutates: true,
    params: exportTexturePngParamsSchema,
  },
  get_texture: {
    description:
      "Inspect the texture sheet as a compact PNG data_url (default max_edge 256).",
    mutates: false,
    params: getTextureParamsSchema,
  },
  assign_texture: {
    description:
      "Assign an existing texture to cubes, optionally limited to selected faces, in ONE undo.",
    mutates: true,
    params: assignTextureParamsSchema,
  },
  upsert_animation: {
    description:
      "Create/replace a real bone animation clip with rotation/position/scale keys and linear/catmullrom/step interpolation.",
    mutates: true,
    params: upsertAnimationParamsSchema,
  },
  delete_animation: {
    description: "Delete one animation by name in a single undo step.",
    mutates: true,
    params: deleteAnimationParamsSchema,
  },
  propose_scoped_directory: {
    description:
      "Ask user to allow session file access under an absolute directory.",
    mutates: false,
    params: z.object({ path: z.string().min(1) }).strict(),
  },
  save_project: {
    description:
      "Compile the open project as a real .bbmodel inside the confirmed scoped directory. overwrite must be explicit.",
    mutates: true,
    params: z
      .object({
        path: z
          .string()
          .min(1)
          .regex(/\.bbmodel$/i, "path must end in .bbmodel"),
        overwrite: z.boolean().optional(),
      })
      .strict(),
  },
  export_model: {
    description:
      "Compile the open model through its active format codec into the confirmed scoped directory. overwrite must be explicit.",
    mutates: true,
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
