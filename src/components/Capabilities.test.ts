import { describe, it, expect } from 'vitest';
import { render } from '../test-utils';
import { load } from 'cheerio';
import Capabilities from './Capabilities.astro';

describe('Capabilities', () => {
  it('renders capability sections with headings', async () => {
    const { html } = await render(Capabilities);
    const $ = load(html);
    
    expect($('h2').text()).toBe('Core Capabilities');
    
    const headings = $('h3')
      .map((_i, el) => $(el).text())
      .get();
    
    expect(headings).toEqual([
      'Training & Education',
      'Data & AI Strategy Consulting',
      'AI Transformation',
      'Automation & Operational Excellence',
      'Product Development & Platform Engineering',
      'DoD & Government Expertise',
    ]);
  });

  it('renders all capability cards', async () => {
    const { html } = await render(Capabilities);
    const $ = load(html);
    
    expect($('.capability-card')).toHaveLength(6);
    expect($('.capability-icon')).toHaveLength(6);
  });

  it('has proper structure with section and grid', async () => {
    const { html } = await render(Capabilities);
    const $ = load(html);
    
    expect($('.section')).toHaveLength(1);
    expect($('.capabilities-grid')).toHaveLength(1);
  });
});
