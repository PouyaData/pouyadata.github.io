import { describe, it, expect } from 'vitest';
import { render } from '../test-utils';
import { load } from 'cheerio';
import CTA from './CTA.astro';

describe('CTA', () => {
  it('offers an email contact and the capability statement download', async () => {
    const { html } = await render(CTA);
    const $ = load(html);

    expect($('h2').text()).toBe('Ready to move without the translation layer?');
    expect($('a.cta-button').attr('href')).toBe(
      'mailto:pouyadatallc@gmail.com'
    );
    const pdf = $('a[href="/pouya-data-capabilities.pdf"]');
    expect(pdf).toHaveLength(1);
    expect(pdf.attr('download')).toBeDefined();
  });
});
