import React, { useState } from 'react';
import { Range } from '../Gui/Range';
import { Drawer } from '../Gui/Drawer';
import { Color, interpolateColor } from '../color';
import { Circle } from './Circle';

export function Pappus() {
  const [r, setR] = useState(70);
  const [count, setCount] = useState(30);
  return (
    <div>
      <Circles r={r / 100} number={count} />
      <Drawer>
        <Range label="Radius" value={r} onChange={setR} min="1" max="100" />
        <Range label="Count" value={count} onChange={setCount} min="1" max="400" />
      </Drawer>
    </div>
  );
}

function Circles({ r, number }) {
  const colors = [
    new Color('#ffffff'),
    new Color('#0033aa'),
  ]
  const range = n => [...Array(n).keys()];
  const ns = range(number);
  const circles = [
    { x: 0.5, y: 0.5, r: 0.5, fill: 'none' },
    { x: r / 2, y: 0.5, r: r / 2, fill: 'none' },
    ...ns
      .map(n => ({
        x: r * (1 + r) / (2 * (n * n * (1 - r) * (1 - r) + r)),
        y: 0.5 - n * r * (1 - r) / ((n * n * (1 - r) * (1 - r) + r)),
        r: r * (1 - r) / (2 * (n * n * (1 - r) * (1 - r) + r)),
        fill: interpolateColor(colors[0], colors[1], 100 * n / number).asRgbCss()
      }))
  ];
  return (
    <svg viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg" className="pappus">
      {
        circles.map((circle, i) => <Circle {...circle} key={i} />)
      }
    </svg>
  );
}