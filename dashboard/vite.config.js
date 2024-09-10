import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    port: 5176,
    proxy: {
      "/api": "http://localhost:5000",
    },
  },

  build: {
    outDir: "build", // Spécifie le répertoire de sortie
  },

  optimizeDeps: {
    include: ["react-router-dom"],
  },
});
