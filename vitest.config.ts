import { defineConfig } from 'vitest/config';
import { fileURLToPath, URL } from 'node:url';
import { astro } from '@astrojs/test-utils/astro';

export default defineConfig({
  plugins: [astro()],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
