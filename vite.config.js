import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function cmsMiddleware() {
  return {
    name: 'cms-rewrite-middleware',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';
        if (
          url === '/admin' ||
          url === '/admin/' ||
          url === '/admin.html' ||
          url === '/vireo' ||
          url === '/vireo/' ||
          url === '/dashboard' ||
          url === '/dashboard/' ||
          url === '/src/html/dashboards' ||
          url === '/src/html/dashboards/'
        ) {
          req.url = '/src/html/dashboards/sales.html';
        }
        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), cmsMiddleware()],
  server: {
    port: 3000,
    open: false,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) {
            return 'vendor-three';
          }
          if (id.includes('node_modules/gsap')) {
            return 'vendor-gsap';
          }
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
        }
      }
    }
  }
});

