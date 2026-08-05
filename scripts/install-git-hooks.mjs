import { copyFileSync, chmodSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, ".githooks", "commit-msg");
const destDir = join(root, ".git", "hooks");
const dest = join(destDir, "commit-msg");

if (!existsSync(join(root, ".git"))) {
  process.exit(0);
}
if (!existsSync(src)) {
  console.warn("install-git-hooks: missing .githooks/commit-msg");
  process.exit(0);
}

mkdirSync(destDir, { recursive: true });
copyFileSync(src, dest);
try {
  chmodSync(dest, 0o755);
} catch {
  // Windows may ignore chmod; hook still runs via sh when present.
}
console.log("Installed commit-msg hook (blocks Cursor co-author trailers)");
