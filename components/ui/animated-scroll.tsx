"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const pages = [
  {
    leftBgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&auto=format&fit=crop&q=60',
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: 'Technology & Infrastructure',
      description: 'Enabling organizations with modern tools, systems, and infrastructure.',
    },
  },
  {
    leftBgImage: null,
    rightBgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&auto=format&fit=crop&q=60',
    leftContent: {
      heading: 'Software Solutions',
      description: 'Expert Software Consultancy and custom Software Development tailored to your business needs.',
    },
    rightContent: null,
  },
  {
    leftBgImage: 'https://images.unsplash.com/photo-1561070791-26c145824e4d?w=900&auto=format&fit=crop&q=60',
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: 'Design & Supplies',
      description: 'Creative Printing & Designing Solutions along with comprehensive Uniform & Office Supplies.',
    },
  },
  {
    leftBgImage: null,
    rightBgImage: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&auto=format&fit=crop&q=60',
    leftContent: {
      heading: 'Garage Operations',
      description: 'Reliable Vehicle Maintenance Services to keep your fleet running smoothly and efficiently.',
    },
    rightContent: null,
  },
  {
    leftBgImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop&q=60',
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: 'Build the Future',
      description: (
        <div className="space-y-4">
          <p>Ready to upgrade your infrastructure?</p>
          <button className="px-6 py-2 border border-white hover:bg-white hover:text-black transition-colors duration-300">
            Contact Us
          </button>
        </div>
      ),
    },
  },
];

export default function ScrollAdventure() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        {pages.map((page, i) => {
          const start = i / pages.length;
          const end = (i + 1) / pages.length;
          
          // Custom transforms for each slide to create the split-screen scroll effect
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const leftY = useTransform(scrollYProgress, [start, end], ["100%", "0%"]);
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const rightY = useTransform(scrollYProgress, [start, end], ["-100%", "0%"]);
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const opacity = useTransform(scrollYProgress, 
            [start, start + 0.1, end - 0.1, end], 
            [0, 1, 1, 0]
          );

          return (
            <motion.div 
              key={i} 
              className="absolute inset-0 z-10 pointer-events-none"
              style={{ opacity: i === pages.length - 1 ? 1 : opacity }}
            >
              {/* Left Half */}
              <motion.div
                className="absolute top-0 left-0 w-1/2 h-full"
                style={{ y: leftY }}
              >
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat relative"
                  style={{ backgroundImage: page.leftBgImage ? `url(${page.leftBgImage})` : undefined }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="relative flex flex-col items-center justify-center h-full text-white p-8">
                    {page.leftContent && (
                      <div className="max-w-md text-center">
                        <h2 className="text-4xl font-bold uppercase mb-6 tracking-wider">
                          {page.leftContent.heading}
                        </h2>
                        <p className="text-xl font-light leading-relaxed">
                          {page.leftContent.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Right Half */}
              <motion.div
                className="absolute top-0 left-1/2 w-1/2 h-full"
                style={{ y: rightY }}
              >
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat relative"
                  style={{ backgroundImage: page.rightBgImage ? `url(${page.rightBgImage})` : undefined }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="relative flex flex-col items-center justify-center h-full text-white p-8">
                    {page.rightContent && (
                      <div className="max-w-md text-center">
                        <h2 className="text-4xl font-bold uppercase mb-6 tracking-wider">
                          {page.rightContent.heading}
                        </h2>
                        {typeof page.rightContent.description === 'string' ? (
                          <p className="text-xl font-light leading-relaxed">
                            {page.rightContent.description}
                          </p>
                        ) : (
                          <div className="text-xl font-light leading-relaxed">
                            {page.rightContent.description}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
