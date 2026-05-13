"use client";


import { motion } from "framer-motion";
import { 
  servicePillars, 
  ecosystem, 
  leadership, 
  contactItems 
} from "@/constants";
import { 
  GraduationCap, 
  Briefcase, 
  Cpu, 
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { AboutSection } from "@/components/ui/about-section";
import TechInfrastructureSection from "@/components/TechInfrastructureSection";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ImpactCounters } from "@/components/ImpactCounters";
import ScrollAdventure from "@/components/ui/animated-scroll";
import { uaeNimsEvolutionSteps } from "@/constants/storytelling";
import LogoCloud from "@/components/ui/logo-cloud";




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

      {/* ── SERVICES (Redesigned: Premium Bento Grid) ── */}
      <section id="services" className="py-40 px-6 bg-[#050510] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" aria-hidden="true" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" aria-hidden="true" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-10 h-[1px] bg-accent" />
                <span className="text-accent font-bold tracking-[0.4em] uppercase text-xs">Expertise & Solutions</span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40"
              >
                Comprehensive <span className="text-accent italic font-serif">Service</span> Ecosystem
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white/50 text-xl leading-relaxed font-light"
              >
                We integrate strategy, operations, and technology to power the backbone of institutional growth across the Middle East.
              </motion.p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {servicePillars.map((pillar, i) => {
              const icons = [GraduationCap, Briefcase, Cpu];
              const Icon = icons[i] || Sparkles;
              const isFirst = i === 0;
              const isLast = i === servicePillars.length - 1;

              return (
                <motion.div
                  key={pillar.id}
                  className={`relative group ${
                    isFirst ? "md:col-span-12 lg:col-span-7" : isLast ? "md:col-span-6 lg:col-span-5" : "md:col-span-6 lg:col-span-5"
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                >
                  <div className="h-full p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-accent/30 hover:bg-white/[0.05] transition-all duration-700 flex flex-col justify-between overflow-hidden">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-12">
                        <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-accent/20">
                          <Icon className="w-8 h-8 text-accent" />
                        </div>
                        <span className="text-white/20 font-black text-6xl tracking-tighter group-hover:text-accent/20 transition-colors duration-500">0{i + 1}</span>
                      </div>
                      
                      <h3 className="text-3xl font-bold mb-6 group-hover:text-accent transition-colors duration-500">{pillar.title}</h3>
                      <p className="text-white/50 leading-relaxed text-lg mb-10 max-w-md">{pillar.positioning}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
                        {pillar.services.map((service, j) => (
                          <div key={j} className="flex items-start gap-3 group/item">
                            <CheckCircle2 className="w-5 h-5 text-accent/40 group-hover/item:text-accent mt-0.5 transition-colors" />
                            <span className="text-white/60 group-hover/item:text-white transition-colors text-sm font-medium">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative z-10 mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-widest text-white/30">Strategic Pillar</span>
                      <button className="flex items-center gap-2 text-accent font-bold uppercase tracking-[0.2em] text-[10px] group/btn">
                        Learn More <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Support Card in Bento Grid */}
            <motion.div
              className="md:col-span-12 lg:col-span-7"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="h-full p-12 rounded-[2.5rem] bg-accent relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                  <div className="max-w-lg text-center md:text-left">
                    <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Need a Tailored Strategy?</h3>
                    <p className="text-gray-900/70 text-lg font-medium leading-relaxed mb-8">
                      Our multi-disciplinary team is ready to analyze your unique institutional requirements and architect a bespoke solution that drives impact.
                    </p>
                    <a 
                      href="#contact" 
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gray-900 text-white font-bold uppercase tracking-widest text-xs hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300"
                    >
                      Connect with Experts <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="hidden lg:block">
                    <div className="relative">
                      <div className="w-48 h-48 rounded-full border-2 border-gray-900/10 flex items-center justify-center animate-[spin_20s_linear_infinite]">
                        <div className="absolute top-0 w-3 h-3 rounded-full bg-gray-900" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Sparkles className="w-12 h-12 text-gray-900" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY & INFRASTRUCTURE (Animated Feature) ── */}
      <TechInfrastructureSection />

      {/* ── OUR ECOSYSTEM (Group Companies) ── */}
      <section id="ecosystem" className="py-32 px-6 bg-[#050510] relative">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">Our Network</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">The Edify Ecosystem</h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            Edify operates as a connected ecosystem of specialized organizations—each contributing expertise to deliver comprehensive, high-quality solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {[
            { cat: "Education", label: "Education Institutions", role: "Primary Educational Hubs" },
            { cat: "Business", label: "Business & Service Entities", role: "Operational & Strategic Support" },
            { cat: "Specialized", label: "Specialized Operations", role: "Infrastructure & Technical Services" }
          ].map((group) => (
            <div key={group.cat}>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-white/10 pb-6">
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">{group.label}</h3>
                <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">{group.role}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {ecosystem.filter(e => e.category === group.cat).map((entity, i) => (
                  <motion.div
                    key={i}
                    className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full"
                    whileHover={{ y: -8 }}
                    onClick={() => entity.url && window.open(entity.url, "_blank")}
                  >
                    <div>
                      <h4 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{entity.name}</h4>
                      <p className="text-white/50 text-sm leading-relaxed mb-6">{entity.description}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Visit Website <span>→</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <a
            href="#contact"
            className="inline-block bg-white text-gray-900 px-10 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-accent transition-all duration-300"
          >
            Explore Our Group Companies
          </a>
        </div>
      </section>

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
      <section id="contact" className="py-32 px-6 bg-accent text-gray-900">
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

