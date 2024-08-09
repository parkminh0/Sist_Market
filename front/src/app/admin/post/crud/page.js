import React from 'react'

export default function Page() {
  return (
<>
<div className="headingArea">
    <div className="mTitle">
        {/* <c:if test="${requestScope.mode eq 'edit'}">
            <h1>상품 수정</h1>
            <input type="hidden" value="edit" name="editMode"/>
        </c:if>
        <c:if test="${requestScope.mode ne 'edit'}">
            <h1>상품 등록</h1>
            <input type="hidden" value="add" name="editMode"/>
        </c:if> */}
    </div>
</div>
<form name="eProductRegisterForm" id="eProductRegisterForm">
    <input type="hidden" name="prod_key" 
        // value="${requestScope.pvo.product_key}"
    />
    <div className="section" id="QA_register1">
        <div className="mToggleBar eToggle selected" id="exposure">
            <h2 className="eToggleTitle">표시 설정</h2>
        </div>
        <div className="toggleArea" style={{display:"block"}}>
            <div className="mBoard typeProduct">
                <table border="1" summary="" className="gDivision">
                <caption>쇼핑몰 표시 설정</caption>
                <colgroup>
                    <col className="product"/>
                    <col style={{width:"auto"}}/>
                </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">판매상태</th>
                            <td>
                                {/* <c:if test="${requestScope.pvo.getDel() ne 1}">
                                    <label className="gLabel"><input type="radio" name="selling_status" className="fChk eMarketChecker" value="0"  checked="checked"/> 판매함</label>
                                    <label className="gLabel"><input type="radio" name="selling_status" className="fChk" value="1"/> 판매안함</label>
                                </c:if>
                                <c:if test="${requestScope.pvo.getDel() eq 1}">
                                    <label className="gLabel"><input type="radio" name="selling_status" className="fChk eMarketChecker" value="0"  /> 판매함</label>
                                    <label className="gLabel"><input type="radio" name="selling_status" className="fChk" value="1" checked="checked"/> 판매안함</label>
                                </c:if> */}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">판매영역</th>
                            <td>
                                <ul className="mForm typeVer">
                                    <li>
                                        <input type="checkbox" className="fChk" checked="checked" disabled="disabled"/> 일반상품 영역
                                    </li>
                                {/* <c:if test="${requestScope.pvo.isnew ne 1}">
                                    <li>
                                        <input type="checkbox" className="fChk" name="isnew" value="1" id="isnew"/> 신상품 영역
                                    </li>
                                </c:if>
                                <c:if test="${requestScope.pvo.isnew eq 1}">
                                    <li>
                                        <input type="checkbox" className="fChk" name="isnew" value="1" checked="checked" id="isnew"/> 신상품 영역
                                    </li>
                                </c:if>
                                <c:if test="${requestScope.pvo.isrecommend ne 1}">
                                    <li>
                                        <input type="checkbox" className="fChk" name="isrecommend" value="1" id="isrecommend"/> 추천상품 영역
                                    </li>
                                </c:if>
                                <c:if test="${requestScope.pvo.isrecommend eq 1}">
                                    <li>
                                        <input type="checkbox" className="fChk" name="isrecommend" checked="checked" value="1" id="isrecommend"/> 추천상품 영역
                                    </li>
                                </c:if> */}
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">상품분류 선택</th>
                            <td>
                                <input type="hidden" name="crud_category_key" />
                                <div className="mSearchSelect typeCategory theme1" id="selectCategoryTable">
                                    <div className="state">
                                        <strong className="txtEm" id="eSelectedCategory">
                                            {/* <c:if test="${requestScope.cate1 ne null}">
                                            ${requestScope.cate1.category_name} &gt;
                                            </c:if>
                                            <c:if test="${requestScope.cate2 ne null}">
                                            ${requestScope.cate2.category_name} &gt;
                                            </c:if>
                                            <c:if test="${requestScope.cate3 ne null}">
                                            ${requestScope.cate3.category_name}
                                            </c:if> */}
                                        </strong>
                                        {/* <c:if test="${requestScope.nowcate ne null}">
                                            <span id="eUnSelectedCategory" style="display:none;">상품분류를 선택하세요</span>
                                        </c:if>
                                        <c:if test="${requestScope.nowcate eq null}">
                                            <span id="eUnSelectedCategory">상품분류를 선택하세요</span>
                                        </c:if> */}
                                    </div>
                                    <table border="1" summary="">
                                        <caption>분류</caption>
                                        <colgroup>
                                            <col style={{width:"auto"}} span="3"/>
                                        </colgroup>
                                        <tbody id="eCategoryTbody">
                                            <tr>
                                                <td className="td_cate_depth1">
                                                    <div className="list">
                                                        <ul className="eExposureCategory cate_depth1">
                                                        {/* <c:forEach var="cate1" items="${applicationScope.category_list}">
                                                            <c:if test="${cate1.category_key eq requestScope.cate1.category_key}">
                                                                <li className="li_cate1 selected" data-key="${cate1.category_key}">${cate1.category_name}<span className="right"> &gt;</span></li>
                                                            </c:if>
                                                            <c:if test="${cate1.category_key ne requestScope.cate1.category_key}">
                                                                <li className="li_cate1" data-key="${cate1.category_key}">${cate1.category_name}<span className="right"> &gt;</span></li>
                                                            </c:if>					                                            
                                                        </c:forEach> */}
                                                        </ul>
                                                    </div>
                                                </td>
                                                {/* <c:if test="${requestScope.cate2_list ne null}">
                                                    <td className="td_cate_depth2">
                                                        <div className="list">
                                                            <ul className="eExposureCategory cate_depth2">
                                                            <c:forEach var="cate2" items="${requestScope.cate2_list}">
                                                                <c:if test="${cate2.category_key eq requestScope.cate2.category_key}">
                                                                    <li className="li_cate1 selected" data-key="${cate2.category_key}">${cate2.category_name}<span className="right"> &gt;</span></li>
                                                                </c:if>
                                                                <c:if test="${cate2.category_key ne requestScope.cate2.category_key}">
                                                                    <li className="li_cate1" data-key="${cate2.category_key}">${cate2.category_name}<span className="right"> &gt;</span></li>
                                                                </c:if>					                                            
                                                            </c:forEach>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </c:if> */}
                                                {/* <c:if test="${requestScope.cate2_list eq null}">
                                                    <td className="td_cate_depth2 displaynone">
                                                        <div className="list">
                                                            <ul className="eExposureCategory cate_depth2">
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </c:if> */}
                                                {/* <c:if test="${requestScope.cate3_list ne null}">
                                                    <td className="td_cate_depth3">
                                                        <div className="list">
                                                            <ul className="eExposureCategory cate_depth3">
                                                            <c:forEach var="cate3" items="${requestScope.cate3_list}">
                                                                <c:if test="${cate3.category_key eq requestScope.cate3.category_key}">
                                                                    <li className="li_cate1 selected" data-key="${cate3.category_key}">${cate3.category_name}<span className="right"> &gt;</span></li>
                                                                </c:if>
                                                                <c:if test="${cate3.category_key ne requestScope.cate3.category_key}">
                                                                    <li className="li_cate1" data-key="${cate3.category_key}">${cate3.category_name}<span className="right"> &gt;</span></li>
                                                                </c:if>					                                            
                                                            </c:forEach>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </c:if> */}
                                                {/* <c:if test="${requestScope.cate3_list eq null}">
                                                    <td className="td_cate_depth3 displaynone">
                                                        <div className="list">
                                                            <ul className="eExposureCategory cate_depth3">
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </c:if> */}
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
    </div>
    <div className="section" id="QA_register2">
        <div className="mToggleBar eToggle selected" id="basic">
            <h2 className="eToggleTitle">기본 정보</h2>
        </div>
        <div className="toggleArea" style={{display:"block"}}>
            <div className="mBoard typeProduct">
                <table border="1" summary="">
                    <caption>상품 기본 정보</caption>
                    <colgroup>
                        <col className="product"/>
                        <col style={{width:"auto"}}/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">상품명
                                <strong className="icoRequired">필수</strong>                  
                            </th>
                            <td>
                                <div className="gIcoShop">
                                    <div className="overlapTip">
                                        <input type="text" name="prod_name" id="prod_name" placeholder="예시) 플라워 미니 원피스" className="fText eMarketChecker eHasModifyProductAuth" style={{width:"730px"}} value="${requestScope.pvo.prod_name}"/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">상품이미지</th>
                            <td>
                                <div className="gIcoShop">
                                    <div className="overlapTip">
                                        <input type="text" name="img_url" id="img_url" placeholder="/shop/img/product/ 이후의 이미지 경로를 작성해주세요." className="fText eMarketChecker eHasModifyProductAuth" style={{width:"730px"}} 
                                        value="${f:substring(requestScope.pvo.img_url, 18, f:length(requestScope.pvo.img_url))}"/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">상품 요약설명 </th>
                            <td>
                                <div className="gIcoShop">
                                    <input type="text" name="prod_desc1" className="fText eMarketChecker" style={{width:"730px"}} 
                                        // value="${requestScope.pvo.prod_desc1}"
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr className="Detail">
                            <th scope="row">상품 상세설명</th>
                            <td>
                                <div className="gIcoShop">
                                    <textarea rows="10" cols="100" name="prod_desc2">
                                        {/* ${requestScope.pvo.prod_desc2} */}
                                    </textarea>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">제조사 </th>
                            <td>
                                <div className="gIcoShop">
                                    <input type="text" name="factory" className="fText eMarketChecker" style={{width:"730px"}} 
                                        // value="${requestScope.pvo.factory}"
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">소재 </th>
                            <td>
                                <div className="gIcoShop">
                                    <input type="text" name="material" className="fText eMarketChecker" style={{width:"730px"}} 
                                        // value="${requestScope.pvo.material}"
                                    />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div className="section" id="QA_register4">
        <div className="mToggleBar eToggle selected" id="sales">
            <h2 className="eToggleTitle">판매 정보</h2>
        </div>
        <div className="toggleArea" style={{display:"block"}}>
            <div className="mBoard typeProduct">
                <table border="1" summary="">
                    <caption>판매 정보</caption>
                    <colgroup>
                        <col className="product"/>
                        <col style={{width:"auto"}}/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">원가 <strong className="icoRequired">필수 </strong></th>
                            <td>
                                <input type="number" className="fText right eMarketChecker eHasModifyProductAuth" style={{width:"80px"}} name="ori_price" id="ori_price" value="${requestScope.pvo.ori_price}" min="0"/> 
                                <span className="txtCode">KRW</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">판매가 <strong className="icoRequired">필수</strong></th>
                            <td>
                                <input type="number" className="fText right eMarketChecker eHasModifyProductAuth" style={{width:"80px"}} name="cell_price" id="cell_price" value="${requestScope.pvo.cell_price}" min="0"/> 
                                <span className="txtCode">KRW</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div className="section eOptionArea" id="QA_register4">
        <div className="mToggleBar eToggle selected" id="item">
            <h2 className="eToggleTitle">옵션/재고 설정</h2>
        </div>
        <div className="toggleArea" style={{display:"block"}}>
            <div className="mBoard typeProduct">
                <table border="1" summary="" className="gDivision " id="eManualOption" style={{display:"table"}}>
                    <caption>상품 옵션 입력</caption>
                    <colgroup>
                        <col className="product"/>
                        <col style={{width:"auto"}}/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">
                                옵션입력
                                <button type="button" onclick="addOption();" className="btnOption lv1Plus vaBottom">추가</button>
                            </th>
                            <td>
                                <div className="mBoard gCellSingle">
                                    <table border="1" summary="">
                                        <caption>옵션</caption>
                                        <thead>
                                            <tr>
                                                <th scope="col">사이즈</th>
                                                <th scope="col">색상</th>
                                                <th scope="col">재고</th>
                                            </tr>
                                        </thead>
                                        <tbody id="eManualOptionTbody">
                                                {/* <c:forEach var="option" items="${requestScope.pvo.option_list}">
                                                <tr className="eHeading heading" id="eManualOptionHeadTemplate">
                                                    <td>
                                                        <input value="${option.size}" id="option_size" type="text" name="option" placeholder="예시) XL" className="fText eManualOptionName" style="width:90%;"/>
                                                    </td>
                                                    <td className="eBubbleArea" id="eOptionBubbleArea">
                                                        <input value="${option.color}" id="option_color" type="text" name="option" placeholder="예시) 검정색" className="fText eManualOptionName" style="width:90%;"/>
                                                    </td>
                                                    <td className="eBubbleArea" id="eOptionBubbleArea">
                                                        <div className="bubbleArea">
                                                            <div className="mBubble">
                                                                <input value="${option.prod_stock}" id="option_stock" type="number" min="0" value="0" name="option" className="fText eManualOptionName"/>
                                                                <div className="button">
                                                                    <button type="button" className="btnOption lv1Minus vaBottom">삭제</button> 
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                </c:forEach> */}
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div className="mButton gCenter">
        {/* <c:if test="${requestScope.mode eq 'edit'}">
            <a href="#" onclick="editProduct();" className="btnSubmit" id="eProductRegister"><span>상품수정</span></a>
            <a href="#" onclick="deleteProduct();" className="btnEm btnPreview" id="eProductRegister"><span>상품삭제</span></a>
        </c:if>
        <c:if test="${requestScope.mode ne 'edit'}">
            <a href="#" onclick="addProduct();" className="btnSubmit" id="eProductRegister"><span>상품등록</span></a>
        </c:if> */}
    </div>
</form>
		{/* <!-- 여기까지 content --> */}
</>
  )
}
