import { describe, it, expect } from 'vitest';
import { renderAstro } from '~/test-utils';
import { load } from 'cheerio';

describe('PostList', () => {
  it('renders posts with details in given order', async () => {
    const posts = [
      {
        slug: 'first',
        data: {
          title: 'First',
          description: 'Desc1',
          publishDate: new Date('2023-01-01'),
        },
      },
      {
        slug: 'second',
        data: {
          title: 'Second',
          description: 'Desc2',
          publishDate: new Date('2024-01-01'),
        },
      },
    ];
    const { html } = await renderAstro('src/components/PostList.astro', { posts });
    const $ = load(html);
    expect($('li').first().find('a').attr('href')).toBe('/blog/first/');
    expect($('li').eq(1).find('a').attr('href')).toBe('/blog/second/');
    expect(html).toContain('<a href="/blog/first/">First</a>');
    expect(html).toContain('<a href="/blog/second/">Second</a>');
    expect(html).toContain('Desc1');
    expect(html).toContain('Desc2');
    expect(html).toContain(posts[0].data.publishDate.toDateString());
    expect(html).toContain(posts[1].data.publishDate.toDateString());
  });
});
