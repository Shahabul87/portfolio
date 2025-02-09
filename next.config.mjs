/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: "api.microlink.io",
          },
          {
            protocol: 'https',
            hostname: "images.unsplash.com",
            port: '',
            pathname: '/**',
          },
        ],
       
      },
};

export default nextConfig;
