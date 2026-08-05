export {
  PROTOCOL_VERSION,
  DEFAULTS,
  ERROR_CODES,
  errorPayloadSchema,
  makeError,
  PROJECT_FORMATS,
  VIEW_PRESETS,
  vec3Schema,
} from "./protocol-base.js";
export type {
  ErrorCode,
  ErrorPayload,
  ProjectFormat,
  ViewPreset,
  Vec3,
} from "./protocol-base.js";

export {
  projectSummarySchema,
  checkFindingSchema,
  checkModelResultSchema,
  captureViewsParamsSchema,
  captureViewsDefaults,
  captureViewMetaSchema,
  mutationSuccessSchema,
  mutationFailureSchema,
  mutationResultSchema,
  createProjectParamsSchema,
  cubeSpecSchema,
  groupSpecSchema,
  applyGeometryBatchParamsSchema,
  createLimbParamsSchema,
  paintFaceFeatureParamsSchema,
  healthResultSchema,
} from "./contracts.js";
export type {
  ProjectSummary,
  CheckModelResult,
  CaptureViewsParams,
  MutationResult,
  HealthResult,
} from "./contracts.js";

export {
  ensureTextureParamsSchema,
  autoUvCubesParamsSchema,
  mirrorElementsParamsSchema,
  scaffoldBipedParamsSchema,
  upsertAnimationParamsSchema,
} from "./contracts-extra.js";

export {
  packBoxUvParamsSchema,
  shadeModelBaseParamsSchema,
  paintFaceFeaturesParamsSchema,
  getTextureParamsSchema,
} from "./contracts-texture.js";

export { resolveGuide } from "./guide-resolve.js";
export type { GuideTopic } from "./guide-resolve.js";
export {
  GUIDE_MODELING,
  GUIDE_TEXTURING,
  GUIDE_ANIMATION,
  GUIDE_JAVA_BLOCK,
  GUIDE_GECKOLIB,
} from "./guides.js";

export {
  COMMAND_SPECS,
  COMMAND_NAMES,
  isCommandName,
} from "./commands.js";
export type { CommandSpec, CommandName } from "./commands.js";

export {
  MIN_BLOCKBENCH_VERSION,
  CAPABILITY_IDS,
  capabilitiesSchema,
  parseSemverParts,
  isBlockbenchSupported,
} from "./capabilities.js";
export type { CapabilityId } from "./capabilities.js";

export const PLUGIN_VERSION = "0.1.3";
