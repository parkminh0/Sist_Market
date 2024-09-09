/** @type {import('next').NextConfig} */
        
const nextConfig = {
    reactStrictMode: false,
    async rewrites(){
        return [
            {
                source: "/category/:path*",
                destination: "http://localhost:8080/category/:path*"
            },
            // {
            //     source: "/api/:path*",
            //     destination: "http://localhost:8080/api/:path*"
            // },
            {
              source: "/adpost/:path*",
              destination: "http://localhost:8080/adpost/:path*",
            },
          {
            source: "/user/:path*",
            destination: "http://localhost:8080/user/:path*",
          },
          {
            source: "/admin/:path*",
            destination: "http://localhost:8080/admin/:path*",
          },
        ]
    }
};

export default nextConfig;
