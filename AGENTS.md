# Agent Guidelines for resign-je

## Build/Lint/Test Commands
- `bun run dev` - Start development server
- `bun run build` - Build for production (runs tsc && vite build)
- `bun run preview` - Preview production build
- No test framework configured

## Code Style Guidelines
- **Language**: TypeScript with strict mode enabled
- **Framework**: React 18 with Vite, React Router, TailwindCSS
- **Imports**: Group React imports first, then third-party, then local components
- **Components**: Plain function components, export default at bottom
- **Naming**: PascalCase for components, camelCase for variables/functions
- **State**: Use useState hooks, store persistent data in localStorage
- **Styling**: TailwindCSS classes, responsive design with md: breakpoints
- **Types**: Define interfaces in types.ts, use strict TypeScript settings
- **File Structure**: Components in src/components/, shared types in src/types.ts
- **Error Handling**: Handle edge cases gracefully, use optional chaining

## Dependencies
- React Router for routing, Lucide React for icons. No backend, data lives in `src/lib/mockData.ts`.
