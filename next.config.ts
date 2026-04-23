import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/trimo-web',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
