/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  images: {
    loader: 'imgix',
    path: '/',
  },
}

module.exports = nextConfig
