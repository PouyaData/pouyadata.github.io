import { readFile, writeFile, unlink } from 'node:fs/promises';
import { transform } from '@astrojs/compiler';
import * as runtime from 'astro/runtime/server/index.js';
import * as path from 'node:path';
import { randomUUID } from 'node:crypto';
import { pathToFileURL } from 'node:url';

function createRenderContext() {
  return {
    // Tracks head rendering state
    _metadata: { hasRenderedHead: false, extraHead: [] },
    // Collected <style> tags
    styles: new Set(),
    // Collected <script> tags
    scripts: new Set(),
    // Collected <link> tags
    links: new Set(),
    // Builds the Astro global used by components
    createAstro: (
      Astro: Record<string, unknown>,
      props: unknown,
      slots: unknown
    ) => ({
      ...Astro,
      props,
      slots,
    }),
    // Resolves specifiers to final paths
    resolve: async (s: string) => s,
    // Mock response object
    response: {},
    // Mock request object
    request: {},
    // Registered server renderers
    renderers: [],
    // Client-only directive registry
    clientDirectives: new Map(),
    // Disable HTML compression
    compressHTML: false,
    // Indicates partial rendering mode
    partial: false,
    // Current request pathname
    pathname: '',
    // Cookie storage (unused in tests)
    cookies: undefined,
    // Maps server island component names
    serverIslandNameMap: new Map(),
    // Trailing slash behavior
    trailingSlash: 'ignore',
    // Unique key for the render
    key: Promise.resolve({}),
    // Destination for CSP meta tags
    cspDestination: 'head',
    // Whether to inject CSP meta tags
    shouldInjectCspMetaTags: false,
    // Algorithm used for CSP hashes
    cspAlgorithm: '',
    // Collected script hashes for CSP
    scriptHashes: new Set(),
    // External script resources
    scriptResources: new Set(),
    // Collected style hashes for CSP
    styleHashes: new Set(),
    // External style resources
    styleResources: new Set(),
    // User-defined directives
    directives: new Map(),
    // Flag for strict-dynamic CSP
    isStrictDynamic: false,
    // Base path for URLs
    base: '/',
    // Optional user asset base
    userAssetsBase: undefined,
    // Abort rendering early
    cancelled: false,
    // Metadata about rendered components
    componentMetadata: new Map(),
    // Inlined scripts keyed by id
    inlinedScripts: new Map(),
  };
}

export async function renderAstro(
  file: string,
  props: Record<string, unknown> = {},
  transformCode?: (code: string) => string
): Promise<ReturnType<typeof createRenderContext> & { html: string }> {
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
  const mod = await import(pathToFileURL(tempPath).href);
  await unlink(tempPath).catch(() => {});
  const Component = mod.default;
  const result = createRenderContext() as ReturnType<
    typeof createRenderContext
  > & { html: string };
  const html = (await (
    runtime.renderToString as unknown as (
      result: unknown,
      component: unknown,
      props: unknown,
      slots: unknown
    ) => Promise<string>
  )(result, Component, props, {})) as string;
  result.html = html;
  return result;
}
