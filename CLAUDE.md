# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the D11N (Differentiation) website project. D11N is a business acceleration studio that transforms ideas into market-validated businesses using AI and automation.

### Current Status
- **Phase**: Pre-development (only strategic brief exists)
- **Tech Stack**: Not yet chosen
- **Framework**: To be determined based on requirements

## Project Requirements from Brief

### Website Structure
- Homepage: "De l'Idée à la Traction. Industrialisé."
- Le Studio: Philosophy and methodology
- Services for Startups (Launchpad)
- Services for Enterprises (Innovation Strike Team)
- Portfolio: Case studies (AlphaStream, QuizSpark, Aegis Monitor, VerityFlow)
- Contact/Application: Project qualification form

### Brand Guidelines
- **Colors**: Dark palette (black, anthracite) with electric accents (neon green #00FF00, cobalt blue #0066CC)
- **Typography**: Modern sans-serif (Inter, Monument Extended)
- **Tone**: Expert but not arrogant, direct, visionary but pragmatic
- **Imagery**: Data visualizations, flow animations, neural network diagrams

### Key Features Required
1. Fast, modern website optimized for conversion
2. Case study presentations with metrics
3. Contact form with project qualification logic
4. Responsive design for all devices
5. French language primary (with potential for English version)

## Development Guidelines

### When Setting Up the Project
Consider these technology options based on the requirements:
- **Static Site Generators**: Astro, Next.js, or Nuxt for performance and SEO
- **CSS Framework**: Tailwind CSS for rapid development with dark theme support
- **Animation**: Framer Motion or GSAP for flow animations
- **Forms**: Formspree, Netlify Forms, or custom backend
- **Hosting**: Vercel, Netlify, or similar for optimal performance

### Content Structure
The BRIEF.md file contains all content including:
- Complete case studies with metrics
- Service descriptions
- Brand positioning
- Target audience definitions

### Performance Priorities
1. Fast loading times (target < 2s)
2. SEO optimization for French market
3. Smooth animations that don't impact performance
4. Mobile-first responsive design

## Common Commands

### Development
```bash
cd d11n-website      # Navigate to project directory
npm run dev          # Start development server on http://localhost:4321
npm run build        # Build for production
npm run preview      # Preview production build
```

### Project Structure
```
d11n-website/
├── src/
│   ├── components/      # Reusable components (Header, Footer, Button, Card, CaseStudyCard)
│   ├── layouts/         # Page layouts (BaseLayout)
│   ├── pages/           # Route pages (index, studio, startups, entreprises, portfolio, contact)
│   └── styles/          # Global styles (global.css with Tailwind)
├── public/              # Static assets (favicon.svg)
├── tailwind.config.js   # Tailwind configuration with D11N theme
└── astro.config.mjs     # Astro configuration
```

### Key Implementation Details
- **Theme Colors**: d11n-neon (#00ff00), d11n-cobalt (#0066cc), d11n-anthracite (#1a1a1a)
- **Typography**: Inter font family
- **Animations**: Custom fade-in, slide-up, glow effects
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Dark Theme**: Entire site uses dark palette as per brand guidelines