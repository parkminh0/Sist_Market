/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites(){
        return [
            {
                source: "/category/:path*",
                destination: "http://localhost:8080/category/:path*"
            },
            {
              source: "/post_api/:path",
              destination: "http://localhost:8080/post_api/:path",
            },
        ]
    }
};

export default nextConfig;
