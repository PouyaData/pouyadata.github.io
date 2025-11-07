import { load } from 'cheerio';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

// Render function that processes actual Astro components
export async function render(component: AstroComponentFactory, props?: Record<string, unknown>): Promise<{ html: string }> {
  try {
    // Create an Astro container for rendering
    const container = await AstroContainer.create();
    // Render the component using the container
    const html = await container.renderToString(component, { props: props || {} });
    return { html };
  } catch (error) {
    console.error('Error rendering component:', error);
    return { html: '<div>Error rendering component</div>' };
  }
}

// Helper function to load HTML with cheerio
export function loadHtml(html: string) {
  return load(html);
}

// Helper to create mock data for testing
export function createMockPosts(count = 3) {
  return Array.from({ length: count }, (_, i) => ({
    slug: `post-${i + 1}`,
    data: {
      title: `Test Post ${i + 1}`,
      description: `Description for test post ${i + 1}`,
      publishDate: new Date(`2024-01-${String(i + 1).padStart(2, '0')}`),
    },
  }));
} 