export interface Project {
  slug: string
  title: string
  description: string
  techStack: string[]
  loomUrl: string
  githubUrl: string
  problem: string
  solution: string
  howItWorks: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'ai-support-ticket-triage',
    title: 'AI Support Ticket Triage System',
    description: 'An AI-powered API that classifies support tickets by category, priority, and routing team.',
    techStack: ['Python', 'FastAPI', 'Claude API', 'Pydantic'],
    loomUrl: 'https://www.loom.com/share/6f5bbafae9824d6ab8feac6742e770fe',
    githubUrl: 'https://github.com/hcchav/AI-Support-Ticket-Triage-System',
    problem: 'Support teams spend significant time manually triaging tickets — identifying issue type, urgency, and ownership.',
    solution: 'Built an API that automatically classifies incoming tickets using AI, returning structured outputs for category, priority, and routing.',
    howItWorks: [
      'Accepts ticket text input',
      'Sends to AI model for classification',
      'Validates structured output using schema',
      'Returns structured JSON response',
    ],
    featured: true,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
