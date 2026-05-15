export interface Project {
  slug: string
  title: string
  description: string
  techStack: string[]
  loomUrl?: string
  githubUrl?: string
  powerBiUrl?: string
  thumbnailUrl?: string
  problem: string
  solution: string
  howItWorks: string[]
  featured?: boolean
  year?: number
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
    year: 2026,
  },
  {
    slug: 'laboratory-operations-dashboard',
    title: 'Laboratory Operations Dashboard',
    description: 'A Power BI dashboard tracking lab sample processing, turnaround times, and operational metrics.',
    techStack: ['Power BI', 'DAX', 'SQL', 'Data Modeling'],
    powerBiUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZDVmMjAwNDUtNjQ4OS00Y2M5LTgwZDktZGJkNjdlMzM0ZGFhIiwidCI6IjJiZjliNjhhLTBkNDctNDcwNS1hYTEwLTQ2NzU1Y2U4ZDEzYyIsImMiOjZ9',
    thumbnailUrl: '/projects/lab-dashboard-thumb.png',
    problem: 'Lab managers lacked visibility into sample processing status, turnaround times, and bottlenecks across test types and locations.',
    solution: 'Built an interactive Power BI dashboard that provides real-time insights into lab operations, enabling data-driven decisions.',
    howItWorks: [
      'Connects to lab database for real-time data',
      'Calculates KPIs like turnaround time and overdue samples',
      'Visualizes status breakdown by test type and location',
      'Enables filtering by year, quarter, month, and priority',
    ],
    featured: false,
    year: 2026,
  },
  {
    slug: 'software-support-operations-dashboard',
    title: 'Software Support Operations Dashboard',
    description: 'A Power BI dashboard tracking ticket volume, SLA compliance, backlog health, and escalation metrics.',
    techStack: ['Power BI', 'DAX', 'SQL', 'Data Modeling'],
    powerBiUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZDc1OWViN2EtZjhjMi00ZTUxLWIxM2ItMGEyYTllMTc4ZDVjIiwidCI6IjJiZjliNjhhLTBkNDctNDcwNS1hYTEwLTQ2NzU1Y2U4ZDEzYyIsImMiOjZ9',
    thumbnailUrl: '/projects/software-support-thumb.png',
    problem: 'Support managers lacked visibility into ticket trends, SLA performance, backlog aging, and escalation patterns across product areas.',
    solution: 'Built an interactive Power BI dashboard that provides real-time insights into support operations KPIs and trends.',
    howItWorks: [
      'Tracks ticket volume created vs resolved over time',
      'Monitors SLA compliance percentage by month',
      'Visualizes backlog aging distribution',
      'Enables filtering by priority, product area, and issue category',
    ],
    featured: true,
    year: 2026,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
