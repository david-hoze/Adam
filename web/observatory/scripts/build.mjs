import { createHash } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const sourceFiles = ["package.json", "package-lock.json", "vite.config.ts", "tsconfig.json"];
const srcRoot = path.join(root, "src");

async function collectFiles(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        files.push(...(await collectFiles(full)));
      } else if (entry.isFile()) {
        files.push(full);
      }
    }
    return files;
  } catch {
    return [];
  }
}

async function computeSourceHash() {
  const hash = createHash("sha256");
  const files = [];
  for (const relative of sourceFiles) {
    const candidate = path.join(root, relative);
    try {
      await fs.access(candidate);
      files.push(candidate);
    } catch {}
  }
  files.push(...(await collectFiles(srcRoot)).sort());
  for (const file of files.sort()) {
    const content = await fs.readFile(file);
    hash.update(path.relative(root, file));
    hash.update(":");
    hash.update(content);
    hash.update("\n");
  }
  return hash.digest("hex").slice(0, 16);
}

await build({ configFile: path.join(root, "vite.config.ts") });
const outDir = path.resolve(root, "../../eden/observatory/static/observatory_app");
const manifest = {
  built_at: new Date().toISOString(),
  source_hash: await computeSourceHash(),
  toolchain: "vite-react-ts",
};
await fs.writeFile(path.join(outDir, "build-meta.json"), JSON.stringify(manifest, null, 2));
