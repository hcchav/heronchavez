import Image from 'next/image'
import Link from 'next/link'
import { projects, getFeaturedProjects } from '@/data/projects'
import CTAButtons from '@/components/CTAButtons'

export default function Home() {
  const featuredProjects = getFeaturedProjects()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Bio */}
          <div>
            <p className="text-sm leading-relaxed max-w-md">
              HERON CHAVEZ IS A TECHNICAL SUPPORT AND OPERATIONS SPECIALIST FOCUSING ON{' '}
              <span className="text-lime-500">AUTOMATION</span> /{' '}
              <span className="text-lime-500">AI WORKFLOWS</span> /{' '}
              <span className="text-lime-500">DATA ANALYSIS</span>.
              BASED IN USA / WORKING REMOTELY WORLDWIDE.
            </p>
            
            <div className="mt-12">
              <span className="text-lime-500 text-6xl md:text-8xl font-bold tracking-tighter">
                FOLIO<br />/2026
              </span>
            </div>
            
            {/* CTA Buttons */}
            <CTAButtons />
          </div>

          {/* Right: Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/profile.jpg"
                alt="Heron Chavez"
                width={400}
                height={400}
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[400px] xl:h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-stone-900"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-stone-300">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold">FEATURED PROJECTS</h2>
          <Link href="/projects" className="brutalist-btn">
            VIEW ALL →
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {featuredProjects.map((project, index) => (
            <div key={project.slug} className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-stone-300 pt-8">
              <div>
                <p className="text-xs text-stone-500 mb-2">P/{String(index + 1).padStart(2, '0')}</p>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  {project.title.toUpperCase()}
                </h3>
                <p className="text-sm text-stone-600 mb-6 max-w-md">
                  {project.description.toUpperCase()}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs text-stone-500">
                      {"// "}{tech.toUpperCase()}
                    </span>
                  ))}
                </div>
                
                <Link href={`/projects/${project.slug}`} className="brutalist-btn inline-flex items-center gap-2">
                  VIEW PROJECT →
                </Link>
              </div>

              {/* Project Preview */}
              <div>
                {project.thumbnailUrl ? (
                  <Link href={`/projects/${project.slug}`} className="block border border-stone-900 aspect-video overflow-hidden hover:opacity-90 transition-opacity">
                    <Image
                      src={project.thumbnailUrl}
                      alt={project.title}
                      width={1024}
                      height={612}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                ) : project.loomUrl ? (
                  <div className="border border-stone-900 aspect-video overflow-hidden bg-stone-900">
                    <iframe
                      src={project.loomUrl.replace('/share/', '/embed/')}
                      frameBorder="0"
                      allowFullScreen
                      className="w-full h-full"
                      title={`${project.title} Demo`}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-stone-300 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Social Links */}
          <div>
            <div className="flex flex-col gap-2 mb-8">
              <a href="mailto:heroncchavez@gmail.com" className="brutalist-btn inline-block w-fit">EMAIL →</a>
              <a href="https://github.com/hcchav" target="_blank" rel="noopener noreferrer" className="brutalist-btn inline-block w-fit">GITHUB →</a>
              <a href="https://linkedin.com/in/heronchavez" target="_blank" rel="noopener noreferrer" className="brutalist-btn inline-block w-fit">LINKEDIN →</a>
            </div>
            <p className="text-xs text-stone-500 mb-2">• ABOUT</p>
            <h3 className="text-xl font-bold">WHAT I DO</h3>
          </div>
          <div className="lg:col-span-2">
            <p className="text-sm leading-relaxed max-w-2xl">
              I BUILD AUTOMATION, DASHBOARDS, AND AI-ASSISTED WORKFLOWS THAT HELP SUPPORT AND OPERATIONS TEAMS REDUCE MANUAL WORK, IMPROVE VISIBILITY, AND RESOLVE ISSUES FASTER. MY FOCUS IS ON CREATING TOOLS THAT MAKE TEAMS MORE EFFICIENT AND DATA-DRIVEN.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="brutalist-btn">AUTOMATION</span>
              <span className="brutalist-btn">AI / ML</span>
              <span className="brutalist-btn">DATA ANALYSIS</span>
              <span className="brutalist-btn">SUPPORT OPS</span>
            </div>
          </div>
        </div>
        
        {/* Large Year Badge */}
        <div className="absolute bottom-4 right-6 hidden lg:block">
          <span className="text-stone-200 text-[120px] font-bold tracking-tighter leading-none">
            H/26
          </span>
        </div>
      </section>
    </div>
  )
}
