# Architecture

**Status:** Current product path  
**Companion:** [DECISION.md](./DECISION.md), [SPIKE_COMPARE.md](./SPIKE_COMPARE.md)

## Topology (in-plugin HTTP MCP)

```
AI client (Cursor / Claude)
        │  HTTP MCP  http://127.0.0.1:<port>/mcp
        ▼
┌───────────────────────┐
│  packages/plugin      │  owns MCP JSON-RPC, tool schemas, handlers
│  (Blockbench desktop) │  undo entries, viewport refresh, scope dialogs
└───────────────────────┘
```

- Plugin is the only process; it binds loopback HTTP via Blockbench `require('net')`.
- Closing Blockbench stops MCP (accepted trade-off for one-install UX).

## Packages

| Package | Role |
|---------|------|
| `packages/shared` | Command registry, Zod params/results, error codes, screenshot/check contracts |
| `packages/plugin` | Blockbench desktop plugin: HTTP MCP + command handlers |

## Intent-level tool surface (v1)

Prefer **few, high-leverage** tools over thin UI mirrors.

### Session / observation

| Tool | Purpose |
|------|---------|
| `health` | Plugin MCP up, format, BB / plugin version |
| `get_project_summary` | Compact outliner + counts (no image) |
| `check_model` | Structured findings (see contract below) |
| `capture_views` | Low-res multi-angle screenshots (default) |
| `get_guide` | Short format-specific playbook (java_block / geckolib) |

### Geometry (bulk + transactional)

| Tool | Purpose |
|------|---------|
| `create_project` | `java_block` \| `geckolib_model` only in v1 |
| `apply_geometry_batch` | Create/update/delete groups+cubes in one undo step; all-or-nothing |
| `create_limb` | Intent: name, parent, pivot, size, mirror — expands to group+cube(s) |
| `scaffold_biped` | Steve-like biped bones + cubes + packed UVs |
| `mirror_elements` | Mirror selection across axis with rename rules |

### Texture / UV

| Tool | Purpose |
|------|---------|
| `ensure_texture` | Create or reuse texture at size |
| `pack_box_uv` | Shelf-pack box UVs so faces do not share pixels |
| `shade_model_base` | Region colors + soft face lighting |
| `paint_face_features` | Batch face-local paint (eyes, trim) |
| `get_texture` | Inspect texture sheet as compact PNG |
| `auto_uv_cubes` | Box UV / per-face UV for named cubes |

### GeckoLib / export

| Tool | Purpose |
|------|---------|
| `upsert_animation` | Named clip + bone channel keyframes (validated) |
| `export_model` | Scoped path; overwrite must be explicit |
| `propose_scoped_directory` | User-approved session file root |

### Explicitly excluded (v1)

`trigger_action`, `emulate_clicks`, `risky_eval`, mesh edit suite, full paint tool chrome, Hytale tools.

## Contracts

### Screenshot (`capture_views`)

```ts
{
  views?: ("north" | "south" | "east" | "west" | "up" | "iso")[]; // default: ["iso","north","east"]
  max_edge?: number;   // default 256
  format?: "jpeg" | "png"; // default jpeg
  quality?: number;    // default 70
}
```

Returns image content **and** `{ bytes, width, height, view }` metadata. Never return full desktop resolution by default.

### `check_model`

```ts
{
  findings: Array<{
    severity: "error" | "warn" | "info";
    code: string;       // e.g. OVERLAP, UNTEXTURED_FACE, BAD_PIVOT, EMPTY_GROUP
    element?: string;   // uuid or name
    message: string;
  }>;
  summary: { cubes: number; groups: number; errors: number; warns: number };
}
```

Agents should call `check_model` after batches; use `capture_views` only when a finding needs visual confirmation.

### Mutation result (all mutating tools)

```ts
{
  ok: true;
  undo_label: string;
  created?: { uuid: string; name: string; type: string }[];
  updated?: string[];
  deleted?: string[];
} | {
  ok: false;
  code: ErrorCode;      // never silent success
  message: string;
  details?: unknown;
}
```

Unknown / ignored parameters → **hard error** (`E_UNKNOWN_PARAM`), not drop-on-floor.

## Error codes (shared)

| Code | Meaning |
|------|---------|
| `E_UNSUPPORTED_FORMAT` | Current project format ≠ tool profile |
| `E_INVALID_PARAM` | Schema / domain validation failed |
| `E_UNKNOWN_PARAM` | Extra keys rejected (strict objects) |
| `E_SCOPE_DENIED` | File op outside scoped directory |
| `E_PARTIAL_FORBIDDEN` | Batch would partially apply — aborted |
| `E_NOT_FOUND` | Element / animation missing |
| `E_BLOCKBENCH_ERROR` | Underlying Blockbench API failure |

## Security

- Bearer secret required on HTTP MCP requests (plugin settings).
- File read/write only after `propose_scoped_directory` + Blockbench confirmation.
- Loopback bind only (`127.0.0.1`).
