# Scope Decision

**Date:** 2026-08-05  
**Status:** Locked (from survey default path)

## Chosen path

**Self-build a Minecraft-oriented BlockBench MCP in this repo.**  
Do **not** fork [jasonjgardner/blockbench-mcp-plugin](https://github.com/jasonjgardner/blockbench-mcp-plugin) as the end product. Do **not** treat this as research-archive-only.

| Option | Decision |
|--------|----------|
| Research archive only | Rejected — survey is done; deliverables live under `docs/` + `research/` |
| Fork jasonjgardner | Rejected — thin UI wrap, silent failures, screenshot context blowups |
| Self-build MCP | **Accepted** |

## Target formats (v1)

| Format | Priority | Notes |
|--------|----------|-------|
| Java block / item (`java_block`) | P0 | Display transforms, cube UV, export to resource pack |
| GeckoLib entity (`geckolib_model`) | P0 | Bones, pivots, animations — via GeckoLib Blockbench plugin |
| Bedrock entity / geo | P1 | After P0 loop is solid |
| Generic free-model / mesh | Out of scope (v1) | Avoid jasonjgardner-style kitchen-sink tools |

## Non-goals (v1)

- `trigger_action` / `emulate_clicks` / `risky_eval` as primary surface
- Full Blockbench paint-tool parity
- Hytale / PBR / armature skinning as first-class tools
- Hosting MCP inside the Blockbench process (Pattern A)

## What we borrow

| Source | Borrow |
|--------|--------|
| [adhi-jp/minecraft-blockbench-mcp](https://github.com/adhi-jp/minecraft-blockbench-mcp) | stdio adapter ↔ loopback WS, shared secret, scoped file I/O, typed command registry, tests |
| [sosadly/blockbench-mcp](https://github.com/sosadly/blockbench-mcp) | bulk geometry, `get_guide`, multi-view compact screenshots, `check_model` |
| jasonjgardner | Negative lessons only (schema bugs, silent no-ops, full-res screenshots) |

## Success criteria (v1)

1. Agent can create a simple Java block + a simple GeckoLib limb hierarchy with **bulk** intents in few tool calls.
2. Every mutating tool returns explicit success/failure; no silent parameter drops.
3. Screenshots default to low-res multi-angle; structured `check_model` is preferred over vision spam.
4. Adapter survives Blockbench disconnect with a clear `plugin_connected: false` health signal (not a hung MCP).
