"use client";

import React, { useEffect, useState } from "react";
import "/public/css/admin/post.css";
import axios from "axios";

export default function Page() {
  const [list, setList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0); // 전체 게시글 수
  const [salePosts, setSalePosts] = useState(0); // 판매 중 게시글 수
  const [notForSalePosts, setNotForSalePosts] = useState(0); // 판매 안하는 게시글 수
  const [reservedPosts, setReservedPosts] = useState(0); // 예약 중 게시글 수
  const [dealingPosts, setDealingPosts] = useState(0); // 거래 중 게시글 수
  const [soldOutPosts, setSoldOutPosts] = useState(0); // 거래 완료 게시글 수
  const [deletedPosts, setDeletedPosts] = useState(0); // 삭제된 게시글 수


 // 전체 게시글 수를 가져오는 함수
 function getTotalPosts() {
  axios({
    url: "/adpost/totalposts", // 전체 게시글 수를 가져오는 백엔드 API 엔드포인트
    method: "get",
  })
    .then((res) => {
      console.log("전체 게시글 수 응답 데이터:", res.data); // 응답 데이터 확인
      setTotalPosts(res.data); // 응답 데이터가 숫자이므로 바로 상태로 저장
    })
    .catch((error) => {
      console.error("There was an error fetching total posts:", error);
    });
}



  function searchpost() {
    let frm = document.getElementById("frmSearch");
    let formData = new FormData(frm);

    // URLSearchParams를 사용하여 FormData를 직렬화합니다.
    let formJson = Object.fromEntries(new URLSearchParams(formData));

    // 데이터 확인용 로그 출력
    console.log("전송 데이터:", formJson);
    axios({
      url: "/adpost/searchpost", // 백엔드 API 엔드포인트
      method: "post",
      data: formJson,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setList(res.data.post_list); // 검색 결과를 상태로 저장
      })
      .catch((error) => {
        console.error("There was an error with the search request:", error);
      });
  }

    const fetchPostStatusCounts = () => {
      axios.get("/adpost/statuscounts")
        .then((response) => {
          console.log("게시글 상태별 카운트:", response.data); // 서버에서 반환된 데이터 로그
          // 받아온 데이터를 상태로 저장하거나 처리
          setTotalPosts(response.data.total_posts);
          setSalePosts(response.data.sale_posts);
          setNotForSalePosts(response.data.not_for_sale_posts);
          setReservedPosts(response.data.reserved_posts);
          setDealingPosts(response.data.dealing_posts);
          setSoldOutPosts(response.data.sold_out_posts);
          setDeletedPosts(response.data.deleted_posts);
        })
        .catch((error) => {
          console.error("게시글 상태별 카운트 조회 실패:", error);
        });
    };
  


  useEffect(() => {
    searchpost();
    fetchPostStatusCounts();
    callData();
  }, []);

  function callData() {
    axios.get("/category/all").then((response) => {
      setCategoryList(response.data.category_list);
    });
  }

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
                        전체 등록 게시글
                      </span>
                    </div>
                    <div className="MuiStack-root css-1h3carr">
                      <a className="MuiTypography-root MuiTypography-custom.h6BH MuiLink-root MuiLink-underlineAlways css-sdodfs">
                      <strong>{totalPosts}</strong> {/*전체 게시글 수 출력*/}                      </a>
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
                        판매함 게시물
                      </span>
                    </div>
                    <div className="MuiStack-root css-1h3carr">
                      <a className="MuiTypography-root MuiTypography-custom.h6BH MuiLink-root MuiLink-underlineAlways css-sdodfs">
                      <strong>{salePosts}</strong>
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
                        판매안함 게시물
                      </span>
                    </div>
                    <div className="MuiStack-root css-1h3carr">
                      <a className="MuiTypography-root MuiTypography-custom.h6BH MuiLink-root MuiLink-underlineAlways css-sdodfs">
                      <strong>{notForSalePosts}</strong> 
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
                        예약중 게시물
                      </span>
                    </div>
                    <div className="MuiStack-root css-1h3carr">
                      <a className="MuiTypography-root MuiTypography-custom.h6BH MuiLink-root MuiLink-underlineAlways css-sdodfs">
                      <strong>{reservedPosts}</strong> 
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
                        거래중 게시물
                      </span>
                    </div>
                    <div className="MuiStack-root css-1h3carr">
                      <a className="MuiTypography-root MuiTypography-custom.h6BH MuiLink-root MuiLink-underlineAlways css-13xs5pa">
                      <strong>{dealingPosts}</strong> 
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
                      <a className="MuiTypography-root MuiTypography-custom.h6BH MuiLink-root MuiLink-underlineAlways css-13xs5pa">
                      <strong>{soldOutPosts}</strong> 
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
                        삭제 게시물
                      </span>
                    </div>
                    <div className="MuiStack-root css-1h3carr">
                      <a className="MuiTypography-root MuiTypography-custom.h6BH MuiLink-root MuiLink-underlineAlways css-13xs5pa">
                      <strong>{deletedPosts}</strong> 
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
                          <option value="userkey">판매자명</option>
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
                        value="0"
                      />{" "}
                      전체
                    </label>
                    <label className="gSingleLabel">
                      <input
                        type="radio"
                        className="poststatus"
                        name="poststatus"
                        value="1"
                      />{" "}
                      판매함
                    </label>
                    <label className="gSingleLabel">
                      <input
                        type="radio"
                        className="poststatus"
                        name="poststatus"
                        value="2"
                      />{" "}
                      판매안함
                    </label>
                    <label className="gSingleLabel">
                      <input
                        type="radio"
                        className="poststatus"
                        name="poststatus"
                        value="3"
                      />{" "}
                      예약중
                    </label>
                    <label className="gSingleLabel">
                      <input
                        type="radio"
                        className="poststatus"
                        name="poststatus"
                        value="4"
                      />{" "}
                      거래중
                    </label>
                    <label className="gSingleLabel">
                      <input
                        type="radio"
                        className="poststatus"
                        name="poststatus"
                        value="5"
                      />{" "}
                      거래완료
                    </label>
                    <label className="gSingleLabel">
                      <input
                        type="radio"
                        className="poststatus"
                        name="poststatus"
                        value="6"
                      />{" "}
                      삭제
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
                      />{" "}
                      전체
                    </label>
                    <label className="gSingleLabel">
                      <input
                        type="radio"
                        className="method"
                        name="method"
                        value="1"
                      />{" "}
                      직거래
                    </label>
                    <label className="gSingleLabel">
                      <input
                        type="radio"
                        className="method"
                        name="method"
                        value="2"
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
                      />{" "}
                      전체
                    </label>
                    <label className="canbargain">
                      <input
                        type="radio"
                        className="canbargain"
                        name="canbargain"
                        value="1"
                      />{" "}
                      흥정가능
                    </label>
                    <label className="canbargain">
                      <input
                        type="radio"
                        className="canbargain"
                        name="canbargain"
                        value="2"
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
                      <td>{prod.title}</td>
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
