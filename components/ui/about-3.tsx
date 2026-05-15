"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

/* ─── Types ─── */
interface About3Props {
  title?: string;
  description?: string;
  mainImage?: { src: string; alt: string };
  secondaryImage?: { src: string; alt: string };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{ src: string; alt: string }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{ label: string; value: string }>;
}

/* ─── Defaults ─── */
const defaultCompanies = [
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-1.svg",
    alt: "Arc",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-2.svg",
    alt: "Descript",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-3.svg",
    alt: "Mercury",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-4.svg",
    alt: "Ramp",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-5.svg",
    alt: "Retool",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-6.svg",
    alt: "Watershed",
  },
];

const defaultAchievements = [
  { label: "Companies Supported", value: "300+" },
  { label: "Projects Finalized", value: "800+" },
  { label: "Happy Customers", value: "99%" },
  { label: "Recognized Awards", value: "10+" },
];

/* ─── Fade-up helper ─── */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inView = useInView(ref, { once: true, margin: "-60px" as any });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Component ─── */
export const About3 = ({
  title = "About Us",
  description = "Shadcnblocks is a passionate team dedicated to creating innovative solutions that empower businesses to thrive in the digital age.",
  mainImage = {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
    alt: "Modern office workspace",
  },
  secondaryImage = {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
    alt: "Team collaboration",
  },
  breakout = {
    src: "https://shadcnblocks.com/images/block/block-1.svg",
    alt: "logo",
    title: "Hundreds of blocks at Shadcnblocks.com",
    description:
      "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
    buttonText: "Discover more",
    buttonUrl: "https://shadcnblocks.com",
  },
  companiesTitle = "Valued by clients worldwide",
  companies = defaultCompanies,
  achievementsTitle = "Our Achievements in Numbers",
  achievementsDescription =
    "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
  achievements = defaultAchievements,
}: About3Props = {}) => {
  return (
    <section className="py-32 px-6 bg-[#050510] relative overflow-hidden">
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
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(200,169,106,0.07) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="mb-16 grid gap-6 md:grid-cols-2 md:items-end">
          <FadeUp>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-[1px] bg-accent" />
              <span className="text-accent font-bold tracking-[0.4em] uppercase text-[10px]">
                Who We Are
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">
              {title}
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-white/50 text-base md:text-lg leading-relaxed font-light">
              {description}
            </p>
          </FadeUp>
        </div>

        {/* ── Image grid ── */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main image */}
          <FadeUp delay={0.05} className="lg:col-span-2">
            <div className="overflow-hidden rounded-[2.5rem] border border-white/5 relative group h-full min-h-[340px] lg:min-h-[520px]">
              <img
                src={mainImage.src}
                alt={mainImage.alt}
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </FadeUp>

          {/* Right column */}
          <div className="flex flex-col gap-6 md:flex-row lg:flex-col">
            {/* Breakout card */}
            <FadeUp delay={0.12} className="md:w-1/2 lg:w-auto">
              <div className="flex flex-col justify-between gap-6 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-accent/25 hover:bg-white/[0.05] transition-all duration-500 p-8 h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors" />

                <img
                  src={breakout.src}
                  alt={breakout.alt}
                  className="h-10 w-auto mr-auto relative z-10 brightness-0 invert opacity-70"
                />

                <div className="relative z-10">
                  <p className="mb-2 text-base font-bold text-white group-hover:text-accent transition-colors duration-300">
                    {breakout.title}
                  </p>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {breakout.description}
                  </p>
                </div>

                <Button
                  variant="outline"
                  className="mr-auto relative z-10 border-white/10 bg-transparent text-white/70 hover:bg-accent/10 hover:border-accent/40 hover:text-accent transition-all duration-300 rounded-xl cursor-pointer"
                  asChild
                >
                  <a href={breakout.buttonUrl} target="_blank" rel="noopener noreferrer">
                    {breakout.buttonText}
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                </Button>
              </div>
            </FadeUp>

            {/* Secondary image */}
            <FadeUp delay={0.18} className="grow basis-0 md:w-1/2 lg:w-auto">
              <div className="overflow-hidden rounded-[2.5rem] border border-white/5 relative group h-full min-h-[200px]">
                <img
                  src={secondaryImage.src}
                  alt={secondaryImage.alt}
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </FadeUp>
          </div>
        </div>

        {/* ── Companies strip ── */}
        <FadeUp delay={0.1} className="py-24">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mb-10">
            {companiesTitle}
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {companies.map((company, idx) => (
              <motion.div
                key={company.src + idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="flex items-center gap-3 group cursor-default"
              >
                <img
                  src={company.src}
                  alt={company.alt}
                  className="h-6 w-auto md:h-8 brightness-0 invert opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
        </FadeUp>

        {/* ── Achievements band ── */}
        <FadeUp delay={0.05}>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-white/5 p-10 md:p-16">
            {/* Decorative grid overlay */}
            <div
              className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full opacity-[0.06] md:block"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(200,169,106,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(200,169,106,0.4) 1px, transparent 1px)`,
                backgroundSize: "80px 80px",
                maskImage: "linear-gradient(to bottom right, #000, transparent, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom right, #000, transparent, transparent)",
              }}
              aria-hidden="true"
            />

            {/* Glow */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-10 pointer-events-none"
              style={{ background: "radial-gradient(circle, #C8A96A 0%, transparent 70%)" }}
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col gap-4 text-center md:text-left mb-12">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                <div className="w-8 h-[1px] bg-accent" />
                <span className="text-accent font-bold tracking-[0.4em] uppercase text-[10px]">
                  By the Numbers
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                {achievementsTitle}
              </h3>
              <p className="max-w-lg text-white/40 text-sm leading-relaxed font-light">
                {achievementsDescription}
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap justify-between gap-10 text-center">
              {achievements.map((item, idx) => (
                <motion.div
                  key={item.label + idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-3 group cursor-default"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 group-hover:text-white/50 transition-colors">
                    {item.label}
                  </p>
                  <span
                    className="text-4xl md:text-5xl font-black tracking-tighter"
                    style={{ color: "#C8A96A" }}
                  >
                    {item.value}
                  </span>
                  {/* Accent underline */}
                  <div
                    className="h-[2px] w-8 mx-auto rounded-full transition-all duration-500 group-hover:w-full opacity-40"
                    style={{ background: "#C8A96A" }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
