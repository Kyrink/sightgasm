import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';

function LightModel({ url }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} scale={[3, 3, 3]} position={[-6, -4, 0]} rotation={[0, Math.PI, 0]} />;
}

const StudioLight = ({ modelUrl }) => {
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
                <spotLight position={[15, 20, 5]} angle={0.3} penumbra={1} intensity={2} castShadow />
                <Suspense fallback={null}>
                    <LightModel url={modelUrl} />
                </Suspense>
            </Canvas>
        </motion.div>
    );
};

export default StudioLight;
