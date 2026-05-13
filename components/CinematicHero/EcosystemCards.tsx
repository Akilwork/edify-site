"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

const cardData = [
  { name: "Loyaltri", category: "HR Tech" },
  { name: "NIMS", category: "Education" },
  { name: "ZASA", category: "Hospitality" },
  { name: "SeeD", category: "Innovation" },
  { name: "Safetri", category: "Security" },
  { name: "EMKE Garage", category: "Automotive" },
  { name: "IMPRINTES", category: "Creative" },
  { name: "Toss Techno", category: "IT Services" },
  { name: "Unidezine", category: "Design" },
];

export const EcosystemCards = ({ scrollProgress }: { scrollProgress: number }) => {
  const groupRef = useRef<THREE.Group>(null);

  const cardPositions = useMemo(() => {
    return cardData.map((_, i) => {
      const angle = (i / cardData.length) * Math.PI * 2;
      const radius = 5 + Math.random() * 2;
      const y = (Math.random() - 0.5) * 4;
      return {
        initialPos: new THREE.Vector3(
          Math.cos(angle) * radius,
          y,
          Math.sin(angle) * radius
        ),
        angle,
        radius,
      };
    });
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const data = cardPositions[i];
        const time = state.clock.getElapsedTime();
        
        // Idle floating animation
        child.position.y = data.initialPos.y + Math.sin(time + i) * 0.2;
        
        // Orbit movement
        const currentAngle = data.angle + time * 0.05;
        child.position.x = Math.cos(currentAngle) * data.radius;
        child.position.z = Math.sin(currentAngle) * data.radius;

        // Zoom-on-scroll logic
        // As scrollProgress goes 0 -> 1, cards move closer to camera
        // Camera is at z=8 (default). We want cards to zoom past camera or towards it.
        const zoomFactor = scrollProgress * 15;
        child.position.z -= zoomFactor;
        
        // If card is active (zoomed in), we handle it in the main scene or here
      });
    }
  });

  return (
    <group ref={groupRef}>
      {cardData.map((card, i) => (
        <group key={card.name} position={cardPositions[i].initialPos}>
          <Html transform occlude distanceFactor={1.5}>
            <motion.div 
              whileHover={{ scale: 1.1, y: -10 }}
              className="w-48 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl group cursor-pointer"
              style={{
                boxShadow: "0 0 30px rgba(200, 169, 106, 0.1)",
              }}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center font-bold text-accent text-xs">
                    {card.name[0]}
                  </div>
                  <span className="text-[8px] font-black tracking-[0.2em] uppercase text-white/20 group-hover:text-accent transition-colors">
                    {card.category}
                  </span>
                </div>
                <div className="h-[1px] w-full bg-white/5 group-hover:bg-accent/20 transition-colors" />
                <div>
                  <h4 className="text-sm font-bold text-white/80 group-hover:text-white transition-colors tracking-tight">
                    {card.name}
                  </h4>
                  <p className="text-[9px] text-white/30 mt-1">Ecosystem Partner</p>
                </div>
              </div>
              
              {/* Reflection lighting effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity blur-[1px] pointer-events-none" />
            </motion.div>
          </Html>
        </group>
      ))}
    </group>
  );
};
