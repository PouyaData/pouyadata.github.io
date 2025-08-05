import { describe, it, expect } from 'vitest';
import { renderAstro } from '~/test-utils';
import { load } from 'cheerio';

describe('Nav', () => {
  it('renders navigation links for Home and Blog', async () => {
    const html = await renderAstro('src/components/Nav.astro');
    const $ = load(html);
    const homeLink = $('a[href="/"]');
    const blogLink = $('a[href="/blog"]');
    expect(homeLink).toHaveLength(1);
    expect(homeLink.text()).toBe('Home');
    expect(blogLink).toHaveLength(1);
    expect(blogLink.text()).toBe('Blog');
  });
});
