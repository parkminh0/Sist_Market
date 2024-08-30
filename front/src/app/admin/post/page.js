'use client'

import { useEffect, useRef, useState } from "react";
import "/public/css/admin/post.css";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [prod_detail, setProd_detail] = useState({});
  const [scroll, setScroll] = useState('paper');

  const handleClickOpen = (scrollType, prod_detail) => () => {
    setOpen(true);
    setScroll(scrollType);
    setProd_detail(prod_detail);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const detail_ar = [{ "postkey":1,
    "name":"[스위치]; 호그와트 레거시 팩",
    "price": 7500,
    "category": "game",
    "seller": "Sist_3",
    "crtdtm": "2024-08-12",
    "hit": 34,
    },{ "idx":2,
    "name":"BOX: LOST FRAGMENT",
    "price": 8000,
    "category": "game",
    "seller": "S1st_4",
    "crtdtm": "2024-08-20",
    "hit": 22,
    },];

  return (
    <>
      <div className="MuiStack-root css-tfkmr0">
        <div className="MuiGrid-root MuiGrid-container css-v3z1wi">
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-md-6 css-196gsvj">
            <div className="MuiStack-root css-1x4jos1">
              <div className="MuiStack-root css-lmzl00">
                <span className="MuiTypography-root MuiTypography-base.h5B css-avyusg">
                  상품 목록
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
                      상품 현황
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
                        전체 등록 상품
                      </span>
                    </div>
                    <div className="MuiStack-root css-1h3carr">
                      <a className="MuiTypography-root MuiTypography-custom.h6BH MuiLink-root MuiLink-underlineAlways css-sdodfs">
                        개수
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
                        판매 중인 상품
                      </span>
                    </div>
                    <div className="MuiStack-root css-1h3carr">
                      <a className="MuiTypography-root MuiTypography-custom.h6BH MuiLink-root MuiLink-underlineAlways css-sdodfs">
                        개수
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
                        품절 상품
                      </span>
                    </div>
                    <div className="MuiStack-root css-1h3carr">
                      <a className="MuiTypography-root MuiTypography-custom.h6BH MuiLink-root MuiLink-underlineAlways css-13xs5pa">
                        개수
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
                        판매 안하는 상품
                      </span>
                    </div>
                    <div className="MuiStack-root css-1h3carr">
                      <a className="MuiTypography-root MuiTypography-custom.h6BH MuiLink-root MuiLink-underlineAlways css-13xs5pa">
                        개수
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
        <div className="optionArea" id="QA_list1" style={{ marginTop: "30px" }}>
          <div className="mOption" id="submitSearchBox">
            <table border="1" summary="">
              <caption>상품 검색</caption>
              <colgroup>
                <col style={{ width: "154px" }} />
                <col style={{ width: "auto" }} />
                <col style={{ width: "154px" }} />
                <col style={{ width: "auto" }} />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">검색분류</th>
                  <td colspan="3">
                    <ul className="mForm typeVer" id="eSearchFormGeneral">
                      <li>
                        <select className="fSelect eSearch" name="search1">
                          <option value="prod_name">상품명</option>
                          <option value="product_key">상품번호</option>
                          <option value="factory">제조사</option>
                        </select>
                        <input
                          id="search1_text"
                          type="text"
                          className="fText eSearchText"
                          style={{ width: "500px" }}
                          value=""
                          name="search1_text"
                        />
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row">상품분류</th>
                  <td colspan="3">
                    <div className="gSingle">
                      <select
                        className="fSelect category eCategory"
                        id="eCategory1"
                        name="search2_1"
                      >
                        <option value="">- 대분류 전체 -</option>
                        {/* <c:forEach var="category" items="${applicationScope.category_list}">
                                            <option value="${category.category_key}">${category.category_name}</option>
                                        </c:forEach> */}
                      </select>
                      <select
                        className="fSelect category eCategory"
                        id="eCategory2"
                        name="search2_2"
                      >
                        <option value="">- 중분류 전체 -</option>
                      </select>
                      <select
                        className="fSelect category eCategory"
                        id="eCategory3"
                        name="search2_3"
                      >
                        <option value="">- 소분류 전체 -</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">상품등록일</th>
                  <td colspan="3">
                    <input
                      type="date"
                      id="pr_start_date"
                      name="start_date"
                      className="fText gDate"
                      value=""
                      style={{ width: "100px" }}
                    />
                    <span className="ec-mode-common-period-area">~</span>
                    <input
                      type="date"
                      id="pr_end_date"
                      name="end_date"
                      className="fText gDate"
                      value=""
                      style={{ width: "100px" }}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">판매상태</th>
                  <td colspan="3">
                    <label className="gSingleLabel">
                      <input
                        type="radio"
                        className="fChk eDisplayStatus"
                        name="selling"
                        value="2"
                        checked="checked"
                      />{" "}
                      전체
                    </label>
                    <label className="gSingleLabel">
                      <input
                        type="radio"
                        className="fChk eDisplayStatus"
                        name="selling"
                        value="0"
                      />{" "}
                      판매함
                    </label>
                    <label className="gSingleLabel">
                      <input
                        type="radio"
                        className="fChk eDisplayStatus"
                        name="selling"
                        value="1"
                      />{" "}
                      판매안함
                    </label>
                  </td>
                </tr>
                <tr>
                  <th scope="row">재고수량</th>
                  <td colspan="3">
                    <ul className="mForm typeVer" id="eSearchFormStock">
                      <li>
                        <input
                          type="text"
                          className="fText right eSearchText"
                          style={{ width: "60px" }}
                          value=""
                          name="stock_min"
                        />{" "}
                        개 ~
                        <input
                          type="text"
                          className="fText right eSearchText"
                          style={{ width: "60px" }}
                          value=""
                          name="stock_max"
                        />{" "}
                        개
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row">품절상태</th>
                  <td colspan="3">
                    <label className="gLabel">
                      <input
                        type="radio"
                        className="fChk"
                        name="soldout_status"
                        value="2"
                        checked="checked"
                      />{" "}
                      전체
                    </label>
                    <label className="gLabel">
                      <input
                        type="radio"
                        className="fChk"
                        name="soldout_status"
                        value="1"
                      />{" "}
                      품절
                    </label>
                    <label className="gLabel">
                      <input
                        type="radio"
                        className="fChk"
                        name="soldout_status"
                        value="0"
                      />{" "}
                      품절아님
                    </label>
                  </td>
                </tr>
                <tr>
                  <th scope="row">상품가격</th>
                  <td colspan="3">
                    <ul className="mForm typeVer" id="eSearchFormPrice">
                      <li>
                        <select className="fSelect" name="price">
                          <option value="product">판매가</option>
                          <option value="buy">원가</option>
                        </select>
                        <input
                          type="text"
                          className="fText right eSearchText"
                          style={{ width: "60px" }}
                          value=""
                          name="price_min"
                        />{" "}
                        <span className="txtCode">KRW</span> ~
                        <input
                          type="text"
                          className="fText right eSearchText"
                          style={{ width: "60px" }}
                          value=""
                          name="price_max"
                        />{" "}
                        <span className="txtCode">KRW</span>
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
              onclick="searchProduct(0)"
              className="btnSearch"
              id="eBtnSearch"
            >
              <span>검색</span>
            </a>
            <a
              href="#"
              onclick="clearAll()"
              className="btnSearch reset"
              id="eSearchFormInit"
            >
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
          <h2>상품 목록</h2>
        </div>
        <div className="mState">
          <div className="gLeft">
            <p className="total">
              [총 <strong>0</strong>개]
            </p>
          </div>
        </div>
        <div className="mCtrl typeHeader setting">
          <div className="gTop">
            <a
              href="#"
              onclick="delete_choice(0)"
              className="btnNormal _manage_state"
            >
              <span>판매함</span>
            </a>
            <a
              href="#"
              onclick="delete_choice(1)"
              className="btnNormal _manage_state"
            >
              <span>판매안함</span>
            </a>
            <a
              href="#"
              onclick="delete_choice(2)"
              className="btnNormal _manage_delete"
            >
              <span>
                <em className="icoDel"></em> 삭제
              </span>
            </a>
            <a href="#" className="btnNormal _manage_category">
              <span>
                분류수정<em className="icoLink"></em>
              </span>
            </a>
            <a href="#" className="btnNormal _manage_main_display">
              <span>
                메인진열수정<em className="icoLink"></em>
              </span>
            </a>
          </div>
        </div>
        <div id="searchResult">
          <div className="mBoard typeList gScroll gCell">
            <table border="1" summary="" className="eChkColor">
              <caption>상품 목록</caption>
              <colgroup>
                <col className="chk" />
                <col style={{ width: "50px" }} />
                <col style={{ width: "250px" }} />
                <col style={{ width: "100px" }} />
                <col style={{ width: "100px" }} />
                <col style={{ width: "100px" }} />
                <col style={{ width: "100px" }} />
                <col style={{ width: "100px" }} />
                <col style={{}} />
                <col style={{ width: "50px" }} />
              </colgroup>
              <thead id="product-list-header">
                <tr>
                  <th scope="col">
                    <input type="checkbox" id="allChk" className="allChk" />
                  </th>
                  <th scope="col">No</th>
                  <th scope="col">상품명</th>
                  <th scope="col">판매가</th>
                  <th scope="col">분류</th>
                  <th scope="col">판매자</th>
                  <th scope="col">상품등록일</th>
                  <th scope="col">조회수</th>
                </tr>
              </thead>
              <tbody className="center" id="product-list">
                {detail_ar.map((pvo,i)=>(
                    <tr key={i.index}>
                      <td scope="col">
                        <input type="checkbox" />
                      </td>
                      <td scope="col">{pvo.idx}</td>
                      <td scope="col" onDoubleClick={()=>window.open(`/admin/post/detail/${pvo.postkey}`)}>{pvo.name}</td>
                      <td scope="col">{pvo.price}원</td>
                      <td scope="col">{pvo.category}</td>
                      <td scope="col">{pvo.seller}</td>
                      <td scope="col">{pvo.crtdtm}</td>
                      <td scope="col">{pvo.hit}</td>
                    </tr>
                ))}
              </tbody>
            </table>
            <p className="empty" style={{ display: "block" }}>
              검색된 상품 내역이 없습니다.
            </p>
          </div>
          <div className="mCtrl typeFooter">
            <div className="gTop">
              <a
                href="#none"
                onclick="delete_choice(0)"
                className="btnNormal _manage_state"
              >
                <span>판매함</span>
              </a>
              <a
                href="#none"
                onclick="delete_choice(1)"
                className="btnNormal _manage_state"
              >
                <span>판매안함</span>
              </a>
              <a
                href="#none"
                onclick="delete_choice(2)"
                className="btnNormal _manage_delete"
              >
                <span>
                  <em className="icoDel"></em> 삭제
                </span>
              </a>
              <a
                href="#none"
                target="_blank"
                title="새창 열림"
                className="btnNormal _manage_category"
              >
                <span>
                  분류수정<em className="icoLink"></em>
                </span>
              </a>
              <a
                href="#none"
                target="_blank"
                title="새창 열림"
                className="btnNormal _manage_main_display"
              >
                <span>
                  메인진열수정<em className="icoLink"></em>
                </span>
              </a>
            </div>
            <div className="gBottom">
              <a
                href="Controller?type=adproductcrud"
                className="btnCtrl eRegProduct"
              >
                <span>상품등록</span>
              </a>
            </div>
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
