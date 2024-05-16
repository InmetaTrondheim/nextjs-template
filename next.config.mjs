/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",

	experimental: {
		instrumentationHook: true,
	},

	rewrites() {
		return [
			{ source: "/healthz", destination: "/api/health" },
			{ source: "/api/healthz", destination: "/api/health" },
			{ source: "/health", destination: "/api/health" },
			{ source: "/ping", destination: "/api/health" },
		];
	},
};

export default nextConfig;
