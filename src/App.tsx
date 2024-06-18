import React from 'react';
import { Suspense } from 'react';
import HeartInfo from './HeartInfo.js';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Heart from '../public/Heart.js';

const App: React.FC = () => {
  return (
    <div>
      <h1>Eduardo Pires</h1>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5}/>
        <Suspense fallback={null}>
          <Heart />
        </Suspense>
        <Environment preset='city'/>
      </Canvas>
      <HeartInfo />
    </div>
  );
};

export default App;
