import { describe, it, expect } from 'vitest';
import { renderAstro } from '~/test-utils';
import { load } from 'cheerio';

describe('Technologies', () => {
  it('renders technology categories and heading', async () => {
    const html = await renderAstro('src/components/Technologies.astro');
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
