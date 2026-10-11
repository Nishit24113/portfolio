import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served as a GitHub Pages project site at /portfolio/.
// Override with VITE_BASE=/ for local dev or a custom domain.
export default defineConfig({
  base: process.env.VITE_BASE ?? "/portfolio/",
  plugins: [react()],
});
