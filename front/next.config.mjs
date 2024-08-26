/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: "/category/:path*",
          destination: "http://localhost:8080/category/:path*",
        },
        {
          source: "/:path*",
          destination: "http://localhost:8080/:path*",
        },
        {
          source: "/api/:path*",
          destination: "http://localhost:8080/api/:path*",
        },
        {
          source: "/user/:path*",
          destination: "http://localhost:8080/user/:path*",
        },
      ];
    },
  };
  
  export default nextConfig;
  