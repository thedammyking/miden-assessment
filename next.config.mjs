/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lodash', 'zustand', 'date-fns']
  }
};

export default nextConfig;
