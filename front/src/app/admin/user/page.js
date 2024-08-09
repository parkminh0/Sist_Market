"use client"
import React from 'react'
import "/public/css/admin/user.css"
import Link from 'next/link'

export default function Page() {
    function doSrchFrm(idx){
    }

    function delete_choice(){
    }

    function cg(){
    }
  return (
<>
            <div className="headingArea gSubmain">
                <div className="mTitle">
                    <h1>고객관리</h1>
                   </div>
            </div>
            <div className="dashMain">
                <div className="mDashPannel">
                    <div className="header">
                        <div className="title">
                            <h2>회원현황</h2>
                        </div>
                    </div>
                    <div className="content">
                        <table border="1" summary="">
                            <caption>회원현황</caption>
                            <colgroup>
                                <col style={{width: "25%"}}/>
                                <col style={{width: "25%"}}/>
                                <col style={{width: "25%"}}/>
                            </colgroup>
                            <thead>
	                            <tr>
	                                <th scope="col">회원
									    <div className="tooltip" style={{zIndex: "1"}}>
									        <div className="content"></div>
									        <span className="edge"></span>
									    </div>
	                                </th>
	                                <th scope="col">탈퇴회원
									    <div className="tooltip" style={{zIndex: "1"}}>
									        <div className="content"></div>
									        <span className="edge"></span>
									    </div>
	                                </th>
	                                <th scope="col">TOTAL
									    <div className="tooltip" style={{zIndex: "1"}}>
									        <div className="content"></div>
									        <span className="edge"></span>
									    </div>
								    </th>
	                            </tr>
                            </thead>
                            <tbody className="right">
	                            <tr>
	                                <td>
                                        <strong className="underline txtEm">
                                            <Link href="#">
                                                {/* ${requestScope.ucvo.cntNotDel} */}
                                            </Link>
                                        </strong> 
                                        명
                                    </td>
	                                <td><strong className="underline txtEm">
                                        <Link href="#"> 
                                            {/* ${requestScope.ucvo.cntDel} */}
                                        </Link>
                                            </strong> 
                                            명
                                            </td>
	                                <td>
                                        <strong className="underline txtEm">
                                            <Link href="#">
                                                {/* ${requestScope.ucvo.cntAll} */}
                                            </Link>
                                        </strong> 
                                        명
                                    </td>
	                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
			</div>
            <form name="mform" method="post" action="">
            	<div className="headingArea">
                    <div className="mTitle">
                    	<h1>회원정보 조회</h1>
                     </div>
                </div>
                <div className="section" id="QA_profile1">
                    <div className="optionArea">
                        <div className="mOption" style={{display: 'block'}}>
                            <table border="1" summary="">
                                <caption>회원정보 조회</caption>
                                <colgroup>
                                    <col style={{width:"145px"}}/>
                                    <col style={{width:"auto"}}/>
                                    <col style={{width:"145px"}}/>
                                    <col style={{width:"auto"}}/>
                                </colgroup>
                                <tbody>
                                <tr>
                                    <th scope="row">개인정보</th>
                                    <td colSpan="3">
                                        <select name="search_type" className="fSelect">
                                            <option value="name">이름</option>
                                            <option value="id" >아이디</option>
                                            <option value="email">이메일</option>
                                            <option value="phone">전화번호</option>
                                            <option value="addr">주소</option>
                                        </select>
                                        <input type="text" name="type" className="fText" style={{width:"130px"}}/>
                                    </td>
                               	</tr>
                                <tr>
	                                <th scope="row">회원등급</th>
	                                <td colSpan="3">
                                            <select name="grade" className="fSelect">
                                                <option value="0">전체</option>
                                                {/* <c:forEach var="rank" items="${requestScope.ugvo_list}" varStatus="idx">
	                                                <option value="${idx.index+1}">${rank.grade}</option>
                                                </c:forEach> */}
                                            </select>
                                    </td>
                           		</tr>
 								<tr>
	                                <th scope="row">가입일</th>
	                                <td>
									    <div style={{float:"left"}}>
									        <span className="gLabel" style={{float:"left", marginLeft:"5px"}}>
										        <input type="date" id="regist_start_date" name="regist_start_date" className="fText gDate" style={{width:"100px"}}/>  
												<span className="ec-mode-common-period-area">~</span>
												<input type="date" id="regist_end_date" name="regist_end_date" className="fText gDate" style={{width:"100px"}}/>
									        </span>
									    </div>
									</td>
									<th scope="row">탈퇴여부</th>
                                    <td>
                                        <label className="gLabel"><input type="radio" name="del" value="2"  className="fChk"/> 전체</label>
                                        <label className="gLabel"><input type="radio" name="del" value="0" className="fChk"/> 탈퇴 X</label>
                                        <label className="gLabel"><input type="radio" name="del" value="1" className="fChk"/> 탈퇴 O</label>
                                    </td>
                           		</tr>
                                <tr>
                                	<th scope="row">나이</th>
									<td>
									    <input type="number" name="age1" className="numberic fText right" style={{width:"40px"}} maxLength="2" min="1"/> 세 
									    <span className="ec-mode-common-period-area">~</span> 
									    <input type="number" name="age2" className="numberic fText right" style={{width:"40px"}} maxLength="2" max="99"/> 세
									</td>                                                                                
									<th scope="row">성별</th>
                                        <td>
                                            <label className="gLabel"><input type="radio" name="gender" value="2" className="fChk"/> 전체</label>
                                            <label className="gLabel"><input type="radio" name="gender" value="0" className="fChk"/> 남</label>
                                            <label className="gLabel"><input type="radio" name="gender" value="1" className="fChk"/> 여</label>
                                        </td>
                                    </tr>
                                    <tr>
	                                    <th scope="row">구매금액/건수</th>
                                        <td colSpan="3">
                                            <div style={{float:"left"}}>
                                                <select name="sales_type" className="fSelect">
                                                    <option value="">전체</option>
                                                    <option value="1">총 주문금액</option>
                                                    <option value="2">총 주문건수</option>
                                                </select>
                                            </div>
                                            <div id="sales_type_length" style={{float:"left",marginLeft:"5px", display:"none"}}>
                                            	<input type="text" name="min_sales_amount" size="8" className="fText right" style={{width:"65px"}}/>
                                                <span className="sales_unit_key" style={{display:"none"}}>건</span>
                                                <span className="sales_unit_price">원</span>
                                                <span className="ec-mode-common-period-area">~</span>
												<input type="text" name="max_sales_amount" size="8" className="fText right" style={{width:"65px"}}/>
                                                <span className="sales_unit_key" style={{display:"none"}}>건</span>
                                                <span className="sales_unit_price">원</span>
                                            </div>
                                        </td>
                                   	</tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mButton gCenter">
                            <Link href="" onClick={doSrchFrm(0)} className="btnSearch"><span>검색</span></Link>
                        </div>
                    </div>
                </div>
            </form>
            <div className="section" id="QA_profile2">
                <div className="mTitle">
                    <h2>회원 목록</h2>
                </div>
                <div className="mState">
                    <div className="gLeft">
                        <p className="total">
                            검색결과 <strong>0</strong>건
                        </p>
                    </div>
                </div>
                <div className="mCtrl typeHeader">
                    <div className="gLeft">
                    	<Link href="" onClick={delete_choice()} className="btnNormal"><span><em className="icoDel"></em> 탈퇴</span></Link>
                    </div>
                </div>
                <div id="searchResult" className="searchResult">
	                {/* <!-- 일반보기 --> */}
	                <div className="mBoard gScroll gCellNarrow typeList">
	                    <table border="1" summary="" className="eChkColor">
	                        <caption>회원 목록</caption>
	                        <colgroup>
	                            <col className="chk"/>
	                            <col className="date"/>
	                            <col style={{width:"70px"}}/>
	                            <col style={{width:"100px"}}/>
	                            <col style={{width:"100px"}}/>                                                                                                
	                            <col style={{width:"120px"}}/>
	                            <col style={{width:"60px"}}/>
	                            <col style={{width:"60px"}}/>
	                            <col style={{width:"70px"}}/>                                                                                            
	                            <col style={{width:"235px"}}/>
	                        </colgroup>
	                        <thead>
	                        <tr>
	                            <th scope="col"><input id="allChk" type="checkbox" className="allChk"/></th>
	                            <th scope="col">등록일</th>                                                                
								<th scope="col">이름</th>
	                            <th scope="col">아이디</th>
	                            <th scope="col">등급</th>
	                            <th scope="col">전화번호</th>
	                            <th scope="col">성별</th>
	                            <th scope="col">나이</th>
	                            <th scope="col">지역</th>
                                <th scope="col">관련 내역 보기</th>
	                       	</tr>
	                        </thead>
	                        <tbody className="center">
	                                                    
	                        </tbody>
	                    </table>
	                    <p className="empty" style={{display:"block"}}>검색된 회원 내역이 없습니다.</p>
	                </div>
	                <div className="mCtrl typeFooter">
	                    <div className="gLeft">
                        	<Link href="" onClick={delete_choice()} className="btnNormal"><span><em className="icoDel"></em> 탈퇴</span></Link>
                    	</div>
	                </div>
					<div className="mPaginate">
						<ol>
                            <li><strong title="현재페이지">1</strong></li>
	                    </ol>
					</div>
					{/* <!-- 선택칸 --> */}
					<div className="section" id="QA_level3">
						<div className="mTile">
							<h2>추가설정</h2>
						</div>
				
						<div className="mBoard gSmall">
							<table border="1" summary="">
								<caption>추가 설정</caption>
								<tbody>
									<tr>
										<th scope="row">
											회원등급변경										
										</th>
										<td>
											 선택된 회원을  
											<select id="ugvo_select">
                                                <option value="0">임시</option>
												{/* <c:forEach var="ugvo" items="${requestScope.ugvo_list}">
												<option value="${ugvo.ug_idx }" >${ugvo.grade }</option>
												</c:forEach> */}
											</select>
											 으로 
											<Link href="#" onClick={cg()} className="btnNormal">
												<span>등급변경</span>
											</Link>
											 합니다. 	
										</td>
									
									</tr>
								</tbody>
							</table>	
						</div>
					
					</div>
				</div>
            </div>
</>
  )
}
