"use client";

import { motion } from "framer-motion";
import { visitReasons } from "@/constants";
import { useState, useRef, useEffect } from "react";

export function WhyPeopleVisitSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll to active item when index changes
  useEffect(() => {
    if (itemRefs.current[activeIndex]) {
      itemRefs.current[activeIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  // Handle scroll wheel to change active index
  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    
    if (e.deltaY > 0) {
      // Scroll down
      setActiveIndex((prev) => (prev === visitReasons.length - 1 ? 0 : prev + 1));
    } else {
      // Scroll up
      setActiveIndex((prev) => (prev === 0 ? visitReasons.length - 1 : prev - 1));
    }
  };

  // Determine which index to display image for (hover takes priority)
  const displayIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  return (
    <section className="py-32 px-6 text-gray-900 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <motion.span
            className="text-gray-500 font-bold tracking-widest uppercase text-xs mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why People Visit EDIFY
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Visitors Come Here To
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Discover how EDIFY connects institutions, services, and innovation across the UAE educational ecosystem.
          </motion.p>
        </div>

        {/* Two Column Layout: Cards Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column: Card List */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Scrollable List of Reasons - with wheel scroll handling */}
            <div
              ref={scrollContainerRef}
              onWheel={handleScroll}
              className="space-y-3 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar"
            >
              {visitReasons.map((reason, index) => (
                <motion.div
                  key={index}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className={`p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer group ${
                    displayIndex === index
                      ? "bg-gray-100 border-gray-400 shadow-lg ring-2 ring-gray-300"
                      : "bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ x: 4 }}
                >
                  <h3
                    className={`font-bold text-base transition-colors ${
                      displayIndex === index ? "text-gray-900" : "text-gray-900 group-hover:text-gray-700"
                    }`}
                  >
                    {reason.title}
                  </h3>
                  <p
                    className={`text-sm mt-2 transition-colors ${
                      displayIndex === index ? "text-gray-700" : "text-gray-600 group-hover:text-gray-700"
                    }`}
                  >
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Image Display */}
          <motion.div
            className="relative sticky top-20"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {/* Main Image Display */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <motion.img
                key={displayIndex}
                src={visitReasons[displayIndex].image}
                alt={visitReasons[displayIndex].title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Image Info Overlay */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-white">{visitReasons[displayIndex].title}</h3>
                <p className="text-white/90 mt-2 text-sm">{visitReasons[displayIndex].description}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom Scrollbar Styles - HIDDEN */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
