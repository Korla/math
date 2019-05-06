import React from 'react';
import { Pappus } from './Examples/Pappus';
import { CircleInversion } from './Examples/CircleInversion';
import { Tabs } from './Gui/Tabs';

function App() {
  return (
    <Tabs>
      <CircleInversion label="Circle inversion" />
      <Pappus label="Pappus" />
    </Tabs>
  );
}

export default App;
