/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["barpetacancercentre.org", "localhost", "172.16.2.81"], // Allow both domains & local IP
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
        pathname: "/logo/**", // Adjust based on your image path
      },
      {
        protocol: "http",
        hostname: "172.16.2.81", // No "http://"
        port: "3001",
        pathname: "/**", // Adjust based on your image path
      },
    ],
  },
};

export default nextConfig;
