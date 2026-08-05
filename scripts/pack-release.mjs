import { copyFileSync, mkdirSync, existsSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "packages", "plugin", "dist", "blockbench_mcp.js");
const outDir = join(root, "release");
const dest = join(outDir, "blockbench_mcp.js");

if (!existsSync(src)) {
  console.error("Missing build output:", src);
  console.error("Run: npm run build");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);
const size = statSync(dest).size;
console.log(`Packed ${dest} (${size} bytes)`);
