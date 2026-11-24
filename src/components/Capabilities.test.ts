import { describe, it, expect } from 'vitest';
import { render } from '../test-utils';
import { load } from 'cheerio';
import Capabilities from './Capabilities.astro';
import { capabilities } from '~/data/profile';

describe('Capabilities', () => {
  it('renders a card per capability, in profile order', async () => {
    const { html } = await render(Capabilities);
    const $ = load(html);

    const headings = $('.card h3')
      .map((_i, el) => $(el).text())
      .get();
    expect(headings).toEqual(capabilities.map((c) => c.title));
  });

  it('lists every offering under its capability', async () => {
    const { html } = await render(Capabilities);
    const $ = load(html);

    const firstCardOfferings = $('.card')
      .first()
      .find('.offerings li')
      .map((_i, el) => $(el).text())
      .get();
    expect(firstCardOfferings).toEqual([...capabilities[0].offerings]);
  });
});
