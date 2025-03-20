/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["barpetacancercentre.org", "localhost"], // Allow both domains
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
        pathname: "/logo/**", // Adjust based on your image path
      },
      {
        protocol: "https",
        hostname: "barpetacancercentre.org",
      },
    ],
  },
};

export default nextConfig;
