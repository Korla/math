import React from 'react';
import './drawer.css';

export function Drawer(props) {
  return (
    <div className="drawer">
      {props.children}
    </div>
  )
}
