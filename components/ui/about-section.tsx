"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { aboutTags } from "@/constants";

/* ─── Scroll-driven reveal hook ─── */
function useReveal(rootMargin = "-80px") {
  const ref = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inView = useInView(ref, { once: true, margin: rootMargin as any });
  return { ref, inView };
}

/* ─── Animated counter ─── */
function AnimatedNumber({ value }: { value: string }) {
  const { ref, inView } = useReveal("-40px");
  const num = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  const count = useRef(0);
  const [display, setDisplay] = useState("0");

  // Trigger count when in view
  const startCount = () => {
    if (count.current !== 0) return;
    count.current = 1;
    const duration = 1800;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * num).toString());
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  return (
    <span ref={ref} onLoad={inView ? startCount : undefined}>
      {inView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onAnimationComplete={startCount}
        >
          {display}{suffix}
        </motion.span>
      ) : "0"}
    </span>
  );
}

/* ─── Pillar card with hover reveal ─── */
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
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group cursor-default"
    >
      {/* Left glow border */}
      <motion.div
        className="absolute left-0 top-0 w-[2px] h-full rounded-full origin-bottom"
        style={{ background: "linear-gradient(to top, #C8A96A, transparent)" }}
        animate={{ scaleY: hovered ? 1 : 0.3, opacity: hovered ? 1 : 0.3 }}
        transition={{ duration: 0.4 }}
      />

      <div className="pl-8 pr-4 py-6 rounded-r-2xl transition-all duration-500"
        style={{
          background: hovered
            ? "linear-gradient(90deg, rgba(200,169,106,0.06) 0%, transparent 100%)"
            : "transparent",
        }}
      >
        {/* Index */}
        <div className="flex items-center gap-4 mb-3">
          <span
            className="text-[10px] font-black tracking-[0.2em] tabular-nums"
            style={{ color: "#C8A96A" }}
          >
            {String(index).padStart(2, "0")}
          </span>
          <div
            className="flex-1 h-px transition-all duration-500"
            style={{
              background: hovered
                ? "linear-gradient(90deg, rgba(200,169,106,0.4), transparent)"
                : "rgba(255,255,255,0.05)",
            }}
          />
        </div>

        <h4 className="text-base font-bold font-syne mb-2 transition-colors duration-300"
          style={{ color: hovered ? "#C8A96A" : "#e8e8f0" }}
        >
          {title}
        </h4>
        <p className="text-sm leading-relaxed transition-colors duration-300"
          style={{ color: hovered ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.35)" }}
        >
          {body}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Stat card ─── */
function StatCard({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  const { ref, inView } = useReveal("-20px");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className="relative p-6 rounded-2xl overflow-hidden group cursor-default"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
      whileHover={{
        borderColor: "rgba(200,169,106,0.3)",
        background: "rgba(200,169,106,0.04)",
      }}
    >
      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle at top right, rgba(200,169,106,0.2), transparent 70%)",
        }}
      />
      <p
        className="text-3xl md:text-4xl font-black font-syne leading-none mb-2"
        style={{ color: "#C8A96A" }}
      >
        <AnimatedNumber value={value} />
      </p>
      <p
        className="text-[11px] font-bold tracking-widest uppercase"
        style={{ color: "rgba(255,255,255,0.35)" }}
      >
        {label}
      </p>
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
      className={`overflow-hidden rounded-3xl ${className ?? ""}`}
      style={{ border: "1px solid rgba(200,169,106,0.1)" }}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-full object-cover scale-110"
      />
      {/* Overlay gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(5,5,16,0.5) 0%, transparent 50%)",
        }}
      />
    </motion.div>
  );
}

/* ─── Main About Section ─── */
export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const lineProgress = useTransform(scrollYProgress, [0.05, 0.4], [0, 1]);

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

  const stats = [
    { value: "15+", label: "Institutions Managed" },
    { value: "50k+", label: "People Impacted" },
    { value: "45+", label: "Active Projects" },
    { value: "10+", label: "Years in UAE" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #06060f 0%, #050510 50%, #06060f 100%)" }}
    >
      {/* ── Animated mesh background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(200,169,106,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,106,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Radial glows */}
        <motion.div
          className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(200,169,106,0.06) 0%, transparent 65%)",
            y: bgY,
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(14,165,233,0.04) 0%, transparent 65%)",
          }}
        />
        {/* Corner lines */}
        <div
          className="absolute top-20 left-20 w-32 h-32 pointer-events-none"
          style={{
            borderTop: "1px solid rgba(200,169,106,0.15)",
            borderLeft: "1px solid rgba(200,169,106,0.15)",
            borderRadius: "4px 0 0 0",
          }}
        />
        <div
          className="absolute bottom-20 right-20 w-32 h-32 pointer-events-none"
          style={{
            borderBottom: "1px solid rgba(200,169,106,0.15)",
            borderRight: "1px solid rgba(200,169,106,0.15)",
            borderRadius: "0 0 4px 0",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-40">

        {/* ══ SECTION HEADER ══ */}
        <div className="flex items-center gap-6 mb-24">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.35em] uppercase px-5 py-2.5 rounded-full"
            style={{
              background: "rgba(200,169,106,0.08)",
              color: "#C8A96A",
              border: "1px solid rgba(200,169,106,0.2)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#C8A96A" }}
            />
            Who We Are
          </motion.span>

          {/* Animated progress line */}
          <div className="flex-1 overflow-hidden h-px" style={{ background: "rgba(255,255,255,0.05)" }}>
            <motion.div
              className="h-full origin-left"
              style={{
                scaleX: lineProgress,
                background: "linear-gradient(90deg, #C8A96A, rgba(200,169,106,0.2))",
              }}
            />
          </div>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[10px] font-bold tracking-widest uppercase"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            Est. 2014 · Dubai, UAE
          </motion.span>
        </div>

        {/* ══ MAIN GRID ══ */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── LEFT: Image composition ── */}
          <div className="relative order-2 lg:order-1 lg:sticky lg:top-32">
            {/* Primary image */}
            <div className="relative">
              <ImageFrame
                src="/Images/ezgif-frame-12.jpg"
                alt="Seed UAE 2021 - Modern Innovation"
                delay={0.1}
                yRange={["-6%", "6%"]}
                className="relative h-[420px] lg:h-[540px] w-full shadow-2xl"
              />

              {/* Floating tag — top left */}
              <motion.div
                className="absolute -top-5 -left-5 px-5 py-3 rounded-xl backdrop-blur-md z-10"
                style={{
                  background: "rgba(5,5,16,0.85)",
                  border: "1px solid rgba(200,169,106,0.25)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                }}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <p className="text-2xl font-black font-syne leading-none mb-0.5" style={{ color: "#C8A96A" }}>
                  15+
                </p>
                <p className="text-[9px] font-bold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Institutions
                </p>
              </motion.div>

              {/* Scan line animation */}
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden"
                aria-hidden
              >
                <motion.div
                  className="absolute left-0 right-0 h-[1px]"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(200,169,106,0.6), transparent)" }}
                  animate={{ top: ["0%", "100%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                />
              </motion.div>
            </div>

            {/* Secondary image — offset bottom right */}
            <div className="absolute -bottom-12 -right-6 w-[48%] hidden md:block z-10">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl"
                style={{
                  border: "4px solid rgba(5,5,16,0.9)",
                  outline: "1px solid rgba(200,169,106,0.15)",
                }}
              >
                <ImageFrame
                  src="/Images/ezgif-frame-2.jpg"
                  alt="NIMS Dubai 1980 - Heritage Roots"
                  delay={0.25}
                  yRange={["8%", "-8%"]}
                  className="h-[200px] w-full"
                />
              </div>
              {/* Badge on secondary image */}
              <motion.div
                className="absolute bottom-4 left-4 px-4 py-3 rounded-xl backdrop-blur-md"
                style={{
                  background: "rgba(5,5,16,0.9)",
                  border: "1px solid rgba(200,169,106,0.2)",
                }}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-[9px] font-bold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
                    50k+ Lives Impacted
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div className="flex flex-col order-1 lg:order-2 lg:pt-4">

            {/* Headline */}
            <motion.h2
              className="font-bold font-syne leading-[1.05] tracking-tight mb-8"
              style={{
                fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                color: "#e8e8f0",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Empowering{" "}
              <span
                className="italic font-serif"
                style={{
                  background: "linear-gradient(135deg, #C8A96A 0%, #e8c97a 50%, #C8A96A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Institutions
              </span>{" "}
              for the Next Generation.
            </motion.h2>

            {/* Body */}
            <motion.p
              className="text-base lg:text-lg leading-relaxed mb-14"
              style={{ color: "rgba(255,255,255,0.45)" }}
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
            <div className="space-y-1 mb-12">
              {pillars.map((p, i) => (
                <PillarCard
                  key={i}
                  index={i + 1}
                  title={p.title}
                  body={p.body}
                  delay={0.15 + i * 0.08}
                />
              ))}
            </div>

            {/* Tags */}
            <motion.div
              className="flex flex-wrap gap-2 mb-12"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {aboutTags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg cursor-default transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.35)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#C8A96A";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,169,106,0.3)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(200,169,106,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Divider */}
            <div className="h-px mb-12" style={{ background: "rgba(255,255,255,0.06)" }} />

            {/* CTA row */}
            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <a
                href="#services"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 group"
                style={{
                  background: "#C8A96A",
                  color: "#050510",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(200,169,106,0.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                Explore Our Services
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-xs transition-all duration-300"
                style={{ color: "rgba(255,255,255,0.35)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#C8A96A"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)"; }}
              >
                Contact Us
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>

        {/* ══ STATS BAND ══ */}
        <div
          className="mt-28 lg:mt-36 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((s, i) => (
            <StatCard key={i} value={s.value} label={s.label} delay={i * 0.08} />
          ))}
        </div>

      </div>

      {/* ── Bottom separator ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(200,169,106,0.2), transparent)" }}
      />
    </section>
  );
}
