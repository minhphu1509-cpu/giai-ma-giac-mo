/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tối ưu cho deploy tĩnh trên Vercel
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
