import { describe, it, expect } from 'vitest';
import { render } from '../test-utils';
import { load } from 'cheerio';
import CapabilityStatement from './CapabilityStatement.astro';
import { capabilities, company, engagements } from '~/data/profile';

const props = {
  updated: new Date('2026-11-24T12:00:00Z'),
  website: 'pouyadata.github.io',
};

describe('CapabilityStatement', () => {
  it('renders two sheets with page-numbered footers', async () => {
    const { html } = await render(CapabilityStatement, props);
    const $ = load(html);

    expect($('.sheet')).toHaveLength(2);
    expect($('.sheet-foot').last().text()).toContain('2 / 2');
  });

  it('shows the update month from the build date', async () => {
    const { html } = await render(CapabilityStatement, props);
    const $ = load(html);

    expect($('.band-right p').last().text()).toBe('Updated November 2026');
  });

  it('includes every core competency and past-performance engagement', async () => {
    const { html } = await render(CapabilityStatement, props);
    const $ = load(html);

    const competencies = $('.competencies h3')
      .map((_i, el) => $(el).text())
      .get();
    expect(competencies).toEqual(capabilities.map((c) => c.title));
    const pastPerformance = $('.sheet').eq(1).find('.perf').first();
    expect(pastPerformance.find('li')).toHaveLength(engagements.length);
  });

  it('carries company contact data for contracting teams', async () => {
    const { html } = await render(CapabilityStatement, props);
    const $ = load(html);
    const contact = $('.contact').text();

    expect(contact).toContain(company.principal.name);
    expect(contact).toContain(company.email);
    expect(contact).toContain('linkedin.com/in/pouya-data/');
    expect(contact).toContain(props.website);
  });
});
