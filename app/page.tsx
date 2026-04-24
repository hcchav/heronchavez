import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/data/projects'

export default function Home() {
  const featuredProject = projects[0]

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
                FOLIO<br />/2024
              </span>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/profile.jpg"
                alt="Heron Chavez"
                width={320}
                height={320}
                className="grayscale hover:grayscale-0 transition-all duration-500 border border-stone-900"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-stone-300">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs text-stone-400">01 / {String(projects.length).padStart(2, '0')}</span>
          <div className="flex-1 mx-8 flex items-center justify-center">
            <div className="h-px bg-stone-300 w-full max-w-xs"></div>
          </div>
          <Link href="/projects" className="text-xs text-stone-500 hover:text-stone-900 transition-colors">
            VIEW ALL →
          </Link>
        </div>

        {/* Project Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs text-stone-500 mb-2">P/01</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              {featuredProject.title.toUpperCase().replace(' ', '\n')}
            </h2>
            
            <Link href={`/projects/${featuredProject.slug}`} className="brutalist-btn inline-flex items-center gap-2">
              VISIT →
            </Link>
          </div>

          {/* Project Metadata */}
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
              <div>
                <p className="text-stone-500 mb-1">• YEAR</p>
                <p className="font-bold">2024</p>
              </div>
              <div>
                <p className="text-stone-500 mb-1">• TECH</p>
                <p className="font-bold">{"// "}{featuredProject.techStack.slice(0, 2).join(' / ')}</p>
              </div>
              <div>
                <p className="text-stone-500 mb-1">• ROLE</p>
                <p className="font-bold">{"// FULL-STACK DEVELOPMENT"}</p>
              </div>
              <div>
                <p className="text-stone-500 mb-1">• STATUS</p>
                <p className="font-bold">{"// COMPLETE"}</p>
              </div>
            </div>

            {/* Project Preview */}
            <div className="mt-8 border border-stone-900 aspect-video overflow-hidden bg-stone-900">
              <iframe
                src={featuredProject.loomUrl.replace('/share/', '/embed/')}
                frameBorder="0"
                allowFullScreen
                className="w-full h-full"
                title={`${featuredProject.title} Demo`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-stone-300">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
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
      </section>
    </div>
  )
}
