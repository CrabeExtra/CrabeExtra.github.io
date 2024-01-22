import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber'

import Loader from '../../components/mainpage/Loader';
import Island from '../../components/models/Island';
import Sky from '../../components/mainpage/Sky';
import Bird from '../../components/mainpage/Bird';
import Plane from '../../components/mainpage/Plane';

/**
 * 
 * for later:
 * <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                POPUP
            </div>
 */

const MainPage = () => {
    const screenPosition = [0, -6.5, -43];
    const rotation = [0.1, 4.7, 0];
    
    const [screenScale, setScreenScale] = useState<number[]>(window.innerWidth < 768 ? [0.9, 0.9, 0.9] : [1, 1, 1]);
    const [isRotating, setIsRotating] = useState<boolean>(false);
    const [planePosition, setPlanePosition] = useState<number[]>(window.innerWidth < 768 ? [0, -1.5, 0] : [0, -4, -4]);
    const [planeScale, setPlaneScale] = useState<number[]>(window.innerWidth < 768 ? [1.5, 1.5, 1.5] : [3, 3, 3]);

    useEffect(() => {
        window.addEventListener('resize', adjustForScreenSize);

        return () => { window.removeEventListener('resize', adjustForScreenSize) };
    });

    const adjustForScreenSize = async () => {
        adjustIslandForScreenSize();
        adjustPlaneForScreenSize();
    }

    const adjustPlaneForScreenSize = () => {
        if(window.innerWidth < 768) {
            setPlaneScale([1.5, 1.5, 1.5]);
            setPlanePosition([0, -1.5, 0]);
        } else {
            setPlaneScale([1, 1, 1]);
            setPlanePosition([0, -4, -4]);
        }
    }

    const adjustIslandForScreenSize = () => {
        if(window.innerWidth < 768) {
            setScreenScale([0.9, 0.9, 0.9]);
        } else {
            setScreenScale([1, 1, 1]);
        }
    };

//let [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

    return (
        <section className="w-full h-screen relative">
            <Canvas 
                className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{ near: 0.1, far: 1000}}
                
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1,1,1]} intensity={0.9} />
                    <ambientLight intensity={0.2} />
                    <pointLight />
                    <spotLight />
                    <hemisphereLight groundColor="#000000" />
                    <Bird />
                    <Sky />
                    <Island
                        position={screenPosition}
                        scale={screenScale}
                        rotation={rotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <Plane
                        isRotating={isRotating}
                        planePosition={planePosition}
                        planeScale={planeScale}
                        rotation={[0, 20, 0]}
                    />
                </Suspense>

            </Canvas>
        </section>
    )
}

export default MainPage;