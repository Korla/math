import React, { useState } from 'react';
import { Range } from '../Gui/Range';
import { Drawer } from '../Gui/Drawer';
import { getInvertedCircle } from './getInvertedCircle';

const createCircle = ({ x, y, r, fill }, i) => (
  <circle key={i} vectorEffect='non-scaling-stroke' cx={x} cy={y} r={r} fill={fill} stroke='#000' />
);

const createLine = ({ x1, y1, x2, y2 }, i) => (
  <line key={i} vectorEffect='non-scaling-stroke' x1={x1} y1={y1} x2={x2} y2={y2} stroke='#000' />
);

export function CircleInversion() {
  const [inversionCircle, setInversionCircle] = useState({ x: 0.5, y: 0.5, r: 0.2, fill: 'none' });
  const [circle, setCircle] = useState({ x: 0.5, y: 0.57, r: 0.08, fill: 'none' });
  const circles = [inversionCircle, circle];
  const lines = [];

  const result = getInvertedCircle(circle, inversionCircle);
  console.log(result);
  if (result.type === 'circle') {
    circles.push({ ...result, fill: 'none' });
  } else {
    lines.push(result);
  }

  return (
    <div>
      <svg viewBox='0 0 1 1' xmlns='http://www.w3.org/2000/svg'>
        {circles.map((c, i) => createCircle(c, i))}
        {lines.map((c, i) => createLine(c, i + circles.length))}
      </svg>
      <Drawer>
        <Range label="InversionCircle" value={inversionCircle.x} onChange={x => setInversionCircle({ ...inversionCircle, x: x / 100 })} min="1" max="100" />
        <Range label="Circle x" value={circle.x} onChange={x => setCircle({ ...circle, x: x / 100 })} min="1" max="100" />
        <Range label="Circle y" value={circle.y} onChange={y => setCircle({ ...circle, y: y / 100 })} min="1" max="100" />
      </Drawer>
    </div>
  )
}
