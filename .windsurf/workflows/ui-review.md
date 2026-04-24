---
description: Manual UI/UX review checklist for the portfolio site
---

# UI/UX Review Workflow

## Before Review
1. Start the dev server: `npm run dev`
2. Open http://localhost:3000 in browser
3. Open browser DevTools (F12)

## Pages to Review
- [ ] Home page (/)
- [ ] Projects page (/projects)
- [ ] Project detail page (/projects/ai-support-ticket-triage)

## Checklist Per Page

### Visual Design
- [ ] Dark theme is consistent
- [ ] Text is readable (contrast ratio)
- [ ] Spacing feels balanced
- [ ] Cards have proper shadows/borders
- [ ] Buttons are clearly clickable

### Responsiveness
- [ ] Desktop (1200px+)
- [ ] Tablet (768px-1199px)
- [ ] Mobile (320px-767px)

### Interactions
- [ ] Hover states on buttons
- [ ] Hover states on cards
- [ ] Links work correctly
- [ ] Smooth scroll behavior

### Performance
- [ ] Images load quickly
- [ ] No layout shift
- [ ] Loom embeds load properly

### Accessibility
- [ ] Tab navigation works
- [ ] Focus states visible
- [ ] Alt text on images
- [ ] Semantic HTML structure

## Common Issues to Fix
1. **Low contrast text** - Use text-gray-300 instead of text-gray-500
2. **Missing hover states** - Add hover:border-gray-600 or similar
3. **Cramped spacing** - Increase padding/margin
4. **Broken mobile layout** - Check flex-col on mobile
5. **Missing focus states** - Add focus:ring-2 focus:ring-blue-500

## After Review
Document findings in `.ai/tasks/current.md` and fix issues.
