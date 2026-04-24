import Link from 'next/link'
import { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div className="border-t border-stone-300 py-8 group">
      <div className="flex items-start justify-between mb-4">
        <p className="text-xs text-stone-500">P/{String(index + 1).padStart(2, '0')}</p>
        <p className="text-xs text-stone-500">{project.year || 2026}</p>
      </div>
      
      <h3 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-lime-500 transition-colors">
        {project.title.toUpperCase()}
      </h3>
      
      <p className="text-sm text-stone-600 mb-4 max-w-md">
        {project.description.toUpperCase()}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs text-stone-500"
          >
            {"// "}{tech.toUpperCase()}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
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
          VIEW CODE →
        </a>
        <Link
          href={`/projects/${project.slug}`}
          className="brutalist-btn"
        >
          DETAILS →
        </Link>
      </div>
    </div>
  )
}
