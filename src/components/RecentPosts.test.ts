import { describe, it, expect, vi } from 'vitest';
import { renderAstro } from '~/test-utils';
import { load } from 'cheerio';

const postListStub = vi.fn((_result, _props: { posts: unknown[] }) => '');
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
    const html = await renderAstro(
      'src/components/RecentPosts.astro',
      { posts },
      (code) =>
        code
          .replace(/interface Props\s*{[^}]+}\n/, '')
          .replace(/Astro\.props as Props/, 'Astro.props')
    );
    const $ = load(html);
    expect($('h2').text()).toBe('Recent Posts');
    expect(postListStub).toHaveBeenCalledOnce();
    expect(postListStub.mock.calls[0][1].posts).toEqual(posts);
  });
});
