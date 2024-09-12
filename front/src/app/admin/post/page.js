"use client";

import React, { useEffect, useState } from "react";
import "/public/css/admin/post.css";
import axios from "axios";
import ImageNotSupportedRoundedIcon from "@mui/icons-material/ImageNotSupportedRounded";

export default function Page() {
  const [list, setList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [filteredList, setFilteredList] = useState([]); // 필터링된 게시글 리스트

  // 게시판 현황 카운트
  const API_URL = "/adpost/postcount";
  const [all, set_all_posts] = useState(0); // 전체 게시글 수
  const [tem_save, set_tem_save_posts] = useState(0); // 임시 저장 게시글 수
  const [sale, set_sale_posts] = useState(0); // 판매중 게시글 수
  const [saleing, set_saleing_posts] = useState(0); // 예약중(거래중) 게시글 수
  const [saled, set_saled_posts] = useState(0); // 거래완료 게시글 수
  const [hide, set_hide_posts] = useState(0); // 숨김 게시글 수

  // 상태 관리 추가
  const [postStatus, setPostStatus] = useState("all");
  const [method, setMethod] = useState("0");
  const [canBargain, setCanBargain] = useState("0");

  const baseUrl = "https://dtxw8q4qct0d4.cloudfront.net"; // 서버의 기본 URL

  function searchpost() {
    let frm = document.getElementById("frmSearch");
    let formData = new FormData(frm);

    // 검색 조건을 URLSearchParams로 변환
    let searchParams = Object.fromEntries(new URLSearchParams(formData));

    // 검색 조건을 처리하여 서버에 데이터를 요청
    axios({
      url: "/adpost/searchpost", // 실제 검색 API
      method: "post",
      data: JSON.stringify(searchParams), // JSON 문자열로 변환
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.data); // 서버 응답 확인
        setList(res.data.post_list); // 데이터 업데이트
      })
      .catch((error) => {
        console.error("There was an error with the search request:", error);
      });
  }

  // 게시글 현황
  function getCount() {
    axios
      .get(API_URL)
      .then((response) => {
        // 받아온 데이터를 각 상태에 맞게 설정
        const data = response.data.pcvo;
        set_all_posts(data.all_posts); // 전체 게시글 수
        set_tem_save_posts(data.tem_save_posts); // 임시 저장 게시글 수
        set_sale_posts(data.sale_posts); // 판매중 게시글 수
        set_saleing_posts(data.saleing_posts); // 예약중(거래중) 게시글 수
        set_saled_posts(data.saled_posts); // 거래완료 게시글 수
        set_hide_posts(data.hide_posts); // 숨김 게시글 수
      })
      .catch((error) => {
        console.error("Error fetching post counts:", error);
      });
  }

  function callData() {
    axios.get("/category/all").then((response) => {
      setCategoryList(response.data.category_list);
    });
  }

  useEffect(() => {
    getCount();
    callData();
    // fetchPostList();
  }, []);

  return (
    <>
      <div className="MuiStack-root css-tfkmr0">
        <div className="MuiGrid-root MuiGrid-container css-v3z1wi">
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-md-6 css-196gsvj">
            <div className="MuiStack-root css-1x4jos1">
              <div className="MuiStack-root css-lmzl00">
                <span className="MuiTypography-root MuiTypography-base.h5B css-avyusg">
                  게시글 목록
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- 1 START --> */}
      <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-16 css-isbt42">
        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-he9kdn">
          <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-w0qttw">
            <div className="MuiCardHeader-root css-1cg1x61">
              <div className="MuiCardHeader-content css-11qjisw">
                <span className="MuiTypography-root MuiTypography-h5 MuiCardHeader-title css-ol1ja4">
                  <div className="MuiStack-root css-zl49q4">
                    <span className="MuiTypography-root MuiTypography-base.subTitle1B css-1iqlcnz">
                      게시글 현황
                    </span>
                  </div>
                </span>
              </div>
            </div>
            <div className="MuiCardContent-root css-1apxsmm">
              <div className="MuiGrid-root MuiGrid-container css-ci1ms7">
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true css-r3xjrv">
                  <div className="MuiStack-root css-1itc13n">
                    <div className="MuiStack-root css-1bew4d0">
                      <span className="MuiTypography-root MuiTypography-custom.subTitle3MH css-1y2y1ny">
                        전체 게시글
                      </span>
                    </div>
                    <div className="MuiStack-root css-1h3carr">
                      <a className="MuiTypography-root MuiTypography-custom.h6BH MuiLink-root MuiLink-underlineAlways css-sdodfs">
                        {all}
                      </a>
                      <span className="MuiTypography-root MuiTypography-custom.body1H css-grko2a">
                        개
                      </span>
                    </div>
                  </div>
                </div>
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true css-r3xjrv">
                  <div className="MuiStack-root css-1itc13n">
                    <div className="MuiStack-root css-1bew4d0">
                      <span className="MuiTypography-root MuiTypography-custom.subTitle3MH css-1y2y1ny">
                        임시 저장 게시글
                      </span>
                    </div>
                    <div className="MuiStack-root css-1h3carr">
                      <a className="MuiTypography-root MuiTypography-custom.h6BH MuiLink-root MuiLink-underlineAlways css-sdodfs">
                        {tem_save}
                      </a>
                      <span className="MuiTypography-root MuiTypography-custom.body1H css-grko2a">
                        개
                      </span>
                    </div>
                  </div>
                </div>

                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true css-r3xjrv">
                  <div className="MuiStack-root css-1ima9n7">
                    <div className="MuiStack-root css-1bew4d0">
                      <span className="MuiTypography-root MuiTypography-custom.subTitle3MH css-1y2y1ny">
                        판매중 게시물
                      </span>
                    </div>
                    <div className="MuiStack-root css-1h3carr">
                      <a className="MuiTypography-root MuiTypography-custom.h6BH MuiLink-root MuiLink-underlineAlways css-sdodfs">
                        {sale}
                      </a>
                      <span className="MuiTypography-root MuiTypography-custom.body1H css-grko2a">
                        개
                      </span>
                    </div>
                  </div>
                </div>

                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true css-r3xjrv">
                  <div className="MuiStack-root css-1ima9n7">
                    <div className="MuiStack-root css-1bew4d0">
                      <span className="MuiTypography-root MuiTypography-custom.subTitle3MH css-1y2y1ny">
                        예약중(거래중) 게시물
                      </span>
                    </div>
                    <div className="MuiStack-root css-1h3carr">
                      <a className="MuiTypography-root MuiTypography-custom.h6BH MuiLink-root MuiLink-underlineAlways css-sdodfs">
                        {saleing}
                      </a>
                      <span className="MuiTypography-root MuiTypography-custom.body1H css-grko2a">
                        개
                      </span>
                    </div>
                  </div>
                </div>
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true css-r3xjrv">
                  <div className="MuiStack-root css-1ima9n7">
                    <div className="MuiStack-root css-1bew4d0">
                      <span className="MuiTypography-root MuiTypography-custom.subTitle3MH css-1y2y1ny">
                        거래완료 게시물
                      </span>
                    </div>
                    <div className="MuiStack-root css-1h3carr">
                      <a className="MuiTypography-root MuiTypography-custom.h6BH MuiLink-root MuiLink-underlineAlways css-sdodfs">
                        {saled}
                      </a>
                      <span className="MuiTypography-root MuiTypography-custom.body1H css-grko2a">
                        개
                      </span>
                    </div>
                  </div>
                </div>
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true css-r3xjrv">
                  <div className="MuiStack-root css-1ima9n7">
                    <div className="MuiStack-root css-1bew4d0">
                      <span className="MuiTypography-root MuiTypography-custom.subTitle3MH css-1y2y1ny">
                        숨김 게시물
                      </span>
                    </div>
                    <div className="MuiStack-root css-1h3carr">
                      <a className="MuiTypography-root MuiTypography-custom.h6BH MuiLink-root MuiLink-underlineAlways css-13xs5pa">
                        {hide}
                      </a>
                      <span className="MuiTypography-root MuiTypography-custom.body1H css-grko2a">
                        개
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- 1 END -->
    <!-- 2 START --> */}
      <form id="frmSearch">
        <div
          className="optionArea"
          id="productSearchOptions"
          style={{ marginTop: "30px" }}
        >
          <div className="mOption" id="submitSearchBox">
            <table border="1" summary="게시글 검색 폼">
              <caption>게시글 검색</caption>
              <colgroup>
                <col style={{ width: "154px" }} />
                <col style={{ width: "auto" }} />
                <col style={{ width: "154px" }} />
                <col style={{ width: "auto" }} />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">검색분류</th>
                  <td colSpan="3">
                    <ul className="mForm typeVer" id="searchFormGeneral">
                      <li>
                        <select
                          className="fSelect eSearch"
                          id="searchCategory"
                          name="searchCategory"
                        >
                          <option value="title">게시글명</option>
                          <option value="postkey">게시글 번호</option>
                          <option value="hope_place">거래 장소명</option>
                          <option value="townkey">동네명</option>
                          <option value="userkey">회원번호</option>
                        </select>
                        <input
                          id="searchCategoryText"
                          type="text"
                          className="fText eSearchText"
                          style={{ width: "500px" }}
                          name="searchCategoryText"
                        />
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row">게시글분류</th>
                  <td colSpan="3">
                    <div className="gSingle">
                      <select
                        className="fSelect category eCategory"
                        id="categorykey"
                        name="categorykey"
                      >
                        <option>- 분류 선택 -</option>
                        {categoryList.map((cate, i) => (
                          <option value={cate.categorykey} key={i}>
                            {cate.categoryname}
                          </option>
                        ))}
                      </select>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">판매상태</th>
                  <td colSpan="3">
                    <label className="gSingleLabel">
                      <input
                        type="radio"
                        className="poststatus"
                        name="poststatus"
                        value="all"
                        checked={postStatus === "all"}
                        onChange={(e) => setPostStatus(e.target.value)}
                      />{" "}
                      전체
                    </label>
                    <label className="gSingleLabel">
                      <input
                        type="radio"
                        className="poststatus"
                        name="poststatus"
                        value="0"
                        checked={postStatus === "0"}
                        onChange={(e) => setPostStatus(e.target.value)}
                      />{" "}
                      임시 저장
                    </label>
                    <label className="gSingleLabel">
                      <input
                        type="radio"
                        className="poststatus"
                        name="poststatus"
                        value="1"
                        checked={postStatus === "1"}
                        onChange={(e) => setPostStatus(e.target.value)}
                      />{" "}
                      판매중
                    </label>
                    <label className="gSingleLabel">
                      <input
                        type="radio"
                        className="poststatus"
                        name="poststatus"
                        value="2"
                        checked={postStatus === "2"}
                        onChange={(e) => setPostStatus(e.target.value)}
                      />{" "}
                      예약중(거래중)
                    </label>
                    <label className="gSingleLabel">
                      <input
                        type="radio"
                        className="poststatus"
                        name="poststatus"
                        value="3"
                        checked={postStatus === "3"}
                        onChange={(e) => setPostStatus(e.target.value)}
                      />{" "}
                      거래완료
                    </label>
                    <label className="gSingleLabel">
                      <input
                        type="radio"
                        className="poststatus"
                        name="poststatus"
                        value="4"
                        checked={postStatus === "4"}
                        onChange={(e) => setPostStatus(e.target.value)}
                      />{" "}
                      숨김
                    </label>
                  </td>
                </tr>

                <tr>
                  <th scope="row">거래방식</th>
                  <td colSpan="3">
                    <label className="gSingleLabel">
                      <input
                        type="radio"
                        className="method"
                        name="method"
                        value="0"
                        checked={method === "0"}
                        onChange={(e) => setMethod(e.target.value)}
                      />{" "}
                      전체
                    </label>
                    <label className="gSingleLabel">
                      <input
                        type="radio"
                        className="method"
                        name="method"
                        value="1"
                        checked={method === "1"}
                        onChange={(e) => setMethod(e.target.value)}
                      />{" "}
                      직거래
                    </label>
                    <label className="gSingleLabel">
                      <input
                        type="radio"
                        className="method"
                        name="method"
                        value="2"
                        checked={method === "2"}
                        onChange={(e) => setMethod(e.target.value)}
                      />{" "}
                      택배거래
                    </label>
                  </td>
                </tr>

                <tr>
                  <th scope="row">상품 가격</th>
                  <td colSpan="3">
                    <ul className="price" id="price">
                      <li>
                        <select className="price" name="price" id="price">
                          <option value="price">등록 가격</option>
                          <option value="last_price">판매 가격</option>
                        </select>
                        <input
                          type="number"
                          className="minPrice"
                          style={{ width: "60px" }}
                          name="minPrice"
                          id="minPrice"
                        />{" "}
                        <span className="txtCode">KRW</span> ~
                        <input
                          type="number"
                          className="maxPrice"
                          style={{ width: "60px" }}
                          name="maxPrice"
                          id="maxPrice"
                        />{" "}
                        <span className="txtCode">KRW</span>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row">흥정가능여부</th>
                  <td colSpan="3">
                    <label className="canbargain">
                      <input
                        type="radio"
                        className="canbargain"
                        name="canbargain"
                        value="0"
                        checked={canBargain === "0"}
                        onChange={(e) => setCanBargain(e.target.value)}
                      />{" "}
                      전체
                    </label>
                    <label className="canbargain">
                      <input
                        type="radio"
                        className="canbargain"
                        name="canbargain"
                        value="1"
                        checked={canBargain === "1"}
                        onChange={(e) => setCanBargain(e.target.value)}
                      />{" "}
                      흥정가능
                    </label>
                    <label className="canbargain">
                      <input
                        type="radio"
                        className="canbargain"
                        name="canbargain"
                        value="2"
                        checked={canBargain === "2"}
                        onChange={(e) => setCanBargain(e.target.value)}
                      />{" "}
                      흥정 불가능
                    </label>
                  </td>
                </tr>
                <tr>
                  <th scope="row">일자 검색</th>
                  <td colSpan="3">
                    <ul className="price" id="price">
                      <li>
                        <select className="price" name="price" id="price">
                          <option value="price">게시글 생성일</option>
                          <option value="last_price">게시글 수정일</option>
                          <option value="last_price">게시글 삭제일</option>
                          <option value="last_price">끌어올리기 일자</option>
                          <option value="last_price">거래완료 일자</option>
                        </select>
                        <input
                          type="date"
                          id="create_dtm_a"
                          name="create_dtm_a"
                          className="create_dtm_a"
                          style={{ width: "100px" }}
                        />
                        <span className="ec-mode-common-period-area">~</span>
                        <input
                          type="date"
                          id="create_dtm_b"
                          name="create_dtm_b"
                          className="create_dtm_b"
                          style={{ width: "100px" }}
                        />
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mButton gCenter">
            <a
              href="#"
              onClick={searchpost}
              className="btnSearch"
              id="productSearchBtn"
            >
              <span>검색</span>
            </a>
            <a href="#" className="btnSearch reset" id="productSearchReset">
              <span>초기화</span>
            </a>
          </div>
          <input type="hidden" name="page" />
        </div>
      </form>

      {/* <!-- 2 END -->
<!-- 3 START --> */}
      <div className="section" id="QA_list2">
        <div className="mTitle">
          <h2>게시글 목록</h2>
        </div>
        <div className="mState">
          <div className="gLeft">
            <p className="total">
              [총 <strong>{list && list.length}</strong>개]
            </p>
          </div>
        </div>

        <div id="searchResult">
          <div
            className="mBoard typeList gScroll gCell"
            style={{ overflowX: "auto" }}
          >
            <table
              border="1"
              summary=""
              className="eChkColor"
              style={{ minWidth: "1500px", tableLayout: "auto" }}
            >
              <caption>게시글 목록</caption>
              <colgroup>
                <col className="chk" />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead id="product-list-header">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">회원번호</th>
                  <th scope="col">도시번호</th>
                  <th scope="col">카테고리 번호</th>
                  <th scope="col">제목</th>
                  <th scope="col">거래방식</th>
                  <th scope="col">가격</th>
                  <th scope="col">변동후 가격</th>
                  <th scope="col">거래장소명</th>
                  <th scope="col">흥정가능여부</th>
                  <th scope="col">생성일자</th>
                  <th scope="col">수정일자</th>
                  <th scope="col">삭제일자</th>
                  <th scope="col">끌어올리기일자</th>
                  <th scope="col">거래완료일자</th>
                  <th scope="col">게시글상태</th>
                </tr>
              </thead>
              <tbody className="center" id="product-list">
                {list &&
                  list.map((prod, i) => (
                    <tr
                      key={i}
                      onDoubleClick={() =>
                        window.open(`/admin/post/detail/${prod.postkey}`)
                      }
                    >
                      <td>{prod.postkey}</td>
                      <td>{prod.userkey}</td>
                      <td>{prod.townkey}</td>
                      <td>{prod.categorykey}</td>
                      <td>
                        <div
                          style={{
                            textAlign: "left",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {/* 이미지 출력 */}
                          {console.log("Product Data:", prod)}
                          {/* // 이미지 리스트 전체 출력 */}
                          {prod.pImg_list && prod.pImg_list.length > 0 ? (
                            <>
                              {" "}
                              {console.log(
                                "Image URL:",
                                prod.pImg_list[0]?.imgurl
                              )}
                              <img
                                src={`${baseUrl}/img/postimg/${prod.pImg_list[0].imgurl}`} // baseUrl을 사용하여 절대 경로로 변환
                                alt="썸네일"
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  marginRight: "10px",
                                  objectFit: "cover", // 이미지 비율 유지
                                }}
                              />
                            </>
                          ) : (
                            <ImageNotSupportedRoundedIcon
                              style={{ marginRight: "10px" }}
                            />
                          )}
                          {/* 제목 출력 */}
                          <p style={{ margin: 0 }}>{prod.title}</p>
                        </div>
                      </td>
                      <td>{prod.method}</td>
                      <td>{prod.price}</td>
                      <td>{prod.lastprice}</td>
                      <td>{prod.hope_place}</td>
                      <td>{prod.canbargain}</td>
                      <td>{prod.create_dtm}</td>
                      <td>{prod.update_dtm}</td>
                      <td>{prod.delete_dtm}</td>
                      <td>{prod.remind_dtm}</td>
                      <td>{prod.deal_dtm}</td>
                      <td>{prod.poststatus}</td>
                    </tr>
                  ))}
              </tbody>
            </table>

            {list == null || list.length === 0 ? (
              <p className="empty" style={{ display: "block" }}>
                검색된 게시글 내역이 없습니다.
              </p>
            ) : null}
          </div>
          <div className="mPaginate">
            <ol>
              <li>
                <strong title="현재페이지">1</strong>
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/* <!-- 3 END --> */}
    </>
  );
}
