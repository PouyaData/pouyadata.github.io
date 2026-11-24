import { describe, it, expect } from 'vitest';
import { render } from '../test-utils';
import { load } from 'cheerio';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Nav from './Nav.astro';

describe('Nav', () => {
  it('links the wordmark home and lists the primary pages', async () => {
    const { html } = await render(Nav);
    const $ = load(html);

    expect($('a[href="/"]').attr('aria-label')).toBe('Pouya Data home');
    const links = $('nav a')
      .map((_i, el) => [[$(el).attr('href'), $(el).text().trim()]])
      .get();
    expect(links).toEqual([
      ['/capabilities/', 'Capabilities'],
      ['/past-performance/', 'Past Performance'],
      ['/blog', 'Blog'],
    ]);
  });
});

describe('Nav current page', () => {
  async function currentLinks(pathname: string) {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Nav, {
      request: new Request(`https://pouyadata.github.io${pathname}`),
    });
    const $ = load(html);
    return $('nav a[aria-current="page"]')
      .map((_i, el) => $(el).attr('href'))
      .get();
  }

  it('marks the section of a nested page as current', async () => {
    expect(await currentLinks('/blog/some-post/')).toEqual(['/blog']);
  });

  it('marks nothing on the home page or a path that merely shares a prefix', async () => {
    expect(await currentLinks('/')).toEqual([]);
    expect(await currentLinks('/c')).toEqual([]);
  });
});
