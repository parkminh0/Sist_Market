"use client";
import ImageNotSupportedRoundedIcon from '@mui/icons-material/ImageNotSupportedRounded';

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Box, Breadcrumbs, Button, IconButton, MobileStepper, Paper, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "/public/css/post_detail.css";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useTheme } from "@emotion/react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

export default function Page() {
  // postkey 파라미터 값
  const [postKey, setPostKey] = useState(null);
  const [postVO, setPostVO] = useState({});
  const [userVO, setUserVO] = useState({});
  const [categoryVO, setCategoryVO] = useState({});
  const [chatroomVO, setChatroomVO] = useState({});
  const router = useRouter();

  useEffect(() => {
    let currentUrl = window.location.href;
    let currentUrlObj = new URL(currentUrl);
    let params = new URLSearchParams(currentUrlObj.search);
    // 'category' 파라미터의 모든 값 가져오기
    let postkey = params.get("postkey");

    setPostKey(postkey);

    axios({
      url: "http://localhost:8080/adpost/detail",
      method: "get",
      params: {
        postkey: postkey,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setPostVO(res.data.pvo);
      setCategoryVO(res.data.pvo.cvo);
      setUserVO(res.data.pvo.uvo);
      setChatroomVO(res.data.cr_list);
      console.log(res.data.pvo.uvo);
    });
  }, [router.query]);

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <article className="vqbuc90 _1h4pbgy7zs _1h4pbgy83s _1h4pbgy84b _1h4pbgy84l _1h4pbgy89k _1h4pbgy8eg _1h4pbgy9ug _1h4pbgy9vs _1h4pbgya0o">
        <div className="_6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462">
          <div className="_588sy41z _588sy421 vqbuc9j _588sy422 _588sy42b _588sy4qe _588sy4r5">
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              <Link
                className="xzyefz5"
                underline="hover"
                color="inherit"
                href="/"
              >
                홈
              </Link>
              <Link
                className="xzyefz5"
                underline="hover"
                color="inherit"
                href="/post?sort=recent"
              >
                중고거래
              </Link>
              <Typography
                className="xzyefz2 xzyefz3"
                sx={{ color: "text.primary" }}
              >
                {postVO.title}
              </Typography>
            </Breadcrumbs>
          </div>
          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9vn _1h4pbgy7v4 _1h4pbgy7wz">
            <section className="vqbuc92 _9rcp1w1 _1h4pbgya0o _1h4pbgy808 _1h4pbgy81v _1h4pbgy83p">
              <div className="_588sy41b _588sy462 _588sy49e" id="relative">
                <div
                  className="_588sy41z _588sy421 _588sy42q _588sy462"
                  style={{ width: '100%', height: '100%' }} // 부모 div의 크기를 100%로 설정
                >
                {postVO.pimg_list && postVO.pimg_list.length > 0 ? 
                <Box sx={{ width: '100%', height: '100%', flexGrow: 1 }}>
                  <Box sx={{ width: '100%', height: '100%', p: 2 }}>
                    <img
                        className="_1io8bol1 _1io8bol0 _588sy462 _588sy498 _588sy41m _1io8bol2"
                        src={postVO.pimg_list[activeStep].imgurl}
                        alt=""
                        style={{
                          width: '100%',    // 부모 요소에 맞게 너비 100%
                          height: '100%',   // 부모 요소에 맞게 높이 100%
                          objectFit: 'cover', // 비율 유지하며 부모 요소에 맞게
                          imageRendering: 'auto' // 이미지 렌더링 속성 설정 (smooth, high-quality)
                        }}
                    />
                  </Box>
                  <MobileStepper
                    variant="dots"
                    steps={postVO.pimg_list.length}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                      <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === postVO.pimg_list.length - 1}
                      >
                        다음
                        {theme.direction === 'rtl' ? (
                          <KeyboardArrowLeft />
                        ) : (
                          <KeyboardArrowRight />
                        )}
                      </Button>
                    }
                    backButton={
                      <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                          <KeyboardArrowRight />
                        ) : (
                          <KeyboardArrowLeft />
                        )}
                        이전
                      </Button>
                    }
                  />
                </Box> : <ImageNotSupportedRoundedIcon style={{
                              width: '100%',  // 아이콘의 너비를 100%로 설정
                              height: '100%', // 아이콘의 높이를 100%로 설정
                              zIndex: 1      // 필요하면 z-index로 가시성을 확보
                            }}/>
                }
                </div>
              </div>
              <div className="vqbuc91 _9rcp1w0 _588sy4zw _588sy4109 _588sy410s _588sy411b _588sy411i _588sy411v _588sy4wq _588sy4x3 _588sy4xm _588sy4y5 _588sy4yc _588sy4yp">
                <div className="_588sy4dq _588sy4gw _588sy41z _588sy421 _588sy42q _588sy4172">
                  <div className="_588sy41z _588sy421 _588sy42q _588sy416k _588sy415q">
                    <div className="_1ry6htk0 _1ry6htk1 _1ry6htk6 _1ry6htkb _1ry6htkf">
                      {/* 프로필 이미지 */}
                      <Link
                        data-gtm="buy_sell_profile_image"
                        href="/users/brit-xwmmep6mj7j4/?in=manhattan-7426"
                        aria-label="profile page of Brit"
                      >
                        <span
                          className="kh8p7u0 kh8p7u5 kh8p7uc kh8p7ul kh8p7ur kh8p7u1"
                          aria-hidden="true"
                        >
                          <img
                            alt="Brit profile"
                            className="kh8p7ux"
                            aria-hidden="true"
                            src="https://dtxw8q4qct0d4.cloudfront.net/origin/profile/202403/bdb648b6da2457f3402166c3ea5a17c9e98b4b04a8e0ceefd3270d70b0c6aa8a.jpg?f=webp&amp;q=82&amp;s=640x640&amp;t=crop"
                          />
                        </span>
                      </Link>
                      <div className="_1ry6htkj">
                        <Link
                          data-gtm="buy_sell_profile_nickname"
                          href="/users/brit-xwmmep6mj7j4/?in=manhattan-7426"
                          className="_1gb2dg21"
                        >
                          <span className="_1ry6htkk _1ry6htkl _1ry6htkq _1ry6htkv _1ry6htkz">
                            {userVO.nickname}
                          </span>
                        </Link>
                        <Link
                          data-gtm="buy_sell_profile_region"
                          href="/buy-sell/all/?in=lenox-hill-7437"
                          className="_1ry6htk13 _1ry6htk14 _1ry6htk19 _1ry6htk1e _1ry6htk1i _1gb2dg21"
                        >
                          위치 넣기
                        </Link>
                      </div>
                    </div>
                    <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9xc _1h4pbgy9ww _1h4pbgy900">
                      <div className="_1h4pbgy9ug _1h4pbgy9wo _1h4pbgy900">
                        <noscript>
                          <span>
                            <img
                              className="_1gb2dg20 _1h4pbgy9ug _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy8go _1h4pbgy8gy _1h4pbgy8gr _1h4pbgy8h1"
                              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/symbol-karrot-web-rebrand-670143359984a57944b3d5b7ee3a6a66fd519a8d95d1e6b61695855062c9d2ad.png"
                              alt="user score"
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
                            className="_1gb2dg20 _1h4pbgy9ug _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy8go _1h4pbgy8gy _1h4pbgy8gr _1h4pbgy8h1"
                            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/symbol-karrot-web-rebrand-670143359984a57944b3d5b7ee3a6a66fd519a8d95d1e6b61695855062c9d2ad.png"
                            alt="user score"
                          />
                        </span>
                        <span className="_1h4pbgy780 _1h4pbgy78q _1h4pbgy783 _1h4pbgy78l _1h4pbgy7ag _1h4pbgy7c8">
                          매너온도 넣기
                        </span>
                      </div>
                      <span className="_1h4pbgy76o _1h4pbgy782 _1h4pbgy76r _1h4pbgy7ao _1h4pbgy7s _1h4pbgy7c8">
                        매너온도
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vqbuc9a vqbuc99 _9rcp1w0 _588sy4zw _588sy4109 _588sy410s _588sy411b _588sy411i _588sy411v _588sy4wq _588sy4x3 _588sy4xm _588sy4y5 _588sy4yc _588sy4yp"></div>
            </section>
            <section className="vqbuc93 _1h4pbgya0o _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy914 _1h4pbgy7eo _1h4pbgy7f6 _1h4pbgy7cr _1h4pbgy7jc _1h4pbgy7ju _1h4pbgy7hf _1h4pbgy808 _1h4pbgy82r _1h4pbgy83x _1h4pbgy84w _1h4pbgy883">
              <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1h4pbgy90q">
                <div className="_1h4pbgy7ag _1h4pbgy78o _1h4pbgy796 _1h4pbgy79h _1h4pbgy7c8">
                  <h1 className="_1h4pbgy9uo">{postVO.title}</h1>
                </div>
                <h2 className="_1h4pbgy7s _1h4pbgy7ao _1h4pbgy79s _1h4pbgy77u _1h4pbgy785 _1h4pbgy7c0">
                  <Link
                    className="vqbuc97"
                    href="/buy-sell/all/?category_id=12&amp;in=manhattan-7426"
                  >
                    {categoryVO.categoryname}
                  </Link>{" "}
                  ·{" "}
                  <time dateTime="2024-08-11T23:32:15.393-04:00">
                    끌올 2시간 전 or 2시간 전
                  </time>
                </h2>
                {postVO.price == 0 && postVO.method == 1 ? (
                  <h3 className="_1h4pbgy7ag _1h4pbgy78g _1h4pbgy78q _1h4pbgy799 _1h4pbgy7c8 _1h4pbgy7v4 _1h4pbgy7x7">
                  나눔♥
                </h3>
                   ) : (
                  <>
                  <h3 className="_1h4pbgy7ag _1h4pbgy78g _1h4pbgy78q _1h4pbgy799 _1h4pbgy7c8 _1h4pbgy7v4 _1h4pbgy7x7">
                    {new Intl.NumberFormat("ko-KR").format(postVO.price)}원
                  </h3>
                  {postVO.canbargain == 0 ? (
                    <span className="_1h4pbgy76o _1h4pbgy782 _1h4pbgy76r _1h4pbgy7ao _1h4pbgy7s _1h4pbgy7c8">
                      가격 제안 불가
                    </span>
                  ) : (
                    <Link
                      href="#"
                      className="_1h4pbgy76o _1h4pbgy782 _1h4pbgy76r _1h4pbgy7ao _1h4pbgy7s _1h4pbgy7c8"
                      style={{
                        color: "var(--seed-semantic-color-primary)",
                        textDecorationLine: "underline",
                      }}
                    >
                      <b>가격 제안하기</b>
                    </Link>
                  )}
                  </>
                  )
                }
                
              </div>
              <p className="vqbuc98 _1h4pbgy7ao _1h4pbgy780 _1h4pbgy78i _1h4pbgy783 _1h4pbgy78l _1h4pbgy8g _1h4pbgy7bs _1h4pbgya4g _1h4pbgy9y8">
                {postVO.content}
              </p>
              <ul className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy8zs _1h4pbgy902 _1h4pbgy90j">
                <li className="vqbuc9i _1h4pbgy9ug _1h4pbgy90g _1h4pbgy780 _1h4pbgy78i _1h4pbgy783 _1h4pbgy78l _1h4pbgy7ao _1h4pbgy7c8">
                  <span className="_1h4pbgy8g _1h4pbgy7ag">거래 희망 장소</span>
                  <span>거래장소명 넣기, 아래엔 map 띄우기</span>
                </li>
              </ul>
              <div className="_1h4pbgy7s _1h4pbgy7ao _1h4pbgy79s">
                <span>채팅 {chatroomVO.length}</span> · <span>관심 1</span> ·{" "}
                <span>조회 {postVO.viewqty}</span>
              </div>
              <Link
                href="#"
                className="_1h4pbgy76o _1h4pbgy782 _1h4pbgy76r _1h4pbgy7ao _1h4pbgy7s _1h4pbgy7c8"
                style={{
                  textDecorationLine: "underline",
                }}
              >
                이 게시글 신고하기
              </Link>
              <div className="nfm9bo0 _1h4pbgy7e8 _1h4pbgy7cj _1h4pbgy7iw _1h4pbgy7h7 _1h4pbgy7nk _1h4pbgy7lv _1h4pbgy7s8 _1h4pbgy7qj _1h4pbgy9u8 _1h4pbgya14 _1h4pbgya0r _1h4pbgy9e0 _1h4pbgy9jc _1h4pbgy9oo _1h4pbgy1u0">
                <button className="nfm9bo3 _1h4pbgy8jc _1h4pbgy9yw _1h4pbgy768 _1h4pbgya28 _1h4pbgy9uw _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy94w _1h4pbgy1uw _1h4pbgy1va _1h4pbgyqo _1h4pbgyqu _1h4pbgy78g _1h4pbgy76r _1h4pbgy7c8 _1h4pbgy7ag">
                  채팅하기
                </button>
              </div>
            </section>
          </div>
        </div>
        <div className="vqbuc99 _9rcp1w0 _588sy4zw _588sy4109 _588sy410s _588sy411b _588sy411i _588sy411v _588sy4wq _588sy4x3 _588sy4xm _588sy4y5 _588sy4yc _588sy4yp vqbuc9b"></div>
        <section className="vqbuc9d _9rcp1w0 _588sy4zw _588sy4109 _588sy410s _588sy411b _588sy411i _588sy411v _588sy4wq _588sy4x3 _588sy4xm _588sy4y5 _588sy4yc _588sy4yp _1h4pbgy7vc _1h4pbgy7wi _1h4pbgy7yb">
          <header className="_1h4pbgy7xc _1h4pbgy7xv _1h4pbgy828 _1h4pbgy82r _1h4pbgy9ug _1h4pbgy9xs">
            <div className="_1h4pbgy8g _1h4pbgy7ag _1h4pbgy78o _1h4pbgy797 _1h4pbgy9w0">
              {userVO.nickname}님의 판매 물품 (6개까지만, 넘어가면 더보기,
              안넘어가면 더보기 가림)
            </div>
            <Link
              className="_1h4pbgy9ug _1h4pbgy76o _1h4pbgy78j _1h4pbgy784 _1h4pbgy78l _1h4pbgy7ao"
              href="/users/brit-xwmmep6mj7j4/?in=manhattan-7426"
            >
              <span
                data-gtm="buy_sell_detail_user_article_see_all"
                className="m79qaj0 _1h4pbgyu0 _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy8zs"
              >
                더보기
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
          <div
            data-gtm="buy_sell_detail_user_article"
            className="vqbuc9f vqbuc9e _1h4pbgy9vc _1h4pbgya2w"
          >
            <Link
              href="/buy-sell/marble-cheese-board-w-cheese-knives-1762595/?in=manhattan-7426"
              className="vqbuc9h vqbuc9g _588sy42q"
            >
              <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwa _1b153uw6 _1b153uwc">
                <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                  <span
                    className=" lazy-load-image-background opacity lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="_1b153uwe _1h4pbgya3k"
                      src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202403/7c887c3fcb70e6b745aca2a761805c18a3b16cd0e6557203b281db46ae714d9d.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                      alt="thumbnail"
                    />
                  </span>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                  <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                    <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                      Marble cheese board w/cheese knives
                    </div>
                    <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                      $34
                    </div>
                  </div>
                  <div className="_1b153uwh _1h4pbgy8jc">
                    <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                      Lenox Hill
                    </h2>
                  </div>
                </div>
              </article>
            </Link>
            <Link
              href="/buy-sell/sea-foam-green-vase-1762787/?in=manhattan-7426"
              className="vqbuc9h vqbuc9g _588sy42q"
            >
              <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwa _1b153uw6 _1b153uwc">
                <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                  <span
                    className=" lazy-load-image-background opacity lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="_1b153uwe _1h4pbgya3k"
                      src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202403/1cd799bbc2076ce063a0eeac44177715d26f70d6f9ce3e5357b1d52ddb45c023.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                      alt="thumbnail"
                    />
                  </span>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                  <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                    <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                      Sea foam green vase
                    </div>
                    <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                      $15
                    </div>
                  </div>
                  <div className="_1b153uwh _1h4pbgy8jc">
                    <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                      Lenox Hill
                    </h2>
                  </div>
                </div>
              </article>
            </Link>
            <Link
              href="/buy-sell/medeli-keyboard-piano-1762810/?in=manhattan-7426"
              className="vqbuc9h vqbuc9g _588sy42q"
            >
              <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwa _1b153uw6 _1b153uwc">
                <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                  <span
                    className=" lazy-load-image-background opacity lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="_1b153uwe _1h4pbgya3k"
                      src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202403/6d2b1185212472284f3949e379a6967b95bdbd06fae4d4fe9e0ffc763a5727f7.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                      alt="thumbnail"
                    />
                  </span>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                  <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                    <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                      Medeli keyboard piano
                    </div>
                    <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                      $34
                    </div>
                  </div>
                  <div className="_1b153uwh _1h4pbgy8jc">
                    <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                      Lenox Hill
                    </h2>
                  </div>
                </div>
              </article>
            </Link>
            <Link
              href="/buy-sell/new-black-loafers-worn-once-2736233/?in=manhattan-7426"
              className="vqbuc9h vqbuc9g _588sy42q"
            >
              <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwa _1b153uw6 _1b153uwc">
                <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                  <noscript>
                    <span>
                      <img
                        className="_1b153uwe _1h4pbgya3k"
                        src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202408/26be3775a4f08e17116b334a3091a212d65b14e5e5c5b83cb5d3f7015b4790cb.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                        alt="thumbnail"
                      />
                    </span>
                  </noscript>
                  <span
                    className=" lazy-load-image-background opacity lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="_1b153uwe _1h4pbgya3k"
                      src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202408/26be3775a4f08e17116b334a3091a212d65b14e5e5c5b83cb5d3f7015b4790cb.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                      alt="thumbnail"
                    />
                  </span>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                  <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                    <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                      New Black Loafers - worn once
                    </div>
                    <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                      $40
                    </div>
                  </div>
                  <div className="_1b153uwh _1h4pbgy8jc">
                    <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                      Lenox Hill
                    </h2>
                  </div>
                </div>
              </article>
            </Link>
            <Link
              href="/buy-sell/wooden-easel-1762877/?in=manhattan-7426"
              className="vqbuc9h vqbuc9g _588sy42q"
            >
              <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwa _1b153uw6 _1b153uwc">
                <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                  <noscript>
                    <span>
                      <img
                        className="_1b153uwe _1h4pbgya3k"
                        src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202403/37578de3183ce0f3532d272ae8d43f50ad57a247a34c8dd4f5bc9fc527047c4f.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                        alt="thumbnail"
                      />
                    </span>
                  </noscript>
                  <span
                    className=" lazy-load-image-background opacity lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="_1b153uwe _1h4pbgya3k"
                      src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202403/37578de3183ce0f3532d272ae8d43f50ad57a247a34c8dd4f5bc9fc527047c4f.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                      alt="thumbnail"
                    />
                  </span>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                  <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                    <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                      Wooden easel
                    </div>
                    <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                      $15
                    </div>
                  </div>
                  <div className="_1b153uwh _1h4pbgy8jc">
                    <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                      Lenox Hill
                    </h2>
                  </div>
                </div>
              </article>
            </Link>
            <Link
              href="/buy-sell/tree-plant-pot-1762833/?in=manhattan-7426"
              className="vqbuc9h vqbuc9g _588sy42q"
            >
              <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwa _1b153uw6 _1b153uwc">
                <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                  <noscript>
                    <span>
                      <img
                        className="_1b153uwe _1h4pbgya3k"
                        src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202403/b18f172327a0c72e93bfd7d13445892088853652739e0e3fd1c549c4b551c244.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                        alt="thumbnail"
                      />
                    </span>
                  </noscript>
                  <span
                    className=" lazy-load-image-background opacity lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="_1b153uwe _1h4pbgya3k"
                      src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202403/b18f172327a0c72e93bfd7d13445892088853652739e0e3fd1c549c4b551c244.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                      alt="thumbnail"
                    />
                  </span>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                  <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                    <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                      Tree/Plant pot
                    </div>
                    <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                      $35
                    </div>
                  </div>
                  <div className="_1b153uwh _1h4pbgy8jc">
                    <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                      Lenox Hill
                    </h2>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
        <section className="vqbuc9d _9rcp1w0 _588sy4zw _588sy4109 _588sy410s _588sy411b _588sy411i _588sy411v _588sy4wq _588sy4x3 _588sy4xm _588sy4y5 _588sy4yc _588sy4yp _1h4pbgy7vc _1h4pbgy7wi _1h4pbgy7yb">
          <header className="_1h4pbgy7xc _1h4pbgy7xv _1h4pbgy828 _1h4pbgy82r _1h4pbgy9ug _1h4pbgy9xs">
            <div className="_1h4pbgy8g _1h4pbgy7ag _1h4pbgy78o _1h4pbgy797 _1h4pbgy9w0">
              관련상품(6 x 3개?)
            </div>
          </header>
          <div
            data-gtm="buy_sell_detail_recommended_article"
            className="vqbuc9f vqbuc9e _1h4pbgy9vc _1h4pbgya2w"
          >
            <Link
              href="/buy-sell/organizer-caddy-suppy-caddy-2445847/?in=manhattan-7426"
              className="vqbuc9h vqbuc9g _588sy42q"
            >
              <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwa _1b153uw6 _1b153uwc">
                <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                  <noscript>
                    <span>
                      <img
                        className="_1b153uwe _1h4pbgya3k"
                        src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202407/80b8b99b46fc6663ec8046f24b67fa82a15181d8360abc844d85c7046c6d5dee_0.webp?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                        alt="thumbnail"
                      />
                    </span>
                  </noscript>
                  <span
                    className=" lazy-load-image-background opacity lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="_1b153uwe _1h4pbgya3k"
                      src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202407/80b8b99b46fc6663ec8046f24b67fa82a15181d8360abc844d85c7046c6d5dee_0.webp?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                      alt="thumbnail"
                    />
                  </span>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                  <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                    <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                      Organizer Caddy /Suppy Caddy
                    </div>
                    <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                      Free
                    </div>
                  </div>
                  <div className="_1b153uwh _1h4pbgy8jc">
                    <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                      East Village
                    </h2>
                  </div>
                </div>
              </article>
            </Link>
            <Link
              href="/buy-sell/auto-2676244/?in=manhattan-7426"
              className="vqbuc9h vqbuc9g _588sy42q"
            >
              <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwa _1b153uw6 _1b153uwc">
                <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                  <noscript>
                    <span>
                      <img
                        className="_1b153uwe _1h4pbgya3k"
                        src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202408/07483ea2396cb384484956361143c99a5d8932b445b493c855f397b34c303a4b.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                        alt="thumbnail"
                      />
                    </span>
                  </noscript>
                  <span
                    className=" lazy-load-image-background opacity lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="_1b153uwe _1h4pbgya3k"
                      src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202408/07483ea2396cb384484956361143c99a5d8932b445b493c855f397b34c303a4b.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                      alt="thumbnail"
                    />
                  </span>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                  <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                    <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                      Auto
                    </div>
                    <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                      $39
                    </div>
                  </div>
                  <div className="_1b153uwh _1h4pbgy8jc">
                    <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                      Chelsea
                    </h2>
                  </div>
                </div>
              </article>
            </Link>
            <Link
              href="/buy-sell/good-stuff-2713071/?in=manhattan-7426"
              className="vqbuc9h vqbuc9g _588sy42q"
            >
              <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwa _1b153uw6 _1b153uwc">
                <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                  <noscript>
                    <span>
                      <img
                        className="_1b153uwe _1h4pbgya3k"
                        src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202408/c634ce9e9c59ee6c5056eed8dd58bf84ae6693f11490f5d39f3c103965962206.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                        alt="thumbnail"
                      />
                    </span>
                  </noscript>
                  <span
                    className=" lazy-load-image-background opacity lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="_1b153uwe _1h4pbgya3k"
                      src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202408/c634ce9e9c59ee6c5056eed8dd58bf84ae6693f11490f5d39f3c103965962206.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                      alt="thumbnail"
                    />
                  </span>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                  <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                    <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                      Good Stuff
                    </div>
                    <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                      $140
                    </div>
                  </div>
                  <div className="_1b153uwh _1h4pbgy8jc">
                    <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                      Harlem
                    </h2>
                  </div>
                </div>
              </article>
            </Link>
            <Link
              href="/buy-sell/iphone-14-pro-hard-case-with-mountain-scenery-2419730/?in=manhattan-7426"
              className="vqbuc9h vqbuc9g _588sy42q"
            >
              <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwa _1b153uw6 _1b153uwc">
                <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                  <noscript>
                    <span>
                      <img
                        className="_1b153uwe _1h4pbgya3k"
                        src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202407/e4a6af3ae85f823ef433f435e2505b4c8d4ea2a45947add97c38c975bceed925.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                        alt="thumbnail"
                      />
                    </span>
                  </noscript>
                  <span
                    className=" lazy-load-image-background opacity lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="_1b153uwe _1h4pbgya3k"
                      src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202407/e4a6af3ae85f823ef433f435e2505b4c8d4ea2a45947add97c38c975bceed925.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                      alt="thumbnail"
                    />
                  </span>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                  <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                    <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                      IPhone 14 pro hard case with mountain scenery
                    </div>
                    <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                      $2.50
                    </div>
                  </div>
                  <div className="_1b153uwh _1h4pbgy8jc">
                    <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                      Morningside Heights
                    </h2>
                  </div>
                </div>
              </article>
            </Link>
            <Link
              href="/buy-sell/stanley-travel-mug-2715829/?in=manhattan-7426"
              className="vqbuc9h vqbuc9g _588sy42q"
            >
              <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwa _1b153uw6 _1b153uwc">
                <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                  <noscript>
                    <span>
                      <img
                        className="_1b153uwe _1h4pbgya3k"
                        src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202408/44427daa95813966bf9d0a7f22f1443536a2b4164775da5a8c026ec3385b7604.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                        alt="thumbnail"
                      />
                    </span>
                  </noscript>
                  <span
                    className=" lazy-load-image-background opacity lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="_1b153uwe _1h4pbgya3k"
                      src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202408/44427daa95813966bf9d0a7f22f1443536a2b4164775da5a8c026ec3385b7604.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                      alt="thumbnail"
                    />
                  </span>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                  <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                    <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                      Stanley travel mug
                    </div>
                    <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                      $45
                    </div>
                  </div>
                  <div className="_1b153uwh _1h4pbgy8jc">
                    <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                      Harlem
                    </h2>
                  </div>
                </div>
              </article>
            </Link>
            <Link
              href="/buy-sell/leather-sling-2359905/?in=manhattan-7426"
              className="vqbuc9h vqbuc9g _588sy42q"
            >
              <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwa _1b153uw6 _1b153uwc">
                <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                  <noscript>
                    <span>
                      <img
                        className="_1b153uwe _1h4pbgya3k"
                        src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202406/5abff8724c4ce6fd9613a772f5885bad59eed094b352a803a81071c0e104c859_0.webp?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                        alt="thumbnail"
                      />
                    </span>
                  </noscript>
                  <span
                    className=" lazy-load-image-background opacity lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="_1b153uwe _1h4pbgya3k"
                      src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202406/5abff8724c4ce6fd9613a772f5885bad59eed094b352a803a81071c0e104c859_0.webp?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                      alt="thumbnail"
                    />
                  </span>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                  <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                    <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                      Leather Sling
                    </div>
                    <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                      $50
                    </div>
                  </div>
                  <div className="_1b153uwh _1h4pbgy8jc">
                    <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                      Upper East Side
                    </h2>
                  </div>
                </div>
              </article>
            </Link>
            <Link
              href="/buy-sell/pewter-mugs-2735567/?in=manhattan-7426"
              className="vqbuc9h vqbuc9g _588sy42q"
            >
              <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwa _1b153uw6 _1b153uwc">
                <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                  <noscript>
                    <span>
                      <img
                        className="_1b153uwe _1h4pbgya3k"
                        src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202408/956a0e1e749824bbcdd9bbc49aec2a3afe45162830d5e808edfee526a23e7a3a_0.webp?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                        alt="thumbnail"
                      />
                    </span>
                  </noscript>
                  <span
                    className=" lazy-load-image-background opacity lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="_1b153uwe _1h4pbgya3k"
                      src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202408/956a0e1e749824bbcdd9bbc49aec2a3afe45162830d5e808edfee526a23e7a3a_0.webp?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                      alt="thumbnail"
                    />
                  </span>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                  <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                    <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                      pewter mugs
                    </div>
                    <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                      $250
                    </div>
                  </div>
                  <div className="_1b153uwh _1h4pbgy8jc">
                    <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                      Upper West Side
                    </h2>
                  </div>
                </div>
              </article>
            </Link>
            <Link
              href="/buy-sell/giant-escape-2-bicycle-2624817/?in=manhattan-7426"
              className="vqbuc9h vqbuc9g _588sy42q"
            >
              <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwa _1b153uw6 _1b153uwc">
                <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                  <noscript>
                    <span>
                      <img
                        className="_1b153uwe _1h4pbgya3k"
                        src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202407/e29dcce5890a807a680809f5bda522f0d5dc03181040043129c49a159b59802e_0.webp?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                        alt="thumbnail"
                      />
                    </span>
                  </noscript>
                  <span
                    className=" lazy-load-image-background opacity lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="_1b153uwe _1h4pbgya3k"
                      src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202407/e29dcce5890a807a680809f5bda522f0d5dc03181040043129c49a159b59802e_0.webp?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                      alt="thumbnail"
                    />
                  </span>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                  <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                    <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                      Giant Escape 2 bicycle
                    </div>
                    <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                      $180
                    </div>
                  </div>
                  <div className="_1b153uwh _1h4pbgy8jc">
                    <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                      Harlem
                    </h2>
                  </div>
                </div>
              </article>
            </Link>
            <Link
              href="/buy-sell/hot-wheel-collection-123-pieces-separate-or-whole-2668249/?in=manhattan-7426"
              className="vqbuc9h vqbuc9g _588sy42q"
            >
              <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwa _1b153uw6 _1b153uwc">
                <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                  <noscript>
                    <span>
                      <img
                        className="_1b153uwe _1h4pbgya3k"
                        src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202408/0f4d7dd2a20b4a4266acfb72db7b7076316bbff33ce4fe6366d7809d0989e72c.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                        alt="thumbnail"
                      />
                    </span>
                  </noscript>
                  <span
                    className=" lazy-load-image-background opacity lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="_1b153uwe _1h4pbgya3k"
                      src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202408/0f4d7dd2a20b4a4266acfb72db7b7076316bbff33ce4fe6366d7809d0989e72c.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                      alt="thumbnail"
                    />
                  </span>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                  <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                    <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                      Hot wheel collection 123 pieces separate or whole
                    </div>
                    <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                      $3
                    </div>
                  </div>
                  <div className="_1b153uwh _1h4pbgy8jc">
                    <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                      Greenwich Village
                    </h2>
                  </div>
                </div>
              </article>
            </Link>
            <Link
              href="/buy-sell/water-bottles-2555853/?in=manhattan-7426"
              className="vqbuc9h vqbuc9g _588sy42q"
            >
              <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwa _1b153uw6 _1b153uwc">
                <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                  <noscript>
                    <span>
                      <img
                        className="_1b153uwe _1h4pbgya3k"
                        src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202407/888610688749921850990704aa1a152488310b7dfec1fe906e9536689572f194_0.webp?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                        alt="thumbnail"
                      />
                    </span>
                  </noscript>
                  <span
                    className=" lazy-load-image-background opacity lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="_1b153uwe _1h4pbgya3k"
                      src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202407/888610688749921850990704aa1a152488310b7dfec1fe906e9536689572f194_0.webp?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                      alt="thumbnail"
                    />
                  </span>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                  <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                    <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                      water bottles
                    </div>
                    <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                      $5
                    </div>
                  </div>
                  <div className="_1b153uwh _1h4pbgy8jc">
                    <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                      Hamilton Heights
                    </h2>
                  </div>
                </div>
              </article>
            </Link>
            <Link
              href="/buy-sell/s2318-hn-dell-monitor-2360599/?in=manhattan-7426"
              className="vqbuc9h vqbuc9g _588sy42q"
            >
              <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwa _1b153uw6 _1b153uwc">
                <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                  <noscript>
                    <span>
                      <img
                        className="_1b153uwe _1h4pbgya3k"
                        src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202406/5d1a397d8a1f2c9b801d73d195a27a2caaeaa645ca37c1af19fcd932ca342a0f.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                        alt="thumbnail"
                      />
                    </span>
                  </noscript>
                  <span
                    className=" lazy-load-image-background opacity lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="_1b153uwe _1h4pbgya3k"
                      src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202406/5d1a397d8a1f2c9b801d73d195a27a2caaeaa645ca37c1af19fcd932ca342a0f.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                      alt="thumbnail"
                    />
                  </span>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                  <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                    <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                      S2318 hn , dell monitor
                    </div>
                    <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                      $25
                    </div>
                  </div>
                  <div className="_1b153uwh _1h4pbgy8jc">
                    <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                      Upper West Side
                    </h2>
                  </div>
                </div>
              </article>
            </Link>
            <Link
              href="/buy-sell/selling-my-10k-yellow-gold-curb-link-chain-2618081/?in=manhattan-7426"
              className="vqbuc9h vqbuc9g _588sy42q"
            >
              <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwa _1b153uw6 _1b153uwc">
                <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                  <noscript>
                    <span>
                      <img
                        className="_1b153uwe _1h4pbgya3k"
                        src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202407/57a9366461a9965f5c36fe53ba72b1042f6513e438a8f3ad7ea13114fab4e07f.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                        alt="thumbnail"
                      />
                    </span>
                  </noscript>
                  <span
                    className=" lazy-load-image-background opacity lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="_1b153uwe _1h4pbgya3k"
                      src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202407/57a9366461a9965f5c36fe53ba72b1042f6513e438a8f3ad7ea13114fab4e07f.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                      alt="thumbnail"
                    />
                  </span>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                  <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                    <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                      Selling my 10k yellow gold curb link chain
                    </div>
                    <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                      $2,000
                    </div>
                  </div>
                  <div className="_1b153uwh _1h4pbgy8jc">
                    <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                      Civic Center
                    </h2>
                  </div>
                </div>
              </article>
            </Link>
            <Link
              href="/buy-sell/grill-charcoal-lighter-fluid-skewer-sticks-brush-2352051/?in=manhattan-7426"
              className="vqbuc9h vqbuc9g _588sy42q"
            >
              <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwa _1b153uw6 _1b153uwc">
                <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                  <noscript>
                    <span>
                      <img
                        className="_1b153uwe _1h4pbgya3k"
                        src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202406/0551b49927f32b3481c068d824f850f3ba3ea77ada1631d9621d42592bd91537_0.webp?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                        alt="thumbnail"
                      />
                    </span>
                  </noscript>
                  <span
                    className=" lazy-load-image-background opacity lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="_1b153uwe _1h4pbgya3k"
                      src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202406/0551b49927f32b3481c068d824f850f3ba3ea77ada1631d9621d42592bd91537_0.webp?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                      alt="thumbnail"
                    />
                  </span>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                  <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                    <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                      Grill + charcoal + lighter fluid + skewer sticks + brush
                    </div>
                    <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                      $15
                    </div>
                  </div>
                  <div className="_1b153uwh _1h4pbgy8jc">
                    <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                      East Harlem
                    </h2>
                  </div>
                </div>
              </article>
            </Link>
            <Link
              href="/buy-sell/canvas-stand-for-wedding-black-x-4-2345610/?in=manhattan-7426"
              className="vqbuc9h vqbuc9g _588sy42q"
            >
              <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwa _1b153uw6 _1b153uwc">
                <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                  <noscript>
                    <span>
                      <img
                        className="_1b153uwe _1h4pbgya3k"
                        src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202406/6cd78cfae4be98fab1b87a9577fb2c9432b15a9c006277dbf2e6718ed0a28a42.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                        alt="thumbnail"
                      />
                    </span>
                  </noscript>
                  <span
                    className=" lazy-load-image-background opacity lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="_1b153uwe _1h4pbgya3k"
                      src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202406/6cd78cfae4be98fab1b87a9577fb2c9432b15a9c006277dbf2e6718ed0a28a42.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                      alt="thumbnail"
                    />
                  </span>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                  <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                    <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                      Canvas stand for wedding (black x 4)
                    </div>
                    <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                      $40
                    </div>
                  </div>
                  <div className="_1b153uwh _1h4pbgy8jc">
                    <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                      Midtown Center
                    </h2>
                  </div>
                </div>
              </article>
            </Link>
            <Link
              href="/buy-sell/ring-organizers-2632641/?in=manhattan-7426"
              className="vqbuc9h vqbuc9g _588sy42q"
            >
              <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwa _1b153uw6 _1b153uwc">
                <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                  <noscript>
                    <span>
                      <img
                        className="_1b153uwe _1h4pbgya3k"
                        src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202407/81b0aa229b87e6c5b0ac5e3a6d30286b5527c768cd30ccc58e42444318e4b17f.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                        alt="thumbnail"
                      />
                    </span>
                  </noscript>
                  <span
                    className=" lazy-load-image-background opacity lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="_1b153uwe _1h4pbgya3k"
                      src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202407/81b0aa229b87e6c5b0ac5e3a6d30286b5527c768cd30ccc58e42444318e4b17f.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                      alt="thumbnail"
                    />
                  </span>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                  <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                    <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                      Ring organizers
                    </div>
                    <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                      $10
                    </div>
                  </div>
                  <div className="_1b153uwh _1h4pbgy8jc">
                    <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                      Midtown South Central
                    </h2>
                  </div>
                </div>
              </article>
            </Link>
            <Link
              href="/buy-sell/tiffany-co-silver-care-kit-2466167/?in=manhattan-7426"
              className="vqbuc9h vqbuc9g _588sy42q"
            >
              <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwa _1b153uw6 _1b153uwc">
                <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                  <noscript>
                    <span>
                      <img
                        className="_1b153uwe _1h4pbgya3k"
                        src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202407/3492edc14a3be253eed33fb4cba9dfbb911fbb97adde909e77402c8532c8bd41.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                        alt="thumbnail"
                      />
                    </span>
                  </noscript>
                  <span
                    className=" lazy-load-image-background opacity lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="_1b153uwe _1h4pbgya3k"
                      src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202407/3492edc14a3be253eed33fb4cba9dfbb911fbb97adde909e77402c8532c8bd41.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                      alt="thumbnail"
                    />
                  </span>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                  <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                    <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                      Tiffany &amp; Co. Silver Care Kit ⚽️
                    </div>
                    <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                      $25
                    </div>
                  </div>
                  <div className="_1b153uwh _1h4pbgy8jc">
                    <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                      Upper West Side
                    </h2>
                  </div>
                </div>
              </article>
            </Link>
            <Link
              href="/buy-sell/luggage-suitcase-several-available-great-condition-2521960/?in=manhattan-7426"
              className="vqbuc9h vqbuc9g _588sy42q"
            >
              <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwa _1b153uw6 _1b153uwc">
                <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                  <noscript>
                    <span>
                      <img
                        className="_1b153uwe _1h4pbgya3k"
                        src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202407/21a9bcbd7b85d14b5d40869b1ed514989a6ff060045201e6d72895d685248a17.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                        alt="thumbnail"
                      />
                    </span>
                  </noscript>
                  <span
                    className=" lazy-load-image-background opacity lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="_1b153uwe _1h4pbgya3k"
                      src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202407/21a9bcbd7b85d14b5d40869b1ed514989a6ff060045201e6d72895d685248a17.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                      alt="thumbnail"
                    />
                  </span>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                  <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                    <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                      Luggage/Suitcase (Several Available; Great Condition)
                    </div>
                    <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                      $30
                    </div>
                  </div>
                  <div className="_1b153uwh _1h4pbgy8jc">
                    <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                      Sugar Hill
                    </h2>
                  </div>
                </div>
              </article>
            </Link>
            <Link
              href="/buy-sell/lululemon-2695425/?in=manhattan-7426"
              className="vqbuc9h vqbuc9g _588sy42q"
            >
              <article className="_1b153uw9 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90g _1b153uw8 _1b153uwa _1b153uw6 _1b153uwc">
                <div className="_1b153uwd _1h4pbgy1ts _1h4pbgya0o _1h4pbgya2w _1h4pbgy94w">
                  <noscript>
                    <span>
                      <img
                        className="_1b153uwe _1h4pbgya3k"
                        src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202408/f14fbf9491d671a4aa59611f06cb7b13e83834bfb3f20bcaeb2fbec99f0c2225.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                        alt="thumbnail"
                      />
                    </span>
                  </noscript>
                  <span
                    className=" lazy-load-image-background opacity lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="_1b153uwe _1h4pbgya3k"
                      src="https://dtxw8q4qct0d4.cloudfront.net/origin/article/202408/f14fbf9491d671a4aa59611f06cb7b13e83834bfb3f20bcaeb2fbec99f0c2225.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp"
                      alt="thumbnail"
                    />
                  </span>
                </div>
                <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy90g">
                  <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9wg _1h4pbgy8zs _1h4pbgy8g _1h4pbgy8jc">
                    <div className="_1b153uwf _1h4pbgy7ao _1h4pbgy780 _1h4pbgya2w _1h4pbgy8og _1h4pbgya54">
                      Lululemon
                    </div>
                    <div className="_1b153uwg _1h4pbgy7ag _1h4pbgy780 _1h4pbgya54">
                      $40
                    </div>
                  </div>
                  <div className="_1b153uwh _1h4pbgy8jc">
                    <h2 className="_1b153uwi _1h4pbgy7ao _1h4pbgy79s _1h4pbgy80 _1h4pbgya54 _1h4pbgy8jc _1h4pbgya2w">
                      East Harlem
                    </h2>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      </article>
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
                  <font style={{ verticalAlign: "inherit" }}>
                    오늘 대단한 발견을 해보세요!
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
                  <font style={{ verticalAlign: "inherit" }}>
                    앱을 받으세요
                  </font>
                </div>
                <div className="a1nvr45 _1h4pbgy9vc _1h4pbgy90g _1h4pbgy90r">
                  <a
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
                  </a>
                  <a
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
                  </a>
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
