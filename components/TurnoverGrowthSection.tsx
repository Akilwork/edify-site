"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import {
  TrendingUp,
  Building2,
  Globe2,
  Layers,
  ArrowUpRight,
  Activity,
  CheckCircle2,
} from "lucide-react";

/* ─── Animated counter ─── */
function Counter({
  value,
  prefix = "",
  suffix = "",
  duration = 2.4,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, value, {
      duration,
      ease: [0.33, 1, 0.68, 1],
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => ctrl.stop();
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ─── Revenue curve SVG ─── */
function RevenueCurve() {
  const ref = useRef<SVGPathElement>(null);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const length = ref.current.getTotalLength();
    ref.current.style.strokeDasharray = `${length}`;
    ref.current.style.strokeDashoffset = `${length}`;
    ref.current.style.transition = "stroke-dashoffset 2.2s cubic-bezier(0.22,1,0.36,1) 0.3s";
    ref.current.style.strokeDashoffset = "0";
  }, [inView]);

  const years = ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"];
  const points = [
    [0, 90],
    [60, 82],
    [120, 78],
    [180, 65],
    [240, 52],
    [300, 38],
    [360, 22],
    [420, 8],
  ];

  const pathD =
    `M ${points[0][0]} ${points[0][1]} ` +
    points
      .slice(1)
      .map(
        ([x, y], i) =>
          `C ${points[i][0] + 30} ${points[i][1]}, ${x - 30} ${y}, ${x} ${y}`
      )
      .join(" ");

  const areaD =
    pathD + ` L ${points[points.length - 1][0]} 100 L ${points[0][0]} 100 Z`;

  return (
    <div ref={containerRef} className="relative w-full">
      <svg
        viewBox="0 0 420 110"
        className="w-full"
        preserveAspectRatio="none"
        style={{ height: "160px" }}
      >
        <defs>
          <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C8A96A" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#C8A96A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0F3D2E" />
            <stop offset="100%" stopColor="#C8A96A" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid lines */}
        {[25, 50, 75].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="420"
            y2={y}
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
          />
        ))}

        {/* Area fill */}
        <path d={areaD} fill="url(#curveGrad)" />

        {/* Main curve */}
        <path
          ref={ref}
          d={pathD}
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* Data points */}
        {points.map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="3.5"
            fill="#C8A96A"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 + i * 0.22, duration: 0.4 }}
          />
        ))}

        {/* End glow dot */}
        <motion.circle
          cx={points[points.length - 1][0]}
          cy={points[points.length - 1][1]}
          r="6"
          fill="#C8A96A"
          fillOpacity="0.3"
          initial={{ scale: 0 }}
          animate={inView ? { scale: [1, 1.6, 1] } : {}}
          transition={{ delay: 2.2, duration: 1.2, repeat: Infinity }}
        />
      </svg>

      {/* Year labels */}
      <div className="flex justify-between mt-2 px-0">
        {years.map((y) => (
          <span key={y} className="text-[9px] font-bold text-white/20 tracking-wider">
            {y}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Growth bar ─── */
function GrowthBar({
  label,
  value,
  max,
  delay,
}: {
  label: string;
  value: number;
  max: number;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const pct = (value / max) * 100;

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors">
          {label}
        </span>
        <span className="text-[11px] font-black text-accent tabular-nums">
          {value}+
        </span>
      </div>
      <div className="h-[3px] bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #0F3D2E, #C8A96A)",
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay }}
        />
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
export function TurnoverGrowthSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  const pillars = [
    {
      icon: Layers,
      title: "Multi-Sector Growth Strategy",
      desc: "Diversified revenue streams across education, HR, technology, and facilities management—reducing risk while maximizing institutional reach.",
    },
    {
      icon: Building2,
      title: "Expanding UAE Institutional Network",
      desc: "A growing footprint of partner institutions across multiple Emirates, each contributing to a compounding network effect.",
    },
    {
      icon: Globe2,
      title: "Diversified Educational & Enterprise Services",
      desc: "From academic management to enterprise operations, our service portfolio scales with every new institutional relationship.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Ecosystem Scaling",
      desc: "Systematic onboarding of new institutions and service lines ensures the ecosystem compounds in value year over year.",
    },
  ];

  const growthBars = [
    { label: "Active Institutions", value: 25, max: 40 },
    { label: "Pipeline Institutions", value: 12, max: 40 },
    { label: "Enterprise Clients", value: 80, max: 120 },
    { label: "UAE Emirates Covered", value: 6, max: 7 },
  ];

  const stats = [
    { value: 25, suffix: "+", label: "Institutions Running", id: "01" },
    { value: 12, suffix: "+", label: "In Pipeline", id: "02" },
    { value: 100, suffix: "K+", label: "Students Connected", id: "03" },
  ];

  const checkItems = [
    "Education ecosystem management",
    "HR & operational services",
    "Technology infrastructure",
    "Facilities & support services",
  ];

  return (
    <section
      id="growth"
      ref={sectionRef}
      className="py-40 px-6 bg-[#050510] relative overflow-hidden"
    >
      {/* ── Background ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(200,169,106,0.06) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] opacity-10"
          style={{ background: "radial-gradient(circle, #C8A96A 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-8"
          style={{ background: "radial-gradient(circle, #0F3D2E 0%, transparent 70%)" }} />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-[1px] bg-accent" />
              <span className="text-accent font-bold tracking-[0.4em] uppercase text-[10px]">
                Turnover & Growth
              </span>
              <Activity className="w-3 h-3 text-accent animate-pulse" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]"
            >
              A Growing Ecosystem{" "}
              <span
                className="italic font-serif"
                style={{ color: "#C8A96A" }}
              >
                Built on Trust
              </span>{" "}
              &amp; Expansion
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="text-white/40 text-sm leading-relaxed max-w-xs font-medium"
          >
            Compounding institutional growth across the UAE — driven by trust, diversification, and a unified service model.
          </motion.p>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* ── LEFT: Visual Panel ── */}
          <div className="flex flex-col gap-8">

            {/* Revenue Growth Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-accent/20 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors" />

              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/30 mb-1">
                    Revenue Growth Curve
                  </p>
                  <p className="text-white/70 text-sm font-medium">
                    Institutional expansion trajectory
                  </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                  <span className="text-accent text-[11px] font-bold">+340%</span>
                </div>
              </div>

              <RevenueCurve />

              {/* Mini stats row */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/5">
                {stats.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-center"
                  >
                    <p
                      className="text-2xl font-black tracking-tighter"
                      style={{ color: "#C8A96A" }}
                    >
                      <Counter value={s.value} suffix={s.suffix} />
                    </p>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-white/30 mt-1">
                      {s.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Institutional Growth Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-accent/20 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/30">
                    Institutional Growth Indicators
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                {growthBars.map((bar, i) => (
                  <GrowthBar
                    key={i}
                    label={bar.label}
                    value={bar.value}
                    max={bar.max}
                    delay={0.2 + i * 0.12}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Content Panel ── */}
          <div className="flex flex-col gap-8 lg:pt-2">

            {/* Pillar cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.08,
                  }}
                  className="p-7 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-accent/30 hover:bg-white/[0.04] transition-all duration-500 group cursor-default relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors" />

                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                    <p.icon className="w-5 h-5 text-accent" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/55 transition-colors">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-white/5" />

            {/* About-style reference block (mirrors image reference layout) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <p className="text-white/50 text-base leading-relaxed font-light">
                Our ecosystem is built on a foundation of trust — with institutions, students, and enterprise partners across the UAE. Each new relationship compounds the value of the whole.
              </p>

              <div className="grid grid-cols-1 gap-3">
                {checkItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    className="flex items-center gap-3 group cursor-default"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-white/60 text-sm font-medium group-hover:text-white/80 transition-colors">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Trusted badge — mirrors image reference */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-[2rem] border border-accent/15 bg-accent/5 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
              <div className="relative flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0">
                  <Globe2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-white font-bold text-base mb-1">
                    Trusted by{" "}
                    <span className="text-accent">
                      <Counter value={100} suffix="K+" />
                    </span>{" "}
                    Students
                  </p>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Join a growing network of institutions and enterprises choosing Edify as their long-term ecosystem partner across the UAE.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-3.5 h-3.5 text-accent fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-white/30 text-[11px] font-bold ml-1">5.0 Ecosystem Rating</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 border-t border-white/5"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-accent font-bold uppercase tracking-[0.2em] text-xs group hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Partner With Us
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Side label */}
      <div className="absolute top-1/2 -right-16 -translate-y-1/2 rotate-90 hidden xl:block pointer-events-none">
        <span className="text-[9px] font-bold uppercase tracking-[1em] text-white/10">
          Growth Metrics // UAE Ecosystem
        </span>
      </div>
    </section>
  );
}
