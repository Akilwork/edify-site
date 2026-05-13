"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, Stars, Float, ContactShadows, Environment } from "@react-three/drei";
import { Globe } from "./Globe";
import { EcosystemCards } from "./EcosystemCards";
import { Suspense, useRef, useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";

const SceneManager = ({ scrollProgress }: { scrollProgress: number }) => {
  const { camera } = useThree();
  const lightRef = useRef<THREE.PointLight>(null);

  useEffect(() => {
    // Scroll-linked camera movement
    // 0 -> 1: move camera from z=8 to z=2
    gsap.to(camera.position, {
      z: 8 - scrollProgress * 6,
      y: scrollProgress * 1,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [scrollProgress, camera]);

  useFrame((state) => {
    // Parallax mouse movement
    const targetX = state.mouse.x * 2;
    const targetY = state.mouse.y * 2;
    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (targetY - camera.position.y) * 0.05;
    camera.lookAt(0, -0.5, 0);

    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(state.clock.elapsedTime) * 5;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
      
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight ref={lightRef} position={[10, 10, 10]} intensity={1.5} color="#C8A96A" />
      <spotLight 
        position={[0, 10, 0]} 
        angle={0.15} 
        penumbra={1} 
        intensity={2} 
        color="#ffffff" 
        castShadow 
      />

      {/* Elements */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Globe scrollProgress={scrollProgress} />
      </Float>
      
      <EcosystemCards scrollProgress={scrollProgress} />

      {/* Background Environment */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <fog attach="fog" args={["#050510", 5, 20]} />
    </>
  );
};

export const Scene = ({ scrollProgress }: { scrollProgress: number }) => {
  return (
    <div className="absolute inset-0 z-0 bg-[#050510]">
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={null}>
          <SceneManager scrollProgress={scrollProgress} />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
      
      {/* Volumetric light rays overlay (CSS based for performance) */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-accent/20 via-transparent to-transparent blur-[120px]" />
      </div>
    </div>
  );
};
