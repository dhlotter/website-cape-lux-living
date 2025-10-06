import { cp, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "../");
const distDir = path.join(rootDir, "dist");
const docsDir = path.join(rootDir, "docs");

async function main() {
  try {
    await rm(docsDir, { recursive: true, force: true });
    await cp(distDir, docsDir, { recursive: true });
    console.log("[docs] Synced dist -> docs");
  } catch (error) {
    console.error("[docs] Failed to sync dist to docs:", error);
    process.exitCode = 1;
  }
}

main();
