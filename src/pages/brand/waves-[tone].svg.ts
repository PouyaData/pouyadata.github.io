import type { APIRoute, GetStaticPaths } from 'astro';
import { buildWaveSvg } from '~/utils/waves';
import { ribbon, waveTones, type WaveTone } from '~/utils/waveTones';

export const getStaticPaths: GetStaticPaths = () =>
  Object.keys(waveTones).map((tone) => ({ params: { tone } }));

export const GET: APIRoute = ({ params }) => {
  const stroke = waveTones[params.tone as WaveTone];
  const svg = buildWaveSvg({ ...ribbon, stroke, strokeWidth: 0.75 });
  return new Response(svg, {
    headers: { 'Content-Type': 'image/svg+xml' },
  });
};
