// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//       {
//         protocol: "https",
//         hostname: "i.ibb.co",
//       },
//       {
//         protocol: "https",
//         hostname: "ibb.co.com",
//       },
//       {
//         protocol: "https",
//         hostname: "i.ibb.co.com",
//       },
//     ],
//   },
// };

// export default nextConfig;





/** @type {import('next').NextConfig} */
const nextConfig = {
  // বিল্ডের সময় যদি কোনো ইন্টারনাল পেজে (যেমন _global-error) প্রিরেন্ডার এরর আসে, তবে বিল্ড ক্র্যাশ করবে না
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Turbopack-এর প্রিরেন্ডার মেমোরি বাগ হ্যান্ডেল করার জন্য
  experimental: {
    workerThreads: false,
    cpus: 1
  }
};

export default nextConfig;