"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import { 
  contactItems 
} from "@/constants";
import { 
  GraduationCap, 
  Briefcase, 
  Cpu, 
} from "lucide-react";
import { AboutSection } from "@/components/ui/about-section";
import TechInfrastructureSection from "@/components/TechInfrastructureSection";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ImpactCounters } from "@/components/ImpactCounters";
import ScrollAdventure from "@/components/ui/animated-scroll";
import { uaeNimsEvolutionSteps } from "@/constants/storytelling";
import LogoCloud from "@/components/ui/logo-cloud";
import EdifyCoreOrbiting from "@/components/EdifyCoreOrbiting";
import { TurnoverGrowthSection } from "@/components/TurnoverGrowthSection";
import { WhyPeopleVisitSection } from "@/components/WhyPeopleVisitSection";




import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#050510] text-white selection:bg-accent/30 selection:text-accent">
      <Navbar />
      {/* ── HERO (Includes Cinematic Experience) ── */}
      <HeroSection />

      {/* ── LIVE IMPACT COUNTERS ── */}
      <ImpactCounters />

      {/* ── UAE vs NIMS EVOLUTION ── */}
      <ScrollAdventure steps={uaeNimsEvolutionSteps} id="evolution-story" />

      {/* ── ECOSYSTEM BRANDS (Partners) ── */}
      <LogoCloud />

      {/* ── ABOUT EDIFY ── */}
      <AboutSection />


      {/* ── CORE CAPABILITIES (Preview) ── */}
      <section className="py-32 px-6 bg-[#0a0a1a] relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Capabilities</h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">A network of specialized companies working together to deliver integrated value across industries.</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Education Ecosystem Solutions",
              desc: "Building and managing future-ready institutions with integrated academic and management services.",
              icon: GraduationCap
            },
            {
              title: "Business & Operational Services",
              desc: "Streamlining the backbone of organizational growth through operational excellence and human resources.",
              icon: Briefcase
            },
            {
              title: "Technology & Infrastructure",
              desc: "Driving efficiency through modern digital systems, software consultancy, and technical infrastructure.",
              icon: Cpu
            }
          ].map((cap, i) => (
            <motion.div
              key={i}
              className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-accent/40 hover:bg-white/[0.05] transition-all duration-500 group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors" />
              
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 border border-accent/20 group-hover:scale-110 transition-transform duration-500">
                <cap.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{cap.title}</h3>
              <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">{cap.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#ecosystem" className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
            Explore Our Group Companies <span>→</span>
          </a>
        </div>
      </section>

      {/* ── SERVICES (Redesigned: Premium Bento Grid) — HIDDEN ── */}
      {/* <section id="services" className="py-40 px-6 bg-[#050510] relative overflow-hidden">
        ...
      </section> */}

      {/* ── EDIFY CENTER: CORE ORBITING SERVICES ── */}
      <EdifyCoreOrbiting />

      {/* ── TECHNOLOGY & INFRASTRUCTURE (Animated Feature) — HIDDEN ── */}
      {/* <TechInfrastructureSection /> */}

      {/* ── TURNOVER & GROWTH ── */}
      <TurnoverGrowthSection />

      {/* ── WHY PEOPLE VISIT EDIFY ── */}
      <WhyPeopleVisitSection />

      {/* ── OUR ECOSYSTEM (Group Companies) — HIDDEN ── */}
      {/* <section id="ecosystem" className="py-32 px-6 bg-[#050510] relative">
        ...
      </section> */}

      {/* ── LEADERSHIP (Team) ── */}
      {/* <section id="leadership" className="py-32 px-6 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">Our People</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Guiding Edify’s Vision</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Our leadership brings together experience across education, business operations, and technology—guiding Edify’s vision with clarity and purpose.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {leadership.map((leader, i) => (
              <motion.div
                key={i}
                className="flex flex-col md:flex-row gap-8 p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-32 h-32 rounded-3xl bg-gray-200 flex-shrink-0 overflow-hidden relative">
                   <div className="absolute inset-0 bg-accent/20 flex items-center justify-center text-4xl font-bold text-gray-900 group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                    {leader.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-accent font-bold text-xs uppercase tracking-widest mb-4">{leader.role}</p>
                  <p className="text-gray-600 leading-relaxed italic">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 p-12 rounded-[3rem] bg-gray-900 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent opacity-10 blur-[80px]" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent opacity-10 blur-[80px]" />
            <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto relative z-10">
              &quot;With decades of combined experience, our leadership team has played a pivotal role in building and scaling institutions across the UAE—driving both operational excellence and long-term impact.&quot;
            </p>
          </div>
        </div>
      </section> */}


      {/* ── CONTACT ── */}
      <section id="contact" className="pt-32 pb-16 px-6 bg-[#0A0A0A] text-white relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left Column */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="font-bold tracking-widest uppercase text-xs mb-6 block text-white/50">Get in Touch</span>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">Let’s Build <br/> What’s Next.</h2>
              <p className="text-xl font-medium text-white/60 mb-16 leading-relaxed max-w-md">
                Partner with Edify to scale your institution or business with confidence. We’re here to help you move forward.
              </p>
            </div>
            
            <div className="space-y-12">
              {contactItems.map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/40">{item.label}</span>
                  <span className="text-2xl font-medium tracking-tight">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="flex flex-col justify-center">
            <form className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="relative group">
                  <input type="text" id="name" className="peer w-full bg-transparent border-b border-white/20 pb-4 text-white text-lg focus:outline-none focus:border-white transition-colors placeholder-transparent" placeholder="Name" />
                  <label htmlFor="name" className="absolute left-0 top-0 text-white/40 text-sm uppercase tracking-widest font-bold transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-0 peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-focus:-top-6 peer-focus:text-xs peer-focus:uppercase peer-focus:font-bold peer-focus:text-white/60 -top-6 text-xs cursor-text">Name</label>
                </div>
                <div className="relative group">
                  <input type="text" id="organization" className="peer w-full bg-transparent border-b border-white/20 pb-4 text-white text-lg focus:outline-none focus:border-white transition-colors placeholder-transparent" placeholder="Organization" />
                  <label htmlFor="organization" className="absolute left-0 top-0 text-white/40 text-sm uppercase tracking-widest font-bold transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-0 peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-focus:-top-6 peer-focus:text-xs peer-focus:uppercase peer-focus:font-bold peer-focus:text-white/60 -top-6 text-xs cursor-text">Organization</label>
                </div>
              </div>
              
              <div className="relative group pt-4">
                <select id="service" className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-lg focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer">
                  <option value="" className="bg-[#0A0A0A] text-white">Select a Service</option>
                  <option value="Education Ecosystem" className="bg-[#0A0A0A] text-white">Education Ecosystem</option>
                  <option value="Business & Operations" className="bg-[#0A0A0A] text-white">Business & Operations</option>
                  <option value="Technology & Infrastructure" className="bg-[#0A0A0A] text-white">Technology & Infrastructure</option>
                  <option value="Other" className="bg-[#0A0A0A] text-white">Other</option>
                </select>
                <label htmlFor="service" className="absolute left-0 -top-2 text-white/60 text-xs uppercase tracking-widest font-bold transition-all pointer-events-none">Service Interest</label>
                <div className="absolute right-0 top-2 pointer-events-none text-white/50">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="relative group pt-4">
                <textarea id="message" className="peer w-full bg-transparent border-b border-white/20 pb-4 text-white text-lg focus:outline-none focus:border-white transition-colors placeholder-transparent min-h-[120px] resize-none" placeholder="Message"></textarea>
                <label htmlFor="message" className="absolute left-0 -top-2 text-white/40 text-sm uppercase tracking-widest font-bold transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-focus:-top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:font-bold peer-focus:text-white/60 text-xs cursor-text">How can we help?</label>
              </div>

              <button type="button" className="group flex items-center justify-between w-full md:w-auto bg-white text-black px-10 py-5 hover:bg-gray-200 transition-colors">
                <span className="font-bold uppercase tracking-widest text-sm mr-8">Send Message</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
}

