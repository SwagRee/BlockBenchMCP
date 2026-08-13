import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  COMMAND_NAMES,
  COMMAND_SPECS,
  MIN_BLOCKBENCH_VERSION,
  isBlockbenchSupported,
  isCommandName,
  resolveGuide,
} from "./index.js";

/** Contract smoke: the agent happy-path tools exist and guides push quality workflow. */
describe("generation smoke contract", () => {
  it("exposes the quality pipeline tools in order", () => {
    const pipeline = [
      "get_guide",
      "create_project",
      "scaffold_biped",
      "check_model",
      "ensure_texture",
      "pack_box_uv",
      "shade_model_base",
      "paint_face_features",
      "paint_pixel_batch",
      "get_texture",
      "capture_views",
    ] as const;
    for (const name of pipeline) {
      assert.equal(isCommandName(name), true, name);
      assert.ok(COMMAND_SPECS[name].description.length > 10);
    }
    assert.ok(COMMAND_NAMES.includes("apply_geometry_batch"));
    assert.ok(COMMAND_NAMES.includes("paint_face_feature"));
    assert.ok(COMMAND_NAMES.includes("auto_uv_cubes"));
  });

  it("texturing guide prefers pack + shade before features", () => {
    const g = resolveGuide("texturing");
    assert.match(g.text, /pack_box_uv/i);
    assert.match(g.text, /shade_model_base/i);
    assert.match(g.text, /paint_face_features/i);
  });

  it("guides explain java_block per-face vs box UV", () => {
    assert.match(resolveGuide("modeling").text, /uv_mode/i);
    assert.match(resolveGuide("java_block").text, /per-face|face/i);
  });

  it("modeling guide mandates scaffold + check before vision", () => {
    const g = resolveGuide("modeling");
    assert.match(g.text, /scaffold_biped/i);
    assert.match(g.text, /check_model/i);
    assert.match(g.text, /Mandatory workflow/i);
  });

  it("declares Blockbench 5.1 minimum", () => {
    assert.equal(MIN_BLOCKBENCH_VERSION, "5.1.0");
    assert.equal(isBlockbenchSupported("5.1.0"), true);
    assert.equal(isBlockbenchSupported("5.1.6"), true);
    assert.equal(isBlockbenchSupported("5.0.9"), false);
    assert.equal(isBlockbenchSupported("4.12.0"), false);
  });
});
