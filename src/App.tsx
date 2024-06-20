import React from 'react';
import { Suspense } from 'react';
import HeartInfo from './HeartInfo.js';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Heart from '../public/Heart.js';
import Carousel from './Carousel.js';
import './App.css';
import HeartbeatAudio from '../public/HeartSound.js';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1 className="title">Eduardo Pires</h1>
      <h2 className="subtitle">Coração Humano</h2>
      <div className="canvas-container">
        <Canvas className="heart-canvas">
          <OrbitControls />
          <ambientLight intensity={1.0} />
          <Suspense fallback={null}>
            <Heart />
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
        <Carousel />
      </div>
      <HeartInfo />
      <HeartbeatAudio />
    </div>
  );
};

export default App;
