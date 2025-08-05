import { describe, it, expect } from 'vitest';
import { render } from '@astrojs/test-utils';
import { load } from 'cheerio';
import PostList from './PostList.astro';

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

    const { html } = await render(PostList, { props: { posts } });
    const $ = load(html);
    const slugs = $('li')
      .map((_i, li) => $(li).find('a').attr('href')?.split('/')[2])
      .get();

    expect(slugs).toEqual(['first', 'second']);
    expect(html).toContain('<a href="/blog/first/">First</a>');
    expect(html).toContain('<a href="/blog/second/">Second</a>');
    expect(html).toContain('Desc1');
    expect(html).toContain('Desc2');
    expect(html).toContain(posts[0].data.publishDate.toDateString());
    expect(html).toContain(posts[1].data.publishDate.toDateString());
  });
});
