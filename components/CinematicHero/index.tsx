"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { Scene } from "./Scene";
import { Navbar } from "../Navbar";

export const CinematicHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll progress for Three.js
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const headingScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const subheadingOpacity = useTransform(scrollYProgress, [0.05, 0.25], [1, 0]);
  
  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#050510]">
      {/* ── NAVBAR ── */}
      <Navbar />

      {/* ── THREE.JS BACKGROUND ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <Scene scrollProgress={scrollYProgress.get()} />
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-transparent to-[#050510] pointer-events-none z-[5]" />
        
        {/* ── HERO CONTENT (DOM) ── */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            style={{ opacity: headingOpacity, scale: headingScale }}
            className="max-w-7xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-accent">
                The Future of Management
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-6xl md:text-9xl font-syne font-bold leading-[0.9] tracking-tighter mb-10 text-white selection:bg-accent selection:text-gray-900"
            >
              Building Institutions.<br />
              Empowering Futures.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              style={{ opacity: subheadingOpacity }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 leading-relaxed mb-14 font-light"
            >
              From educational excellence to enterprise innovation,{" "}
              <span className="text-white/80 font-medium italic">EDIFY Management Consultancy LLP</span>{" "}
              connects visionary services under one integrated ecosystem inspired by the growth story of the UAE.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="flex flex-wrap justify-center items-center gap-6"
            >
              <button className="group relative px-10 py-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl text-white font-bold uppercase tracking-widest text-[11px] overflow-hidden transition-all hover:border-accent/40 active:scale-95 shadow-2xl">
                <span className="relative z-10 flex items-center gap-3">
                  Explore Ecosystem <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-accent translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button className="group px-10 py-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-white font-bold uppercase tracking-widest text-[11px] hover:bg-white/10 transition-all active:scale-95">
                Our Journey
              </button>

              <button className="flex items-center gap-3 text-white/40 font-bold uppercase tracking-[0.3em] text-[10px] hover:text-accent transition-colors group">
                <div className="w-8 h-[1px] bg-white/10 group-hover:bg-accent group-hover:w-12 transition-all" />
                View Institutions
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* ── SCROLL INDICATOR ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20 pointer-events-none"
        >
          <div className="w-6 h-10 rounded-full border border-white/10 flex justify-center p-1.5 backdrop-blur-sm">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1 rounded-full bg-accent" 
            />
          </div>
          <span className="text-[9px] font-black uppercase tracking-[0.6em] text-white/20">Scroll to Enter</span>
        </motion.div>
      </div>

      {/* ── STORYTELLING SECTIONS (Placeholders for zoom content) ── */}
      <div className="relative z-30 pointer-events-none">
        <div className="h-screen" /> {/* Scene 1: Entry */}
        
        {/* Section: Institution Zoom (Active Reveal) */}
        <section className="h-screen flex items-center justify-center px-6">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            className="max-w-4xl w-full p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl pointer-events-auto"
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Active Institution</span>
                <h2 className="text-5xl font-syne font-bold text-white mb-8">Loyaltri Ecosystem</h2>
                <p className="text-white/40 text-lg leading-relaxed mb-10">
                  Driving digital HR transformation across the Middle East with innovative cloud-based solutions and people-centric technology.
                </p>
                <div className="flex gap-12">
                  <div>
                    <span className="block text-3xl font-black text-white mb-1">150+</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/20">Enterprises</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-black text-white mb-1">98%</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/20">Retention</span>
                  </div>
                </div>
              </div>
              <div className="aspect-square rounded-[2rem] bg-gradient-to-br from-accent/20 to-transparent border border-white/10 flex items-center justify-center">
                <Sparkles className="w-24 h-24 text-accent/20" />
              </div>
            </div>
          </motion.div>
        </section>
        
        <div className="h-screen" /> {/* Next stages... */}
      </div>
    </div>
  );
};
