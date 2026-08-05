# Spike Compare: jasonjgardner vs adhi vs sosadly

**Method:** Static code + public-issue analysis (same failure modes as a live same-prompt run would hit). Vendor source snapshots were reviewed locally under `research/vendors/` (not published). Live Blockbench E2E was not required for this spike; findings are grounded in tool schemas and known bugs.

**Hypothetical prompt used for scoring:**  
> “Create a simple GeckoLib wolf: body, head, four legs, tail; texture a 64×64 sheet; add idle + walk animations; iterate from screenshots until proportions look right.”

---

## Scorecard (lower is better for risk)

| Failure mode | jasonjgardner | adhi-jp | sosadly | Evidence |
|--------------|---------------|---------|---------|----------|
| Tool-call count for geometry | High | Medium | Medium-Low | jason: `place_cube` exists but agent still driven by many tiny UI tools; sosadly: `add_cubes`/`add_groups`; adhi: `create_cubes` batch |
| Silent / false success | **Critical** | Low | Medium | jason #46 keyframes discard values; #45 texture props ignored; adhi uses `.strict()` + typed `E_*` |
| Screenshot context blowup | **Critical** | Low-Med | Low-Med | jason `capture_screenshot` — no resize params (`camera.ts`); adhi defaults **512px** + presets; sosadly optional width/height + `screenshot_views` |
| Schema / validation traps | **High** | Low | Medium | jason #44 `add_group` validation; adhi Zod strict + domain errors |
| Disconnect / health | **High** | Low | Medium | jason MCP dies with BB (#40); adhi `health` works while BB closed |
| Domain (MC / GeckoLib) | Low (generic + Hytale) | **High** | Low-Med | adhi has GeckoLib command profile; sosadly has guide topics but generic BB |
| Agent guidance | Skills external | Tool descriptions | **`get_guide` / `check_model`** | sosadly playbook in-tool |
| Engineering maturity | Med (large surface) | **High** | Med | adhi: tests, scope, secret, protocol version |
| Likely end visual quality | Poor–uneven | Uneven (unproven) | Better paper path | None solve proportions without intent tools |

---

## Same-prompt failure narrative

### jasonjgardner (most stars → most “feels bad”)

1. Agent discovers 50+ tools including `trigger_action` / paint chrome → wanders.
2. Builds cubes one interaction at a time; hierarchy via `add_group` may **fail schema** (#44).
3. Textures created but render mode silently wrong (#45).
4. Animation `manage_keyframes` reports success while storing **defaults** (#46) → walk is frozen/wrong.
5. Calls `capture_screenshot` / `capture_app_screenshot` at full res → context dies mid-iteration.
6. Closing Blockbench removes the HTTP MCP entirely.

**Estimated tool calls to “done”:** 80–200+ with high abort rate.

### adhi-jp (best engineering, still not “good enough”)

1. Format-gated commands; GeckoLib path is first-class → less tool noise.
2. `create_cubes` / group ops are UUID-strict; mistakes fail loudly (`E_NOT_FOUND`) — safer, but agent must track UUIDs carefully.
3. Screenshots default 512² with angle presets — better than full desktop, still heavy if looped.
4. No intent tools (`create_limb`, face-relative paint); wolf still assembled from primitives.
5. Scope dialogs + secret setup raise friction before first cube.

**Estimated tool calls:** 40–90; fewer false successes; quality still depends on model spatial skill.

### sosadly (best agent UX ideas, small ecosystem)

1. `get_guide` before build + `add_cubes`/`add_groups` + `check_model` → healthier loop on paper.
2. `screenshot_views` with width/height → multi-angle without app chrome dumps.
3. Still generic Blockbench; GeckoLib is “install plugin + hope,” not a typed profile.
4. HTTP bridge on `:8787`; less hardening than adhi (no shared secret / scope model in the same depth).
5. Almost no public issue history — unknown production sharpness.

**Estimated tool calls:** 30–70 if the agent follows the guide; quality still limited by primitive tools.

---

## Quantized comparison (code facts)

| Dimension | jasonjgardner | adhi | sosadly |
|-----------|---------------|------|---------|
| Transport | In-process HTTP MCP `:3000/bb-mcp` | stdio MCP ↔ WS loopback | stdio MCP ↔ HTTP `:8787` |
| Screenshot API | `project?` only — no size | `width`/`height` + `angle_preset`, default 512 | `width`/`height` + multi-view |
| Param strictness | Mixed Zod; known silent drops | `.strict()` everywhere | JSON Schema; looser |
| Batch geometry | `place_cube` accepts array | `create_cubes` | `add_cubes` / `add_groups` |
| Model audit | Weak / resources | `validate_project` | `check_model` |
| Escape hatch | `risky_eval` | none (good) | `execute_script` |
| Stars (approx) | 333 | 0 | 1 |

---

## Implications for this repo

Aligned with [DECISION.md](./DECISION.md) and [ARCHITECTURE.md](./ARCHITECTURE.md):

1. Copy **adhi’s** transport + strict errors + health-while-disconnected.
2. Copy **sosadly’s** guide / check / multi-view / bulk geometry habits.
3. Reject **jasonjgardner’s** in-process kitchen-sink + unsized screenshots.
4. Add what none of them have: **intent tools** (`create_limb`, `paint_face_feature`, transactional `apply_geometry_batch`) and **default max_edge ≈ 256 JPEG**.

---

## Live E2E (optional follow-up)

If Blockbench desktop is available later, run the wolf prompt once per stack and log: tool-call count, context tokens from images, silent-failure incidents, final `check_model` errors. This spike already predicts the ranking: **adhi ≈ sosadly >> jasonjgardner** for reliability; **none** yet for out-of-box visual quality.
