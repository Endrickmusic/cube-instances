import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('./models/ob1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh 
      castShadow 
      receiveShadow 
      geometry={nodes.Cube.geometry} 
      material={materials.Material} 
      position={[0, -18, 0]}
      />
    </group>
  )
}

useGLTF.preload('./models/ob1.glb')

