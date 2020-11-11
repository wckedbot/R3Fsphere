import './App.css';
import {Canvas} from 'react-three-fiber';
import React from 'react';
import Cubes from './components/Cubes';
import Environment from './components/Environment';
import Lights from './components/Lights';

function App() {
  return (
    <>
      <Canvas>
        <Cubes />
        <Lights />
        <Environment />
      </Canvas>
    </>
  );
}

export default App;
