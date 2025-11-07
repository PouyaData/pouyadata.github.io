
import { describe, it, expect } from 'vitest';
import { render } from '../test-utils';
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

    const { html } = await render(PostList, { posts });
    const $ = load(html);
    const slugs = $('li')
      .map((_i, li) => $(li).find('a').attr('href')?.split('/')[2])
      .get();

    expect(slugs).toEqual(['first', 'second']);

    // Check that links exist with correct href and text
    const firstLink = $('a[href="/blog/first/"]');
    const secondLink = $('a[href="/blog/second/"]');
    expect(firstLink.length).toBeGreaterThan(0);
    expect(firstLink.text()).toBe('First');
    expect(secondLink.length).toBeGreaterThan(0);
    expect(secondLink.text()).toBe('Second');

    expect(html).toContain('Desc1');
    expect(html).toContain('Desc2');
    expect(html).toContain(posts[0].data.publishDate.toDateString());
    expect(html).toContain(posts[1].data.publishDate.toDateString());
  });
});
