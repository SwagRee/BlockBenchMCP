// MCP server assembly: registers the health tool plus one tool per protocol
// command. The adapter is an AI-client compatibility shim only — every
// Blockbench operation is relayed to the plugin, which executes or rejects it.
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

import {
  COMMAND_SPECS,
  PROTOCOL_VERSION,
  makeError,
  type CommandName,
  type CommandSpec,
  type ErrorPayload,
} from '../shared/protocol.js';
import type { AdapterConfig, SetupIssue } from './config.js';
import type { WsBridge } from './ws-bridge.js';

export const ADAPTER_VERSION = '0.1.0';

interface Envelope {
  summary: string;
  ok: boolean;
  command?: string;
  result?: unknown;
  error?: ErrorPayload;
}

function toToolResult(envelope: Envelope): {
  content: Array<{ type: 'text'; text: string }>;
  isError?: boolean;
} {
  return {
    content: [{ type: 'text', text: JSON.stringify(envelope, null, 2) }],
    ...(envelope.ok ? {} : { isError: true }),
  };
}

export function buildMcpServer(options: {
  bridge: WsBridge;
  config: AdapterConfig;
  setupIssues: SetupIssue[];
}): McpServer {
  const { bridge, config, setupIssues } = options;

  const server = new McpServer({
    name: 'minecraft-blockbench-mcp',
    version: ADAPTER_VERSION,
  });

  server.registerTool(
    'health',
    {
      description:
        'Report adapter status: WebSocket listener state, plugin connection, plugin versions/capabilities, scoped-directory status, and machine-readable setup errors. Read-only; works while Blockbench is closed.',
      inputSchema: z.object({}),
    },
    async () => {
      const connected = bridge.connected;
      const envelope: Envelope = {
        summary: connected
          ? 'Adapter is running and the Blockbench plugin is connected.'
          : 'Adapter is running; the Blockbench plugin is not connected.',
        ok: true,
        result: {
          adapter_version: ADAPTER_VERSION,
          protocol_version: PROTOCOL_VERSION,
          port: config.port,
          ws_listening: bridge.listening,
          plugin_connected: connected,
          setup_errors: setupIssues,
          plugin: bridge.pluginInfo,
        },
      };
      return toToolResult(envelope);
    },
  );

  for (const [name, spec] of Object.entries(COMMAND_SPECS) as Array<[CommandName, CommandSpec]>) {
    const command = name;
    // A top-level refinement (ZodEffects) has no .shape, so the SDK would
    // advertise an empty input schema in tools/list; advertise the innermost
    // object (refinements can nest) and keep the refined schema for the
    // re-validation below.
    let advertisedSchema: z.ZodTypeAny = spec.params;
    while (advertisedSchema instanceof z.ZodEffects) {
      advertisedSchema = advertisedSchema.innerType() as z.ZodTypeAny;
    }
    server.registerTool(
      command,
      {
        description: spec.description,
        inputSchema: advertisedSchema,
      },
      async (args: unknown) => {
        // Re-validate with the strict shared schema so extra fields and shape
        // drift are rejected here, before anything is relayed to the plugin.
        const parsed = spec.params.safeParse(args ?? {});
        if (!parsed.success) {
          return toToolResult({
            summary: `Rejected ${command}: parameters failed validation.`,
            ok: false,
            command,
            error: makeError('E_INVALID_PARAMS', 'Parameters failed schema validation.', parsed.error.issues),
          });
        }
        if (!bridge.connected) {
          return toToolResult({
            summary: `Cannot run ${command}: the Blockbench plugin is not connected.`,
            ok: false,
            command,
            error: makeError(
              'E_PLUGIN_NOT_CONNECTED',
              'Blockbench or its MCP plugin is not running or not connected. Start Blockbench, load the plugin, and match its port/secret settings.',
              setupIssues.length > 0 ? { setup_errors: setupIssues } : undefined,
            ),
          });
        }
        const outcome = await bridge.request(command, parsed.data, spec.timeoutMs);
        if (outcome.ok) {
          const result = spec.result.safeParse(outcome.result);
          if (!result.success) {
            return toToolResult({
              summary: `${command} failed: E_PROTOCOL_MISMATCH.`,
              ok: false,
              command,
              error: makeError(
                'E_PROTOCOL_MISMATCH',
                `${command} plugin result did not match the protocol result schema.`,
                result.error.issues,
              ),
            });
          }
          return toToolResult({
            summary: `${command} succeeded.`,
            ok: true,
            command,
            result: outcome.result,
          });
        }
        const error = outcome.error ?? makeError('E_BLOCKBENCH_ERROR', 'The plugin returned an unspecified error.');
        return toToolResult({
          summary: `${command} failed: ${error.code}.`,
          ok: false,
          command,
          error,
        });
      },
    );
  }

  return server;
}

