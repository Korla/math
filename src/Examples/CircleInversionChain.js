import React from 'react';
import { getInvertedCircle } from './getInvertedCircle';
import { useCircle } from './useCircle';
import { Circle } from './Circle';

export function CircleInversionChain() {
  const { circle, onMouseMove, onWheel } = useCircle({ x: 0.75, y: 0.75, r: 0.08, fill: 'none', stroke: '#000', type: 'circle' });
  const inversionCircle = { x: 0.5, y: 0.5, r: 0.2, type: 'circle' };

  const range = n => [...Array(n).keys()];
  const count = 100;
  const inversions = range(count)
    .map(x => getInvertedCircle({ ...circle, x: x / count }, inversionCircle))
    .map(circle => ({ ...circle, fill: '#0033aa11', stroke: 'none', centreStroke: 'none' }))

  const elements = [inversionCircle, circle, ...inversions];

  return (
    <svg viewBox='0 0 1 1'
      xmlns='http://www.w3.org/2000/svg'
      onMouseMove={onMouseMove}
      onWheel={onWheel}>
      {
        elements
          .map((circle, i) => <Circle {...circle} key={i} />)
      }
    </svg>
  )
}
