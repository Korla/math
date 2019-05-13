import React, { useState } from 'react';
import './gui.css';

export function Tabs({ children }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="tabs">
        {
          children.map(({ props }, i) => {
            const { label } = props;

            return (
              <span className={active === i ? 'active' : ''} key={label} onClick={() => setActive(i)}>
                {label}
              </span>
            );
          })
        }
      </div>
      <div className="tabContent">
        {children[active]}
      </div>
    </div>
  )
}
