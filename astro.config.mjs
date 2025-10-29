import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pouyadata.github.io',
  markdown: { shikiConfig: { theme: 'github-dark' } },
  output: 'static',
  vite: {
    define: {
      'import.meta.env.DEPLOYMENT_WEEK': JSON.stringify(process.env.DEPLOYMENT_WEEK),
    },
  },
});
