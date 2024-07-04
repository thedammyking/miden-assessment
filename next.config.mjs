/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		optimizePackageImports: ['lodash', 'zustand', 'date-fns'],
		turbo: {
			rules: {
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				use: ['@svgr/webpack'],
			},
		},
	},
};

export default nextConfig;
