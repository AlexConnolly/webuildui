import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'demo', // Points to your demo directory
  build: {
    outDir: '../dist-demo',
  },
});
