"use client";

import { Inter } from "next/font/google";
import "/public/css/color.css";
import "/public/css/globals.css";
import "/public/css/layout.css";
import Header from "@/component/user/layout/Header";
import Footer from "@/component/user/layout/Footer";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <body className={inter.className}>
        {!isAdminRoute && <Header />}
        {children}
        {!isAdminRoute && <Footer />}
      </body>
    </html>
  );
}
