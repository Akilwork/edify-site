"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export const Navbar = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[100] px-6 py-4 md:px-12 md:py-6 pointer-events-none"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LEFT: Minimal animated hamburger icon */}
        <div className="flex-1 pointer-events-auto">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="group p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all shadow-lg shadow-black/20"
          >
            <Menu className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
          </motion.button>
        </div>


        {/* CENTER: EDIFY logo */}
        <div className="flex-1 flex justify-center pointer-events-auto">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center font-bold text-gray-900 group-hover:scale-110 transition-transform">E</div>
            <span className="font-syne font-bold text-white text-xl tracking-tighter uppercase">Edify</span>
          </div>
        </div>

        {/* RIGHT: Rounded glassmorphism Login button */}
        <div className="flex-1 flex justify-end pointer-events-auto">
          <button className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-accent hover:text-gray-900 hover:border-accent transition-all font-bold text-xs uppercase tracking-widest text-white active:scale-95 shadow-lg shadow-black/20">
            Login
          </button>
        </div>
      </nav>
    </motion.header>
  );
};
