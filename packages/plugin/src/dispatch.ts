import type { SessionState } from "./session.js";
import { toErrorPayload } from "./errors.js";
import { buildProjectSummary } from "./bb/summary.js";
import { runCheckModel } from "./check/rules.js";
import { captureViews } from "./views/capture.js";
import { createProject } from "./bb/project.js";
import { applyGeometryBatch } from "./geometry/batch.js";
import { createLimb } from "./geometry/limb.js";
import { scaffoldBiped } from "./geometry/biped.js";
import { ensureTexture } from "./texture/ensure.js";
import { autoUvCubes, paintFaceFeature } from "./paint/face-feature.js";
import { mirrorElements } from "./geometry/mirror.js";
import { proposeScopedDirectory, exportModel } from "./commands/scope-export.js";
import { upsertAnimation } from "./commands/animation.js";
import { requireProject } from "./bb/elements.js";
import type { ProjectFormat } from "@blockbench-mcp/shared";

export async function dispatchCommand(
  session: SessionState,
  command: string,
  params: unknown,
): Promise<unknown> {
  try {
    switch (command) {
      case "get_project_summary":
        return buildProjectSummary();
      case "check_model":
        return runCheckModel();
      case "capture_views":
        return await captureViews((params ?? {}) as never);
      case "get_guide":
        return { topic: "modeling", text: "Use adapter get_guide." };
      case "create_project": {
        const p = params as {
          format: ProjectFormat;
          name?: string;
          texture_width?: number;
          texture_height?: number;
        };
        const r = createProject(p);
        return { ok: true, undo_label: `create_project ${p.format}`, ...r };
      }
      case "apply_geometry_batch":
        return applyGeometryBatch((params ?? {}) as never);
      case "create_limb": {
        const r = createLimb((params ?? {}) as never);
        return { ok: true, undo_label: "create_limb", ...r };
      }
      case "scaffold_biped":
        return scaffoldBiped((params ?? {}) as never);
      case "ensure_texture": {
        const r = ensureTexture((params ?? {}) as never);
        return { ok: true, undo_label: "ensure_texture", created: [r] };
      }
      case "auto_uv_cubes":
        return autoUvCubes((params ?? {}) as never);
      case "mirror_elements":
        return mirrorElements((params ?? {}) as never);
      case "paint_face_feature":
        return paintFaceFeature((params ?? {}) as never);
      case "upsert_animation":
        return upsertAnimation((params ?? {}) as never);
      case "propose_scoped_directory":
        return proposeScopedDirectory(
          session,
          (params as { path: string }).path,
        );
      case "export_model":
        return exportModel(session, (params ?? {}) as never);
      default:
        requireProject();
        throw Object.assign(new Error(`Unsupported command: ${command}`), {
          code: "E_UNSUPPORTED_COMMAND",
        });
    }
  } catch (err) {
    const payload = toErrorPayload(err);
    throw Object.assign(new Error(payload.message), { payload });
  }
}
