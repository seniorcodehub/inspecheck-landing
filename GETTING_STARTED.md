# Getting Started with Inspecheck Landing

Welcome to the Inspecheck landing page project! This guide will help you understand the project structure and how to make changes.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Project Overview

This is a modern landing page built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4. The page showcases Inspecheck's AI-powered intelligent inspection platform.

## Key Technologies

- **Next.js 15.5.6**: React framework with Turbopack for ultra-fast development
- **React 19.1.0**: Latest React with modern features
- **TypeScript 5**: Type-safe development
- **Tailwind CSS v4**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Beautiful, consistent icons

## Project Structure

```
inspecheck-landing/
├── app/
│   ├── layout.tsx       # Root layout with fonts and providers
│   ├── page.tsx         # Main page composing all sections
│   └── globals.css      # Global styles and CSS variables
├── components/
│   ├── navbar.tsx       # Navigation with language toggle
│   ├── hero-section.tsx # Hero with video embed
│   ├── features-section.tsx
│   ├── how-it-works-section.tsx
│   ├── stats-section.tsx
│   ├── testimonials-section.tsx
│   ├── cta-section.tsx
│   ├── footer.tsx
│   └── ui/              # Reusable UI components
├── lib/
│   ├── i18n.tsx         # Internationalization system
│   └── utils.ts         # Utility functions
└── public/              # Static assets
```

## Making Changes

### Updating Text Content

All text is managed through the i18n system in `lib/i18n.tsx`. This file contains dictionaries for both Spanish and English:

```tsx
const dictionaries: Record<Locale, Dictionary> = {
  es: {
    hero_title_1: "Plataforma de IA para la",
    hero_title_2: "Inspección Inteligente",
    // ... more translations
  },
  en: {
    hero_title_1: "AI Platform for",
    hero_title_2: "Intelligent Inspection",
    // ... more translations
  },
};
```

### Changing Colors

The theme uses light purple as the primary color. Colors are defined in `app/globals.css`:

```css
:root {
  --primary: #a78bfa; /* Light purple */
  --primary-hover: #8b5cf6; /* Darker purple */
  --primary-light: #e9d5ff; /* Very light purple */
}
```

To change the color scheme:

1. Update these CSS variables
2. Search and replace class names like `bg-[#a78bfa]` with your new color
3. Update gradient classes like `from-purple-50` to match your theme

### Adding New Sections

1. Create a new component in `components/`
2. Import it in `app/page.tsx`
3. Add it to the page structure
4. Add translations to `lib/i18n.tsx` if needed

Example:

```tsx
// components/new-section.tsx
"use client";
import { useI18n } from "@/lib/i18n";

export function NewSection() {
  const { t } = useI18n();
  return <section className="py-24">{/* Your content */}</section>;
}
```

### Using Icons

This project uses Lucide React icons. To add a new icon:

```tsx
import { IconName } from "lucide-react";

<IconName className="h-5 w-5 text-[#a78bfa]" />;
```

Browse available icons at [lucide.dev](https://lucide.dev)

### Updating the Video

The hero section displays an embedded video from Streamable. To change it:

1. Open `components/hero-section.tsx`
2. Find the iframe with `src="https://streamable.com/e/24t7sr"`
3. Replace with your new video URL

## Styling Guide

### Tailwind Classes

This project uses Tailwind CSS v4. Common patterns:

- **Spacing**: `p-4`, `m-4`, `px-8`, `py-6`
- **Colors**: `text-gray-900`, `bg-[#a78bfa]`, `border-purple-100`
- **Responsive**: `md:text-5xl`, `lg:grid-cols-3`
- **Hover states**: `hover:bg-[#8b5cf6]`, `hover:shadow-xl`

### Purple Theme Colors

- Primary: `#a78bfa` (light purple)
- Primary Hover: `#8b5cf6` (darker purple)
- Light: `#e9d5ff` (very light purple)
- Backgrounds: `bg-purple-50/30`, `from-purple-50`

## Components

### Button Component

Located in `components/ui/button.tsx`:

```tsx
import { Button } from "@/components/ui/button";

<Button
  size="lg"
  className="bg-[#a78bfa] hover:bg-[#8b5cf6]"
  onClick={handleClick}
>
  Click Me
</Button>;
```

### Contact Modal

Opens a contact form that creates a mailto link:

```tsx
import { useContactModal } from "@/components/ui/contact-modal";

const contact = useContactModal();
contact.open();
```

### Animations

The project uses Framer Motion for smooth animations. See `animated-testimonials.tsx` for examples.

## Internationalization

The site supports Spanish and English. Users can toggle between languages using the button in the navbar.

To add a new translation:

1. Add the key to both `es` and `en` dictionaries in `lib/i18n.tsx`
2. Use it in your component: `{t("your_new_key")}`

## Development Tips

- **Hot Reload**: Changes are reflected instantly with Turbopack
- **Type Safety**: TypeScript catches errors before runtime
- **Component Props**: Use TypeScript interfaces for clear APIs
- **Clean Code**: Follow existing patterns in the codebase
- **Mobile First**: Test responsive design at different breakpoints

## Building for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

The build process:

1. Optimizes all JavaScript and CSS
2. Generates static HTML where possible
3. Creates optimized images
4. Bundles everything for fast loading

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository in Vercel
3. Deploy automatically

### Other Platforms

- Build: `npm run build`
- Deploy the `.next` directory
- Ensure Node.js 18+ is available

## Common Tasks

### Change the logo

1. Update the navbar logo in `components/navbar.tsx`
2. Update the footer logo in `components/footer.tsx`
3. Replace `app/icon.svg` and `app/favicon.ico`

### Update testimonials

Edit the testimonials array in `components/testimonials-section.tsx`

### Change video

Update the iframe src in `components/hero-section.tsx`

### Modify features

Edit the features array in `components/features-section.tsx`

## Support

For questions or issues:

- Email: info@inspecheck.com
- Check the README.md for more information

## Best Practices

1. **Keep components small**: Each component should do one thing well
2. **Use TypeScript**: Define types for props and state
3. **Follow naming conventions**: Use PascalCase for components
4. **Test responsiveness**: Check mobile, tablet, and desktop views
5. **Optimize images**: Use Next.js Image component when possible
6. **Keep dependencies updated**: Run `npm outdated` periodically

Happy coding! 🚀
