import React from 'react';
import './gui.css';

export function Drawer(props) {
  return (
    <div className="drawer">
      {props.children}
    </div>
  )
}
