# Feature Sections Component

Two components for showcasing features with Poppins font styling.

## Files Created

1. **`feature-sections.tsx`** — Main grid component with 3 feature cards
2. **`feature-sections-demo.tsx`** — Showcase layout with 2-column grid and CTA

## Setup ✓

All dependencies already installed:
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ shadcn structure
- ✅ `/components/ui` folder

## Usage

### Grid Component (3 cards)

```tsx
import FeatureSections from "@/components/ui/feature-sections";

export default function Page() {
  return (
    <FeatureSections
      title="Powerful Features"
      subtitle="Everything you need to manage, track, and grow your finances..."
      features={[
        {
          title: "Feedback analyser",
          description: "Get instant insights into your finances with live dashboards.",
          image: "https://...",
        },
        // ... more features
      ]}
    />
  );
}
```

### Demo Component (Showcase layout)

```tsx
import FeatureSectionsDemo from "@/components/ui/feature-sections-demo";

export default function Page() {
  return <FeatureSectionsDemo />;
}
```

## Props (FeatureSections)

| Prop | Type | Default |
|------|------|---------|
| `title` | string | "Powerful Features" |
| `subtitle` | string | "Everything you need..." |
| `features` | FeatureCard[] | 3 default cards |

### FeatureCard

```tsx
interface FeatureCard {
  title: string;
  description: string;
  image: string;
}
```

## Features

- 📱 Responsive grid layout
- 🎨 Poppins font (imported via Google Fonts)
- ✨ Hover animations (translate-y)
- 🖼️ Image support with rounded corners
- 🔗 CTA with arrow icon (demo component)
- ♿ Semantic HTML

## Images Used

Default images from Unsplash:
- Analytics: `photo-1551288049-bebda4e38f71`
- Team: `photo-1552664730-d307ca884978`
- Finance: `photo-1554224311-beee415c15c7`
- Workspace: `photo-1517694712202-14dd9538aa97`

## Integration in Page

Add to `app/page.tsx`:

```tsx
import FeatureSections from "@/components/ui/feature-sections";

export default function Home() {
  return (
    <main>
      {/* Other sections */}
      <FeatureSections />
      {/* Other sections */}
    </main>
  );
}
```

## Customization

### Change colors
Modify Tailwind classes in the component:
- Text: `text-slate-700` → `text-gray-700`
- Hover: `hover:-translate-y-0.5` → `hover:-translate-y-1`

### Change font
Replace Poppins import in `<style>` tag with your preferred Google Font

### Add more features
Pass custom features array:
```tsx
<FeatureSections
  features={[
    { title: "...", description: "...", image: "..." },
    // ... add more
  ]}
/>
```

## Notes

- Font is imported via inline `<style>` tag (Poppins)
- Uses Tailwind utilities for styling
- Fully responsive (mobile-first)
- No external dependencies beyond what's already installed
