import { TextEncoder, TextDecoder } from 'node:util';

// Fix for jsdom environment breaking esbuild
// See: https://github.com/jsdom/jsdom/issues/2524
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder;
