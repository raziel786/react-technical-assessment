import { defineConfig, createLogger } from 'vite';
import react from '@vitejs/plugin-react';
import monacoEditorPlugin from 'vite-plugin-monaco-editor';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    hmr: {
      clientPort: parseInt(process.env.WEBSOCKET_PORT!)
    }
  },
  build: {
    rollupOptions: {
    onwarn(warning, warn) {
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
        return
      }
      warn(warning)
    }}
  },
  plugins: [react(), monacoEditorPlugin({})],
  customLogger: createLogger('info', { prefix: '[coderpad]' })
});
