import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
  },

  optimizeDeps: {
    include: ["react-router-dom"],
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],

//   server: {
//     proxy: {
//       "/api": "http://localhost:5000",
//     },
//   },
// });
