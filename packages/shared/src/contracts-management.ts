import { z } from "zod";
import { vec3Schema } from "./protocol-base.js";

const faceEnum = z.enum(["north", "south", "east", "west", "up", "down"]);

export const getElementsParamsSchema = z
  .object({ refs: z.array(z.string().min(1)).max(256).optional() })
  .strict();

const elementUpdateSchema = z
  .object({
    ref: z.string().min(1),
    name: z.string().min(1).optional(),
    parent: z.string().min(1).optional(),
    from: vec3Schema.optional(),
    to: vec3Schema.optional(),
    origin: vec3Schema.optional(),
    rotation: vec3Schema.optional(),
    inflate: z.number().optional(),
    visibility: z.boolean().optional(),
  })
  .strict();

export const updateElementsParamsSchema = z
  .object({
    updates: z.array(elementUpdateSchema).min(1).max(256),
    undo_label: z.string().min(1).optional(),
  })
  .strict();

export const setFaceUvParamsSchema = z
  .object({
    entries: z
      .array(
        z
          .object({
            cube: z.string().min(1),
            face: faceEnum,
            uv: z.tuple([z.number(), z.number(), z.number(), z.number()]),
            rotation: z
              .union([
                z.literal(0),
                z.literal(90),
                z.literal(180),
                z.literal(270),
              ])
              .optional(),
          })
          .strict(),
      )
      .min(1)
      .max(1536),
  })
  .strict();

export const assignTextureParamsSchema = z
  .object({
    texture: z.string().min(1),
    cubes: z.array(z.string().min(1)).min(1).max(256),
    faces: z.array(faceEnum).min(1).optional(),
  })
  .strict();

export const setProjectMetaParamsSchema = z
  .object({
    name: z.string().min(1).optional(),
    geometry_name: z.string().min(1).optional(),
    texture_width: z.number().int().positive().max(4096).optional(),
    texture_height: z.number().int().positive().max(4096).optional(),
  })
  .strict()
  .refine((value) => Object.keys(value).length > 0, {
    message: "At least one project field is required",
  });

export const deleteAnimationParamsSchema = z
  .object({ name: z.string().min(1) })
  .strict();
