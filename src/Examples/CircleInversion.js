import React from 'react';
import { getInvertedCircle } from './getInvertedCircle';
import { useCircle } from './useCircle';
import { Circle } from './Circle';

export function CircleInversion() {
  const { circle, onMouseMove, onWheel } = useCircle({ x: 0.75, y: 0.75, r: 0.08, fill: '#0033aa', type: 'circle' });
  const inversionCircle = { x: 0.5, y: 0.5, r: 0.2, fill: 'none', type: 'circle' };
  const inverted = { ...getInvertedCircle(circle, inversionCircle), fill: '#0033aa' };
  const elements = [inversionCircle, circle, inverted];

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
