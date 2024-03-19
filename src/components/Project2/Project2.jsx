import React from 'react'
import {Canvas} from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import ModelChess from './ModelChess';

const Project2 = () => {
  return (
    <Canvas>
      <Stage environment='city' intensity={1}>
      <ModelChess />
      
      </Stage>
    
      <OrbitControls enableZoom={false}/>
    </Canvas>
    
  )
}

export default Project2