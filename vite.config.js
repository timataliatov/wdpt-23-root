import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/wdpt-23-root/',
  server: {
    port: 10000,
  },
  preview: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
