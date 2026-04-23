const STATS = [
  { value: '< 5 MB',  label: 'App size' },
  { value: '~0% CPU', label: 'Background usage' },
  { value: '256×256', label: 'Icon resolution' },
]

export default function StatsStrip() {
  return (
    <section aria-label="Key statistics" className="py-12 px-6 border-y border-white/10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {STATS.map((s) => (
          <div key={s.label} className="flex flex-col gap-1">
            <p className="text-3xl font-bold text-white">{s.value}</p>
            <p className="text-xs text-white/40 uppercase tracking-widest">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
