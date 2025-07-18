# Agent Guidelines for resign-je

## Build/Lint/Test Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production (runs tsc && vite build)
- `npm run lint` - Run ESLint with TypeScript support
- `npm run preview` - Preview production build
- No test framework configured

## Code Style Guidelines
- **Language**: TypeScript with strict mode enabled
- **Framework**: React 18 with Vite, React Router, TailwindCSS
- **Imports**: Group React imports first, then third-party, then local components
- **Components**: Use React.FC type annotation, export default at bottom
- **Naming**: PascalCase for components, camelCase for variables/functions
- **State**: Use useState hooks, store persistent data in localStorage
- **Styling**: TailwindCSS classes, responsive design with md: breakpoints
- **Types**: Define interfaces in types.ts, use strict TypeScript settings
- **File Structure**: Components in src/components/, shared types in src/types.ts
- **Error Handling**: Handle edge cases gracefully, use optional chaining

## Dependencies
- React Query for data fetching, Supabase for backend, React Hook Form for forms
- Heroicons/Lucide React for icons, clsx for conditional classes, date-fns for dates