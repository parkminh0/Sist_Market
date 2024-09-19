"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function MyPageSide() {
  const pathname = usePathname();

  useEffect(() => {
    const currentPath = pathname || "/";
    const activeLink = document.querySelector(`a[data-href="${currentPath}"]`);
    if (activeLink) {
      // 모든 링크에서 'active' 클래스를 제거한 후 현재 링크에 추가
      document
        .querySelectorAll("a[data-href]")
        .forEach((link) => link.classList.remove("active"));
      activeLink.classList.add("active");
    }
  }, [pathname]);

  return (
    <div
      data-v-0adb81cc=""
      className="snb_area _1d991sp0 _1h4pbgy9u0 _1h4pbgy9uj _1h4pbgy9vs"
      data-v-1ed3965f=""
    >
      <nav data-v-7bcac446="" data-v-0adb81cc="" className="snb">
        <div data-v-7bcac446="" className="snb_list">
       
          <ul data-v-7a824f04="" data-v-7bcac446="" className="snb_menu">
            <li data-v-7a824f04="" className="menu_item">
              <Link
                data-href="/Board/notice"
                data-v-7a824f04=""
                href="/Board/notice"
                className="menu_link"
              >
                공지사항
              </Link>
            </li>
            <li data-v-7a824f04="" className="menu_item">
              <Link
                data-href="/Board/event"
                data-v-7a824f04=""
                href="/Board/event"
                className="menu_link"
              >
                이벤트
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
