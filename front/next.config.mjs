/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/category/:path*",
        destination: "http://13.125.170.142/category/:path*",
      },
      // {
      //     source: "/api/:path*",
      //     destination: "http://13.125.170.142/api/:path*"
      // },
      {
        source: "/adpost/:path*",
        destination: "http://13.125.170.142/adpost/:path*",
      },
      {
        source: "/user/:path*",
        destination: "http://13.125.170.142/user/:path*",
      },
      {
        source: "/admin/category/:path*",
        destination: "http://13.125.170.142/admin/category/:path*",
      },
      {
        source: "/admin/board/:path*",
        destination: "http://13.125.170.142/admin/board/:path*",
      },
      {
        source: "/chat/:path*",
        destination: "http://13.125.170.142/chat/:path*",
      },
      {
        source: "/town/:path*",
        destination: "http://13.125.170.142/town/:path*",
      },
      {
        source: "/address/:path*",
        destination: "http://13.125.170.142/address/:path*",
      },
      {
        source: "/searchlog/:path*",
        destination: "http://13.125.170.142/searchlog/:path*",
      },
      {
        source: "/sub/:path*",
        destination: "http://13.125.170.142/sub/:path*",
      },
      {
        source: "/ws-stomp/:path*",
        destination: "http://13.125.170.142/ws-stomp/:path*",
      },
      {
        source: "/pub/:path*",
        destination: "http://13.125.170.142/pub/:path*",
      },
      {
        source: "/qna/:path*",
        destination: "http://13.125.170.142/qna/:path*",
      },
      {
        source: "/ad/:path*",
        destination: "http://13.125.170.142/ad/:path*",
      },
      {
        source: "/alarm/:path*",
        destination: "http://13.125.170.142/alarm/:path*"
      },
    ];
  },
};

export default nextConfig;
