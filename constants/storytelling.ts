import { Sparkles, Building, GraduationCap, Globe, Cpu, Zap, Activity, Layout } from 'lucide-react';

export interface StorytellingStep {
  leftImage: string;
  rightImage: string;
  year?: string;
  title: string;
  text: string;
  subtext?: string;
  leftLabel: string;
  rightLabel: string;
  icon: any;
  overlayType?: 'grain' | 'grid' | 'nodes' | 'none';
}

export const uaeNimsEvolutionSteps: StorytellingStep[] = [
  {
    leftImage: 'https://images.unsplash.com/photo-1546415277-50eb9dd756fb?q=80&w=2000&auto=format&fit=crop', // Desert
    rightImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop', // Classroom
    year: "1970s - 1980s",
    title: "Beginning of Vision",
    leftLabel: "1971 UAE Desert",
    rightLabel: "1980 NIMS Classroom",
    text: "Every global transformation begins with a vision.",
    icon: Sparkles,
    overlayType: 'grain'
  },
  {
    leftImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop', // Construction
    rightImage: 'https://images.unsplash.com/photo-1577891729319-f4874c57a999?q=80&w=2000&auto=format&fit=crop', // School growth
    year: "1990s",
    title: "Infrastructure & Expansion",
    leftLabel: "UAE Infrastructure",
    rightLabel: "NIMS Regional Growth",
    text: "As cities expanded, opportunities for education expanded with them.",
    icon: Building,
    overlayType: 'none'
  },
  {
    leftImage: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=2000&auto=format&fit=crop', // Dubai 2000s
    rightImage: 'https://images.unsplash.com/photo-1523050337442-de7474730996?q=80&w=2000&auto=format&fit=crop', // Campus
    year: "2000s",
    title: "Global Growth Era",
    leftLabel: "Global Business",
    rightLabel: "Multi-Campus Ecosystem",
    text: "Growth created ecosystems that connected people, ideas, and futures.",
    icon: Globe,
    overlayType: 'none'
  },
  {
    leftImage: 'https://images.unsplash.com/photo-1522069169874-c58ced4e0df0?q=80&w=2000&auto=format&fit=crop', // Smart City
    rightImage: 'https://images.unsplash.com/photo-1501503060443-bd41930fecba?q=80&w=2000&auto=format&fit=crop', // Tech classroom
    year: "2015",
    title: "Innovation & Technology",
    leftLabel: "Smart City Vision",
    rightLabel: "Technology Integration",
    text: "Innovation transformed both cities and classrooms.",
    icon: Cpu,
    overlayType: 'grid'
  },
  {
    leftImage: 'https://images.unsplash.com/photo-1518481852452-9415b262eba4?q=80&w=2000&auto=format&fit=crop', // Future Hub
    rightImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&auto=format&fit=crop', // Future Education
    year: "Present",
    title: "From National Vision to Educational Transformation",
    subtext: "Building Institutions. Empowering Futures.",
    leftLabel: "Innovation Hub",
    rightLabel: "International Ecosystem",
    text: "Present Future Ecosystem",
    icon: Zap,
    overlayType: 'nodes'
  }
];

export const techInfraSteps: any[] = [
  {
    bgImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop',
    title: "Software & Digital Systems",
    leftLabel: "Software Consultancy",
    leftText: "Strategic advice to navigate the complex landscape of enterprise technology.",
    rightLabel: "Development",
    rightText: "Building bespoke digital solutions tailored to institutional needs.",
    icon: Cpu
  },
  {
    bgImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop',
    title: "Creative Solutions",
    leftLabel: "Design & Printing",
    leftText: "High-fidelity printing and design solutions for institutional branding.",
    rightLabel: "Visual Identity",
    rightText: "Creating cohesive visual narratives across physical and digital mediums.",
    icon: Layout
  },
  {
    bgImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop',
    title: "Operational Logistics",
    leftLabel: "Office Supplies",
    leftText: "Reliable procurement and distribution of essential office and uniform supplies.",
    rightLabel: "Vehicle Care",
    rightText: "Professional vehicle maintenance services through our dedicated garage operations.",
    icon: Activity
  }
];
