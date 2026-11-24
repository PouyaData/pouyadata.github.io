import { describe, it, expect } from 'vitest';
import { buildWavePaths, buildWaveSvg, type WaveOptions } from './waves';

const options: WaveOptions = {
  lines: 12,
  width: 1200,
  height: 400,
  samples: 16,
  amplitude: 120,
  cycles: 1.5,
  twist: 0.4,
};

function coordinates(path: string): number[] {
  return (path.match(/-?\d+(\.\d+)?/g) ?? []).map(Number);
}

describe('buildWavePaths', () => {
  it('draws one path per requested line, each spanning the full width', () => {
    const paths = buildWavePaths(options);

    expect(paths).toHaveLength(options.lines);
    for (const path of paths) {
      const xs = coordinates(path).filter((_v, i) => i % 2 === 0);
      expect(path.startsWith('M0,')).toBe(true);
      expect(Math.max(...xs)).toBe(options.width);
    }
  });

  it('keeps every on-curve point inside the vertical bounds', () => {
    const paths = buildWavePaths(options);

    for (const path of paths) {
      const ys = coordinates(path).filter((_v, i) => i % 2 === 1);
      expect(Math.min(...ys)).toBeGreaterThanOrEqual(-options.height * 0.1);
      expect(Math.max(...ys)).toBeLessThanOrEqual(options.height * 1.1);
    }
  });

  it('is deterministic so builds are reproducible', () => {
    expect(buildWavePaths(options)).toEqual(buildWavePaths(options));
  });

  it('rejects fewer than two lines or samples', () => {
    expect(() => buildWavePaths({ ...options, lines: 1 })).toThrow(/lines/);
    expect(() => buildWavePaths({ ...options, samples: 1 })).toThrow(/samples/);
  });
});

describe('buildWaveSvg', () => {
  it('wraps the paths in a scalable svg with the requested stroke', () => {
    const svg = buildWaveSvg({ ...options, stroke: '#2b2f31' });

    expect(svg).toContain(`viewBox="0 0 ${options.width} ${options.height}"`);
    expect(svg).toContain('stroke="#2b2f31"');
    expect(svg.match(/<path /g)).toHaveLength(options.lines);
  });
});
