"use client";
import React, { useRef } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { StorytellingStep } from '@/constants/storytelling';

interface ScrollAdventureProps {
  steps?: StorytellingStep[];
  id?: string;
}

export default function ScrollAdventure({ steps = [], id }: ScrollAdventureProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const numOfPages = steps?.length || 0;
  
  // Create a scroll height based on number of slides (e.g., 100vh per slide)
  const totalHeight = numOfPages * 100; // in vh

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate which page is active based on scroll progress
  // progress 0 to 1. 
  // If we have 5 pages, each page is 0.2 wide.
  const [currentPage, setCurrentPage] = React.useState(1);
  
  // We use useTransform to update state? No, that's better for animations.
  // Let's use a simpler approach for the state to keep the indicators working.
  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const page = Math.min(
        Math.floor(latest * numOfPages) + 1,
        numOfPages
      );
      if (page !== currentPage) {
        setCurrentPage(page);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, numOfPages, currentPage]);

  if (numOfPages === 0) return null;

  return (
    <div 
      id={id}
      ref={containerRef}
      className={`relative`}
      style={{ height: `${totalHeight}vh` }}
    >
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black text-white">
        
        {steps.map((page, i) => {
          const idx = i + 1;
          const isActive = currentPage === idx;
          
          // Animation Logic using progress relative to this specific slide
          // Each slide's range: [i/N, (i+1)/N]
          
          return (
            <AnimatePresence key={idx}>
              {isActive && (
                <div className="absolute inset-0">
                  {/* Left Half (Sliding Down to Enter) */}
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1] }}
                    className="absolute top-0 left-0 w-1/2 h-full z-20 overflow-hidden"
                  >
                    <div
                      className="w-full h-full bg-cover bg-center bg-no-repeat relative"
                      style={{ backgroundImage: `url(${page.leftImage || page.bgImage})` }}
                    >
                      <div className="absolute inset-0 bg-black/60" />
                      
                      {page.overlayType === 'grain' && (
                        <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay animate-[noise_0.2s_infinite]" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
                      )}

                      <div className="flex flex-col items-center justify-center h-full text-white p-12 relative z-10">
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4, duration: 0.8 }}
                          className="text-right w-full max-w-lg"
                        >
                          <span className="text-accent font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block opacity-80">
                            {page.leftLabel || "Pillar Alpha"}
                          </span>
                          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-none text-white/90">
                            {page.year || "Timeline"}
                          </h2>
                          {page.leftText && (
                             <p className="text-lg text-white/50 font-light italic leading-relaxed">
                               &quot;{page.leftText}&quot;
                             </p>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right Half (Sliding Up to Enter) */}
                  <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1] }}
                    className="absolute top-0 left-1/2 w-1/2 h-full z-20 overflow-hidden"
                  >
                    <div
                      className="w-full h-full bg-cover bg-center bg-no-repeat relative"
                      style={{ backgroundImage: `url(${page.rightImage || page.bgImage})` }}
                    >
                      <div className="absolute inset-0 bg-accent/5 backdrop-blur-[1px]" />
                      <div className="absolute inset-0 bg-black/40" />

                      {page.overlayType === 'grid' && (
                        <div className="absolute inset-0 opacity-20 pointer-events-none" 
                             style={{ backgroundImage: 'linear-gradient(rgba(200,169,106,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,106,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
                        />
                      )}

                      <div className="flex flex-col items-center justify-center h-full text-white p-12 relative z-10">
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4, duration: 0.8 }}
                          className="text-left w-full max-w-lg"
                        >
                          <span className="text-accent font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block opacity-80">
                            {page.rightLabel || "Pillar Beta"}
                          </span>
                          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-none text-accent">
                            {page.title || "The Narrative"}
                          </h2>
                          {page.rightText ? (
                             <p className="text-lg text-white/50 font-light italic leading-relaxed">
                               &quot;{page.rightText}&quot;
                             </p>
                          ) : (
                            <div className="space-y-4">
                              <p className="text-2xl font-bold text-white leading-tight">
                                {page.text}
                              </p>
                              {page.subtext && (
                                <p className="text-accent font-bold tracking-widest uppercase text-sm">
                                  {page.subtext}
                                </p>
                              )}
                            </div>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Shared Effects Layer */}
                  <div className="absolute inset-0 z-30 pointer-events-none">
                    {page.overlayType === 'nodes' && (
                      <div className="absolute inset-0 overflow-hidden">
                        {[...Array(12)].map((_, ni) => (
                           <motion.div
                            key={ni}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: [0, 0.4, 0], scale: [0, 1.2, 0.8], x: [null, (Math.random() * 100 - 50) + "px"] }}
                            transition={{ duration: 4, repeat: Infinity, delay: ni * 0.3 }}
                            className="absolute w-2 h-2 bg-accent rounded-full blur-[2px]"
                            style={{ top: Math.random() * 100 + "%", left: Math.random() * 100 + "%" }}
                           />
                        ))}
                      </div>
                    )}
                    <div className="absolute inset-0 opacity-20">
                      {[...Array(10)].map((_, pi) => (
                        <motion.div
                          key={pi}
                          initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
                          animate={{ y: ["-10%", "110%"] }}
                          transition={{ duration: Math.random() * 8 + 8, repeat: Infinity, ease: "linear" }}
                          className="absolute w-px h-24 bg-gradient-to-b from-transparent via-accent/50 to-transparent"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </AnimatePresence>
          );
        })}

        {/* HUD Elements (Always Visible) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/10 bg-black/60 backdrop-blur-2xl flex items-center justify-center relative overflow-hidden shadow-[0_0_50px_rgba(200,169,106,0.1)]">
            <div className="absolute inset-0 bg-accent/5 animate-pulse" />
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 1.5, opacity: 0, rotate: 45 }}
                className="flex flex-col items-center"
              >
                <span className="text-2xl md:text-3xl font-black text-accent mb-1 leading-none">0{currentPage}</span>
                <div className="w-8 h-[1px] bg-accent/30" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
          <span className="text-[9px] font-bold text-accent uppercase tracking-[0.4em] rotate-90 origin-right translate-x-4 mb-8">Evolution</span>
          {steps.map((_, i) => (
            <div
              key={i}
              className={`w-1 transition-all duration-700 rounded-full ${
                currentPage === i + 1 ? 'h-16 bg-accent' : 'h-2 bg-white/10'
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-12 left-12 z-50 hidden md:block">
          <div className="flex items-center gap-4 text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">
            <span>Institutional Heritage</span>
            <div className="w-12 h-[1px] bg-white/10" />
            <span>Next-Gen Systems</span>
          </div>
        </div>

      </div>

      <style jsx global>{`
        @keyframes noise {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -5%); }
          20% { transform: translate(-10%, 5%); }
          30% { transform: translate(5%, -10%); }
          40% { transform: translate(-5%, 15%); }
          50% { transform: translate(-10%, 5%); }
          60% { transform: translate(15%, 0); }
          70% { transform: translate(0, 10%); }
          80% { transform: translate(-15%, 0); }
          90% { transform: translate(10%, 5%); }
        }
      `}</style>
    </div>
  );
}
