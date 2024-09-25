"use client";

import React, { useEffect, useState } from "react";
import "/public/css/admin/board.css";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function page() {
  const API_URL = "/admin/board/list";
  const BC_URL = "/admin/board/getAllBc";
  const DEL_URL = "/admin/board/chkDel";

  const router = useRouter();

  const [list, setList] = useState([]);
  const [bc_list, setBc_list] = useState([]);
  const [title, setTitle] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [create_start_date, setCreate_start_date] = useState("");
  const [create_end_date, setCreate_end_date] = useState("");
  const [allChecked, setAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [page, setPage] = useState({});

  function getData(cPage) {
    axios({
      url: `${API_URL}?cPage=${cPage}`,
      method: "post",
      params: {
        title: title,
        categoryName: categoryName,
        create_start_date: create_start_date,
        create_end_date: create_end_date,
      },
    })
      .then((res) => {
        setList(res.data.b_ar);
        setPage(res.data.page);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setList([]);
          setPage({});
        }
      });
  }

  useEffect(() => {
    axios
      .get(BC_URL)
      .then((res) => {
        setBc_list(res.data.bc_list);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setBc_list([]);
        }
      });
  }, []);

  function changePage(pNum) {
    getData(pNum);
  }

  const handleAllCheck = (e) => {
    const checked = e.target.checked;
    setAllChecked(checked);
    if (checked) {
      const allCheckedItems = list.map((item) => item.boardkey);
      setCheckedItems(allCheckedItems);
    } else {
      setCheckedItems([]);
    }
  };

  const handleRowCheck = (e, boardkey) => {
    const checked = e.target.checked;
    let updatedCheckedItems = [...checkedItems];
    if (checked) {
      updatedCheckedItems.push(boardkey);
    } else {
      updatedCheckedItems = updatedCheckedItems.filter(
        (item) => item !== boardkey
      );
    }
    setCheckedItems(updatedCheckedItems);
    setAllChecked(updatedCheckedItems.length === list.length);
  };

  function delete_choice() {
    if (checkedItems.length === 0) {
      alert("삭제할 게시글을 선택해 주세요.");
      return;
    }
    axios
      .post(DEL_URL, checkedItems)
      .then((res) => {
        alert("삭제 완료");
        getData(0);
      })
      .catch((error) => {
        console.error("삭제 중 오류가 발생했습니다.", error);
      });
  }

  //categorykey -> name으로 변경
  const categoryMap = bc_list.reduce((map, bc) => {
    map[bc.key] = bc.value; // bc.key로 bc.value를 매핑
    return map;
  }, {});

  return (
    <>
      <form name="frm" id="frm" method="post">
        <div className="headingArea">
          <div className="mTitle">
            <h1>게시글 관리</h1>
          </div>
        </div>
        <div className="section">
          <div className="mTitle">
            <h2>게시글 검색</h2>
          </div>
          <div className="mBoard gSmall typeSearch">
            <table border="1" summary="">
              <caption>게시글 검색</caption>
              <tbody>
                <tr>
                  <th scope="row" className="th-center-bold">
                    작성일
                  </th>
                  <td>
                    <div style={{ float: "left" }}>
                      <span
                        className="gLabel"
                        style={{ float: "left", marginLeft: "5px" }}
                      >
                        <input
                          type="date"
                          id="create_start_date"
                          name="create_start_date"
                          className="fText gDate"
                          style={{ width: "100px" }}
                          onChange={(e) => setCreate_start_date(e.target.value)}
                        />
                        <span className="ec-mode-common-period-area"> ~ </span>
                        <input
                          type="date"
                          id="create_end_date"
                          name="create_end_date"
                          className="fText gDate"
                          style={{ width: "100px" }}
                          onChange={(e) => setCreate_end_date(e.target.value)}
                        />
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="th-center-bold">
                    게시판 선택
                  </th>
                  <td>
                    <select
                      className="fSelect"
                      id="sel_board_no"
                      name="sel_board_no"
                      onChange={(e) => setCategoryName(e.target.value)}
                    >
                      <option value="">전체</option>
                      {bc_list.map((bc, i) => (
                        <option key={i} value={bc.value}>
                          {bc.value}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="th-center-bold">
                    게시글 제목
                  </th>
                  <td>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      className="fText"
                      style={{ width: "400px" }}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mButton gCenter">
            <a id="eBtnSearch" onClick={() => getData(1)} className="btnSearch">
              <span>검색</span>
            </a>
          </div>
          <input type="hidden" name="page" />
        </div>
      </form>
      <div className="section">
        <div
          className="mTitle"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            className="gLeft"
            style={{ display: "flex", alignItems: "center" }}
          >
            <h2 style={{ marginRight: "10px" }}>게시글 목록</h2>
            <p className="total">
              (검색결과{" "}
              <strong style={{ color: "blue" }}>{page.totalRecord || 0}</strong>{" "}
              건)
            </p>
          </div>
          <div
            className="gRight"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span className="txtLess"></span>
            <a
              id="eBtnSearch"
              onClick={() => router.push("/admin/bbs/post/add")}
              className="btnSearch"
              style={{ marginRight: "10px" }}
            >
              <span>작성</span>
            </a>
            <a id="eBtnSearch" onClick={delete_choice} className="btnSearch">
              <span>삭제</span>
            </a>
          </div>
        </div>
        <div className="mBoard gScroll gCell typeList">
          <table border="1" summary="" className="eChkTr">
            <caption>게시글 목록</caption>
            <colgroup>
              <col className="chk" />
              <col style={{ width: "80px" }} />
              <col style={{ width: "90px" }} />
              <col style={{ width: "250px" }} />
              <col style={{ width: "140px" }} />
              <col style={{ width: "140px" }} />
              <col style={{ width: "90px" }} />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">
                  <input
                    type="checkbox"
                    className="allChk"
                    checked={allChecked}
                    onChange={handleAllCheck}
                  />
                </th>
                <th scope="col" className="th-center-bold">
                  번호
                </th>
                <th scope="col" className="th-center-bold">
                  분류
                </th>
                <th scope="col" className="th-center-bold">
                  제목
                </th>
                <th scope="col" className="th-center-bold">
                  작성일
                </th>
                <th scope="col" className="th-center-bold">
                  수정일
                </th>
                <th scope="col" className="th-center-bold">
                  조회
                </th>
              </tr>
            </thead>
            <tbody>
              {list && list.length > 0 ? (
                list.map((ar, i) => (
                  <tr key={i} style={{ textAlign: "center" }}>
                    <td>
                      <input
                        type="checkbox"
                        className="rowChk"
                        name="use_board[]"
                        value={ar.boardkey}
                        checked={checkedItems.includes(ar.boardkey)}
                        onChange={(e) => handleRowCheck(e, ar.boardkey)}
                      />
                    </td>
                    <td
                      onClick={() =>
                        router.push(`/admin/bbs/post/detail/${ar.boardkey}`)
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {(page.nowPage - 1) * page.numPerPage + i + 1}
                    </td>
                    <td>{categoryMap[ar.categorykey] || "X"}</td>
                    <td
                      onClick={() =>
                        router.push(`/admin/bbs/post/detail/${ar.boardkey}`)
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {ar.title}
                    </td>
                    <td>{ar.create_dtm}</td>
                    <td>{ar.update_dtm}</td>
                    <td>{ar.viewqty}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">게시글이 없습니다.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="mPaginate">
          {page.startPage > 1 && (
            <a
              href="#"
              onClick={() => changePage(page.startPage - page.pagePerBlock)}
              className="prev"
            >
              이전 {page.pagePerBlock}페이지
            </a>
          )}
          <ol>
            {Array.from(
              { length: page.endPage - page.startPage + 1 },
              (_, i) => page.startPage + i
            ).map((pNum) => (
              <li key={pNum}>
                {page.nowPage == pNum ? (
                  <strong title="현재페이지">{pNum}</strong>
                ) : (
                  <a href="#" onClick={() => changePage(pNum)}>
                    {pNum}
                  </a>
                )}
              </li>
            ))}
          </ol>
          {page.endPage < page.totalPage && (
            <a
              href="#"
              onClick={() => changePage(page.endPage + 1)}
              className="next"
            >
              다음 {page.pagePerBlock}페이지
            </a>
          )}
        </div>
      </div>
    </>
  );
}
