// Shared adapter-plugin protocol contract.
// This module must stay free of Node builtins: it compiles under both the
// adapter (Node) and plugin (browser/Blockbench) TypeScript configurations.
import { z } from 'zod';

export const PROTOCOL_VERSION = 5;

export const DEFAULT_WS_PORT = 39731;

// Operational defaults shared by both sides. All of them are configurable on
// the adapter; the hello_ack tells the plugin the effective heartbeat settings.
export const DEFAULTS = {
  requestTimeoutMs: 30_000,
  // propose_scoped_directory waits for a human decision inside Blockbench.
  scopeProposalTimeoutMs: 120_000,
  heartbeatIntervalMs: 15_000,
  heartbeatMissLimit: 2,
  handshakeTimeoutMs: 5_000,
  maxMessageBytes: 16 * 1024 * 1024,
  screenshotDefaultSize: 512,
  screenshotMaxSize: 1920,
  maxTextureDataUrlBytes: 8 * 1024 * 1024,
} as const;

export const ERROR_CODES = [
  'E_PLUGIN_NOT_CONNECTED',
  'E_SECRET_MISSING',
  'E_AUTH_FAILED',
  'E_SESSION_EXISTS',
  'E_PORT_IN_USE',
  'E_LISTENER_FAILED',
  'E_PROTOCOL_MISMATCH',
  'E_TIMEOUT',
  'E_INVALID_PARAMS',
  'E_UNSUPPORTED_COMMAND',
  'E_SCOPE_NOT_CONFIRMED',
  'E_SCOPE_EXPIRED',
  'E_SCOPE_REVOKED',
  'E_PATH_OUTSIDE_SCOPE',
  'E_FILE_EXISTS',
  'E_PREFLIGHT_FAILED',
  'E_NOT_FOUND',
  'E_FORMAT_UNSUPPORTED',
  'E_PLUGIN_DEPENDENCY_MISSING',
  'E_BLOCKBENCH_ERROR',
] as const;

export type ErrorCode = (typeof ERROR_CODES)[number];

export const errorPayloadSchema = z.object({
  code: z.enum(ERROR_CODES),
  message: z.string(),
  details: z.unknown().optional(),
});

export type ErrorPayload = z.infer<typeof errorPayloadSchema>;

// ---------------------------------------------------------------------------
// Scope status (session-only scoped-directory state machine)
// ---------------------------------------------------------------------------

export const SCOPE_STATES = ['unconfirmed', 'proposed', 'confirmed', 'revoked', 'expired'] as const;

export const scopeStatusSchema = z.object({
  state: z.enum(SCOPE_STATES),
  normalized_path: z.string().optional(),
});

export type ScopeStatus = z.infer<typeof scopeStatusSchema>;

// ---------------------------------------------------------------------------
// Common result fragments
// ---------------------------------------------------------------------------

// Write results report the normalized destination path plus whether the file
// was created, updated without conflict, or explicitly overwritten. With the
// per-operation overwrite flag rules of this protocol, the current write
// commands report 'created' or 'overwritten'; 'updated' is reserved for
// future non-conflicting update semantics.
export const writeResultSchema = z.object({
  path: z.string(),
  status: z.enum(['created', 'updated', 'overwritten']),
  bytes: z.number().int().nonnegative(),
});

export type WriteResult = z.infer<typeof writeResultSchema>;

// UV vectors reject non-finite values: JSON.stringify turns Infinity/NaN
// into null, which corrupts exported model files.
const finiteNumber = z.number().finite();

const vec2 = z.tuple([finiteNumber, finiteNumber]);

const vec3 = z.tuple([finiteNumber, finiteNumber, finiteNumber]);

const cubeFaceNames = ['north', 'south', 'east', 'west', 'up', 'down'] as const;

// Per-face UV rectangle [x1, y1, x2, y2] in project texture-resolution space.
const faceUvSchema = z.tuple([finiteNumber, finiteNumber, finiteNumber, finiteNumber]);

// Per-face texture rotation in degrees; Blockbench writes accept only
// quarter turns (read-back can carry other values from imported JSON).
const faceRotationSchema = z.union([z.literal(0), z.literal(90), z.literal(180), z.literal(270)]);

// ---------------------------------------------------------------------------
// Command registry
// ---------------------------------------------------------------------------

export interface CommandSpec {
  description: string;
  /** True when the command mutates Blockbench project state or files. */
  mutates: boolean;
  params: z.ZodTypeAny;
  result: z.ZodTypeAny;
  /** Adapter-side request timeout override in milliseconds. */
  timeoutMs?: number;
}

const getPluginStatusParams = z.object({}).strict();
const getPluginStatusResult = z.object({
  plugin_version: z.string(),
  blockbench_version: z.string(),
  protocol_version: z.number().int(),
  capabilities: z.array(z.string()),
  scope: scopeStatusSchema,
  // Version of the third-party GeckoLib Blockbench plugin when it is installed
  // and detectable; absent otherwise.
  geckolib_plugin_version: z.string().optional(),
});

const getProjectStateParams = z
  .object({
    include_objects: z.boolean().optional().describe('Include per-object identifier lists (default true).'),
  })
  .strict();
