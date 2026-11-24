/**
 * Generates the flowing line-ribbon motif from the Pouya Data logo:
 * many thin sine curves that share a central path and twist through it.
 */
export interface WaveOptions {
  lines: number;
  width: number;
  height: number;
  samples: number;
  amplitude: number;
  cycles: number;
  twist: number;
}

export interface WaveSvgOptions extends WaveOptions {
  stroke: string;
  strokeWidth?: number;
  opacity?: number;
}

type Point = readonly [number, number];

const round = (value: number) => Math.round(value * 10) / 10;

function linePoints(options: WaveOptions, lineIndex: number): Point[] {
  const { lines, width, height, samples, amplitude, cycles, twist } = options;
  const spread = (2 * lineIndex) / (lines - 1) - 1;
  const midline = height / 2;

  return Array.from({ length: samples }, (_v, j) => {
    const u = j / (samples - 1);
    const phase = 2 * Math.PI * cycles * u;
    const spine = 0.55 * amplitude * Math.sin(phase + 0.6);
    const ribbon = 0.45 * amplitude * spread * Math.cos(phase * 0.5 + twist);
    return [round(u * width), round(midline + spine + ribbon)] as const;
  });
}

// Catmull-Rom to cubic Bézier keeps curves smooth with few samples.
function smoothPath(points: Point[]): string {
  const at = (i: number) => points[Math.min(Math.max(i, 0), points.length - 1)];
  const segments = points.slice(1).map((end, k) => {
    const [p0, p1, p3] = [at(k - 1), at(k), at(k + 2)];
    const c1 = [p1[0] + (end[0] - p0[0]) / 6, p1[1] + (end[1] - p0[1]) / 6];
    const c2 = [end[0] - (p3[0] - p1[0]) / 6, end[1] - (p3[1] - p1[1]) / 6];
    return `C${round(c1[0])},${round(c1[1])} ${round(c2[0])},${round(c2[1])} ${end[0]},${end[1]}`;
  });
  return `M${points[0][0]},${points[0][1]} ${segments.join(' ')}`;
}

export function buildWavePaths(options: WaveOptions): string[] {
  if (options.lines < 2) throw new RangeError('lines must be at least 2');
  if (options.samples < 2) throw new RangeError('samples must be at least 2');

  return Array.from({ length: options.lines }, (_v, i) =>
    smoothPath(linePoints(options, i))
  );
}

export function buildWaveSvg(options: WaveSvgOptions): string {
  const { width, height, stroke, strokeWidth = 1, opacity = 1 } = options;
  const paths = buildWavePaths(options)
    .map((d) => `<path d="${d}" vector-effect="non-scaling-stroke"/>`)
    .join('');

  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" ` +
    `preserveAspectRatio="none" fill="none" stroke="${stroke}" ` +
    `stroke-width="${strokeWidth}" stroke-opacity="${opacity}">${paths}</svg>`
  );
}
