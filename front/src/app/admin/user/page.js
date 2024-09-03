"use client";
import React, { useEffect, useState } from "react";
import "/public/css/admin/user.css";
import Link from "next/link";
import axios from "axios";

export default function Page() {
  //유저 카운트
  const API_URL = "/user/api/usercount";
  const [count, setCount] = useState({});
  const [del, setDel] = useState(0);
  const [act, setAct] = useState(0);

  const [search_type,setSearch_type] = useState("name");
  const [type,setType] = useState("");
  const [regist_start_date,setRegist_start_date] = useState("");
  const [regist_end_date,setRegist_end_date] = useState("");
  const [isdeleted,setIsdeleted] = useState(0);
  const [isauthorized,setIsauthorized] = useState(0);
  const [recent_login_start_date,setRecent_login_start_date] = useState("");
  const [recent_login_end_date,setRecent_login_end_date] = useState("");

  //유저 검색
  const API_URL_2 = "/user/api/search_user_admin";
  const [userlist, setUserlist] = useState([]);
  const [totalRecords,setTotalRecords] = useState(0);
  //페이징
  const [totalPage,setTotalPage] = useState(0);
  const [page, setPage] = useState({});

  //체크한 유저 삭제 
  const DEL_URL = "/user/api/admin/checkUserDel";
  const [allChecked, setAllChecked] = useState(false); // 전체 선택 체크박스 
  const [checkedItems, setCheckedItems] = useState([]); // 개별 체크박스 

  // 전체 선택 체크박스 
  const handleAllCheck = (e) => {
    const checked = e.target.checked;
    setAllChecked(checked); // 전체 선택 상태 업데이트
    if (checked) {
      // 전체 선택 시, 모든 유저의 키를 checkedItems에 추가
      const allCheckedItems = userlist.map((item) => item.userkey);
      setCheckedItems(allCheckedItems);
    } else {
      // 전체 선택 해제
      setCheckedItems([]); 
    }
  };

  // 개별 체크박스 핸들러
  const handleRowCheck = (e, userkey) => {
    const checked = e.target.checked;
    let updatedCheckedItems = [...checkedItems];
    if (checked) {
      // 체크 시 해당 유저의 키를 checkedItems에 추가
      updatedCheckedItems.push(userkey);
    } else {
      // 체크 해제 시 유저의 키 checkedItems에서 제거
      updatedCheckedItems = updatedCheckedItems.filter((key) => key !== userkey);
    }
    setCheckedItems(updatedCheckedItems);
    // 모든 유저가 선택되었는지 확인> 전체 선택 상태 업데이트
    setAllChecked(updatedCheckedItems.length === userlist.length);
  };

  // 페이지 로드 시 Count
  useEffect(() => {
    getCount();
    //doSrchFrm(0);
  }, []);

  function getCount() {
    axios.get(API_URL).then((response) => {
      setCount(response.data.ucvo);
      setDel(response.data.ucvo.cntDel);
      setAct(response.data.ucvo.cntNotDel);
    });
  }
  // 페이징 처리 함수
  function changePage(newPage) {
    doSrchFrm(newPage);
  }

  function doSrchFrm(cPage) {
    let now = cPage;
    
    axios({
      url: `${API_URL_2}?cPage=${cPage}`,
      method: 'post',
      params: {
          search_type: search_type,
          type: type,
          regist_start_date: regist_start_date,
          regist_end_date: regist_end_date,
          isdeleted: isdeleted,
          recent_login_start_date: recent_login_start_date,
          recent_login_end_date: recent_login_end_date,
          isauthorized: isauthorized,
      }
  }).then((response) => {
        setUserlist(response.data.ar);
        setTotalPage(response.data.totalPage);
        setTotalRecords(response.data.totalRecord);
        setPage(response.data.page);
      }).catch(error => {
        console.error("Error during search:", error);
    });
  }

  function delete_choice() {
    console.log("delete_choice 함수 호출됨");
    console.log("DEL_URL:", DEL_URL);
    axios.post(DEL_URL, checkedItems)
        .then(response => {
            alert("회원 탈퇴가 완료되었습니다.");
            // 체크박스 선택 해제
            setCheckedItems([]); // 개별 체크박스 해제
            setAllChecked(false); // 전체 선택 체크박스 해제
            doSrchFrm(0);
            getCount();
        }) .catch(error => {
      console.error("Error deleting users:", error);
      alert("회원 탈퇴 중 오류가 발생했습니다. 다시 시도해 주세요.");
  });


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
                <col style={{ width: "25%" }} />
                <col style={{ width: "25%" }} />
                <col style={{ width: "25%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">
                    회원
                    <div className="tooltip" style={{ zIndex: "1" }}>
                      <div className="content"></div>
                      <span className="edge"></span>
                    </div>
                  </th>
                  <th scope="col">
                    탈퇴회원
                    <div className="tooltip" style={{ zIndex: "1" }}>
                      <div className="content"></div>
                      <span className="edge"></span>
                    </div>
                  </th>
                  <th scope="col">
                    TOTAL
                    <div className="tooltip" style={{ zIndex: "1" }}>
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
                        {act}
                      </Link>
                    </strong>
                    명
                  </td>
                  <td>
                    <strong className="underline txtEm">
                      <Link href="#">
                        {/* ${requestScope.ucvo.cntDel} */}
                        {del}
                      </Link>
                    </strong>
                    명
                  </td>
                  <td>
                    <strong className="underline txtEm">
                      <Link href="#">
                        {/* ${requestScope.ucvo.cntAll} */}
                        {count.cntAll}
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
      <form name="mform" method="post" action="/search_user_admin">
        <div className="headingArea">
          <div className="mTitle">
            <h1>회원정보 조회</h1>
          </div>
        </div>
        <div className="section" id="QA_profile1">
          <div className="optionArea">
            <div className="mOption" style={{ display: "block" }}>
              <table border="1" summary="">
                <caption>회원정보 조회</caption>
                <colgroup>
                  <col style={{ width: "145px" }} />
                  <col style={{ width: "auto" }} />
                  <col style={{ width: "145px" }} />
                  <col style={{ width: "auto" }} />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">개인정보</th>
                    <td colSpan="3">
                      <select name="search_type" className="fSelect" onChange={(e) => setSearch_type(e.target.value)}>
                        <option value="name">이름</option>
                        <option value="id">아이디</option>
                        <option value="email">이메일</option>
                        <option value="phone">전화번호</option>
                        <option value="nickname">닉네임</option>
                      </select>
                      <input
                        type="text"
                        name="type"
                        className="fText"
                        style={{ width: "130px" }}
                        onChange={(e)=>{
                          setType(e.target.value);
                      }}
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">가입일</th>
                    <td>
                      <div style={{ float: "left" }}>
                        <span
                          className="gLabel"
                          style={{ float: "left", marginLeft: "5px" }}
                        >
                          <input
                            type="date"
                            id="regist_start_date"
                            name="regist_start_date"
                            className="fText gDate"
                            style={{ width: "100px" }}
                            onChange={(e) => setRegist_start_date(e.target.value)}
                          />
                          <span className="ec-mode-common-period-area">~</span>
                          <input
                            type="date"
                            id="regist_end_date"
                            name="regist_end_date"
                            className="fText gDate"
                            style={{ width: "100px" }}
                            onChange={(e) => setRegist_end_date(e.target.value)}
                          />
                        </span>
                      </div>
                    </td>

                    <th scope="row">탈퇴여부</th>
                    <td>
                      <label className="gLabel">
                        <input
                          type="radio"
                          name="del"
                          value="2"
                          className="fChk"
                          onChange={(e) => setIsdeleted(e.target.value)}
                        />{" "}
                        전체
                      </label>
                      <label className="gLabel">
                        <input
                          type="radio"
                          name="del"
                          value="0"
                          className="fChk"
                          onChange={(e) => setIsdeleted(e.target.value)}
                        />{" "}
                        탈퇴 X
                      </label>
                      <label className="gLabel">
                        <input
                          type="radio"
                          name="del"
                          value="1"
                          className="fChk"
                          onChange={(e) => setIsdeleted(e.target.value)}
                        />{" "}
                        탈퇴 O
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">최근접속일</th>
                    <td>
                      <div style={{ float: "left" }}>
                        <span
                          className="gLabel"
                          style={{ float: "left", marginLeft: "5px" }}
                        >
                          <input
                            type="date"
                            id="recent_login_start_date"
                            name="regist_start_date"
                            className="fText gDate"
                            style={{ width: "100px" }}
                            onChange={(e) => setRecent_login_start_date(e.target.value)}
                          />
                          <span className="ec-mode-common-period-area">~</span>
                          <input
                            type="date"
                            id="recent_login_end_date"
                            name="regist_end_date"
                            className="fText gDate"
                            style={{ width: "100px" }}
                            onChange={(e) => setRecent_login_end_date(e.target.value)}
                          />
                        </span>
                      </div>
                    </td>
                    <th scope="row">본인인증여부</th>
                    <td>
                      <label className="gLabel">
                        <input
                          type="radio"
                          name="isauthorized"
                          value="2"
                          className="fChk"
                          onChange={(e) => setIsauthorized(e.target.value)}
                        />{" "}
                        전체
                      </label>
                      <label className="gLabel">
                        <input
                          type="radio"
                          name="isauthorized"
                          value="0"
                          className="fChk"
                          onChange={(e) => setIsauthorized(e.target.value)}
                        />{" "}
                        인증 X
                      </label>
                      <label className="gLabel">
                        <input
                          type="radio"
                          name="isauthorized"
                          value="1"
                          className="fChk"
                          onChange={(e) => setIsauthorized(e.target.value)}
                        />{" "}
                        인증 O
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mButton gCenter">
              <Link href="" onClick={() => doSrchFrm(0)} className="btnSearch">
                <span>검색</span>
              </Link>
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
              검색결과  <strong> {totalRecords} </strong> 건
            </p>
          </div>
        </div>
        <div className="mCtrl typeHeader">
        <div className="gLeft">
          <button onClick={delete_choice} className="btnNormal">
            <span>
              <em className="icoDel"></em> 탈퇴
            </span>
          </button>
        </div>
        </div>
        <div id="searchResult" className="searchResult">
          {/* <!-- 일반보기 --> */}
          <div className="mBoard gScroll gCellNarrow typeList">
            <table border="1" summary="" className="eChkColor">
              <caption>회원 목록</caption>
              <colgroup>
                <col className="chk" />
                <col className="date" />
                <col style={{ width: "70px" }} />
                <col style={{ width: "70px" }} />
                <col style={{ width: "70px" }} />
                <col style={{ width: "100px" }} />
                <col style={{ width: "100px" }} />
                <col style={{ width: "60px" }} />
                <col style={{ width: "70px" }} />
                <col style={{ width: "180px" }} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">
                    <input id="allChk" type="checkbox" className="allChk" checked={allChecked}
                    onChange={handleAllCheck} // 전체 선택 체크박스 핸들러 연결 
                  />
                  </th>
                  <th scope="col">등록일</th>
                  <th scope="col">이름</th>
                  <th scope="col">아이디</th>
                  <th scope="col">닉네임</th>
                  <th scope="col">전화번호</th>
                  <th scope="col">이메일</th>
                  <th scope="col">탈퇴여부</th>
                  <th scope="col">인증여부</th>
                  <th scope="col">최근 접속일</th>
                </tr>
              </thead>
              <tbody className="center">
                {(userlist || []).map((item, i) => (
                  <tr key={i}>
                    <td>
                      <input
                        type="checkbox"
                        name="use_check[]"
                        className="rowChk"
                        checked={checkedItems.includes(item.userkey)} // 개별 체크박스 상태 관리
                        onChange={(e) => handleRowCheck(e, item.userkey)} // 개별 체크박스 핸들러 연결
                      />
                    </td>
                    <td scope="row">{item.create_dtm}</td>
                    <td scope="row">
                      <Link href={`/admin/user/userEdit?userkey=${item.userkey}`}>
                        {item.name}
                      </Link>
                    </td>
                    <td scope="row">
                      <Link href={`/admin/user/userEdit?userkey=${item.userkey}`}>
                        {item.id}
                      </Link>
                    </td>
                    <td scope="row">{item.nickname}</td>
                    <td scope="row">{item.phone}</td>
                    <td scope="row">{item.email}</td>
                    <td scope="row">{item.isdeleted}</td>
                    <td scope="row">{item.isauthorized}</td>
                    <td scope="row">{item.login_dtm}</td>
                  </tr>
                ))}

                {(userlist && userlist.length === 0) && (
                  <tr>
                    <td colSpan="10" className="empty">
                      검색된 회원 내역이 없습니다.
                    </td>
                  </tr>
                )}
              </tbody>


        </table>
      </div>
      <div className="mCtrl typeFooter">
        <div className="gLeft">
          <button onClick={delete_choice} className="btnNormal">
            <span>
              <em className="icoDel"></em> 탈퇴
            </span>
          </button>
        </div>
      </div>
      <div className="mPaginate">
        {page.startPage > 1 && (
            <a href="#" onClick={() => changePage(page.startPage - page.pagePerBlock)} className="prev">
                이전 {page.pagePerBlock}페이지
            </a>
        )}
        <ol>
            {Array.from({ length: page.endPage - page.startPage + 1 }, (_, i) => page.startPage + i).map((pNum) => (
                <li key={pNum}>
                    {page.nowPage === pNum ? (
                        <strong title="현재페이지">{pNum}</strong>
                    ) : (
                        <a href="#" onClick={() => changePage(pNum)}>{pNum}</a>
                    )}
                </li>
            ))}
        </ol>
        {page.endPage < page.totalPage && (
            <a href="#" onClick={() => changePage(page.endPage + 1)} className="next">
                다음 {page.pagePerBlock}페이지
            </a>
        )}
    </div>

    </div>
  </div>
</>
  );
}
