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
  // async rewrites() {
  //   return [
  //     {
  //       source: '/gift',
  //       destination: 'https://gift-product-orpin.vercel.app/gift',
  //     },
  //     {
  //       source: '/something/:path*',
  //       destination: 'https://www.example2.com/:path*',
  //     },
  //   ]
  // },
}

export default nextConfig
