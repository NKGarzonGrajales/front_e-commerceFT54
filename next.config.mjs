/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
     
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3004',  
        pathname: '/**',  
      },
      {
        protocol: 'https',
        hostname: 'myghsr.com',
        pathname: '/**',  
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com', 
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.indianexpress.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'th.bing.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ebayimg.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
