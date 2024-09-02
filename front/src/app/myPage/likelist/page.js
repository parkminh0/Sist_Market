'use client'

import MyPageSide from "@/component/user/layout/MyPageSide";
import React, { useEffect, useState } from "react";
import "/public/css/myPage.css";
import "/public/css/likelist.css";
import Link from "next/link";
import axios from "axios";

export default function Page() {
  // $(function(){
  // 	$("button.saved-chip").click(function(){
  // 		if($(this).hasClass("active"))
  // 			return;

  // 		$("button.saved-chip").removeClass("active");
  // 		$(this).addClass("active");
  // 	});
  // })

  const [likeWhat, setLikeWhat] = useState('post');
  const [likeList, setLikeList] = useState({});

  const API_URL = '/user/api/likeLists';

  function getLikeList(likeWhat){
    axios({
      url: API_URL,
      method: "post",
      params: {"likewhat":likeWhat},
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.data.likeList);
      setLikeList(res.data.likeList);
    });
  }

  useEffect(()=>{
    getLikeList(likeWhat);
  },[likeWhat]);

  return (
    <>
      <article className="_1h4pbgy7wg _1h4pbgy7wz">
        <div className="_6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462">
          <section style={{ borderBottom: "1px solid #ebebeb" }} className="">
            <div className="_588sy41z _588sy421 _588sy42q _588sy415q _588sy417e">
              <nav className="iq86zf0">
                <ol className="iq86zf1 _588sy42q _588sy415q">
                  <li>
                    <a href="/">
                      <span className="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf3 iq86zf2 _588sy41n">
                        <font style={{ verticalAlign: "inherit" }}>홈</font>
                      </span>
                    </a>
                    <span className="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf4 _588sy4ze _588sy4w8">
                      <font style={{ verticalAlign: "inherit" }}> &gt;</font>
                    </span>
                  </li>
                </ol>
              </nav>
              <a href="/myPage">
                <div className="_588sy41z _588sy421 _588sy42q _588sy415q">
                  <span className="_588sy4192 _588sy41x _588sy41b2 _588sy43">
                    <font style={{ verticalAlign: "inherit" }}>
                      마이 페이지
                    </font>
                  </span>
                </div>
              </a>
            </div>
            <a href="/myPage/likelist">
              <div className="_1h4pbgy7dk _1h4pbgy7j7 _1h4pbgy7j0 _1h4pbgy7il _1h4pbgy7w0">
                <h1 className="_1h4pbgy78o _1h4pbgy796 _1h4pbgy79g _1h4pbgy7ag _1h4pbgy7c8">
                  <font style={{ verticalAlign: "inherit" }}>관심목록</font>
                </h1>
              </div>
            </a>
          </section>
        </div>
        <div className="my_home container my md _6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462">
          <section className="_1h4pbgy9ug _1h4pbgy8zc _1h4pbgy92j _1h4pbgy7y8 _1h4pbgy83s _1h4pbgy843 _1h4pbgy84k">
            {/* <jsp:include page="/WEB-INF/views/user/myPageSub/myPageSide.jsp"/> */}
            <MyPageSide />
            {/* <!-- 여기서부터 콘텐츠 --> */}
            <div
              data-v-81750584=""
              data-v-0adb81cc=""
              className="content_area my-page-content"
            >
              <div
                data-v-6b53f901=""
                data-v-81750584=""
                className="content_title border"
              >
                <div data-v-6b53f901="" className="title">
                  <h3 data-v-6b53f901="">관심목록</h3>
                </div>
              </div>
              <div
                data-v-09af5873=""
                data-v-81750584=""
                className="saved-chips-container"
              >
                <button data-v-09af5873="" onClick={()=>setLikeWhat('post')} className={likeWhat == 'post' ? "saved-chip active" : "saved-chip"}>
                  게시글
                </button>
                <button data-v-09af5873="" onClick={()=>setLikeWhat('category')} className={likeWhat == 'category' ? "saved-chip active" : "saved-chip"}>
                  카테고리
                </button>
                <button data-v-09af5873="" onClick={()=>setLikeWhat('keyword')} className={likeWhat == 'keyword' ? "saved-chip active" : "saved-chip"}>
                  키워드
                </button>
              </div>
              <div data-v-81750584="" className="saved-product">
                <div data-v-3d362ce8="">
                  {/* <!-- 없을 경우 --> */}
                  <div data-v-3d362ce8="" className="content">
                    <div
                      data-v-24868902=""
                      data-v-eff62a72=""
                      className="empty_area"
                    >
                      <p data-v-24868902="" className="desc">
                        관심 상품이 없습니다.
                      </p>
                      <a
                        data-v-420a5cda=""
                        data-v-24868902=""
                        href="/post"
                        className="btn outlinegrey small"
                      >
                        {" "}
                        SHOP 바로가기{" "}
                      </a>
                    </div>
                  </div>
                  {/* <!--  --> */}
                  <div data-v-3d362ce8="" className="my_interest">
                    <div data-v-3d362ce8="" className="content-header">
                      <div data-v-3d362ce8="" className="total-rows">
                        전체 10
                      </div>
                      <div
                        data-v-69f3b122=""
                        data-v-3d362ce8=""
                        className="filter_sorting"
                      >
                        <button
                          data-v-69f3b122=""
                          type="button"
                          className="sorting_title"
                        >
                          {" "}
                          관심 등록순{" "}
                        </button>
                      </div>
                    </div>
                    <ul
                      data-v-6aa963fd=""
                      data-v-3d362ce8=""
                      className="wish_list"
                    >
                      {/* ForEach로 돌리기 */}
                      <li data-v-6aa963fd="">
                        <div data-v-6aa963fd="" className="wish_item">
                          <div data-v-6aa963fd="" className="wish_product">
                            <div data-v-6aa963fd="" className="product_box">
                              <div
                                data-v-16369cf2=""
                                data-v-6aa963fd=""
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
                                  <span
                                    data-v-17ca498c=""
                                    className="tag_text"
                                  ></span>
                                </div>
                                <picture
                                  data-v-82b93d2c=""
                                  data-v-16369cf2=""
                                  className="picture product_img"
                                >
                                  <source
                                    data-v-82b93d2c=""
                                    type="image/webp"
                                    srcSet="https://kream-phinf.pstatic.net/MjAyNDA2MjJfNDUg/MDAxNzE5MDMwMzg4NzUy.Sl-9uwQZMiwX_p1ABfkyg0pWIAR7sjQcv-5sx8n15HUg.HVdHcH-OfAwHNq2OfTKiwzp3nfs4pfjaOSEYVqsyV1Ig.PNG/a_7bd52b94ebf748f9ad7bcc633613ef7b.png?type=m_webp"
                                  />
                                  <source
                                    data-v-82b93d2c=""
                                    srcSet="https://kream-phinf.pstatic.net/MjAyNDA2MjJfNDUg/MDAxNzE5MDMwMzg4NzUy.Sl-9uwQZMiwX_p1ABfkyg0pWIAR7sjQcv-5sx8n15HUg.HVdHcH-OfAwHNq2OfTKiwzp3nfs4pfjaOSEYVqsyV1Ig.PNG/a_7bd52b94ebf748f9ad7bcc633613ef7b.png?type=m"
                                  />
                                  <img
                                    data-v-82b93d2c=""
                                    alt="상품 이미지"
                                    src="https://kream-phinf.pstatic.net/MjAyNDA2MjJfNDUg/MDAxNzE5MDMwMzg4NzUy.Sl-9uwQZMiwX_p1ABfkyg0pWIAR7sjQcv-5sx8n15HUg.HVdHcH-OfAwHNq2OfTKiwzp3nfs4pfjaOSEYVqsyV1Ig.PNG/a_7bd52b94ebf748f9ad7bcc633613ef7b.png?type=m"
                                    loading="lazy"
                                    className="image full_width"
                                  />
                                </picture>
                              </div>
                            </div>
                            <div data-v-6aa963fd="" className="product_detail">
                              <div data-v-6aa963fd="" className="brand_link">
                                <a
                                  data-v-6aa963fd=""
                                  href="#"
                                  className="brand-text"
                                >
                                  {" "}
                                  상품명
                                </a>
                              </div>
                              <p data-v-6aa963fd="" className="name">
                                카테고리
                              </p>
                              <p data-v-6aa963fd="" className="size">
                                <span data-v-6aa963fd="">위치</span>
                              </p>
                            </div>
                            <div
                              data-v-9ff60cb2=""
                              data-v-6aa963fd=""
                              className="wish_buy"
                            >
                              <div data-v-9ff60cb2="">
                                <div
                                  data-v-0b6ddb6a=""
                                  data-v-9ff60cb2=""
                                  className="division_btn_box lg"
                                >
                                  <button
                                    data-v-0b6ddb6a=""
                                    className="btn_action"
                                    style={{
                                      backgroundColor: "rgb(239, 98, 83)",
                                    }}
                                  >
                                    <strong
                                      data-v-0b6ddb6a=""
                                      className="title"
                                    >
                                      457,000원
                                    </strong>
                                  </button>
                                </div>
                                <a
                                  data-v-9ff60cb2=""
                                  href="#"
                                  className="status_link"
                                >
                                  {" "}
                                  삭제{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li data-v-6aa963fd="">
                        <div data-v-6aa963fd="" className="wish_item">
                          <div data-v-6aa963fd="" className="wish_product">
                            <div data-v-6aa963fd="" className="product_box">
                              <div
                                data-v-16369cf2=""
                                data-v-6aa963fd=""
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
                                  <span
                                    data-v-17ca498c=""
                                    className="tag_text"
                                  ></span>
                                </div>
                                <picture
                                  data-v-82b93d2c=""
                                  data-v-16369cf2=""
                                  className="picture product_img"
                                >
                                  <source
                                    data-v-82b93d2c=""
                                    type="image/webp"
                                    srcSet="https://kream-phinf.pstatic.net/MjAyNDA2MjJfNDUg/MDAxNzE5MDMwMzg4NzUy.Sl-9uwQZMiwX_p1ABfkyg0pWIAR7sjQcv-5sx8n15HUg.HVdHcH-OfAwHNq2OfTKiwzp3nfs4pfjaOSEYVqsyV1Ig.PNG/a_7bd52b94ebf748f9ad7bcc633613ef7b.png?type=m_webp"
                                  />
                                  <source
                                    data-v-82b93d2c=""
                                    srcSet="https://kream-phinf.pstatic.net/MjAyNDA2MjJfNDUg/MDAxNzE5MDMwMzg4NzUy.Sl-9uwQZMiwX_p1ABfkyg0pWIAR7sjQcv-5sx8n15HUg.HVdHcH-OfAwHNq2OfTKiwzp3nfs4pfjaOSEYVqsyV1Ig.PNG/a_7bd52b94ebf748f9ad7bcc633613ef7b.png?type=m"
                                  />
                                  <img
                                    data-v-82b93d2c=""
                                    alt="상품 이미지"
                                    src="https://kream-phinf.pstatic.net/MjAyNDA2MjJfNDUg/MDAxNzE5MDMwMzg4NzUy.Sl-9uwQZMiwX_p1ABfkyg0pWIAR7sjQcv-5sx8n15HUg.HVdHcH-OfAwHNq2OfTKiwzp3nfs4pfjaOSEYVqsyV1Ig.PNG/a_7bd52b94ebf748f9ad7bcc633613ef7b.png?type=m"
                                    loading="lazy"
                                    className="image full_width"
                                  />
                                </picture>
                              </div>
                            </div>
                            <div data-v-6aa963fd="" className="product_detail">
                              <div data-v-6aa963fd="" className="brand_link">
                                <a
                                  data-v-6aa963fd=""
                                  href="#"
                                  className="brand-text"
                                >
                                  {" "}
                                  상품명
                                </a>
                              </div>
                              <p data-v-6aa963fd="" className="name">
                                카테고리
                              </p>
                              <p data-v-6aa963fd="" className="size">
                                <span data-v-6aa963fd="">위치</span>
                              </p>
                            </div>
                            <div
                              data-v-9ff60cb2=""
                              data-v-6aa963fd=""
                              className="wish_buy"
                            >
                              <div data-v-9ff60cb2="">
                                <div
                                  data-v-0b6ddb6a=""
                                  data-v-9ff60cb2=""
                                  className="division_btn_box lg"
                                >
                                  <button
                                    data-v-0b6ddb6a=""
                                    className="btn_action"
                                    style={{ backgroundColor: "#495057" }}
                                  >
                                    <strong
                                      data-v-0b6ddb6a=""
                                      className="title"
                                    >
                                      거래완료
                                    </strong>
                                  </button>
                                </div>
                                <a
                                  data-v-9ff60cb2=""
                                  href="#"
                                  className="status_link"
                                >
                                  {" "}
                                  삭제{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    {/* 페이징 */}
                    {/* <div data-v-1f9de2f0="" data-v-3d362ce8="" className="pagination">
                                <div data-v-1f9de2f0="" className="pagination_box first last">
                                    <div data-v-1f9de2f0="" className="prev_btn_box">
                                        <a data-v-1f9de2f0="" href="/saved/tab/saved-product?page=1" className="btn_arr" aria-label="첫 페이지">
                                            <svg data-v-1f9de2f0="" xmlns="http://www.w3.org/2000/svg" className="arr-page-first icon sprite-icons">
                                                <use data-v-1f9de2f0="" href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-arr-page-first" xlink:href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-arr-page-first"></use>
                                            </svg>
                                        </a>
                                        <a data-v-1f9de2f0="" href="/saved/tab/saved-product?page=0" className="btn_arr" aria-label="이전 페이지">
                                            <svg data-v-1f9de2f0="" xmlns="http://www.w3.org/2000/svg" className="arr-page-prev icon sprite-icons">
                                                <use data-v-1f9de2f0="" href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-arr-page-prev" xlink:href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-arr-page-prev"></use>
                                            </svg>
                                        </a>
                                    </div>
                                    <div data-v-1f9de2f0="" className="page_bind">
                                        <a data-v-1f9de2f0="" href="/saved/tab/saved-product?page=1" className="btn_page active" aria-label="1페이지"> 1 </a>
                                    </div>
                                    <div data-v-1f9de2f0="" className="next_btn_box">
                                        <a data-v-1f9de2f0="" href="/saved/tab/saved-product?page=2" className="btn_arr" aria-label="다음 페이지">
                                            <svg data-v-1f9de2f0="" xmlns="http://www.w3.org/2000/svg" className="arr-page-next icon sprite-icons">
                                                <use data-v-1f9de2f0="" href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-arr-page-next" xlink:href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-arr-page-next"></use>
                                            </svg>
                                        </a>
                                        <a data-v-1f9de2f0="" href="/saved/tab/saved-product?page=1" className="btn_arr" aria-label="마지막 페이지">
                                            <svg data-v-1f9de2f0="" xmlns="http://www.w3.org/2000/svg" className="arr-page-last icon sprite-icons">
                                                <use data-v-1f9de2f0="" href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-arr-page-last" xlink:href="/_nuxt/902a7eb5512d7d4f25543902cfd1ccdc.svg#i-arr-page-last"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div> */}
                    {/* 페이징 */}
                  </div>
                </div>
              </div>
            </div>
            {/* 여기까지 컨텐츠 */}
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
