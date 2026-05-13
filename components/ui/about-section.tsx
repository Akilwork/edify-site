"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { aboutTags } from "@/constants";
import { ScrollRevealText } from "./scroll-reveal-text";
import { ArrowRight } from "lucide-react";

/* ─── Scroll-driven reveal hook ─── */
function useReveal(rootMargin = "-80px") {
  const ref = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inView = useInView(ref, { once: true, margin: rootMargin as any });
  return { ref, inView };
}



/* ─── Pillar card ─── */
function PillarCard({
  index,
  title,
  body,
  delay,
}: {
  index: number;
  title: string;
  body: string;
  delay: number;
}) {
  const { ref, inView } = useReveal("-40px");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-accent/40 hover:bg-white/[0.05] transition-all duration-500 relative overflow-hidden group cursor-default h-full flex flex-col justify-between"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors" />

      <div>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-white/20 font-black text-4xl tracking-tighter group-hover:text-accent/40 transition-colors duration-500">
            0{index}
          </span>
        </div>

        <h4 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-500 text-white">
          {title}
        </h4>
        <p className="text-white/50 leading-relaxed text-sm">
          {body}
        </p>
      </div>
    </motion.div>
  );
}


/* ─── Image frame with parallax ─── */
function ImageFrame({
  src,
  alt,
  delay,
  yRange,
  className,
}: {
  src: string;
  alt: string;
  delay: number;
  yRange: [string, string];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden rounded-[2.5rem] relative group ${className ?? ""}`}
      style={{ border: "1px solid rgba(255,255,255,0.05)" }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-[1.5s] ease-out"
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/80 via-transparent to-transparent pointer-events-none" />
    </motion.div>
  );
}

/* ─── Main About Section ─── */
export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const pillars = [
    {
      title: "UAE Rooted Heritage",
      body: "Headquartered in Dubai with deep institutional ties across the Emirates, navigating the regional landscape with precision.",
    },
    {
      title: "Innovation-Driven Strategy",
      body: "Integrating cutting-edge technology and modern methodologies to deliver solutions that are future-ready.",
    },
    {
      title: "Unified Service Model",
      body: "A single, trusted partner for academic, HR, and facilities management—eliminating silos and driving growth.",
    },
  ];


  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-40 px-6 bg-[#0a0a1a] relative overflow-hidden"
    >
      {/* ── Decorative background elements ── */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto z-10">

        {/* ══ SECTION HEADER ══ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-[1px] bg-accent" />
              <span className="text-accent font-bold tracking-[0.4em] uppercase text-xs">Who We Are</span>
            </motion.div>

            <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
              <ScrollRevealText
                text="Empowering Institutions for the Next Generation."
                className="font-bold font-syne leading-[1.1] tracking-tight"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 text-white/40 text-sm font-bold tracking-widest uppercase mb-4 md:mb-8"
          >
            Est. 2014 <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> Dubai, UAE
          </motion.div>
        </div>

        {/* ══ MAIN GRID ══ */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── LEFT: Content ── */}
          <div className="flex flex-col order-2 lg:order-1 lg:pt-4">
            
            {/* Body */}
            <motion.p
              className="text-white/60 text-lg md:text-xl leading-relaxed mb-14 font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              EDIFY Management Consultancy LLP is a forward-thinking organization delivering
              integrated support services across education, HR, and business operations.
              With deep roots in the UAE, we bridge the gap between strategy and sustainable execution.
            </motion.p>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {pillars.map((p, i) => (
                <div key={i} className={i === 2 ? "sm:col-span-2" : ""}>
                  <PillarCard
                    index={i + 1}
                    title={p.title}
                    body={p.body}
                    delay={0.15 + i * 0.08}
                  />
                </div>
              ))}
            </div>

            {/* Tags */}
            <motion.div
              className="flex flex-wrap gap-3 mb-14"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {aboutTags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-white/50 hover:text-white hover:border-accent/40 hover:bg-white/[0.08] transition-all duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="pt-8 border-t border-white/10"
            >
              <a
                href="#services"
                className="inline-flex items-center gap-3 text-accent font-bold uppercase tracking-[0.2em] text-xs group hover:text-white transition-colors duration-300"
              >
                Explore Our Services 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: Image composition ── */}
          <div className="relative order-1 lg:order-2 lg:sticky lg:top-32">
            {/* Primary image */}
            <div className="relative">
              <ImageFrame
                src="/Images/ezgif-frame-12.jpg"
                alt="Seed UAE 2021 - Modern Innovation"
                delay={0.1}
                yRange={["-6%", "6%"]}
                className="relative h-[450px] lg:h-[600px] w-full shadow-2xl"
              />

              {/* Floating tag — top left */}
              <motion.div
                className="absolute -top-6 -left-6 p-6 rounded-[2rem] backdrop-blur-md z-10 border border-white/10 shadow-2xl"
                style={{ background: "rgba(10,10,26,0.85)" }}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="absolute inset-0 bg-accent/10 rounded-[2rem] blur-md" />
                <div className="relative">
                  <p className="text-3xl font-black font-syne leading-none mb-1 text-accent">
                    15+
                  </p>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-white/50">
                    Institutions
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Secondary image — offset bottom right */}
            <div className="absolute -bottom-16 -right-8 w-[55%] hidden md:block z-10">
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl bg-[#0a0a1a] p-2 border border-white/5">
                <ImageFrame
                  src="/Images/ezgif-frame-2.jpg"
                  alt="NIMS Dubai 1980 - Heritage Roots"
                  delay={0.25}
                  yRange={["8%", "-8%"]}
                  className="h-[220px] w-full rounded-[2rem]"
                />
              </div>
            </div>
          </div>

        </div>

        {/* ══ STATS BAND ══ */}
        {/* <div className="mt-32 lg:mt-40 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <StatCard key={i} value={s.value} label={s.label} delay={i * 0.08} />
          ))}
        </div> */}

      </div>
    </section>
  );
}
