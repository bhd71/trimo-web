interface GitHubRelease {
  tag_name: string
  html_url: string
  assets: Array<{ name: string; browser_download_url: string }>
}

async function getLatestRelease(): Promise<{ version: string; url: string } | null> {
  try {
    const res = await fetch('https://api.github.com/repos/bhd71/trimo/releases/latest', {
      headers: { Accept: 'application/vnd.github+json' },
    })
    if (!res.ok) return null
    const data: GitHubRelease = await res.json()
    const exeAsset = data.assets.find(a => a.name.endsWith('.exe'))
    return {
      version: data.tag_name,
      url: exeAsset?.browser_download_url ?? data.html_url,
    }
  } catch {
    return null
  }
}

export default async function DownloadSection() {
  const release = await getLatestRelease()
  const downloadUrl = release?.url ?? 'https://github.com/bhd71/trimo/releases/latest'
  const version = release?.version ?? 'latest'

  return (
    <section id="download" aria-labelledby="download-heading" className="pt-32 pb-16 px-6 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
        <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
            <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
        <div className="flex flex-col gap-3">
          <h2 id="download-heading" className="text-4xl font-bold text-white">Ready to take control?</h2>
          <p className="text-base text-white/50">Free download. Windows 10/11. No account required.</p>
        </div>
        <a
          href={downloadUrl}
          rel="noopener noreferrer"
          target="_blank"
          className="px-8 py-3 rounded-full text-base font-semibold bg-gradient-to-r from-purple-700 to-purple-500 text-white border border-purple-400/30 hover:brightness-110 active:scale-95 transition-all duration-200 select-none"
          style={{ boxShadow: '0 0 20px rgba(147,51,234,0.5), 0 0 40px rgba(147,51,234,0.15)' }}
        >
          Download for Windows — Free
        </a>
        <p className="text-xs text-white/25">{version} · Requires Windows 10 or later</p>
        <p className="text-xs text-white/30 max-w-sm">
          Windows may show a SmartScreen warning. Click <span className="text-white/50 font-medium">More info</span> → <span className="text-white/50 font-medium">Run anyway</span> to proceed.
        </p>
      </div>
    </section>
  )
}