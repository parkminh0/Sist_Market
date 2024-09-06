/** @type {import('next').NextConfig} */
        
const nextConfig = {

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
            source: "/admin/category/:path*",
            destination: "http://localhost:8080/admin/category/:path*",
          },
        ]
    }
};

export default nextConfig;
