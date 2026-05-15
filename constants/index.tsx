import { JSX } from "react";

// ── Services (Clustered by Pillars) ───────────────────────────────────────────

export interface Service {
  title: string;
  description?: string;
}

export interface ServicePillar {
  id: string;
  title: string;
  positioning: string;
  services: string[];
}

export const servicePillars: ServicePillar[] = [
  {
    id: "education",
    title: "Education Ecosystem Solutions",
    positioning: "End-to-end support for building, managing, and scaling educational institutions.",
    services: [
      "Academic Services",
      "Educational Consultancy",
      "School Management Services",
      "Sports Management",
      "Robotics & Innovation Programs",
      "Special Needs Counseling",
      "Psychological & Therapeutic Support",
    ],
  },
  {
    id: "business",
    title: "Business & Operational Services",
    positioning: "Operational excellence that powers day-to-day efficiency and long-term growth.",
    services: [
      "Human Resource Management",
      "Recruitment Services",
      "Financial Services",
      "Transport Solutions",
      "Facilities Management",
      "F&B Services",
    ],
  },
  {
    id: "technology",
    title: "Technology & Infrastructure",
    positioning: "Enabling organizations with modern tools, systems, and infrastructure.",
    services: [
      "Software Consultancy",
      "Software Development",
      "Printing & Designing Solutions",
      "Uniform & Office Supplies",
      "Vehicle Maintenance Services (Garage Operations)",
    ],
  },
];

// ── Ecosystem / Group Companies ───────────────────────────────────────────────

export interface EcosystemEntity {
  name: string;
  category: "Education" | "Business" | "Specialized";
  description?: string;
  url?: string;
}

export const ecosystem: EcosystemEntity[] = [
  // Education Institutions
  { name: "NIMS Garhoud", category: "Education", description: "New Indian Model School, Garhoud - A legacy of excellence." },
  { name: "NIMS Central School", category: "Education", description: "Central School - Empowering minds." },
  { name: "NIMS Sharjah", category: "Education", description: "NIMS Sharjah - Shaping futures." },
  { name: "NIMS Al Ain", category: "Education", description: "NIMS Al Ain - Quality education." },
  { name: "NIMS APEX", category: "Education", description: "NIMS APEX - Higher standards." },
  // Business & Service Entities
  { name: "Golden Cosmos", category: "Business", description: "Trading and supplies." },
  { name: "Techno Alliance", category: "Business", description: "Technology solutions." },
  { name: "SEED", category: "Business", description: "Educational development." },
  { name: "TOSS Academy", category: "Business", description: "Sports and training." },
  { name: "Loyaltri", category: "Business", description: "HR and loyalty solutions." },
  // Specialized Operations
  { name: "EMKE Garage", category: "Specialized", description: "Vehicle maintenance." },
  { name: "Imprint", category: "Specialized", description: "Printing solutions." },
  { name: "UniDesign", category: "Specialized", description: "Design and branding." },
  { name: "Educraft", category: "Specialized", description: "Educational crafts and supplies." },
];

// ── Stats ─────────────────────────────────────────────────────────────────────

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "15+", label: "Institutions Managed & Supported" },
  { value: "45+", label: "Active Projects & Pipeline" },
  { value: "50k+", label: "People Impacted Across Services" },
  { value: "10k+", label: "Live Platform Visitors" },
];

// ── Leadership ────────────────────────────────────────────────────────────────

export interface Leader {
  name: string;
  role: string;
  bio: string;
  photo?: string;
}

export const leadership: Leader[] = [
  {
    name: "Dr. Kamaluddin Kaizad",
    role: "Chairman & Founder",
    bio: "With decades of experience in the UAE's educational landscape, Dr. Kaizad has been a visionary leader in building institutions that prioritize quality and accessibility.",
  },
  {
    name: "Akil Jayadevan",
    role: "Managing Director",
    bio: "Driving the strategic vision and digital transformation of Edify, Akil ensures operational excellence across all service verticals.",
  },
];

// ── Contact Info ──────────────────────────────────────────────────────────────

export interface ContactItem {
  label: string;
  value: string;
  icon: JSX.Element;
}

export const contactItems: ContactItem[] = [
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
    label: "Dubai Office",
    value: "Business Bay, Dubai, UAE",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
];


// ── About Section Tags ───────────────────────────────────────────────────────

export const aboutTags: string[] = [
  "Education",
  "Human Resources",
  "Technology",
  "Facilities Management",
  "Business Operations",
  "Recruitment",
  "Financial Services",
];

// ── Why People Visit EDIFY ───────────────────────────────────────────────────

export interface VisitReason {
  title: string;
  description: string;
  image: string;
}

export const visitReasons: VisitReason[] = [
  {
    title: "Explore Educational Institutions",
    description: "Learn about schools, innovation programs, and educational ecosystems.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Discover Integrated Services",
    description: "Access consultancy, HR, transport, software, branding, and safety solutions.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Build Strategic Partnerships",
    description: "Connect with a growing UAE-based institutional network.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Understand the UAE–NIMS Story",
    description: "Experience the parallel journey of UAE growth and educational transformation.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Access Innovation & Technology",
    description: "Explore robotics, digital transformation, and future-ready systems.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Connect with Group Brands",
    description: "Navigate directly to associated companies and services.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop",
  },
];
