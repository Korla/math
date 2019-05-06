import React, { useState } from 'react';
import { Range } from '../Gui/Range';
import { Drawer } from '../Gui/Drawer';
import { getInvertedCircle } from './getInvertedCircle';

const createCircle = ({ x, y, r, fill }, i) => (
  <circle key={i} vectorEffect='non-scaling-stroke' cx={x} cy={y} r={r} fill={fill} stroke='#000' />
);

export function CircleInversion() {
  const [inversionCircle, setInversionCircle] = useState({ x: 0.5, y: 0.5, r: 0.2, fill: 'none' });
  const [circle, setCircle] = useState({ x: 0.5, y: 0.61, r: 0.1, fill: 'none' });

  const { x, y, r } = getInvertedCircle(circle, inversionCircle);
  const inverted = { x, y, r, fill: 'none' };

  const circles = [inversionCircle, circle, inverted];
  return (
    <div>
      <svg viewBox='0 0 1 1' xmlns='http://www.w3.org/2000/svg'>
        {circles.map((c, i) => createCircle(c, i))}
      </svg>
      <Drawer>
        <Range label="InversionCircle" value={inversionCircle.x} onChange={x => setInversionCircle({ ...inversionCircle, x: x / 100 })} min="1" max="100" />
        <Range label="Circle" value={circle.x} onChange={x => setCircle({ ...circle, x: x / 100 })} min="1" max="100" />
      </Drawer>
    </div>
  )
}
