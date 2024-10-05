/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.scdn.co',
                pathname: '/image/**',
              },
              {
                protocol: 'https',
                hostname: '**.fbcdn.net', 
                pathname: '/**', 
              },
              {
                protocol: 'https',
                hostname: 'platform-lookaside.fbsbx.com',
                pathname: '/platform/profilepic/**',
              },
        ]
    }
};

export default nextConfig;
