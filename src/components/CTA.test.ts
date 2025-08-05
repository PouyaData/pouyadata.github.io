import { describe, it, expect } from 'vitest';
import { render } from '@astrojs/test-utils';
import { load } from 'cheerio';
import CTA from './CTA.astro';

describe('CTA', () => {
  it('renders heading, description and contact link', async () => {
    const { html } = await render(CTA);
    const $ = load(html);
    expect($('h2').text()).toBe('Ready to Transform Your Organization?');
    expect($('p').text()).toContain(
      "Let's discuss how my experience can specifically benefit your organization"
    );
    const link = $('a.cta-button');
    expect(link.text()).toBe('Start the Conversation');
    expect(link.attr('href')).toBe('mailto:pouyadatallc@gmail.com');
  });
});
