"use client";

import React, { useEffect, useState } from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CampaignIcon from "@mui/icons-material/Campaign";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import ImageNotSupportedRoundedIcon from "@mui/icons-material/ImageNotSupportedRounded";
import "/public/css/myPage.css";
import Link from "next/link";
import MyPageSide from "@/component/user/layout/MyPageSide";
import axios from "axios";
import Cookies from "js-cookie";

export default function page() {
  const API_URL = "/user/api/admin/userEdit";
  const userkey = Cookies.get("userkey");
  const [uvo, setUvo] = useState({});
  const [sell_1, setSell_1] = useState(0);
  const [sell_2, setSell_2] = useState(0);
  const [sell_3, setSell_3] = useState(0);
  const [sell_4, setSell_4] = useState(0);

  function getData() {
    axios({
      url: API_URL,
      method: "post",
      params: { userkey: userkey },
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.data.ar);
      setUvo(res.data.ar);
      const cell_list = res.data.ar.cell_list;
      var sell1 = 0;
      var sell2 = 0;
      var sell3 = 0;
      var sell4 = 0;
      for (var i = 0; i < cell_list.length; i++) {
        switch (cell_list[i].poststatus) {
          case "1":
            sell1++;
            break;
          case "2":
            sell2++;
            break;
          case "3":
            sell3++;
            break;
          case "4":
            sell4++;
            break;
        }
      }
      setSell_1(sell1);
      setSell_2(sell2);
      setSell_3(sell3);
      setSell_4(sell4);
      console.log([sell1, sell2, sell3, sell4]);
    });
  }

  useEffect(() => {
    if(Cookies.get("userkey")==undefined){
      alert("로그인이 필요한 서비스입니다.");
      window.location.replace("/");
    }
    getData();
  }, []);

  return (
    <>
      <article className="_1h4pbgy7wg _1h4pbgy7wz">
        <div className="_6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462">
          <section style={{ borderBottom: "1px solid #ebebeb" }} className="">
            <div className="_588sy41z _588sy421 _588sy42q _588sy415q _588sy417e">
              <nav className="iq86zf0">
                <ol className="iq86zf1 _588sy42q _588sy415q">
                  <li>
                    <Link href="/">
                      <span className="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf3 iq86zf2 _588sy41n">
                        <font style={{ verticalAlign: "inherit" }}>홈</font>
                      </span>
                    </Link>
                    <span className="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf4 _588sy4ze _588sy4w8">
                      <font style={{ verticalAlign: "inherit" }}> &gt;</font>
                    </span>
                  </li>
                </ol>
              </nav>
              <Link href="/myPage">
                <div className="_588sy41z _588sy421 _588sy42q _588sy415q">
                  <span className="_588sy4192 _588sy41x _588sy41b2 _588sy43">
                    <font style={{ verticalAlign: "inherit" }}>
                      마이 페이지
                    </font>
                  </span>
                </div>
              </Link>
            </div>
            <Link href="/myPage">
              <div className="_1h4pbgy7dk _1h4pbgy7j7 _1h4pbgy7j0 _1h4pbgy7il _1h4pbgy7w0">
                <h1 className="_1h4pbgy78o _1h4pbgy796 _1h4pbgy79g _1h4pbgy7ag _1h4pbgy7c8">
                  <font style={{ verticalAlign: "inherit" }}>마이 페이지</font>
                </h1>
              </div>
            </Link>
          </section>
        </div>
        <div className="my_home container my md _6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462">
          <section className="_1h4pbgy9ug _1h4pbgy8zc _1h4pbgy92j _1h4pbgy7y8 _1h4pbgy83s _1h4pbgy843 _1h4pbgy84k">
            {/* 
                마이페이지 서브
                <jsp:include page="/WEB-INF/views/user/myPageSub/myPageSide.jsp"/>
                */}
            <MyPageSide />
            <div data-v-7b7d73d2="" className="my_home container my md">
              {/* 여기서부터 콘텐츠 */}
              <div
                data-v-ed683452=""
                data-v-7b7d73d2=""
                className="user_membership"
              >
                <div data-v-ed683452="" className="user_detail">
                  <div data-v-ed683452="" className="user_thumb">
                    <img
                      data-v-ed683452=""
                      src={uvo.imgurl}
                      alt="사용자 이미지"
                      className="thumb_img"
                    />
                  </div>
                  <div data-v-ed683452="" className="user_info">
                    <div data-v-ed683452="" className="info_box">
                      <strong data-v-ed683452="" className="name">
                        {uvo.nickname}
                      </strong>
                      <p data-v-ed683452="" className="email">
                        {uvo.id} [ {uvo.email} ]
                      </p>
                    </div>
                    <div data-v-ed683452="" className="info-buttons">
                      <Link
                        data-v-420a5cda=""
                        data-v-ed683452=""
                        href="/myPage/profile"
                        className="btn btn outlinegrey small"
                        type="button"
                      >
                        {" "}
                        프로필{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-v-247cd1ce=""
                data-v-7b7d73d2=""
                className="shortcut-grid"
              >
                <Link
                  data-v-247cd1ce=""
                  href="/myPage/manner"
                  className="menu-item"
                >
                  <div data-v-247cd1ce="" className="icon-wrap">
                    <ThermostatIcon sx={{ width: 28, height: 28 }} />
                  </div>
                  <p
                    data-v-09bea70c=""
                    data-v-7d3b6402=""
                    data-v-247cd1ce=""
                    className="text-lookup name display_paragraph"
                    style={{ color: "rgb(34, 34, 34)" }}
                  >
                    매너온도
                  </p>
                </Link>
                <Link
                  data-v-247cd1ce=""
                  href="/myPage/badge"
                  className="menu-item"
                >
                  <div data-v-247cd1ce="" className="icon-wrap">
                    <MilitaryTechIcon sx={{ width: 28, height: 28 }} />
                  </div>
                  <p
                    data-v-09bea70c=""
                    data-v-7d3b6402=""
                    data-v-247cd1ce=""
                    className="text-lookup name display_paragraph"
                    style={{ color: "rgb(34, 34, 34)" }}
                  >
                    활동 배지
                  </p>
                </Link>
                <Link
                  data-v-247cd1ce=""
                  href="/myPage/moneybook"
                  className="menu-item"
                >
                  <div data-v-247cd1ce="" className="icon-wrap">
                    <AutoStoriesIcon sx={{ width: 28, height: 28 }} />
                  </div>
                  <p
                    data-v-09bea70c=""
                    data-v-7d3b6402=""
                    data-v-247cd1ce=""
                    className="text-lookup name display_paragraph"
                    style={{ color: "rgb(34, 34, 34)" }}
                  >
                    가계부
                  </p>
                </Link>
                <Link data-v-247cd1ce="" href="/notice" className="menu-item">
                  <div data-v-247cd1ce="" className="icon-wrap">
                    <CampaignIcon sx={{ width: 28, height: 28 }} />
                    <span data-v-247cd1ce="" className="badge"></span>
                  </div>
                  <p
                    data-v-09bea70c=""
                    data-v-7d3b6402=""
                    data-v-247cd1ce=""
                    className="text-lookup name display_paragraph"
                    style={{ color: "rgb(34, 34, 34)" }}
                  >
                    공지사항/이벤트
                  </p>
                </Link>
              </div>
              {/* 구매 내역 */}
              <div
                data-v-6752ceb2=""
                data-v-7b7d73d2=""
                className="my_home_title"
              >
                <h3 data-v-6752ceb2="" className="title">
                  {" "}
                  구매 내역{" "}
                </h3>
                <Link
                  data-v-6752ceb2=""
                  href="/myPage/buylist"
                  className="btn_more"
                >
                  <span data-v-6752ceb2="" className="btn_txt">
                    더보기
                  </span>
                  <span
                    className="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf4 _588sy4ze _588sy4w8"
                    style={{ color: "rgb(34, 34, 34, .5)" }}
                  >
                    <font style={{ verticalAlign: "inherit" }}> &gt;</font>
                  </span>
                </Link>
              </div>
              <div data-v-7b7d73d2="" className="recent_purchase">
                <div
                  data-v-2cbb289b=""
                  data-v-7b7d73d2=""
                  className="purchase_list_tab"
                >
                  <div data-v-2cbb289b="" className="tab_item total">
                    <Link data-v-2cbb289b="" href="#" className="tab_link">
                      <dl data-v-2cbb289b="" className="tab_box">
                        <dt data-v-2cbb289b="" className="title">
                          전체
                        </dt>
                        <dd data-v-2cbb289b="" className="count">
                          {uvo.buy_list ? uvo.buy_list.length : 0}
                        </dd>
                      </dl>
                    </Link>
                  </div>
                </div>
                <div data-v-7b7d73d2="">
                  <div
                    data-v-eff62a72=""
                    data-v-7b7d73d2=""
                    className="purchase_list all bid"
                  >
                    {/* 여기서 FOREACH로 3개만 출력하기 */}
                    {uvo.buy_list ? (
                      uvo.buy_list.map((blvo, index) => {
                        const price =
                          blvo.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";

                        if (index > 2) {
                          return;
                        }
                        return (
                          <div key={index} data-v-eff62a72="">
                            <Link
                              href={`/post/detail?postkey=${blvo.postkey}`}
                              data-v-53e92c51=""
                              data-v-eff62a72=""
                            >
                              <div
                                data-v-53e92c51=""
                                className="purchase_list_display_item"
                                style={{
                                  backgroundColor: "rgb(255, 255, 255)",
                                }}
                              >
                                <div
                                  data-v-53e92c51=""
                                  className="purchase_list_product"
                                >
                                  <div
                                    data-v-53e92c51=""
                                    className="list_item_img_wrap"
                                  >
                                    {blvo.pimg_list &&
                                    blvo.pimg_list.length > 0 &&
                                    blvo.pimg_list[0].imgurl != undefined ? (
                                      <img
                                        alt="product_image"
                                        src={blvo.pimg_list[0].imgurl}
                                        className="list_item_img"
                                        style={{ backgroundColor: "#ebf0f5" }}
                                        data-v-53e92c51=""
                                      />
                                    ) : (
                                      <ImageNotSupportedRoundedIcon
                                        style={{
                                          width: "80px", // 아이콘의 너비를 100%로 설정
                                          height: "80px", // 아이콘의 높이를 100%로 설정
                                        }}
                                      />
                                    )}
                                  </div>
                                  <div
                                    data-v-53e92c51=""
                                    className="list_item_title_wrap"
                                  >
                                    <p
                                      data-v-53e92c51=""
                                      className="list_item_title"
                                    >
                                      {blvo.title}
                                    </p>
                                    <p
                                      data-v-53e92c51=""
                                      className="list_item_description"
                                    >
                                      <span data-v-53e92c51="">{price}</span>
                                    </p>
                                  </div>
                                </div>
                                <div
                                  data-v-53e92c51=""
                                  className="list_item_status"
                                >
                                  <div
                                    data-v-53e92c51=""
                                    className="list_item_column column_secondary"
                                  >
                                    <p
                                      data-v-09bea70c=""
                                      data-v-7d3b6402=""
                                      data-v-53e92c51=""
                                      className="text-lookup secondary_title display_paragraph"
                                      style={{ color: "rgba(34, 34, 34, 0.5)" }}
                                    >
                                      {blvo.create_dtm.split(" ")[0]}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        );
                      })
                    ) : (
                      <div
                        data-v-53e92c51=""
                        className="purchase_list_display_item"
                        style={{ backgroundColor: "rgb(255, 255, 255)" }}
                      >
                        구매내역이 없습니다.
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* 판매 내역 */}
              <div
                data-v-6752ceb2=""
                data-v-7b7d73d2=""
                className="my_home_title"
              >
                <h3 data-v-6752ceb2="" className="title">
                  {" "}
                  판매 내역{" "}
                </h3>
                <Link
                  data-v-6752ceb2=""
                  href="/myPage/celllist"
                  className="btn_more"
                >
                  <span data-v-6752ceb2="" className="btn_txt">
                    더보기
                  </span>
                  <span
                    className="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf4 _588sy4ze _588sy4w8"
                    style={{ color: "rgb(34, 34, 34, .5)" }}
                  >
                    <font style={{ verticalAlign: "inherit" }}> &gt;</font>
                  </span>
                </Link>
              </div>
              <div data-v-7b7d73d2="" className="recent_purchase">
                <div
                  data-v-2cbb289b=""
                  data-v-7b7d73d2=""
                  className="purchase_list_tab sell"
                >
                  <div data-v-2cbb289b="" className="tab_item total">
                    <Link data-v-2cbb289b="" href="#" className="tab_link">
                      <dl data-v-2cbb289b="" className="tab_box">
                        <dt data-v-2cbb289b="" className="title">
                          전체
                        </dt>
                        <dd data-v-2cbb289b="" className="count">
                          {uvo.cell_list ? uvo.cell_list.length : 0}
                        </dd>
                      </dl>
                    </Link>
                  </div>
                  <div data-v-2cbb289b="" className="tab_item tab_on">
                    <Link data-v-2cbb289b="" href="#" className="tab_link">
                      <dl data-v-2cbb289b="" className="tab_box">
                        <dt data-v-2cbb289b="" className="title">
                          판매중
                        </dt>
                        <dd data-v-2cbb289b="" className="count">
                          {sell_1}
                        </dd>
                      </dl>
                    </Link>
                  </div>
                  <div data-v-2cbb289b="" className="tab_item tab_on">
                    <Link data-v-2cbb289b="" href="#" className="tab_link">
                      <dl data-v-2cbb289b="" className="tab_box">
                        <dt data-v-2cbb289b="" className="title">
                          예약중
                        </dt>
                        <dd data-v-2cbb289b="" className="count">
                          {sell_2}
                        </dd>
                      </dl>
                    </Link>
                  </div>
                  <div data-v-2cbb289b="" className="tab_item">
                    <Link data-v-2cbb289b="" href="#" className="tab_link">
                      <dl data-v-2cbb289b="" className="tab_box">
                        <dt data-v-2cbb289b="" className="title">
                          거래완료
                        </dt>
                        <dd data-v-2cbb289b="" className="count">
                          {sell_3}
                        </dd>
                      </dl>
                    </Link>
                  </div>
                  <div data-v-2cbb289b="" className="tab_item">
                    <Link data-v-2cbb289b="" href="#" className="tab_link">
                      <dl data-v-2cbb289b="" className="tab_box">
                        <dt data-v-2cbb289b="" className="title">
                          숨김
                        </dt>
                        <dd data-v-2cbb289b="" className="count">
                          {sell_4}
                        </dd>
                      </dl>
                    </Link>
                  </div>
                </div>
                <div data-v-7b7d73d2="">
                  <div
                    data-v-eff62a72=""
                    data-v-7b7d73d2=""
                    className="purchase_list all ask"
                  >
                    {/* 여기서 FOREACH로 3개만 뿌리기 */}
                    {uvo.cell_list ? (
                      uvo.cell_list.map((clvo, index) => {
                        const price =
                          clvo.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";

                        if (index > 2) {
                          return;
                        }
                        return (
                          <div key={index} data-v-eff62a72="">
                            <Link
                              href={`/post/detail?postkey=${clvo.postkey}`}
                              data-v-53e92c51=""
                              data-v-eff62a72=""
                            >
                              <div
                                data-v-53e92c51=""
                                className="purchase_list_display_item"
                                style={{
                                  backgroundColor: "rgb(255, 255, 255)",
                                }}
                              >
                                <div
                                  data-v-53e92c51=""
                                  className="purchase_list_product"
                                >
                                  <div
                                    data-v-53e92c51=""
                                    className="list_item_img_wrap"
                                  >
                                    {clvo.pimg_list &&
                                    clvo.pimg_list.length > 0 &&
                                    clvo.pimg_list[0].imgurl != undefined ? (
                                      <img
                                        alt="product_image"
                                        src={clvo.pimg_list[0].imgurl}
                                        className="list_item_img"
                                        style={{ backgroundColor: "#ebf0f5" }}
                                        data-v-53e92c51=""
                                      />
                                    ) : (
                                      <ImageNotSupportedRoundedIcon
                                        style={{
                                          width: "80px", // 아이콘의 너비를 100%로 설정
                                          height: "80px", // 아이콘의 높이를 100%로 설정
                                        }}
                                      />
                                    )}
                                  </div>
                                  <div
                                    data-v-53e92c51=""
                                    className="list_item_title_wrap"
                                  >
                                    <p
                                      data-v-53e92c51=""
                                      className="list_item_title"
                                    >
                                      {clvo.title}
                                    </p>
                                    <p
                                      data-v-53e92c51=""
                                      className="list_item_description"
                                    >
                                      <span data-v-53e92c51="">{price}</span>
                                    </p>
                                  </div>
                                </div>
                                <div
                                  data-v-53e92c51=""
                                  className="list_item_status"
                                >
                                  <div
                                    data-v-53e92c51=""
                                    className="list_item_column column_secondary"
                                  >
                                    <p
                                      data-v-09bea70c=""
                                      data-v-7d3b6402=""
                                      data-v-53e92c51=""
                                      className="text-lookup secondary_title display_paragraph"
                                      style={{ color: "rgba(34, 34, 34, 0.5)" }}
                                    >
                                      {clvo.create_dtm.split(" ")[0]}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        );
                      })
                    ) : (
                      <div
                        data-v-53e92c51=""
                        className="purchase_list_display_item"
                        style={{ backgroundColor: "rgb(255, 255, 255)" }}
                      >
                        판매내역이 없습니다.
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* 관심 상품 */}
              <div
                data-v-6752ceb2=""
                data-v-7b7d73d2=""
                className="my_home_title"
              >
                <h3 data-v-6752ceb2="" className="title">
                  {" "}
                  관심 상품{" "}
                </h3>
                <Link
                  data-v-6752ceb2=""
                  href="/myPage/likelist"
                  className="btn_more"
                >
                  <span data-v-6752ceb2="" className="btn_txt">
                    더보기
                  </span>
                  <span
                    className="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf4 _588sy4ze _588sy4w8"
                    style={{ color: "rgb(34, 34, 34, .5)" }}
                  >
                    <font style={{ verticalAlign: "inherit" }}> &gt;</font>
                  </span>
                </Link>
              </div>
              <div data-v-7b7d73d2="" className="interest_product">
                <div data-v-7b7d73d2="" className="product_list">
                  {/* 여기서 FOREACH로 8개 뿌리기 */}
                  {uvo.w_list ? (
                    uvo.w_list.length > 0 ? (
                      uvo.w_list.map((wlvo, index) => {
                        if (index > 7) {
                          return;
                        }
                        const price =
                          wlvo.pvo.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
                        return (
                          <div
                            key={index}
                            data-v-2c8107bc=""
                            data-v-7b7d73d2=""
                            className="product_item"
                          >
                            <Link
                              data-v-2c8107bc=""
                              href={`/post/detail?postkey=${wlvo.pvo.postkey}`}
                              className="item_inner"
                            >
                              <div data-v-2c8107bc="" className="thumb_box">
                                <div
                                  data-v-16369cf2=""
                                  data-v-2c8107bc=""
                                  className="product"
                                  style={{
                                    backgroundColor: "rgb(235, 240, 245)",
                                  }}
                                >
                                  <div
                                    data-v-17ca498c=""
                                    data-v-16369cf2=""
                                    className="display_tag_item product_inner_tag tag--default"
                                  >
                                    <div
                                      data-v-17ca498c=""
                                      data-v-a7793886=""
                                      className="tag display_tag_item"
                                      style={{
                                        backgroundColor: "rgb(242, 249, 246)",
                                        color: "rgb(49, 180, 110)",
                                      }}
                                    >
                                      <span
                                        data-v-17ca498c=""
                                        className="tag_text"
                                      >
                                        {" "}
                                        빠른배송{" "}
                                      </span>
                                    </div>
                                  </div>
                                  <picture
                                    data-v-82b93d2c=""
                                    data-v-16369cf2=""
                                    className="picture product_img"
                                  >
                                    {wlvo.pvo.pimg_list &&
                                    wlvo.pvo.pimg_list.length > 0 &&
                                    wlvo.pvo.pimg_list[0].imgurl !=
                                      undefined ? (
                                      <img
                                        alt={wlvo.pvo.title}
                                        src={wlvo.pvo.pimg_list[0].imgurl}
                                        loading="lazy"
                                        style={{
                                          backgroundColor: "#ebf0f5",
                                          width: "100%",
                                          height: "100%",
                                        }}
                                        data-v-53e92c51=""
                                      />
                                    ) : (
                                      <ImageNotSupportedRoundedIcon
                                        style={{
                                          backgroundColor: "#ebf0f5",
                                          width: "100%", // 아이콘의 너비를 100%로 설정
                                          height: "100%", // 아이콘의 높이를 100%로 설정
                                        }}
                                      />
                                    )}
                                  </picture>
                                  <span
                                    data-v-4382eb99=""
                                    data-v-2c8107bc=""
                                    aria-label="관심상품"
                                    role="button"
                                    className="btn_wish"
                                    data-v-16369cf2=""
                                  >
                                    <svg
                                      data-v-4382eb99=""
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon sprite-icons ico-wish-on"
                                    >
                                      {/* <use data-v-4382eb99="" href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-ico-wish-on" xlink:href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-ico-wish-on"></use> */}
                                    </svg>
                                  </span>
                                </div>
                              </div>
                              <div data-v-2c8107bc="" className="info_box">
                                <div data-v-2c8107bc="" className="brand">
                                  <p data-v-2c8107bc="" className="brand-text">
                                    {" "}
                                    {wlvo.pvo.title}{" "}
                                  </p>
                                </div>
                                <p data-v-2c8107bc="" className="name">
                                  {wlvo.pvo.cvo.categoryname}
                                </p>
                                <div data-v-2c8107bc="" className="price">
                                  <div data-v-2c8107bc="" className="amount lg">
                                    <em data-v-2c8107bc="" className="num">
                                      {" "}
                                      {price}{" "}
                                    </em>
                                  </div>
                                  <div data-v-2c8107bc="" className="desc">
                                    <p data-v-2c8107bc="">
                                      {wlvo.pvo.hope_place}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        );
                      })
                    ) : (
                      <p style={{ margin: "0 10%" }}>
                        등록된 관심 상품이 없습니다.
                      </p>
                    )
                  ) : (
                    <p style={{ margin: "0 10%" }}>
                      등록된 관심 상품이 없습니다.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
      {/* 아래 광고 이미지 */}
      <div className="_588sy4rk _588sy4rr _588sy4ry _588sy4s5">
        <div className="_1h4pbgy14w _1h4pbgy9ug _1h4pbgy9xc _1h4pbgya2w">
          <div className="a1nvr40 _1h4pbgy7nk _1h4pbgy7o1 _1h4pbgy7oy _1h4pbgy7pn _1h4pbgy7pw _1h4pbgy7qd _1h4pbgy7s8 _1h4pbgy7sp _1h4pbgy7tm _1h4pbgy7ub _1h4pbgy7uk _1h4pbgy7v1 _1h4pbgy14w _1h4pbgy8jc">
            <div className="a1nvr41">
              <div className="a1nvr42 _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy9wi _1h4pbgy9vs _1h4pbgya0o">
                <div
                  className="a1nvr43 _1h4pbgy78g _1h4pbgy78p _1h4pbgy796 _1h4pbgy79n _1h4pbgy7ag _1h4pbgy7c8 _1h4pbgy7bk _1h4pbgy7az _1h4pbgy7b8 _1h4pbgy48 _1h4pbgya54 _1h4pbgya4i _19xafot0 _19xafot4 _19xafot5"
                  style={{
                    _19xafot2: "0ms",
                    _19xafot1: "500ms",
                    _19xafot3: "translateY(1rem)",
                  }}
                >
                  <font>
                    <font>오늘 대단한 발견을 해보세요!</font>
                  </font>
                </div>
                <div
                  className="a1nvr44 _1h4pbgy79c _1h4pbgy7a3 _1h4pbgy7ac _1h4pbgy7ag _1h4pbgy7c8 _1h4pbgy7bk _1h4pbgy7az _1h4pbgy7b8 _1h4pbgy8g _1h4pbgy81k _19xafot0 _19xafot4 _19xafot5"
                  style={{
                    _19xafot2: "0ms",
                    _19xafot1: "500ms",
                    _19xafot3: "translateY(1rem)",
                  }}
                >
                  <font>
                    <font>앱을 받으세요</font>
                  </font>
                </div>
                <div className="a1nvr45 _1h4pbgy9vc _1h4pbgy90g _1h4pbgy90r">
                  <Link
                    href="#"
                    className="_19xafot0 _19xafot4 _19xafot5"
                    style={{
                      _19xafot2: "0ms",
                      _19xafot1: "500ms",
                      _19xafot3: "translateY(1rem)",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="_1h4pbgy8rk _1h4pbgy8rv _1h4pbgy8s4"
                      src="https://karrotmarket-com-sanity-cdn.krrt.io/production/49380c1c7e70e49f0f93baf0f790925eefc69082-120x40.svg"
                      alt="앱스토어에서 다운로드"
                    />
                  </Link>
                  <Link
                    href="#"
                    className="_19xafot0 _19xafot4 _19xafot5"
                    style={{
                      _19xafot2: "0ms",
                      _19xafot1: "500ms",
                      _19xafot3: "translateY(1rem)",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="_1h4pbgy8rk _1h4pbgy8rv _1h4pbgy8s4"
                      src="https://karrotmarket-com-sanity-cdn.krrt.io/production/0d8f72b8e4cdb98af115a7c1f04c4abf19f5c419-180x53.svg"
                      alt="Google Play에서 받으세요"
                    />
                  </Link>
                </div>
              </div>
              <div className="a1nvr46">
                <img
                  src="https://karrotmarket-com-sanity-cdn.krrt.io/production/bff14eb869318da13eeb329ac060450dfe1ecadf-750x1624.png"
                  className="a1nvr49 a1nvr48 _1h4pbgy95k _1h4pbgya0o _19xafot0 _19xafot4 _19xafot5"
                  alt="홈 피드 화면의 스크린샷"
                  style={{
                    _19xafot2: "0ms",
                    _19xafot1: "1000ms",
                    _19xafot3: "translateY(1rem)",
                  }}
                />
                <img
                  src="https://karrotmarket-com-sanity-cdn.krrt.io/production/5cfdb708e8491051b4765819e796ca373e58fc44-753x1637.png"
                  className="a1nvr4a a1nvr48 _1h4pbgy95k _1h4pbgya0o _19xafot0 _19xafot4 _19xafot5"
                  alt="상세 페이지의 스크린샷"
                  style={{
                    _19xafot2: "0ms",
                    _19xafot1: "1000ms",
                    _19xafot3: "translateY(-1rem)",
                  }}
                />
                <img
                  src="https://karrotmarket-com-sanity-cdn.krrt.io/production/1da74f52dfcb54be6b1ec40af8d8480ed6abc4c0-900x339.png"
                  className="a1nvr4b _19xafot0 _19xafot4 _19xafot5"
                  alt="홈 피드 항목의 스크린샷"
                  style={{
                    _19xafot2: "0ms",
                    _19xafot1: "1000ms",
                    _19xafot3: "translateY(1rem)",
                  }}
                />
                <div className="a1nvr47"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
