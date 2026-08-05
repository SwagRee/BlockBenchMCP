# @adhisang/minecraft-blockbench-mcp

MCP integration for [Blockbench](https://www.blockbench.net/): a Claude Code-launched
**stdio MCP adapter** plus a **Blockbench desktop plugin**, connected over a
loopback WebSocket, so AI clients can create and edit Minecraft Java
block/item models (`java_block` format) and GeckoLib animated models
(`geckolib_model` format, via the third-party GeckoLib plugin) through
Blockbench itself.

```
Claude Code ──(stdio MCP)── adapter process ──(ws://127.0.0.1:39731)── Blockbench plugin
                            │ owns McpServer,                          │ executes/rejects every
                            │ schema validation,                       │ operation through
                            │ relay only                               │ Blockbench APIs
```

The adapter is only a compatibility shim: it never edits model files itself.
Every operation is executed (or rejected) by the plugin inside Blockbench,
with undo entries and viewport refreshes.

## Package installation

The npm package contains both the stdio adapter and the compiled Blockbench
desktop plugin. Install it in a persistent directory so Blockbench can continue
loading the same plugin file after npm exits:

```sh
mkdir minecraft-blockbench-mcp
cd minecraft-blockbench-mcp
npm init -y
npm install @adhisang/minecraft-blockbench-mcp
```

The two package entry points are then:

- Adapter: `node_modules/@adhisang/minecraft-blockbench-mcp/dist/adapter/cli.js`
- Blockbench plugin: `node_modules/@adhisang/minecraft-blockbench-mcp/dist/plugin/minecraft_blockbench_mcp.js`

Use absolute paths when registering the adapter and loading the plugin. To
upgrade both components together, run `npm update @adhisang/minecraft-blockbench-mcp`
in the installation directory, then reload the plugin in Blockbench.

For adapter-only experiments, the package also exposes the
`minecraft-blockbench-mcp` executable and can be started with:

```sh
npx -y @adhisang/minecraft-blockbench-mcp
```

The adapter does not install or launch Blockbench and does not automatically
load the desktop plugin.

## Development prerequisites

- Node.js >= 22
- Blockbench 5.1.x **desktop** (this repository expects its source checkout at
  `external/blockbench` for TypeScript types)
- One-time type generation for the plugin typecheck:

```sh
cd external/blockbench
npm run generate-types
```

## Development build

```sh
npm install
npm run check   # typecheck adapter + plugin
npm run build   # emits dist/adapter/** and dist/plugin/minecraft_blockbench_mcp.js
npm test        # protocol, scope-safety, bridge, stdio E2E, plugin-session suites
```

## Setup

### Guided setup (recommended)

```sh
npx minecraft-blockbench-mcp setup   # inside the persistent npm installation directory
npm run setup                        # in a git checkout, after npm run build
```

The `setup` command generates a shared secret, stores it in a per-user config
file readable only by your user (Linux/WSL:
`${XDG_CONFIG_HOME:-~/.config}/minecraft-blockbench-mcp/config.json`, macOS:
`~/Library/Application Support/minecraft-blockbench-mcp/config.json`, Windows:
`%APPDATA%\minecraft-blockbench-mcp\config.json`), registers the `blockbench`
MCP server in Claude Code (default `--scope project`; the registration stores
only the config file path, never the secret), and prints the remaining
Blockbench steps. Under WSL the plugin path is also printed in Windows notation
for a Windows-native Blockbench. The secret is never shown unless you pass
`--show-secret`, or `--clipboard` to copy it without displaying it.

Flags: `--scope project|user|local`, `--port <n>`, `--replace` (replace an
existing `blockbench` registration — never done silently), `--rotate-secret`,
`--show-secret`, `--clipboard`, `--wait <seconds>` (keep the adapter up and
report the moment the plugin connects), `--uninstall` (remove the registration
and config file; the Blockbench-side plugin stays installed).

The plugin reads that same config file directly. When Blockbench runs on the
same system, load the plugin and approve the one-time file-access permission
("Always allow for this plugin") — no port or secret needs to be typed, and a
later `setup --rotate-secret` is picked up automatically by the plugin. A
running adapter keeps the secret it started with, so the adapter (or the
Claude Code session that launched it) must be restarted for a rotated secret
to take effect. When Blockbench runs on Windows against a WSL adapter, set the
plugin's "MCP Config File Path" setting to the Windows-notation path that
`setup` prints (or pick the file via
**Tools → Locate MCP Config File**). Entering "MCP Adapter Port" and "MCP
Shared Secret" manually keeps working and takes precedence over the file. The
adapter itself also picks the config file up automatically when started with
no `--config`/`BLOCKBENCH_MCP_CONFIG` at all.

Re-running `setup` with nothing to change is a no-op. `minecraft-blockbench-mcp
doctor` diagnoses the current state without changing anything: when no config
file is resolved it reports `Not configured`; otherwise it prints the resolved
config file, the Claude Code registration, and one of four adapter states
(broken with remediation, port already held — usually your registered adapter
running, waiting for Blockbench, or fully connected).

`setup --full-auto` goes one step further on Linux and Windows (including a
Windows Blockbench driven from a WSL adapter): it launches Blockbench once
with a loopback-only DevTools port, installs the plugin and applies the
connection settings through Blockbench's own APIs, and reports the connected
state — zero clicks inside Blockbench. The binary is auto-detected
(`--blockbench-path <path>` overrides); a Blockbench that is already running
aborts the run with guidance instead of being touched. Note: the DevTools port
stays open until that Blockbench instance exits — restart Blockbench after
provisioning to close it. On unsupported platforms (currently macOS) the
normal setup completes and the manual steps are printed instead.

Running `setup` from the npx cache (outside a persistent installation
directory) is refused, because Blockbench keeps loading the plugin from its
original path across restarts.

### Manual setup

#### 1. Choose a shared secret

The adapter refuses plugin connections until a secret is configured, and the
plugin refuses to connect until the same secret is entered in its settings.
Pick any random string (for example `openssl rand -hex 16`).

#### 2. Register the adapter in Claude Code

For an npm installation, replace the example adapter path below with the
absolute path under the persistent installation directory described in
[Package installation](#package-installation).

```sh
claude mcp add blockbench -e BLOCKBENCH_MCP_SECRET=<your-secret> -- node /path/to/minecraft-blockbench-mcp/dist/adapter/cli.js
```

Configuration precedence: CLI arguments > environment variables > JSON config
file > defaults.

| Setting | CLI | Environment | Default |
| --- | --- | --- | --- |
| WebSocket port | `--port` | `BLOCKBENCH_MCP_PORT` | `39731` |
| Shared secret | `--secret` | `BLOCKBENCH_MCP_SECRET` | (unset — required) |
| Config file path | `--config` | `BLOCKBENCH_MCP_CONFIG` | (none) |
| Request timeout (ms) | `--request-timeout-ms` | `BLOCKBENCH_MCP_REQUEST_TIMEOUT_MS` | `30000` |

The optional config file is a JSON object with keys `port`, `secret`,
`requestTimeoutMs`, `heartbeatIntervalMs`, `heartbeatMissLimit`,
`handshakeTimeoutMs`, `maxMessageBytes`.

#### 3. Load the plugin in Blockbench

1. For an npm installation, select the already-built plugin bundle at
   `node_modules/@adhisang/minecraft-blockbench-mcp/dist/plugin/minecraft_blockbench_mcp.js`.
   For a git checkout only, build (`npm run build`) and select
   `dist/plugin/minecraft_blockbench_mcp.js`.
2. In Blockbench: **File → Plugins → Load Plugin from File** and select that
   file.
3. In **File → Preferences → Settings → General**, set **MCP Adapter Port**
   (default `39731`) and **MCP Shared Secret** to match the adapter.

When the connection succeeds, Blockbench shows “MCP adapter connected”. The
`health` tool then reports `plugin_connected: true`.

## Scoped file access

File reads/writes (including `export_model` and texture loading by path) are
restricted to one directory per session:

1. The AI client calls `propose_scoped_directory` with an absolute path.
2. Blockbench shows a confirmation dialog with the normalized path. Nothing is
   accessible until you click **Allow this session**.
3. Access lasts for the current session only: it expires when the plugin
   reloads or Blockbench restarts, and **Tools → Revoke MCP Scoped Directory**
   revokes it immediately mid-session.
4. Overwrites require an explicit per-file `overwrite: true` flag; multi-file
   writes preflight every destination and write nothing if any blocker exists.
   Symbolic links inside the scoped directory are rejected.

## Security model

The adapter listens on loopback only (`127.0.0.1`) and authenticates the
plugin with a shared secret. The config file is user-only (`0600` on
non-Windows systems).

This design assumes every process running on the machine under your user
account is trusted, because such a process can read the config file directly.
On a shared multi-user machine, another local user can bind the loopback port
before the adapter starts and obtain the secret, so this tool is intended for
single-user desktops.

AI file access is additionally gated by the in-Blockbench scoped-directory
confirmation dialog and remains limited to the confirmed directory for the
session. `setup --full-auto` leaves a loopback DevTools port open until that
Blockbench instance exits; restart Blockbench after provisioning to close it.

## Tools

`health` (adapter status; works with Blockbench closed) plus, relayed to the
plugin: `get_plugin_status`, `get_project_state`, `get_elements` (cube/group
read-back: geometry, UV state, per-face texture references, and hierarchy),
`create_project`, `open_model`, `create_cubes` (optionally with per-cube
`box_uv`/`uv_offset`), `update_cube`, `set_cube_uv` (box-UV offset/mirroring,
per-face UV rectangles with rotation, UV mode switching),
`set_texture_resolution` (project texture resolution with optional UV
rescale), `delete_cubes`, `create_group`, `update_group`, `delete_group`,
`assign_texture`, `set_display_transform`, `export_model`, `read_file`,
`write_files`, `save_project`, `capture_screenshot` (optionally from a native
camera preset — `initial`, `top`, `bottom`, `north`, `south`, `east`, `west`,
and the isometric variants — rendered offscreen so the visible viewport
camera never moves; which side is a model's "front" depends on the format's
`forward_direction`), `validate_project`, `propose_scoped_directory`.

`save_project` writes the open project of any format as a `.bbmodel` into the
scoped directory through `Codecs.project.compile()`; other installed plugins
listening to the codec's compile hooks may adjust the saved output
(format-owner behavior). A fresh project adopts the destination as its save
path and is marked saved; saving to a path that differs from the project's
current save path deliberately leaves the user's Ctrl+S target and the
unsaved indicator untouched.

GeckoLib tools (they require the third-party **GeckoLib Models & Animations**
plugin, see below): `create_geckolib_project`, `open_geckolib_model`,
`export_geckolib_model`, `export_geckolib_animations`,
`validate_geckolib_file`, `upsert_geckolib_animation`,
`delete_geckolib_animation`, `get_geckolib_animation`,
`capture_geckolib_animation_frame`.

While Blockbench (or the plugin) is not running, operation tools return a
structured `E_PLUGIN_NOT_CONNECTED` error immediately — the adapter never
auto-launches Blockbench, waits, or retries in the background.

## GeckoLib models

The `geckolib_*` tools drive the third-party
[GeckoLib](https://wiki.geckolib.com/) Blockbench plugin ("GeckoLib Models &
Animations", plugin id `geckolib`; tested with 4.2.5). Install it once inside
Blockbench via **File → Plugins → Available**. Without it, every `geckolib_*`
tool fails per call with a structured `E_PLUGIN_DEPENDENCY_MISSING` error that
names the install remediation; the plugin re-checks the format registration on
every call, so installing or re-enabling GeckoLib takes effect immediately.

- `create_geckolib_project` needs `modid`, `model_type`
  (`Entity|Block|Item|Armor|Object`), and `identifier`; the identifier becomes
  `geometry.<identifier>` and the recommended export file names
  `<identifier>.geo.json` / `<identifier>.animation.json`.
- Geometry building reuses the format-neutral tools (`create_cubes`,
  `create_group`, `assign_texture`, ...) on the GeckoLib project.
- `export_geckolib_model` writes Bedrock-format geometry with
  `format_version 1.12.0` (GeckoLib 4 strict; also loads on GeckoLib 5);
  `export_geckolib_animations` writes the animation JSON with GeckoLib's
  keyframe encoding and `geckolib_format_version: 2`. Item display-settings
  JSON export is not supported.
- `validate_geckolib_file` checks an exported `.geo.json`, an animation JSON,
  or both against rules derived from GeckoLib runtime behavior — no official
  schema exists, so diagnostics carry stable `geckolib_*` check ids and the
  applied profile (`gl4`). Animation content checks (loop values, easing
  names, easingArgs, timestamps, keyframe value shapes, effect-keyframe
  structure) need no geometry; bone cross-checks need both paths.
  `validate_project` additionally runs GeckoLib project checks (bone naming,
  modid/identifier, Armor bone template, texture size) when a
  `geckolib_model` project is open, and validates the open project's
  animations through the same checks — including animators orphaned by a
  group rename or delete.
- Validation never blocks exports; export and validate are independent tools.

### Animation authoring

- `upsert_geckolib_animation` creates or replaces one whole animation clip,
  keyed by `name`, in a single undo step: loop mode
  (`once|loop|hold_on_last_frame`), clip `length`, optional `override` and
  `anim_time_update`, plus per-bone `rotation`/`position`/`scale` keyframes
  with GeckoLib easing (`easing`, `easingArgs`) and
  `linear|catmullrom|step` interpolation. Replacing an existing name requires
  `replace: true`, otherwise the call fails with `E_FILE_EXISTS`.
  `delete_geckolib_animation` removes a clip by name;
  `get_geckolib_animation` reads one back in exactly the upsert payload
  shape; `get_project_state` lists an `animations` summary (name, loop,
  length).
- **Time units**: keyframe `time` and clip `length` are seconds (Blockbench's
  convention, and what `.animation.json` stores).
- **Axis convention**: payload values use the GeckoLib `.animation.json`
  convention — exactly what `export_geckolib_animations` writes and
  `validate_geckolib_file` reads. Relative to the Blockbench UI, rotation X/Y
  and position X are stored inverted; the plugin applies the same mapping the
  GeckoLib plugin's own importer uses, so read → edit → upsert round-trips.
- **Molang**: string values (keyframes, `anim_time_update`) are passed
  through, never evaluated. Validation only checks value shapes and warns on
  unbalanced parentheses; a molang expression that fails to compile makes
  GeckoLib 4 drop the whole animation at load, so test expressions in-game.
- **Replace clobbers manual edits**: `upsert_geckolib_animation` with
  `replace: true` overwrites the whole clip, including manual tweaks made in
  the Blockbench UI since the clip was last read. Every upsert/delete is one
  undo step, so Ctrl+Z in Blockbench recovers the previous state.
- **Still-frame screenshots**: `capture_geckolib_animation_frame` poses a named
  animation at a still timestamp and returns `{ data_url, width, height,
  animation, time, rendered_time, angle_preset? }`. It accepts the same
  optional `width`, `height`, and native `angle_preset` values as
  `capture_screenshot`; preset renders use the offscreen preview so the visible
  camera does not move. The command is read-only for project/files: it
  temporarily marks only the target animation as playing, calls Blockbench's
  still preview, renders the screenshot, then restores the previous selected
  animation, playing flags, timeline time/playback flag, effect mute flags, and
  default/current pose after success or failure. Timeline playback must already
  be stopped. If the requested time is beyond the clip length, `loop` wraps,
  `hold_on_last_frame` clamps to the last frame, and `once` fails with
  `E_INVALID_PARAMS` before moving the timeline. Sound, particle, and timeline
  effect channels are muted during the still preview.
- **Importing existing `.animation.json` files**: there is no dedicated import
  tool. An agent can read a file (`read_file`), translate each
  animation into an upsert payload, and call `upsert_geckolib_animation` —
  but that workaround drops constructs outside the authoring scope: effect
  keyframes (sounds, particles, timeline instructions) and bezier
  interpolation are not representable in the payload (their file validation
  still works).


## GeckoLib live smoke

`npm run smoke:geckolib-live` is a developer-run smoke helper for the
`capture_geckolib_animation_frame` path. It drives a real Blockbench + GeckoLib
runtime through the stdio MCP adapter, writes PNG/report/checklist artifacts,
and stops at a human visual review handoff. A successful script run means the
automated sanity checks passed and the artifacts are ready to inspect; it does
not prove visual correctness by itself.

Prerequisites:

1. Run `npm run build` so `dist/adapter/cli.js` and
   `dist/plugin/minecraft_blockbench_mcp.js` match the current checkout.
2. Load or reload `dist/plugin/minecraft_blockbench_mcp.js` in Blockbench.
3. Install and enable the **GeckoLib Models & Animations** Blockbench plugin.
4. Configure the Blockbench MCP plugin with the same port and shared secret the
   helper will use, then reconnect it.
5. Ensure no other adapter process is already using the selected port.

Recommended run command:

```sh
BLOCKBENCH_MCP_SECRET=<your-secret> npm run smoke:geckolib-live
```

Useful options after `--`:

```sh
BLOCKBENCH_MCP_SECRET=<your-secret> npm run smoke:geckolib-live -- --port 39731 --out ./smoke-output
```

- `--out <dir>` chooses a parent directory; the helper always creates a unique
  `geckolib-live-smoke-*` run subdirectory and refuses to overwrite an existing
  run directory. Without `--out`, the parent is the system temporary directory.
- `--port <port>` changes the adapter listener. If you change it, set the
  Blockbench MCP plugin to the same port and reconnect before running the
  helper.
- `--secret <secret>` exists only as a less-safe convenience. Prefer
  `BLOCKBENCH_MCP_SECRET` because command-line secrets can leak through shell
  history, process listings, copied commands, or npm logs. The helper must not
  write the shared secret, raw argv, or raw environment dumps into reports.

Before fixture commands run, the helper prints a notice that it will create and
leave a new unsaved GeckoLib project tab for manual inspection. It does not
open, save, or overwrite existing project files, and it does not use scoped
directory writes. After the run, inspect `frame-0.png` and `frame-1.png`, record
notes in `review-checklist.md`, then close or discard the smoke project tab
manually.

Generated artifacts:

- `frame-0.png` / `frame-1.png` — still-frame screenshots captured at distinct
  animation timestamps.
- `smoke-report.json` — sanitized runtime metadata, command outcomes, frame
  hashes, automated sanity checks, and `human_review_required: true`.
- `review-checklist.md` — human review steps for visible pose differences,
  playback/effect side effects, Blockbench usability, and reviewer notes.

Common failures:

| Symptom | Remediation |
| --- | --- |
| Missing `dist/adapter/cli.js` | Run `npm run build` before the smoke helper. |
| Missing secret | Set `BLOCKBENCH_MCP_SECRET` to the same secret configured in the Blockbench MCP plugin. |
| Port conflict / `E_PORT_IN_USE` | Do not kill unknown processes from the helper. Close the adapter you started, or use `--port <free-port>` and configure the Blockbench plugin to the same port. |
| Plugin disconnected / stale protocol | Rebuild, reload or reinstall `dist/plugin/minecraft_blockbench_mcp.js`, verify matching port/secret settings, reconnect Blockbench, and rerun. Some stale-plugin protocol failures are only observable as a disconnected-plugin precondition. |
| GeckoLib unavailable | Install or enable the GeckoLib Models & Animations plugin in Blockbench and rerun. |
| Required tool absent | Rebuild and reload the current Blockbench MCP plugin bundle. |
| Automated frame hashes match | Treat the smoke artifacts as not ready for visual review; inspect the generated report and adjust/fix the runtime path before claiming a live-smoke pass. |

## Troubleshooting

| Symptom | Check |
| --- | --- |
| `health` reports `E_SECRET_MISSING` | Run `minecraft-blockbench-mcp setup`, or configure `--secret` / `BLOCKBENCH_MCP_SECRET` for the adapter. |
| `health` reports `E_PORT_IN_USE` | Another process (possibly an orphaned adapter) holds the port; change `--port` on both sides or free it. |
| `health` reports `E_LISTENER_FAILED` | The operating system or runtime could not create the loopback listener; check local network permissions and platform policy, then restart the adapter. |
| Plugin shows “rejected the connection” | Port or secret mismatch between adapter and plugin settings. |
| Rotated the secret but the plugin still reports “rejected the connection” | Restart the adapter, or the Claude Code session that launched it, so it loads the new secret. |
| Plugin loads but nothing happens | Open the Blockbench devtools console (`Ctrl+Shift+I`); Blockbench logs plugin load errors there without any UI notice. |
| Plugin never connects and no permission prompt appears | Check **Tools → MCP Connection Status** for the config source. A denied file-access permission prompts again after changing "MCP Config File Path" (or use **Tools → Locate MCP Config File**); entering the port and secret manually always works. |
| File tools fail with `E_SCOPE_*` codes | The scoped directory is unconfirmed, expired (reload), or revoked — run `propose_scoped_directory` again. |

## Development notes

- `npm run dev` (in `external/blockbench`) launches Blockbench with a DevTools
  remote-debugging port, which is handy for driving smoke tests.
- The adapter ↔ plugin protocol (versioned, capability-flagged, partitioned
  into format-neutral and Java-format commands) lives in `src/shared/protocol.ts`;
  the path-containment rules live in `src/shared/scope.ts`.
- GeckoLib and other formats are future adapters: add a capability flag and a
  new command group instead of extending the Java group.

