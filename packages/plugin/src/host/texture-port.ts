import type { TextureHandle, TexturePort } from "./ports.js";
import { CommandError } from "../errors.js";

type BbTexture = {
  uuid: string;
  name: string;
  width: number;
  height: number;
  canvas?: HTMLCanvasElement;
  ctx?: CanvasRenderingContext2D;
  fromDataURL: (url: string) => BbTexture;
  add: (undo?: boolean) => BbTexture;
  edit: (
    cb: (canvas: HTMLCanvasElement) => void,
    opts?: { edit_name?: string },
  ) => void;
  updateChangesAfterEdit?: () => void;
};

type TextureCtor = {
  new (data?: { name?: string }): BbTexture;
  all: BbTexture[];
  getDefault?: () => BbTexture | undefined;
};

function textureApi(): TextureCtor {
  const T = (globalThis as unknown as { Texture?: TextureCtor }).Texture;
  if (!T) throw new CommandError("E_BLOCKBENCH_ERROR", "Texture API unavailable");
  return T;
}

function wrap(tex: BbTexture): TextureHandle {
  return {
    uuid: tex.uuid,
    name: tex.name,
    width: tex.width,
    height: tex.height,
    edit(paint, editName) {
      if (typeof tex.edit === "function") {
        tex.edit((canvas) => {
          const ctx = canvas.getContext("2d") ?? tex.ctx;
          if (!ctx) {
            throw new CommandError("E_BLOCKBENCH_ERROR", "Texture canvas has no 2d context");
          }
          paint(ctx, canvas);
        }, { edit_name: editName });
        tex.updateChangesAfterEdit?.();
        return;
      }
      // Fallback: direct canvas
      const canvas = tex.canvas;
      const ctx = canvas?.getContext("2d") ?? tex.ctx;
      if (!canvas || !ctx) {
        throw new CommandError("E_BLOCKBENCH_ERROR", "Texture.edit unavailable");
      }
      paint(ctx, canvas);
      tex.updateChangesAfterEdit?.();
    },
    applyToCube(cubeUuid, faces = true) {
      const Cube = (globalThis as unknown as {
        Cube?: { all: Array<{ uuid: string; applyTexture: (t: BbTexture, f?: true | string[]) => void }> };
      }).Cube;
      const cube = Cube?.all.find((c) => c.uuid === cubeUuid);
      if (!cube) throw new CommandError("E_NOT_FOUND", `Cube ${cubeUuid}`);
      cube.applyTexture(tex, faces);
    },
  };
}

function solidDataUrl(width: number, height: number, fill: string): string {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new CommandError("E_BLOCKBENCH_ERROR", "No 2d context");
  ctx.fillStyle = fill;
  ctx.fillRect(0, 0, width, height);
  return canvas.toDataURL("image/png");
}

export function createTexturePort(): TexturePort {
  return {
    find(ref) {
      const T = textureApi();
      const hit = T.all.find((t) => t.uuid === ref || t.name === ref);
      return hit ? wrap(hit) : undefined;
    },
    defaultOrFirst() {
      const T = textureApi();
      const hit = T.getDefault?.() ?? T.all[0];
      return hit ? wrap(hit) : undefined;
    },
    list() {
      return textureApi().all.map(wrap);
    },
    ensure(opts) {
      const T = textureApi();
      const existing = T.all.find((t) => t.name === opts.name);
      if (existing) return wrap(existing);
      const dataUrl = solidDataUrl(opts.width, opts.height, opts.fill);
      const tex = new T({ name: opts.name });
      if (typeof tex.fromDataURL !== "function") {
        throw new CommandError(
          "E_BLOCKBENCH_ERROR",
          "Texture.fromDataURL missing — need Blockbench ≥ 5.1",
        );
      }
      tex.fromDataURL(dataUrl);
      // undo:false — caller owns Undo via UndoPort
      tex.add(false);
      const Project = (globalThis as unknown as {
        Project?: { texture_width?: number; texture_height?: number };
      }).Project;
      if (Project) {
        Project.texture_width = opts.width;
        Project.texture_height = opts.height;
      }
      return wrap(tex);
    },
  };
}
