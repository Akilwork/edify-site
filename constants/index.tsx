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
