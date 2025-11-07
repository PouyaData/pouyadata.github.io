
import { describe, it, expect } from 'vitest';
import { render } from '../test-utils';
import { load } from 'cheerio';
import Nav from './Nav.astro';

describe('Nav', () => {
  it('renders navigation links for Home and Blog', async () => {
    const { html } = await render(Nav);
    const $ = load(html);
    const homeLink = $('a[href="/"]');
    const blogLink = $('a[href="/blog"]');
    expect(homeLink).toHaveLength(1);
    expect(homeLink.text()).toBe('Home');
    expect(blogLink).toHaveLength(1);
    expect(blogLink.text()).toBe('Blog');
  });
});
