import React, {Suspense, useState} from 'react'

import './App.css';

import { Canvas } from 'react-three-fiber'

import Scene from './Components/Three/Scene'
import Light from './Components/Three/Light'
import Floor from './Components/Three/Floor'
import { softShadows, OrbitControls } from '@react-three/drei'


function App() {

  const [rotate, setRotate] = useState(false);
  softShadows()
  return (
    <div className="App">
      
      <Canvas 
        colorManagement
        shadowMap
        camera={{position: [-15,4,1], fov: 10}} 
        style={{ height: '100vh', width: '100vw' }}
      >

        <Light />
        <Suspense fallback={null}>
          <Scene rotate={rotate} setRotate={setRotate}/>
          <Floor />
          <OrbitControls  /> 
        </Suspense>

      </Canvas>

    </div>
  );
}

export default App;
