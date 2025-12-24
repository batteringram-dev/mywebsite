import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base path for GitHub Pages
  // In development, always use "/" for local testing
  // In production, use the VITE_BASE_PATH env variable or default to "/"
  base: mode === "development" ? "/" : (process.env.VITE_BASE_PATH || "/"),
  build: {
    outDir: "docs",
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
