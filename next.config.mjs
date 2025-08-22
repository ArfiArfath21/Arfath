/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  async redirects() {
    return [
      {
        source: '/writing',
        destination: 'https://theblogorithm.com',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

