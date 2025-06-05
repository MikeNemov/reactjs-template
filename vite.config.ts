import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/', // <--- ИЗМЕНЕНО ЗДЕСЬ
  plugins: [
    react(),
    tsconfigPaths(),
  ],
  build: {
    target: 'esnext',
  },
  publicDir: 'public',
  server: {
    host: true,
  },
});