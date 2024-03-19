import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import './index.css'
import Model from './Model.jsx'


function App() {

 
return (
  <>

    <Canvas
    // orthographic 
    camera={{ 
    //   near: - 1000,
    //   far: 1000,
    //   zoom: 60, 
    //   position: [350, 280, 350]}}
      position: [3, 2, 3]}}
    >
          <OrbitControls />
    <directionalLight />
      <color attach="background" args={[0x999999]} />
      <Model />
    </Canvas>
  </>
  )
}

export default App
