import { FeatureSections } from "@/components/ui/feature-sections";

export default function DemoOne() {
  return (
    <>
      {/* Grid variant */}
      <FeatureSections
        title="Powerful Features"
        subtitle="Everything you need to manage, track, and grow your business, securely and efficiently."
        variant="grid"
        features={[
          {
            title: "Feedback Analyzer",
            description: "Get instant insights into your finances with live dashboards.",
            image:
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
            alt: "Analytics dashboard",
          },
          {
            title: "User Management",
            description: "Get instant insights into your finances with live dashboards.",
            image:
              "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
            alt: "Team collaboration",
          },
          {
            title: "Better Invoicing",
            description: "Get instant insights into your finances with live dashboards.",
            image:
              "https://images.unsplash.com/photo-1554224311-beee415c15c7?q=80&w=800&auto=format&fit=crop",
            alt: "Invoice management",
          },
        ]}
      />

      {/* Showcase variant */}
      <FeatureSections
        title="Better Design with Highest Revenue"
        subtitle="PrebuiltUI empowers you to build beautifully and scale effortlessly."
        variant="showcase"
        showCTA={true}
        ctaText="Learn more about the product"
        ctaUrl="https://prebuiltui.com"
        features={[
          {
            title: "Better design with highest revenue and profits",
            description:
              "PrebuiltUI empowers you to build beautifully and scale effortlessly.",
            image:
              "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
            alt: "Features showcase",
          },
          {
            title: "Better invoicing",
            description: "Get instant insights into your finances with live dashboards.",
            image:
              "https://images.unsplash.com/photo-1554224311-beee415c15c7?q=80&w=800&auto=format&fit=crop",
            alt: "Features showcase",
          },
        ]}
      />
    </>
  );
}
