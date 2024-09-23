"use client";
import Category from "@/component/user/index/Category";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [category_list, setCategory_list] = useState([]);

  function getCategory() {
    axios({
      url: "/category/all",
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setCategory_list(res.data.category_list);
    });
  }

  useEffect(() => {
    getCategory();
  }, []);

  // #region 메인 배너 슬라이드 이벤트
  const banner_buttons = document.querySelectorAll("button.slick-slide-btn");

  banner_buttons.forEach((button) => {
    button.addEventListener("click", function () {
      let idx = 0;
      const currentSlide = document.querySelector(
        "div.slick-active.slick-current"
      );
      if (button.dataset.prev === "yes") {
        idx = currentSlide.dataset.index - 1;
        if (idx < 0) idx = 2;
      } else {
        idx = parseInt(currentSlide.dataset.index) + 1;
        if (idx > 2) idx = 0;
      }

      // Remove classes "slick-active" and "slick-current" from all slides
      document.querySelectorAll("div.slick-slide").forEach((slide) => {
        slide.classList.remove("slick-active");
        slide.classList.remove("slick-current");
      });

      // Add classes "slick-active" and "slick-current" to the new active slide
      const newActiveSlide = document.querySelector(
        `div.slick-slide[data-index='${idx}']`
      );
      newActiveSlide.classList.add("slick-active");
      newActiveSlide.classList.add("slick-current");

      // Update the slide track's transform and transition styles
      const slickTrack = document.querySelector("div.slick-track");
      slickTrack.style.transform = `translate3d(${-1400 * idx}px, 0px, 0px)`;
      slickTrack.style.transition = "-webkit-transform 500ms ease 0s";

      // Remove and add classes for the inner div elements
      document
        .querySelectorAll("div.slick-slide div div")
        .forEach((innerDiv) => {
          innerDiv.classList.remove("_12vdq0bl");
        });
      document
        .querySelector(`div.slick-slide[data-index='${idx}'] div div`)
        .classList.add("_12vdq0bl");

      // Update the slick dots to reflect the active slide
      document.querySelectorAll("ul.slick-dots li").forEach((dot) => {
        dot.classList.remove("slick-active");
      });
      document
        .querySelector(`ul.slick-dots li:nth-child(${idx + 1})`)
        .classList.add("slick-active");

      // Update the image classes
      const imgDiv = document.getElementById("slick-slide-img-div");
      imgDiv.querySelectorAll("span img").forEach((img) => {
        img.classList.remove("_12vdq0b4");
      });
      imgDiv
        .querySelectorAll(`span:nth-child(${idx + 1}) img`)
        .forEach((img) => {
          img.classList.add("_12vdq0b4");
        });

      // Change the background color based on the index
      const bgColorDiv = document.querySelector(
        "div._12vdq0b0._1h4pbgy9ug._1h4pbgy9xc"
      );
      switch (idx) {
        case 0:
          bgColorDiv.style.backgroundColor = "rgb(255, 250, 224)";
          break;
        case 1:
          bgColorDiv.style.backgroundColor = "rgb(238, 252, 255)";
          break;
        case 2:
          bgColorDiv.style.backgroundColor = "rgb(227, 247, 209)";
          break;
      }
    });
  });
  // #endregion

  // #region 상품 슬라이드 왼쪽버튼
  function slide_l(e) {
    const scroll_div = e.currentTarget.parentNode.querySelector(
      'div[data-scroll_div="scroll_div"]'
    );
    let chk = parseInt(scroll_div.getAttribute("data-scroll_idx"));
    const chkRange = parseInt(scroll_div.getAttribute("data-scroll_range"));

    if (chk == "1") {
      scroll_div.parentNode
        .querySelector("div[data-direct='left']")
        .classList.add("_1n1zga89");
      scroll_div.parentNode
        .querySelector("div._1n1zga8b")
        .querySelector("div")
        .classList.add("_1n1zga8g");

      if (chkRange == "2") {
        scroll_div.parentNode
          .querySelector("div[data-direct='right']")
          .classList.remove("_1n1zga89");
        scroll_div.parentNode
          .querySelector("div._1n1zga8c")
          .querySelector("div")
          .classList.remove("_1n1zga8g");
      }
    } else if (chk == "2") {
      scroll_div.parentNode
        .querySelector("div[data-direct='right']")
        .classList.remove("_1n1zga89");
      scroll_div.parentNode
        .querySelector("div._1n1zga8c")
        .querySelector("div")
        .classList.remove("_1n1zga8g");
    }

    scroll_div.setAttribute("data-scroll_idx", (chk - 1).toString());
    scroll_div.scrollTo({
      left: scroll_div.scrollLeft - 1220,
      behavior: "smooth",
    });
  }
  // #endregion

  // #region 상품 슬라이드 오른쪽버튼
  function slide_r(e) {
    const scroll_div = e.currentTarget.parentNode.querySelector(
      'div[data-scroll_div="scroll_div"]'
    );
    let chk = parseInt(scroll_div.getAttribute("data-scroll_idx"));
    const chkRange = parseInt(scroll_div.getAttribute("data-scroll_range"));

    if (chk == "0") {
      scroll_div.parentNode
        .querySelector("div[data-direct='left']")
        .classList.remove("_1n1zga89");
      scroll_div.parentNode
        .querySelector("div._1n1zga8b")
        .querySelector("div")
        .classList.remove("_1n1zga8g");

      if (chkRange == "2") {
        scroll_div.parentNode
          .querySelector("div[data-direct='right']")
          .classList.add("_1n1zga89");
        scroll_div.parentNode
          .querySelector("div._1n1zga8c")
          .querySelector("div")
          .classList.add("_1n1zga8g");
      }
    } else if (chk == "1") {
      scroll_div.parentNode
        .querySelector("div[data-direct='right']")
        .classList.add("_1n1zga89");
      scroll_div.parentNode
        .querySelector("div._1n1zga8c")
        .querySelector("div")
        .classList.add("_1n1zga8g");
    }

    scroll_div.setAttribute("data-scroll_idx", (chk + 1).toString());
    scroll_div.scrollTo({
      left: scroll_div.scrollLeft + 1220,
      behavior: "smooth",
    });
  }
  // #endregion

  return (
    <>
      {/* 배너 이미지 */}
      <div
        className="_12vdq0b0 _1h4pbgy9ug _1h4pbgy9xc"
        style={{ backgroundColor: "rgb(255, 250, 224)" }}
      >
        <div
          id="slick-slide-img-div"
          className="_12vdq0b1 _1h4pbgya0o _1h4pbgy8og _1h4pbgya2w"
        >
          <span>
            <img
              src="https://karrotmarket-com-sanity-cdn.krrt.io/production/0ded9b652f3345f88578f91f0944e86191c027ea-1125x930.png"
              alt="1"
              className="_12vdq0b2 _12vdq0b4 _12vdq0b6"
            />
            <img
              src="https://karrotmarket-com-sanity-cdn.krrt.io/production/e249e1aa865fdaf2836b7aa222f6ffc52c81ab60-1728x1200.png"
              alt="1"
              className="_12vdq0b2 _12vdq0b4 _12vdq0b7"
            />
            <img
              src="https://karrotmarket-com-sanity-cdn.krrt.io/production/9c4bd85f621ad93f1d09ebedf4d1a88279f97ec9-2976x1200.png"
              alt="1"
              className="_12vdq0b2 _12vdq0b4 _12vdq0b8"
            />
            <img
              src="https://karrotmarket-com-sanity-cdn.krrt.io/production/9c4bd85f621ad93f1d09ebedf4d1a88279f97ec9-2976x1200.png"
              alt="1"
              className="_12vdq0b2 _12vdq0b4 _12vdq0b9"
            />
            <img
              src="https://karrotmarket-com-sanity-cdn.krrt.io/production/74a19f9057d1703f1eae21482138f48ff2efe76d-3600x1321.png"
              alt="1"
              className="_12vdq0b2 _12vdq0b4 _12vdq0ba"
            />
          </span>
          <span>
            <img
              src="https://karrotmarket-com-sanity-cdn.krrt.io/production/b293fb51b3ec1b60ebd763abd50f0d4017ed9e9b-1125x1050.png"
              alt="1"
              className="_12vdq0b2 _12vdq0b6"
            />
            <img
              src="https://karrotmarket-com-sanity-cdn.krrt.io/production/77a96b1abaf205caeae5ea3a9c5cf57fae30f4ef-1728x1201.png"
              alt="1"
              className="_12vdq0b2 _12vdq0b7"
            />
            <img
              src="https://karrotmarket-com-sanity-cdn.krrt.io/production/e2b63428bbfd29189e3f854f323251e8942a15f6-2304x1080.png"
              alt="1"
              className="_12vdq0b2 _12vdq0b8"
            />
            <img
              src="https://karrotmarket-com-sanity-cdn.krrt.io/production/1db9cae0ec2f6cd66c718460df4af1b948fd769c-2976x1201.png"
              alt="1"
              className="_12vdq0b2 _12vdq0b9"
            />
            <img
              src="https://karrotmarket-com-sanity-cdn.krrt.io/production/62e471b9b0e855c01d2d713741079d24f71e9485-3600x1321.png"
              alt="1"
              className="_12vdq0b2 _12vdq0ba"
            />
          </span>
          <span>
            <img
              src="https://karrotmarket-com-sanity-cdn.krrt.io/production/cf7f48217e83ab4e21226435575600d91c1dd942-1125x1051.png"
              alt="1"
              className="_12vdq0b2 _12vdq0b6"
            />
            <img
              src="https://karrotmarket-com-sanity-cdn.krrt.io/production/e59f691b43accc66bdc7966ea0051bd13550d38a-1728x1201.png"
              alt="1"
              className="_12vdq0b2 _12vdq0b7"
            />
            <img
              src="https://karrotmarket-com-sanity-cdn.krrt.io/production/8f02fde2695e7dcb987a2603634b45b29887d550-2304x1081.png"
              alt="1"
              className="_12vdq0b2 _12vdq0b8"
            />
            <img
              src="https://karrotmarket-com-sanity-cdn.krrt.io/production/bbbe3bbcc6e3bc3886bcc79af0b413d3b2896b11-2976x1201.png"
              alt="1"
              className="_12vdq0b2 _12vdq0b9"
            />
            <img
              src="https://karrotmarket-com-sanity-cdn.krrt.io/production/75f89ca0b8afbb816f1e16058fd10c5e767d17a8-3600x1321.png"
              alt="1"
              className="_12vdq0b2 _12vdq0ba"
            />
          </span>
          <div
            className="slick-slider _12vdq0bj _1h4pbgy8jc slick-initialized"
            dir="ltr"
          >
            <div className="slick-list">
              <div
                className="slick-track"
                style={{
                  width: "4200px",
                  opacity: "1",
                  transform: "translated3d(0px, 0px, 0px)",
                }}
              >
                <div
                  data-index="0"
                  className="slick-slide slick-active slick-current"
                  tabIndex="-1"
                  aria-hidden="false"
                  style={{ outline: "none", width: "1400px" }}
                >
                  <div>
                    <div
                      className="_12vdq0bk _1h4pbgy7nk _1h4pbgy7o1 _1h4pbgy7oy _1h4pbgy7pn _1h4pbgy7pw _1h4pbgy7qd _1h4pbgy7s8 _1h4pbgy7sp _1h4pbgy7tm _1h4pbgy7ub _1h4pbgy7uk _1h4pbgy7v1 _1h4pbgy8tk _1h4pbgya0o _1h4pbgy9ug _1h4pbgy9vs _12vdq0bl"
                      tabIndex="-1"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <h1 className="_12vdq0bm _1h4pbgy794 _1h4pbgy79d _1h4pbgy79m _1h4pbgy7a3 _1h4pbgy7ac _1h4pbgy7ag _1h4pbgy7c8 _1h4pbgy7bk _1h4pbgya4g _1h4pbgy7xc _1h4pbgy7xl _1h4pbgy7ya _1h4pbgy7yr _1h4pbgy7ys _1h4pbgy81k _12vdq0bn">
                        <font>당신 근처의 지역 생활 커뮤니티</font>
                      </h1>
                      <h2 className="_12vdq0bp _1h4pbgy9u0 _1h4pbgy9ua _1h4pbgy77u _1h4pbgy78j _1h4pbgy78s _1h4pbgy7ag _1h4pbgy7c0 _1h4pbgy7bk _1h4pbgya4g _12vdq0bq"></h2>
                    </div>
                  </div>
                </div>
                <div
                  data-index="1"
                  className="slick-slide"
                  tabIndex="-1"
                  aria-hidden="true"
                  style={{ outline: "none", width: "1400px" }}
                >
                  <div>
                    <div
                      className="_12vdq0bk _1h4pbgy7nk _1h4pbgy7o1 _1h4pbgy7oy _1h4pbgy7pn _1h4pbgy7pw _1h4pbgy7qd _1h4pbgy7s8 _1h4pbgy7sp _1h4pbgy7tm _1h4pbgy7ub _1h4pbgy7uk _1h4pbgy7v1 _1h4pbgy8tk _1h4pbgya0o _1h4pbgy9ug _1h4pbgy9vs"
                      tabIndex="-1"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <h3 className="_12vdq0bm _1h4pbgy794 _1h4pbgy79d _1h4pbgy79m _1h4pbgy7a3 _1h4pbgy7ac _1h4pbgy7ag _1h4pbgy7c8 _1h4pbgy7bk _1h4pbgya4g _1h4pbgy7xc _1h4pbgy7xl _1h4pbgy7ya _1h4pbgy7yr _1h4pbgy7ys _1h4pbgy81k _12vdq0bn">
                        <font>믿을만한 이웃 간 중고거래</font>
                      </h3>
                      <h4 className="_12vdq0bp _1h4pbgy9u0 _1h4pbgy9ua _1h4pbgy77u _1h4pbgy78j _1h4pbgy78s _1h4pbgy7ag _1h4pbgy7c0 _1h4pbgy7bk _1h4pbgya4g _12vdq0bq"></h4>
                    </div>
                  </div>
                </div>
                <div
                  data-index="2"
                  className="slick-slide"
                  tabIndex="-1"
                  aria-hidden="true"
                  style={{ outline: "none", width: "1400px" }}
                >
                  <div>
                    <div
                      className="_12vdq0bk _1h4pbgy7nk _1h4pbgy7o1 _1h4pbgy7oy _1h4pbgy7pn _1h4pbgy7pw _1h4pbgy7qd _1h4pbgy7s8 _1h4pbgy7sp _1h4pbgy7tm _1h4pbgy7ub _1h4pbgy7uk _1h4pbgy7v1 _1h4pbgy8tk _1h4pbgya0o _1h4pbgy9ug _1h4pbgy9vs"
                      tabIndex="-1"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <h3 className="_12vdq0bm _1h4pbgy794 _1h4pbgy79d _1h4pbgy79m _1h4pbgy7a3 _1h4pbgy7ac _1h4pbgy7ag _1h4pbgy7c8 _1h4pbgy7bk _1h4pbgya4g _1h4pbgy7xc _1h4pbgy7xl _1h4pbgy7ya _1h4pbgy7yr _1h4pbgy7ys _1h4pbgy81k _12vdq0bn">
                        <font>이웃만 아는 동네 정보와 이야기</font>
                      </h3>
                      <h4 className="_12vdq0bp _1h4pbgy9u0 _1h4pbgy9ua _1h4pbgy77u _1h4pbgy78j _1h4pbgy78s _1h4pbgy7ag _1h4pbgy7c0 _1h4pbgy7bk _1h4pbgya4g _12vdq0bq"></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul style={{ display: "block" }} className="slick-dots">
              <li className="slick-active">
                <button>
                  <font>1</font>
                </button>
              </li>
              <li className="">
                <button>
                  <font>2</font>
                </button>
              </li>
              <li className="">
                <button>
                  <font>3</font>
                </button>
              </li>
            </ul>
          </div>
          <button
            id="slick-slide-prev-btn"
            aria-label="이전 배너 이미지"
            data-prev="yes"
            className="slick-slide-btn _12vdq0bd _1h4pbgya0w _1h4pbgya1s _1h4pbgy9u0 _1h4pbgy9ub _1h4pbgy9yw _12vdq0be"
          >
            <span
              style={{ display: "inline-flex" }}
              className="_12vdq0bg _1h4pbgy8hk _1h4pbgy8rs _12vdq0bi"
              data-seed-icon="icon_chevron_left_thin"
              data-seed-icon-version="0.2.1"
            >
              <svg
                id="icon_chevron_left_thin"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-karrot-ui-icon="true"
              >
                <g>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.6225 3.17006C16.8525 3.40006 16.8525 3.78006 16.6225 4.01006L8.63245 12.0001L16.6225 19.9901C16.8525 20.2201 16.8525 20.6001 16.6225 20.8301C16.3925 21.0601 16.0125 21.0601 15.7825 20.8301L7.37245 12.4201C7.14245 12.1901 7.14245 11.8101 7.37245 11.5801L15.7825 3.17006C16.0125 2.94006 16.3925 2.94006 16.6225 3.17006Z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </span>
          </button>
          <button
            id="slick-slide-next-btn"
            aria-label="다음 배너 이미지"
            data-prev="no"
            className="slick-slide-btn _12vdq0bd _1h4pbgya0w _1h4pbgya1s _1h4pbgy9u0 _1h4pbgy9ub _1h4pbgy9yw _12vdq0bf"
          >
            <span
              style={{ display: "inline-flex" }}
              className="_12vdq0bg _1h4pbgy8hk _1h4pbgy8rs _12vdq0bi"
              data-seed-icon="icon_chevron_right_thin"
              data-seed-icon-version="0.2.1"
            >
              <svg
                id="icon_chevron_right_thin"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-karrot-ui-icon="true"
              >
                <g>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.22246 3.17006L16.6325 11.5801C16.8625 11.8101 16.8625 12.1901 16.6325 12.4201L8.22246 20.8301C7.99246 21.0601 7.61246 21.0601 7.38246 20.8301C7.15246 20.6001 7.15246 20.2201 7.38246 19.9901L15.3725 12.0001L7.38246 4.01006C7.15246 3.78006 7.15246 3.40006 7.38246 3.17006C7.61246 2.94006 7.99246 2.94006 8.22246 3.17006Z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* 상품 목록 */}
      <div className="_6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462">
        <article className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy91c _1h4pbgy92b _1h4pbgy91x _1h4pbgya0o _1h4pbgy83s _1h4pbgy84b _1h4pbgy84k">
          {/* 나눔 목록 */}
          <section className="_1h4pbgy9ug _1h4pbgy9vs">
            <header className="_1h4pbgy7xc _1h4pbgy7xv _1h4pbgy828 _1h4pbgy82r _1h4pbgy9ug _1h4pbgy9xs">
              <div
                data-gtm="main_article"
                className="_1h4pbgy8g _1h4pbgy7ag _1h4pbgy78o _1h4pbgy797 _1h4pbgy9w0"
              >
                <font>나눔 목록</font>
              </div>
              <Link
                className="_1h4pbgy9ug _1h4pbgy76o _1h4pbgy78j _1h4pbgy784 _1h4pbgy78l _1h4pbgy7ao"
                href="post?sort=recent&minPrice=0&maxPrice=0"
              >
                <span
                  data-gtm="main_see_all"
                  className="m79qaj0 _1h4pbgyu0 _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy8zs"
                >
                  <font>더보기</font>
                </span>
                <span className="_1h4pbgy9ug _1h4pbgy9wo">
                  <span
                    style={{
                      display: "inline-flex",
                      width: "16px",
                      height: "16px",
                    }}
                    className="_1h4pbgyu0"
                    data-seed-icon="icon_chevron_right_fill"
                    data-seed-icon-version="0.2.1"
                  >
                    <svg
                      id="icon_chevron_right_fill"
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-karrot-ui-icon="true"
                    >
                      <g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.64948 3.27994L16.6995 11.3299C17.0695 11.6999 17.0695 12.2999 16.6995 12.6699L8.64948 20.7199C8.27948 21.0899 7.67948 21.0899 7.30948 20.7199C6.93948 20.3499 6.93948 19.7499 7.30948 19.3799L14.6895 11.9999L7.30948 4.61994C6.93948 4.24994 6.93948 3.64994 7.30948 3.27994C7.67948 2.90994 8.27948 2.90994 8.64948 3.27994Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </span>
              </Link>
            </header>
            <div className="wa1ti51 _9rcp1w1 _1b153uw7">
              <div className="_1n1zga84 _1n1zga80 _1h4pbgya0o">
                <div
                  data-scroll_div="scroll_div"
                  data-scroll_idx="0"
                  data-scroll_range="2"
                  className="_1n1zga85 _1h4pbgy9zk _1h4pbgy8jc"
                >
                  <div className="wa1ti52 _1h4pbgy7nk _1h4pbgy7o1 _1h4pbgy7oy _1h4pbgy7m3 _1h4pbgy7s8 _1h4pbgy7sp _1h4pbgy7tm _1h4pbgy7qr _1h4pbgy90w _1h4pbgya54">
                    <div className="wa1ti53">
                      <Link href="/buy-sell/chair-911716/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <span
                              className=" lazy-load-image-background opacity lazy-load-image-loaded"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                className="_1b153uwe _1h4pbgya3k"
                                src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202308/b9553324f6100d7c3fed27236f1c5fc0cdad18fe9631899e234c1418278cb39d.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                alt="썸네일"
                              />
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>의자</font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>나눔</font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>할렘</font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/the-dream-songs-by-john-berryman-poetry-collection-1269693/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <span
                              className=" lazy-load-image-background opacity lazy-load-image-loaded"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                className="_1b153uwe _1h4pbgya3k"
                                src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202311/5f72eb552009cfbae02b5fbb50879e26d3a0a4451aeb8c0dae93bb5fc7603f6d_0.webp?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                alt="썸네일"
                              />
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>존 베리먼의 드림 송: 시집</font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>무료</font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>요크빌</font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/advanced-copy-of-the-comfort-of-crows-by-margaret-renkl-1348257/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <span
                              className=" lazy-load-image-background opacity lazy-load-image-loaded"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                className="_1b153uwe _1h4pbgya3k"
                                src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202312/18fe406ac6f305972edee44f049d3483331b6a440c0496f542c2ed791df15ee8_0.webp?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                alt="썸네일"
                              />
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  Margaret Renkl의 The comfort of Crows 사전
                                  사본
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>무료</font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>요크빌</font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/baby-signs-bear-great-side-hustle-of-for-personal-use-1606444/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <span
                              className=" lazy-load-image-background opacity lazy-load-image-loaded"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                className="_1b153uwe _1h4pbgya3k"
                                src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202402/a880116199923383302be000789f499915c99d3b2ecd6ee9afba701e4fb2be21.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                alt="썸네일"
                              />
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>
                                    Baby Signs Bear - 개인용으로 좋은 부업
                                  </font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>무료</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>할렘</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/freecycle-iphone-11-pro-max-phone-cases-pop-sockets-1671097/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <span
                              className=" lazy-load-image-background opacity lazy-load-image-loaded"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                className="_1b153uwe _1h4pbgya3k"
                                src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202402/c0e13298fb2f565347d09d2ec7f4e375b1f534ff8b6e9cb42e32cce63c7046fd.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                alt="썸네일"
                              />
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>
                                    #프리사이클 아이폰11 프로맥스 폰케이스 &amp;
                                    팝소켓
                                  </font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>무료</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>레녹스 힐</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/freecycle-10-happier-1833737/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <span
                              className=" lazy-load-image-background opacity lazy-load-image-loaded"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                className="_1b153uwe _1h4pbgya3k"
                                src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202403/b228589ead3925ae58d163d545bccb9e30d5062365088996c663d0c146ddc2cd.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                alt="썸네일"
                              />
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>#자유순환- 10% 더 행복해지다</font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>무료</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>첼시</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/chalkboard-plaque-1833752/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <span
                              className=" lazy-load-image-background opacity lazy-load-image-loaded"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                className="_1b153uwe _1h4pbgya3k"
                                src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202403/eb3c0d03a66c447e84ef070fa9c05fee4ee2573a776a23ce83815c1886c8f49d_0.webp?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                alt="thumbnail"
                              />
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>칠판 명판🥕</font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>무료</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>중앙 공원</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/poster-1961259/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <span
                              className=" lazy-load-image-background opacity"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <span
                                className="_1b153uwe _1h4pbgya3k"
                                style={{ display: "inline-block" }}
                              ></span>
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>포스터</font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>무료</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>서튼 플레이스</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>

                    <div className="wa1ti53">
                      <Link href="/buy-sell/logitech-keyboard-freecycle-1991624/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <span
                              className=" lazy-load-image-background opacity"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <span
                                className="_1b153uwe _1h4pbgya3k"
                                style={{ display: "inline-block" }}
                              ></span>
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>로지텍 키보드 #프리사이클</font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>무료</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>할렘</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/giles-goat-boy-novel-by-john-barth-freecycle-2021577/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <span
                              className=" lazy-load-image-background opacity"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <span
                                className="_1b153uwe _1h4pbgya3k"
                                style={{ display: "inline-block" }}
                              ></span>
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>
                                    John Barth의 Giles Goat-Boy 소설 #freecycle
                                  </font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>무료</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>요크빌</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    {/* 상품 끝 */}
                    <Link href="post?sort=recent&minPrice=0&maxPrice=0">
                      <div className="_1kquttw0 _1b153uw8 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy174 _1h4pbgy3oo _1h4pbgy94w _1kquttw1 _1b153uw6">
                        <div className="_1h4pbgy9ug _1h4pbgy8zs">
                          <span className="_1h4pbgy8g _1h4pbgy7ao">
                            <font>전체 보기</font>
                          </span>
                          <span className="_1h4pbgy9ug _1h4pbgy9xc _1h4pbgy9wo">
                            <span
                              style={{
                                display: "inline-flex",
                                width: "14px",
                                height: "14px",
                              }}
                              data-seed-icon="icon_chevron_right_fill"
                              data-seed-icon-version="0.2.1"
                            >
                              <svg
                                id="icon_chevron_right_fill"
                                width="100%"
                                height="100%"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                data-karrot-ui-icon="true"
                              >
                                <g>
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.64948 3.27994L16.6995 11.3299C17.0695 11.6999 17.0695 12.2999 16.6995 12.6699L8.64948 20.7199C8.27948 21.0899 7.67948 21.0899 7.30948 20.7199C6.93948 20.3499 6.93948 19.7499 7.30948 19.3799L14.6895 11.9999L7.30948 4.61994C6.93948 4.24994 6.93948 3.64994 7.30948 3.27994C7.67948 2.90994 8.27948 2.90994 8.64948 3.27994Z"
                                    fill="currentColor"
                                  ></path>
                                </g>
                              </svg>
                            </span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div
                  data-direct="left"
                  className="_1n1zga86 _1h4pbgya0w _1h4pbgy98o _1h4pbgy8tk _1h4pbgy8gg _1h4pbgy9u0 _1h4pbgy9ub _1n1zga87 _1n1zga89"
                ></div>
                <div
                  data-direct="right"
                  className="_1n1zga86 _1h4pbgya0w _1h4pbgy98o _1h4pbgy8tk _1h4pbgy8gg _1h4pbgy9u0 _1h4pbgy9ub _1n1zga88"
                ></div>
                <div
                  onClick={slide_l}
                  className="_1n1zga8a _1n1zga8b"
                  style={{
                    _1n1zga81: "var(_1b153uw3)",
                    _1n1zga82: "var(_1b153uw4)",
                    _1n1zga83: "var(_1b153uw5)",
                  }}
                >
                  <div className="_1n1zga8d _1h4pbgya0w _1h4pbgy9dc _1h4pbgy1u0 _1h4pbgy8i8 _1h4pbgy8sg _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy98g _1h4pbgy9yw _1h4pbgy9u0 _1h4pbgy9uj _1h4pbgya5s _1n1zga8e _1n1zga8g">
                    <span
                      style={{ display: "inline-flex" }}
                      className="_1n1zga8h"
                      data-seed-icon="icon_chevron_left_thin"
                      data-seed-icon-version="0.2.1"
                    >
                      <svg
                        id="icon_chevron_left_thin"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-karrot-ui-icon="true"
                      >
                        <g>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.6225 3.17006C16.8525 3.40006 16.8525 3.78006 16.6225 4.01006L8.63245 12.0001L16.6225 19.9901C16.8525 20.2201 16.8525 20.6001 16.6225 20.8301C16.3925 21.0601 16.0125 21.0601 15.7825 20.8301L7.37245 12.4201C7.14245 12.1901 7.14245 11.8101 7.37245 11.5801L15.7825 3.17006C16.0125 2.94006 16.3925 2.94006 16.6225 3.17006Z"
                            fill="currentColor"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
                <div
                  onClick={slide_r}
                  className="_1n1zga8a _1n1zga8c"
                  style={{
                    _1n1zga81: "var(_1b153uw3)",
                    _1n1zga82: "var(_1b153uw4)",
                    _1n1zga83: "var(_1b153uw5)",
                  }}
                >
                  <div className="_1n1zga8d _1h4pbgya0w _1h4pbgy9dc _1h4pbgy1u0 _1h4pbgy8i8 _1h4pbgy8sg _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy98g _1h4pbgy9yw _1h4pbgy9u0 _1h4pbgy9uj _1h4pbgya5s _1n1zga8f">
                    <span
                      style={{ display: "inline-flex" }}
                      className="_1n1zga8h"
                      data-seed-icon="icon_chevron_right_thin"
                      data-seed-icon-version="0.2.1"
                    >
                      <svg
                        id="icon_chevron_right_thin"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-karrot-ui-icon="true"
                      >
                        <g>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.22246 3.17006L16.6325 11.5801C16.8625 11.8101 16.8625 12.1901 16.6325 12.4201L8.22246 20.8301C7.99246 21.0601 7.61246 21.0601 7.38246 20.8301C7.15246 20.6001 7.15246 20.2201 7.38246 19.9901L15.3725 12.0001L7.38246 4.01006C7.15246 3.78006 7.15246 3.40006 7.38246 3.17006C7.61246 2.94006 7.99246 2.94006 8.22246 3.17006Z"
                            fill="currentColor"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 카테고리 */}
          <section className="_1h4pbgy9ug _1h4pbgy9vs">
            <header className="_1h4pbgy7xc _1h4pbgy7xv _1h4pbgy828 _1h4pbgy82r _1h4pbgy9ug _1h4pbgy9xs">
              <div
                data-gtm="main_article"
                className="_1h4pbgy8g _1h4pbgy7ag _1h4pbgy78o _1h4pbgy797 _1h4pbgy9w0"
              >
                <font>모든 카테고리</font>
              </div>
              <Link
                className="_1h4pbgy9ug _1h4pbgy76o _1h4pbgy78j _1h4pbgy784 _1h4pbgy78l _1h4pbgy7ao"
                href="category"
              >
                <span
                  data-gtm="main_see_all"
                  className="m79qaj0 _1h4pbgyu0 _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy8zs"
                >
                  <font>더보기</font>
                </span>
                <span className="_1h4pbgy9ug _1h4pbgy9wo">
                  <span
                    style={{
                      display: "inline-flex",
                      width: "16px",
                      height: "16px",
                    }}
                    className="_1h4pbgyu0"
                    data-seed-icon="icon_chevron_right_fill"
                    data-seed-icon-version="0.2.1"
                  >
                    <svg
                      id="icon_chevron_right_fill"
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-karrot-ui-icon="true"
                    >
                      <g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.64948 3.27994L16.6995 11.3299C17.0695 11.6999 17.0695 12.2999 16.6995 12.6699L8.64948 20.7199C8.27948 21.0899 7.67948 21.0899 7.30948 20.7199C6.93948 20.3499 6.93948 19.7499 7.30948 19.3799L14.6895 11.9999L7.30948 4.61994C6.93948 4.24994 6.93948 3.64994 7.30948 3.27994C7.67948 2.90994 8.27948 2.90994 8.64948 3.27994Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </span>
              </Link>
            </header>
            <div className="wa1ti51 _9rcp1w1 _1xxhs21j">
              <div className="_1n1zga84 _1n1zga80 _1h4pbgya0o">
                <div
                  data-scroll_div="scroll_div"
                  data-scroll_idx="0"
                  data-scroll_range="3"
                  className="_1n1zga85 _1h4pbgy9zk _1h4pbgy8jc"
                >
                  <div className="wa1ti52 _1h4pbgy7nk _1h4pbgy7o1 _1h4pbgy7oy _1h4pbgy7m3 _1h4pbgy7s8 _1h4pbgy7sp _1h4pbgy7tm _1h4pbgy7qr _1h4pbgy90w _1h4pbgya54">
                    <Category category_list={category_list} />
                  </div>
                </div>
                <div
                  data-direct="left"
                  className="_1n1zga86 _1h4pbgya0w _1h4pbgy98o _1h4pbgy8tk _1h4pbgy8gg _1h4pbgy9u0 _1h4pbgy9ub _1n1zga87 _1n1zga89"
                ></div>
                <div
                  data-direct="right"
                  className="_1n1zga86 _1h4pbgya0w _1h4pbgy98o _1h4pbgy8tk _1h4pbgy8gg _1h4pbgy9u0 _1h4pbgy9ub _1n1zga88"
                ></div>
                <div
                  onClick={slide_l}
                  className="_1n1zga8a _1n1zga8b"
                  style={{
                    _1n1zga81: "var(_1xxhs219)",
                    _1n1zga82: "var(_1xxhs21c)",
                    _1n1zga83: "var(_1xxhs21f)",
                  }}
                >
                  <div className="_1n1zga8d _1h4pbgya0w _1h4pbgy9dc _1h4pbgy1u0 _1h4pbgy8i8 _1h4pbgy8sg _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy98g _1h4pbgy9yw _1h4pbgy9u0 _1h4pbgy9uj _1h4pbgya5s _1n1zga8e _1n1zga8g">
                    <span
                      style={{ display: "inline-flex" }}
                      className="_1n1zga8h"
                      data-seed-icon="icon_chevron_left_thin"
                      data-seed-icon-version="0.2.1"
                    >
                      <svg
                        id="icon_chevron_left_thin"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-karrot-ui-icon="true"
                      >
                        <g>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.6225 3.17006C16.8525 3.40006 16.8525 3.78006 16.6225 4.01006L8.63245 12.0001L16.6225 19.9901C16.8525 20.2201 16.8525 20.6001 16.6225 20.8301C16.3925 21.0601 16.0125 21.0601 15.7825 20.8301L7.37245 12.4201C7.14245 12.1901 7.14245 11.8101 7.37245 11.5801L15.7825 3.17006C16.0125 2.94006 16.3925 2.94006 16.6225 3.17006Z"
                            fill="currentColor"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
                <div
                  onClick={slide_r}
                  className="_1n1zga8a _1n1zga8c"
                  style={{
                    _1n1zga81: "var(_1xxhs219)",
                    _1n1zga82: "var(_1xxhs21c)",
                    _1n1zga83: "var(_1xxhs21f)",
                  }}
                >
                  <div className="_1n1zga8d _1h4pbgya0w _1h4pbgy9dc _1h4pbgy1u0 _1h4pbgy8i8 _1h4pbgy8sg _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy98g _1h4pbgy9yw _1h4pbgy9u0 _1h4pbgy9uj _1h4pbgya5s _1n1zga8f">
                    <span
                      style={{ display: "inline-flex" }}
                      className="_1n1zga8h"
                      data-seed-icon="icon_chevron_right_thin"
                      data-seed-icon-version="0.2.1"
                    >
                      <svg
                        id="icon_chevron_right_thin"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-karrot-ui-icon="true"
                      >
                        <g>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.22246 3.17006L16.6325 11.5801C16.8625 11.8101 16.8625 12.1901 16.6325 12.4201L8.22246 20.8301C7.99246 21.0601 7.61246 21.0601 7.38246 20.8301C7.15246 20.6001 7.15246 20.2201 7.38246 19.9901L15.3725 12.0001L7.38246 4.01006C7.15246 3.78006 7.15246 3.40006 7.38246 3.17006C7.61246 2.94006 7.99246 2.94006 8.22246 3.17006Z"
                            fill="currentColor"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="_1h4pbgy9ug _1h4pbgy9vs">
            <header className="_1h4pbgy7xc _1h4pbgy7xv _1h4pbgy828 _1h4pbgy82r _1h4pbgy9ug _1h4pbgy9xs">
              <div
                data-gtm="main_article"
                className="_1h4pbgy8g _1h4pbgy7ag _1h4pbgy78o _1h4pbgy797 _1h4pbgy9w0"
              >
                <font>
                  <font>홈, 정원 및 DIY 🏠</font>
                </font>
              </div>
              <Link
                className="_1h4pbgy9ug _1h4pbgy76o _1h4pbgy78j _1h4pbgy784 _1h4pbgy78l _1h4pbgy7ao"
                href="/buy-sell/all/?category_id=2&in=manhattan-7426"
              >
                <span
                  data-gtm="main_see_all"
                  className="m79qaj0 _1h4pbgyu0 _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy8zs"
                >
                  <font>
                    <font>더보기</font>
                  </font>
                </span>
                <span className="_1h4pbgy9ug _1h4pbgy9wo">
                  <span
                    style={{
                      display: "inline-flex",
                      width: "16px",
                      height: "16px",
                    }}
                    className="_1h4pbgyu0"
                    data-seed-icon="icon_chevron_right_fill"
                    data-seed-icon-version="0.2.1"
                  >
                    <svg
                      id="icon_chevron_right_fill"
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-karrot-ui-icon="true"
                    >
                      <g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.64948 3.27994L16.6995 11.3299C17.0695 11.6999 17.0695 12.2999 16.6995 12.6699L8.64948 20.7199C8.27948 21.0899 7.67948 21.0899 7.30948 20.7199C6.93948 20.3499 6.93948 19.7499 7.30948 19.3799L14.6895 11.9999L7.30948 4.61994C6.93948 4.24994 6.93948 3.64994 7.30948 3.27994C7.67948 2.90994 8.27948 2.90994 8.64948 3.27994Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </span>
              </Link>
            </header>
            <div className="wa1ti51 _9rcp1w1 _1b153uw7">
              <div className="_1n1zga84 _1n1zga80 _1h4pbgya0o">
                <div className="_1n1zga85 _1h4pbgy9zk _1h4pbgy8jc">
                  <div className="wa1ti52 _1h4pbgy7nk _1h4pbgy7o1 _1h4pbgy7oy _1h4pbgy7m3 _1h4pbgy7s8 _1h4pbgy7sp _1h4pbgy7tm _1h4pbgy7qr _1h4pbgy90w _1h4pbgya54">
                    <div className="wa1ti53">
                      <Link href="/buy-sell/beautiful-ceramic-floral-center-piece-1365540/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <span
                              className=" lazy-load-image-background opacity lazy-load-image-loaded"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                className="_1b153uwe _1h4pbgya3k"
                                src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202312/cc2176649ae6002ec3ca8166438390752ff667cbfc76e8cc68ff4c8c8772cad3.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                alt="thumbnail"
                              />
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>아름다운 세라믹 꽃 센터피스</font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>20달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>헬스 키친</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/small-rug-1448990/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <noscript>
                              <span>
                                <img
                                  className="_1b153uwe _1h4pbgya3k"
                                  src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202401/d0292292f28ae50d48e5b1ebb1d62684272bf45e253575ed889912c09473a31f.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                  alt="thumbnail"
                                />
                              </span>
                            </noscript>
                            <span
                              className=" lazy-load-image-background opacity lazy-load-image-loaded"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                className="_1b153uwe _1h4pbgya3k"
                                src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202401/d0292292f28ae50d48e5b1ebb1d62684272bf45e253575ed889912c09473a31f.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                alt="thumbnail"
                              />
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>작은 러그</font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>20달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>이스트 할렘</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/mcdonalds-cactus-plant-flea-market-toys-limited-collection-1624033/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <span
                              className=" lazy-load-image-background opacity lazy-load-image-loaded"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                className="_1b153uwe _1h4pbgya3k"
                                src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202402/fabfb2da3bed6d4ac44cee360e41f9b335487493198f589c9a7a4830e577f391.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                alt="thumbnail"
                              />
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>
                                    맥도날드 선인장 식물 벼룩시장 장난감 한정
                                    컬렉션
                                  </font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>25달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>키프스 베이</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/black-20-lampshade-1811033/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <span
                              className=" lazy-load-image-background opacity lazy-load-image-loaded"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                className="_1b153uwe _1h4pbgya3k"
                                src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202403/54b4bda37d3348eea0dbf5828f75c2512150270b1bdfdcb0fa65f1a47f859117.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                alt="thumbnail"
                              />
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>검은색 20인치 램프 갓</font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>15달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>이스트 할렘</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/stationery-organizers-2-for-6-1845245/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <span
                              className=" lazy-load-image-background opacity lazy-load-image-loaded"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                className="_1b153uwe _1h4pbgya3k"
                                src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202406/4f242b9ce59fe9d11bd5a6ce0a4e3283e4e716dc4559836109677a4a6a04162f.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                alt="thumbnail"
                              />
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>🧡문구 정리함 2개 6개</font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>6달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>키프스 베이</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/boho-handmade-decor-hanger-1986489/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <noscript>
                              <span>
                                <img
                                  className="_1b153uwe _1h4pbgya3k"
                                  src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202404/efee992366aa70988feb564cbcf2ca57f6837d206d4867a6b6085965d3c453db.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                  alt="thumbnail"
                                />
                              </span>
                            </noscript>
                            <span
                              className=" lazy-load-image-background opacity lazy-load-image-loaded"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                className="_1b153uwe _1h4pbgya3k"
                                src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202404/efee992366aa70988feb564cbcf2ca57f6837d206d4867a6b6085965d3c453db.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                alt="thumbnail"
                              />
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>
                                    🧡 보헤미안 핸드메이드 장식용 옷걸이
                                  </font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>10달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>키프스 베이</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/hand-soap-container-2014338/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <noscript>
                              <span>
                                <img
                                  className="_1b153uwe _1h4pbgya3k"
                                  src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202404/072d7feb63ef8ff5fd331d94d735a4ae66f0eb22f10f415e223b2c0f75b8db17.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                  alt="thumbnail"
                                />
                              </span>
                            </noscript>
                            <span
                              className=" lazy-load-image-background opacity"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <span
                                className="_1b153uwe _1h4pbgya3k"
                                style={{ display: "inline-block" }}
                              ></span>
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>핸드 비누 용기</font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>10달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>키프스 베이</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/west-elm-shower-curtain-hooks-2022862/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <noscript>
                              <span>
                                <img
                                  className="_1b153uwe _1h4pbgya3k"
                                  src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202404/8bd1768f92d91ef6df5ede6ce9b96a638612643fd909eb8fa14d06b3f239ce3e.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                  alt="thumbnail"
                                />
                              </span>
                            </noscript>
                            <span
                              className=" lazy-load-image-background opacity"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <span
                                className="_1b153uwe _1h4pbgya3k"
                                style={{ display: "inline-block" }}
                              ></span>
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>West Elm - 샤워커튼 후크</font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>무료</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>레녹스 힐</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/various-plant-pots-2166512/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <span
                              className=" lazy-load-image-background opacity"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <span
                                className="_1b153uwe _1h4pbgya3k"
                                style={{ display: "inline-block" }}
                              ></span>
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>다양한 식물 화분</font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>2달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>키프스 베이</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/crate-barrel-sage-leaf-jasmine-candle-2233766/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <noscript>
                              <span>
                                <img
                                  className="_1b153uwe _1h4pbgya3k"
                                  src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202406/dae01172a934bee3f40ea999ebee3c8a3d6ffb6de05c723e946ec8ef9f2c5e76.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                  alt="thumbnail"
                                />
                              </span>
                            </noscript>
                            <span
                              className=" lazy-load-image-background opacity"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <span
                                className="_1b153uwe _1h4pbgya3k"
                                style={{ display: "inline-block" }}
                              ></span>
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>
                                    크레이트 앤 배럴 세이지 리프 + 재스민 캔들
                                  </font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>15달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>헬스 키친</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <Link href="/buy-sell/all/?category_id=2&amp;in=manhattan-7426">
                      <div className="_1kquttw0 _1b153uw8 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy174 _1h4pbgy3oo _1h4pbgy94w _1kquttw1 _1b153uw6">
                        <div className="_1h4pbgy9ug _1h4pbgy8zs">
                          <span className="_1h4pbgy8g _1h4pbgy7ao">
                            <font>
                              <font>더보기</font>
                            </font>
                          </span>
                          <span className="_1h4pbgy9ug _1h4pbgy9xc _1h4pbgy9wo">
                            <span
                              style={{
                                display: "inline-flex",
                                width: "14px",
                                height: "14px",
                              }}
                              data-seed-icon="icon_chevron_right_fill"
                              data-seed-icon-version="0.2.1"
                            >
                              <svg
                                id="icon_chevron_right_fill"
                                width="100%"
                                height="100%"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                data-karrot-ui-icon="true"
                              >
                                <g>
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.64948 3.27994L16.6995 11.3299C17.0695 11.6999 17.0695 12.2999 16.6995 12.6699L8.64948 20.7199C8.27948 21.0899 7.67948 21.0899 7.30948 20.7199C6.93948 20.3499 6.93948 19.7499 7.30948 19.3799L14.6895 11.9999L7.30948 4.61994C6.93948 4.24994 6.93948 3.64994 7.30948 3.27994C7.67948 2.90994 8.27948 2.90994 8.64948 3.27994Z"
                                    fill="currentColor"
                                  ></path>
                                </g>
                              </svg>
                            </span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="_1n1zga86 _1h4pbgya0w _1h4pbgy98o _1h4pbgy8tk _1h4pbgy8gg _1h4pbgy9u0 _1h4pbgy9ub _1n1zga87 _1n1zga89"></div>
                <div className="_1n1zga86 _1h4pbgya0w _1h4pbgy98o _1h4pbgy8tk _1h4pbgy8gg _1h4pbgy9u0 _1h4pbgy9ub _1n1zga88"></div>
                <div
                  className="_1n1zga8a _1n1zga8b"
                  style={{
                    _1n1zga81: "var(_1b153uw3)",
                    _1n1zga82: "var(_1b153uw4)",
                    _1n1zga83: "var(_1b153uw5)",
                  }}
                >
                  <div className="_1n1zga8d _1h4pbgya0w _1h4pbgy9dc _1h4pbgy1u0 _1h4pbgy8i8 _1h4pbgy8sg _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy98g _1h4pbgy9yw _1h4pbgy9u0 _1h4pbgy9uj _1h4pbgya5s _1n1zga8e _1n1zga8g">
                    <span
                      style={{ display: "inline-flex" }}
                      className="_1n1zga8h"
                      data-seed-icon="icon_chevron_left_thin"
                      data-seed-icon-version="0.2.1"
                    >
                      <svg
                        id="icon_chevron_left_thin"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-karrot-ui-icon="true"
                      >
                        <g>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.6225 3.17006C16.8525 3.40006 16.8525 3.78006 16.6225 4.01006L8.63245 12.0001L16.6225 19.9901C16.8525 20.2201 16.8525 20.6001 16.6225 20.8301C16.3925 21.0601 16.0125 21.0601 15.7825 20.8301L7.37245 12.4201C7.14245 12.1901 7.14245 11.8101 7.37245 11.5801L15.7825 3.17006C16.0125 2.94006 16.3925 2.94006 16.6225 3.17006Z"
                            fill="currentColor"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
                <div
                  className="_1n1zga8a _1n1zga8c"
                  style={{
                    _1n1zga81: "var(_1b153uw3)",
                    _1n1zga82: "var(_1b153uw4)",
                    _1n1zga83: "var(_1b153uw5)",
                  }}
                >
                  <div className="_1n1zga8d _1h4pbgya0w _1h4pbgy9dc _1h4pbgy1u0 _1h4pbgy8i8 _1h4pbgy8sg _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy98g _1h4pbgy9yw _1h4pbgy9u0 _1h4pbgy9uj _1h4pbgya5s _1n1zga8f">
                    <span
                      style={{ display: "inline-flex" }}
                      className="_1n1zga8h"
                      data-seed-icon="icon_chevron_right_thin"
                      data-seed-icon-version="0.2.1"
                    >
                      <svg
                        id="icon_chevron_right_thin"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-karrot-ui-icon="true"
                      >
                        <g>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.22246 3.17006L16.6325 11.5801C16.8625 11.8101 16.8625 12.1901 16.6325 12.4201L8.22246 20.8301C7.99246 21.0601 7.61246 21.0601 7.38246 20.8301C7.15246 20.6001 7.15246 20.2201 7.38246 19.9901L15.3725 12.0001L7.38246 4.01006C7.15246 3.78006 7.15246 3.40006 7.38246 3.17006C7.61246 2.94006 7.99246 2.94006 8.22246 3.17006Z"
                            fill="currentColor"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="_1h4pbgy9ug _1h4pbgy9vs">
            <header className="_1h4pbgy7xc _1h4pbgy7xv _1h4pbgy828 _1h4pbgy82r _1h4pbgy9ug _1h4pbgy9xs">
              <div
                data-gtm="main_article"
                className="_1h4pbgy8g _1h4pbgy7ag _1h4pbgy78o _1h4pbgy797 _1h4pbgy9w0"
              >
                <font>
                  <font>가구 🛋️</font>
                </font>
              </div>
              <Link
                className="_1h4pbgy9ug _1h4pbgy76o _1h4pbgy78j _1h4pbgy784 _1h4pbgy78l _1h4pbgy7ao"
                href="/buy-sell/all/?category_id=34&amp;in=manhattan-7426"
              >
                <span
                  data-gtm="main_see_all"
                  className="m79qaj0 _1h4pbgyu0 _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy8zs"
                >
                  <font>
                    <font>더보기</font>
                  </font>
                </span>
                <span className="_1h4pbgy9ug _1h4pbgy9wo">
                  <span
                    style={{
                      display: "inline-flex",
                      width: "16px",
                      height: "16px",
                    }}
                    className="_1h4pbgyu0"
                    data-seed-icon="icon_chevron_right_fill"
                    data-seed-icon-version="0.2.1"
                  >
                    <svg
                      id="icon_chevron_right_fill"
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-karrot-ui-icon="true"
                    >
                      <g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.64948 3.27994L16.6995 11.3299C17.0695 11.6999 17.0695 12.2999 16.6995 12.6699L8.64948 20.7199C8.27948 21.0899 7.67948 21.0899 7.30948 20.7199C6.93948 20.3499 6.93948 19.7499 7.30948 19.3799L14.6895 11.9999L7.30948 4.61994C6.93948 4.24994 6.93948 3.64994 7.30948 3.27994C7.67948 2.90994 8.27948 2.90994 8.64948 3.27994Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </span>
              </Link>
            </header>
            <div className="wa1ti51 _9rcp1w1 _1b153uw7">
              <div className="_1n1zga84 _1n1zga80 _1h4pbgya0o">
                <div className="_1n1zga85 _1h4pbgy9zk _1h4pbgy8jc">
                  <div className="wa1ti52 _1h4pbgy7nk _1h4pbgy7o1 _1h4pbgy7oy _1h4pbgy7m3 _1h4pbgy7s8 _1h4pbgy7sp _1h4pbgy7tm _1h4pbgy7qr _1h4pbgy90w _1h4pbgya54">
                    <div className="wa1ti53">
                      <Link href="/buy-sell/long-size-storage-box-chair-2303587/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <noscript>
                              <span>
                                <img
                                  className="_1b153uwe _1h4pbgya3k"
                                  src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202406/9349eed5ee4e55e20883fe0524de636f14833986ddf4b12738dd247528400c09.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                  alt="thumbnail"
                                />
                              </span>
                            </noscript>
                            <span
                              className=" lazy-load-image-background opacity lazy-load-image-loaded"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                className="_1b153uwe _1h4pbgya3k"
                                src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202406/9349eed5ee4e55e20883fe0524de636f14833986ddf4b12738dd247528400c09.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                alt="thumbnail"
                              />
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>롱사이즈 수납함 의자</font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>35달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>어퍼 웨스트 사이드</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/houchins-upholstered-storage-platform-bed-by-winston-porter-2361595/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <noscript>
                              <span>
                                <img
                                  className="_1b153uwe _1h4pbgya3k"
                                  src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202406/9bc71c3d9a191ac30360564f5c1fbe287884d31426f023820c73d50935ead4fb.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                  alt="thumbnail"
                                />
                              </span>
                            </noscript>
                            <span
                              className=" lazy-load-image-background opacity lazy-load-image-loaded"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                className="_1b153uwe _1h4pbgya3k"
                                src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202406/9bc71c3d9a191ac30360564f5c1fbe287884d31426f023820c73d50935ead4fb.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                alt="thumbnail"
                              />
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>
                                    Winston Porter의 Houchins Upholstered
                                    Storage Platform Bed
                                  </font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>350달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>할렘</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/queen-size-bedframe-and-mattress-from-a-pet-free-home-2365815/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <noscript>
                              <span>
                                <img
                                  className="_1b153uwe _1h4pbgya3k"
                                  src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202406/1d422cd527a996ca1f8bbe1b35b0c8be7b47b9d8fb9b6591fb4d5721f32b7347_0.webp?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                  alt="thumbnail"
                                />
                              </span>
                            </noscript>
                            <span
                              className=" lazy-load-image-background opacity lazy-load-image-loaded"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                className="_1b153uwe _1h4pbgya3k"
                                src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202406/1d422cd527a996ca1f8bbe1b35b0c8be7b47b9d8fb9b6591fb4d5721f32b7347_0.webp?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                alt="thumbnail"
                              />
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>
                                    퀸 사이즈 침대 프레임과 매트리스 (반려동물
                                    없는 집에서 구매)
                                  </font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>250달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>어퍼 웨스트 사이드</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/3-drawer-chest-2365838/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <span
                              className=" lazy-load-image-background opacity lazy-load-image-loaded"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                className="_1b153uwe _1h4pbgya3k"
                                src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202406/092a7ebebd7629590bc89046fafa440bab16177b2851979fde7df18465c02161_0.webp?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                alt="thumbnail"
                              />
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>3단 서랍장</font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>50달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>어퍼 웨스트 사이드</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/raymour-and-flanagan-king-uph-bed-and-2367085/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <noscript>
                              <span>
                                <img
                                  className="_1b153uwe _1h4pbgya3k"
                                  src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202406/df5e657cd1fc0d5fce1928e368efc64d92d39a16a3115210d45f0cf79c0cd67f.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                  alt="thumbnail"
                                />
                              </span>
                            </noscript>
                            <span
                              className=" lazy-load-image-background opacity lazy-load-image-loaded"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                className="_1b153uwe _1h4pbgya3k"
                                src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202406/df5e657cd1fc0d5fce1928e368efc64d92d39a16a3115210d45f0cf79c0cd67f.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                alt="thumbnail"
                              />
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>
                                    Raymour 및 Flanagan 킹 UPH 침대 및
                                  </font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>600달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>할렘</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/4-drawer-dresser-2397864/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <noscript>
                              <span>
                                <img
                                  className="_1b153uwe _1h4pbgya3k"
                                  src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202406/a5922488e156ecdb0db7f537b7bb87fdccec6e487be836a1dba86bbcbc3af487_0.webp?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                  alt="thumbnail"
                                />
                              </span>
                            </noscript>
                            <span
                              className=" lazy-load-image-background opacity lazy-load-image-loaded"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                className="_1b153uwe _1h4pbgya3k"
                                src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202406/a5922488e156ecdb0db7f537b7bb87fdccec6e487be836a1dba86bbcbc3af487_0.webp?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                alt="thumbnail"
                              />
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>4단 서랍장</font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>41달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>어퍼 웨스트 사이드</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/comfortable-armchair-in-perfect-condition-for-75-2413898/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <noscript>
                              <span>
                                <img
                                  className="_1b153uwe _1h4pbgya3k"
                                  src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202407/98fed88d93b4feac67a2417cb8214230b855aac30b6c843caef2dcc0845121e7.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                  alt="thumbnail"
                                />
                              </span>
                            </noscript>
                            <span
                              className=" lazy-load-image-background opacity"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <span
                                className="_1b153uwe _1h4pbgya3k"
                                style={{ display: "inline-block" }}
                              ></span>
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>
                                    완벽한 상태의 편안한 안락의자, 가격은 75달러
                                  </font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>75달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>첼시</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/coffee-table-2423222/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <noscript>
                              <span>
                                <img
                                  className="_1b153uwe _1h4pbgya3k"
                                  src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202407/de2a1c77270a230c6382a1b5a6888f8f50009a1c0ed89d8958691764199a9f4d.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                  alt="thumbnail"
                                />
                              </span>
                            </noscript>
                            <span
                              className=" lazy-load-image-background opacity"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <span
                                className="_1b153uwe _1h4pbgya3k"
                                style={{ display: "inline-block" }}
                              ></span>
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>커피 테이블</font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>40달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>첼시</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/3-tiered-shelf-2426480/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <noscript>
                              <span>
                                <img
                                  className="_1b153uwe _1h4pbgya3k"
                                  src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202407/6b73e43075b1e2c8d334b6e12ed183b502cdc187f99cd1105c1ff7825b400018.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                  alt="thumbnail"
                                />
                              </span>
                            </noscript>
                            <span
                              className=" lazy-load-image-background opacity"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <span
                                className="_1b153uwe _1h4pbgya3k"
                                style={{ display: "inline-block" }}
                              ></span>
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>3단 선반</font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>25달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>모닝사이드 하이츠</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/3-tiered-plastic-shelf-cart-wheels-available-2426737/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <noscript>
                              <span>
                                <img
                                  className="_1b153uwe _1h4pbgya3k"
                                  src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202407/20582adbad2d8408f44651cf16dcff74abc46d1e11c88f0523e7a9631248a0b9.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                  alt="thumbnail"
                                />
                              </span>
                            </noscript>
                            <span
                              className=" lazy-load-image-background opacity"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <span
                                className="_1b153uwe _1h4pbgya3k"
                                style={{ display: "inline-block" }}
                              ></span>
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>
                                    3단 플라스틱 선반 카트(바퀴 장착 가능)
                                  </font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>25달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>모닝사이드 하이츠</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <Link href="/buy-sell/all/?category_id=34&amp;in=manhattan-7426">
                      <div className="_1kquttw0 _1b153uw8 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy174 _1h4pbgy3oo _1h4pbgy94w _1kquttw1 _1b153uw6">
                        <div className="_1h4pbgy9ug _1h4pbgy8zs">
                          <span className="_1h4pbgy8g _1h4pbgy7ao">
                            <font>
                              <font>더보기</font>
                            </font>
                          </span>
                          <span className="_1h4pbgy9ug _1h4pbgy9xc _1h4pbgy9wo">
                            <span
                              style={{
                                display: "inline-flex",
                                width: "14px",
                                height: "14px",
                              }}
                              data-seed-icon="icon_chevron_right_fill"
                              data-seed-icon-version="0.2.1"
                            >
                              <svg
                                id="icon_chevron_right_fill"
                                width="100%"
                                height="100%"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                data-karrot-ui-icon="true"
                              >
                                <g>
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.64948 3.27994L16.6995 11.3299C17.0695 11.6999 17.0695 12.2999 16.6995 12.6699L8.64948 20.7199C8.27948 21.0899 7.67948 21.0899 7.30948 20.7199C6.93948 20.3499 6.93948 19.7499 7.30948 19.3799L14.6895 11.9999L7.30948 4.61994C6.93948 4.24994 6.93948 3.64994 7.30948 3.27994C7.67948 2.90994 8.27948 2.90994 8.64948 3.27994Z"
                                    fill="currentColor"
                                  ></path>
                                </g>
                              </svg>
                            </span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="_1n1zga86 _1h4pbgya0w _1h4pbgy98o _1h4pbgy8tk _1h4pbgy8gg _1h4pbgy9u0 _1h4pbgy9ub _1n1zga87 _1n1zga89"></div>
                <div className="_1n1zga86 _1h4pbgya0w _1h4pbgy98o _1h4pbgy8tk _1h4pbgy8gg _1h4pbgy9u0 _1h4pbgy9ub _1n1zga88"></div>
                <div
                  className="_1n1zga8a _1n1zga8b"
                  style={{
                    _1n1zga81: "var(_1b153uw3)",
                    _1n1zga82: "var(_1b153uw4)",
                    _1n1zga83: "var(_1b153uw5)",
                  }}
                >
                  <div className="_1n1zga8d _1h4pbgya0w _1h4pbgy9dc _1h4pbgy1u0 _1h4pbgy8i8 _1h4pbgy8sg _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy98g _1h4pbgy9yw _1h4pbgy9u0 _1h4pbgy9uj _1h4pbgya5s _1n1zga8e _1n1zga8g">
                    <span
                      style={{ display: "inline-flex" }}
                      className="_1n1zga8h"
                      data-seed-icon="icon_chevron_left_thin"
                      data-seed-icon-version="0.2.1"
                    >
                      <svg
                        id="icon_chevron_left_thin"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-karrot-ui-icon="true"
                      >
                        <g>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.6225 3.17006C16.8525 3.40006 16.8525 3.78006 16.6225 4.01006L8.63245 12.0001L16.6225 19.9901C16.8525 20.2201 16.8525 20.6001 16.6225 20.8301C16.3925 21.0601 16.0125 21.0601 15.7825 20.8301L7.37245 12.4201C7.14245 12.1901 7.14245 11.8101 7.37245 11.5801L15.7825 3.17006C16.0125 2.94006 16.3925 2.94006 16.6225 3.17006Z"
                            fill="currentColor"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
                <div
                  className="_1n1zga8a _1n1zga8c"
                  style={{
                    _1n1zga81: "var(_1b153uw3)",
                    _1n1zga82: "var(_1b153uw4)",
                    _1n1zga83: "var(_1b153uw5)",
                  }}
                >
                  <div className="_1n1zga8d _1h4pbgya0w _1h4pbgy9dc _1h4pbgy1u0 _1h4pbgy8i8 _1h4pbgy8sg _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy98g _1h4pbgy9yw _1h4pbgy9u0 _1h4pbgy9uj _1h4pbgya5s _1n1zga8f">
                    <span
                      style={{ display: "inline-flex" }}
                      className="_1n1zga8h"
                      data-seed-icon="icon_chevron_right_thin"
                      data-seed-icon-version="0.2.1"
                    >
                      <svg
                        id="icon_chevron_right_thin"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-karrot-ui-icon="true"
                      >
                        <g>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.22246 3.17006L16.6325 11.5801C16.8625 11.8101 16.8625 12.1901 16.6325 12.4201L8.22246 20.8301C7.99246 21.0601 7.61246 21.0601 7.38246 20.8301C7.15246 20.6001 7.15246 20.2201 7.38246 19.9901L15.3725 12.0001L7.38246 4.01006C7.15246 3.78006 7.15246 3.40006 7.38246 3.17006C7.61246 2.94006 7.99246 2.94006 8.22246 3.17006Z"
                            fill="currentColor"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="_1h4pbgy9ug _1h4pbgy9vs">
            <header className="_1h4pbgy7xc _1h4pbgy7xv _1h4pbgy828 _1h4pbgy82r _1h4pbgy9ug _1h4pbgy9xs">
              <div
                data-gtm="main_article"
                className="_1h4pbgy8g _1h4pbgy7ag _1h4pbgy78o _1h4pbgy797 _1h4pbgy9w0"
              >
                <font>
                  <font>여성 패션 👗</font>
                </font>
              </div>
              <Link
                className="_1h4pbgy9ug _1h4pbgy76o _1h4pbgy78j _1h4pbgy784 _1h4pbgy78l _1h4pbgy7ao"
                href="/buy-sell/all/?category_id=4&amp;in=manhattan-7426"
              >
                <span
                  data-gtm="main_see_all"
                  className="m79qaj0 _1h4pbgyu0 _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy8zs"
                >
                  <font>
                    <font>더보기</font>
                  </font>
                </span>
                <span className="_1h4pbgy9ug _1h4pbgy9wo">
                  <span
                    style={{
                      display: "inline-flex",
                      width: "16px",
                      height: "16px",
                    }}
                    className="_1h4pbgyu0"
                    data-seed-icon="icon_chevron_right_fill"
                    data-seed-icon-version="0.2.1"
                  >
                    <svg
                      id="icon_chevron_right_fill"
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-karrot-ui-icon="true"
                    >
                      <g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.64948 3.27994L16.6995 11.3299C17.0695 11.6999 17.0695 12.2999 16.6995 12.6699L8.64948 20.7199C8.27948 21.0899 7.67948 21.0899 7.30948 20.7199C6.93948 20.3499 6.93948 19.7499 7.30948 19.3799L14.6895 11.9999L7.30948 4.61994C6.93948 4.24994 6.93948 3.64994 7.30948 3.27994C7.67948 2.90994 8.27948 2.90994 8.64948 3.27994Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </span>
              </Link>
            </header>
            <div className="wa1ti51 _9rcp1w1 _1b153uw7">
              <div className="_1n1zga84 _1n1zga80 _1h4pbgya0o">
                <div className="_1n1zga85 _1h4pbgy9zk _1h4pbgy8jc">
                  <div className="wa1ti52 _1h4pbgy7nk _1h4pbgy7o1 _1h4pbgy7oy _1h4pbgy7m3 _1h4pbgy7s8 _1h4pbgy7sp _1h4pbgy7tm _1h4pbgy7qr _1h4pbgy90w _1h4pbgya54">
                    <div className="wa1ti53">
                      <Link href="/buy-sell/coach-loafer-936902/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <noscript>
                              <span>
                                <img
                                  className="_1b153uwe _1h4pbgya3k"
                                  src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202308/c687725dc52ed7b30965ba57a8554bc518b9020f7bfb4c54b0007fd394b5a0b5.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                  alt="thumbnail"
                                />
                              </span>
                            </noscript>
                            <span
                              className=" lazy-load-image-background opacity lazy-load-image-loaded"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                className="_1b153uwe _1h4pbgya3k"
                                src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202308/c687725dc52ed7b30965ba57a8554bc518b9020f7bfb4c54b0007fd394b5a0b5.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                alt="thumbnail"
                              />
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>코치 로퍼</font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>60달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>로어 이스트 사이드</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/1822-womens-skinny-jeans-1449804/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <noscript>
                              <span>
                                <img
                                  className="_1b153uwe _1h4pbgya3k"
                                  src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202401/83b6b13b897df06f10ad477069ea67eba06ba36dd315789aaaabe49ccc3a11c3.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                  alt="thumbnail"
                                />
                              </span>
                            </noscript>
                            <span
                              className=" lazy-load-image-background opacity lazy-load-image-loaded"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                className="_1b153uwe _1h4pbgya3k"
                                src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202401/83b6b13b897df06f10ad477069ea67eba06ba36dd315789aaaabe49ccc3a11c3.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                alt="thumbnail"
                              />
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>1822 여성용 스키니 진</font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>5달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>이스트 할렘</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/virgos-womens-skinny-jeans-1449817/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <noscript>
                              <span>
                                <img
                                  className="_1b153uwe _1h4pbgya3k"
                                  src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202401/df1ca98d75e8c31a0cbc8acd703445d3bac0e2dc67d8f39453933c355d1cb6d7.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                  alt="thumbnail"
                                />
                              </span>
                            </noscript>
                            <span
                              className=" lazy-load-image-background opacity lazy-load-image-loaded"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                className="_1b153uwe _1h4pbgya3k"
                                src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202401/df1ca98d75e8c31a0cbc8acd703445d3bac0e2dc67d8f39453933c355d1cb6d7.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                alt="thumbnail"
                              />
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>처녀자리 여성용 스키니 진</font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>5달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>이스트 할렘</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/floral-pattern-jhumka-earrings-1492503/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <noscript>
                              <span>
                                <img
                                  className="_1b153uwe _1h4pbgya3k"
                                  src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202401/2bcdd4400a58b4d7450a6dc5e64d6fc94a800396fbc9fb0b012dfc5c62ed6826.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                  alt="thumbnail"
                                />
                              </span>
                            </noscript>
                            <span
                              className=" lazy-load-image-background opacity lazy-load-image-loaded"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                className="_1b153uwe _1h4pbgya3k"
                                src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202401/2bcdd4400a58b4d7450a6dc5e64d6fc94a800396fbc9fb0b012dfc5c62ed6826.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                alt="thumbnail"
                              />
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>꽃무늬 줌카 귀걸이</font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>3달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>요크빌</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/long-earrings-with-ringing-bells-at-the-end-1492514/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <noscript>
                              <span>
                                <img
                                  className="_1b153uwe _1h4pbgya3k"
                                  src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202401/bce035e135b5e1b79fd3cc8d30f9acc4f48fd4342f9c5b8ce1366c054d7320fb.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                  alt="thumbnail"
                                />
                              </span>
                            </noscript>
                            <span
                              className=" lazy-load-image-background opacity lazy-load-image-loaded"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                className="_1b153uwe _1h4pbgya3k"
                                src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202401/bce035e135b5e1b79fd3cc8d30f9acc4f48fd4342f9c5b8ce1366c054d7320fb.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                alt="thumbnail"
                              />
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>끝에 종소리가 울리는 긴 귀걸이</font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>3달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>요크빌</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/long-earrings-with-pearls-at-the-bottom-1492518/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <noscript>
                              <span>
                                <img
                                  className="_1b153uwe _1h4pbgya3k"
                                  src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202401/1e2002d87ffa7b1d46b888ca7a612042b85fea8e4b85c1570d8cdbf9b4bf70ca.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                  alt="thumbnail"
                                />
                              </span>
                            </noscript>
                            <span
                              className=" lazy-load-image-background opacity lazy-load-image-loaded"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                className="_1b153uwe _1h4pbgya3k"
                                src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202401/1e2002d87ffa7b1d46b888ca7a612042b85fea8e4b85c1570d8cdbf9b4bf70ca.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                alt="thumbnail"
                              />
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>바닥에 진주가 달린 긴 귀걸이</font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>3달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>요크빌</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/long-sleeve-crop-hoodie-size-s-1752596/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <noscript>
                              <span>
                                <img
                                  className="_1b153uwe _1h4pbgya3k"
                                  src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202403/427fc607512dd63dffc13d6a1f053e39edf58914d3317fcdab43f5faef9f1d31.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                  alt="thumbnail"
                                />
                              </span>
                            </noscript>
                            <span
                              className=" lazy-load-image-background opacity"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <span
                                className="_1b153uwe _1h4pbgya3k"
                                style={{ display: "inline-block" }}
                              ></span>
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>긴팔 크롭 후드티 사이즈 S</font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>5달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>카네기 힐</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/trending-clear-glass-earrings-1845634/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <noscript>
                              <span>
                                <img
                                  className="_1b153uwe _1h4pbgya3k"
                                  src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202403/b19240a91a0c5b85fab6b618d5f93dbda3f1a6f3fd2ceae203aa79ebd0514b28.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                  alt="thumbnail"
                                />
                              </span>
                            </noscript>
                            <span
                              className=" lazy-load-image-background opacity"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <span
                                className="_1b153uwe _1h4pbgya3k"
                                style={{ display: "inline-block" }}
                              ></span>
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>트렌드 투명 유리 귀걸이</font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>15달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>금융 지구</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/brand-new-bikini-scrunchie-matching-set-1860741/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <noscript>
                              <span>
                                <img
                                  className="_1b153uwe _1h4pbgya3k"
                                  src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202403/6e145a392c181253358cf8afca3c498ffab709ea165230071996a5b4fa729218.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                  alt="thumbnail"
                                />
                              </span>
                            </noscript>
                            <span
                              className=" lazy-load-image-background opacity"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <span
                                className="_1b153uwe _1h4pbgya3k"
                                style={{ display: "inline-block" }}
                              ></span>
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>
                                    새로운 비키니 + 스크런치 매칭 세트
                                  </font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>12달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>키프스 베이</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="wa1ti53">
                      <Link href="/buy-sell/club-monaco-pants-1936790/?in=manhattan-7426">
                        <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwb _1b153uw7">
                          <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                            <noscript>
                              <span>
                                <img
                                  className="_1b153uwe _1h4pbgya3k"
                                  src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202404/c5f8368ce3400e456759ff8b19e1d1abf70bca9d1e49ca217240bc3a97f9a7cb.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                                  alt="thumbnail"
                                />
                              </span>
                            </noscript>
                            <span
                              className=" lazy-load-image-background opacity"
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <span
                                className="_1b153uwe _1h4pbgya3k"
                                style={{ display: "inline-block" }}
                              ></span>
                            </span>
                          </div>
                          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                              <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                                <font>
                                  <font>클럽모나코 팬츠</font>
                                </font>
                              </div>
                              <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                                <font>
                                  <font>50달러</font>
                                </font>
                              </div>
                            </div>
                            <div className="_1b153uwh _1h4pbgy8jc">
                              <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                                <font>
                                  <font>이스트 할렘</font>
                                </font>
                              </h2>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <Link href="/buy-sell/all/?category_id=4&in=manhattan-7426">
                      <div className="_1kquttw0 _1b153uw8 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy174 _1h4pbgy3oo _1h4pbgy94w _1kquttw1 _1b153uw6">
                        <div className="_1h4pbgy9ug _1h4pbgy8zs">
                          <span className="_1h4pbgy8g _1h4pbgy7ao">
                            <font>
                              <font>더보기</font>
                            </font>
                          </span>
                          <span className="_1h4pbgy9ug _1h4pbgy9xc _1h4pbgy9wo">
                            <span
                              style={{
                                display: "inline-flex",
                                width: "14px",
                                height: "14px",
                              }}
                              data-seed-icon="icon_chevron_right_fill"
                              data-seed-icon-version="0.2.1"
                            >
                              <svg
                                id="icon_chevron_right_fill"
                                width="100%"
                                height="100%"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                data-karrot-ui-icon="true"
                              >
                                <g>
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.64948 3.27994L16.6995 11.3299C17.0695 11.6999 17.0695 12.2999 16.6995 12.6699L8.64948 20.7199C8.27948 21.0899 7.67948 21.0899 7.30948 20.7199C6.93948 20.3499 6.93948 19.7499 7.30948 19.3799L14.6895 11.9999L7.30948 4.61994C6.93948 4.24994 6.93948 3.64994 7.30948 3.27994C7.67948 2.90994 8.27948 2.90994 8.64948 3.27994Z"
                                    fill="currentColor"
                                  ></path>
                                </g>
                              </svg>
                            </span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="_1n1zga86 _1h4pbgya0w _1h4pbgy98o _1h4pbgy8tk _1h4pbgy8gg _1h4pbgy9u0 _1h4pbgy9ub _1n1zga87 _1n1zga89"></div>
                <div className="_1n1zga86 _1h4pbgya0w _1h4pbgy98o _1h4pbgy8tk _1h4pbgy8gg _1h4pbgy9u0 _1h4pbgy9ub _1n1zga88"></div>
                <div
                  className="_1n1zga8a _1n1zga8b"
                  style={{
                    _1n1zga81: "var(_1b153uw3)",
                    _1n1zga82: "var(_1b153uw4)",
                    _1n1zga83: "var(_1b153uw5)",
                  }}
                >
                  <div className="_1n1zga8d _1h4pbgya0w _1h4pbgy9dc _1h4pbgy1u0 _1h4pbgy8i8 _1h4pbgy8sg _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy98g _1h4pbgy9yw _1h4pbgy9u0 _1h4pbgy9uj _1h4pbgya5s _1n1zga8e _1n1zga8g">
                    <span
                      style={{ display: "inline-flex" }}
                      className="_1n1zga8h"
                      data-seed-icon="icon_chevron_left_thin"
                      data-seed-icon-version="0.2.1"
                    >
                      <svg
                        id="icon_chevron_left_thin"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-karrot-ui-icon="true"
                      >
                        <g>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.6225 3.17006C16.8525 3.40006 16.8525 3.78006 16.6225 4.01006L8.63245 12.0001L16.6225 19.9901C16.8525 20.2201 16.8525 20.6001 16.6225 20.8301C16.3925 21.0601 16.0125 21.0601 15.7825 20.8301L7.37245 12.4201C7.14245 12.1901 7.14245 11.8101 7.37245 11.5801L15.7825 3.17006C16.0125 2.94006 16.3925 2.94006 16.6225 3.17006Z"
                            fill="currentColor"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
                <div
                  className="_1n1zga8a _1n1zga8c"
                  style={{
                    _1n1zga81: "var(_1b153uw3)",
                    _1n1zga82: "var(_1b153uw4)",
                    _1n1zga83: "var(_1b153uw5)",
                  }}
                >
                  <div className="_1n1zga8d _1h4pbgya0w _1h4pbgy9dc _1h4pbgy1u0 _1h4pbgy8i8 _1h4pbgy8sg _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy98g _1h4pbgy9yw _1h4pbgy9u0 _1h4pbgy9uj _1h4pbgya5s _1n1zga8f">
                    <span
                      style={{ display: "inline-flex" }}
                      className="_1n1zga8h"
                      data-seed-icon="icon_chevron_right_thin"
                      data-seed-icon-version="0.2.1"
                    >
                      <svg
                        id="icon_chevron_right_thin"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-karrot-ui-icon="true"
                      >
                        <g>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.22246 3.17006L16.6325 11.5801C16.8625 11.8101 16.8625 12.1901 16.6325 12.4201L8.22246 20.8301C7.99246 21.0601 7.61246 21.0601 7.38246 20.8301C7.15246 20.6001 7.15246 20.2201 7.38246 19.9901L15.3725 12.0001L7.38246 4.01006C7.15246 3.78006 7.15246 3.40006 7.38246 3.17006C7.61246 2.94006 7.99246 2.94006 8.22246 3.17006Z"
                            fill="currentColor"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
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
                    className="_19xafot0 _19xafot4 _19xafot5"
                    style={{
                      _19xafot2: "0ms",
                      _19xafot1: "500ms",
                      _19xafot3: "translateY(1rem)",
                    }}
                    href="#"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="_1h4pbgy8rk _1h4pbgy8rv _1h4pbgy8s4"
                      src="https://karrotmarket-com-sanity-cdn.krrt.io/production/49380c1c7e70e49f0f93baf0f790925eefc69082-120x40.svg"
                      alt="앱스토어에서 다운로드"
                    />
                  </Link>
                  <Link
                    className="_19xafot0 _19xafot4 _19xafot5"
                    style={{
                      _19xafot2: "0ms",
                      _19xafot1: "500ms",
                      _19xafot3: "translateY(1rem)",
                    }}
                    href="#"
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
