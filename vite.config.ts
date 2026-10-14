import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
  react(),
  legacy({
    targets: ["defaults", "not IE 11"],
    modernPolyfills: [
      "es.array.at",
      "es.string.at-alternative",
      "es.typed-array.at",
    ],
    polyfills: [
      "es.array.at",
      "es.string.at-alternative",
      "es.typed-array.at",
    ],
  }),
  mode === "development" && componentTagger(),
].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
