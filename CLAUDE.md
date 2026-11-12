# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"Resign Je" is a Malaysian-themed resignation platform built as a humorous inside-joke project. It's a React SPA that gamifies the resignation experience with profiles, awards, and interactive features.

## Development Commands

- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint checks
- `npm run preview` - Preview production build locally

## Architecture

### Tech Stack
- **Frontend**: React 18 with TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS, punch clock theme (tokens in `tailwind.config.js`)
- **State Management**: React hooks (useState, useEffect)
- **Build Tool**: Vite
- **Icons**: Lucide React

### Key Components Structure
- `App.tsx` - Main app with routing, top bar and mobile bottom nav
- `LandingPage.tsx` - Homepage with Malaysian theme
- `DeveloperList.tsx` - Hall of fame ("The Rack"), one time card per resignee
- `AwardsConfig.tsx` - Awards management
- `ShouldIResign.tsx` - Time recorder game, also embedded in the landing hero
- `Settings.tsx` - User preferences

### Data Layer
- **Mock Data**: All data is currently mock data in `src/lib/mockData.ts`
- **Types**: TypeScript interfaces in `src/types.ts` for Developer, Award, DeveloperAward
- **Hooks**: Custom hooks in `src/lib/hooks.ts` for data fetching and metadata management

### Metadata System
- Dynamic page metadata updates via `src/lib/metadata.ts`
- SEO optimization with OpenGraph and Twitter Card support
- Route-based metadata configuration

### Responsive Design
- Mobile-first approach with fixed bottom nav
- Breakpoints: mobile (`md:hidden`) and desktop (`md:`)
- Colors: `card` (yellow ground), `ink`, `stock` (card paper), `ribbon` (blue, not yet), `late` (red, resigned)

## Code Conventions

### Styling
- Use Tailwind CSS classes exclusively
- Fonts: `font-display` (Big Shoulders Display), `font-dot` (Doto, times and counts), `font-sans` (Familjen Grotesk)
- Responsive utilities: `md:` prefix for desktop breakpoints
- Mobile-first design approach

### Component Patterns
- Functional components with hooks
- Props destructuring in component signatures
- TypeScript interfaces for all prop types
- Lucide icons for UI elements

### File Organization
- Components in `/src/components/`
- Utilities and hooks in `/src/lib/`
- Type definitions in `/src/types.ts`
- Mock data centralized in `/src/lib/mockData.ts`

## Malaysian Theme Elements

The app incorporates Malaysian cultural elements:
- 🇲🇾 flag emoji in branding
- "Je" suffix (Malaysian slang)
- Local developer profiles with Malaysian locations
- Playful resignation-themed awards and achievements