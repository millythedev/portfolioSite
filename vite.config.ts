import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolioSite/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    headers: {
      'Content-Type': 'application/javascript'
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
});
