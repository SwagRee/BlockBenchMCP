#!/usr/bin/env node
/**
 * BlockbenchMCP — Model Context Protocol server.
 *
 * Exposes Blockbench (3D model / texture / animation editor) to an AI client.
 * It forwards each tool call to the companion bridge plugin running inside
 * Blockbench over local HTTP. Start Blockbench, make sure the BlockbenchMCP
 * plugin is installed and its server is running, then point your MCP client
 * at this process (stdio transport).
 */
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { tools } from "./tools.js";
import { BASE_URL } from "./client.js";

const server = new Server(
  { name: "blockbench-mcp", version: "0.1.0" },
  { capabilities: { tools: {} } }
);

const toolMap = new Map(tools.map((t) => [t.name, t]));

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: tools.map((t) => ({
    name: t.name,
    description: t.description,
    inputSchema: t.inputSchema,
  })),
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const tool = toolMap.get(request.params.name);
  if (!tool) {
    return {
      isError: true,
      content: [{ type: "text", text: `Unknown tool: ${request.params.name}` }],
    };
  }
  try {
    const content = await tool.handler((request.params.arguments ?? {}) as Record<string, any>);
    return { content };
  } catch (err: any) {
    return {
      isError: true,
      content: [{ type: "text", text: `Error: ${err?.message ?? String(err)}` }],
    };
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  // Logs go to stderr so they never corrupt the stdio protocol on stdout.
  console.error(`BlockbenchMCP server ready. Bridging to Blockbench at ${BASE_URL}`);
}

main().catch((err) => {
  console.error("Fatal error starting BlockbenchMCP server:", err);
  process.exit(1);
});

