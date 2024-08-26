"use client";
import React, { useEffect, useState } from "react";
import "/public/css/admin/user.css";
import Link from "next/link";
import axios from "axios";

export default function Page() {
  //유저 카운트
  const API_URL = "/usercount";
  const [count, setCount] = useState({});
  const [del, setDel] = useState(0);
  const [act, setAct] = useState(0);

  //유저 검색
  const API_URL_2 = "/search_user_admin";
  const [userlist, setUserlist] = useState([]);

  // 페이지 로드 시 Count
  useEffect(() => {
    getCount();
  }, []);

  function getCount() {
    axios.get(API_URL).then((response) => {
      setCount(response.data.ucvo);
      setDel(response.data.ucvo.cntNotDel);
      setAct(response.data.ucvo.cntDel);
    });
  }

  function doSrchFrm(cPage) {
    let now = cPage;
    axios
      .post(
        //API_URL_2
        `${API_URL_2}?cPage=${cPage}`
      )
      .then((response) => {
        setUserlist(response.data.ar);
      });
  }

  function delete_choice() {}

  function cg() {}
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
                        {del}
                      </Link>
                    </strong>
                    명
                  </td>
                  <td>
                    <strong className="underline txtEm">
                      <Link href="#">
                        {/* ${requestScope.ucvo.cntDel} */}
                        {act}
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
                      <select name="search_type" className="fSelect">
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
                          />
                          <span className="ec-mode-common-period-area">~</span>
                          <input
                            type="date"
                            id="regist_end_date"
                            name="regist_end_date"
                            className="fText gDate"
                            style={{ width: "100px" }}
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
                        />{" "}
                        전체
                      </label>
                      <label className="gLabel">
                        <input
                          type="radio"
                          name="del"
                          value="0"
                          className="fChk"
                        />{" "}
                        탈퇴 X
                      </label>
                      <label className="gLabel">
                        <input
                          type="radio"
                          name="del"
                          value="1"
                          className="fChk"
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
                          />
                          <span className="ec-mode-common-period-area">~</span>
                          <input
                            type="date"
                            id="recent_login_end_date"
                            name="regist_end_date"
                            className="fText gDate"
                            style={{ width: "100px" }}
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
                        />{" "}
                        전체
                      </label>
                      <label className="gLabel">
                        <input
                          type="radio"
                          name="isauthorized"
                          value="0"
                          className="fChk"
                        />{" "}
                        인증 X
                      </label>
                      <label className="gLabel">
                        <input
                          type="radio"
                          name="isauthorized"
                          value="1"
                          className="fChk"
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
              검색결과 <strong>0</strong>건
            </p>
          </div>
        </div>
        <div className="mCtrl typeHeader">
          <div className="gLeft">
            <Link href="" onClick={delete_choice()} className="btnNormal">
              <span>
                <em className="icoDel"></em> 탈퇴
              </span>
            </Link>
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
                    <input id="allChk" type="checkbox" className="allChk" />
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
                {userlist.map((item, i) => (
                  <tr key={i}>
                    <td>
                      <input
                        type="checkbox"
                        name="use_check[]"
                        className="rowChk"
                      />
                    </td>
                    <td scope="row">{item.create_dtm}</td>
                    <td scope="row">
                      <Link href={`/admin/userEdit/${item.userkey}`}>
                        {item.name}
                      </Link>
                    </td>
                    <td scope="row">
                      <Link href={`/admin/userEdit/${item.userkey}`}>
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
              </tbody>
            </table>
            <p className="empty" style={{ display: "block" }}>
              검색된 회원 내역이 없습니다.
            </p>
          </div>
          <div className="mCtrl typeFooter">
            <div className="gLeft">
              <Link href="" onClick={delete_choice()} className="btnNormal">
                <span>
                  <em className="icoDel"></em> 탈퇴
                </span>
              </Link>
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
    </>
  );
}
