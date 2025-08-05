import { readFile, writeFile, unlink } from 'node:fs/promises';
import * as fs from 'fs';
import { transform } from '@astrojs/compiler';
import * as runtime from 'astro/runtime/server/index.js';
import * as path from 'node:path';
import { randomUUID } from 'node:crypto';
import { pathToFileURL } from 'node:url';

export async function renderAstro(
  file: string,
  props: Record<string, any> = {},
  transformCode?: (code: string) => string,
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
  const mod = await import(pathToFileURL(tempPath).href);
  await unlink(tempPath).catch(() => {});
  const Component = mod.default;
  const result = {
    _metadata: { hasRenderedHead: false, extraHead: [] },
    styles: new Set(),
    scripts: new Set(),
    links: new Set(),
    createAstro: (Astro: any, props: any, slots: any) => ({ ...Astro, props, slots }),
    resolve: async (s: string) => s,
    response: {},
    request: {},
    renderers: [],
    clientDirectives: new Map(),
    compressHTML: false,
    partial: false,
    pathname: '',
    cookies: undefined,
    serverIslandNameMap: new Map(),
    trailingSlash: 'ignore',
    key: Promise.resolve({}),
    cspDestination: 'head',
    shouldInjectCspMetaTags: false,
    cspAlgorithm: '',
    scriptHashes: new Set(),
    scriptResources: new Set(),
    styleHashes: new Set(),
    styleResources: new Set(),
    directives: new Map(),
    isStrictDynamic: false,
    base: '/',
    userAssetsBase: undefined,
    cancelled: false,
    componentMetadata: new Map(),
    inlinedScripts: new Map(),
  } as any;
    const html = (await runtime.renderToString(result, Component, props, {})) as string;
    return html;
  }
