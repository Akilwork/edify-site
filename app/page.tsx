import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EDIFY Management Consultancy LLP",
  description:
    "EDIFY Management Consultancy LLP delivers integrated educational, HR, and business solutions designed to help organizations grow with confidence.",
};

const services = [
  {
    title: "Academic & Educational Services",
    description: "Comprehensive academic support and curriculum development for institutions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Educational Consultancy",
    description: "Strategic guidance for schools, universities, and training centers.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
  },
  {
    title: "School Management",
    description: "End-to-end school operations management and administrative support.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    title: "HR & Recruitment",
    description: "Talent acquisition, workforce planning, and HR process optimization.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    title: "Transport & Facilities",
    description: "Logistics, transport management, and facilities support services.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: "Financial Services",
    description: "Financial planning, budgeting, and advisory for institutions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
  },
  {
    title: "Software & Technology",
    description: "Custom software solutions and digital transformation services.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Robotics & Innovation",
    description: "STEM education, robotics programs, and innovation lab setup.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    title: "Counseling & Special Needs",
    description: "Inclusive support services, counseling, and special education programs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
];

const network = [
  "NIMS Schools",
  "Golden Cosmos",
  "Techno Alliance",
  "SEED",
  "TOSS Academy",
  "EMKE Garage",
  "Imprint",
  "UniDesign",
  "Educraft",
  "Loyaltri",
];

const stats = [
  { value: "10+", label: "UAE Institutions" },
  { value: "9", label: "Service Verticals" },
  { value: "10+", label: "Network Partners" },
  { value: "100%", label: "Client Commitment" },
];

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      {/* ── NAV ── */}
      <header className="fixed top-4 left-4 right-4 z-50">
        <nav className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl px-6 py-3 flex items-center justify-between shadow-sm">
          <span className="font-bold text-primary text-lg tracking-tight">EDIFY</span>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-primary transition-colors duration-200 cursor-pointer">Services</a>
            <a href="#network" className="hover:text-primary transition-colors duration-200 cursor-pointer">Network</a>
            <a href="#about" className="hover:text-primary transition-colors duration-200 cursor-pointer">About</a>
            <a href="#contact" className="hover:text-primary transition-colors duration-200 cursor-pointer">Contact</a>
          </div>
          <a
            href="#contact"
            className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-primary/90 transition-colors duration-200 cursor-pointer"
          >
            Get in Touch
          </a>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className="bg-primary text-white pt-40 pb-28 px-6 text-center relative overflow-hidden">
        {/* subtle decorative ring */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          <div className="w-[600px] h-[600px] rounded-full border border-white/5" />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Management Consultancy
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Empowering Institutions.<br />Enabling Growth.
          </h1>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-white/80 leading-relaxed">
            EDIFY Management Consultancy LLP delivers integrated educational, HR, and business
            solutions designed to help organizations grow with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#services"
              className="bg-accent text-gray-900 px-7 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-colors duration-200 cursor-pointer"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="border border-white/40 text-white px-7 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-200 cursor-pointer"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto text-center">
        <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">
          Who We Are
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          A Partner Built for Institutional Excellence
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          EDIFY Management Consultancy LLP is a forward-thinking organization delivering
          consultancy and support services across education, HR, and business operations.
          With strong roots in the UAE, we combine innovation and expertise to drive
          sustainable growth for every institution we serve.
        </p>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200 cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-base mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 px-6 bg-primary text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">
              Our Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Numbers That Speak</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl border border-white/10 bg-white/5"
              >
                <p className="text-4xl font-bold text-accent mb-2">{stat.value}</p>
                <p className="text-sm text-white/70 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NETWORK ── */}
      <section id="network" className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Network</h2>
          <p className="mb-10 text-gray-600 max-w-xl mx-auto">
            Supported by a strong ecosystem of institutions and partner organizations across the UAE.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {network.map((item) => (
              <div
                key={item}
                className="border border-gray-200 bg-white px-3 py-4 rounded-xl text-sm font-medium text-gray-700 hover:border-primary/40 hover:text-primary hover:shadow-sm transition-all duration-200 cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Leadership</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our leadership team consists of experienced professionals with deep expertise in
            education, management, and consultancy — driving excellence and innovation across
            every engagement.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary text-white py-24 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          <div className="w-[500px] h-[500px] rounded-full border border-white/5" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Build the Future Together
          </h2>
          <p className="mb-8 text-white/80 text-lg">
            Partner with EDIFY to transform your organization with expert solutions tailored to your goals.
          </p>
          <a
            href="#contact"
            className="inline-block bg-accent text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-colors duration-200 cursor-pointer"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">
              Reach Out
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600">
              Reach out for inquiries, partnerships, or service details.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: "Email",
                value: "info@edifyconsultancy.com",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                ),
              },
              {
                label: "Phone",
                value: "+971 XXX XXX XXX",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                ),
              },
              {
                label: "Location",
                value: "Dubai, UAE",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                  {item.icon}
                </div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-gray-800 font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-white py-8 px-6 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} EDIFY Management Consultancy LLP &mdash; Delivering Excellence Through Expertise and Innovation.
        </p>
      </footer>
    </main>
  );
}
