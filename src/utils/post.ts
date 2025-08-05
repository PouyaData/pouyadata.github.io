import type { CollectionEntry } from 'astro:content';

export function sortPostsByDateDesc(
  posts: CollectionEntry<'blog'>[]
): CollectionEntry<'blog'>[] {
  return posts.sort(
    (a: CollectionEntry<'blog'>, b: CollectionEntry<'blog'>) =>
      b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
}

