import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects, getProjectBySlug } from '@/data/projects'

interface ProjectPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)
  const projectIndex = projects.findIndex(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  const loomEmbedUrl = project.loomUrl.replace('/share/', '/embed/')

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <Link
          href="/projects"
          className="brutalist-btn"
        >
          ← BACK
        </Link>
        <p className="text-xs text-stone-500">P/{String(projectIndex + 1).padStart(2, '0')}</p>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
        {project.title.toUpperCase()}
      </h1>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-4 mb-12">
        {project.techStack.map((tech) => (
          <span key={tech} className="text-sm text-stone-500">
            // {tech.toUpperCase()}
          </span>
        ))}
      </div>

      {/* Video */}
      <div className="border border-stone-900 aspect-video mb-12 bg-stone-900">
        <iframe
          src={loomEmbedUrl}
          frameBorder="0"
          allowFullScreen
          className="w-full h-full"
          title={`${project.title} Demo`}
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
        {/* Problem */}
        <div className="border-t border-stone-300 pt-6">
          <p className="text-xs text-stone-500 mb-2">• PROBLEM</p>
          <p className="text-sm leading-relaxed">
            {project.problem.toUpperCase()}
          </p>
        </div>

        {/* Solution */}
        <div className="border-t border-stone-300 pt-6">
          <p className="text-xs text-stone-500 mb-2">• SOLUTION</p>
          <p className="text-sm leading-relaxed">
            {project.solution.toUpperCase()}
          </p>
        </div>

        {/* How It Works */}
        <div className="border-t border-stone-300 pt-6">
          <p className="text-xs text-stone-500 mb-4">• HOW IT WORKS</p>
          <div className="space-y-3">
            {project.howItWorks.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-lime-500 font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                <p className="text-sm">{step.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="border-t border-stone-300 pt-8 flex flex-wrap gap-4">
        <a
          href={project.loomUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="brutalist-btn"
        >
          WATCH DEMO →
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="brutalist-btn"
        >
          VIEW ON GITHUB →
        </a>
      </div>
    </div>
  )
}
