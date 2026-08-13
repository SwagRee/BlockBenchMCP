import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";
import {
  COMMAND_NAMES,
  COMMAND_SPECS,
  DEFAULTS,
  applyGeometryBatchParamsSchema,
  captureViewsDefaults,
  captureViewsParamsSchema,
  createLimbParamsSchema,
  isCommandName,
  makeError,
  mutationResultSchema,
  paintPixelBatchParamsSchema,
  setFaceUvParamsSchema,
  setProjectMetaParamsSchema,
  updateElementsParamsSchema,
  upsertAnimationParamsSchema,
  resolveGuide,
  scaffoldBipedParamsSchema,
} from "./index.js";

const MAX_LINES = 500;
const ROOT = fileURLToPath(new URL("../../..", import.meta.url));

function collectTsFiles(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === "dist") continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) collectTsFiles(p, out);
    else if (name.endsWith(".ts")) out.push(p);
  }
  return out;
}

describe("command registry", () => {
  it("exposes intent surface including scaffold_biped", () => {
    for (const name of [
      "scaffold_biped",
      "create_limb",
      "apply_geometry_batch",
      "check_model",
      "capture_views",
      "get_guide",
    ] as const) {
      assert.equal(isCommandName(name), true);
      assert.ok(COMMAND_SPECS[name].description.length > 0);
    }
    assert.ok(COMMAND_NAMES.length >= 12);
  });

  it("rejects kitchen-sink UI escapes", () => {
    for (const name of ["trigger_action", "risky_eval", "emulate_clicks"]) {
      assert.equal(isCommandName(name), false);
    }
  });
});

describe("guides", () => {
  it("returns modeling playbook by default", () => {
    const g = resolveGuide();
    assert.equal(g.topic, "modeling");
    assert.match(g.text, /pivot/i);
    assert.match(g.text, /scaffold_biped/);
    assert.match(g.text, /Mandatory workflow/i);
  });
});

describe("capture_views contract", () => {
  it("defaults keep screenshots compact", () => {
    assert.equal(captureViewsDefaults.max_edge, 256);
    assert.equal(DEFAULTS.screenshotMaxEdge, 256);
  });

  it("rejects unknown keys", () => {
    assert.throws(() =>
      captureViewsParamsSchema.parse({ views: ["iso"], extra: true }),
    );
  });
});

describe("pixel brush batch contract", () => {
  it("accepts bounded face-local brush paths", () => {
    const value = paintPixelBatchParamsSchema.parse({
      strokes: [
        {
          cube: "head",
          face: "north",
          color: "#ffffff",
          points: [
            { x: 1, y: 1 },
            { x: 6, y: 3 },
          ],
          size: 2,
          shape: "square",
        },
      ],
    });
    assert.equal(value.strokes.length, 1);
  });

  it("rejects fractional pixels and oversized brushes", () => {
    assert.throws(() =>
      paintPixelBatchParamsSchema.parse({
        strokes: [
          {
            cube: "head",
            face: "north",
            color: "#fff",
            points: [{ x: 0.5, y: 1 }],
          },
        ],
      }),
    );
    assert.throws(() =>
      paintPixelBatchParamsSchema.parse({
        strokes: [
          {
            cube: "head",
            face: "north",
            color: "#fff",
            points: [{ x: 1, y: 1 }],
            size: 33,
          },
        ],
      }),
    );
  });
});

describe("geometry schemas", () => {
  it("batch requires ops", () => {
    assert.throws(() => applyGeometryBatchParamsSchema.parse({}));
    applyGeometryBatchParamsSchema.parse({
      create_cubes: [{ name: "body", from: [0, 0, 0], to: [8, 8, 8] }],
    });
  });

  it("limb + biped parse", () => {
    createLimbParamsSchema.parse({
      name: "leg_fl",
      pivot: [2, 12, 0],
      size: [4, 12, 4],
      mirror: "x",
    });
    scaffoldBipedParamsSchema.parse({ scale: 1, texture_size: 64 });
  });
});

describe("management schemas", () => {
  it("supports exact read-modify-write geometry and UV payloads", () => {
    updateElementsParamsSchema.parse({
      updates: [
        {
          ref: "head",
          from: [-4, 24, -4],
          to: [4, 32, 4],
          parent: "body",
          visibility: true,
        },
      ],
    });
    setFaceUvParamsSchema.parse({
      entries: [
        { cube: "head", face: "north", uv: [8, 8, 16, 16], rotation: 90 },
      ],
    });
  });

  it("rejects empty metadata changes and invalid UV rotations", () => {
    assert.throws(() => setProjectMetaParamsSchema.parse({}));
    assert.throws(() =>
      setFaceUvParamsSchema.parse({
        entries: [
          { cube: "head", face: "north", uv: [0, 0, 8, 8], rotation: 45 },
        ],
      }),
    );
  });
});

describe("animation schema", () => {
  it("supports scale and interpolation controls", () => {
    upsertAnimationParamsSchema.parse({
      name: "animation.test.idle",
      length: 1,
      bones: {
        body: {
          scale: [
            { time: 0, value: [1, 1, 1], interpolation: "step" },
            { time: 1, value: [1, 1.05, 1], interpolation: "catmullrom" },
          ],
        },
      },
    });
  });
});

describe("mutation result", () => {
  it("typed failure", () => {
    const err = mutationResultSchema.parse({
      ok: false,
      ...makeError("E_PARTIAL_FORBIDDEN", "Batch aborted"),
    });
    assert.equal(err.ok, false);
  });
});

describe("architecture guard", () => {
  it("no source file exceeds 500 lines", () => {
    const files = collectTsFiles(join(ROOT, "packages"));
    assert.ok(files.length > 5, "expected package sources");
    const offenders: string[] = [];
    for (const file of files) {
      const lines = readFileSync(file, "utf8").split(/\r?\n/).length;
      if (lines > MAX_LINES) offenders.push(`${relative(ROOT, file)}:${lines}`);
    }
    assert.deepEqual(offenders, []);
  });
});
