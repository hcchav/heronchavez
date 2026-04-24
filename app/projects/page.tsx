import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <p className="text-xs text-stone-500 mb-2">• ALL PROJECTS</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">WORK</h1>
      </div>
      
      <p className="text-sm text-stone-600 mb-12 max-w-xl">
        A COLLECTION OF AUTOMATION TOOLS, AI WORKFLOWS, AND SUPPORT OPERATIONS PROJECTS. EACH PROJECT INCLUDES A VIDEO DEMO AND SOURCE CODE.
      </p>

      <div>
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}
