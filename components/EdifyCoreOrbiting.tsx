"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  School,
  Users,
  UserSearch,
  Trophy,
  Bus,
  Banknote,
  Code2,
  Cpu,
  Bot,
  HeartHandshake,
  Printer,
  Brain,
  ArrowRight,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// ── Service Data ──────────────────────────────────────────────────────────────

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: "education" | "business" | "technology";
  image: string;
  url?: string;
}

const services: ServiceItem[] = [
  {
    id: "academic",
    title: "Academic Services",
    description:
      "Comprehensive academic program design, curriculum development, and quality assurance frameworks that elevate institutional standards.",
    icon: BookOpen,
    category: "education",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    url: "#academic-services",
  },
  {
    id: "edu-consultancy",
    title: "Educational Consultancy",
    description:
      "Strategic advisory for schools and institutions navigating accreditation, compliance, and growth in the UAE education landscape.",
    icon: GraduationCap,
    category: "education",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    url: "#educational-consultancy",
  },
  {
    id: "school-mgmt",
    title: "School Management",
    description:
      "End-to-end operational management of school facilities, administration, and day-to-day institutional workflows.",
    icon: School,
    category: "education",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    url: "#school-management",
  },
  {
    id: "hr",
    title: "Human Resource Services",
    description:
      "Talent acquisition, workforce planning, and HR operations tailored for educational and corporate environments.",
    icon: Users,
    category: "business",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    url: "#hr-services",
  },
  {
    id: "recruitment",
    title: "Recruitment Services",
    description:
      "Specialized recruitment pipelines connecting institutions with qualified educators, administrators, and support staff.",
    icon: UserSearch,
    category: "business",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    url: "#recruitment-services",
  },
  {
    id: "sports",
    title: "Sports Management",
    description:
      "Full-spectrum sports program management including coaching, facilities, tournaments, and athlete development.",
    icon: Trophy,
    category: "education",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    url: "#sports-management",
  },
  {
    id: "transport",
    title: "Transport Services",
    description:
      "Safe, reliable, and GPS-tracked student and staff transport solutions across the UAE.",
    icon: Bus,
    category: "business",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80",
    url: "#transport-services",
  },
  {
    id: "financial",
    title: "Financial Services",
    description:
      "Institutional financial management, budgeting, payroll, and compliance support for schools and organizations.",
    icon: Banknote,
    category: "business",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    url: "#financial-services",
  },
  {
    id: "software-consultancy",
    title: "Software Consultancy",
    description:
      "Technology strategy and digital transformation advisory to modernize institutional and business operations.",
    icon: Code2,
    category: "technology",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    url: "#software-consultancy",
  },
  {
    id: "software-dev",
    title: "Software Development",
    description:
      "Custom software, portals, and platforms built for education management, HR, and operational efficiency.",
    icon: Cpu,
    category: "technology",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    url: "#software-development",
  },
  {
    id: "robotics",
    title: "Robotics & Innovation",
    description:
      "STEM-focused robotics programs, innovation labs, and maker-space setups that prepare students for the future.",
    icon: Bot,
    category: "technology",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    url: "#robotics-innovation",
  },
  {
    id: "special-ed",
    title: "Special Education Support",
    description:
      "Inclusive education frameworks, specialist staffing, and individualized support programs for diverse learners.",
    icon: HeartHandshake,
    category: "education",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    url: "#special-education",
  },
  {
    id: "printing",
    title: "Printing Solutions",
    description:
      "High-quality printing, branding, and design services for institutional materials, uniforms, and publications.",
    icon: Printer,
    category: "technology",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    url: "#printing-solutions",
  },
  {
    id: "counselling",
    title: "Psychological Counselling",
    description:
      "Professional psychological support and counselling services for students, staff, and institutional communities.",
    icon: Brain,
    category: "education",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    url: "#psychological-counselling",
  },
];

const categoryColors = {
  education: "text-emerald-600 bg-emerald-50 border-emerald-200",
  business: "text-blue-600 bg-blue-50 border-blue-200",
  technology: "text-accent bg-accent/10 border-accent/30",
};