const getProjectStateResult = z.object({
  open: z.boolean(),
  format: z.string().optional(),
  name: z.string().optional(),
  saved: z.boolean().optional(),
  counts: z
    .object({
      cubes: z.number().int().nonnegative(),
      groups: z.number().int().nonnegative(),
      textures: z.number().int().nonnegative(),
    })
    .optional(),
  cubes: z.array(z.object({ uuid: z.string(), name: z.string() })).optional(),
  groups: z.array(z.object({ uuid: z.string(), name: z.string() })).optional(),
  textures: z.array(z.object({ uuid: z.string(), name: z.string(), id: z.string().optional() })).optional(),
  // Loop modes use GeckoLib .animation.json terms (Blockbench `hold` maps to
  // `hold_on_last_frame`); absent when the project has no animations.
  animations: z
    .array(
      z.object({
        name: z.string(),
        loop: z.enum(['once', 'loop', 'hold_on_last_frame']),
        length: z.number().finite(),
      }),
    )
    .optional(),
});

const getElementsParams = z
  .object({
    uuids: z
      .array(z.string())
      .min(1)
      .optional()
      .describe(
        'Cube/group UUIDs to read back; any unknown UUID fails with E_NOT_FOUND and returns nothing. Omit to return every element.',
      ),
  })
  .strict();

// Read-back state of one cube face. texture_uuid is the face's stored
// texture reference; null covers both "no texture assigned" and "face
// disabled" (Blockbench stores false/null there). Single-texture formats can
// render a default texture that no face references explicitly.
const cubeFaceReadbackSchema = z.object({
  uv: faceUvSchema,
  rotation: z
    .number()
    .describe('Face texture rotation in degrees: 0/90/180/270 in UI-authored models; imported JSON may carry other values.'),
  texture_uuid: z.string().nullable(),
});

const cubeReadbackSchema = z.object({
  uuid: z.string(),
  name: z.string(),
  from: vec3,
  to: vec3,
  origin: vec3,
  // Rotation is the stored per-axis degree vector. update_cube writes take a
  // single axis/angle pair instead, so this field is read-back only.
  rotation: vec3,
  visibility: z.boolean(),
  box_uv: z.boolean(),
  uv_offset: vec2,
  mirror_uv: z.boolean(),
  faces: z.record(z.enum(cubeFaceNames), cubeFaceReadbackSchema),
  parent_uuid: z.string().nullable(),
});

const groupReadbackSchema = z.object({
  uuid: z.string(),
  name: z.string(),
  origin: vec3,
  parent_uuid: z.string().nullable(),
  // Direct cube/group children in outliner order. Other element types
  // (meshes, locators, ...) are outside this read-back surface and their
  // UUIDs never appear here.
  children: z.array(z.string()),
});

const getElementsResult = z.object({
  cubes: z.array(cubeReadbackSchema),
  groups: z.array(groupReadbackSchema),
});

export type CubeReadback = z.infer<typeof cubeReadbackSchema>;
export type GroupReadback = z.infer<typeof groupReadbackSchema>;

const createProjectParams = z
  .object({
    format: z.literal('java_block'),
    name: z.string().optional(),
    force: z
      .boolean()
      .optional()
      .describe('Required when an unsaved project is open; the new project opens in a separate tab.'),
  })
  .strict();
const createProjectResult = z.object({
  created: z.boolean(),
  format: z.string(),
  name: z.string().optional(),
});

const openModelParams = z
  .object({
    path: z.string().describe('Model JSON path inside the confirmed scoped directory (absolute or scope-relative).'),
    force: z
      .boolean()
      .optional()
      .describe('Required when an unsaved project is open; the model opens in a separate tab.'),
  })
  .strict();
const openModelResult = z.object({
  opened: z.boolean(),
  format: z.string(),
  name: z.string().optional(),
  counts: z.object({
    cubes: z.number().int().nonnegative(),
    groups: z.number().int().nonnegative(),
    textures: z.number().int().nonnegative(),
  }),
});

const cubeRotationSchema = z.object({
  axis: z.enum(['x', 'y', 'z']),
  angle: finiteNumber,
  origin: vec3.optional(),
});

const createCubesParams = z
  .object({
    cubes: z
      .array(
        z
          .object({
            name: z.string().optional(),
            from: vec3,
            to: vec3,
            origin: vec3.optional(),
            rotation: cubeRotationSchema.optional(),
            group_uuid: z.string().optional(),
            box_uv: z.boolean().optional().describe('Per-cube UV mode (default: the project setting).'),
            uv_offset: vec2
              .optional()
              .describe('Box-UV texture offset. Providing UV state disables auto-UV for the cube.'),
          })
          .strict(),
      )
      .min(1),
  })
  .strict();
const createCubesResult = z.object({
  cubes: z.array(z.object({ uuid: z.string(), name: z.string() })),
});

const setCubeUvFaceSchema = z
  .object({
    uv: faceUvSchema,
    rotation: faceRotationSchema.optional().describe('Face texture rotation in degrees (quarter turns).'),
  })
  .strict();

