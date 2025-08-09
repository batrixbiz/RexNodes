import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tempo } from "tempo-devtools/dist/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tempo()],
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "lucide-react"],
    force: true,
  },
  build: {
    // Optimize build for better performance
    target: "esnext",
    minify: "esbuild",
    cssMinify: true,
    rollupOptions: {
      output: {
        // Manual chunking for better caching
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          icons: ["lucide-react"],
        },
      },
    },
    // Enable source maps for debugging
    sourcemap: true,
  },
  server: {
    // @ts-ignore
    allowedHosts: process.env.TEMPO === "true" ? true : undefined,
    // Enable CORS for development
    cors: true,
    // Optimize HMR
    hmr: {
      overlay: false,
    },
  },
  // CSS optimization
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      css: {
        charset: false,
      },
    },
  },
  // Enable esbuild for faster builds
  esbuild: {
    target: "esnext",
    platform: "browser",
  },
});
