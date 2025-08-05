import { describe, it, expect } from 'vitest';
import { render } from '@astrojs/test-utils';
import { load } from 'cheerio';
import Technologies from './Technologies.astro';

describe('Technologies', () => {
  it('renders technology categories and heading', async () => {
    const { html } = await render(Technologies);
    const $ = load(html);
    expect($('.tech-heading').text()).toBe('Technology Expertise');
    const categories = $('h4')
      .map((_i, el) => $(el).text())
      .get();
    expect(categories).toEqual([
      'AI & Machine Learning',
      'Data Engineering',
      'Cloud & Infrastructure',
      'Custom Solutions',
    ]);
  });
});
