"use client"

import React, { useState, useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Preload } from "@react-three/drei";
import * as THREE from "three";

// Custom function to generate random positions in a sphere
const generateRandomPositions = (count: number, radius: number): Float32Array => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = Math.cbrt(Math.random()) * radius;

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
};

interface CodeParticleProps {
  position: [number, number, number];
  character: string;
  color?: string;
}

const CodeParticle: React.FC<CodeParticleProps> = ({ position, character, color = "#fff" }) => {
  const textRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (textRef.current) {
      textRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * delta * 0.05;
      textRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={0.02}
      color={color}
      anchorX="center"
      anchorY="middle"
    >
      {character}
    </Text>
  );
};

interface CodeGalaxyBackgroundProps {
  [key: string]: any;
}

const CodeGalaxyBackground: React.FC<CodeGalaxyBackgroundProps> = (props) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<><>{}[]()=+-*/";
  const particleCount = 200;
  
  const particles = useMemo(() => {
    const positions = generateRandomPositions(particleCount, 1.5);
    return Array.from({ length: particleCount }, (_, i) => ({
      position: [
        positions[i * 3],
        positions[i * 3 + 1],
        positions[i * 3 + 2]
      ] as [number, number, number],
      character: characters[Math.floor(Math.random() * characters.length)]
    }));
  }, []);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {particles.map((particle, i) => (
        <CodeParticle
          key={i}
          position={particle.position}
          character={particle.character}
          color={`hsl(${Math.random() * 60 + 190}, 70%, 75%)`}
        />
      ))}
    </group>
  );
};

const CodeGalaxyCanvas = () => (
  <div className="w-full h-auto absolute inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1.5] }}>
      <Suspense fallback={null}>
        <CodeGalaxyBackground />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default CodeGalaxyCanvas;