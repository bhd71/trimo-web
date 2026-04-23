import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Trimo — Free App Usage Tracker for Windows',
    template: '%s | Trimo',
  },
  description:
    'Trimo is a free, lightweight Windows app that silently tracks how long you use each application. See daily usage stats, set limits, and take back control of your time.',
  keywords: [
    'app usage tracker',
    'windows time tracker',
    'screen time windows',
    'productivity tracker',
    'application monitor',
    'free time tracking software',
  ],
  authors: [{ name: 'Trimo' }],
  creator: 'Trimo',
  metadataBase: new URL('https://trimo.app'),
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    url: 'https://trimo.app/',
    title: 'Trimo — Free App Usage Tracker for Windows',
    description:
      'See exactly where your time goes. Trimo tracks every app silently in the background — lightweight, local-only, and free.',
    siteName: 'Trimo',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Trimo dashboard showing app usage statistics' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trimo — Free App Usage Tracker for Windows',
    description:
      'See exactly where your time goes. Trimo tracks every app silently in the background — lightweight, local-only, and free.',
    images: ['/og-image.png'],
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#0f0f0f',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Trimo',
  operatingSystem: 'Windows 10, Windows 11',
  applicationCategory: 'UtilitiesApplication',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Trimo is a free, lightweight Windows desktop app that silently tracks application usage time and displays detailed stats and trends.',
  url: 'https://trimo.app/',
  downloadUrl: 'https://trimo.app/#download',
  softwareVersion: '0.1.1',
  screenshot: 'https://trimo.app/og-image.png',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ backgroundColor: '#0f0f0f', color: 'white' }}>
        {children}
      </body>
    </html>
  )
}
