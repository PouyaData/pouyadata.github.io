import { describe, it, expect } from 'vitest';
import { renderAstro } from '~/test-utils';
import { load } from 'cheerio';

describe('Nav', () => {
  it('renders navigation links', async () => {
    const html = await renderAstro('src/components/Nav.astro');
    const $ = load(html);
    expect($('nav.site-nav a[href="/"]').text()).toBe('Home');
    expect($('nav.site-nav a[href="/blog"]').text()).toBe('Blog');
  });
});
