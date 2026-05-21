"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState, useRef } from "react";

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 100);

    if (latest > lastYRef.current && latest > 150) {
      // scrolling down
      setIsHidden(true);
    } else if (latest < lastYRef.current) {
      // scrolling up
      setIsHidden(false);
    }

    lastYRef.current = latest;
  });

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isHidden ? -100 : 0, opacity: isHidden ? 0 : 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-4 left-4 right-4 z-[100] pointer-events-none"
    >
      <nav 
        className={`max-w-7xl mx-auto flex items-center justify-between p-4 rounded-[2rem] backdrop-blur-xl shadow-lg shadow-black/10 relative overflow-hidden transition-colors duration-500 ${
          isScrolled 
            ? "bg-white/95 border border-gray-200" 
            : "bg-white/[0.02] border border-white/5"
        }`}
      >
        {/* Subtle background glow */}
        <div className={`absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none transition-opacity duration-500 ${isScrolled ? 'opacity-50' : 'opacity-100'}`} />
        
        {/* LEFT: Navigation Links - Desktop only */}
        <div className="hidden md:flex items-center gap-8 pointer-events-auto relative z-10">
          {[
            { label: "Overview", href: "#overview" },
            { label: "Our Services", href: "#services" },
            { label: "Team", href: "#team" },
            { label: "Our Group Companies", href: "#group" }
          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className={`text-sm font-medium transition-colors duration-300 cursor-pointer relative group hover:text-accent ${isScrolled ? "text-gray-900 font-semibold" : "text-white/60"}`}
            >
              {item.label}
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* CENTER: EDIFY Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          <motion.div 
            className="flex items-center cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <img 
                src="/Edify Logo/Edify logo.png" 
                alt="Edify Logo" 
                className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-xl bg-accent/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        </div>

        {/* RIGHT: CTA Button */}
        <div className="flex items-center gap-4 pointer-events-auto relative z-10">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group px-6 py-3 rounded-2xl bg-gradient-to-r from-primary to-primary/80 border border-primary/20 hover:border-accent/30 hover:from-accent/20 hover:to-accent/10 transition-all duration-300 cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-2">
              <span className="font-bold text-sm text-white group-hover:text-accent transition-colors duration-300">
                Contact
              </span>
              <ArrowUpRight className="w-4 h-4 text-white/70 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </div>
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
};
