"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "/public/css/myPage.css";
import axios from "axios";

export default function MyPageSide() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const BC_URL = "/admin/board/getAllBc";
  const [bc_list, setBc_list] = useState([]);

  function getData() {  
    axios.get(BC_URL)
    .then((res) => {
      setBc_list(res.data.bc_list);
    });
  }

  useEffect(() => {
    getData();
}, []);

  useEffect(() => {
    const currentPath = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
    // 전체 링크를 가져와서 각각 처리
    document.querySelectorAll("a[data-href]").forEach((link) => {
      const linkHref = link.getAttribute("data-href");

      // 쿼리 파라미터가 있는 링크는 전체 경로로 비교하고, 없는 링크는 pathname으로만 비교
      if (linkHref === currentPath || (linkHref === pathname && !linkHref.includes("?"))) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }, [pathname, searchParams]);

  return (
    <div
      data-v-0adb81cc=""
      className="snb_area _1d991sp0 _1h4pbgy9u0 _1h4pbgy9uj _1h4pbgy9vs"
      data-v-1ed3965f=""
    >
      <nav data-v-7bcac446="" data-v-0adb81cc="" className="snb">
        <div data-v-7bcac446="" className="snb_list1">
          <strong data-v-7bcac446="" className="snb_title">
            나의 거래
          </strong>
          <ul data-v-7a824f04="" data-v-7bcac446="" className="snb_menu">
            <li data-v-7a824f04="" className="menu_item">
              <Link
                data-href="/myPage/likelist"
                data-v-7a824f04=""
                href="/myPage/likelist"
                className="menu_link"
              >
                관심목록
              </Link>
            </li>
            <li data-v-7a824f04="" className="menu_item">
              <Link
                data-href="/myPage/celllist"
                data-v-7a824f04=""
                href="/myPage/celllist"
                className="menu_link"
              >
                판매내역
              </Link>
            </li>
            <li data-v-7a824f04="" className="menu_item">
              <Link
                data-href="/myPage/buylist"
                data-v-7a824f04=""
                href="/myPage/buylist"
                className="menu_link"
              >
                구매내역
              </Link>
            </li>
            <li data-v-7a824f04="" className="menu_item">
              <Link data-v-7a824f04="" href="#" className="menu_link">
                중고거래 가계부
              </Link>
            </li>
          </ul>
        </div>
        <div data-v-7bcac446="" className="snb_list1">
          <strong data-v-7bcac446="" className="snb_title">
            나의 정보
          </strong>
          <ul data-v-7a824f04="" data-v-7bcac446="" className="snb_menu">
            <li data-v-7a824f04="" className="menu_item">
              <Link
                data-href="/myPage"
                data-v-7a824f04=""
                href="/myPage"
                className="menu_link"
              >
                마이페이지
              </Link>
            </li>
            <li data-v-7a824f04="" className="menu_item">
              <Link
                data-href="/myPage/profile"
                data-v-7a824f04=""
                href="/myPage/profile"
                className="menu_link"
              >
                프로필
              </Link>
            </li>
            <li data-v-7a824f04="" className="menu_item">
              <Link data-v-7a824f04="" href="/myPage/userManage?category=likeUser" className="menu_link"
                    data-href="/myPage/userManage?category=likeUser">
                모아보기 사용자 관리
              </Link>
            </li>
            <li data-v-7a824f04="" className="menu_item">
              <Link data-v-7a824f04="" href="/myPage/userManage?category=blockedUser" className="menu_link"
                    data-href="/myPage/userManage?category=blockedUser">
                차단 사용자 관리
              </Link>
            </li>
            <li data-v-7a824f04="" className="menu_item">
              <Link data-v-7a824f04="" href="/myPage/userManage?category=noseeUser" className="menu_link"
                    data-href="/myPage/userManage?category=noseeUser">
                게시글 미노출 사용자 관리
              </Link>
            </li>
            {/* <li data-v-7a824f04="" className="menu_item">
              <Link data-v-7a824f04="" href="#" className="menu_link">
                관심 카테고리 설정
              </Link>
            </li> */}
            <li data-v-7a824f04="" className="menu_item">
              <Link data-v-7a824f04="" href="#" className="menu_link">
                알림 설정
              </Link>
            </li>
            {/* <li data-v-7a824f04="" className="menu_item">
              <Link data-v-7a824f04="" href="#" className="menu_link">
                매너온도
              </Link>
            </li>
            <li data-v-7a824f04="" className="menu_item">
              <Link data-v-7a824f04="" href="#" className="menu_link">
                활동 배지
              </Link>
            </li>
            <li data-v-7a824f04="" className="menu_item">
              <Link data-v-7a824f04="" href="#" className="menu_link">
                받은 매너 평가
              </Link>
            </li>
            <li data-v-7a824f04="" className="menu_item">
              <Link data-v-7a824f04="" href="#" className="menu_link">
                받은 거래 후기
              </Link>
            </li> */}
          </ul>
        </div>
        <div data-v-7bcac446="" className="snb_list1">
          <strong data-v-7bcac446="" className="snb_title">
            쌍용 소식
          </strong>
          <ul data-v-7a824f04="" data-v-7bcac446="" className="snb_menu">
            {bc_list.map((ar, index) => (
              <li data-v-7a824f04=""  key={index} className="menu_item">
                <Link data-v-7a824f04="" className="menu_link" href={`/Board/list/${ar.key}`}target="_self">
                  <font>{ar.value}</font>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div data-v-7bcac446="" className="snb_list1">
          <strong data-v-7bcac446="" className="snb_title">
            나의 동네생활
          </strong>
          <ul data-v-7a824f04="" data-v-7bcac446="" className="snb_menu">
            <li data-v-7a824f04="" className="menu_item">
              <Link data-v-7a824f04="" href="#" className="menu_link">
                동네생활 활동
              </Link>
            </li>
          </ul>
        </div>
        <div data-v-7bcac446="" className="snb_list1">
          <strong data-v-7bcac446="" className="snb_title">
            기타
          </strong>
          <ul data-v-7a824f04="" data-v-7bcac446="" className="snb_menu">
            <li data-v-7a824f04="" className="menu_item">
              <Link data-v-7a824f04="" href="#" className="menu_link">
                내 동네 설정
              </Link>
            </li>
            <li data-v-7a824f04="" className="menu_item">
              <Link data-v-7a824f04="" href="#" className="menu_link">
                동네 인증하기
              </Link>
            </li>
            <li data-v-7a824f04="" className="menu_item">
              <Link data-v-7a824f04="" href="#" className="menu_link">
                키워드 알림 설정
              </Link>
            </li>
          </ul>
        </div>
        <div data-v-7bcac446="" className="snb_list1">
          <li data-v-7a824f04="" className="menu_item">
              <Link data-v-7a824f04="" href="#" className="menu_link">
                자주 묻는 질문
              </Link>
            </li>
            <li data-v-7a824f04="" className="menu_item">
              <Link data-v-7a824f04="" href="/Board/terms" className="menu_link">
                약관 및 정책
              </Link>
            </li>
        </div>
      </nav>
    </div>
  );
}
