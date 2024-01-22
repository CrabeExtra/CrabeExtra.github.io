import React from 'react'
import { useGLTF } from '@react-three/drei';

import { birdScene } from '../../assets/3d/gblExport';

const Bird = () => {
    const {scene} = useGLTF(birdScene);

  return (
    <mesh position={[-5, 2, 1]} scale={[0.0003, 0.003, 0.003]}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Bird