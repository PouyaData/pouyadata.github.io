import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pouyadata.github.io',
  markdown: { shikiConfig: { theme: 'github-dark' } },
  output: 'static'
});
