/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites(){
        return [
            {
                source: "/category/:path*",
                destination: "http://localhost:8080/category/:path*"
            }
        ]
    }
};

export default nextConfig;
