/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites(){
        return [
            {
                source: "/category/:path*",
                destination: "http://localhost:8080/category/:path*"
            },
            {
                source: "/api/:path*",
                destination: "http://localhost:8080/api/:path*"
            }
        ]
    }
};

export default nextConfig;
