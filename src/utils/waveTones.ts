import type { WaveOptions } from './waves';

/** Stroke colors for the generated wave backgrounds, keyed by URL slug. */
export const waveTones = {
  ink: '#2b2f31',
  sage: '#8fbfb2',
  paper: '#ffffff',
} as const;

export type WaveTone = keyof typeof waveTones;

export const ribbon: WaveOptions = {
  lines: 46,
  width: 1600,
  height: 520,
  samples: 28,
  amplitude: 190,
  cycles: 1.25,
  twist: 0.35,
};
