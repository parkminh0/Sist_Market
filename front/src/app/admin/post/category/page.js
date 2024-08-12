import React from "react";

export default function Page() {
  return (
    <>
      <div class="headingArea">
        <div class="mTitle">
          <h1>상품분류 관리</h1>
        </div>
      </div>
      <div class="categorySetArea">
        <div class="gFlow">
          <div class="section" id="QA_setting1">
            <div class="mTitle">
              <h2>상품분류 설정</h2>
            </div>
            <form id="eSubmitNode">
              <div class="mCtrl typeHeader">
                <div class="gLeft">
                  <a
                    href="#none"
                    onclick="addCategory();"
                    class="btnNormal eAddLargeCategoryBtn"
                  >
                    <span>분류추가</span>
                  </a>
                </div>
              </div>
              <div class="mCategorySet">
                <p class="notice">수정할 분류를 선택하세요.</p>
                <p class="notice" style={{ color: "red" }}>
                  더블클릭 하셔야 인식됩니다.
                </p>
                <ul class="dynatree-container">
                  {/* <c:forEach var="cate1" items="${applicationScope.category_list}">
                            <c:if test="${cate1.category_name eq '미분류'}">
                                <li id="category-${cate1.category_key}" style="pointer-events: none; opacity: 0.5;" class="">
                                    <span class="cate1 dynatree-node dynatree-folder dynatree-has-children dynatree-exp-c dynatree-ico-cf">
                                        <span class="dynatree-expander cate1_expander"></span>
                                        <span class="dynatree-contents" data-upcate="0" data-nowcate="${cate1.category_key}" data-cate1="${cate1.category_key}">
                                            <input type="hidden" name="cate1_text" value="${cate1.category_name}"/>
                                            <a href="#">${cate1.category_name}</a>
                                        </span>
                                    </span>
                                </li>
                            </c:if>
                            <c:if test="${cate1.category_name ne '미분류' }">
                                <li id="category-${cate1.category_key}" class="">
                                    <span class="cate1 dynatree-node dynatree-folder dynatree-has-children dynatree-exp-c dynatree-ico-cf">
                                        <span class="dynatree-expander cate1_expander"></span>
                                        <span class="dynatree-contents" data-upcate="0" data-nowcate="${cate1.category_key}" data-cate1="${cate1.category_key}">
                                            <input type="hidden" name="cate1_text" value="${cate1.category_name}"/>
                                            <a href="#">${cate1.category_name}</a>
                                        </span>
                                    </span>
                                    <ul style="display: none;" class="cate2">
                                    <c:forEach var="cate2" items="${cate1.category_list}">
                                        <li id="category-${cate2.category_key}" class="dynatree-lastsib">
                                            <span class="cate2 dynatree-node dynatree-folder dynatree-has-children dynatree-lastsib dynatree-exp-cl dynatree-ico-cf">
                                                <span class="dynatree-expander cate2_expander"></span>
                                                <span class="dynatree-contents" data-upcate="${cate1.category_key}" data-nowcate="${cate2.category_key}" data-cate1="${cate1.category_key}" data-cate2="${cate2.category_key}">
                                                    <input type="hidden" name="cate2_text" value="${cate1.category_name} >  ${cate2.category_name}"/>
                                                    <a href="#none">${cate2.category_name}</a>
                                                </span>
                                            </span>
                                            <ul style="display: none;" class="cate3">
                                            <c:forEach var="cate3" items="${cate2.category_list}">
                                                <li id="category-${cate3.category_key}" class="dynatree-lastsib">
                                                    <span class="cate3 dynatree-node dynatree-folder dynatree-has-children dynatree-lastsib dynatree-exp-cl dynatree-ico-cf">
                                                        <span class="dynatree-connector" ></span>
                                                        <span class="dynatree-contents" data-upcate="${cate2.category_key}" data-nowcate="${cate3.category_key}" data-cate1="${cate1.category_key}" data-cate2="${cate2.category_key}" data-cate3="${cate3.category_key}">
                                                            <input type="hidden" name="cate3_text" value="${cate1.category_name} >  ${cate2.category_name} >  ${cate3.category_name}"></input>
                                                            <a href="#none">${cate3.category_name}</a>
                                                        </span>
                                                    </span>
                                                </li>
                                            </c:forEach>
                                            </ul>
                                        </li>
                                    </c:forEach>
                                    </ul>
                                </li>
                            </c:if>
                        </c:forEach> */}
                </ul>
              </div>
              <div class="mCtrl typeFooter">
                <div class="gLeft">
                  <a
                    href="#"
                    onclick="addCategory();"
                    class="btnNormal eAddLargeCategoryBtn"
                  >
                    <span>분류추가</span>
                  </a>
                </div>
              </div>
              <div
                class="ctrlHeight ui-draggable"
                id="eContorlHeightCategoryExplorerBtn"
              >
                <span>상품분류 설정 높이 영역 조절</span>
              </div>
            </form>
          </div>
        </div>
        <div class="gReverse">
          <form
            name="CategoryInfoForm"
            action="/"
            method="post"
            id="eCategoryInfoForm"
          >
            <div class="mTitle">
              <h2>분류정보</h2>
            </div>
            <div class="mBoard gSmall">
              <table border="1" summary="">
                <caption>분류정보</caption>
                <tbody>
                  <tr>
                    <th scope="row">현재분류</th>
                    <td>
                      <span id="eCurrentCategoryDisplay"></span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">현재분류번호</th>
                    <td>
                      <span id="eCurrentCategoryKeyDisplay"></span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      분류명
                      <strong class="icoRequired">필수</strong>
                    </th>
                    <td>
                      <div class="gIcoShop">
                        <input
                          type="text"
                          id="eCategoryTitle"
                          required="required"
                          placeholder="예시) 티셔츠"
                          name="category_name"
                          class="fText"
                          style={{ width: "200px" }}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div id="section">
              <div class="mTitle">
                <h2>분류 위치 설정</h2>
              </div>
              <div class="mBoard gSmall">
                <table border="1" summary="" class="gDivision">
                  <colgroup>
                    <col class="product" />
                    <col style={{ width: "auto" }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">상품분류 선택</th>
                      <td>
                        <input
                          type="hidden"
                          name="crud_category_key"
                          value=""
                        />
                        <div
                          class="mSearchSelect typeCategory theme1"
                          id="selectCategoryTable"
                        >
                          <div class="state">
                            <strong class="txtEm" id="eSelectedCategory">
                              대분류 &gt;
                            </strong>
                            <span> 태그 아래에 존재합니다.</span>
                          </div>
                          <table border="1" summary="">
                            <caption>분류</caption>
                            <colgroup>
                              <col style={{ width: "auto" }} span="3" />
                            </colgroup>
                            <tbody id="eCategoryTbody">
                              <tr>
                                <td class="td_cate_depth">
                                  <div class="list">
                                    <ul class="eExposureCategory cate_depth">
                                      <li class="li_cate selected">
                                        대분류<span class="right"> &gt;</span>
                                      </li>
                                    </ul>
                                  </div>
                                </td>
                                <td class="td_cate_depth1">
                                  <div class="list">
                                    <ul class="eExposureCategory cate_depth1">
                                      {/* <c:forEach var="cate1" items="${applicationScope.category_list}">
                                                                <c:if test="${cate1.category_name eq '미분류'}">
                                                                    <li id="disablebtn" class="li_cate1" style="pointer-events: none; opacity: 0.5;" data-key="${cate1.category_key}">${cate1.category_name}<span class="right"> &gt;</span></li>
                                                                </c:if>
                                                                <c:if test="${cate1.category_name ne '미분류' }">
                                                                    <li class="li_cate1" data-key="${cate1.category_key}">${cate1.category_name}<span class="right"> &gt;</span></li>
                                                                </c:if>
                                                            </c:forEach> */}
                                    </ul>
                                  </div>
                                </td>
                                <td class="td_cate_depth2 displaynone">
                                  <div class="list">
                                    <ul class="eExposureCategory cate_depth2"></ul>
                                  </div>
                                </td>
                                <td class="td_cate_depth3 displaynone">
                                  <div class="list">
                                    <ul class="eExposureCategory cate_depth3"></ul>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </form>
          <div class="mButton gCenter">
            <a
              href="#"
              onclick="saveCategory();"
              class="btnSubmit"
              id="eSubmitBtn"
            >
              <span>확인</span>
            </a>
            <a
              href="#"
              onclick="deleteCategory();"
              class="btnEm btnPreview"
              id="eProductPreview"
            >
              <span>삭제</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
