"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect,useState } from "react";
import axios from 'axios';
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

  const bcUrl = "/admin/board/getAllBc";
  const [bclist, setBclist] = useState([]);
  const [categorykey,setCategorykey] = useState(0);

  function getData() {  
    axios.get(bcUrl)
    .then((json) => { 
        setBclist(json.data.bc_list);
        setCategorykey(json.data.bc_list.key);
    })
    .catch((error) => {
        console.error("데이터 로딩 오류:", error);  
    });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      data-v-0adb81cc=""
      className="snb_area _1d991sp0 _1h4pbgy9u0 _1h4pbgy9uj _1h4pbgy9vs"
      data-v-1ed3965f=""
    >
      <nav data-v-7bcac446="" data-v-0adb81cc="" className="snb">
        <div data-v-7bcac446="" className="snb_list">
       
          <ul data-v-7a824f04="" data-v-7bcac446="" className="snb_menu">
          {bclist.length > 0 ? (
              bclist.map((bc, index) => (
                <li key={index} data-v-7a824f04="" className="menu_item">
                  <Link
                    data-href={`/Board/${categorykey}`}
                    data-v-7a824f04=""
                    href={`/Board/${bc.value}`}
                    className="menu_link"
                  >
                    {bc.name} {/* 카테고리 이름 표시 */}
                  </Link>
                </li>
              ))
            ) : (
              <li data-v-7a824f04="" className="menu_item">
                <font>준비 중...</font>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
