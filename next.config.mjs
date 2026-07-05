/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  allowedDevOrigins: [
    "192.168.1.210",
    "192.168.1.210:3000",
    "192.168.1.235",
    "192.168.1.235:3000",
  ],
};

export default nextConfig;
