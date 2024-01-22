import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei';

import { skyScene } from '../../assets/3d/gblExport';
import { useFrame } from '@react-three/fiber';

const Sky = (props: any) => {
  const sky = useGLTF(skyScene);
  const skyRef: any = useRef();

  useFrame((_, delta) => {
    skyRef.current.rotation.y = props.islandRotation.y;
  })

  return (
    <mesh ref={skyRef}>
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky