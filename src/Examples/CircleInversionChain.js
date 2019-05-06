import React, { useState } from 'react';
import { Range } from '../Gui/Range';
import { Drawer } from '../Gui/Drawer';
import { getInvertedCircle } from './getInvertedCircle';

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
  const [circle, setCircle] = useState({ x: 0.75, y: 0.75, r: 0.08, fill: 'none', stroke: '#000', type: 'circle' });
  const inversionCircle = { x: 0.5, y: 0.5, r: 0.2, type: 'circle' };

  const range = n => [...Array(n).keys()];
  const inversions = range(300)
    .map(x => getInvertedCircle({ ...circle, x: x / 300 }, inversionCircle))
    .map(circle => ({ ...circle, fill: '#0033aa11', stroke: 'none', centreStroke: 'none' }))

  const elementTypes = {
    circle: (element, i) => createCircle(element, i),
    line: (element, i) => createLine(element, i),
  }
  const elements = [inversionCircle, circle, ...inversions]
    .map((element, i) => elementTypes[element.type](element, i));

  return (
    <div>
      <svg viewBox='0 0 1 1' xmlns='http://www.w3.org/2000/svg'>
        {elements}
      </svg>
      <Drawer>
        <Range label="Circle y" value={circle.y} onChange={y => setCircle({ ...circle, y: y / 100 })} min="1" max="100" />
        <Range label="Circle r" value={circle.r} onChange={r => setCircle({ ...circle, r: r / 100 })} min="1" max="100" />
      </Drawer>
    </div>
  )
}