const categoryLabels = {
  education: "Education",
  business: "Business",
  technology: "Technology",
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function EdifyCoreOrbiting() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeService, setActiveService] = useState<ServiceItem>(services[0]);

  useEffect(() => {
    if (!carouselApi) return;

    const update = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      const idx = carouselApi.selectedScrollSnap();
      setActiveIndex(idx);
      setActiveService(services[idx] ?? services[0]);
    };

    update();
    carouselApi.on("select", update);
    carouselApi.on("reInit", update);
    return () => {
      carouselApi.off("select", update);
      carouselApi.off("reInit", update);
    };
  }, [carouselApi]);

  return (
    <section
      id="core-orbiting-services"
      className="py-32 bg-white relative overflow-hidden"
    >
      {/* Subtle background tints */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-100/60 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-10 h-[1px] bg-accent" />
          <span className="text-accent font-bold tracking-[0.4em] uppercase text-xs">
            EDIFY Center
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900"
            >
              EDIFY Core{" "}
              <span className="text-accent italic font-serif">Orbiting</span>{" "}
              Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 text-lg leading-relaxed font-light mb-6"
            >
              A constellation of specialized services orbiting around your
              institution — each one precision-built to support, scale, and
              sustain your growth across education, business, and technology.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              href="#contact"
              className="group inline-flex items-center gap-2 text-accent font-medium hover:text-accent/80 transition-colors cursor-pointer"
            >
              Book a consultation
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </div>

          {/* Carousel Nav */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 shrink-0"
          >
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="w-12 h-12 rounded-2xl border-gray-200 bg-white hover:bg-gray-50 hover:border-accent/50 text-gray-700 disabled:opacity-30 disabled:pointer-events-auto cursor-pointer transition-all duration-200 shadow-sm"
              aria-label="Previous service"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="w-12 h-12 rounded-2xl border-gray-200 bg-white hover:bg-gray-50 hover:border-accent/50 text-gray-700 disabled:opacity-30 disabled:pointer-events-auto cursor-pointer transition-all duration-200 shadow-sm"
              aria-label="Next service"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Active Service Hero Preview */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative rounded-[2rem] overflow-hidden h-64 md:h-80 shadow-xl group cursor-pointer"
            onClick={() => activeService.url && window.open(activeService.url, '_self')}
          >
            {/* Background image */}
            <img
              src={activeService.image}
              alt={activeService.title}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />

            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`text-[10px] font-bold uppercase tracking-[0.3em] px-3 py-1 rounded-full border ${
                    categoryColors[activeService.category]
                  }`}
                >
                  {categoryLabels[activeService.category]}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-accent/90 transition-colors">
                {activeService.title}
              </h3>
              <p className="text-white/70 text-base max-w-xl leading-relaxed mb-4">
                {activeService.description}
              </p>
              <div className="flex items-center text-white/80 text-sm group-hover:text-accent/90 transition-colors">
                Learn more
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel */}
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="relative"
        >
          <CarouselContent className="ml-6 md:ml-[max(1.5rem,calc(50vw-40rem))] pr-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isActive = i === activeIndex;

              return (
                <CarouselItem
                  key={service.id}
                  className="pl-4 basis-[260px] md:basis-[300px]"
                >
                  <Card
                    className={`group relative h-full p-7 rounded-[1.75rem] border transition-all duration-500 cursor-pointer ${
                      isActive
                        ? "bg-white border-accent/40 shadow-[0_8px_40px_rgba(200,169,106,0.15)]"
                        : "bg-gray-50 border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-md"
                    }`}
                    onClick={() => {
                      carouselApi?.scrollTo(i);
                      if (service.url) {
                        setTimeout(() => window.open(service.url, '_self'), 300);
                      }
                    }}
                  >
                    <CardContent className="p-0">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 }}
                        className="h-full"
                      >
                        {/* Active indicator */}
                        {isActive && (
                          <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent" />
                        )}

                        {/* Icon */}
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border transition-all duration-300 ${
                            isActive
                              ? "bg-accent/10 border-accent/30"
                              : "bg-gray-100 border-gray-200 group-hover:bg-accent/10 group-hover:border-accent/20"
                          }`}
                        >
                          <Icon
                            className={`w-6 h-6 transition-colors duration-300 ${
                              isActive
                                ? "text-accent"
                                : "text-gray-400 group-hover:text-accent/70"
                            }`}
                            size={24}
                          />
                        </div>

                        {/* Category badge */}
                        <span
                          className={`text-[9px] font-bold uppercase tracking-[0.3em] px-2 py-0.5 rounded-full border mb-3 inline-block ${
                            categoryColors[service.category]
                          }`}
                        >
                          {categoryLabels[service.category]}
                        </span>

                        {/* Title */}
                        <h3
                          className={`text-base font-bold leading-snug transition-colors duration-300 mb-3 ${
                            isActive
                              ? "text-gray-900"
                              : "text-gray-600 group-hover:text-gray-900"
                          }`}
                        >
                          {service.title}
                        </h3>

                        {/* Description preview */}
                        <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Bottom arrow */}
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${
                              isActive
                                ? "text-accent"
                                : "text-gray-300 group-hover:text-accent/60"
                            }`}
                          >
                            Explore
                          </span>
                          <ArrowRight
                            className={`w-3 h-3 transition-all duration-300 ${
                              isActive
                                ? "text-accent translate-x-0.5"
                                : "text-gray-300 group-hover:text-accent/60 group-hover:translate-x-1"
                            }`}
                          />
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
