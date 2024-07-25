/** @type {import('next').NextConfig} */
const redirectConfig = async () => [
  {
    source: '/home',
    destination: '/',
    permanent: true,
  },
]
const nextConfig = {
  reactStrictMode: true,

  redirects: redirectConfig,
  env: {
    NEXT_PUBLIC_WEB_API_ENDPOINT: process?.env?.NEXT_PUBLIC_WEB_API_ENDPOINT,
    NEXT_PUBLIC_URL_ENDPOINT: process?.env?.NEXT_PUBLIC_URL_ENDPOINT
  },
  experimental: {
    concurrentFeatures: true,
  },
}

module.exports = nextConfig
