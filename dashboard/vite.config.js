import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Diviser les bibliothèques communes dans un chunk séparé
        },
      },
    },
    chunkSizeWarningLimit: 600, // Ajuster la limite d'avertissement de taille de chunk
  },
});