const setCubeUvParams = z
  .object({
    uuid: z.string(),
    box_uv: z
      .boolean()
      .optional()
      .describe(
        'Switch the cube UV mode. A mode differing from the format default needs a format with optional per-cube box UV; otherwise the call fails with E_FORMAT_UNSUPPORTED.',
      ),
    uv_offset: vec2.optional().describe('Box-UV texture offset; valid in box UV mode only.'),
    mirror_uv: z.boolean().optional().describe('Box-UV X mirroring; valid in box UV mode only.'),
    faces: z
      .record(z.enum(cubeFaceNames), setCubeUvFaceSchema)
      .optional()
      .describe('Per-face UV rectangles plus optional rotation; valid in per-face UV mode only.'),
  })
  .strict()
  // One refinement level only: the adapter advertises the unwrapped inner
  // object in tools/list, and nesting refinements would hide the schema.
  .superRefine((params, ctx) => {
    if (
      params.box_uv === undefined &&
      params.uv_offset === undefined &&
      params.mirror_uv === undefined &&
      params.faces === undefined
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'At least one of box_uv, uv_offset, mirror_uv, or faces is required.',
      });
    }
    if (params.faces !== undefined && Object.keys(params.faces).length === 0) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'faces must name at least one face.', path: ['faces'] });
    }
  });
const setCubeUvResult = z.object({ uuid: z.string(), updated: z.literal(true) });

const setTextureResolutionParams = z
  .object({
    width: z.number().int().positive(),
    height: z.number().int().positive(),
    rescale_existing_uv: z
      .boolean()
      .optional()
      .describe(
        'Scale existing UV coordinates to the new resolution. Supported only when Blockbench itself can rescale: the new size is square, the width changes, and old/new widths are integer multiples; otherwise the call fails with E_INVALID_PARAMS before changing anything.',
      ),
  })
  .strict();
const setTextureResolutionResult = z.object({
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  updated: z.literal(true),
});

const updateCubeParams = z
  .object({
    uuid: z.string(),
    set: z
      .object({
        name: z.string().optional(),
        from: vec3.optional(),
        to: vec3.optional(),
        origin: vec3.optional(),
        rotation: cubeRotationSchema.nullable().optional(),
        visibility: z.boolean().optional(),
      })
      .strict(),
  })
  .strict();
const updateCubeResult = z.object({ uuid: z.string(), updated: z.literal(true) });

const deleteCubesParams = z.object({ uuids: z.array(z.string()).min(1) }).strict();
const deleteCubesResult = z.object({ deleted: z.number().int().nonnegative() });

const createGroupParams = z
  .object({
    name: z.string(),
    parent_uuid: z.string().optional(),
    origin: vec3.optional(),
  })
  .strict();
const createGroupResult = z.object({ uuid: z.string(), name: z.string() });

const updateGroupParams = z
  .object({
    uuid: z.string(),
    set: z
      .object({
        name: z.string().optional(),
        origin: vec3.optional(),
        parent_uuid: z.string().optional(),
      })
      .strict(),
  })
  .strict();
const updateGroupResult = z.object({ uuid: z.string(), updated: z.literal(true) });

const deleteGroupParams = z
  .object({
    uuid: z.string(),
    keep_children: z.boolean().optional().describe('Move children to the parent instead of deleting them (default false).'),
  })
  .strict();
const deleteGroupResult = z.object({ deleted: z.literal(true) });

const assignTextureParams = z
  .object({
    source: z.discriminatedUnion('kind', [
      z.object({ kind: z.literal('path'), path: z.string() }).strict(),
      z.object({ kind: z.literal('data_url'), data_url: z.string() }).strict(),
    ]),
    name: z.string().optional(),
    apply_to: z.union([
      z.literal('all'),
      z
        .object({
          cube_uuids: z.array(z.string()).min(1),
          faces: z.array(z.enum(cubeFaceNames)).optional(),
        })
        .strict(),
    ]),
  })
  .strict();
const assignTextureResult = z.object({
  texture_uuid: z.string(),
  name: z.string(),
  applied_to: z.union([z.literal('all'), z.array(z.string())]),
});

export const JAVA_DISPLAY_SLOTS = [
  'thirdperson_righthand',
  'thirdperson_lefthand',
  'firstperson_righthand',
  'firstperson_lefthand',
  'ground',
  'gui',
  'head',
  'fixed',
] as const;

const setDisplayTransformParams = z
  .object({
    slot: z.enum(JAVA_DISPLAY_SLOTS),
    translation: vec3.optional(),
    rotation: vec3.optional(),
    scale: vec3.optional(),
  })
  .strict();
const setDisplayTransformResult = z.object({ slot: z.enum(JAVA_DISPLAY_SLOTS), updated: z.literal(true) });

const exportModelParams = z
  .object({
    path: z.string(),
    overwrite: z
      .boolean()
      .optional()
      .describe('Required to replace an existing file at the destination; applies to this write only.'),
  })
  .strict();

const readFileParams = z
  .object({
    path: z.string(),
    encoding: z.enum(['utf8', 'base64']).optional(),
    // Bounded so a response can never exceed the transport's frame limit.
    max_bytes: z.number().int().positive().max(DEFAULTS.maxTextureDataUrlBytes).optional(),
  })
  .strict();
const readFileResult = z.object({
  path: z.string(),
  content: z.string(),
  encoding: z.enum(['utf8', 'base64']),
  bytes: z.number().int().nonnegative(),
});

const writeFilesParams = z
  .object({
    files: z
      .array(
        z
          .object({
            path: z.string(),
            content: z.string(),
            encoding: z.enum(['utf8', 'base64']).optional(),
            overwrite: z
              .boolean()
              .optional()
              .describe('Required to replace an existing file at this destination; applies to this file only.'),
          })
          .strict(),
      )
      .min(1),
  })
  .strict();
