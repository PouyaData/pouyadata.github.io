import { describe, it, expect } from 'vitest';
import { render } from '../test-utils';
import { load } from 'cheerio';
import EngagementCard from './EngagementCard.astro';
import type { Engagement } from '~/data/profile';

const engagement: Engagement = {
  client: 'Test client',
  sector: 'Healthcare',
  title: 'Test engagement',
  challenge: 'The challenge',
  delivered: 'What we delivered',
  outcome: 'The outcome',
  stack: ['Azure', 'dbt'],
};

describe('EngagementCard', () => {
  it('renders challenge, delivery, outcome, and stack', async () => {
    const { html } = await render(EngagementCard, { engagement });
    const $ = load(html);

    expect($('h3').text()).toBe('Test engagement');
    expect(
      $('dd')
        .map((_i, el) => $(el).text())
        .get()
    ).toEqual(['The challenge', 'What we delivered']);
    expect($('.outcome').text()).toBe('The outcome');
    expect(
      $('.stack li')
        .map((_i, el) => $(el).text())
        .get()
    ).toEqual(['Azure', 'dbt']);
  });

  it('uses the requested heading level when nested deeper', async () => {
    const { html } = await render(EngagementCard, {
      engagement,
      headingLevel: 'h4',
    });
    const $ = load(html);

    expect($('h4').text()).toBe('Test engagement');
    expect($('h3')).toHaveLength(0);
  });
});
