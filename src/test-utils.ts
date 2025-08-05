import { readFile, writeFile, unlink } from 'node:fs/promises';
import { transform } from '@astrojs/compiler';
import * as runtime from 'astro/runtime/server/index.js';
import * as path from 'node:path';
import { randomUUID } from 'node:crypto';
import { pathToFileURL } from 'node:url';

export function createRenderContext() {
  return {
    // Track metadata for head rendering
    _metadata: { hasRenderedHead: false, extraHead: [] },
    // Collected inline styles
    styles: new Set(),
    // Collected inline scripts
    scripts: new Set(),
    // Collected link elements
    links: new Set(),
    // Helper to create the Astro global
    createAstro: (
      Astro: Record<string, unknown>,
      props: unknown,
      slots: unknown
    ) => ({
      ...Astro,
      props,
      slots,
    }),
    // Resolve specifiers to URLs
    resolve: async (s: string) => s,
    // Mocked Response object
    response: {},
    // Mocked Request object
    request: {},
    // SSR renderers
    renderers: [],
    // Registered client directives
    clientDirectives: new Map(),
    // Whether to compress HTML output
    compressHTML: false,
    // Partial rendering flag
    partial: false,
    // Current request pathname
    pathname: '',
    // Cookie storage
    cookies: undefined,
    // Server island mapping
    serverIslandNameMap: new Map(),
    // Trailing slash strategy
    trailingSlash: 'ignore',
    // Unique render key
    key: Promise.resolve({}),
    // Where to inject CSP tags
    cspDestination: 'head',
    // Whether to inject CSP meta tags
    shouldInjectCspMetaTags: false,
    // CSP hashing algorithm
    cspAlgorithm: '',
    // Hashes for inline scripts
    scriptHashes: new Set(),
    // External script resources
    scriptResources: new Set(),
    // Hashes for inline styles
    styleHashes: new Set(),
    // External style resources
    styleResources: new Set(),
    // CSP directives
    directives: new Map(),
    // Use strict-dynamic CSP
    isStrictDynamic: false,
    // Base URL
    base: '/',
    // Base path for user assets
    userAssetsBase: undefined,
    // Cancellation flag
    cancelled: false,
    // Component metadata
    componentMetadata: new Map(),
    // Inlined script contents
    inlinedScripts: new Map(),
  };
}

export async function renderAstro(
  file: string,
  props: Record<string, unknown> = {},
  transformCode?: (code: string) => string
): Promise<string> {
  const source = await readFile(file, 'utf-8');
  let { code } = await transform(source, {
    filename: file,
    internalURL: 'astro/runtime/server/index.js',
  });
  code = code
    .replace(/import type[^;]+;\n?/g, '')
    .replace(/ as {[^}]+};/, ';')
    .replace(/,\s*createMetadata as \$\$createMetadata/, '')
    .replace(/export const \$\$metadata[^;]+;\n/, '');
  if (transformCode) code = transformCode(code);
  const tempPath = path.join(path.dirname(file), `.tmp-${randomUUID()}.mjs`);
  await writeFile(tempPath, code, 'utf-8');
  let mod;
  try {
    mod = await import(pathToFileURL(tempPath).href);
  } finally {
    await unlink(tempPath).catch(() => {});
  }
  const Component = mod.default;
  const result = createRenderContext();
  const html = (await (
    runtime.renderToString as unknown as (
      result: unknown,
      component: unknown,
      props: unknown,
      slots: unknown
    ) => Promise<string>
  )(result, Component, props, {})) as string;
  return html;
}
