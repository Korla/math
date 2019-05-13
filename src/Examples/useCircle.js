import { useState } from 'react';

export const useCircle = config => {
  const [circle, setCircle] = useState(config);

  const onMouseMove = ({ target, clientX, clientY }) => {
    const { clientWidth, clientHeight } = target;
    const { left, top } = target.getBoundingClientRect();
    const x = (clientX - left) / clientWidth;
    const y = (clientY - top) / clientHeight;
    setCircle({ ...circle, x, y });
  }

  const onWheel = ({ deltaY }) => {
    const delta = deltaY < 0 ? 0.001 : -0.001;
    const r = Math.max(0.01, circle.r + delta);
    setCircle({ ...circle, r });
  };

  return {
    circle,
    setCircle,
    onMouseMove,
    onWheel
  }
}