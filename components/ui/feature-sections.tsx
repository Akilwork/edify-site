"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

interface FeatureCard {
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface FeatureSectionsProps {
  title?: string;
  subtitle?: string;
  features?: FeatureCard[];
  variant?: "grid" | "showcase";
  showCTA?: boolean;
  ctaText?: string;
  ctaUrl?: string;
}

const defaultFeatures: FeatureCard[] = [
  {
    title: "Feedback Analyzer",
    description: "Get instant insights into your finances with live dashboards.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    alt: "Analytics dashboard",
  },
  {
    title: "User Management",
    description: "Get instant insights into your finances with live dashboards.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    alt: "Team collaboration",
  },
  {
    title: "Better Invoicing",
    description: "Get instant insights into your finances with live dashboards.",
    image:
      "https://images.unsplash.com/photo-1554224311-beee415c15c7?q=80&w=800&auto=format&fit=crop",
    alt: "Invoice management",
  },
];

/* ─── Grid variant (3 cards) ─── */
function GridVariant({ features }: { features: FeatureCard[] }) {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="flex flex-wrap items-start justify-center gap-8 md:gap-10">
      {features.map((feature, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
            delay: idx * 0.12,
          }}
          className="max-w-80 group cursor-default"
        >
          <div className="overflow-hidden rounded-[1.5rem] border border-white/5 relative h-48 md:h-56">
            <img
              src={feature.image}
              alt={feature.alt}
              className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/60 via-transparent to-transparent pointer-events-none" />
          </div>

          <h3 className="text-base font-bold text-white mt-5 group-hover:text-accent transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-sm text-white/40 mt-2 leading-relaxed group-hover:text-white/60 transition-colors">
            {feature.description}
          </p>

          {/* Hover indicator */}
          <div className="h-[2px] w-8 bg-accent mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Showcase variant (2-col layout) ─── */
function ShowcaseVariant({
  features,
  showCTA,
  ctaText,
  ctaUrl,
}: {
  features: FeatureCard[];
  showCTA?: boolean;
  ctaText?: string;
  ctaUrl?: string;
}) {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  const mainFeature = features[0];
  const sideFeature = features[1];

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start">
      {/* Left: Large image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="md:col-span-2 overflow-hidden rounded-[2rem] border border-white/5 relative group"
      >
        <img
          src={mainFeature.image}
          alt={mainFeature.alt}
          className="w-full h-auto scale-105 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/40 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* Right: Content + side image */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="md:col-span-1 flex flex-col gap-6"
      >
        {/* Side image */}
        <div className="overflow-hidden rounded-[1.5rem] border border-white/5 relative group h-48">
          <img
            src={sideFeature.image}
            alt={sideFeature.alt}
            className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/50 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white leading-snug">
              {sideFeature.title}
            </h3>
            <p className="text-white/40 text-sm mt-3 leading-relaxed">
              {sideFeature.description}
            </p>
          </div>

          {/* CTA */}
          {showCTA && (
            <a
              href={ctaUrl || "#"}
              className="group/cta inline-flex items-center gap-2 text-accent font-bold uppercase tracking-[0.2em] text-xs hover:text-white transition-colors duration-300 pt-2"
            >
              {ctaText || "Learn more"}
              <ArrowUpRight className="w-4 h-4 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1 transition-transform duration-300" />
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Main Component ─── */
export function FeatureSections({
  title = "Powerful Features",
  subtitle = "Everything you need to manage, track, and grow your business, securely and efficiently.",
  features = defaultFeatures,
  variant = "grid",
  showCTA = false,
  ctaText = "Learn more",
  ctaUrl = "#",
}: FeatureSectionsProps) {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className="w-full py-32 px-6 bg-[#050510] relative overflow-hidden">
      {/* ── Background glows ── */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #C8A96A 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0F3D2E 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Header ── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-[1px] bg-accent" />
            <span className="text-accent font-bold tracking-[0.4em] uppercase text-[10px]">
              Features
            </span>
            <div className="w-10 h-[1px] bg-accent" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-6">
            {title}
          </h2>

          <p className="text-white/50 text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* ── Features ── */}
        {variant === "grid" ? (
          <GridVariant features={features} />
        ) : (
          <ShowcaseVariant
            features={features}
            showCTA={showCTA}
            ctaText={ctaText}
            ctaUrl={ctaUrl}
          />
        )}
      </div>
    </section>
  );
}

export default FeatureSections;