const writeFilesResult = z.object({ results: z.array(writeResultSchema) });

const saveProjectParams = z
  .object({
    path: z
      .string()
      // The saved file becomes the project's Ctrl+S target on a fresh save,
      // so a non-.bbmodel destination would let later native saves clobber
      // an unrelated file.
      .regex(/\.bbmodel$/i, 'The save_project destination must end in .bbmodel.')
      .describe('Destination ending in .bbmodel inside the confirmed scoped directory (absolute or scope-relative).'),
    overwrite: z
      .boolean()
      .optional()
      .describe('Required to replace an existing file at the destination; applies to this write only.'),
  })
  .strict();

/** Native Blockbench camera preset ids. Compass names are model-space: which
 * side is the "front" of a model depends on the format's forward_direction,
 * so no front/back/left/right aliases exist. */
export const SCREENSHOT_ANGLE_PRESETS = [
  'initial',
  'top',
  'bottom',
  'south',
  'north',
  'east',
  'west',
  'isometric_right',
  'isometric_left',
  'true_isometric_right',
  'true_isometric_left',
] as const;

const captureScreenshotParams = z
  .object({
    width: z.number().int().positive().max(DEFAULTS.screenshotMaxSize).optional(),
    height: z.number().int().positive().max(DEFAULTS.screenshotMaxSize).optional(),
    angle_preset: z
      .enum(SCREENSHOT_ANGLE_PRESETS)
      .optional()
      .describe(
        'Render from a native Blockbench camera preset through the offscreen preview; the visible viewport camera is never modified. Compass directions are model-space (the model\'s "front" depends on the format\'s forward_direction). Omit to capture the currently visible view.',
      ),
  })
  .strict();
const captureScreenshotResult = z.object({
  data_url: z.string(),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  angle_preset: z
    .enum(SCREENSHOT_ANGLE_PRESETS)
    .optional()
    .describe('Echoes the applied camera preset when one was requested.'),
});


const captureGeckolibAnimationFrameParams = z
  .object({
    animation: z.string().min(1).describe('Name of the GeckoLib animation clip to pose and capture.'),
    time: z.number().finite().nonnegative().describe('Timestamp in seconds to render within the named clip.'),
    width: z.number().int().positive().max(DEFAULTS.screenshotMaxSize).optional(),
    height: z.number().int().positive().max(DEFAULTS.screenshotMaxSize).optional(),
    angle_preset: z
      .enum(SCREENSHOT_ANGLE_PRESETS)
      .optional()
      .describe(
        'Render the posed GeckoLib model from a native Blockbench camera preset through the offscreen preview; omit to capture the currently visible view.',
      ),
  })
  .strict();
const captureGeckolibAnimationFrameResult = z.object({
  data_url: z.string(),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  animation: z.string(),
  time: z.number().nonnegative(),
  rendered_time: z.number().nonnegative(),
  angle_preset: z
    .enum(SCREENSHOT_ANGLE_PRESETS)
    .optional()
    .describe('Echoes the applied camera preset when one was requested.'),
});

const validateProjectParams = z.object({}).strict();
const validateProjectResult = z.object({
  diagnostics: z.array(
    z.object({
      severity: z.enum(['error', 'warning']),
      message: z.string(),
      check_id: z.string().optional(),
      // Named object (bone, property) a diagnostic points at, when one exists.
      target: z.string().optional(),
    }),
  ),
});

const proposeScopedDirectoryParams = z
  .object({
    path: z.string().describe('Absolute directory path proposed for session-scoped AI file access.'),
    reason: z.string().optional().describe('Shown to the Blockbench user in the confirmation dialog.'),
  })
  .strict();
const proposeScopedDirectoryResult = z.object({
  state: z.enum(['confirmed']),
  normalized_path: z.string(),
});

// ---------------------------------------------------------------------------
// GeckoLib format surface (requires the third-party "GeckoLib Models &
// Animations" Blockbench plugin, id `geckolib`, which registers the
// geckolib_model format at runtime)
// ---------------------------------------------------------------------------

export const GECKOLIB_MODEL_TYPES = ['Entity', 'Block', 'Item', 'Armor', 'Object'] as const;

// Matches the GeckoLib plugin's own modid validation; also used for the model
// identifier because it feeds `geometry.<identifier>` and export file names.
const geckolibNamePattern = /^[_\-.a-z0-9]+$/;

export const GECKOLIB_VALIDATION_PROFILE = 'gl4' as const;

const createGeckolibProjectParams = z
  .object({
    modid: z
      .string()
      .regex(geckolibNamePattern)
      .describe('Mod namespace (lowercase letters, digits, `_`, `-`, `.`), stored as geckolib_modid.'),
    model_type: z.enum(GECKOLIB_MODEL_TYPES),
    identifier: z
      .string()
      .regex(geckolibNamePattern)
      .describe('Object ID used for `geometry.<identifier>` and recommended export file names.'),
    name: z.string().optional(),
    force: z
      .boolean()
      .optional()
      .describe('Required when an unsaved project is open; the new project opens in a separate tab.'),
  })
  .strict();
const createGeckolibProjectResult = z.object({
  created: z.literal(true),
  format: z.literal('geckolib_model'),
  name: z.string().optional(),
  modid: z.string(),
  model_type: z.enum(GECKOLIB_MODEL_TYPES),
  identifier: z.string(),
});

