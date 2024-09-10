import react from "@vitejs/plugin-react";
import { defineConfig } from "vite"; // Déclaration en double

export default defineConfig({
  plugins: [react()],

  build: {
    outDir: "build", // Assure-toi que le répertoire de sortie est 'build'
    minify: "esbuild", // Assure-toi que la minification est correctement configurée
  },

  server: {
    port: 5176,
    proxy: {
      "/api": "http://localhost:5000",
    },
  },

  optimizeDeps: {
    include: ["react-router-dom"],
  },
});
