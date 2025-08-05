import { describe, it, expect, vi } from 'vitest';
import { renderAstro } from '~/test-utils';
import { load } from 'cheerio';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const postListStub = vi.fn((result: unknown, props: { posts: Array<{ slug: string; data: { title: string; description: string; publishDate: Date } }> }) => {
  // Parameters are used implicitly by the mock tracking
  return '';
});
(postListStub as unknown as { isAstroComponentFactory: boolean }).isAstroComponentFactory = true;
vi.mock('~/components/PostList.astro', () => ({ default: postListStub }));

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
      const html = await renderAstro('src/components/RecentPosts.astro', { posts });
    const $ = load(html);
    expect($('h2').text()).toBe('Recent Posts');
    expect(postListStub).toHaveBeenCalledOnce();
    const mockCall = postListStub.mock.calls[0];
    expect(mockCall).toBeDefined();
    expect(mockCall[1]).toBeDefined();
    expect(mockCall[1].posts).toEqual(posts);
  });
});
