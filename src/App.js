import React from 'react';
import Palette from './components/Palette';
import SeedColors from './components/SeedColors';

function App() {
  return (
    <div className="App">
      <Palette {...SeedColors[6]}/>
    </div>
  );
}

export default App;
