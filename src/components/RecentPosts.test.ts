import { describe, it, expect } from 'vitest';
import { render } from '../test-utils';
import { load } from 'cheerio';
import RecentPosts from './RecentPosts.astro';

describe('RecentPosts', () => {
  it('renders heading and passes posts to PostList', async () => {
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
    const { html } = await render(RecentPosts, { posts });
    const $ = load(html);
    
    // Check the section heading specifically
    const sectionHeading = $('section h2').first().text();
    expect(sectionHeading).toBe('Recent Posts');
    
    // Check that the posts are rendered in the PostList
    const links = $('a[href^="/blog/"]');
    expect(links).toHaveLength(2);
    expect(links.eq(0).attr('href')).toBe('/blog/first/');
    expect(links.eq(0).text()).toBe('First');
    expect(links.eq(1).attr('href')).toBe('/blog/second/');
    expect(links.eq(1).text()).toBe('Second');
  });
});
