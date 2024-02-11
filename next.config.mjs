/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "service-gallery-digidreams.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
