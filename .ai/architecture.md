# Architecture

## Stack
- **Frontend:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel

## Key Directories
- `/app` → Next.js App Router pages and layouts
- `/app/projects` → Projects listing page
- `/app/projects/[slug]` → Dynamic project detail pages
- `/components` → Reusable UI components (Navbar, ProjectCard, Layout)
- `/data` → Local data files (projects.ts)
- `/public` → Static assets (profile.jpg, images)

## Data Flow
1. User visits page
2. Server component fetches project data from local `projects.ts`
3. Page renders with data
4. Client interactions (navigation, links) handled by Next.js

## Important Patterns
- Use Next.js App Router conventions
- Keep components reusable and presentational
- Store project data in `/data/projects.ts`
- Use server components by default, client components only when needed
- Responsive design: mobile-first with Tailwind breakpoints

## Risk Areas
- Project data structure changes affect multiple pages
- Loom embed URLs must be valid for iframes
- Image optimization relies on Next.js Image component
