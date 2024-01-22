import React, { useRef, useEffect } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import { birdScene } from '../../assets/3d/gblExport';

const Bird = (props: any) => {
    const {scene, animations } = useGLTF(birdScene);

    const birdRef: any = useRef();

    const { actions }: any = useAnimations(animations, birdRef);

    useEffect(() => {
        actions['Take 001'].play();
    }, [actions]);

    useFrame(({clock, camera}: any) => {
        birdRef.current.position.y = Math.sin(clock.elapsedTime);

        if(birdRef.current.position.x > camera.position.x + 10) {
            birdRef.current.rotation.y = Math.PI
        } else if(birdRef.current.position.x < camera.position.x - 10) {
            birdRef.current.rotation.y = 0;
        }

        if(birdRef.current.rotation.y === 0) {
            birdRef.current.position.x += 0.01;
            birdRef.current.position.z -= 0.01;
        } else {
            birdRef.current.position.z += 0.01;
            birdRef.current.position.x -= 0.01;
        }
    })

  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Bird