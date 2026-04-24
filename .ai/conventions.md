# Conventions

## Coding Rules
- Prefer small, focused diffs.
- Follow existing naming and folder patterns.
- Use Next.js App Router conventions.
- Use TypeScript with proper typing.
- Use Tailwind CSS for all styling—no custom CSS files.
- Keep components reusable and presentational.
- Use server components by default; add `"use client"` only when needed.
- Avoid unnecessary abstractions.

## Component Patterns
- Components in `/components` directory.
- PascalCase for component files (e.g., `ProjectCard.tsx`).
- Props interfaces defined in the same file.
- Use Next.js `Image` component for images.
- Use Next.js `Link` component for navigation.

## Safety Rules
- Do not edit unrelated files.
- Do not change public interfaces without approval.
- Do not introduce dependencies unless the value is clear.

## Communication Rules for AI
Before implementation:
- Summarize the task.
- Identify the files to inspect.
- Call out ambiguity before guessing.

After implementation:
- Summarize what changed.
- Explain validation.
- Note assumptions, edge cases, and risks.
