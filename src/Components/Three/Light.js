import React from 'react'

const Light = () => {
     return (
          <>
          {/* <fog attach="fog" args={['#bbb', 0, 22]} /> */}
          <ambientLight intensity={.4} />
          <directionalLight 
               castShadow
               position={[-8,16,-8]}
               intensity={0}
                    shadow-mapSize-width={window.innerWidth}
               shadow-mapSize-height={window.innerHeight}
               shadow-camera-far={50}
               shadow-camera-left={10}
               shadow-camera-right={10}
               shadow-camera-top={10}
               shadow-camera-bottom={-50}
          />
          <pointLight position={[0,50,0]} intensity={2} />
          </>
     )
}

export default Light
