const MOCK_APPS = [
  { name: 'VS Code',  time: '2h 11m', pct: '47%' },
  { name: 'Chrome',   time: '1h 04m', pct: '23%' },
  { name: 'Slack',    time: '38m',    pct: '14%' },
  { name: 'Figma',    time: '27m',    pct: '10%' },
  { name: 'Terminal', time: '19m',    pct: '7%'  },
  { name: 'Spotify',  time: '14m',    pct: '5%'  },
]

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="min-h-screen flex flex-col items-center justify-center gap-8 text-center px-6 py-24">
      {/* Badge */}
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
        Free &amp; Open Source · Windows Only
      </div>

      {/* H1 — one per page */}
      <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-2xl">
        Know where your <span className="text-purple-400">time</span> actually goes.
      </h1>

      <p className="text-base text-white/50 max-w-md leading-relaxed">
        Trimo silently tracks your app usage in the background and shows you exactly how you spend time on your PC — with zero bloat.
      </p>

      {/* CTAs */}
      <div className="flex items-center gap-3 flex-wrap justify-center">
        <a
          href="#download"
          className="px-6 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-700 to-purple-500 text-white border border-purple-400/30 hover:brightness-110 active:scale-95 transition-all duration-200 select-none"
          style={{ boxShadow: '0 0 16px rgba(147,51,234,0.5), 0 0 32px rgba(147,51,234,0.15)' }}
        >
          Download for Windows
        </a>
        <a
          href="https://github.com/bhd71/trimo"
          rel="noopener noreferrer"
          target="_blank"
          className="px-5 py-2.5 rounded-full text-sm font-semibold bg-white/5 text-white/40 border border-white/10 hover:bg-white/10 hover:text-white/70 active:scale-95 transition-all duration-150 select-none"
        >
          View on GitHub
        </a>
      </div>

      {/* Status strip */}
      <div className="flex items-center gap-3 text-xs text-white/30">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{ boxShadow: '0 0 6px rgba(74,222,128,0.8)' }} />
        <span className="text-white/40">Tracking</span>
        <span>·</span><span>Lightweight</span>
        <span>·</span><span>Local-only data</span>
      </div>

      {/* App mockup */}
      <figure
        className="w-full max-w-2xl mt-4 bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
        style={{ boxShadow: '0 0 60px rgba(147,51,234,0.15), 0 0 120px rgba(147,51,234,0.05)' }}
      >
        <figcaption className="sr-only">
          Screenshot of the Trimo dashboard showing app usage statistics including total tracked time, most used app, daily goal progress, and a grid of application cards.
        </figcaption>

        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
          <span className="text-sm font-bold text-white">Trimo</span>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{ boxShadow: '0 0 6px rgba(74,222,128,0.8)' }} />
            <span className="text-xs text-white/50">Tracking</span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-700 to-purple-500 text-white" style={{ boxShadow: '0 0 8px rgba(147,51,234,0.4)' }}>Stop</span>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex gap-3 px-5 pt-4">
          <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Total tracked today</p>
            <p className="text-2xl font-bold text-white">4h 23m</p>
          </div>
          <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Most used</p>
            <p className="text-2xl font-bold text-white">VS Code</p>
            <p className="text-xs text-white/40 mt-0.5">2h 11m</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="px-5 py-3 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-xs text-white/40 uppercase tracking-widest">Daily goal</p>
            <p className="text-xs text-white/50">4h 23m / 8h</p>
          </div>
          <div className="h-2 bg-white/8 rounded-full overflow-hidden">
            <div className="h-full rounded-full bg-purple-500" style={{ width: '55%' }} />
          </div>
        </div>

        {/* App grid */}
        <div className="grid grid-cols-3 gap-3 px-5 pb-5">
          {MOCK_APPS.map((app) => (
            <div key={app.name} className="bg-white/5 border border-white/10 rounded-2xl px-3 py-3 flex flex-col items-center gap-1.5">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/20" aria-hidden="true" />
              <span className="text-xs text-white/50">{app.name}</span>
              <span className="text-sm font-bold text-white">{app.time}</span>
              <span className="text-xs text-white/30">{app.pct}</span>
            </div>
          ))}
        </div>
      </figure>
    </section>
  )
}
