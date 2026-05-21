"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-12 md:pt-16 pb-0 px-6 relative overflow-hidden group font-inter">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-12">
          {/* Left Side: Call to Action */}
          <div className="flex-1">
            <h2 className="text-[6vw] lg:text-[100px] font-semibold leading-none tracking-tight mb-12">
              Build With Us
            </h2>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-neutral-900 px-8 py-4 rounded-full flex items-center gap-4 group transition-all duration-300"
            >
              <span className="text-sm font-semibold tracking-wide">Get a Free Schedule</span>
              <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center group-hover:bg-neutral-700 transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </motion.button> */}
          </div>

          {/* Right Side: Info Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Location */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-6">Location</h3>
              <p className="text-lg font-medium leading-relaxed max-w-[280px]">
                Business Bay, <br />
                Dubai, United Arab Emirates.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-6">Contact</h3>
              <div className="space-y-2">
                <a href="mailto:info@edifyconsultancy.com" className="block text-lg font-medium hover:text-white/70 transition-colors">
                  info@edifyconsultancy.com
                </a>
                <a href="tel:+9710000000" className="block text-lg font-medium hover:text-white/70 transition-colors">
                  +971 4 000 0000
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-6">Social Media</h3>
              <div className="grid grid-cols-2 gap-y-4">
                <a href="#" className="flex items-center gap-2 group text-sm font-semibold tracking-wide hover:text-white/70 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </div>
                  Facebook
                </a>
                <a href="#" className="flex items-center gap-2 group text-sm font-semibold tracking-wide hover:text-white/70 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </div>
                  Linkedin
                </a>
                <a href="#" className="flex items-center gap-2 group text-sm font-semibold tracking-wide hover:text-white/70 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </div>
                  Twitter
                </a>
                <a href="#" className="flex items-center gap-2 group text-sm font-semibold tracking-wide hover:text-white/70 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z"/><path d="m10 15 5-3-5-3z"/></svg>
                  </div>
                  Youtube
                </a>
              </div>
            </div>

            {/* Helpful Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-6">Helpful Links</h3>
              <div className="grid grid-cols-2 gap-y-2">
                <a href="#projects" className="text-sm font-semibold tracking-wide hover:text-white/70 transition-colors">Our Projects</a>
                <a href="#about" className="text-sm font-semibold tracking-wide hover:text-white/70 transition-colors">About Us</a>
                <a href="#news" className="text-sm font-semibold tracking-wide hover:text-white/70 transition-colors">Blog & News</a>
                <a href="#careers" className="text-sm font-semibold tracking-wide hover:text-white/70 transition-colors">Careers</a>
                <a href="#contact" className="text-sm font-semibold tracking-wide hover:text-white/70 transition-colors">Contact Us</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm font-medium tracking-tight">
            Copyright © {new Date().getFullYear()} EDIFY. All rights reserved.
          </p>
          <div className="flex gap-8 text-white/40 text-sm font-medium tracking-tight">
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* Large "EDIFY" text at the bottom */}
      <div className="w-full flex justify-center items-start relative z-10 mt-4 overflow-hidden h-[21vw]">
        <span className="text-[28vw] font-black text-white leading-none tracking-tighter select-none uppercase whitespace-nowrap">
          EDIFY
        </span>
      </div>

      {/* Background Graphic (Construction Silhouette) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10" />
        <div 
          className="w-full h-full bg-cover bg-center mix-blend-luminosity opacity-20 grayscale transition-all duration-700" 
          style={{ 
            backgroundImage: "url('/Images/ezgif-frame-269.jpg')",
          }} 
        />
      </div>
    </footer>
  );
};

export default Footer;
  