import { Canvas } from '@react-three/fiber'
// import { OrbitControls } from 'three/examples/jsm/Addons.js'

import './App.css'
import {OrbitControls} from "@react-three/drei"

function App() {


  return (
    <>

      <Canvas camera={{position: [7, 14, -16], fov: 70}}>
        <axesHelper />
        <OrbitControls />
        

        <mesh >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={'orange'} />
        </mesh>

        <ambientLight />
        <directionalLight />
      </Canvas>



      <p>Hallo, das ist der Playground</p>
    </>
  )
}

export default App
