import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import './index.css'
import Model from './Model.jsx'
import { Effects } from './Effects.jsx'


function App() {

return (
  <>
    <Canvas
    // orthographic 
    camera={{ 
      // near: - 1000,
      // far: 1000,
      // zoom: 60, 
      // position: [350, 280, 350]}}
      position: [5, 3, 5]}}
    >
      {/* <initPost /> */}
          <OrbitControls />

      <color attach="background" args={[0x999999]} />
      <Model />
      <Effects />
    </Canvas>
  </>
  )
}

export default App



