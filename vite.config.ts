import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [tailwindcss(), react()],
  
  assetsInclude: ["**/*.woff2", "**/*.woff", "**/*.ttf"],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  define: {
    'process.env': {},
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,

    rollupOptions: {
      input: {
        'car-list': 'src/tools/car-list/element.tsx',
        'car-trims': 'src/tools/car-trims/element.tsx',
        'tool-two': 'src/tools/tool-two/element.tsx',
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },

  server: {
    cors: true,
  },
});
