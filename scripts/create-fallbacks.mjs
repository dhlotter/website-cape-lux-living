import { access, copyFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");
const source = path.join(distDir, "index.html");
const fallbacks = ["404.html"];

async function main() {
  try {
    await access(source);
  } catch (error) {
    console.warn(
      "[fallbacks] dist/index.html not found. Skipping fallback generation."
    );
    return;
  }

  await Promise.all(
    fallbacks.map(async (fileName) => {
      const target = path.join(distDir, fileName);
      await copyFile(source, target);
      console.log(`[fallbacks] Created ${fileName}`);
    })
  );
}

main().catch((error) => {
  console.error("[fallbacks] Failed to create fallback files:", error);
  process.exitCode = 1;
});
