import { describe, it, expect } from 'vitest';

describe('Landing', () => {
  it('orders posts by publish date descending and selects top three', () => {
    const posts = [
      { slug: 'old', data: { publishDate: new Date('2023-01-01') } },
      { slug: 'new', data: { publishDate: new Date('2024-01-01') } },
      { slug: 'mid', data: { publishDate: new Date('2023-06-01') } },
      { slug: 'older', data: { publishDate: new Date('2022-01-01') } },
    ];
    posts.sort(
      (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
    );
    const selected = posts.slice(0, 3).map((p) => p.slug);
    expect(selected).toEqual(['new', 'mid', 'old']);
  });
});
