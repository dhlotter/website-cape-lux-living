import { cp, rm, rename } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "../");
const distDir = path.join(rootDir, "dist");
const docsDir = path.join(rootDir, "docs");
const tempDir = path.join(rootDir, "docs-temp");

async function main() {
  try {
    await cp(distDir, tempDir, { recursive: true });
    await rm(docsDir, { recursive: true, force: true });
    await rename(tempDir, docsDir);
    console.log("[docs] Synced dist -> docs");
  } catch (error) {
    console.error("[docs] Failed to sync dist to docs:", error);
    await rm(tempDir, { recursive: true, force: true }).catch(() => {});
    process.exitCode = 1;
  }
}

main();
