import { describe, it, expect, vi } from 'vitest';
import { renderAstro } from '~/test-utils';

const posts = vi.hoisted(() => [
  {
    slug: 'old',
    data: {
      title: 'Old',
      description: 'Desc',
      publishDate: new Date('2023-01-01'),
    },
  },
  {
    slug: 'new',
    data: {
      title: 'New',
      description: 'Desc',
      publishDate: new Date('2024-01-01'),
    },
  },
  {
    slug: 'mid',
    data: {
      title: 'Mid',
      description: 'Desc',
      publishDate: new Date('2023-06-01'),
    },
  },
  {
    slug: 'older',
    data: {
      title: 'Older',
      description: 'Desc',
      publishDate: new Date('2022-01-01'),
    },
  },
]);

vi.mock('astro:content', () => ({
  getCollection: async () => posts,
}));
vi.mock('~/components/Header.astro', () => {
  const stub = () => '';
  (
    stub as unknown as { isAstroComponentFactory: boolean }
  ).isAstroComponentFactory = true;
  return { default: stub };
});
vi.mock('~/components/Capabilities.astro', () => {
  const stub = () => '';
  (
    stub as unknown as { isAstroComponentFactory: boolean }
  ).isAstroComponentFactory = true;
  return { default: stub };
});
vi.mock('~/components/Technologies.astro', () => {
  const stub = () => '';
  (
    stub as unknown as { isAstroComponentFactory: boolean }
  ).isAstroComponentFactory = true;
  return { default: stub };
});
vi.mock('~/components/CTA.astro', () => {
  const stub = () => '';
  (
    stub as unknown as { isAstroComponentFactory: boolean }
  ).isAstroComponentFactory = true;
  return { default: stub };
});
vi.mock('~/components/RecentPosts.astro', () => {
  const stub = (
    _result: unknown,
    props: { posts: Array<{ slug: string; data: { title: string } }> }
  ) =>
    props.posts
      .map((p) => `<a href="/blog/${p.slug}/">${p.data.title}</a>`)
      .join('');
  (
    stub as unknown as { isAstroComponentFactory: boolean }
  ).isAstroComponentFactory = true;
  return { default: stub };
});

describe('Landing', () => {
  it('renders only the three most recent posts', async () => {
    const html = await renderAstro('src/components/Landing.astro');
    expect(html).toContain('/blog/new/');
    expect(html).toContain('/blog/mid/');
    expect(html).toContain('/blog/old/');
    expect(html).not.toContain('/blog/older/');
  });
});
