import React from 'react'
import { useGLTF } from '@react-three/drei';

import { planeScene } from '../../assets/3d/gblExport';

const Plane = ({ isRotating, ...props }: any) => {
    const {scene} = useGLTF(planeScene);

  return (
    <mesh {...props}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Plane