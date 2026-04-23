export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto flex items-center justify-between text-xs text-white/25">
        <span>© {new Date().getFullYear()} Trimo</span>
        <div className="flex items-center gap-4">
          <a href="https://github.com/bhd71/trimo" rel="noopener noreferrer" target="_blank" className="hover:text-white/60 transition-colors">GitHub</a>
          <a href="https://github.com/bhd71/trimo/releases" rel="noopener noreferrer" target="_blank" className="hover:text-white/60 transition-colors">Releases</a>
        </div>
      </div>
    </footer>
  )
}
