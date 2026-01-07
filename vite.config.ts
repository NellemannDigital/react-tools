import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), react()],
  define: {
    'process.env': {}
  },
  build: {
    outDir: 'public',
    rollupOptions: {
      input: {
        'car-list': 'src/tools/car-list/element.tsx',
        'tool-two': 'src/tools/tool-two/element.tsx'
      },
      output: {
        entryFileNames: '[name].js',
      }
    },
    lib: {
      entry: 'src/main.tsx',
      name: 'tools',
      formats: ['es'],
    },
  },
  server: {
      cors: true,
  },
});
