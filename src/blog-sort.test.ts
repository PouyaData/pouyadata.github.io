import { describe, it, expect } from 'vitest';

describe('blog sorting', () => {
  it('orders posts by publish date descending', () => {
    const posts = [
      { slug: 'old', data: { publishDate: new Date('2023-01-01') } },
      { slug: 'new', data: { publishDate: new Date('2024-01-01') } },
    ];
    posts.sort(
      (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
    );
    expect(posts.map((p) => p.slug)).toEqual(['new', 'old']);
  });
});
