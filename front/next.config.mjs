/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/category/:path*",
        destination: "http://43.201.24.144/category/:path*",
      },
      // {
      //     source: "/api/:path*",
      //     destination: "http://43.201.24.144/api/:path*"
      // },
      {
        source: "/adpost/:path*",
        destination: "http://43.201.24.144/adpost/:path*",
      },
      {
        source: "/user/:path*",
        destination: "http://43.201.24.144/user/:path*",
      },
      {
        source: "/admin/category/:path*",
        destination: "http://43.201.24.144/admin/category/:path*",
      },
      {
        source: "/admin/board/:path*",
        destination: "http://43.201.24.144/admin/board/:path*",
      },
      {
        source: "/chat/:path*",
        destination: "http://43.201.24.144/chat/:path*",
      },
      {
        source: "/town/:path*",
        destination: "http://43.201.24.144/town/:path*",
      },
      {
        source: "/address/:path*",
        destination: "http://43.201.24.144/address/:path*",
      },
      {
        source: "/searchlog/:path*",
        destination: "http://43.201.24.144/searchlog/:path*",
      },
      {
        source: "/sub/:path*",
        destination: "http://43.201.24.144/sub/:path*",
      },
      {
        source: "/ws-stomp/:path*",
        destination: "http://43.201.24.144/ws-stomp/:path*",
      },
      {
        source: "/pub/:path*",
        destination: "http://43.201.24.144/pub/:path*",
      },
      {
        source: "/qna/:path*",
        destination: "http://43.201.24.144/qna/:path*",
      },
      {
        source: "/ad/:path*",
        destination: "http://43.201.24.144/ad/:path*",
      },
      {
        source: "/alarm/:path*",
        destination: "http://43.201.24.144/alarm/:path*"
      },
      {
        source: "/deleteNotification/:path*",
        destination: "http://localhost:8080/deleteNotification/:path*"
      },
      {
        source: "/deleteAllAlarms/:path*",
        destination: "http://localhost:8080/deleteAllAlarms/:path*"
      },
      {
        source: "/notify/:path*",
        destination: "http://localhost:8080/notify/:path*"
      },
      {
        source: "/subscribe/:path*",
        destination: "http://localhost:8080/subscribe/:path*"
      },
    ];
  },
};

export default nextConfig;
