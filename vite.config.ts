import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  // Обязательно './' для корректной работы путей к ассетам после билда и деплоя на Vercel
  base: './',

  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },

  plugins: [
    react(),
    tsconfigPaths(),
    // Включаем mkcert только если HTTPS (для локальной разработки с SSL)
    process.env.HTTPS && mkcert(),
  ],

  build: {
    target: 'esnext',
  },

  publicDir: './public',

  server: {
    host: true, // Доступно в локальной сети
  },
});
