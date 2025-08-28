# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Clean energy consulting company website targeting solar, wind, storage, and hydrogen companies. Built with Next.js 14 App Router, featuring Cal.com booking integration and WebGL 3D effects. Core business model: B2B consulting for technology breakthroughs, market expansion, and sustainable growth.

## Architecture & Tech Stack

**Core Framework**:
- Next.js 14 with App Router (TypeScript)
- React 18 with concurrent features
- Tailwind CSS + Framer Motion v11.3.29

**Key Dependencies**:
- `@calcom/embed-react` - Booking system integration
- `ogl` - WebGL library for 3D Prism effects
- `cobe` - 3D globe visualization (legacy)
- `dotted-map` - World map components (legacy)
- `next-themes` - Dark/light mode theming (defaults to dark)
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

**Theme System**:
- `app/layout.tsx` - ThemeProvider configuration with `defaultTheme="dark"`
- Dark mode optimized for WebGL 3D effects visibility
- User can toggle via `components/mode-toggle.tsx`

**Context Architecture**:
- `context/providers.tsx` - Root providers wrapper
- Theme management via next-themes

**Component Organization**:
- Page components in `app/` (App Router)
- Reusable UI in `components/ui/`
- Business components in `components/`
- WebGL components in `components/Prism/`
- Utilities in `lib/utils.ts`
- Constants in `constants/links.ts`

**State Management**:
- React Context for Cal.com integration via `app/hooks/useCalEmbed.ts`
- No global state management

## Cal.com Integration Architecture

**Current Configuration** (in `constants/links.ts`):
- Namespace: `"chat-with-manu-demo"`
- Link: `"manu-arora-vesr9s/chat-with-manu-demo"`
- Brand color: `#3b82f6` (blue-500)
- Layout: `"month_view"`

**Hook Implementation**:
- `app/hooks/useCalEmbed.ts` - Manages Cal.com embed initialization
- Global flag prevents duplicate initialization
- Async loading with error handling
- Console logging for debugging

**Integration Points**:
- Hero CTA button uses data attributes for Cal.com embed
- Script loaded in `app/layout.tsx` head section

## 3D Effects System

**Prism Component** (`components/Prism/Prism.tsx`):
- WebGL-based 3D pyramidal prism effect
- Uses OGL library for performance
- Animation types: `"rotate"`, `"hover"`, `"3drotate"`
- Configurable parameters: scale, height, baseWidth, glow, hueShift, etc.
- Performance optimized with `suspendWhenOffscreen`

**Current Hero Configuration**:
- Animation: `"3drotate"` (continuous 3D rotation)
- Scale: `2.9`, Height: `3.5`, Base Width: `4.8`
- Color effects: `hueShift={0.16}`, `colorFrequency={1.7}`
- Performance: `suspendWhenOffscreen={true}`

## Content Architecture

**Dynamic Content Data**:
- Blog posts: `lib/blog-data.ts`
- Case studies: `lib/case-studies-data.ts`
- Reports: `lib/reports-data.ts`

**Page Structure**:
- Dynamic routes: `app/blog/[slug]/`, `app/case-studies/[slug]/`, `app/reports/[id]/`
- Static pages: about, contact, privacy, terms, cookies, login
- Content components: services, pricing, testimonials, features

## Development Gotchas

**File Naming Issues**:
- `contact sections.tsx` has space in filename (inconsistent with kebab-case pattern)
- Most components use camelCase, some use kebab-case

**WebGL Performance**:
- Prism component is GPU-intensive
- Dark mode default ensures better visibility of 3D effects
- Use `suspendWhenOffscreen` for performance optimization

**Build Process**:
- Static export configured (generates `/out` directory)
- Cal.com embed prevents full static optimization
- TypeScript strict mode enabled

## Tailwind Configuration

**Custom Extensions**:
- Custom box shadows: `derek`, `input`
- Color variables plugin generates CSS custom properties
- Dark mode class-based strategy
- Custom gradient backgrounds

**Important Classes**:
- Use `dark:` prefixes extensively due to dark mode default
- Custom shadow utilities for consistent design system