"use client";
import Cookies from "js-cookie";
import Link from "next/link";
import HeaderItem from "./HeaderItem";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  TextField,
  Paper,
  InputBase,
  List,
  ListItemText,
  ListItem,
} from "@mui/material";
import axios from "axios";
import { signIn, signOut, useSession } from "next-auth/react";
import { IconButton, ListDivider, Typography } from "@mui/joy";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import MyLocationIcon from "@mui/icons-material/MyLocation";

// 필요한 다른 import들도 여기에 추가

export default function Header() {
  const pathname = usePathname();
  const { data: session } = useSession(); //nextAtuh파일에서 nickname을 세션에 저장해서 받아옴

  useEffect(() => {
    const currentPath = pathname || "/";
    const activeLink = document.querySelector(`a[data-href="${currentPath}"]`);

    // 모든 링크에서 'active' 클래스를 제거한 후 현재 링크에 추가
    document
      .querySelectorAll("a[data-href]")
      .forEach((link) => link.classList.remove("_1nvz3xsp"));
    if (activeLink) {
      activeLink.classList.add("_1nvz3xsp");
    }
  }, [pathname]);

  // #region 위치 모달 오픈
  const [locationOpen, setLocationOpen] = useState(false);
  const [nearList, setNearList] = useState([]);

  const locationClose = () => {
    setLocationOpen(false);
  };

  useEffect(() => {
    if (locationOpen == true) {
    }
    if (locationOpen == false) {
      setNearList([]);
    }
  }, [locationOpen]);
  // #endregion

  const [region1, setRegion1] = useState("");
  const [region2, setRegion2] = useState("");
  const [region3, setRegion3] = useState("");

  useEffect(() => {
    setRegion1(decodeURIComponent(Cookies.get("region1")));
    setRegion2(decodeURIComponent(Cookies.get("region2")));
    setRegion3(decodeURIComponent(Cookies.get("region3")));

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
        let tmp = Cookies.get("region1");
        if (tmp == null || tmp == "") {
          getLocation(); // API 로드 후에 함수 호출
        }
      });
    };
  }, []);

  function getLocation(e) {
    // Geolocation API 지원 여부 확인
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();
        const coord = new kakao.maps.LatLng(latitude, longitude);

        const callback = (result, status) => {
          if (status === window.kakao.maps.services.Status.OK) {
            //console.log("결과", result);

            setRegion1(result[0].address.region_1depth_name);
            setRegion2(result[0].address.region_2depth_name);
            setRegion3(result[0].address.region_3depth_name);
            Cookies.set(
              "region1",
              encodeURIComponent(result[0].address.region_1depth_name)
            );
            Cookies.set(
              "region2",
              encodeURIComponent(result[0].address.region_2depth_name)
            );
            Cookies.set(
              "region3",
              encodeURIComponent(result[0].address.region_3depth_name)
            );
            Cookies.set("latitude", latitude);
            Cookies.set("longitude", longitude);
          }
        };

        geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
      });
    } else {
      alert("브라우저가 위치 서비스를 지원하지 않습니다.");
      return;
    }

    // 현재 위치 찾기 여부
    if (e == null) return;

    let ul_tag = document.getElementById("location_list");
    while (ul_tag.firstChild) {
      ul_tag.removeChild(ul_tag.firstChild);
    }

    // let url = new URL(window.location.href);
    // let params = new URLSearchParams(url.search);
    // // 위치 파라미터 제거
    // params.delete("loc1");
    // params.delete("loc2");
    // params.delete("loc3");
    // 경로와 수정된 쿼리 문자열을 조합하여 새로운 URL을 만듭니다.
    // let newUrl = url.pathname + "?" + params.toString() + url.hash;
    // if (e.dataset.selected !== "true") {
    //   newUrl += "&loc1=" + region1;
    //   newUrl += "&loc2=" + region2;
    //   newUrl += "&loc3=" + region3;
    // }

    // 3. 새로운 li 요소 추가 (innerHTML 사용)
    ul_tag.innerHTML = `
                        <li class="_1h4pbgy3q8">
                          <a class="_1h4pbgy7e0 _1h4pbgy7io _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy780 _1h4pbgy7ao _1h4pbgy7c8 _1h4pbgy8jc" href="${newUrl}">
                            ${region3}
                          </a>
                        </li>
                      `;
  }

  const router = useRouter();

  //회원가입 페이지 이동
  const handleSignUp = () => {
    setOpen(false);
    router.push("/SignUp");
  };

  //jwt 로그아웃 처리
  const logout_url = "/user/api/logout";

  function logout() {
    axios({
      url: logout_url,
      method: "POST",
    }).then((res) => {
      if (res.data.msg == "로그아웃") {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        Cookies.remove("userkey");
        Cookies.remove("next-auth.session-token");
        Cookies.remove("next-auth.csrf-token");

        signOut({ callbackUrl: "/" });
      }
    });
  }

  //jwt 로그인 처리
  const login_url = "/user/api/login";
  const [user, setUser] = useState({});

  //token 저장
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  function jwtLogin() {
    axios({
      url: login_url,
      method: "post",
      params: user,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.data.cnt === 1) {
        window.location.reload(); //현재 경로 재로드
      } else {
        alert(res.data.msg);
      }
    });
  }

  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (token) {
      setAccessToken(token); // 토큰이 있으면 로그인 상태로 변경
    } else {
      setAccessToken(null); // 토큰이 없으면 로그아웃 상태로 설정
    }
  }, [session]); // session이 변경될 때만 실행

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
    //기존거 복사해서 값을 넣어주는애 name이 키로들어가고 value가 값으로 들어감
  };

  //kakaoLogin
  const kakao_login = async (e) => {
    e.preventDefault(); //다른 기본동작을 실행하지 않도록함
    //nextAuth 콜백 함수 인자로 카카오주고 카카오 프로바이더로 이동.
    signIn("kakao", { callbackUrl: "/user/kakao/login" });
  };
  const [chk, setChk] = useState(true);
  useEffect(() => {
    if (chk) {
      if (session && session.user) {
        goController(); // session.user.name이 준비된 후 호출
      }
    }
  }, [session]);

  const kakao_url = "/user/kakao/login";
  // kakao controller에 데이터 전달
  const goController = async () => {
    if (session && session.user) {
      axios({
        url: kakao_url,
        method: "post",
        params: {
          nickname: session.user.name,
          email: session.user.email,
        },
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.data.cnt === 1) {
          alert("로그인 성공!");
        } else {
          alert("로그인에 실패하였습니다.");
        }
      });
      setChk(false);
    }
  };
  // 로그인 모달 부분
  const [open, setOpen] = useState(false);
  // 로그인 모달 열기
  const handleClose = () => {
    setOpen(false);
  };
  // 로그인 모달 닫기
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="_1a7kymo0"></div>
      <div className="_1a7kymo3 _1h4pbgya14 _1h4pbgy98o _1h4pbgy8jc _1h4pbgy9ug _1h4pbgy9xc _1h4pbgy1u0 _1h4pbgya2w">
        <div className="_6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462">
          <div className="_1a7kymo5 _1h4pbgy7e8 _1h4pbgy7ej _1h4pbgy7iw _1h4pbgy7j7 _1h4pbgy1u0 _1h4pbgya0o _1h4pbgy98o _1h4pbgy9ug _1h4pbgy9xs">
            <div className="_1h4pbgy9ug _1h4pbgy9wo _1h4pbgy8rk">
              <Link
                data-gtm="gnb_logo"
                href="/"
                className="_1h4pbgy9ug _1h4pbgy9wo _1h4pbgy9yw"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="95"
                  fill="none"
                  viewBox="0 0 300 114"
                >
                  <path
                    fill="#FF6F0F"
                    d="M149.339 86.474v-4.89l-.3-.115c-2.755 3.25-6.825 6-12.335 6-11.525 0-20.545-9.315-20.545-21.825s8.85-21.79 20.375-21.79a16.16 16.16 0 0 1 12.5 6l.3-.11v-4.92h10.965v41.65zm-21.84-20.84c0 6.365 4.715 11.93 11.29 11.93 6.41 0 11.085-5.35 11.085-11.93s-4.675-11.725-11.085-11.725c-6.6 0-11.29 5.36-11.29 11.725M272.468 65.634c0 12.555-9.555 21.825-22.54 21.825s-22.43-9.27-22.43-21.825 9.5-21.79 22.455-21.79 22.515 9.235 22.515 21.79m-33.5 0c0 6.94 4.66 12.385 11 12.385s11-5.445 11-12.385-4.66-12.365-11-12.365-11.02 5.425-11.02 12.365zM286.677 54.309v17.805c0 3.835 2.76 5.325 5.235 5.54a13.34 13.34 0 0 0 7.825-1.58l.26 9.63a24.5 24.5 0 0 1-10.47 1.735c-8.88-.5-14.105-4.725-14.105-14.07V37.054l11.255-3.685v11.455h12.105v9.5zM194.334 44.629l-.245 11.645a17.35 17.35 0 0 0-7.961-1.275c-4.45.355-8.365 2.265-8.365 8.455v23.02h-11.33v-41.65h11v6.59l.33.08c1.785-3.56 5.085-7 10.91-7.605 1.919-.208 3.86.046 5.661.74M226.913 44.629l-.245 11.645a17.4 17.4 0 0 0-7.965-1.275c-4.445.355-8.36 2.265-8.36 8.455v23.02h-11.345v-41.65h11v6.59l.33.08c1.785-3.56 5.09-7 10.915-7.605a12.14 12.14 0 0 1 5.67.74"
                  ></path>
                  <path
                    fill="#FF6F0F"
                    d="M105.584 86.474h14.766L100.964 63.72c6.66-3.37 14.116-10.795 16.856-18.91h-13.416c-2.64 6.545-7.595 12.445-14.5 14.5l-.2-.13V27.474H78.5v59h11.2v-18.95h.29zM29.24 36.869C13.09 36.869 0 49.684 0 65.833c0 22.325 29.32 34.175 29.24 34.14S58.5 88.158 58.5 65.833c0-16.15-13.115-28.964-29.26-28.964m0 40.684a11.07 11.07 0 1 1-.01-22.138 11.07 11.07 0 0 1 .01 22.138"
                  ></path>
                  <path
                    fill="#00A05B"
                    d="M35.82-.026c-6.825 0-11.575 4.77-12.32 10.38-9.1-2.5-16.23 4.385-16.23 12 0 5.82 4 10.525 9.335 12.05 4.3 1.225 12.045.315 12.045.315-.04-1.885 1.69-3.95 4.365-5.83 7.595-5.345 13.54-7.86 14.46-15.15.96-7.605-4.7-13.765-11.655-13.765"
                  ></path>
                </svg>
              </Link>
            </div>
            <div>
              <nav className="_1h4pbgy9u0 _1h4pbgy9uj _1h4pbgy9wo">
                <HeaderItem />
                {accessToken == null ? (
                  <button
                    onClick={handleOpen}
                    id="show_login"
                    style={{ backgroundColor: "#ff6f0f24", color: "#ff6f0f" }}
                    className="seed-box-button"
                    data-scope="button"
                    data-part="root"
                    type="button"
                    data-gtm="gnb_app_download"
                    data-size="xsmall"
                    data-variant="primaryLow"
                  >
                    <span className="seed-semantic-typography-label4-bold">
                      <font>로그인</font>
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={logout} // 로그아웃 버튼에는 logout 함수 연결
                    id="logout"
                    style={{ backgroundColor: "#ff6f0f24", color: "#ff6f0f" }}
                    className="seed-box-button"
                    data-scope="button"
                    data-part="root"
                    type="button"
                    data-gtm="gnb_app_download"
                    data-size="xsmall"
                    data-variant="primaryLow"
                  >
                    <span className="seed-semantic-typography-label4-bold">
                      <font>로그아웃</font>
                    </span>
                  </button>
                )}
              </nav>
            </div>
          </div>
          <div
            className="_1a7kymoh _1h4pbgy89k _1h4pbgy8eg _1h4pbgya0o _1h4pbgy9ug _1h4pbgy8jc _1a7kymog"
            data-expanded="true"
          >
            <div className="_1h4pbgy9u0 _1h4pbgy9ub _1h4pbgy8bk">
              <button
                onClick={() => setLocationOpen(true)}
                className="lrcwe20 _1h4pbgy8g _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy17c _1h4pbgy7ag _1h4pbgy9yw lrcwe22 _1h4pbgy7nk _1h4pbgy7s8 _1h4pbgy780"
                data-gtm="gnb_location"
              >
                <span
                  style={{ display: "inline-flex" }}
                  className="_1h4pbgy8gg _1h4pbgy8qo _1h4pbgy8ao"
                  data-seed-icon="icon_location_fill"
                  data-seed-icon-version="0.2.1"
                >
                  <svg
                    id="icon_location_fill"
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
                        d="M2.19995 10.5798C2.19995 5.16739 6.58756 0.779785 12 0.779785C17.4123 0.779785 21.8 5.16739 21.8 10.5798C21.8 13.9799 19.5985 17.1391 17.4217 19.3764C16.3174 20.5113 15.1817 21.4481 14.2536 22.1055C13.7903 22.4337 13.3694 22.6988 13.0225 22.8857C12.8498 22.9788 12.6843 23.0584 12.5339 23.1169C12.4059 23.1666 12.2081 23.2342 12 23.2342C11.7918 23.2342 11.594 23.1666 11.466 23.1169C11.3156 23.0584 11.1501 22.9788 10.9774 22.8857C10.6305 22.6988 10.2096 22.4337 9.74627 22.1055C8.81823 21.4481 7.68247 20.5113 6.57819 19.3764C4.40138 17.1391 2.19995 13.9799 2.19995 10.5798ZM8.38442 10.1041C8.38442 8.10725 10.0031 6.48852 12 6.48852C13.9968 6.48852 15.6155 8.10725 15.6155 10.1041C15.6155 12.1009 13.9968 13.7196 12 13.7196C10.0031 13.7196 8.38442 12.1009 8.38442 10.1041Z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </span>
                <font>
                  <font>
                    {region2 != null && region2 != "undefined"
                      ? region2
                      : "동네설정"}
                  </font>
                </font>
                <span
                  style={{ display: "inline-flex" }}
                  className="_1h4pbgy8g8 _1h4pbgy8qg _1h4pbgy85s"
                  data-seed-icon="icon_expand_more_fill"
                  data-seed-icon-version="0.2.1"
                >
                  <svg
                    id="icon_expand_more_fill"
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
                        d="M2.79289 7.29289C3.18342 6.90237 3.81658 6.90237 4.20711 7.29289L12 15.0858L19.7929 7.29289C20.1834 6.90237 20.8166 6.90237 21.2071 7.29289C21.5976 7.68342 21.5976 8.31658 21.2071 8.70711L12.7071 17.2071C12.3166 17.5976 11.6834 17.5976 11.2929 17.2071L2.79289 8.70711C2.40237 8.31658 2.40237 7.68342 2.79289 7.29289Z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </span>
              </button>
            </div>
            <div className="_1h4pbgy9w0 _1h4pbgy8jc _1h4pbgya2z">
              <form action="/us/buy-sell/all/">
                <div className="_1h4pbgya0o">
                  <input
                    className="_1wcdkwr0 _1wcdkwr1"
                    type="search"
                    aria-label="검색 입력"
                    placeholder="무엇을 찾고 계신가요?"
                    name="search"
                  />
                  <button
                    type="submit"
                    aria-label="찾다"
                    className="_1wcdkwr5 _1h4pbgy7cg _1h4pbgy7h4 _1h4pbgy7ls _1h4pbgy7qg _1h4pbgya0w _1h4pbgy9dc _1h4pbgy9ps _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy9xc _1h4pbgy1qe _1h4pbgy94o _1h4pbgy9yw"
                  >
                    <span
                      style={{ display: "inline-flex" }}
                      className="_1h4pbgy8g _1h4pbgy8gg _1h4pbgy8qo"
                      data-seed-icon="icon_search_fill"
                      data-seed-icon-version="0.2.1"
                    >
                      <svg
                        id="icon_search_fill"
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
                            d="M10.5 2C5.80558 2 2 5.80558 2 10.5C2 15.1944 5.80558 19 10.5 19C12.4869 19 14.3145 18.3183 15.7618 17.176L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L17.176 15.7618C18.3183 14.3145 19 12.4869 19 10.5C19 5.80558 15.1944 2 10.5 2ZM4 10.5C4 6.91015 6.91015 4 10.5 4C14.0899 4 17 6.91015 17 10.5C17 14.0899 14.0899 17 10.5 17C6.91015 17 4 14.0899 4 10.5Z"
                            fill="currentColor"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
              <div className="_1a7kymoo _9rcp1w1 _1h4pbgya0o">
                <div className="_1n1zga84 _1n1zga80 _1h4pbgya0o">
                  <div className="_1n1zga85 _1h4pbgy9zk _1h4pbgy8jc">
                    <div className="_1a7kymoq _1h4pbgy7nk _1h4pbgy7o1 _1h4pbgy7oy _1h4pbgy7m3 _1h4pbgy7s8 _1h4pbgy7sp _1h4pbgy7tm _1h4pbgy7qr _1h4pbgy7e8 _1h4pbgy7e3 _1h4pbgy7iw _1h4pbgy7ir _1h4pbgy9uw _1h4pbgy9wo _1h4pbgya54 _1a7kymop _588sy4ph">
                      <div className="_1h4pbgy9u0 _1h4pbgy9ub _1h4pbgy76o _1h4pbgy8bk">
                        <font>인기 검색어</font>
                      </div>
                      <ul className="_1h4pbgy9ug _1h4pbgy9wo">
                        <li className="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf">
                          <Link
                            data-gtm="gnb_popular_keyword"
                            className="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v"
                            href="/buy-sell/all/?in=manhattan-7426&amp;search=bike"
                          >
                            <font>
                              <font>자전거</font>
                            </font>
                          </Link>
                        </li>
                        <li className="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf">
                          <Link
                            data-gtm="gnb_popular_keyword"
                            className="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v"
                            href="/buy-sell/all/?in=manhattan-7426&amp;search=couch"
                          >
                            <font>
                              <font>침상</font>
                            </font>
                          </Link>
                        </li>
                        <li className="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf">
                          <Link
                            data-gtm="gnb_popular_keyword"
                            className="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v"
                            href="/buy-sell/all/?in=manhattan-7426&amp;search=sofa"
                          >
                            <font>
                              <font>소파</font>
                            </font>
                          </Link>
                        </li>
                        <li className="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf">
                          <Link
                            data-gtm="gnb_popular_keyword"
                            className="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v"
                            href="/buy-sell/all/?in=manhattan-7426&amp;search=dining+table"
                          >
                            <font>
                              <font>식탁</font>
                            </font>
                          </Link>
                        </li>
                        <li className="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf">
                          <Link
                            data-gtm="gnb_popular_keyword"
                            className="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v"
                            href="/buy-sell/all/?in=manhattan-7426&amp;search=tv"
                          >
                            <font>
                              <font>TV</font>
                            </font>
                          </Link>
                        </li>
                        <li className="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf">
                          <Link
                            data-gtm="gnb_popular_keyword"
                            className="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v"
                            href="/buy-sell/all/?in=manhattan-7426&amp;search=mirror"
                          >
                            <font>
                              <font>거울</font>
                            </font>
                          </Link>
                        </li>
                        <li className="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf">
                          <Link
                            data-gtm="gnb_popular_keyword"
                            className="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v"
                            href="/buy-sell/all/?in=manhattan-7426&amp;search=portable+air+conditioner"
                          >
                            <font>
                              <font>휴대용 에어컨</font>
                            </font>
                          </Link>
                        </li>
                        <li className="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf">
                          <Link
                            data-gtm="gnb_popular_keyword"
                            className="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v"
                            href="/buy-sell/all/?in=manhattan-7426&amp;search=desk"
                          >
                            <font>
                              <font>책상</font>
                            </font>
                          </Link>
                        </li>
                        <li className="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf">
                          <Link
                            data-gtm="gnb_popular_keyword"
                            className="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v"
                            href="/buy-sell/all/?in=manhattan-7426&amp;search=iphone"
                          >
                            <font>
                              <font>아이폰</font>
                            </font>
                          </Link>
                        </li>
                        <li className="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf">
                          <Link
                            data-gtm="gnb_popular_keyword"
                            className="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v"
                            href="/buy-sell/all/?in=manhattan-7426&amp;search=stroller"
                          >
                            <font>
                              <font>유모차</font>
                            </font>
                          </Link>
                        </li>
                        <li className="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf">
                          <Link
                            data-gtm="gnb_popular_keyword"
                            className="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v"
                            href="/buy-sell/all/?in=manhattan-7426&amp;search=bed"
                          >
                            <font>
                              <font>침대</font>
                            </font>
                          </Link>
                        </li>
                        <li className="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf">
                          <Link
                            data-gtm="gnb_popular_keyword"
                            className="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v"
                            href="/buy-sell/all/?in=manhattan-7426&amp;search=ikea"
                          >
                            <font>
                              <font>이케아</font>
                            </font>
                          </Link>
                        </li>
                        <li className="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf">
                          <Link
                            data-gtm="gnb_popular_keyword"
                            className="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v"
                            href="/buy-sell/all/?in=manhattan-7426&amp;search=tv+stand"
                          >
                            <font>
                              <font>TV 스탠드</font>
                            </font>
                          </Link>
                        </li>
                        <li className="_1a7kymor _1h4pbgy8b4 _1h4pbgy8bf">
                          <Link
                            data-gtm="gnb_popular_keyword"
                            className="_1a7kymos _1h4pbgy7nc _1h4pbgy7lv _1h4pbgy7s0 _1h4pbgy7qj _1h4pbgy8g _1h4pbgy7v _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy76o _1h4pbgy8rk _1h4pbgy8qr _1h4pbgy9yw _1h4pbgy67s _1h4pbgy76b _1h4pbgy95k _1h4pbgy93v"
                            href="/buy-sell/all/?in=manhattan-7426&amp;search=cars+for+sale"
                          >
                            <font>
                              <font>판매용 자동차</font>
                            </font>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="_1n1zga86 _1h4pbgya0w _1h4pbgy98o _1h4pbgy8tk _1h4pbgy8gg _1h4pbgy9u0 _1h4pbgy9ub _1n1zga87 _1n1zga89"></div>
                  <div className="_1n1zga86 _1h4pbgya0w _1h4pbgy98o _1h4pbgy8tk _1h4pbgy8gg _1h4pbgy9u0 _1h4pbgy9ub _1n1zga88"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 로그인 모달 */}
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());

              // 여기에 로그인 처리를 위한 로직을 추가
              // 예: axios를 사용한 로그인 요청 보내기

              handleClose();
            },
          }}
        >
          <DialogTitle
            style={{
              textAlign: "center",
              padding: "16px 24px",
              position: "relative",
            }}
          >
            {/* X 버튼 추가 */}
            <Button
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "7px",
                right: "7px",
                minWidth: "25px",
                minHeight: "25px",
                borderRadius: "50%",
                backgroundColor: "#FF6F0F",
                color: "#fff",
                fontSize: "12px",
                fontWeight: "bold",
                lineHeight: "16px",
                padding: "0",
              }}
            >
              &times;
            </Button>

            <img
              src="/img/karrot.png"
              alt="당근마켓 로고"
              style={{ marginTop: "20px", width: "100px" }}
            />
            <div
              style={{ fontWeight: "bold", fontSize: "25px", color: "#FF6F0F" }}
            >
              로그인
            </div>
          </DialogTitle>
          <DialogContent style={{ paddingBottom: "0px" }}>
            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                kakao_login(e); // 카카오 로그인 함수 호출
              }}
              style={{
                backgroundColor: "#E0E0E1",
                color: "#3C1E1E",
                width: "100%",
                padding: "10px 0",
                marginBottom: "12px",
              }} // 회색 카카오톡 버튼
            >
              <img
                src="/img/kakao.png"
                alt="카카오톡 로그인"
                style={{ marginRight: "8px", height: "24px" }}
              />
              카카오톡으로 로그인
            </Button>
            <div style={{ textAlign: "center", margin: "12px 0" }}>
              <hr
                style={{
                  border: "none",
                  borderTop: "1px solid #ccc",
                  margin: "0",
                }}
              />
              <span
                style={{
                  background: "#fff",
                  padding: "0 10px",
                  position: "relative",
                  top: "-0.6em",
                  color: "#999",
                  fontSize: "12px",
                }}
              >
                or
              </span>
            </div>
            <FormControl
              fullWidth
              margin="dense"
              variant="standard"
              style={{ marginBottom: "4px" }}
            >
              <TextField
                autoFocus
                required
                margin="dense"
                id="id"
                name="id"
                label="아이디"
                type="text"
                fullWidth
                size="small"
                onChange={handleChange}
                InputProps={{
                  style: {
                    outline: "none",
                    boxShadow: "none",
                  },
                  disableUnderline: true,
                }}
                onFocus={(e) => (e.target.style.border = "1px solid #FF6F0F")}
                onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
              />
            </FormControl>
            <FormControl
              fullWidth
              margin="dense"
              variant="standard"
              style={{ marginBottom: "4px" }}
            >
              <TextField
                required
                margin="dense"
                id="pw"
                name="pw"
                label="비밀번호"
                type="password"
                fullWidth
                size="small"
                onChange={handleChange}
                InputProps={{
                  style: {
                    outline: "none",
                    boxShadow: "none",
                  },
                  disableUnderline: true,
                }}
              />
            </FormControl>
          </DialogContent>
          <DialogActions
            style={{ justifyContent: "center", paddingTop: "12px" }}
          >
            <Button
              type="button"
              onClick={jwtLogin}
              style={{
                backgroundColor: "#FF6F0F",
                color: "#fff",
                width: "80%",
                padding: "10px 0",
              }}
            >
              로그인
            </Button>
          </DialogActions>
          <div style={{ textAlign: "center", paddingBottom: "12px" }}>
            <p style={{ fontSize: "14px", color: "#999" }}>
              가입된 계정이 없으신가요?
              <Link
                href="/SignUp"
                onClick={handleSignUp}
                style={{
                  color: "#FF6F0F",
                  textDecoration: "none",
                  marginLeft: "5px",
                }}
              >
                회원가입
              </Link>
            </p>
          </div>
        </Dialog>
      </React.Fragment>

      {/* 위치설정 */}
      <React.Fragment>
        <Dialog
          open={locationOpen}
          onClose={locationClose}
          PaperProps={
            {
              //component: "form",
              //onSubmit: locationHandleSubmit,
            }
          }
        >
          <DialogTitle
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            동네 설정
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={locationClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <FormControl fullWidth margin="dense">
              <Paper
                component="form"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="구명으로 검색 (ex. 서초구)"
                  onChange={(e) => setTitle(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault(); // 기본 Enter 동작 방지
                      //searchNotice(); // 검색 함수 호출
                    }
                  }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                  //onClick={searchNotice}
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </FormControl>
            <FormControl fullWidth margin="dense">
              <Button variant="outlined" startIcon={<MyLocationIcon />}>
                현재위치로 찾기
              </Button>
            </FormControl>
            <FormControl fullWidth margin="dense">
              <List
                sx={{
                  overflow: "auto",
                  maxHeight: 300,
                }}
              >
                {[0, 1, 2, 3, 4].map((sectionId, i) => (
                  <div key={`item-${sectionId}-hihi`}>
                    <ListItem>
                      <ListItemText primary="hihi" />
                    </ListItem>
                    <ListDivider inset="gutter" />
                  </div>
                ))}
              </List>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button type="submit">선택 완료</Button>
            <Button onClick={locationClose}>취소</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
      {/*
        <div className="_1sapi5fe _1h4pbgya00 _1h4pbgy9w0 _1h4pbgy8jc _1h4pbgy8tk _1h4pbgya0o">
          <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy8yo">
            <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgya00">
              <div className="_1h4pbgy7nk _1h4pbgy7s8 _1h4pbgy7ds _1h4pbgy7ig">
                <span className="_1h4pbgy79s _1h4pbgy7ag _1h4pbgy7c8">
                  근처 동네
                </span>
              </div>
              <ul
                id="location_list"
                className="_1h4pbgy7nk _1h4pbgy7s8 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy7ko _1h4pbgy8og"
              >
                <li className="_1h4pbgy3q8">
                  <a
                    className="_1h4pbgy7e0 _1h4pbgy7io _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy780 _1h4pbgy7ao _1h4pbgy7c8 _1h4pbgy8jc"
                    href="/about/?in=manhattan-7426"
                  >
                    Manhattan
                  </a>
                </li>
                <li className="_1h4pbgy3q8">
                  <a
                    className="_1h4pbgy7e0 _1h4pbgy7io _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy780 _1h4pbgy7ao _1h4pbgy7c8 _1h4pbgy8jc"
                    href="/about/?in=bronx-7488"
                  >
                    Bronx
                  </a>
                </li>
                <li className="_1h4pbgy3q8">
                  <a
                    className="_1h4pbgy7e0 _1h4pbgy7io _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy780 _1h4pbgy7ao _1h4pbgy7c8 _1h4pbgy8jc"
                    href="/about/?in=queens-7490"
                  >
                    Queens
                  </a>
                </li>
                <li className="_1h4pbgy3q8">
                  <a
                    className="_1h4pbgy7e0 _1h4pbgy7io _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy780 _1h4pbgy7ao _1h4pbgy7c8 _1h4pbgy8jc"
                    href="/about/?in=brooklyn-7498"
                  >
                    Brooklyn
                  </a>
                </li>
                <li className="_1h4pbgy3q8">
                  <a
                    className="_1h4pbgy7e0 _1h4pbgy7io _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy780 _1h4pbgy7ao _1h4pbgy7c8 _1h4pbgy8jc"
                    href="/about/?in=hudson-county-7722"
                  >
                    Hudson County
                  </a>
                </li>
                <li className="_1h4pbgy3q8">
                  <a
                    className="_1h4pbgy7e0 _1h4pbgy7io _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy780 _1h4pbgy7ao _1h4pbgy7c8 _1h4pbgy8jc"
                    href="/about/?in=essex-county-14529"
                  >
                    Essex County
                  </a>
                </li>
                <li className="_1h4pbgy3q8">
                  <a
                    className="_1h4pbgy7e0 _1h4pbgy7io _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy780 _1h4pbgy7ao _1h4pbgy7c8 _1h4pbgy8jc"
                    href="/about/?in=bergen-county-14538"
                  >
                    Bergen County
                  </a>
                </li>
                <li className="_1h4pbgy3q8">
                  <a
                    className="_1h4pbgy7e0 _1h4pbgy7io _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy780 _1h4pbgy7ao _1h4pbgy7c8 _1h4pbgy8jc"
                    href="/about/?in=cook-county-15668"
                  >
                    Cook County
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
