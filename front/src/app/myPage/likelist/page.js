'use client'

import MyPageSide from "@/component/user/layout/MyPageSide";
import React, { useEffect, useState } from "react";
import "/public/css/myPage.css";
import "/public/css/likelist.css";
import "/public/css/paging.css";
import Link from "next/link";
import axios from "axios";
import LikePost from "@/component/user/myPage/likelist/LikePost";
import LikeCategory from "@/component/user/myPage/likelist/LikeCategory";
import LikeKeyword from "@/component/user/myPage/likelist/LikeKeyword";
// import { useSearchParams } from "next/navigation";

export default function Page() {

  // const params = useSearchParams();
  // const userkey = params.get('userkey');

  const [likeWhat, setLikeWhat] = useState('post');
  const [likeList, setLikeList] = useState([]);
  const [whatNow, setWhatNow] = useState('post');
  const [totalCount, setTotalCount] = useState(0);
  const [display, setDisplay] = useState('게시글');
  const [page, setPage] = useState({});

  const API_URL = '/user/api/likeLists';
  const DEL_URL = '/adpost/delLike';

  function changePage(pNum) { 
    getLikeList(likeWhat,pNum);
  }

  function getLikeList(likeWhat,cPage){
      axios({
        url: API_URL,
        method: "post",
        params: {
          "likewhat": likeWhat,
          "userkey": 1,
          "cPage": cPage,
        },
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        setLikeList(res.data.likeList);
        setWhatNow(likeWhat);
        setPage(res.data.page);
        setTotalCount(res.data.totalCount);
      });
  }

  function getDelLike(likeWhat,likeKey){
    alert(`likeWhat: ${likeWhat} || likeKey: ${likeKey}`);
      axios({
        url: DEL_URL,
        method: "post",
        params: {
          "likeWhat": likeWhat,
          "likeKey": likeKey,
        },
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if(res.data.result_delete > 0){
          alert("삭제 성공!");
          getLikeList(likeWhat,page.nowPage);
        } else{
          alert("오류가 발생했습니다");
        }
      });
  }

  useEffect(()=>{
    getLikeList(likeWhat);
    switch(likeWhat){
      case "post":
        setDisplay("게시글");
        break;
      case "category":
        setDisplay("카테고리");
        break;
      case "keyword":
        setDisplay("키워드");
        break;
    }
    
  },[likeWhat]);

  
   return(
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
                  { likeList.length == 0 ?
                  /* <!-- 없을 경우 --> */
                  <div data-v-3d362ce8="" className="content">
                    <div
                      data-v-24868902=""
                      data-v-eff62a72=""
                      className="empty_area"
                    >
                      <p data-v-24868902="" className="desc">
                        관심 {display}이(가) 없습니다.
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
                  : /* 있을 경우 */
                  <div data-v-3d362ce8="" className="my_interest">
                    <div data-v-3d362ce8="" className="content-header">
                      <div data-v-3d362ce8="" className="total-rows">
                        전체 {totalCount}
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
                      { whatNow == 'post' ? <LikePost likelist={likeList} getDelLike={getDelLike}/> : whatNow == 'category' ? <LikeCategory likelist={likeList} getDelLike={getDelLike}/>: <LikeKeyword likelist={likeList} getDelLike={getDelLike}/>}
                    </ul>
                    {/* 페이징 시작*/}
                    <div className="mPaginate">
                      {page.startPage > 1 && (
                        <Link href="#" onClick={() => changePage(page.startPage - page.pagePerBlock)} className="prev">
                          이전 {page.pagePerBlock}페이지
                        </Link>
                      )}
                      <ol>
                        {Array.from({ length: page.endPage - page.startPage + 1 }, (_, i) => page.startPage + i).map((pNum) => (
                          <li key={pNum}>
                            {page.nowPage == pNum ? (
                              <strong title="현재페이지">{pNum}</strong>
                            ) : (
                              <Link href="#" onClick={() => changePage(pNum)}>{pNum}</Link>
                            )}
                          </li>
                        ))}
                      </ol>
                      {page.endPage < page.totalPage && (
                        <Link href="#" onClick={() => changePage(page.endPage + 1)} className="next">
                          다음 {page.pagePerBlock}페이지
                        </Link>
                      )}
                    </div>
                    {/* 페이징 끝*/}
                  </div>
                }
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
