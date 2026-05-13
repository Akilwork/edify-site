"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const Globe = () => {
  const globeRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  // Procedural continent dots (simplified)
  const dotsCount = 4000;
  const positions = useMemo(() => {
    const pos = new Float32Array(dotsCount * 3);
    for (let i = 0; i < dotsCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / dotsCount);
      const theta = Math.sqrt(dotsCount * Math.PI) * phi;
      
      const r = 2;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
      // Mouse interaction
      const mouseX = (state.mouse.x * Math.PI) / 10;
      const mouseY = (state.mouse.y * Math.PI) / 10;
      globeRef.current.rotation.y += mouseX * 0.01;
      globeRef.current.rotation.x += mouseY * 0.01;
    }
  });

  return (
    <group ref={globeRef} position={[0, -2.5, 0]}>
      {/* Base Sphere (Semi-transparent) */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial 
          color="#0a1a15" 
          transparent 
          opacity={0.4} 
          shininess={50}
          specular="#C8A96A"
        />
      </mesh>

      {/* Atmospheric Glow */}
      <mesh scale={[1.05, 1.05, 1.05]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial 
          color="#C8A96A" 
          transparent 
          opacity={0.05} 
          side={THREE.BackSide} 
        />
      </mesh>

      {/* Dots representing continents */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={dotsCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.02} 
          color="#C8A96A" 
          transparent 
          opacity={0.6} 
          sizeAttenuation 
        />
      </points>

      {/* Grid Lines */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.005, 16, 100]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
      </mesh>
      <mesh rotation={[0, 0, 0]}>
        <torusGeometry args={[2, 0.005, 16, 100]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
      </mesh>
    </group>
  );
};
