import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="border-b border-stone-300 sticky top-0 z-50 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <span className="text-xs md:text-sm font-bold tracking-tight">HERON CHAVEZ</span>
          <span className="text-stone-400 hidden md:inline">/////////////</span>
        </Link>
        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/projects" className="brutalist-btn text-[10px] md:text-xs">
            • PROJECTS
          </Link>
          <Link href="mailto:heroncchavez@gmail.com" className="brutalist-btn text-[10px] md:text-xs">
            • INFO
          </Link>
        </div>
      </div>
    </nav>
  )
}