const openGeckolibModelParams = z
  .object({
    path: z
      .string()
      .describe('GeckoLib .bbmodel path inside the confirmed scoped directory (absolute or scope-relative).'),
    force: z
      .boolean()
      .optional()
      .describe('Required when an unsaved project is open; the model opens in a separate tab.'),
  })
  .strict();
const openGeckolibModelResult = z.object({
  opened: z.boolean(),
  format: z.literal('geckolib_model'),
  name: z.string().optional(),
  counts: z.object({
    cubes: z.number().int().nonnegative(),
    groups: z.number().int().nonnegative(),
    textures: z.number().int().nonnegative(),
  }),
});

const geckolibExportParams = z
  .object({
    path: z.string(),
    overwrite: z
      .boolean()
      .optional()
      .describe('Required to replace an existing file at the destination; applies to this write only.'),
  })
  .strict();

const geckolibDiagnosticSchema = z.object({
  severity: z.enum(['error', 'warning']),
  message: z.string(),
  check_id: z.string(),
  target: z.string().optional(),
});

const validateGeckolibFileParams = z
  .object({
    geo_path: z
      .string()
      .optional()
      .describe('Bedrock geometry JSON (.geo.json) path inside the confirmed scoped directory.'),
    animation_path: z
      .string()
      .optional()
      .describe(
        'GeckoLib animation JSON path inside the confirmed scoped directory; content checks need no geometry, bone cross-checks also need geo_path.',
      ),
  })
  .strict()
  .refine((params) => params.geo_path !== undefined || params.animation_path !== undefined, {
    message: 'At least one of geo_path or animation_path is required.',
  });
const validateGeckolibFileResult = z.object({
  diagnostics: z.array(geckolibDiagnosticSchema),
  profile: z.literal(GECKOLIB_VALIDATION_PROFILE),
});

// Per-keyframe easing names whitelisted by the GeckoLib Blockbench plugin
// 4.2.5: linear, step, and easeIn/easeOut/easeInOut for each of the ten curve
// families. This is the closed authoring enum; the validator additionally
// accepts GL4 registry aliases when reading files.
export const GECKOLIB_EASING_NAMES = [
  'linear',
  'step',
  'easeInQuad',
  'easeOutQuad',
  'easeInOutQuad',
  'easeInCubic',
  'easeOutCubic',
  'easeInOutCubic',
  'easeInQuart',
  'easeOutQuart',
  'easeInOutQuart',
  'easeInQuint',
  'easeOutQuint',
  'easeInOutQuint',
  'easeInSine',
  'easeOutSine',
  'easeInOutSine',
  'easeInExpo',
  'easeOutExpo',
  'easeInOutExpo',
  'easeInCirc',
  'easeOutCirc',
  'easeInOutCirc',
  'easeInBack',
  'easeOutBack',
  'easeInOutBack',
  'easeInElastic',
  'easeOutElastic',
  'easeInOutElastic',
  'easeInBounce',
  'easeOutBounce',
  'easeInOutBounce',
] as const;

/** Loop modes in GeckoLib .animation.json terms (Blockbench's `hold` maps to
 * `hold_on_last_frame` at export). */
export const GECKOLIB_LOOP_MODES = ['once', 'loop', 'hold_on_last_frame'] as const;

// Numbers are constrained to finite values: GeckoLib serializes with JSON,
// and Infinity/NaN would export as null and drop the animation at load.
const molangNumberSchema = z
  .union([z.number().finite(), z.string()])
  .describe('A number or a molang expression string (molang is passed through, never evaluated).');

const geckolibKeyframeSchema = z
  .object({
    time: z.number().finite().nonnegative().describe('Keyframe time in seconds from clip start.'),
    value: z
      .union([z.number().finite(), z.string(), z.tuple([molangNumberSchema, molangNumberSchema, molangNumberSchema])])
      .describe(
        'Keyframe value in the GeckoLib .animation.json convention: a number or molang string (applied to all three axes) or an [x, y, z] array of number|molang-string.',
      ),
    interpolation: z
      .enum(['linear', 'catmullrom', 'step'])
      .optional()
      .describe('Interpolation to the next keyframe (default linear).'),
    easing: z
      .enum(GECKOLIB_EASING_NAMES)
      .optional()
      .describe('GeckoLib per-keyframe easing name (absent means linear).'),
    easingArgs: z
      .array(z.number().finite())
      .optional()
      .describe('Numeric easing arguments; used by the Back/Elastic/Bounce families and step.'),
  })
  .strict();

