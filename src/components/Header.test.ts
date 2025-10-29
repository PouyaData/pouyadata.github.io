import { describe, it, expect } from 'vitest';
import { render } from '../test-utils';
import { load } from 'cheerio';
import Header from './Header.astro';

describe('Header', () => {
  it('renders role titles and contact info', async () => {
    const { html } = await render(Header);
    const $ = load(html);
    const roles = ['Chief Technology Officer', 'Chief Data & AI Officer'];
    roles.forEach((role) => {
      expect($('.role-title').text()).toContain(role);
    });
    const contacts = [
      { site: 'tequity.app', email: 'pouya@tequity.app' },
      { site: 'kenniss.com', email: 'pouya@kenniss.com' },
      { site: 'cervais.com', email: 'pouya@cervais.com' },
      { site: 'bookerdimaio.com', email: 'pouya.byousefi@bookerdimaio.com' },
      { site: 'pouyadata.com', email: 'pouyadatallc@gmail.com' },
      {
        site: 'humanrightsconnected.org',
        email: 'pouya@humanrightsconnected.org',
      },
    ];
    contacts.forEach(({ site, email }) => {
      expect($(`a[href="https://${site}"]`).text()).toBe(site);
      expect($(`a[href="mailto:${email}"]`).text()).toBe(email);
    });
  });
});
