// tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/playwright/index.ts", "src/vitest/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  outDir: "dist",
  bundle: true,
  external: ["@prisma/client", "@playwright/test", "vitest"],
});
