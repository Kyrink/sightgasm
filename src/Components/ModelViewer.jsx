import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ url }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} scale={[5, 5, 5]} position={[0, -1, 0]} />;
}

const ModelViewer = ({ modelUrl }) => {
    return (
        <Canvas style={{ height: '100vh', width: '100vw' }}>
            <ambientLight intensity={1.0} />
            <directionalLight position={[10, 10, 10]} intensity={1.5} />
            <directionalLight position={[-10, -10, -10]} intensity={1.0} />
            <pointLight position={[0, 10, 0]} intensity={1.5} />
            <spotLight position={[15, 20, 5]} angle={0.3} penumbra={1} intensity={2} castShadow />
            <Suspense fallback={null}>
                <Model url={modelUrl} />
            </Suspense>
            <OrbitControls />
        </Canvas>
    );
};

export default ModelViewer;
