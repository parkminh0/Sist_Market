"use client";
import React, { useEffect, useState } from "react";
import "/public/css/admin/user.css";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [userkey, setUserkey] = useState(0);
  const DEL_URL = `/user/api/admin/userDel?userkey=${userkey}`;
  const EDIT_URL = `/user/api/admin/userEditReal?userkey=${userkey}`;
  const [ar, setAR] = useState({});
  const [pw, setPW] = useState("");
  const [name, setNAME] = useState("");
  const [email, setEMAIL] = useState("");
  const [phone, setPHONE] = useState("");

  const [p_list, setP_list] = useState([]);
  const [m_list, setM_list] = useState([]);
  const [l_list, setL_list] = useState([]);
  const [ub_list, setUb_list] = useState([]);
  const [b_list, setB_list] = useState([]);
  const [n_list, setN_list] = useState([]);
  const [a_list, setA_list] = useState([]);
  const [s_list, setS_list] = useState([]);
  const [w_list, setW_list] = useState([]);
  const [k_list, setK_list] = useState([]);

  function deleteUser() {
    axios.get(DEL_URL).then((res) => {
      if (res.data.str === "success") {
        const userConfirmed = window.confirm(
          "회원 탈퇴가 완료되었습니다. 페이지를 이동하시겠습니까?"
        );
        if (userConfirmed) {
          router.push("/user/admin/user");
        } else {
          alert("탈퇴가 불가능 합니다.");
        }
      }
    });
  }

  function editUser() {
    axios({
      url: `${EDIT_URL}`,
      method: "post",
      params: {
        pw: pw,
        name: name,
        email: email,
        phone: phone,
      },
    }).then((res) => {
      if (res.data.str === "success") {
        alert("회원정보가 수정되었습니다.");
        const userConfirmed = window.confirm(
          "회원 수정이 완료되었습니다. 페이지를 이동하시겠습니까?"
        );
        if (userConfirmed) {
          router.push("/admin/user");
        }
      } else {
        alert("수정이 불가능 합니다.");
      }
    });
  }

  useEffect(() => {
    let currentUrl = window.location.href;
    let currentUrlObj = new URL(currentUrl);
    let params = new URLSearchParams(currentUrlObj.search);
    const userkeyParam = params.get("userkey");
    setUserkey(userkeyParam);
  }, []);

  useEffect(() => {
    if (userkey) {
      const API_URL = `/user/api/admin/userEdit?userkey=${userkey}`;
      axios.get(API_URL).then((res) => {
        setAR(res.data.ar);
        setPW(res.data.ar.pw || "");
        setNAME(res.data.ar.name || "");
        setEMAIL(res.data.ar.email || "");
        setPHONE(res.data.ar.phone || "");

        setP_list(res.data.ar.p_list || []);
        setM_list(res.data.ar.m_list || []);
        setL_list(res.data.ar.l_list || []);
        setUb_list(res.data.ar.ub_list || []);
        setB_list(res.data.ar.b_list || []);
        setN_list(res.data.ar.n_list || []);
        setA_list(res.data.ar.a_list || []);
        setS_list(res.data.ar.s_list || []);
        setW_list(res.data.ar.w_list || []);
        setK_list(res.data.ar.k_list || []);
      });
    }
  }, [userkey]);

  return (
    <div id="wrap">
      <style jsx>{`
        #wrap {
          margin: 0 auto;
          max-width: 1200px;
        }

        #container {
          margin: 0 auto;
          padding-left: 20px;
        }
      `}</style>

      <div id="content">
        <div className="headingArea">
          <div className="mTitle">
            <h1>회원 정보</h1>
          </div>
        </div>

        <div className="section" id="QA_register2">
          <div className="mToggleBar eToggle selected" id="basic">
            <h2 className="eToggleTitle">기본 정보</h2>
          </div>
          <div className="toggleArea" style={{ display: "block" }}>
            <div className="mBoard typeProduct">
              <form id="editForm" name="editForm" action="#" method="post">
                <table summary="회원 기본 정보">
                  <caption>회원 기본 정보</caption>
                  <colgroup>
                    <col className="product" />
                    <col style={{ width: "auto" }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">유저번호</th>
                      <td>
                        <span
                          className="fText eMarketChecker eHasModifyProductAuth"
                          style={{ width: "400px", display: "inline-block" }}
                        >
                          {ar.userkey || ""}
                        </span>
                      </td>

                    </tr>
                    <tr>
                      <th scope="row">아이디</th>
                      <td>
                        <span
                          className="fText eMarketChecker"
                          style={{ width: "400px", display: "inline-block" }}
                        >
                          {ar.id || ""}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">비밀번호</th>
                      <td>
                        <input
                          type="text"
                          name="pw"
                          className="fText eMarketChecker"
                          style={{ width: "150px" }}
                          value={pw}
                          onChange={(e) => {
                            setPW(e.target.value);
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">이름</th>
                      <td>
                        <input
                          type="text"
                          name="name"
                          className="fText eMarketChecker"
                          style={{ width: "150px" }}
                          value={name}
                          onChange={(e) => {
                            setNAME(e.target.value);
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">이메일</th>
                      <td>
                        <input
                          type="text"
                          name="email"
                          className="fText eMarketChecker"
                          style={{ width: "150px" }}
                          value={email}
                          onChange={(e) => {
                            setEMAIL(e.target.value);
                          }}
                          onBlur={() => {
                            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                            if (!emailPattern.test(email)) {
                              alert("올바른 이메일 주소를 입력하세요.");
                              setEMAIL("");
                            }
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">전화번호</th>
                      <td>
                        <input
                          type="tel"
                          name="phone"
                          className="fText eMarketChecker"
                          style={{ width: "150px" }}
                          value={phone}
                          onChange={(e) => {
                            setPHONE(e.target.value);
                          }}
                          onKeyPress={(e) => {
                            const charCode = e.which ? e.which : e.keyCode;
                            if (charCode < 48 || charCode > 57) {
                              e.preventDefault();
                              alert("숫자만 입력할 수 있습니다.");
                            }
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                    <th scope="row">가입일</th>
                    <td>
                      <span
                        className="fText eMarketChecker"
                        style={{ width: "400px", display: "inline-block" }}
                      >
                        {ar.create_dtm || ""}
                      </span>
                    </td>
                   
                    </tr>
                    <tr>
                      <th scope="row">삭제일</th>
                      <td>
                        <span
                          className="fText eMarketChecker"
                          style={{ width: "400px", display: "inline-block" }}
                        >
                          {ar.del_dtm || ""}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>

        <div className="mButton gCenter" style={{ marginBottom: "20px" }}>
          <a onClick={editUser} className="btnSubmit" id="eProductRegister">
            <span>회원수정</span>
          </a>
          <a
            onClick={deleteUser}
            className="btnEm btnPreview"
            id="eProductRegister"
          >
            <span>회원탈퇴</span>
          </a>
        </div>

        {/* 게시글 정보 테이블 */}
        <div className="section" id="QA_register2">
          <div className="mToggleBar eToggle selected" id="basic">
            <h2 className="eToggleTitle">게시글 정보</h2>
          </div>
          <div className="toggleArea" style={{ display: "block" }}>
            <div className="mBoard typeProduct">
              <table summary="게시글 정보">
                <caption>게시글 정보</caption>
                <colgroup>
                  <col className="product" />
                  <col style={{ width: "auto" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">게시글 키</th>
                    <th scope="col">제목</th>
                  </tr>
                </thead>
                <tbody>
                  {p_list.length > 0 ? (
                    p_list.map((post, postkey) => (
                      <tr key={postkey}>
                        <td
                          className="fText eMarketChecker eHasModifyProductAuth"
                          style={{ textAlign: "center" }}
                        >
                          {post.postkey || ""}
                        </td>
                        <td
                          className="fText eMarketChecker eHasModifyProductAuth"
                          style={{ textAlign: "center" }}
                        >
                          {post.title || ""}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2" style={{ textAlign: "center" }}>
                        게시글이 없습니다.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        

        {/* 매너 평가 테이블 */}
        <div className="section" id="QA_register2">
          <div className="mToggleBar eToggle selected" id="basic">
            <h2 className="eToggleTitle">매너 평가</h2>
          </div>
          <div className="toggleArea" style={{ display: "block" }}>
            <div className="mBoard typeProduct">
              <table summary="매너 평가 목록">
                <caption>매너 평가 목록</caption>
                <colgroup>
                  <col className="product" />
                  <col style={{ width: "auto" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">평가자 키</th>
                    <th scope="col">매너</th>
                  </tr>
                </thead>
                <tbody>
                  {m_list.length > 0 ? (
                    m_list.map((manner, index) => (
                      <tr key={index}>
                        <td
                          className="fText eMarketChecker eHasModifyProductAuth"
                          style={{ textAlign: "center" }}
                        >
                          {manner.estimateuserkey || ""}
                        </td>
                        <td
                          className="fText eMarketChecker eHasModifyProductAuth"
                          style={{ textAlign: "center" }}
                        >
                          {manner.ismanner ? "좋음" : "나쁨"}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2" style={{ textAlign: "center" }}>
                        매너 평가가 없습니다.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 좋아요 사용자 목록 테이블 */}
        <div className="section" id="QA_register2">
          <div className="mToggleBar eToggle selected" id="basic">
            <h2 className="eToggleTitle">좋아요 사용자 목록</h2>
          </div>
          <div className="toggleArea" style={{ display: "block" }}>
            <div className="mBoard typeProduct">
              <table summary="좋아하는 사용자 목록">
                <caption>좋아하는 사용자 목록</caption>
                <colgroup>
                  <col className="product" />
                  <col style={{ width: "auto" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">사용자 키</th>
                    <th scope="col">생성 날짜</th>
                  </tr>
                </thead>
                <tbody>
                  {l_list.length > 0 ? (
                    l_list.map((likeUser, index) => (
                      <tr key={index}>
                        <td
                          className="fText eMarketChecker eHasModifyProductAuth"
                          style={{ textAlign: "center" }}
                        >
                          {likeUser.likeuserkey || ""}
                        </td>
                        <td
                          className="fText eMarketChecker eHasModifyProductAuth"
                          style={{ textAlign: "center" }}
                        >
                          {likeUser.create_dtm || ""}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2" style={{ textAlign: "center" }}>
                        좋아요 사용자가 없습니다.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 사용자 뱃지 목록 테이블 */}
        <div className="section" id="QA_register2">
          <div className="mToggleBar eToggle selected" id="basic">
            <h2 className="eToggleTitle">사용자 뱃지 목록</h2>
          </div>
          <div className="toggleArea" style={{ display: "block" }}>
            <div className="mBoard typeProduct">
              <table summary="사용자 뱃지 목록">
                <caption>사용자 뱃지 목록</caption>
                <colgroup>
                  <col className="product" />
                  <col style={{ width: "auto" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">뱃지 키</th>
                    <th scope="col">생성 날짜</th>
                  </tr>
                </thead>
                <tbody>
                  {ub_list.length > 0 ? (
                    ub_list.map((badge, index) => (
                      <tr key={index}>
                        <td
                          className="fText eMarketChecker eHasModifyProductAuth"
                          style={{ textAlign: "center" }}
                        >
                          {badge.badgekey || ""}
                        </td>
                        <td
                          className="fText eMarketChecker eHasModifyProductAuth"
                          style={{ textAlign: "center" }}
                        >
                          {badge.create_dtm || ""}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2" style={{ textAlign: "center" }}>
                        사용자 뱃지가 없습니다.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 차단 사용자 목록 테이블 */}
        <div className="section" id="QA_register2">
          <div className="mToggleBar eToggle selected" id="basic">
            <h2 className="eToggleTitle">차단 사용자 목록</h2>
          </div>
          <div className="toggleArea" style={{ display: "block" }}>
            <div className="mBoard typeProduct">
              <table summary="차단 사용자 목록">
                <caption>차단 사용자 목록</caption>
                <colgroup>
                  <col className="product" />
                  <col style={{ width: "auto" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">차단 사용자 키</th>
                    <th scope="col">차단 날짜</th>
                  </tr>
                </thead>
                <tbody>
                  {b_list.length > 0 ? (
                    b_list.map((blockedUser, index) => (
                      <tr key={index}>
                        <td
                          className="fText eMarketChecker eHasModifyProductAuth"
                          style={{ textAlign: "center" }}
                        >
                          {blockedUser.blockeduserkey || ""}
                        </td>
                        <td
                          className="fText eMarketChecker eHasModifyProductAuth"
                          style={{ textAlign: "center" }}
                        >
                          {blockedUser.create_dtm || ""}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2" style={{ textAlign: "center" }}>
                        차단된 사용자가 없습니다.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 미노출 사용자 목록 테이블 */}
        <div className="section" id="QA_register2">
          <div className="mToggleBar eToggle selected" id="basic">
            <h2 className="eToggleTitle">미노출 사용자 목록</h2>
          </div>
          <div className="toggleArea" style={{ display: "block" }}>
            <div className="mBoard typeProduct">
              <table summary="게시글 미노출 사용자 목록">
                <caption>게시글 미노출 사용자 목록</caption>
                <colgroup>
                  <col className="product" />
                  <col style={{ width: "auto" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">미노출 사용자 키</th>
                    <th scope="col">생성 날짜</th>
                  </tr>
                </thead>
                <tbody>
                  {n_list.length > 0 ? (
                    n_list.map((noseeUser, index) => (
                      <tr key={index}>
                        <td
                          className="fText eMarketChecker eHasModifyProductAuth"
                          style={{ textAlign: "center" }}
                        >
                          {noseeUser.noseeuserkey || ""}
                        </td>
                        <td
                          className="fText eMarketChecker eHasModifyProductAuth"
                          style={{ textAlign: "center" }}
                        >
                          {noseeUser.create_dtm || ""}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2" style={{ textAlign: "center" }}>
                        미노출 사용자가 없습니다.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 주소 정보 테이블 */}
        <div className="section" id="QA_register2">
          <div className="mToggleBar eToggle selected" id="basic">
            <h2 className="eToggleTitle">주소 정보</h2>
          </div>
          <div className="toggleArea" style={{ display: "block" }}>
            <div className="mBoard typeProduct">
              <table summary="주소 정보">
                <caption>주소 정보</caption>
                <colgroup>
                  <col className="product" />
                  <col style={{ width: "auto" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">주소 키</th>
                    <th scope="col">범위</th>
                    <th scope="col">알림 여부</th>
                  </tr>
                </thead>
                <tbody>
                  {a_list.length > 0 ? (
                    a_list.map((address, index) => (
                      <tr key={index}>
                        <td
                          className="fText eMarketChecker eHasModifyProductAuth"
                          style={{ textAlign: "center" }}
                        >
                          {address.addresskey || ""}
                        </td>
                        <td
                          className="fText eMarketChecker eHasModifyProductAuth"
                          style={{ textAlign: "center" }}
                        >
                          {address.range || ""}
                        </td>
                        <td
                          className="fText eMarketChecker eHasModifyProductAuth"
                          style={{ textAlign: "center" }}
                        >
                          {address.isalarm ===0 ? "예" : "아니오"}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" style={{ textAlign: "center" }}>
                        주소 정보가 없습니다.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 알람 설정 정보 테이블 */}
        <div className="section" id="QA_register2">
          <div className="mToggleBar eToggle selected" id="basic">
            <h2 className="eToggleTitle">알람 설정 정보</h2>
          </div>
          <div className="toggleArea" style={{ display: "block" }}>
            <div className="mBoard typeProduct">
              <table summary="알람 설정 정보">
                <caption>알람 설정 정보</caption>
                <colgroup>
                  <col className="product" />
                  <col style={{ width: "auto" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">알람 키</th>
                    <th scope="col">알람 여부</th>
                  </tr>
                </thead>
                <tbody>
                  {s_list.length > 0 ? (
                    s_list.map((setAlarm, index) => (
                      <tr key={index}>
                        <td
                          className="fText eMarketChecker eHasModifyProductAuth"
                          style={{ textAlign: "center" }}
                        >
                          {setAlarm.setalarmkey || ""}
                        </td>
                        <td
                          className="fText eMarketChecker eHasModifyProductAuth"
                          style={{ textAlign: "center" }}
                        >
                          {setAlarm.isalarm ? "예" : "아니오"}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2" style={{ textAlign: "center" }}>
                        알람 설정 정보가 없습니다.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 관심 목록 테이블 */}
        <div className="section" id="QA_register2">
          <div className="mToggleBar eToggle selected" id="basic">
            <h2 className="eToggleTitle">관심 목록</h2>
          </div>
          <div className="toggleArea" style={{ display: "block" }}>
            <div className="mBoard typeProduct">
              <table summary="관심 목록">
                <caption>관심 목록</caption>
                <colgroup>
                  <col className="product" />
                  <col style={{ width: "auto" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">위시리스트 키</th>
                    <th scope="col">생성 날짜</th>
                  </tr>
                </thead>
                <tbody>
                  {w_list.length > 0 ? (
                    w_list.map((wishlist, index) => (
                      <tr key={index}>
                        <td
                          className="fText eMarketChecker eHasModifyProductAuth"
                          style={{ textAlign: "center" }}
                        >
                          {wishlist.wishlistkey || ""}
                        </td>
                        <td
                          className="fText eMarketChecker eHasModifyProductAuth"
                          style={{ textAlign: "center" }}
                        >
                          {wishlist.create_dtm || ""}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2" style={{ textAlign: "center" }}>
                        관심 목록이 없습니다.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 키워드 정보 테이블 */}
        <div className="section" id="QA_register2">
          <div className="mToggleBar eToggle selected" id="basic">
            <h2 className="eToggleTitle">키워드 목록</h2>
          </div>
          <div className="toggleArea" style={{ display: "block" }}>
            <div className="mBoard typeProduct">
              <table summary="키워드 목록">
                <caption>키워드 목록</caption>
                <colgroup>
                  <col className="product" />
                  <col style={{ width: "auto" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">키워드 키</th>
                    <th scope="col">키워드 내용</th>
                  </tr>
                </thead>
                <tbody>
                  {k_list.length > 0 ? (
                    k_list.map((keyword, index) => (
                      <tr key={index}>
                        <td
                          className="fText eMarketChecker eHasModifyProductAuth"
                          style={{ textAlign: "center" }}
                        >
                          {keyword.keywordkey || ""}
                        </td>
                        <td
                          className="fText eMarketChecker eHasModifyProductAuth"
                          style={{ textAlign: "center" }}
                        >
                          {keyword.content || ""}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2" style={{ textAlign: "center" }}>
                        키워드가 없습니다.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}
