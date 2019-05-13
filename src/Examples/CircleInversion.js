import React from 'react';
import { getInvertedCircle } from './getInvertedCircle';
import { useCircle } from './useCircle';

const createCircle = ({ x, y, r, fill, stroke, centreStroke }, i) => (
  <React.Fragment key={i}>
    <circle vectorEffect='non-scaling-stroke' cx={x} cy={y} r={r} fill={fill} fillOpacity={Math.min(r, 0.8)} stroke={stroke || '#000'} />
    <circle vectorEffect='non-scaling-stroke' cx={x} cy={y} r={0.003} fill='none' stroke={centreStroke || '#000'} />
  </React.Fragment>
);

const createLine = ({ x1, y1, x2, y2 }, i) => (
  <line key={i} vectorEffect='non-scaling-stroke' x1={x1} y1={y1} x2={x2} y2={y2} stroke='#000' />
);

export function CircleInversion() {
  const { circle, onMouseMove, onWheel } = useCircle({ x: 0.75, y: 0.75, r: 0.08, fill: '#0033aa', type: 'circle' });
  const inversionCircle = { x: 0.5, y: 0.5, r: 0.2, fill: 'none', type: 'circle' };

  const inverted = { ...getInvertedCircle(circle, inversionCircle), fill: '#0033aa' };

  const elementTypes = {
    circle: (element, i) => createCircle(element, i),
    line: (element, i) => createLine(element, i),
  }
  const elements = [inversionCircle, circle, inverted]
    .map((element, i) => elementTypes[element.type](element, i));

  return (
    <div className="circleInversion">
      <svg viewBox='0 0 1 1'
        xmlns='http://www.w3.org/2000/svg'
        onMouseMove={onMouseMove}
        onWheel={onWheel}>
        {elements}
      </svg>
    </div>
  )
}
