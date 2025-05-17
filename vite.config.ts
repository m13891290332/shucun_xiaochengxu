import * as vite from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default vite.defineConfig({
  plugins: [
    react(),
  ],
  server: {
    port: 5173,
    proxy: {
      // 代理API请求到Express服务器
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/uploads': {
        target: 'http://localhost:3000',
      },
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  // 确保正确处理静态资源
  publicDir: 'public',
});
