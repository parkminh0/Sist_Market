import MyPageSide from "@/component/user/layout/MyPageSide";
import Link from "next/link";
import React from "react";
import "/public/css/myPage.css";
import "/public/css/buylist.css";

export default function Page() {
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
            <Link href="/myPage/buylist">
              <div className="_1h4pbgy7dk _1h4pbgy7j7 _1h4pbgy7j0 _1h4pbgy7il _1h4pbgy7w0">
                <h1 className="_1h4pbgy78o _1h4pbgy796 _1h4pbgy79g _1h4pbgy7ag _1h4pbgy7c8">
                  <font style={{ verticalAlign: "inherit" }}>구매내역</font>
                </h1>
              </div>
            </Link>
          </section>
        </div>
        <div className="my_home container my md _6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462">
          <section className="_1h4pbgy9ug _1h4pbgy8zc _1h4pbgy92j _1h4pbgy7y8 _1h4pbgy83s _1h4pbgy843 _1h4pbgy84k">
            <MyPageSide />
            {/* <!-- 여기서부터 콘텐츠 --> */}
            <div
              data-v-3b1b5d32=""
              data-v-0adb81cc=""
              className="content_area my-page-content"
            >
              <div data-v-3b1b5d32="" className="my_purchase">
                <div
                  data-v-6b53f901=""
                  data-v-3b1b5d32=""
                  className="content_title"
                >
                  <div data-v-6b53f901="" className="title">
                    <h3 data-v-6b53f901="">구매내역</h3>
                  </div>
                </div>
                <div
                  data-v-2cbb289b=""
                  data-v-3b1b5d32=""
                  className="purchase_list_tab detail_tab"
                >
                  <div data-v-2cbb289b="" className="tab_item tab_on">
                    <Link data-v-2cbb289b="" href="#" className="tab_link">
                      <dl data-v-2cbb289b="" className="tab_box">
                        <dt data-v-2cbb289b="" className="title">
                          거래완료
                        </dt>
                        <dd data-v-2cbb289b="" className="count">
                          77
                        </dd>
                      </dl>
                    </Link>
                  </div>
                </div>
                <div
                  data-v-77765e40=""
                  data-v-3b1b5d32=""
                  className="period_search"
                >
                  <div data-v-77765e40="" className="period_month">
                    <ul data-v-77765e40="" className="month_list">
                      <li data-v-77765e40="" className="month_item">
                        <Link
                          data-v-77765e40=""
                          href="#"
                          className="month_link"
                        >
                          최근 2개월
                        </Link>
                      </li>
                      <li data-v-77765e40="" className="month_item">
                        <Link
                          data-v-77765e40=""
                          href="#"
                          className="month_link"
                        >
                          4개월
                        </Link>
                      </li>
                      <li data-v-77765e40="" className="month_item">
                        <Link
                          data-v-77765e40=""
                          href="#"
                          className="month_link"
                        >
                          6개월
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div
                    data-v-14e5ae1c=""
                    data-v-77765e40=""
                    className="period_calendar_wrapper"
                  >
                    <div data-v-14e5ae1c="" className="period_calendar">
                      <div data-v-14e5ae1c="" className="calendar_wrap">
                        <span data-v-14e5ae1c="">
                          <div data-v-14e5ae1c="" className="calendar">
                            <input
                              data-v-14e5ae1c=""
                              disabled="disabled"
                              className="cal_input"
                            />
                            <span data-v-14e5ae1c="" className="cal_btn"></span>
                          </div>
                          <div
                            data-v-4cb7b681=""
                            className="vc-popover-content-wrapper is-interactive"
                            style={{ margin: "0px" }}
                          ></div>
                        </span>
                      </div>
                      <span data-v-14e5ae1c="" className="swung_dash">
                        ~
                      </span>
                      <div data-v-14e5ae1c="" className="calendar_wrap">
                        <span data-v-14e5ae1c="">
                          <div data-v-14e5ae1c="" className="calendar">
                            <input data-v-14e5ae1c="" className="cal_input" />
                            <span data-v-14e5ae1c="" className="cal_btn"></span>
                          </div>
                          <div
                            data-v-4cb7b681=""
                            className="vc-popover-content-wrapper is-interactive"
                            style={{ margin: "0px" }}
                          ></div>
                        </span>
                      </div>
                    </div>
                    <div data-v-14e5ae1c="" className="period_btn_box">
                      <button
                        data-v-14e5ae1c=""
                        className="btn_search is_active"
                      >
                        조회
                      </button>
                    </div>
                  </div>
                </div>
                <ul
                  data-v-a54c4c26=""
                  data-v-3b1b5d32=""
                  className="search_info"
                >
                  <li data-v-a54c4c26="" className="info_item">
                    <p data-v-a54c4c26="">
                      기간별 조회 결과는 구매일 기준으로 노출됩니다.
                    </p>
                  </li>
                </ul>
                <div
                  data-v-eff62a72=""
                  data-v-3b1b5d32=""
                  className="purchase_list bidding bid"
                >
                  <div data-v-eff62a72="" className="purchase_head">
                    <div data-v-eff62a72="" className="head_product">
                      <Link data-v-eff62a72="" href="#" className="btn_filter">
                        {" "}
                        전체
                        <svg
                          data-v-eff62a72=""
                          xmlns="http://www.w3.org/2000/svg"
                          className="ico-arr-dir-down-circle icon sprite-icons"
                        >
                          {/* <use
                            data-v-eff62a72=""
                            href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-ico-arr-dir-down-circle"
                            xlink:href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-ico-arr-dir-down-circle"
                          ></use> */}
                        </svg>
                      </Link>
                    </div>
                    <div data-v-eff62a72="" className="head_status">
                      <div
                        data-v-eff62a72=""
                        className="status_box field_date_purchased"
                      >
                        <Link
                          data-v-eff62a72=""
                          href="#"
                          className="status_link"
                        >
                          <span data-v-eff62a72="" className="status_txt">
                            구매일
                          </span>
                        </Link>
                      </div>
                      <div
                        data-v-eff62a72=""
                        className="status_box field_status"
                      >
                        <Link
                          data-v-eff62a72=""
                          href="#"
                          className="status_link"
                        >
                          <span data-v-eff62a72="" className="status_txt">
                            설정
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* <!-- 여기서 FOREACH로 구매내역 뿌리기 --> */}
                  <div data-v-eff62a72="">
                    <div data-v-53e92c51="" data-v-eff62a72="">
                      <div
                        className="purchase_list_display_item"
                        style={{ backgroundColor: "#FFFFFF" }}
                        data-v-53e92c51=""
                      >
                        <div
                          className="purchase_list_product"
                          data-v-53e92c51=""
                        >
                          <div
                            className="list_item_img_wrap"
                            data-v-53e92c51=""
                          >
                            <img
                              alt="product_image"
                              src="https://kream-phinf.pstatic.net/MjAyNDA2MjJfNDUg/MDAxNzE5MDMwMzg4NzUy.Sl-9uwQZMiwX_p1ABfkyg0pWIAR7sjQcv-5sx8n15HUg.HVdHcH-OfAwHNq2OfTKiwzp3nfs4pfjaOSEYVqsyV1Ig.PNG/a_7bd52b94ebf748f9ad7bcc633613ef7b.png?type=m"
                              className="list_item_img"
                              style={{ backgroundColor: "#ebf0f5" }}
                              data-v-53e92c51=""
                            />
                          </div>
                          <div
                            className="list_item_title_wrap"
                            data-v-53e92c51=""
                          >
                            <p className="list_item_title" data-v-53e92c51="">
                              Nike Air Force 1 '07 WB Flax
                            </p>
                            <p
                              className="list_item_description"
                              data-v-53e92c51=""
                            >
                              <span data-v-53e92c51="">280</span>
                            </p>
                          </div>
                        </div>
                        <div className="list_item_status" data-v-53e92c51="">
                          <div
                            className="list_item_column column_secondary"
                            data-v-53e92c51=""
                          >
                            <p
                              className="text-lookup secondary_title display_paragraph"
                              style={{ color: "#22222280" }}
                              data-v-09bea70c=""
                              data-v-7d3b6402=""
                              data-v-53e92c51=""
                            >
                              23/10/31
                            </p>
                          </div>
                          <div
                            className="list_item_column column_last"
                            data-v-53e92c51=""
                          >
                            <Link
                              href="/"
                              className="text-lookup last_description display_paragraph action_named_action"
                              style={{ color: "#222222CC" }}
                              data-v-09bea70c=""
                              data-v-7d3b6402=""
                              data-v-53e92c51=""
                            >
                              설정
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- 여기까지 FOREACH --> */}
                  {/* <!-- 페이징 --> */}
                  <div
                    className="pagination"
                    data-v-4857d0b8=""
                    data-v-3b1b5d32=""
                  >
                    <div
                      className="pagination_box first last"
                      data-v-4857d0b8=""
                    >
                      <div className="prev_btn_box" data-v-4857d0b8="">
                        <Link href="#" className="btn_arr" data-v-4857d0b8="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="arr-page-first icon sprite-icons"
                            data-v-4857d0b8=""
                          >
                            {/* <use
                              href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-arr-page-first"
                              xlink:href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-arr-page-first"
                              data-v-4857d0b8=""
                            ></use> */}
                          </svg>
                        </Link>
                        <Link href="#" className="btn_arr" data-v-4857d0b8="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="arr-page-prev icon sprite-icons"
                            data-v-4857d0b8=""
                          >
                            {/* <use
                              href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-arr-page-prev"
                              xlink:href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-arr-page-prev"
                              data-v-4857d0b8=""
                            ></use> */}
                          </svg>
                        </Link>
                      </div>
                      <div className="page_bind" data-v-4857d0b8="">
                        <Link
                          href="#"
                          className="btn_page active"
                          data-v-4857d0b8=""
                        >
                          {" "}
                          1{" "}
                        </Link>
                      </div>
                      <div className="next_btn_box" data-v-4857d0b8="">
                        <Link href="#" className="btn_arr" data-v-4857d0b8="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="arr-page-next icon sprite-icons"
                            data-v-4857d0b8=""
                          >
                            {/* <use
                              href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-arr-page-next"
                              xlink:href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-arr-page-next"
                              data-v-4857d0b8=""
                            ></use> */}
                          </svg>
                        </Link>
                        <Link href="#" className="btn_arr" data-v-4857d0b8="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="arr-page-last icon sprite-icons"
                            data-v-4857d0b8=""
                          >
                            {/* <use
                              href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-arr-page-last"
                              xlink:href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-arr-page-last"
                              data-v-4857d0b8=""
                            ></use> */}
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* <!--  --> */}
                  {/* <!-- 없을 경우 --> */}
                  <div
                    data-v-24868902=""
                    data-v-eff62a72=""
                    className="empty_area"
                  >
                    <p data-v-24868902="" className="desc">
                      구매 내역이 없습니다.
                    </p>
                    <Link
                      data-v-420a5cda=""
                      data-v-24868902=""
                      href="/post"
                      className="btn outlinegrey small"
                    >
                      {" "}
                      SHOP 바로가기{" "}
                    </Link>
                  </div>
                  {/* <!--  --> */}
                </div>
              </div>
            </div>
            {/* <!-- 여기까지 컨텐츠 --> */}
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
