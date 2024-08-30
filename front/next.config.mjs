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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5710482a12a6738107ff6fcfe61a9ffe03bb02b9
            }
=======
            },
            {
              source: "/post/:path*",
              destination: "http://localhost:8080/post/:path*",
            },
>>>>>>> 45a02f36d05c53afdbd7c6701864f34c9b3cf576
        ]
    }
};

export default nextConfig;
