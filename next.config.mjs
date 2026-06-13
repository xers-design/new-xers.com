/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/gift',
        destination: 'https://gift-product-orpin.vercel.app/gift',
      },
      {
        source: '/gift/:path*',
        destination: 'https://gift-product-orpin.vercel.app/gift/:path*',
      },
    ]
  },
}

export default nextConfig
