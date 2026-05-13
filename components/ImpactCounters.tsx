"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, animate, useScroll, useTransform } from "framer-motion";
import { 
  School, 
  Rocket, 
  Users, 
  MapPin, 
  Eye, 
  Award,
  Activity,
  Plus
} from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

const Counter = ({ value, suffix = "", duration = 2.5 }: CounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: duration,
        ease: [0.33, 1, 0.68, 1],
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

const LiveVisitorCounter = () => {
  const [count, setCount] = useState(12482);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 2) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return <span className="tabular-nums">{count.toLocaleString()}</span>;
};

export const ImpactCounters = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.97, 1]);

  const counters = [
    {
      label: "Institutions Running",
      value: 25,
      suffix: "+",
      icon: School,
      id: "01"
    },
    {
      label: "Institutions in Pipeline",
      value: 12,
      suffix: "+",
      icon: Rocket,
      id: "02"
    },
    {
      label: "Students Connected",
      value: 100000,
      suffix: "+",
      icon: Users,
      id: "03"
    },
    {
      label: "UAE Presence",
      content: "Multiple Emirates",
      icon: MapPin,
      id: "04"
    },
    {
      label: "Live Visitors",
      isLive: true,
      icon: Eye,
      id: "05"
    },
    {
      label: "Excellence",
      content: "Since Inc.",
      icon: Award,
      id: "06"
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="py-40 relative overflow-hidden bg-gray-50 border-t border-gray-200"
    >
      {/* ── BACKGROUND ARCHITECTURE ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.4]" 
          style={{ 
            backgroundImage: `radial-gradient(circle, rgba(15,61,46,0.12) 1px, transparent 1px)`,
            backgroundSize: '28px 28px'
          }} 
        />
        {/* Accent glow top-right */}
        <div 
          className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
          style={{ background: 'radial-gradient(circle, #C8A96A 0%, transparent 70%)' }}
        />
        {/* Primary glow bottom-left */}
        <div 
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10"
          style={{ background: 'radial-gradient(circle, #0F3D2E 0%, transparent 70%)' }}
        />
        {/* Diagonal rule lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="#0F3D2E" strokeWidth="1.5" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="#0F3D2E" strokeWidth="1.5" />
        </svg>
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-24 gap-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-accent" />
              <span className="text-accent font-bold tracking-[0.4em] uppercase text-[10px]">Ecosystem Metrics</span>
              <Activity className="w-3 h-3 text-accent animate-pulse" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter leading-[0.85] mb-6">
              Our Live <br />
              <span className="italic font-serif" style={{ color: '#0F3D2E' }}>Impact.</span>
            </h2>
            <p className="text-gray-400 text-base font-medium max-w-sm leading-relaxed">
              Real-time operational metrics from our growing ecosystem across the UAE and beyond.
            </p>
          </div>

          <div className="hidden lg:block shrink-0">
            <div className="relative w-28 h-28">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{ border: '1px dashed rgba(15,61,46,0.2)' }}
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full"
                style={{ border: '1px dashed rgba(200,169,106,0.3)' }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Plus className="w-5 h-5" style={{ color: 'rgba(15,61,46,0.3)' }} />
              </div>
            </div>
          </div>
        </div>

        {/* ── IMPACT GRID ── */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10">
          {counters.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              {/* Ghost ID Number */}
              <span 
                className="absolute -top-8 -left-2 text-[100px] font-black leading-none select-none transition-colors duration-500"
                style={{ color: 'rgba(15,61,46,0.04)' }}
              >
                {item.id}
              </span>

              <div className="relative z-10 flex flex-col gap-5">
                {/* Icon + Label Row */}
                <div className="flex items-center gap-3">
                  <div 
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-[#0F3D2E]/10"
                    style={{ border: '1px solid rgba(15,61,46,0.15)' }}
                  >
                    <item.icon 
                      className="w-4 h-4 transition-colors duration-300 group-hover:text-[#0F3D2E]"
                      style={{ color: 'rgba(15,61,46,0.35)' }}
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 group-hover:text-gray-600 transition-colors">
                    {item.label}
                  </span>
                </div>

                {/* Big Number */}
                <div 
                  className="text-5xl md:text-6xl font-bold tracking-tighter tabular-nums flex items-end gap-3 transition-transform duration-500 group-hover:translate-x-1"
                  style={{ color: '#0F3D2E' }}
                >
                  {item.isLive ? (
                    <div className="flex items-center gap-3">
                      <LiveVisitorCounter />
                      <div 
                        className="h-2 w-2 rounded-full animate-pulse"
                        style={{ 
                          background: '#C8A96A',
                          boxShadow: '0 0 8px rgba(200,169,106,0.7)' 
                        }} 
                      />
                    </div>
                  ) : item.value !== undefined ? (
                    <Counter value={item.value} suffix={item.suffix} />
                  ) : (
                    <span className="text-3xl md:text-4xl font-medium text-gray-700">{item.content}</span>
                  )}
                </div>

                {/* Expanding accent line */}
                <div 
                  className="h-[2px] w-10 transition-all duration-700 group-hover:w-full rounded-full"
                  style={{ background: '#C8A96A', opacity: 0.5 }}
                />

                {/* Dots */}
                <div className="flex gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-accent transition-colors" />
                  <div className="w-1 h-1 rounded-full bg-gray-200 group-hover:bg-accent/50 transition-colors" />
                  <div className="w-1 h-1 rounded-full bg-gray-200 group-hover:bg-accent/30 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Side Label */}
      <div className="absolute top-1/2 -right-14 -translate-y-1/2 rotate-90 hidden xl:block">
        <span className="text-[9px] font-bold uppercase tracking-[1em] text-gray-200">
          Live Ecosystem Data // 2026
        </span>
      </div>
    </section>
  );
};
