import fs from "node:fs";
import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

const root = path.resolve(import.meta.dirname, "client");
const outDir = path.resolve(import.meta.dirname, "dist");

// GitHub Pages serves 404.html for unknown paths. A copy of index.html lets
// the router render the NotFound page instead of GitHub's default 404.
function spaFallback(): Plugin {
  return {
    name: "spa-404-fallback",
    apply: "build",
    closeBundle() {
      fs.copyFileSync(path.join(outDir, "index.html"), path.join(outDir, "404.html"));
    },
  };
}

export default defineConfig({
  // The deploy workflow sets BASE_PATH from the Pages config: "/" on
  // www.agkbuilds.com, "/kannon.github.io/" while no custom domain is set.
  base: process.env.BASE_PATH || "/",
  root,
  plugins: [react(), spaFallback()],
  resolve: {
    alias: { "@": path.resolve(root, "src") },
  },
  build: {
    outDir,
    emptyOutDir: true,
  },
});
