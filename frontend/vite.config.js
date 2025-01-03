import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/ this causes in react production dom to be fired as it is secret internals
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:5000",
      "/uploads": "http://localhost:5000",
    },
  },
  plugins: [react()],
});
