/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SOCKET_IO_URL: process.env.SOCKET_IO_URL,
    API_URL: process.env.API_URL,
  },
};

export default nextConfig;
