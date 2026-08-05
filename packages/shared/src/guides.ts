/** Modeling playbook — proportions, pivots, hierarchy. Keep actionable and short. */
export const GUIDE_MODELING = `
# Modeling (Minecraft / Blockbench 5.1+)

## Mandatory workflow (do not skip)
1. get_guide(modeling) then create_project(format).
2. Entities: scaffold_biped FIRST (correct pivots). Blocks: apply_geometry_batch.
3. check_model immediately. Fix every error before texturing.
4. Texturing: pack_box_uv → shade_model_base → paint_face_features. (scaffold_biped already packs.)
5. capture_views only after check_model is clean (max_edge 256).

## Proportions
- Even integer sizes (2/4/6/8). Silhouette first; 8–20 cubes beats 80.
- Biped scale=1: head 8³, body 8×12×4, limbs 4×12×4; feet on y=0.

## Pivots
- Joints, not centers. Legs=hip top, arms=shoulder, head=neck.
- create_limb hangs cube from pivot — keep that default.

## Hierarchy
- root → body → head/arm_*/leg_*. Animate bones only.
- Empty groups / zero-volume cubes are errors.
`.trim();

export const GUIDE_TEXTURING = `
# Texturing

1. ensure_texture (64 entities / 16 blocks). Prefer pack_box_uv so faces do not share pixels.
2. shade_model_base with regions (head/body/arm/leg colors) — soft lighting + blur. Do NOT flat-fill everything.
3. paint_face_features for eyes/mouth/trim (batch ops, face-local 0,0 = face UV top-left).
4. get_texture to inspect the sheet; fix gaps; re-check_model for UNTEXTURED_FACE.
5. Palette 4–8 colors. Avoid painting before pack_box_uv.
`.trim();

export const GUIDE_ANIMATION = `
# Animation

1. Rig first (scaffold_biped / create_limb). Never keyframe loose cubes.
2. Idle: tiny body bob + head sway. Walk: opposite-phase limbs, few keys.
3. upsert_animation(replace:true) when revising. Then check_model + capture_views.
`.trim();

export const GUIDE_JAVA_BLOCK = `
# java_block

- Prefer geometry inside 0..16. One 16×16 texture.
- apply_geometry_batch for multi-cube shapes in one undo.
- check_model before export.
`.trim();

export const GUIDE_GECKOLIB = `
# geckolib_model

- Requires GeckoLib plugin (capability geckolib).
- Start scaffold_biped; stable snake_case bone names.
- propose_scoped_directory before export_model.
`.trim();
