import { describe, it, expect } from 'vitest';
import { render } from '../test-utils';
import { load } from 'cheerio';
import Technologies from './Technologies.astro';
import { technologies } from '~/data/profile';

describe('Technologies', () => {
  it('renders one row per technology group from the profile', async () => {
    const { html } = await render(Technologies);
    const $ = load(html);

    const groups = $('dt')
      .map((_i, el) => $(el).text())
      .get();
    expect(groups).toEqual(technologies.map((t) => t.group));
  });
});
