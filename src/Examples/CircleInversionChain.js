import React from 'react';
import { getInvertedCircle } from './getInvertedCircle';
import { useCircle } from './useCircle';

const createCircle = ({ x, y, r, fill, stroke, centreStroke }, i) => (
  <React.Fragment key={i}>
    <circle vectorEffect='non-scaling-stroke' cx={x} cy={y} r={r} fill={fill || 'none'} stroke={stroke || '#000'} />
    <circle vectorEffect='non-scaling-stroke' cx={x} cy={y} r={0.003} fill='none' stroke={centreStroke || '#000'} />
  </React.Fragment>
);

const createLine = ({ x1, y1, x2, y2 }, i) => (
  <line key={i} vectorEffect='non-scaling-stroke' x1={x1} y1={y1} x2={x2} y2={y2} stroke='#000' />
);

export function CircleInversionChain() {
  const { circle, onMouseMove, onWheel } = useCircle({ x: 0.75, y: 0.75, r: 0.08, fill: 'none', stroke: '#000', type: 'circle' });
  const inversionCircle = { x: 0.5, y: 0.5, r: 0.2, type: 'circle' };

  const range = n => [...Array(n).keys()];
  const count = 100;
  const inversions = range(count)
    .map(x => getInvertedCircle({ ...circle, x: x / count }, inversionCircle))
    .map(circle => ({ ...circle, fill: '#0033aa11', stroke: 'none', centreStroke: 'none' }))

  const elementTypes = {
    circle: (element, i) => createCircle(element, i),
    line: (element, i) => createLine(element, i),
  }
  const elements = [inversionCircle, circle, ...inversions]
    .map((element, i) => elementTypes[element.type](element, i));

  return (
    <svg viewBox='0 0 1 1'
      xmlns='http://www.w3.org/2000/svg'
      onMouseMove={onMouseMove}
      onWheel={onWheel}>
      {elements}
    </svg>
  )
}
