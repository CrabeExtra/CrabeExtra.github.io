import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber'

import Loader from '../../components/mainpage/Loader';
import Island from '../../components/models/Island';
import Sky from '../../components/mainpage/Sky';
import Bird from '../../components/mainpage/Bird';
import Plane from '../../components/mainpage/Plane';
import HomeInfo from '../../components/mainpage/HomeInfo';
import { sakura } from '../../assets/music/index';
import { soundoff, soundon } from '../../assets/icons';

const MainPage = () => {
    const audioRef = useRef(new Audio(sakura));
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;
    const screenPosition = [0, -6.5, -43];
    const rotation = [0.1, 4.7, 0];
    
    const [screenScale, setScreenScale] = useState<number[]>(window.innerWidth < 768 ? [0.9, 0.9, 0.9] : [1, 1, 1]);
    const [isRotating, setIsRotating] = useState<boolean>(false);
    const [isRotatingByKeys, setIsRotatingByKeys] = useState<boolean>(false);
    const [planePosition, setPlanePosition] = useState<number[]>(window.innerWidth < 768 ? [0, -1.5, 0] : [0, -4, -4]);
    const [planeScale, setPlaneScale] = useState<number[]>(window.innerWidth < 768 ? [1.5, 1.5, 1.5] : [3, 3, 3]);
    const [currentStage, setCurrentStage] = useState<any>(0);
    const [islandRotation, setIslandRotation] = useState<number[]>(rotation);
    const [isPlayingMusic, setIsplayingMusic] = useState<boolean>(false);

    useEffect(() => {
        let cleanupRef = audioRef.current;

        if(isPlayingMusic) {
            audioRef.current.play();
        }

        return () => {
            cleanupRef.pause();
        }
    },[isPlayingMusic])

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

    return (
        <section className="w-full h-screen relative">
            <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                {currentStage ? <HomeInfo currentStage={currentStage} /> : ""}
            </div>
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
                    <Sky 
                        isRotating={isRotating || isRotatingByKeys}
                        islandRotation={islandRotation}
                    />
                    <Island
                        position={screenPosition}
                        scale={screenScale}
                        rotation={rotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        isRotatingByKeys={isRotatingByKeys}
                        setIsRotatingByKeys={setIsRotatingByKeys}
                        currentStage={currentStage}
                        setCurrentStage={setCurrentStage}
                        setIslandRotation={setIslandRotation}
                    />
                    <Plane
                        isRotating={isRotating || isRotatingByKeys}
                        position={planePosition}
                        scale={planeScale}
                        rotation={[0, 20, 0]}
                        currentStage={currentStage}
                    />
                </Suspense>

            </Canvas>

            <div className="absolute bottom-2 left-2">
                <img 
                    src={!isPlayingMusic ? soundoff : soundon}
                    alt="sound"
                    className="w-10 h-10 cursor-pointer object-contain"
                    onClick={() => setIsplayingMusic(!isPlayingMusic)}
                />
            </div>
        </section>
    )
}

export default MainPage;