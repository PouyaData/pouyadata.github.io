import { describe, it, expect } from 'vitest';
import { sortPostsByDateDesc } from '~/utils/post';

describe('blog sorting', () => {
  it('orders posts by publish date descending', () => {
    const posts = [
      { slug: 'old', data: { publishDate: new Date('2023-01-01') } },
      { slug: 'new', data: { publishDate: new Date('2024-01-01') } },
    ];
    expect(sortPostsByDateDesc(posts).map((p) => p.slug)).toEqual([
      'new',
      'old',
    ]);
  });
});
