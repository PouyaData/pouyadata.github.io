import { describe, it, expect, vi } from 'vitest';
import { renderAstro } from '~/test-utils';

const posts = vi.hoisted(() => [
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
]);

const postListStub = vi.hoisted(() => vi.fn((..._args: unknown[]) => ''));

vi.mock('~/components/PostList.astro', () => {
  (postListStub as unknown as { isAstroComponentFactory: boolean }).isAstroComponentFactory = true;
  return { default: postListStub };
});

describe('RecentPosts', () => {
  it('renders heading and passes posts to PostList', async () => {
    const html = await renderAstro(
      'src/components/RecentPosts.astro',
      { posts },
      (code) =>
        code
          .replace(/interface Props[^}]+}\n/, '')
          .replace(/ as Props;/, ';')
    );
    expect(html).toContain('<h2>Recent Posts</h2>');
    expect(postListStub).toHaveBeenCalledOnce();
    expect(postListStub.mock.calls[0][1]).toEqual({ posts });
  });
});
