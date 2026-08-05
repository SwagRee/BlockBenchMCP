import { z } from "zod";

const faceEnum = z.enum(["north", "south", "east", "west", "up", "down"]);

export const packBoxUvParamsSchema = z
  .object({
    cubes: z.array(z.string().min(1)).optional(),
    padding: z.number().int().nonnegative().max(8).optional(),
    /** Grow Project.texture_* and bitmap if packed extent overflows. */
    auto_resize: z.boolean().optional(),
    /**
     * UV strategy. Default `auto` reads Project/Format/cubes
     * (`java_block` → per-face, Bedrock-style → box).
     */
    mode: z.enum(["box", "face", "auto"]).optional(),
  })
  .strict();

export const shadeModelBaseParamsSchema = z
  .object({
    cubes: z.array(z.string().min(1)).optional(),
    texture: z.string().optional(),
    base: z.string().min(1).optional(),
    /** First regex match wins: [{ match: "head", color: "#C68642" }, ...] */
    regions: z
      .array(
        z
          .object({
            match: z.string().min(1),
            color: z.string().min(1),
          })
          .strict(),
      )
      .optional(),
    top_light: z.number().min(0).max(1).optional(),
    bottom_dark: z.number().min(0).max(1).optional(),
    noise: z.number().min(0).max(1).optional(),
    blur: z.number().min(0).max(1).optional(),
    edge_darken: z.number().min(0).max(1).optional(),
  })
  .strict();

const paintOpSchema = z
  .object({
    type: z.enum(["fill", "rect", "ellipse", "line"]),
    x: z.number().optional(),
    y: z.number().optional(),
    width: z.number().positive().optional(),
    height: z.number().positive().optional(),
    x2: z.number().optional(),
    y2: z.number().optional(),
    color: z.string().min(1),
  })
  .strict();

export const paintFaceFeaturesParamsSchema = z
  .object({
    texture: z.string().optional(),
    faces: z
      .array(
        z
          .object({
            cube: z.string().min(1),
            face: faceEnum,
            ops: z.array(paintOpSchema).min(1),
          })
          .strict(),
      )
      .min(1),
  })
  .strict();

export const getTextureParamsSchema = z
  .object({
    texture: z.string().optional(),
    /** Longest edge cap for returned image (default 256). */
    max_edge: z.number().int().positive().max(1024).optional(),
  })
  .strict();
