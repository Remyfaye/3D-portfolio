

import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Earth = ({isMobile}) => {
  const earth = useGLTF('./planet/scene.gltf')
  return (
      <primitive 
      object={earth.scene} 
      scale={isMobile ? 2.9 : 1.5}
      position-y={isMobile ? 0 : -1.3} 
      rotation-y={0}
      // position={isMobile ? [0, -0.98, -0.42] : [0, -2.9, -0.5]}
      // scale={isMobile ? 0.29 : 0.55}
      // rotation={[-0.01, -0.5, -0.21]}
      />
  )
}

const EarthCanvas = () => {
  return(
    <Canvas shadows frameloop='demand' gl={{preserveDrawingBuffer:true}}> 
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls autoRotate enableZoom={false} 
        maxPolarAngle={Math.PI /2 } minPolarAngle={Math.PI /2 } />
        <Earth/>
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas