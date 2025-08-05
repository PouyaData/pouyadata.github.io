import { defineConfig } from 'vitest/config';
import { astro } from '@astrojs/test-utils';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [astro()],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
