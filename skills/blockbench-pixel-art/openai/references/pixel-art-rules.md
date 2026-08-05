# Pixel-art construction rules

## Contents

1. Design contract
2. Geometry and silhouette
3. Palette and value structure
4. Pixel placement
5. Transparent glass
6. Reference recreation
7. Visual acceptance tests

## Design contract

Before building, record the subject and pose, three identifying silhouette features, relative proportions, materials, light direction, palette roles, focal region, permitted detail density, transparency or emission behavior, and reference-preservation requirements. If these cannot be stated, inspect or ask before painting.

## Geometry and silhouette

- Use the fewest cubes that preserve the identifying silhouette.
- Separate parts only when they change the outline, articulate, or require a distinct material boundary.
- Check the silhouette untextured. At small scale, ears, muzzle, paws, tail, and stance must read without color.
- Avoid coincident coplanar faces and uncontrolled cube intersections.
- Use consistent thickness for paired parts, then introduce asymmetry only where it supports the design.

## Palette and value structure

- Assign colors by role: transparent/base, base, light, highlight, shadow, deep accent, and optional outline.
- Keep a stable base over most of a material region. A useful starting range is 60–80%, adjusted for the subject.
- Separate adjacent structural planes by value or hue, not random noise.
- Highlights describe planes facing the light; shadows describe occlusion, undersides, and planes facing away.
- Do not alternate colors merely to fill pixels. Every non-base pixel must describe form, material, or an identifying feature.
- Check the palette in grayscale. The focal feature and silhouette edges must remain legible.

## Pixel placement

- Author face-sized grids using exact UV dimensions.
- Prefer short stepped clusters, corner accents, and controlled one-pixel breaks.
- Avoid long straight highlight bars unless the material is intentionally polished and the bar follows a plane.
- Avoid isolated noise. A single pixel must be an intentional sparkle, eye, joint, corner, or texture break.
- Keep paired parts related but not mechanically identical. Mirror structure first; vary only a few secondary pixels.
- Reserve the strongest contrast for the focal region and silhouette-critical edges.

## Transparent glass

Glass is defined by edges and refraction cues, not by filling every face with pale blue.

- Use transparent base pixels with low-to-medium alpha.
- Use higher-alpha edge pixels at corners, lower rims, joints, and silhouette breaks.
- Place small bright highlights on planes facing the light. Use one secondary reflected hue sparingly.
- Keep broad central regions more transparent than edges so the form reads as hollow or translucent.
- Darken selected far edges to imply thickness. Do not outline every edge equally.
- Allow internal overlaps to show, but prevent coincident faces from producing opaque noise.
- On a dark viewport, verify highlights; on a light viewport, verify edge alpha and silhouette.
- For a glass creature, keep eyes, nose, or another focal feature more opaque so the character remains readable. If transparent sorting or downscaling still hides those pixels, add thin focal-detail geometry with unique UV space; never paint duplicate faces on the back.

Suggested alpha roles:

| Role | Alpha range |
| --- | --- |
| broad transparent base | 20–45% |
| lit plane | 35–60% |
| silhouette edge | 55–80% |
| sparkle/focal highlight | 80–100% |
| opaque focal feature | 90–100% |

## Reference recreation

- Measure reference landmarks before modeling: bounding box, head/body ratio, limb lengths, and major color boundaries.
- Build a correspondence table from reference region to model group and UV face.
- Match color roles and coordinates. Do not replace missing evidence with decorative detail.
- When exact recreation is requested, translate reference pixels into the current UV layout; do not hard-code a known asset by name.
- When original work is requested, use references only for visual grammar. Author new geometry and new grid layouts.

## Visual acceptance tests

Accept only when all relevant checks pass: silhouette reads at approximately 128 pixels tall; focal feature reads without zooming; light direction is consistent; no face appears accidentally flat, noisy, or camouflage-like; material identity is obvious; paired parts remain coherent; front, side, and isometric views agree; the atlas has no unintended overlap; and `check_model` has no unresolved findings.

