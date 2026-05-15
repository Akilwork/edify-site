# Feature Sections Component

A flexible, dark-themed feature showcase component with two layout variants.

## Setup ✓

- ✅ shadcn project structure configured
- ✅ Tailwind CSS v4 installed
- ✅ TypeScript enabled
- ✅ `/components/ui` folder exists
- ✅ framer-motion for animations
- ✅ lucide-react for icons

## Usage

### Grid Variant (3 cards)

```tsx
import { FeatureSections } from "@/components/ui/feature-sections";

export default function Page() {
  return (
    <FeatureSections
      title="Powerful Features"
      subtitle="Everything you need..."
      variant="grid"
      features={[
        {
          title: "Feature 1",
          description: "Description here",
          image: "https://...",
          alt: "Alt text",
        },
        // ... more features
      ]}
    />
  );
}
```

### Showcase Variant (2-column with CTA)

```tsx
<FeatureSections
  title="Better Design"
  subtitle="Build beautifully..."
  variant="showcase"
  showCTA={true}
  ctaText="Learn more"
  ctaUrl="https://example.com"
  features={[
    { title: "Main feature", description: "...", image: "...", alt: "..." },
    { title: "Side feature", description: "...", image: "...", alt: "..." },
  ]}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Powerful Features" | Section heading |
| `subtitle` | string | "Everything you need..." | Section subheading |
| `features` | FeatureCard[] | 3 default cards | Array of feature objects |
| `variant` | "grid" \| "showcase" | "grid" | Layout style |
| `showCTA` | boolean | false | Show call-to-action link |
| `ctaText` | string | "Learn more" | CTA button text |
| `ctaUrl` | string | "#" | CTA link URL |

## FeatureCard Interface

```tsx
interface FeatureCard {
  title: string;
  description: string;
  image: string;
  alt: string;
}
```

## Design System

- **Background**: Dark (`#050510`) with subtle dot grid
- **Accents**: Gold (`#C8A96A`) and green (`#0F3D2E`)
- **Animations**: Framer-motion fade-up on scroll
- **Images**: Hover zoom effect with gradient overlay
- **Responsive**: Mobile-first, optimized for all breakpoints

## Features

- ✨ Two layout variants (grid & showcase)
- 🎨 Dark theme matching site design
- 🎬 Smooth scroll-triggered animations
- 📱 Fully responsive
- ♿ Semantic HTML & accessibility
- 🖼️ Image hover effects with gradients
- 🔗 Optional CTA with arrow icon

## Integration

Add to your page:

```tsx
import { FeatureSections } from "@/components/ui/feature-sections";

export default function Home() {
  return (
    <>
      {/* Other sections */}
      <FeatureSections />
      {/* Other sections */}
    </>
  );
}
```

## Image Recommendations

Use Unsplash URLs for best results:
- Analytics/Dashboard: `photo-1551288049-bebda4e38f71`
- Team/Collaboration: `photo-1552664730-d307ca884978`
- Finance/Invoicing: `photo-1554224311-beee415c15c7`
- Workspace: `photo-1517694712202-14dd9538aa97`

All images are automatically optimized with:
- Rounded corners (`rounded-[1.5rem]` or `rounded-[2rem]`)
- Gradient overlay for text readability
- Hover zoom animation
- Responsive sizing
