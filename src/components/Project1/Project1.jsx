import React from 'react'
import {Canvas} from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import ModelStore from './ModelStore'

const Project1 = () => {
  return (
    <Canvas>
      <Stage environment='city' intensity={1}>
          <ModelStore/>
      </Stage>
    
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default Project1