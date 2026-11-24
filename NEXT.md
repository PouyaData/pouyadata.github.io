# Unreleased

## 2026-11-24 — Modernized site and downloadable capability statement

- Redesigned the site from the Pouya Data logo: sage and charcoal on paper,
  self-hosted Montserrat / IBM Plex type (no Google Fonts requests), and a generated line-ribbon wave motif.
- Added `/past-performance/` and `/capabilities/`; the capability statement is
  built into `pouya-data-capabilities.pdf` at build time (Playwright) and the
  build fails if it stops fitting two Letter pages.
- Centralized capabilities and past performance in `src/data/profile.ts`,
  distilled from the principal's CV versions; consulting clients are described
  by sector.
- Post dates now render in UTC, fixing an off-by-one day in western time zones.
