"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollRevealTextProps {
  /** The full text to animate. Words are split automatically. */
  text: string;
  className?: string;
  /**
   * Number of words that start fully visible (dark) before the
   * scroll-driven reveal begins. Defaults to 0.
   */
  leadWords?: number;
}

/**
 * Reveals each word as the user scrolls through the section.
 * Words start at low opacity and animate to full opacity one by one,
 * mimicking the Bienes-style progressive text reveal.
 */
export function ScrollRevealText({
  text,
  className = "",
  leadWords = 0,
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start when the top of the element hits 80% of the viewport,
    // finish when the bottom hits 20% of the viewport.
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={className}>
      <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-center">
        {words.map((word, i) => {
          // Each word animates when scrollYProgress crosses its threshold
          const start = leadWords > 0 && i < leadWords ? 0 : i / words.length;
          const end =
            leadWords > 0 && i < leadWords ? 0 : (i + 1) / words.length;

          return (
            <Word
              key={i}
              word={word}
              progress={scrollYProgress}
              start={start}
              end={end}
              alwaysVisible={i < leadWords}
            />
          );
        })}
      </p>
    </div>
  );
}

interface WordProps {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
  alwaysVisible?: boolean;
}

function Word({ word, progress, start, end, alwaysVisible }: WordProps) {
  const opacity = useTransform(progress, [start, end], [0.15, 1]);

  return (
    <motion.span
      style={alwaysVisible ? undefined : { opacity }}
      className="inline-block mr-[0.3em]"
    >
      {word}
    </motion.span>
  );
}
