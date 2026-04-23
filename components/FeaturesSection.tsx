const FEATURES = [
  {
    title: 'Real-time tracking',
    description: 'See exactly how long each app has been open, updated every second in the background.',
    path: 'M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z',
  },
  {
    title: 'Daily & weekly trends',
    description: 'Visualize usage patterns over time with trend charts and period comparisons.',
    path: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m6 0H3m6 0h6m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m0 0h3',
  },
  {
    title: 'Usage alerts',
    description: 'Set daily limits per app and get notified when you exceed them.',
    path: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
  },
  {
    title: '100% local',
    description: 'All data stays on your machine. No accounts, no cloud, no telemetry.',
    path: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Lightweight',
    description: 'Runs silently in the background with near-zero CPU and memory footprint.',
    path: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Historical data',
    description: 'Browse past usage by day, yesterday, this week, or this month.',
    path: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
]

export default function FeaturesSection() {
  return (
    <section aria-labelledby="features-heading" className="py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <div className="text-center flex flex-col gap-3">
          <p className="text-xs text-white/40 uppercase tracking-widest">Features</p>
          <h2 id="features-heading" className="text-3xl font-bold text-white">
            Everything you need, nothing you don&apos;t
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl px-5 py-5 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                  <path d={f.path} />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white">{f.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
