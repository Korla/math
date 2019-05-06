import React from 'react';
import { Pappus } from './Examples/Pappus';
import { CircleInversion } from './Examples/CircleInversion';
import { Tabs } from './Gui/Tabs';
import { CircleInversionChain } from './Examples/CircleInversionChain';

function App() {
  return (
    <Tabs>
      <CircleInversion label="Circle inversion" />
      <CircleInversionChain label="Circle inversion chain" />
      <Pappus label="Pappus" />
    </Tabs>
  );
}

export default App;
