# Inspecheck Landing Page

Inspecheck is an AI-powered intelligent inspection platform designed to revolutionize quality management across industries including automotive, industrial, construction, and logistics.

## Features

- **Smart Digital Forms**: Transform paper inspections into intelligent digital checklists
- **AI-Powered Defect Detection**: Automatic defect identification with computer vision
- **Configurable Workflows**: Adaptable to any sector and fully customizable
- **Quality Assurance**: Ensure consistent quality standards across all inspections
- **90% Time Reduction**: Automated processes eliminate manual paperwork
- **Granular Permissions**: Control access by site, client, and work type

## Tech Stack

This landing page is built with modern web technologies:

- **Framework**: [Next.js 15.5.6](https://nextjs.org/) with Turbopack
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: Custom components with [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [Tabler Icons](https://tabler-icons.io/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd inspecheck-landing
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the landing page.

## Development Commands

- `npm run dev` - Start development server with Turbopack (fast refresh)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
inspecheck-landing/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles with purple theme
├── components/            # React components
│   ├── navbar.tsx
│   ├── hero-section.tsx
│   ├── features-section.tsx
│   ├── how-it-works-section.tsx
│   ├── stats-section.tsx
│   ├── testimonials-section.tsx
│   ├── cta-section.tsx
│   ├── footer.tsx
│   └── ui/               # Reusable UI components
│       ├── button.tsx
│       ├── contact-modal.tsx
│       ├── container-scroll-animation.tsx
│       └── animated-testimonials.tsx
├── lib/                   # Utilities
│   ├── i18n.tsx          # Internationalization (ES/EN)
│   └── utils.ts          # Helper functions
└── public/               # Static assets

```

## Internationalization

The landing page supports both Spanish (ES) and English (EN) languages. The language toggle is available in the navbar. Translations are managed in `lib/i18n.tsx`.

## Customization

### Colors

The primary color scheme uses light purple tones. You can customize the colors in `app/globals.css`:

```css
:root {
  --primary: #a78bfa; /* light purple */
  --primary-hover: #8b5cf6; /* darker purple hover */
  --primary-light: #e9d5ff; /* very light purple */
}
```

### Content

All text content is managed through the i18n system in `lib/i18n.tsx`. Update the dictionaries for Spanish and English to change the content.

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with one click

### Other Platforms

You can also deploy to:

- Netlify
- AWS Amplify
- Digital Ocean
- Any Node.js hosting platform

Build the project first:

```bash
npm run build
```

Then deploy the `.next` folder and `node_modules` to your hosting platform.

## Contact

For questions or support, contact us at [info@inspecheck.com](mailto:info@inspecheck.com)

## License

© 2025 Inspecheck. All rights reserved.
