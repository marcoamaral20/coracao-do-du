import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';

type GLTFResult = GLTF & {
  nodes: {
    hartZBrush_defualt_group_Heart_Tex_0: THREE.Mesh;
  };
  materials: {
    Heart_Tex: THREE.Material;
  };
};

const Model: React.FC<GroupProps> = (props) => {
  const { nodes, materials } = useGLTF('/heart.gltf') as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.174}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            geometry={nodes.hartZBrush_defualt_group_Heart_Tex_0.geometry}
            material={materials.Heart_Tex}
            scale={286.365}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/heart.gltf');

export default Model;
