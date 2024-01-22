import React, { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei';

import { planeScene } from '../../assets/3d/gblExport';

const Plane = ({ isRotating, ...props }: any) => {
    const ref = useRef();

    const { scene, animations } = useGLTF(planeScene);
    const { actions }: any = useAnimations(animations, ref);

    useEffect(() => {
        if(actions && actions['Take 001']) {
            if(isRotating) {
                actions['Take 001'].play();
            } else {
                actions['Take 001'].stop();
            }
        }
        
    }, [actions, isRotating])

    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane