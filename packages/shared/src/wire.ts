import { z } from "zod";
import { ERROR_CODES, PROTOCOL_VERSION } from "./protocol-base.js";
import { errorPayloadSchema } from "./protocol-base.js";
import { capabilitiesSchema } from "./capabilities.js";

/** Plugin → adapter handshake. */
export const helloMessageSchema = z
  .object({
    type: z.literal("hello"),
    protocol_version: z.number().int(),
    secret: z.string().min(1),
    plugin_version: z.string().min(1),
    blockbench_version: z.string().min(1),
    capabilities: capabilitiesSchema.optional(),
  })
  .strict();

export type HelloMessage = z.infer<typeof helloMessageSchema>;

export const helloAckSchema = z
  .object({
    type: z.literal("hello_ack"),
    protocol_version: z.literal(PROTOCOL_VERSION),
    ok: z.literal(true),
    min_blockbench_version: z.string().optional(),
  })
  .strict();

export const requestMessageSchema = z
  .object({
    type: z.literal("request"),
    id: z.string().min(1),
    command: z.string().min(1),
    params: z.unknown(),
  })
  .strict();

export type RequestMessage = z.infer<typeof requestMessageSchema>;

export const responseMessageSchema = z
  .object({
    type: z.literal("response"),
    id: z.string().min(1),
    ok: z.boolean(),
    result: z.unknown().optional(),
    error: errorPayloadSchema.optional(),
  })
  .strict();

export type ResponseMessage = z.infer<typeof responseMessageSchema>;

export const pluginToAdapterSchema = z.union([
  helloMessageSchema,
  responseMessageSchema,
]);

export type PluginToAdapterMessage = z.infer<typeof pluginToAdapterSchema>;

export function assertProtocolVersion(version: number): void {
  if (version !== PROTOCOL_VERSION) {
    throw Object.assign(
      new Error(`Protocol mismatch: got ${version}, want ${PROTOCOL_VERSION}`),
      {
        code: "E_PROTOCOL_MISMATCH" satisfies (typeof ERROR_CODES)[number],
      },
    );
  }
}
