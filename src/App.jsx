import { Canvas } from '@react-three/fiber'

import './index.css'
import Shader from './Shader.jsx'
import Model from './Model.jsx'

function App() {
  
  return (
  <>

    <Canvas
    camera={{ 
      position: [0, 0, 2],
      fov: 40 }}  
    >
      <color attach="background" args={[0x999999]} />
      <Shader />
      <Model />
    </Canvas>
  </>
  )
}

export default App
