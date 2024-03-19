import React from 'react'
import {Canvas} from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import ModelRecipe from './ModelRecipe';
const Project3 = () => {
  return (
    <Canvas>
    <Stage environment='city' intensity={1}>
    <ModelRecipe />
    
    </Stage>
  
    <OrbitControls enableZoom={false}/>
  </Canvas>
  
)
}

export default Project3