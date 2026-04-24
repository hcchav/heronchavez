You are a senior frontend engineer.

Build a clean, modern portfolio website using:
- Next.js (App Router)
- TypeScript
- Tailwind CSS

The site must be production-ready and deployable to Vercel.

Keep the design minimal, professional, and fast. No unnecessary complexity.

--------------------------------------------------

PROJECT GOAL:

Create a personal portfolio website for Heron Chavez that showcases:
- Support Operations experience
- Automation projects
- AI-driven workflows

The site should focus on real projects with Loom demos and GitHub links.

--------------------------------------------------

SITE STRUCTURE:

Pages required:

1. Home Page (/)
2. Projects Page (/projects)
3. Project Detail Page (/projects/[slug])

--------------------------------------------------

HOME PAGE REQUIREMENTS:

Hero Section:

- Name: Heron Chavez
- Title: "Support Operations & Automation Specialist"
- Subtitle:
  "I build automation, dashboards, and AI-assisted workflows that help support and operations teams reduce manual work, improve visibility, and resolve issues faster."

- Buttons:
  - "View Projects" → /projects
  - "Contact" → mailto or LinkedIn

--------------------------------------------------

HERO LAYOUT (IMPORTANT):

- Two-column layout on desktop:
  - Left: text content
  - Right: profile image

- Mobile:
  - Stack vertically (text on top, image below)

--------------------------------------------------

PROFILE IMAGE:

- Use path: "/profile.jpg"
- Image is stored in /public folder

- Use Next.js Image component

- Styling:
  - Rounded-full (circle)
  - Size: ~280px
  - Shadow (shadow-lg)
  - Optional border (border border-gray-700)

Example:

import Image from "next/image"

<Image
  src="/profile.jpg"
  alt="Heron Chavez"
  width={280}
  height={280}
  className="rounded-full shadow-lg border border-gray-700"
/>

--------------------------------------------------

HOME PAGE SECTIONS:

1. Short About Section (3–4 sentences)

Content:
Heron Chavez is a technical support and operations specialist with experience in automation, data analysis, and system optimization. He focuses on improving workflows, reducing manual work, and building tools that help teams move faster and make better decisions.

2. Featured Projects (show 2–3 cards)

--------------------------------------------------

PROJECTS PAGE (/projects):

Display project cards in a grid.

Each card includes:
- Title
- Description
- Tech stack tags
- Buttons:
  - "Watch Demo"
  - "View Code"
  - "View Details"

--------------------------------------------------

PROJECT DETAIL PAGE (/projects/[slug]):

Each project page must include:

- Title
- Embedded Loom video (iframe)
- Problem section
- Solution section
- Tech Stack
- How It Works (bullet points)
- GitHub link

--------------------------------------------------

INITIAL PROJECT DATA:

Create a data file (projects.ts) with this project:

Title:
AI Support Ticket Triage System

Slug:
ai-support-ticket-triage

Description:
An AI-powered API that classifies support tickets by category, priority, and routing team.

Tech Stack:
Python, FastAPI, Claude API, Pydantic

Loom URL:
https://www.loom.com/share/YOUR_VIDEO_ID

GitHub URL:
https://github.com/YOUR_USERNAME/ai-support-ticket-triage

Problem:
Support teams spend significant time manually triaging tickets — identifying issue type, urgency, and ownership.

Solution:
Built an API that automatically classifies incoming tickets using AI, returning structured outputs for category, priority, and routing.

How It Works:
- Accepts ticket text input
- Sends to AI model for classification
- Validates structured output using schema
- Returns structured JSON response

--------------------------------------------------

DESIGN REQUIREMENTS:

- Dark theme preferred
- Colors: black, gray, white, subtle accent
- Clean typography
- Rounded cards
- Soft shadows
- Responsive layout

--------------------------------------------------

TECHNICAL REQUIREMENTS:

- Use Next.js App Router
- Use reusable components:
  - Layout
  - Navbar
  - ProjectCard

- Store project data locally (projects.ts)
- Use Tailwind CSS
- Optimize for performance

--------------------------------------------------

NAVIGATION:

Add a simple navbar:

- Logo or name (Heron Chavez)
- Links:
  - Home
  - Projects
  - Contact

--------------------------------------------------

OUTPUT:

Generate full project including:
- File structure
- All pages
- Components
- Styling
- Sample data

Make sure it runs locally and is ready for Vercel deployment.

--------------------------------------------------

DO NOT:

- Add authentication
- Add a CMS
- Add unnecessary animations
- Overcomplicate anything

Keep it clean, simple, and professional.