import React from 'react';

const CircleImpl = ({ x, y, r, fill, stroke, centreStroke }) => (
  <React.Fragment>
    <circle vectorEffect='non-scaling-stroke' cx={x} cy={y} r={r} fill={fill} fillOpacity={Math.min(r, 0.8)} stroke={stroke || '#000'} />
    <circle vectorEffect='non-scaling-stroke' cx={x} cy={y} r={0.003} fill='none' stroke={centreStroke || '#000'} />
  </React.Fragment>
);

const LineImpl = ({ x1, y1, x2, y2 }) => (
  <line vectorEffect='non-scaling-stroke' x1={x1} y1={y1} x2={x2} y2={y2} stroke='#000' />
);

const elementTypes = {
  circle: (circle, i) => <CircleImpl {...circle} key={i} />,
  line: (line, i) => <LineImpl {...line} key={i} />,
}

export const Circle = ({ type, ...config }) => elementTypes[type || 'circle'](config);
