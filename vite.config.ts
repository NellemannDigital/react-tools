import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    outDir: 'public',
    rollupOptions: {
      input: {
        'tool-one': 'src/tools/tool-one/element.tsx',
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
