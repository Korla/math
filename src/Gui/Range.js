import React from 'react';

export function Range({ label, min, max, r, onChange }) {
  return (
    <label>
      {label}
      <input type="range" min={min} max={max} value={r} onChange={ev => onChange(parseInt(ev.target.value, 10))} />
    </label>
  );
}
