#!/usr/bin/env node
/**
 * Renders the built /capabilities/ page to dist/pouya-data-capabilities.pdf.
 * Run after `astro build`. Fails loudly if the brand fonts did not load, if
 * any sheet's content overflows, or if the statement is not exactly two Letter
 * pages, so content edits cannot silently break the PDF.
 *
 * Assumes the site is built for the domain root (a user/org Pages site).
 */
import { createServer } from 'node:http';
import { readFile, stat, writeFile } from 'node:fs/promises';
import { extname, join, normalize, resolve, sep } from 'node:path';
import { chromium } from 'playwright';

const DIST = resolve(process.argv[2] ?? 'dist');
const OUTPUT = join(DIST, 'pouya-data-capabilities.pdf');
const EXPECTED_PAGES = 2;
const REQUIRED_FONT_FAMILIES = ['Montserrat', 'IBM Plex Sans', 'IBM Plex Mono'];

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const isFile = (path) =>
  stat(path).then(
    (info) => info.isFile(),
    () => false
  );

async function resolveFile(urlPath) {
  const safePath = normalize(decodeURIComponent(urlPath)).replace(
    /^(\.\.[/\\])+/,
    ''
  );
  const candidate = join(DIST, safePath);
  if (candidate !== DIST && !candidate.startsWith(DIST + sep)) return null;
  const fallbacks = candidate === DIST ? [] : [`${candidate}.html`];
  for (const path of [candidate, join(candidate, 'index.html'), ...fallbacks]) {
    if (await isFile(path)) return path;
  }
  return null;
}

async function handle(req, res) {
  try {
    const file = await resolveFile(new URL(req.url, 'http://x').pathname);
    if (!file) {
      res.writeHead(404).end();
      return;
    }
    const body = await readFile(file);
    res.writeHead(200, {
      'Content-Type': contentTypes[extname(file)] ?? 'application/octet-stream',
    });
    res.end(body);
  } catch (error) {
    res.writeHead(error instanceof URIError ? 400 : 500).end();
  }
}

function serveDist() {
  const server = createServer(handle);
  return new Promise((done) =>
    server.listen(0, '127.0.0.1', () => done(server))
  );
}

function countPages(pdf) {
  return (pdf.toString('latin1').match(/\/Type\s*\/Page(?!s)/g) ?? []).length;
}

const server = await serveDist();
const browser = await chromium.launch();
try {
  const { port } = server.address();
  const page = await browser.newPage();
  const response = await page.goto(`http://127.0.0.1:${port}/capabilities/`, {
    waitUntil: 'networkidle',
  });
  if (!response?.ok()) {
    throw new Error(`/capabilities/ returned ${response?.status()}`);
  }
  await page.evaluate(() => document.fonts.ready);
  const missingFonts = await page.evaluate((families) => {
    const loaded = new Set(
      [...document.fonts]
        .filter((face) => face.status === 'loaded')
        .map((face) => face.family.replace(/["']/g, ''))
    );
    return families.filter((family) => !loaded.has(family));
  }, REQUIRED_FONT_FAMILIES);
  if (missingFonts.length > 0) {
    throw new Error(`Brand fonts failed to load: ${missingFonts.join(', ')}`);
  }
  await page.emulateMedia({ media: 'print' });

  const clipped = await page.$$eval('.sheet', (sheets) =>
    sheets
      .map((sheet, i) => ({
        page: i + 1,
        down: sheet.scrollHeight - sheet.clientHeight,
        across: sheet.scrollWidth - sheet.clientWidth,
      }))
      .filter((sheet) => sheet.down > 1 || sheet.across > 1)
  );
  if (clipped.length > 0) {
    const detail = clipped
      .map((c) => `page ${c.page} by ${c.down}px down, ${c.across}px across`)
      .join(', ');
    throw new Error(
      `Capability statement content overflows its sheet (${detail}). Trim content in src/data/profile.ts.`
    );
  }

  const pdf = await page.pdf({
    printBackground: true,
    preferCSSPageSize: true,
  });
  const pages = countPages(pdf);
  if (pages !== EXPECTED_PAGES) {
    throw new Error(
      `Capability statement rendered ${pages} pages; expected ${EXPECTED_PAGES}. Trim content in src/data/profile.ts.`
    );
  }
  await writeFile(OUTPUT, pdf);
  console.log(`Wrote ${OUTPUT} (${pages} pages, ${pdf.length} bytes)`);
} finally {
  await browser.close();
  server.close();
}
