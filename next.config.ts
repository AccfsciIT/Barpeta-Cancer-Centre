/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["barpetacancercentre.org", "192.168.31.194", "192.168.31.194"], // Allow both domains & local IP
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.31.194",
        port: "3001",
        pathname: "/logo/**", // Adjust based on your image path
      },
      {
        protocol: "http",
        hostname: "192.168.31.194", // No "http://"
        port: "3001",
        pathname: "/**", // Adjust based on your image path
      },
    ],
  },
};

export default nextConfig;
