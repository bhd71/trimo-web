const STEPS = [
  { n: '1', title: 'Install', description: 'Download the .exe installer and run it. No configuration or account required.' },
  { n: '2', title: 'Track',   description: 'Press Start. Trimo silently monitors your active windows in the background.' },
  { n: '3', title: 'Review',  description: 'Open the dashboard any time to see your usage stats, trends, and daily goals.' },
]

export default function HowItWorksSection() {
  return (
    <section aria-labelledby="how-heading" className="py-24 px-6 bg-white/[0.02] border-y border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <div className="text-center flex flex-col gap-3">
          <p className="text-xs text-white/40 uppercase tracking-widest">How it works</p>
          <h2 id="how-heading" className="text-3xl font-bold text-white">Up and running in seconds</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((s) => (
            <div key={s.n} className="flex flex-col items-center text-center gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-purple-300 font-bold text-base">
                {s.n}
              </div>
              <h3 className="text-base font-semibold text-white">{s.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