const geckolibKeyframeListSchema = z.array(geckolibKeyframeSchema).superRefine((keyframes, ctx) => {
  const seen = new Map<number, number>();
  keyframes.forEach((keyframe, index) => {
    const existing = seen.get(keyframe.time);
    if (existing !== undefined) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Keyframes ${existing} and ${index} share time ${keyframe.time}; keyframe times must be unique per channel.`,
        path: [index, 'time'],
      });
    } else {
      seen.set(keyframe.time, index);
    }
  });
});

const geckolibAnimationChannelsSchema = z
  .object({
    rotation: geckolibKeyframeListSchema.optional(),
    position: geckolibKeyframeListSchema.optional(),
    scale: geckolibKeyframeListSchema.optional(),
  })
  .strict();

// Shared clip payload: upsert_geckolib_animation input and
// get_geckolib_animation output use exactly this shape.
const geckolibAnimationClipSchema = z
  .object({
    name: z.string().min(1).describe('Animation name (the clip key), e.g. animation.<entity>.<action>.'),
    loop: z.enum(GECKOLIB_LOOP_MODES).optional().describe('GeckoLib loop mode (default once).'),
    length: z.number().finite().nonnegative().describe('Clip length in seconds.'),
    override: z.boolean().optional().describe('Override lower-priority animations (default false).'),
    anim_time_update: z
      .string()
      .optional()
      .describe('Molang expression driving clip time (passed through, never evaluated).'),
    bones: z
      .record(geckolibAnimationChannelsSchema)
      .describe(
        'Bone name → rotation/position/scale keyframe lists. Bone names must match current group names. Values use the GeckoLib .animation.json convention (what export_geckolib_animations writes): rotation X/Y and position X are stored inverted relative to the Blockbench UI; the handler applies that mapping.',
      ),
  })
  .strict();

const upsertGeckolibAnimationParams = geckolibAnimationClipSchema
  .extend({
    replace: z
      .boolean()
      .optional()
      .describe('Must be true to overwrite an existing animation with the same name; applies to this call only.'),
  })
  .strict();
const upsertGeckolibAnimationResult = z.object({
  name: z.string(),
  status: z.enum(['created', 'replaced']),
});

const deleteGeckolibAnimationParams = z.object({ name: z.string().min(1) }).strict();
const deleteGeckolibAnimationResult = z.object({ deleted: z.literal(true) });

const getGeckolibAnimationParams = z.object({ name: z.string().min(1) }).strict();
const getGeckolibAnimationResult = geckolibAnimationClipSchema;

// Format-neutral operations work in any Blockbench project format and are the
// reuse surface for later format adapters.
export const FORMAT_NEUTRAL_COMMAND_SPECS = {
  get_plugin_status: {
    description: 'Report plugin/Blockbench versions, capabilities, and scoped-directory status. Read-only.',
    mutates: false,
    params: getPluginStatusParams,
    result: getPluginStatusResult,
  },
  get_project_state: {
    description:
      'Inspect the currently open project: format, name, object counts, and object identifiers. Read-only.',
    mutates: false,
    params: getProjectStateParams,
    result: getProjectStateResult,
  },
  get_elements: {
    description:
      'Read back cube and group state: geometry (from/to/origin/rotation), visibility, UV state (box_uv, uv_offset, mirror_uv, per-face uv/rotation/texture reference), and parent/child hierarchy. Cube name/from/to/origin/visibility values are valid update_cube input verbatim; cube rotation reads back as the stored per-axis degree vector. Mesh and locator elements are not returned. Responses share the 16 MiB message limit; pass uuids to bound the response on large projects. Read-only.',
    mutates: false,
    params: getElementsParams,
    result: getElementsResult,
  },
  create_cubes: {
    description: 'Create new cube elements. Always creates new objects and returns their UUIDs.',
    mutates: true,
    params: createCubesParams,
    result: createCubesResult,
  },
  update_cube: {
    description: 'Update one existing cube addressed by UUID. Fails with E_NOT_FOUND for unknown UUIDs.',
    mutates: true,
    params: updateCubeParams,
    result: updateCubeResult,
  },
  set_cube_uv: {
    description:
      'Set one cube\'s UV state: box-UV offset/mirroring, per-face UV rectangles with optional quarter-turn rotation, and the UV mode switch (via the cube setUVMode API, honoring the format\'s optional per-cube box UV). Box fields need box UV mode, faces need per-face mode, mismatches fail with E_INVALID_PARAMS. Explicit UV state disables auto-UV for the cube. One undo step.',
    mutates: true,
    params: setCubeUvParams,
    result: setCubeUvResult,
  },
  set_texture_resolution: {
    description:
      'Set the project texture resolution (texture_width/texture_height) through the native Blockbench resolution utility, optionally rescaling existing UV coordinates. Resolves the validate_project texture-size mismatch warning. One undo step.',
    mutates: true,
    params: setTextureResolutionParams,
    result: setTextureResolutionResult,
  },
  delete_cubes: {
    description: 'Delete existing cubes addressed by UUID.',
    mutates: true,
    params: deleteCubesParams,
    result: deleteCubesResult,
  },
  create_group: {
    description: 'Create a new group/bone. Always creates a new object and returns its UUID.',
    mutates: true,
    params: createGroupParams,
    result: createGroupResult,
  },
  update_group: {
    description: 'Update one existing group addressed by UUID. Fails with E_NOT_FOUND for unknown UUIDs.',
    mutates: true,
    params: updateGroupParams,
    result: updateGroupResult,
  },
  delete_group: {
    description: 'Delete an existing group addressed by UUID; children move to the parent when keep_children is true.',
    mutates: true,
    params: deleteGroupParams,
    result: deleteGroupResult,
  },
  assign_texture: {
    description:
      'Add a texture from a scoped file path or data URL and apply it to all cubes or to selected cubes/faces. Creates a new texture object.',
    mutates: true,
    params: assignTextureParams,
    result: assignTextureResult,
  },
  read_file: {
    description: 'Read a file inside the confirmed scoped directory. Read-only.',
    mutates: false,
    params: readFileParams,
    result: readFileResult,
  },
  write_files: {
    description:
      'Write one or more files inside the confirmed scoped directory. Preflights all destinations and writes nothing when any blocker exists; each overwrite must be explicitly flagged per file.',
    mutates: true,
    params: writeFilesParams,
    result: writeFilesResult,
  },
  save_project: {
    description:
      'Save the open project of any format as a .bbmodel file inside the confirmed scoped directory. Compiles through the project codec, whose compile hooks other installed plugins may use to adjust the output. A project without a save path adopts the destination and is marked saved; saving to a path that differs from the current save path leaves the save target and unsaved indicator untouched. Overwrite must be explicitly flagged.',
    mutates: true,
    params: saveProjectParams,
    result: writeResultSchema,
  },
  capture_screenshot: {
    description:
      'Capture a bounded screenshot of the model preview as a data URL, optionally from a named camera preset rendered offscreen (the visible viewport camera is never modified; "front" depends on the format\'s forward_direction). Preset renders share the offscreen preview that Blockbench\'s own screenshot dialog and recorder use; captures are serialized and fail while a recording is running. Read-only.',
    mutates: false,
    params: captureScreenshotParams,
    result: captureScreenshotResult,
    // Captures queue behind each other on the shared offscreen preview, so a
    // burst of requests needs more than the default request timeout.
    timeoutMs: 60_000,
  },
  validate_project: {
    description: 'Run Blockbench validation checks and return structured diagnostics. Read-only.',
    mutates: false,
    params: validateProjectParams,
    result: validateProjectResult,
  },
  propose_scoped_directory: {
    description:
      'Propose a directory for session-scoped AI file access. The Blockbench user must confirm inside Blockbench; rejection returns E_SCOPE_NOT_CONFIRMED.',
    mutates: true,
    params: proposeScopedDirectoryParams,
    result: proposeScopedDirectoryResult,
    timeoutMs: DEFAULTS.scopeProposalTimeoutMs,
  },
} as const satisfies Record<string, CommandSpec>;

// Format-specific commands for the Minecraft Java block/item adapter
// (Blockbench format id `java_block`). Later format adapters add their own
// group without touching the format-neutral surface.
export const JAVA_FORMAT_COMMAND_SPECS = {
  create_project: {
    description:
      'Create a new Minecraft Java block/item project (Blockbench format java_block) in a new project tab. When an unsaved project is open, force:true is required.',
    mutates: true,
    params: createProjectParams,
    result: createProjectResult,
  },
  open_model: {
    description:
      'Open a Java block/item model JSON file from the confirmed scoped directory via the java_block codec, in a new project tab. When an unsaved project is open, force:true is required.',
    mutates: true,
    params: openModelParams,
    result: openModelResult,
  },
  set_display_transform: {
    description: 'Set the Java display transform (translation/rotation/scale) for one display slot. Updates in place.',
    mutates: true,
    params: setDisplayTransformParams,
    result: setDisplayTransformResult,
  },
  export_model: {
    description:
      'Export the current project through the java_block codec to a file inside the confirmed scoped directory. Overwrite must be explicitly flagged.',
    mutates: true,
    params: exportModelParams,
    result: writeResultSchema,
  },
} as const satisfies Record<string, CommandSpec>;

// Format-specific commands for GeckoLib animated models (Blockbench format id
// `geckolib_model`, registered by the third-party GeckoLib plugin). The plugin
// checks the GeckoLib plugin's presence per call and fails with
// E_PLUGIN_DEPENDENCY_MISSING when the format is not registered.
export const GECKOLIB_FORMAT_COMMAND_SPECS = {
  create_geckolib_project: {
    description:
      'Create a new GeckoLib animated model project (Blockbench format geckolib_model; requires the third-party GeckoLib plugin) in a new project tab. When an unsaved project is open, force:true is required.',
    mutates: true,
    params: createGeckolibProjectParams,
    result: createGeckolibProjectResult,
  },
  open_geckolib_model: {
    description:
      'Open a GeckoLib .bbmodel project file from the confirmed scoped directory in a new project tab; rejects .bbmodel files whose format is not geckolib_model. When an unsaved project is open, force:true is required.',
    mutates: true,
    params: openGeckolibModelParams,
    result: openGeckolibModelResult,
  },
  export_geckolib_model: {
    description:
      'Export the current geckolib_model project geometry as Bedrock-format geo JSON (format_version 1.12.0) to a file inside the confirmed scoped directory; the recommended file name is <identifier>.geo.json. Overwrite must be explicitly flagged.',
    mutates: true,
    params: geckolibExportParams,
    result: writeResultSchema,
  },
  export_geckolib_animations: {
    description:
      'Export the current geckolib_model project animations as GeckoLib animation JSON to a file inside the confirmed scoped directory; the recommended file name is <identifier>.animation.json. Fails with E_NOT_FOUND when the project has no animations. Overwrite must be explicitly flagged.',
    mutates: true,
    params: geckolibExportParams,
    result: writeResultSchema,
  },
  validate_geckolib_file: {
    description:
      'Validate a Bedrock geometry JSON file and/or a GeckoLib animation JSON file inside the confirmed scoped directory against GeckoLib 4 baseline rules; animation content checks run without geometry, bone cross-checks need both paths. At least one path is required. Returns structured diagnostics. Read-only.',
    mutates: false,
    params: validateGeckolibFileParams,
    result: validateGeckolibFileResult,
  },
  upsert_geckolib_animation: {
    description:
      'Create or replace one whole GeckoLib animation clip (keyed by name) on the current geckolib_model project: clip properties plus bone keyframes with easing and molang values, applied atomically in one undo step. Times are seconds; values use the GeckoLib .animation.json convention; molang strings are never evaluated. Overwriting an existing name requires replace:true (fails with E_FILE_EXISTS otherwise); unknown or ambiguous bone names fail with E_INVALID_PARAMS before any project change.',
    mutates: true,
    params: upsertGeckolibAnimationParams,
    result: upsertGeckolibAnimationResult,
  },
  delete_geckolib_animation: {
    description:
      'Delete one animation clip by name from the current geckolib_model project in one undo step without opening any dialog. Fails with E_NOT_FOUND when no clip has the given name.',
    mutates: true,
    params: deleteGeckolibAnimationParams,
    result: deleteGeckolibAnimationResult,
  },
  get_geckolib_animation: {
    description:
      'Read one animation clip by name from the current geckolib_model project, returned in exactly the upsert_geckolib_animation payload shape (keyframes sorted by time, linear interpolation omitted, times in seconds, GeckoLib .animation.json value convention). Read-only.',
    mutates: false,
    params: getGeckolibAnimationParams,
    result: getGeckolibAnimationResult,
  },
  capture_geckolib_animation_frame: {
    description:
      'Capture a bounded screenshot of one named GeckoLib animation posed at a still timestamp. The command temporarily sets only that animation playing for preview, applies GeckoLib loop timing (loop wraps, hold clamps, once rejects out-of-range time), renders through the existing screenshot path, rejects active timeline playback, suppresses effect keyframes during the still preview, and restores animation/timeline state after success or failure. Read-only.',
    mutates: false,
    params: captureGeckolibAnimationFrameParams,
    result: captureGeckolibAnimationFrameResult,
    // Animation-pose captures queue behind regular screenshot captures on the
    // shared preview and global animation timeline state.
    timeoutMs: 60_000,
  },
} as const satisfies Record<string, CommandSpec>;

export const COMMAND_SPECS = {
  ...FORMAT_NEUTRAL_COMMAND_SPECS,
  ...JAVA_FORMAT_COMMAND_SPECS,
  ...GECKOLIB_FORMAT_COMMAND_SPECS,
} as const;

export type CommandName = keyof typeof COMMAND_SPECS;

export const COMMAND_NAMES = Object.keys(COMMAND_SPECS) as CommandName[];

export function isCommandName(value: string): value is CommandName {
  return Object.prototype.hasOwnProperty.call(COMMAND_SPECS, value);
}

// ---------------------------------------------------------------------------
// Message envelopes
// ---------------------------------------------------------------------------

export const helloMessageSchema = z
  .object({
    type: z.literal('hello'),
    protocol_version: z.number().int(),
    secret: z.string().min(1),
    plugin_version: z.string(),
    blockbench_version: z.string(),
    capabilities: z.array(z.string()),
  })
  .strict();

export type HelloMessage = z.infer<typeof helloMessageSchema>;

export const helloAckMessageSchema = z
  .object({
    type: z.literal('hello_ack'),
    protocol_version: z.number().int(),
    heartbeat_interval_ms: z.number().int().positive(),
    // Adapter-side capability flags: the extension surface for later format
    // adapters, mirroring the plugin's capabilities in hello.
    capabilities: z.array(z.string()),
  })
  .strict();

export type HelloAckMessage = z.infer<typeof helloAckMessageSchema>;

export const requestMessageSchema = z
  .object({
    type: z.literal('request'),
    id: z.string().min(1),
    command: z.string(),
    params: z.unknown(),
  })
  .strict();

export type RequestMessage = z.infer<typeof requestMessageSchema>;

export const responseMessageSchema = z
  .object({
    type: z.literal('response'),
    id: z.string().min(1),
    ok: z.boolean(),
    result: z.unknown().optional(),
    error: errorPayloadSchema.optional(),
  })
  .strict()
  .superRefine((message, ctx) => {
    if (message.ok && message.error !== undefined) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'A successful response must not carry an error payload.' });
    }
    if (!message.ok && message.error === undefined) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'A failed response must carry an error payload.' });
    }
  });

export type ResponseMessage = z.infer<typeof responseMessageSchema>;

export const eventMessageSchema = z
  .object({
    type: z.literal('event'),
    event: z.string(),
    data: z.unknown().optional(),
  })
  .strict();

export type EventMessage = z.infer<typeof eventMessageSchema>;

/** Messages the plugin may send to the adapter. (A plain union because the
 * refined response schema cannot join a discriminated union in zod v3.) */
export const pluginToAdapterMessageSchema = z.union([
  helloMessageSchema,
  responseMessageSchema,
  eventMessageSchema,
]);

export type PluginToAdapterMessage = z.infer<typeof pluginToAdapterMessageSchema>;

/** Messages the adapter may send to the plugin. */
export const adapterToPluginMessageSchema = z.discriminatedUnion('type', [
  helloAckMessageSchema,
  requestMessageSchema,
]);

export type AdapterToPluginMessage = z.infer<typeof adapterToPluginMessageSchema>;

export function makeError(code: ErrorCode, message: string, details?: unknown): ErrorPayload {
  return details === undefined ? { code, message } : { code, message, details };
}

