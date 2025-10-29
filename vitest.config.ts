import { defineConfig } from 'vitest/config';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    exclude: ['node_modules/**'],
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
  },
  plugins: [
    {
      name: 'astro-handler',
      resolveId(id: string) {
        if (id.endsWith('.astro')) {
          return id;
        }
        return null;
      },
      load(id: string) {
        if (id.endsWith('.astro')) {
          const fileName = id.split('/').pop()?.replace('.astro', '');
          return `
            export default function ${fileName}(props = {}) {
              return '<div>Mock ${fileName} component</div>';
            }
          `;
        }
        return null;
      },
    },
  ],
  esbuild: {
    target: 'es2020',
  },
});
