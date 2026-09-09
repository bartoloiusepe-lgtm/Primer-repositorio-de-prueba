import type { NextConfig } from 'next'

const isGitHubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig: NextConfig = {
  ...(isGitHubPages ? { output: 'export' as const } : {}),
  basePath: isGitHubPages ? '/Primer-repositorio-de-prueba' : '',
  images: { unoptimized: isGitHubPages },
}

export default nextConfig
