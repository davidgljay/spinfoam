import React from 'react';
import './App.css';
import Hexgrid from './Hexgrid';

function App() {
  const grid = []
  const gridsize = 20
  for (var i = 0; i < gridsize; i++) {
    grid[i] = []
    for (var j = 0; j < gridsize; j++) {
      grid[i][j] = []
      for (var k = 0; k < 6; k++) {
        grid[i][j][k] = Math.random
      }
    }
  }
  return <Hexgrid
      width={400}
      height={400}
      size={10}
      active={[5,10]}
      grid={grid}
    />

}


export default App;
