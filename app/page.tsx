"use client";


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




export default function Home() {
  return (
    <main className="bg-[#050510] text-white selection:bg-accent/30 selection:text-accent">
      {/* ── HERO (Includes Cinematic Experience & Navbar) ── */}
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
      <section id="contact" className="py-32 px-6 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <span className="font-bold tracking-widest uppercase text-xs mb-4 block opacity-60">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Let’s Build What’s Next—Together</h2>
            <p className="text-lg font-medium opacity-80 mb-12 leading-relaxed">
              Partner with Edify to scale your institution or business with confidence. We’re here to help you move forward—whether you’re building, scaling, or optimizing your organization.
            </p>
            
            <div className="space-y-8">
              {contactItems.map((item, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-gray-900/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider opacity-50 mb-1">{item.label}</span>
                    <span className="text-xl font-bold">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Organization</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-all" placeholder="Company Name" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Service Interest</label>
                <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-all">
                  <option>Education Ecosystem</option>
                  <option>Business & Operations</option>
                  <option>Technology & Infrastructure</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                <textarea className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-all min-h-[120px]" placeholder="How can we help?"></textarea>
              </div>
              <button className="w-full py-4 rounded-2xl bg-gray-900 text-white font-bold uppercase tracking-widest text-sm hover:scale-[1.02] transition-all duration-300">
                Start the Conversation
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

