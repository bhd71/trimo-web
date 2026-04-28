import Image from "next/image"
import logo from "@/app/logo.png"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/60 backdrop-blur-md border-b border-white/10">
      <nav aria-label="Main navigation" className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Trimo" height={32} />
          <span className="text-lg font-bold text-white tracking-tight">Trimo</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/bhd71/trimo"
            rel="noopener noreferrer"
            target="_blank"
            className="px-5 py-1.5 rounded-full text-sm font-semibold bg-white/5 text-white/40 border border-white/10 hover:bg-white/10 hover:text-white/70 active:scale-95 transition-all duration-150 select-none"
          >
            GitHub
          </a>
          <a
            href="#download"
            className="px-6 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-700 to-purple-500 text-white border border-purple-400/30 hover:brightness-110 active:scale-95 transition-all duration-200 select-none"
            style={{ boxShadow: '0 0 16px rgba(147,51,234,0.5), 0 0 32px rgba(147,51,234,0.15)' }}
          >
            Download
          </a>
        </div>
      </nav>
    </header>
  )
}
