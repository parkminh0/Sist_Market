'use client'
import MyPageSide from "@/component/user/layout/MyPageSide";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "/public/css/myPage.css";
import "/public/css/buylist.css";
import "/public/css/paging.css";
import axios from "axios";
import BuyList from "@/component/user/myPage/buylist/BuyList";

export default function Page() {

  const [buylist, setBuylist] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalRecord, setTotalRecord] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [page, setPage] = useState({});

  const API_URL = '/user/api/buyList';

  function changePage(pNum) { 
    getBuyList(pNum);
  }

  function getBuyList(cPage){
    axios({
      url: API_URL,
      method: 'post',
      params: {
          userkey: 1,
          cPage: cPage,
          start_date: startDate,
          end_date: endDate,
      }
    }).then((res) => {
        console.log(res.data);
        setBuylist(res.data.buylist);
        setPage(res.data.page);
        if(res.data.totalCount > 999){
          setTotalCount(1000);
        } else {
          setTotalCount(res.data.totalCount);
        }
        if(res.data.totalRecord > 999){
          setTotalRecord(1000);
        } else {
          setTotalRecord(res.data.totalRecord);
        }
        
      });
  }

  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

  function dateButton(months){
    let end_day = new Date();
    let start_day = new Date();
    start_day.setMonth(end_day.getMonth()-months);
    setEndDate(formatDate(end_day));
    setStartDate(formatDate(start_day));
  }

  useEffect(()=>{
    getBuyList(1);
  },[]);


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
                          {totalCount > 999 ? '999+' : totalCount}
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
                          onClick={()=>{dateButton(2)}}
                        >
                          최근 2개월
                        </Link>
                      </li>
                      <li data-v-77765e40="" className="month_item">
                        <Link
                          data-v-77765e40=""
                          href="#"
                          className="month_link"
                          onClick={()=>{dateButton(4)}}
                        >
                          4개월
                        </Link>
                      </li>
                      <li data-v-77765e40="" className="month_item">
                        <Link
                          data-v-77765e40=""
                          href="#"
                          className="month_link"
                          onClick={()=>{dateButton(6)}}
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
                    <div style={{ float: "left" }}>
                        <span
                          className="gLabel"
                          style={{ float: "left", marginLeft: "5px" }}
                        >
                          <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            className="fText gDate"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                          />
                          <span className="ec-mode-common-period-area">~</span>
                          <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            className="fText gDate"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                          />
                        </span>
                      </div>
                    <div data-v-14e5ae1c="" className="period_btn_box">
                      <button
                        data-v-14e5ae1c=""
                        className="btn_search is_active"
                        onClick={()=>getBuyList(1)}
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
                      <div data-v-eff62a72="" className="btn_filter">
                        {" "}
                        전체
                          <div style={{display:"inline-block", textAlign:'center', paddingLeft:10}}>
                            {totalRecord > 999 ? '999+' : totalRecord}
                          </div>
                          <div style={{display:"inline-block", position:'absolute', right:15}}>건</div>
                      </div>
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
                  { buylist ?
                  <BuyList buylist={buylist}/>
                  : 
                  <div
                  data-v-24868902=""
                  data-v-eff62a72=""
                  className="empty_area"
                  >
                    {/* <!-- 없을 경우 --> */}
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
                    {/* <!--  --> */}
                  </div>
                }
                {/* 페이징 시작*/}
              <div className="mPaginate">
                  {page.startPage > 1 && (
                    <Link href="#" onClick={() => {changePage(page.startPage - page.pagePerBlock)}} className="prev">
                      이전 {page.pagePerBlock}페이지
                    </Link>
                  )}
                  <ol>
                    {Array.from({ length: page.endPage - page.startPage + 1 }, (_, i) => page.startPage + i).map((pNum) => (
                      <li key={pNum}>
                        {page.nowPage == pNum ? (
                          <strong title="현재페이지">{pNum}</strong>
                        ) : (
                          <Link href="#" onClick={() => {changePage(pNum)}}>{pNum}</Link>
                        )}
                      </li>
                    ))}
                  </ol>
                  {page.endPage < page.totalPage && (
                    <Link href="#" onClick={() => {changePage(page.endPage + 1)}} className="next">
                      다음 {page.pagePerBlock}페이지
                    </Link>
                  )}
                </div>
                {/* 페이징 끝*/}
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
