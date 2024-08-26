"use client";
import React, { useEffect, useState } from "react";
import "/public/css/admin/user.css";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Page(props) {
  const router = useRouter();

  const API_URL = `/api/admin/userEdit?userkey=${props.userkey}`;
  //const API_URL = `/user/api/admin/userEdit?userkey=2`;
  const [ar, setAR] = useState({});

  function getData() {
    axios.get(API_URL).then((res) => {
      setAR(res.data.ar);
    });
  }

  function deleteUser() {}
  function editUser() {}

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div>
      <div id="wrap" className="beta">
        <hr className="layout" />
        <div id="container">
          <div id="sidebar">
            <div className="logo">
              <h1>
                <a href="#">
                  <img
                    src="/shop/layout/header/img/logo_off_new.png"
                    alt="logo"
                    className="off -mov"
                    width="200"
                  />
                </a>
              </h1>
            </div>
            <div className="snbArea simple">
              <div id="menuList" className="eCustomScrollbar">
                <div
                  id="mCSB_2"
                  className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                >
                  <div
                    id="mCSB_2_container"
                    className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                    style={{ position: "relative", top: 0, left: 0 }}
                  >
                    <ul className="menu">
                      <li>
                        <a
                          id="QA_Lnb_Menu10258"
                          href="#"
                          className="link home"
                          name="홈"
                        >
                          홈
                        </a>
                      </li>
                      <li className="hasChild">
                        <a
                          id="QA_Lnb_Menu1681"
                          href="#"
                          className="link order"
                          name="주문"
                        >
                          주문
                        </a>
                      </li>
                      <li className="hasChild show">
                        <a
                          id="QA_Lnb_Menu2056"
                          href="#"
                          className="link product"
                          name="상품"
                        >
                          상품
                        </a>
                      </li>
                      <li className="hasChild">
                        <a
                          id="QA_Lnb_Menu6"
                          href="#"
                          className="link member"
                          name="고객"
                        >
                          고객
                        </a>
                      </li>
                      <li className="hasChild">
                        <a
                          id="QA_Lnb_Menu7"
                          href="#"
                          className="link board"
                          name="게시판"
                        >
                          게시판
                        </a>
                      </li>
                      <li className="hasChild">
                        <a
                          id="QA_Lnb_Menu1250"
                          href="#"
                          className="link promotion"
                          name="프로모션"
                        >
                          쿠폰
                        </a>
                      </li>
                      <li className="hasChild">
                        <a
                          id="QA_Lnb_Menu2060"
                          href="#"
                          className="link calculate"
                          name="통계"
                        >
                          통계
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="subMenu eClone eCustomScrollbar mCustomScrollbar _mCS_3 mCS-autoHide mCS_no_scrollbar">
                <div
                  id="mCSB_3"
                  className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                  style={{ maxHeight: "1016px" }}
                >
                  <div
                    id="mCSB_3_container"
                    className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                    style={{ position: "relative", top: 0, left: 0 }}
                    dir="ltr"
                  >
                    <div className="depthList">
                      <ul className="depth2">
                        <li>
                          <a id="QA_Lnb_Menu10394" className="link">
                            <span className="ellips">회원 조회</span>
                          </a>
                        </li>
                        <li className="selected">
                          <a id="QA_Lnb_Menu10394" href="#" className="link">
                            <span className="ellips">회원 정보</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="layout" />
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
                    <table border="1" summary="">
                      <caption>회원 기본 정보</caption>
                      <colgroup>
                        <col className="product" />
                        <col style={{ width: "auto" }} />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">유저번호</th>
                          <td>
                            <div className="gIcoShop">
                              <div className="overlapTip">
                                <input
                                  type="text"
                                  name="userkey"
                                  readOnly
                                  className="fText eMarketChecker eHasModifyProductAuth"
                                  style={{ width: "400px" }}
                                  value="${ar.userkey}"
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">아이디</th>
                          <td>
                            <div className="gIcoShop">
                              <input
                                type="text"
                                name="id"
                                className="fText eMarketChecker"
                                style={{ width: "400px" }}
                                value="${ar.id}"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">비밀번호</th>
                          <td>
                            <div className="gIcoShop">
                              <input
                                type="text"
                                name="pw"
                                className="fText eMarketChecker"
                                style={{ width: "400px" }}
                                value="${ar.pw}"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">이름</th>
                          <td>
                            <div className="gIcoShop">
                              <input
                                type="text"
                                name="name"
                                className="fText eMarketChecker"
                                style={{ width: "400px" }}
                                value="${ar.name}"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">이메일</th>
                          <td>
                            <div className="gIcoShop">
                              <input
                                type="text"
                                name="email"
                                className="fText eMarketChecker"
                                style={{ width: "400px" }}
                                value="${ar.email}"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">전화번호</th>
                          <td>
                            <div className="gIcoShop">
                              <input
                                type="text"
                                name="phone"
                                className="fText eMarketChecker"
                                style={{ width: "400px" }}
                                value="${ar.phone}"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">가입일</th>
                          <td>
                            <div className="gIcoShop">
                              <input
                                type="text"
                                name="reg_dtm"
                                readOnly
                                className="fText eMarketChecker"
                                style={{ width: "400px" }}
                                value="${ar.create_dtm}"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">삭제일</th>
                          <td>
                            <div className="gIcoShop">
                              <input
                                type="text"
                                name="del_dtm"
                                className="fText eMarketChecker"
                                style={{ width: "400px" }}
                                value="${ar.del_dtm}"
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>
            </div>
            <div className="mButton gCenter">
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
          </div>
        </div>
      </div>
    </div>
  );
}
