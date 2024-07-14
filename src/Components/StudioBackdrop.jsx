import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';

function BackdropModel({ url }) {
    const { scene } = useGLTF(url);

    // Ensure the scale and position are set correctly
    scene.scale.set(3.2, 3.2, 3.2);
    scene.position.set(0, -2.5, -3);

    return <primitive object={scene} />;
}

const StudioBackdrop = ({ modelUrl }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-full h-full"
        >
            <Canvas>
                <ambientLight intensity={0.5} />
                <spotLight
                    position={[15, 20, 5]}
                    angle={0.3}
                    penumbra={1}
                    intensity={2}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />
                <directionalLight
                    position={[-5, 5, 5]}
                    intensity={1.5}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />
                <pointLight position={[0, 10, 10]} intensity={1.5} />
                <Suspense fallback={null}>
                    <BackdropModel url={modelUrl} />
                </Suspense>
                <OrbitControls />
            </Canvas>
        </motion.div>
    );
};

export default StudioBackdrop;
