# Gallery6 Component Usage Guide

## Overview
The Gallery6 component is a modern, responsive carousel gallery with smooth animations and hover effects. It's perfect for showcasing projects, services, or any collection of items.

## Basic Usage

```tsx
import { Gallery6 } from "@/components/ui/gallery6";

const items = [
  {
    id: "item-1",
    title: "Project Title",
    summary: "Brief description of the project or service",
    url: "#link-to-project",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  // ... more items
];

function MyGallery() {
  return (
    <Gallery6 
      heading="Featured Projects"
      demoUrl="#contact"
      items={items}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `heading` | `string` | `"Gallery"` | Main heading for the section |
| `demoUrl` | `string` | `"https://www.shadcnblocks.com"` | URL for the "Book a demo" link |
| `items` | `GalleryItem[]` | Default items array | Array of gallery items to display |

## GalleryItem Interface

```tsx
interface GalleryItem {
  id: string;        // Unique identifier
  title: string;     // Item title
  summary: string;   // Brief description
  url: string;       // Link URL when clicked
  image: string;     // Image URL (preferably 800x600 or 3:2 aspect ratio)
}
```

## Features

- ✅ Responsive design (mobile-first)
- ✅ Smooth carousel navigation
- ✅ Hover effects with scale animation
- ✅ Keyboard navigation support
- ✅ Accessible with proper ARIA labels
- ✅ Click-to-navigate functionality
- ✅ Professional styling with shadcn/ui

## Styling Notes

- Uses Tailwind CSS classes
- Follows shadcn/ui design patterns
- Responsive breakpoints: mobile (default), md (768px+), lg (1024px+)
- Images should be high quality (800px width minimum)
- Supports both light and dark themes via CSS variables

## Integration with Existing Components

The Gallery6 component works seamlessly with:
- shadcn/ui Button component
- shadcn/ui Carousel component
- Lucide React icons
- Tailwind CSS utilities

## Example with Custom Styling

```tsx
<div className="bg-gray-50 py-16">
  <Gallery6 
    heading="Our Services"
    demoUrl="/contact"
    items={customItems}
  />
</div>
```