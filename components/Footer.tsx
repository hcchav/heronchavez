export default function Footer() {
  return (
    <footer className="border-t border-stone-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="text-sm font-bold mb-2">HERON CHAVEZ</p>
            <p className="text-xs text-stone-500">
              SUPPORT OPERATIONS & AUTOMATION SPECIALIST
            </p>
          </div>
          
          {/* Links */}
          <div>
            <p className="text-xs text-stone-500 mb-4">• LINKS</p>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/hcchav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:text-lime-500 transition-colors"
              >
                {"// GITHUB"}
              </a>
              <a
                href="https://linkedin.com/in/heronchavez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:text-lime-500 transition-colors"
              >
                {"// LINKEDIN"}
              </a>
              <a
                href="mailto:heroncchavez@gmail.com"
                className="text-xs hover:text-lime-500 transition-colors"
              >
                {"// EMAIL"}
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="md:text-right">
            <p className="text-xs text-stone-500">
              © {new Date().getFullYear()} ALL RIGHTS RESERVED
            </p>
            <p className="text-xs text-stone-400 mt-2">
              BUILT WITH NEXT.JS + TAILWIND
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
