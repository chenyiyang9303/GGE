# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Startup consulting company website targeting seed-stage founders. Built with Next.js 14 App Router, featuring Cal.com booking integration and Framer Motion animations. Core business model: B2B consulting services for pre-Series A companies.

## Architecture & Tech Stack

**Core Framework**:
- Next.js 14 with App Router (TypeScript)
- React 18 with concurrent features
- Tailwind CSS + Framer Motion v11.3.29

**Key Dependencies**:
- `@calcom/embed-react` - Booking system integration
- `cobe` - 3D globe visualization  
- `dotted-map` - World map components
- `next-themes` - Dark/light mode theming
- `next-view-transitions` - Page transitions

## Essential Commands

```bash
# Development workflow
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build with type checking
npm run start        # Production server
npm run lint         # ESLint + Next.js linting

# Missing but needed commands:
# npm run type-check  # TypeScript validation only
# npm test           # No testing framework configured
```

## Critical Architecture Patterns

**Context Architecture**:
- `context/providers.tsx` - Root providers wrapper
- `context/cal-provider.tsx` - Cal.com embed context
- Theme management via next-themes

**Component Organization**:
- Page components in `app/` (App Router)
- Reusable UI in `components/ui/`
- Business components in `components/`
- Utilities in `lib/utils.ts`

**State Management**:
- React Context for Cal.com integration
- No global state management (consider Zustand if complexity grows)

## Cal.com Integration Architecture

**Booking Flow**:
- Namespace: `startup-consulting`
- Consultation link: `startup-consulting/free-consultation`
- Hook: `app/hooks/useCalEmbed.ts` for embed management
- Context: `context/cal-provider.tsx` for global state

**Critical Implementation Details**:
- Cal.com scripts load asynchronously via useCalEmbed hook
- Brand color: `#3b82f6` (must match Tailwind blue-500)
- Embed container requires specific CSS classes for responsive behavior

## Animation System

**Performance Considerations**:
- Framer Motion + motion library (potential bundle size issue)
- 3D globe (cobe) is GPU-intensive on mobile
- Staggered animations can block main thread

**Key Animation Components**:
- Hero beam animations with collision detection
- World map with dotted visualization
- Page transitions via next-view-transitions

## Development Gotchas

**Naming Issues** (needs fixing):
- `contact sections.tsx` has space in filename (should be `contact-sections.tsx`)
- Inconsistent naming between kebab-case and camelCase

**TypeScript Configuration**:
- Strict mode enabled in tsconfig.json
- All components should have proper type definitions
- Cal.com embed types may need manual declaration

**Build Process**:
- Next.js 14 requires Node.js 18.17+
- Static optimization works for most pages
- Cal.com embed prevents full static generation

## Content Management

**Dynamic Content Locations**:
- Service offerings: `components/services.tsx`
- Case studies: `components/case-studies.tsx` 
- Pricing tiers: `components/pricing.tsx`
- Testimonials: `components/cta.tsx`
- Legal pages: `app/privacy/`, `app/terms/`, `app/cookies/`

**SEO Configuration**:
- Metadata in `app/layout.tsx` (currently basic)
- No structured data implementation
- Missing sitemap.xml and robots.txt optimization

## Performance & Deployment

**Known Performance Issues**:
- Heavy animation libraries impact bundle size
- 3D globe component not optimized for mobile
- No image optimization strategy implemented

**Deployment Requirements**:
- Vercel deployment ready (Next.js optimized)
- Environment variables needed for Cal.com integration
- Static assets served from `/public/`

## Code Quality Improvements Needed

1. **Fix naming consistency** (`contact sections.tsx` → `contact-sections.tsx`)
2. **Add TypeScript strict checks** for all components
3. **Implement error boundaries** for Cal.com embed failures
4. **Add performance monitoring** (consider Vercel Analytics)
5. **Setup testing framework** (Jest + Testing Library recommended)