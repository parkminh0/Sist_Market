/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/category/:path*",
        destination: "http://13.125.170.142:8080/category/:path*",
      },
      {
        source: "/api/:path*",
        destination: "http://13.125.170.142:8080/api/:path*",
      },
      {
        source: "/adpost/:path*",
        destination: "http://13.125.170.142:8080/adpost/:path*",
      },
      {
        source: "/user/:path*",
        destination: "http://13.125.170.142:8080/user/:path*",
      },
    ];
  },
};

export default nextConfig;
