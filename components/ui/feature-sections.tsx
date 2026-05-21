import { cn } from "@/lib/utils";

interface FeatureCard {
  title: string;
  description: string;
  image: string;
}

interface FeatureSectionsProps {
  title?: string;
  subtitle?: string;
  features?: FeatureCard[];
}

const defaultFeatures: FeatureCard[] = [
  {
    title: "Feedback analyser",
    description: "Get instant insights into your finances with live dashboards.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "User management",
    description: "Get instant insights into your finances with live dashboards.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Better invoicing",
    description: "Get instant insights into your finances with live dashboards.",
    image: "https://images.unsplash.com/photo-1554224311-beee415c15c7?q=80&w=800&auto=format&fit=crop",
  },
];

export default function FeatureSections({
  title = "Powerful Features",
  subtitle = "Everything you need to manage, track, and grow your finances, securely and efficiently.",
  features = defaultFeatures,
}: FeatureSectionsProps = {}) {
  return (
    <section className="w-full py-16">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');* {font-family: 'Poppins', sans-serif;}`}</style>

      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="text-sm text-slate-500 mt-2">{subtitle}</p>
      </div>

      {/* Feature cards */}
      <div className="flex flex-wrap items-start justify-center gap-10">
        {features.map((feature, idx) => (
          <div key={idx} className="max-w-80 hover:-translate-y-0.5 transition duration-300">
            <img
              className="rounded-xl"
              src={feature.image}
              alt={feature.title}
            />
            <h3 className="text-base font-semibold text-slate-700 mt-4">
              {feature.title}
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
