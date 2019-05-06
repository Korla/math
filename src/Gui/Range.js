import React from 'react';

export function Range({ label, min, max, value, onChange }) {
  return (
    <label>
      {label}
      <input type="range" min={min} max={max} value={value * 100} onChange={ev => onChange(parseInt(ev.target.value, 10))} />
    </label>
  );
}
