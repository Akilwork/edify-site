"use client";

import { useRef } from "react";
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

const cardPositions = cardData.map((_, i) => {
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

export const EcosystemCards = ({ scrollProgress }: { scrollProgress: number }) => {
  const groupRef = useRef<THREE.Group>(null);

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
              whileHover={{
                scale: 1.12,
                y: -12,
                transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
              }}
              className="relative w-48 p-4 rounded-2xl backdrop-blur-xl shadow-2xl group cursor-pointer overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 30px rgba(200, 169, 106, 0.08)",
              }}
              onHoverStart={(e) => {
                (e.target as HTMLElement).style.boxShadow =
                  "0 0 40px rgba(200,169,106,0.35), 0 0 80px rgba(200,169,106,0.12)";
                (e.target as HTMLElement).style.border =
                  "1px solid rgba(200,169,106,0.5)";
                (e.target as HTMLElement).style.background =
                  "rgba(200,169,106,0.06)";
              }}
              onHoverEnd={(e) => {
                (e.target as HTMLElement).style.boxShadow =
                  "0 0 30px rgba(200, 169, 106, 0.08)";
                (e.target as HTMLElement).style.border =
                  "1px solid rgba(255,255,255,0.08)";
                (e.target as HTMLElement).style.background =
                  "rgba(255,255,255,0.03)";
              }}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center font-bold text-accent text-xs group-hover:bg-accent/30 transition-colors"
                  >
                    {card.name[0]}
                  </motion.div>
                  <span className="text-[8px] font-black tracking-[0.2em] uppercase text-white/20 group-hover:text-accent transition-colors duration-200">
                    {card.category}
                  </span>
                </div>
                <div className="h-[1px] w-full bg-white/5 group-hover:bg-accent/30 transition-colors duration-300" />
                <div>
                  <h4 className="text-sm font-bold text-white/80 group-hover:text-white transition-colors duration-200 tracking-tight">
                    {card.name}
                  </h4>
                  <p className="text-[9px] text-white/30 group-hover:text-white/50 transition-colors duration-200 mt-1">
                    Ecosystem Partner
                  </p>
                </div>
              </div>

              {/* Shimmer sweep on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                initial={{ x: "-100%", opacity: 0 }}
                whileHover={{ x: "100%", opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(200,169,106,0.15), transparent)",
                }}
              />

              {/* Top-edge accent line */}
              <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          </Html>
        </group>
      ))}
    </group>
  );
};
