"use client";
import ImageNotSupportedRoundedIcon from "@mui/icons-material/ImageNotSupportedRounded";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  IconButton,
  MobileStepper,
  Paper,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "/public/css/post_detail.css";
import "/public/css/popcatelist.css";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { useTheme } from "@emotion/react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import Cookies from "js-cookie";
import EditPostModal from "@/component/user/post/detail/EditPostModal";
import PriceOfferModal from "@/component/user/post/detail/PriceOfferModal";
import UserCellList from "@/component/user/post/detail/UserCellList";
import UserCellList2 from "@/component/user/post/detail/UserCellList2";
import PopCateList from "@/component/user/post/detail/PopCateList";
import PopCateList2 from "@/component/user/post/detail/PopCateList2";
import ReportModal from "@/component/user/post/detail/report/ReportModal";

export default function Page() {
  // PO(PriceOffer: 가격제안)모달용 데이터

  const [openPO, setOpenPO] = useState(false);
  const handleClosePO = () => {
    setOpenPO(false);
  };

  // 관심상품 등록/해제
  const [like, setLike] = useState(false);

  function isLike(postkey) {
    axios({
      url: "/adpost/isLike",
      method: "get",
      params: {
        postkey: postkey,
        userkey: Cookies.get("userkey"),
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.data.result > 0) {
        setLike(true);
      }
    });
  }

  function toggleLike() {
    axios({
      url: "/adpost/toggleLike",
      method: "get",
      params: {
        isLike: like, // isLike: true면 이미 등록된걸 삭제하는 것임
        postkey: postKey,
        userkey: userkey,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.data.result > 0) {
        if (like) {
          alert("해당 게시물에 대한 관심을 취소하였습니다.");
        } else {
          alert("해당 게시물에 대한 관심을 등록하였습니다.");
        }
        setLike(!like);
      }
    });
  }

  // 조회수

  const [viewqty, setViewqty] = useState(0);

  function updateViewqty(postkey) {
    axios({
      url: "/adpost/incViewqty",
      method: "get",
      params: {
        postkey: postkey,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.data);
      if (res.data.result > 0) {
        setViewqty(res.data.viewqty);
      }
    });
  }

  function incViewqty(postkey) {
    var userkey = Cookies.get("userkey");
    if (userkey == undefined) {
      userkey = 0;
    }
    var cookie = Cookies.get("viewedPost");
    if (cookie != undefined) {
      if (cookie.includes(`/${userkey}`)) {
        // 유저가 있을 때
        var userCookieTmp = cookie.substring(cookie.indexOf(`/${userkey}`) + 1);
        // console.log(`userCookieTmp: ${userCookieTmp}`);
        var beforeCookie = cookie.substring(0,cookie.indexOf(`/${userkey}`));
        // console.log(`beforeCookie: ${beforeCookie}`);
        var userCookie = userCookieTmp;
        var afterCookie = "";
        if(userCookieTmp.indexOf("/")>0){
          userCookie = userCookieTmp.substring(0,userCookieTmp.indexOf("/"));
          afterCookie = userCookieTmp.substring(userCookieTmp.indexOf("/"));
        }
        // console.log(`userCookie: ${userCookie}`);
        // console.log(`afterCookie: ${afterCookie}`);
        if (!userCookie.includes(`[${postkey}]`)) {
          // 새로운 페이지 일 때
          updateViewqty(postkey);
          Cookies.remove("viewedPost");
          Cookies.set("viewedPost", `${beforeCookie}${userCookie}_[${postkey}]${afterCookie}`, {
            expires: 1/(24*60) , // 1분
            // expires: 1, // 하루(24시간)
          });
        } // 이미 본 페이지 일 때는 다른 작업없음
      } else {
        // 새로운 유저
        updateViewqty(postkey);
        Cookies.set("viewedPost", `${cookie}/${userkey}_[${postkey}]`, {
          expires: 1/(24*60) , // 1분
          // expires: 1, // 하루(24시간)
        });
      }
    } else {
      // 쿠키가 아예 없을 때
      updateViewqty(postkey);
      Cookies.set("viewedPost", `/${userkey}_[${postkey}]`, {
        expires: 1/(24*60) , // 1분
        // expires: 1, // 하루(24시간)
      });
    }
  }

  // postkey 파라미터 값
  const [postKey, setPostKey] = useState(null);
  const [userTown, setUserTown] = useState("");
  const [manner, setManner] = useState(0);
  const [postVO, setPostVO] = useState({});
  const [userVO, setUserVO] = useState({});
  const [popCate, setPopCate] = useState([]);
  const [cellList, setCellList] = useState([]);
  const [categoryVO, setCategoryVO] = useState({});
  const [chatroomVO, setChatroomVO] = useState({});
  const [canEdit, setCanEdit] = useState(false);
  const router = useRouter();

  const userkey = Cookies.get("userkey");
  const loggedIn = userkey != undefined;
  const param = useSearchParams();

  function getUserTown(address_list) {
    var length = address_list.length > 0 ? address_list.length : 0;
    var userTown = "";
    for (var i = 0; i < length; i++) {
      if (address_list[i].isselected == 1) {
        var tvo = address_list[i].tvo;
        userTown = tvo.region2 + " " + tvo.region3;
      }
    }
    return userTown;
  }

  function getManner(m_list) {
    var length = m_list.length > 0 ? m_list.length : 0;
    var manner = 36.5;
    for (var i = 0; i < length; i++) {
      switch (m_list[i].ismanner) {
        case "0":
          manner -= 0.5;
          break;
        case "1":
        case "2":
          manner += 0.5;
          break;
      }
    }
    return manner;
  }

  useEffect(() => {
    let currentUrl = window.location.href;
    let currentUrlObj = new URL(currentUrl);
    let params = new URLSearchParams(currentUrlObj.search);
    // 'category' 파라미터의 모든 값 가져오기
    let postkey = params.get("postkey");

    setPostKey(postkey);

    axios({
      url: "/adpost/detail",
      method: "get",
      params: {
        postkey: postkey,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (Cookies.get("userkey") != undefined) {
        isLike(res.data.pvo.postkey);
      }
      
      setViewqty(res.data.pvo.viewqty);
      incViewqty(res.data.pvo.postkey);
      setPostVO(res.data.pvo);
      setCategoryVO(res.data.pvo.cvo);
      setUserVO(res.data.pvo.uvo);
      setChatroomVO(res.data.cr_list);
      setCanEdit(res.data.pvo.userkey == Cookies.get("userkey"));
      if (res.data.pvo.hope_place != null && res.data.pvo.hope_place != "")
        getLocation(res.data.pvo);

      if (param.get("edit") != null) {
        editPost(res.data.pvo.userkey,res.data.pvo.poststatus);
      }

      // setUserTown(getUserTown(res.data.pvo.uvo.a_list));
      setManner(getManner(res.data.pvo.uvo.m_list));

      axios({
        url: "/adpost/cellList",
        method: "get",
        params: {
          userkey: res.data.pvo.uvo.userkey,
          postkey: res.data.pvo.postkey,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        setCellList(res.data.cellList);
      });

      axios({
        url: "/adpost/pop_cate",
        method: "get",
        params: {
          categorykey: res.data.pvo.categorykey,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        setPopCate(res.data.popCateList);
      });
    });
  }, [param.get("postkey")]);

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // #region 시간 표현
  function timeDifference(postTime) {
    const now = new Date(); // 현재 시간
    const postDate = new Date(postTime); // postVO.create_dtm 값을 Date 객체로 변환

    const timeDiff = now - postDate; // 두 시간의 차이를 밀리초로 계산
    const diffInSeconds = Math.floor(timeDiff / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYear = Math.floor(diffInDays / 365);

    // #regin 차이에 따라 적절한 문자열을 반환
    if (diffInYear > 0) {
      return `${diffInYear}년 전`;
    } else if (diffInMonths > 0) {
      return `${diffInMonths}개월 전`;
    } else if (diffInDays > 0) {
      return `${diffInDays}일 전`;
    } else if (diffInHours > 0) {
      return `${diffInHours}시간 전`;
    } else if (diffInMinutes > 0) {
      return `${diffInMinutes}분 전`;
    } else {
      return "방금 전";
    }
  }
  // #endregion

  function editPost(userkey,poststatus) {
    if (userkey != Cookies.get("userkey")) {
      alert("수정 권한이 없습니다.");
    } else if(poststatus==3){
      alert("구매완료된 게시글은 수정하실 수 없습니다.");
    }else {
      setOpen(true);
    }
  }
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  function getLocation(pvo) {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=1ada5c793e355a40dc119180ae6a93f9&libraries=services&autoload=false`;
    kakaoMapScript.async = false;
    document.head.appendChild(kakaoMapScript);

    kakaoMapScript.onload = () => {
      // Kakao Maps API가 완전히 초기화된 후에 실행
      window.kakao.maps.load(() => {
        if (!window.kakao.maps.services) {
          return;
        }
        setMap(pvo); // API 로드 후에 함수 호출
      });
    };
  }
  // #region 지도
  function setMap(pvo) {
    // Geolocation API 지원 여부 확인
    try {
      let hope_place = pvo.hope_place;
      let latitude = pvo.hope_lati;
      let longitude = pvo.hope_long;
      // 주소-좌표 변환 객체를 생성합니다
      let locPosition = new kakao.maps.LatLng(latitude, longitude);

      // 인포윈도우를 생성합니다
      let infowindow = new kakao.maps.InfoWindow({
        content:
          '<span id="info-title" style="display: block; background: black; color: #fff; text-align: center; height: 24px; line-height:22px; border-radius:4px; padding:0px 10px; ">' +
          hope_place +
          "</span>",
      });

      let mapContainer = document.getElementById("map"); // 지도를 표시할 div
      let mapOption = {
        center: locPosition, // 지도의 중심좌표
        level: 5, // 지도의 확대 레벨
      };
      let map = new kakao.maps.Map(mapContainer, mapOption);
      map.setDraggable(false);
      map.setZoomable(false);

      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(latitude, longitude),
      });

      // 인포윈도우를 마커위에 표시합니다
      infowindow.open(map, marker);

      marker.setMap(map);

      let infoTitle = document.getElementById("info-title");
      let w = infoTitle.offsetWidth + 10;
      let ml = w / 2;
      infoTitle.parentElement.style.top = "82px";
      infoTitle.parentElement.style.left = "50%";
      infoTitle.parentElement.style.marginLeft = -ml + "px";
      infoTitle.parentElement.style.width = w + "px";
      infoTitle.parentElement.previousSibling.style.display = "none";
      infoTitle.parentElement.parentElement.style.border = "0px";
      infoTitle.parentElement.parentElement.style.background = "unset";

      kakao.maps.event.addListener(map, "click", function () {
        window.open(
          `https://map.kakao.com/link/map/${hope_place},${latitude},${longitude}`,
          "_blank"
        );
      });
    } catch (Exception) {
      alert("지도 생성 중 오류가 발생했습니다.");
      return;
    }
  }
  // #endregion

  const [reportOpen, setReportOpen] = useState(false);
  const handleReportOpen = () => setReportOpen(true);
  const handleReportClose = () => setReportOpen(false);
  const [chkOpen, setChkOpen] = useState(false);
  const handleChkOpen = () => { setChkOpen(true); };
  const handleChkClose = (res) => { setChkOpen(false); if (res) { setReportOpen(true); } };

  return (
    <>
      {postVO ? (
        <EditPostModal open={open} handleClose={handleClose} pvo={postVO} />
      ) : (
        ""
      )}
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
                  style={{ width: "100%", height: "100%" }} // 부모 div의 크기를 100%로 설정
                >
                  {postVO.pimg_list && postVO.pimg_list.length > 0 ? (
                    <Box sx={{ width: "100%", height: "100%", flexGrow: 1 }}>
                      <Box sx={{ width: "100%", height: "100%", p: 2 }}>
                        <img
                          className="_1io8bol1 _1io8bol0 _588sy462 _588sy498 _588sy41m _1io8bol2"
                          src={postVO.pimg_list[activeStep].imgurl}
                          alt=""
                          style={{
                            width: "100%", // 부모 요소에 맞게 너비 100%
                            height: "100%", // 부모 요소에 맞게 높이 100%
                            objectFit: "cover", // 비율 유지하며 부모 요소에 맞게
                            imageRendering: "auto", // 이미지 렌더링 속성 설정 (smooth, high-quality)
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
                            size="large"
                            onClick={handleNext}
                            disabled={
                              activeStep === postVO.pimg_list.length - 1
                            }
                          >
                            다음
                            {theme.direction === "rtl" ? (
                              <KeyboardArrowLeft />
                            ) : (
                              <KeyboardArrowRight />
                            )}
                          </Button>
                        }
                        backButton={
                          <Button
                            size="large"
                            onClick={handleBack}
                            disabled={activeStep === 0}
                          >
                            {theme.direction === "rtl" ? (
                              <KeyboardArrowRight />
                            ) : (
                              <KeyboardArrowLeft />
                            )}
                            이전
                          </Button>
                        }
                      />
                    </Box>
                  ) : (
                    <ImageNotSupportedRoundedIcon
                      style={{
                        width: "100%", // 아이콘의 너비를 100%로 설정
                        height: "100%", // 아이콘의 높이를 100%로 설정
                        zIndex: 1, // 필요하면 z-index로 가시성을 확보
                      }}
                    />
                  )}
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
                          href={`/userPage?userkey=${userVO.userkey}`}
                          className="_1gb2dg21"
                        >
                          <span className="_1ry6htkk _1ry6htkl _1ry6htkq _1ry6htkv _1ry6htkz">
                            {userVO.nickname}
                          </span>
                        </Link>
                        <Link
                          data-gtm="buy_sell_profile_region"
                          href={`/post`}
                          className="_1ry6htk13 _1ry6htk14 _1ry6htk19 _1ry6htk1e _1ry6htk1i _1gb2dg21"
                        >
                          {userTown}
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
                          {`${manner}℃`}
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
                <div
                  className="_1h4pbgy7ag _1h4pbgy78o _1h4pbgy796 _1h4pbgy79h _1h4pbgy7c8"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <h1 className="_1h4pbgy9uo">{postVO.title}</h1>

                  {like ? (
                    <FavoriteIcon
                      onClick={() => {
                        if (Cookies.get("userkey") != undefined) {
                          toggleLike();
                        } else {
                          alert("로그인이 필요한 서비스입니다.");
                        }
                      }}
                      style={{
                        color: "#ff0000",
                        marginLeft: "auto",
                      }}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      onClick={() => {
                        if (Cookies.get("userkey") != undefined) {
                          toggleLike();
                        } else {
                          alert("로그인이 필요한 서비스입니다.");
                        }
                      }}
                      style={{ marginLeft: "auto" }}
                    />
                  )}
                </div>
                <h2 className="_1h4pbgy7s _1h4pbgy7ao _1h4pbgy79s _1h4pbgy77u _1h4pbgy785 _1h4pbgy7c0">
                  <Link
                    className="vqbuc97"
                    href="/buy-sell/all/?category_id=12&amp;in=manhattan-7426"
                  >
                    {categoryVO.categoryname}
                  </Link>{" "}
                  · <time>{timeDifference(postVO.create_dtm)}</time>
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
                      <div>
                        <Link
                          href="#"
                          className="_1h4pbgy76o _1h4pbgy782 _1h4pbgy76r _1h4pbgy7ao _1h4pbgy7s _1h4pbgy7c8"
                          style={{
                            color: "var(--seed-semantic-color-primary)",
                            textDecorationLine: "underline",
                          }}
                          onClick={() => {
                            if (loggedIn) {
                              setOpenPO(true);
                            } else {
                              alert("로그인이 필요한 서비스입니다.");
                            }
                          }}
                        >
                          <b>가격 제안하기</b>
                        </Link>
                        <PriceOfferModal
                          openPO={openPO}
                          handleClosePO={handleClosePO}
                          pvo={postVO}
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
              <p className="vqbuc98 _1h4pbgy7ao _1h4pbgy780 _1h4pbgy78i _1h4pbgy783 _1h4pbgy78l _1h4pbgy8g _1h4pbgy7bs _1h4pbgya4g _1h4pbgy9y8">
                {postVO.content}
              </p>
              {postVO.hope_place && (
                <ul className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy8zs _1h4pbgy902 _1h4pbgy90j">
                  <li className="vqbuc9i _1h4pbgy9ug _1h4pbgy90g _1h4pbgy780 _1h4pbgy78i _1h4pbgy783 _1h4pbgy78l _1h4pbgy7ao _1h4pbgy7c8">
                    <span className="_1h4pbgy8g _1h4pbgy7ag">
                      거래 희망 장소
                    </span>
                    <span>{postVO.hope_place}</span>
                  </li>
                  <div
                    id="map"
                    style={{
                      border: "0.5px solid black",
                      marginTop: "10px",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                </ul>
              )}
              <div className="_1h4pbgy7s _1h4pbgy7ao _1h4pbgy79s">
                <span>채팅 {chatroomVO.length}</span> ·{" "}
                <span>관심 {postVO.likedqty}</span> ·{" "}
                <span>조회 {viewqty}</span>
              </div>
              <button onClick={() => {
                  if (!userkey) {
                    alert("로그인이 필요한 서비스입니다.");
                  } else {
                    handleChkOpen();
                  }
                }} 
                className="_1h4pbgy76o" style={{ cursor: 'pointer', textAlign: 'left' }}>
                <span style={{ borderBottom: '0.5px solid gray' }}>이 게시글 신고하기</span>
              </button>
              <Dialog open={chkOpen} onClose={() => handleChkClose(false)} aria-labelledby="confirm-dialog-title" aria-describedby="confirm-dialog-description">
                <DialogContent style={{ paddingBottom: '5px' }}>
                  <DialogContentText id="confirm-dialog-description" style={{ color: 'black', marginTop: '5px' }}>
                    신고하면 철회할 수 없습니다. 계속 하시겠습니까?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => handleChkClose(true)} style={{ backgroundColor: 'gray', color: 'white' }} >확인</Button>
                  <Button onClick={() => handleChkClose(false)} style={{ backgroundColor: '#ff5722', color: 'white' }} autoFocus>취소</Button>
                </DialogActions>
              </Dialog>
              <ReportModal reportOpen={reportOpen} handleReportClose={handleReportClose} handleReportOpen={handleReportOpen} pvo={postVO}/>
              <div className="nfm9bo0 _1h4pbgy7e8 _1h4pbgy7cj _1h4pbgy7iw _1h4pbgy7h7 _1h4pbgy7nk _1h4pbgy7lv _1h4pbgy7s8 _1h4pbgy7qj _1h4pbgy9u8 _1h4pbgya14 _1h4pbgya0r _1h4pbgy9e0 _1h4pbgy9jc _1h4pbgy9oo _1h4pbgy1u0">
                {canEdit ? (
                  <Button
                    onClick={() => {
                      editPost(postVO.userkey,postVO.poststatus);
                    }}
                    color="success"
                    variant="contained"
                    style={{ width: "100%", marginBottom: 10 }}
                  >
                    수정하기
                  </Button>
                ) : (
                  ""
                )}
                <Button
                  variant="contained"
                  style={{ width: "100%", backgroundColor: "#fa5050" }}
                  onClick={() => {
                    if (loggedIn) {
                      alert("채팅방 이동");
                    } else {
                      alert("로그인이 필요한 서비스입니다.");
                    }
                  }}
                >
                  채팅하기
                </Button>
              </div>
            </section>
          </div>
        </div>
        <div className="vqbuc99 _9rcp1w0 _588sy4zw _588sy4109 _588sy410s _588sy411b _588sy411i _588sy411v _588sy4wq _588sy4x3 _588sy4xm _588sy4y5 _588sy4yc _588sy4yp vqbuc9b"></div>
        <section style={{minWidth:450}} className="vqbuc9d _9rcp1w0 _588sy4zw _588sy4109 _588sy410s _588sy411b _588sy411i _588sy411v _588sy4wq _588sy4x3 _588sy4xm _588sy4y5 _588sy4yc _588sy4yp _1h4pbgy7vc _1h4pbgy7wi _1h4pbgy7yb">
          <header className="_1h4pbgy7xc _1h4pbgy7xv _1h4pbgy828 _1h4pbgy82r _1h4pbgy9ug _1h4pbgy9xs">
            <div className="_1h4pbgy8g _1h4pbgy7ag _1h4pbgy78o _1h4pbgy797 _1h4pbgy9w0">
              {userVO.nickname}님의 판매 물품
            </div>
            {cellList.length > 6 ? (
              <Link
                className="_1h4pbgy9ug _1h4pbgy76o _1h4pbgy78j _1h4pbgy784 _1h4pbgy78l _1h4pbgy7ao"
                href={`/user/post/celllist?userkey=${userVO.userkey}`}
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
            ) : (
              ""
            )}
          </header>
          <div 
            className="PopCateGrid"
            >
              {cellList.length > 0
                ? cellList.map((clvo, index) => {
                    if (index < 5) {
                      return <UserCellList2 key={index} pvo={clvo} />;
                    }
                  })
                : ""}
          </div>
        </section>
        <section
          className="vqbuc9d _9rcp1w0 _588sy4zw _588sy4109 _588sy410s _588sy411b _588sy411i _588sy411v _588sy4wq _588sy4x3 _588sy4xm _588sy4y5 _588sy4yc _588sy4yp _1h4pbgy7vc _1h4pbgy7wi _1h4pbgy7yb"
          style={{minWidth:450}}
          >
          <header className="_1h4pbgy7xc _1h4pbgy7xv _1h4pbgy828 _1h4pbgy82r _1h4pbgy9ug _1h4pbgy9xs">
            <div className="_1h4pbgy8g _1h4pbgy7ag _1h4pbgy78o _1h4pbgy797 _1h4pbgy9w0">
              관련상품
            </div>
            <Link
                className="_1h4pbgy9ug _1h4pbgy76o _1h4pbgy78j _1h4pbgy784 _1h4pbgy78l _1h4pbgy7ao"
                href={`/post`}
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
                      marginLeft: 'auto'
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
            className="PopCateGrid"
          >
              {popCate.length > 0
                ? popCate.map((pcvo, index) => {return(
                     <PopCateList2 key={index} pvo={pcvo} />
                    )
                  })
                : ""}
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
