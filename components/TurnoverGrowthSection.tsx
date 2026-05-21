"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#888888" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[25, 50, 75].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="420"
            y2={y}
            stroke="rgba(255,255,255,0.05)"
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
        />

        {/* Data points */}
        {points.map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="3.5"
            fill="#ffffff"
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
          fill="#ffffff"
          fillOpacity="0.5"
          initial={{ scale: 0 }}
          animate={inView ? { scale: [1, 1.4, 1] } : {}}
          transition={{ delay: 2.2, duration: 1.2, repeat: Infinity }}
        />
      </svg>

      {/* Year labels */}
      <div className="flex justify-between mt-2 px-0">
        {years.map((y) => (
          <span key={y} className="text-[9px] font-bold text-white/40 tracking-wider">
            {y}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TurnoverGrowthSection() {
  const pillars = [
    {
      title: "Multi-Sector Growth Strategy",
      desc: "Diversified revenue streams across education, HR, technology, and facilities management—reducing risk while maximizing institutional reach.",
    },
    {
      title: "Expanding UAE Institutional Network",
      desc: "A growing footprint of partner institutions across multiple Emirates, each contributing to a compounding network effect.",
    },
    {
      title: "Diversified Educational & Enterprise Services",
      desc: "From academic management to enterprise operations, our service portfolio scales with every new institutional relationship.",
    },
    {
      title: "Continuous Ecosystem Scaling",
      desc: "Systematic onboarding of new institutions and service lines ensures the ecosystem compounds in value year over year.",
    },
  ];

  const stats = [
    { value: 25, suffix: "+", label: "Institutions Running" },
    { value: 12, suffix: "+", label: "In Pipeline" },
    { value: 100, suffix: "K+", label: "Students Connected" },
  ];

  return (
    <section id="growth" className="py-24 md:py-32 px-6 bg-[#F7F8F9] font-inter text-neutral-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 lg:mb-24 items-start">
          <div className="lg:col-span-7">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.1]"
            >
              A Growing Ecosystem Built on Trust & Expansion
            </motion.h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-neutral-600 leading-relaxed font-medium"
            >
              Compounding institutional growth across the UAE — driven by trust, diversification, and a unified service model.
            </motion.p>
          </div>
        </div>

        {/* Bottom Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Visual Area */}
          <div className="lg:col-span-5 h-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#18181A] rounded-3xl p-8 md:p-10 text-white h-full flex flex-col justify-between overflow-hidden relative shadow-2xl"
            >
              <div>
                <h3 className="text-2xl font-medium tracking-tight mb-2">Revenue Growth</h3>
                <p className="text-white/60 text-sm mb-12">Institutional expansion trajectory across all vertical markets.</p>
              </div>

              <div className="mt-auto mb-8">
                <RevenueCurve />
              </div>

              {/* Stats overlay or below curve */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 mt-auto">
                {stats.map((s, i) => (
                  <div key={i}>
                    <p className="text-2xl md:text-3xl font-medium tracking-tighter">
                      <Counter value={s.value} suffix={s.suffix} />
                    </p>
                    <p className="text-[9px] uppercase tracking-widest text-white/40 mt-2 font-semibold">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right 2x2 Grid Area */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 h-full">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-t border-neutral-200 pt-6 flex flex-col h-full"
                >
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-8 flex-grow">
                    {p.desc}
                  </p>
                  
                  <div className="mt-auto pb-4">
                    <a href="#contact" className="inline-flex items-center gap-3 group cursor-pointer">
                      <span className="font-semibold text-neutral-900 group-hover:text-neutral-600 transition-colors">
                        Learn More
                      </span>
                      <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center group-hover:bg-neutral-700 transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
