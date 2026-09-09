/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig = {
  ...(isGitHubPages ? { output: 'export' } : {}),
  basePath: isGitHubPages ? '/Primer-repositorio-de-prueba' : '',
  images: { unoptimized: isGitHubPages },
}

export default nextConfig
