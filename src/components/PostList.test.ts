import { describe, it, expect } from 'vitest';
import { renderAstro } from '../test-utils';

describe('PostList', () => {
  it('renders posts in given order with correct links', async () => {
    const posts = [
      { slug: 'first', data: { title: 'First', description: 'Desc1', publishDate: new Date('2023-01-01') } },
      { slug: 'second', data: { title: 'Second', description: 'Desc2', publishDate: new Date('2024-01-01') } },
    ];
    const html = await renderAstro('src/components/PostList.astro', { posts });
    const firstIndex = html.indexOf('href="/blog/first/"');
    const secondIndex = html.indexOf('href="/blog/second/"');
    expect(firstIndex).toBeLessThan(secondIndex);
    expect(html).toContain('<a href="/blog/first/">First</a>');
    expect(html).toContain('<a href="/blog/second/">Second</a>');
  });
});
