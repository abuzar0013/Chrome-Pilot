/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.aceternity.com',
        },
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com',
        },
      ],
    },
  };
  
  export default nextConfig;
