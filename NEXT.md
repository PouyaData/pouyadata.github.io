# Unreleased

## 2026-11-24 — Build pull requests and diagnose PDF page-count failures

- The Pages workflow now builds pull requests (including the PDF) without
  deploying them, so build breakages surface before merge.
- When the capability statement renders the wrong number of pages, the PDF
  build saves the PDF and print-layout measurements to `pdf-debug/`, which CI
  uploads as the `pdf-diagnostics` artifact.

## 2026-11-24 — Clear CI build warnings

- Pages workflow: move to the Node 24 action majors (checkout v7, setup-node
  v7, configure-pages v6, upload-pages-artifact v5, deploy-pages v5) and
  build on Node 24 LTS instead of end-of-life Node 20.
- Install only Chromium's headless shell for the PDF step.
- Upgrade ESLint 8 (unsupported) to ESLint 10 with a flat config and the
  unified `typescript-eslint` package; lint now also covers `scripts/`.

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
