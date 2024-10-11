/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/category/:path*",
        destination: "http://52.78.168.131/category/:path*",
      },
      // {
      //     source: "/api/:path*",
      //     destination: "http://52.78.168.131/api/:path*"
      // },
      {
        source: "/adpost/:path*",
        destination: "http://52.78.168.131/adpost/:path*",
      },
      {
        source: "/user/:path*",
        destination: "http://52.78.168.131/user/:path*",
      },
      {
        source: "/admin/category/:path*",
        destination: "http://52.78.168.131/admin/category/:path*",
      },
      {
        source: "/admin/board/:path*",
        destination: "http://52.78.168.131/admin/board/:path*",
      },
      {
        source: "/chat/:path*",
        destination: "http://52.78.168.131/chat/:path*",
      },
      {
        source: "/town/:path*",
        destination: "http://52.78.168.131/town/:path*",
      },
      {
        source: "/address/:path*",
        destination: "http://52.78.168.131/address/:path*",
      },
      {
        source: "/searchlog/:path*",
        destination: "http://52.78.168.131/searchlog/:path*",
      },
      {
        source: "/sub/:path*",
        destination: "http://52.78.168.131/sub/:path*",
      },
      {
        source: "/ws-stomp/:path*",
        destination: "http://52.78.168.131/ws-stomp/:path*",
      },
      {
        source: "/pub/:path*",
        destination: "http://52.78.168.131/pub/:path*",
      },
      {
        source: "/qna/:path*",
        destination: "http://52.78.168.131/qna/:path*",
      },
      {
        source: "/ad/:path*",
        destination: "http://52.78.168.131/ad/:path*",
      },
      {
        source: "/alarm/:path*",
        destination: "http://52.78.168.131/alarm/:path*"
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
