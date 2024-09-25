"use client";

import React, { useEffect, useState } from "react";
import "/public/css/admin/board.css";
import axios from "axios";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

export default function Page() {
  const API_URL = "/admin/board/getAllBc";
  const ADD_URL = "/admin/board/addBc";
  const EDIT_URL = "/admin/board/editBc";
  const DEL_URL = "/admin/board/chkDelBc";

  const [list, setList] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [value, setValue] = useState("");
  const [key, setKey] = useState("");

  function getData() {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setList(res.data.bc_list);
        setCheckedItems([]);
        setAllChecked(false);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setList([]);
        }
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const handleAllCheck = (e) => {
    const checked = e.target.checked;
    setAllChecked(checked);
    if (checked) {
      const allCheckedItems = list.map((item) => item.value);
      setCheckedItems(allCheckedItems);
    } else {
      setCheckedItems([]);
    }
  };

  const handleRowCheck = (e, value) => {
    const checked = e.target.checked;
    let updatedCheckedItems = [...checkedItems];
    if (checked) {
      console.log(value);
      updatedCheckedItems.push(value);
    } else {
      updatedCheckedItems = updatedCheckedItems.filter(
        (item) => item !== value
      );
    }
    setCheckedItems(updatedCheckedItems);
    setAllChecked(updatedCheckedItems.length == list.length);
  };

  function addOrEditBc() {
    if (value == null) {
      alert("카테고리명을 입력해 주세요.");
      return;
    }
    const url = modalMode == "add" ? ADD_URL : EDIT_URL;
    const data = {
      key: key,
      value: value,
    };
    axios({
      url: url,
      method: "post",
      params: data,
    })
      .then((res) => {
        alert(modalMode == "add" ? "추가 완료" : "수정 완료");
        setValue("");
        setModalOpen(false);
        getData();
      })
      .catch((error) => {
        console.error(
          modalMode == "add"
            ? "추가 중 오류가 발생했습니다."
            : "수정 중 오류가 발생했습니다.",
          error
        );
      });
  }

  function delete_choice() {
    if (checkedItems.length == 0) {
      alert("삭제할 카테고리을 선택해 주세요.");
      return;
    }
    const confirmation = confirm(
      "삭제할 카테고리에 해당하는 게시글들이 같이 삭제됩니다. \n계속 진행하시겠습니까?"
    );
    if (!confirmation) {
      return;
    }
    axios
      .post(DEL_URL, checkedItems)
      .then((res) => {
        alert("삭제 완료");
        getData();
      })
      .catch((error) => {
        console.error("삭제 중 오류가 발생했습니다.", error);
      });
  }

  function openModalForEdit(key, value) {
    setKey(key);
    setValue(value);
    setModalMode("edit");
    setModalOpen(true);
  }

  return (
    <>
      <div className="headingArea gSubmain">
        <div className="mTitle" style={{ marginBottom: "50px" }}>
          <h1>게시판 카테고리 관리</h1>
        </div>
      </div>
      <div className="dashMain">
        <div className="mTitle">
          <h2>게시글 작성 현황</h2>
        </div>
        <div className="mDashGrid gFlex3">
          <div className="grid">
            <div className="mBoard">
              <table border="1" summary="">
                <colgroup>
                  <col style={{ width: "125px" }} />
                  <col style={{ width: "auto" }} />
                </colgroup>
                <tbody className="right">
                  {list && list.length > 0 ? (
                    list.map((ar, i) => (
                      <tr key={i}>
                        <th scope="row" style={{ fontWeight: "bold" }}>
                          {ar.value}
                        </th>
                        <td>
                          <strong className="txtEm">{ar.count}</strong>
                          <span className="txtLight">개</span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2" style={{ textAlign: "center" }}>
                        게시글 작성 현황이 없습니다.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
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
            <h2 style={{ marginRight: "10px" }}>게시판 목록</h2>
          </div>
          <div
            className="gRight"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span className="txtLess"></span>
            <a
              id="eBtnSearch"
              onClick={() => {
                setModalMode("add");
                setValue("");
                setModalOpen(true);
              }}
              className="btnSearch"
              style={{ marginRight: "10px" }}
            >
              <span>추가</span>
            </a>
            <a id="eBtnSearch" onClick={delete_choice} className="btnSearch">
              <span>삭제</span>
            </a>
          </div>
        </div>
        <div className="mBoard gScroll gCell">
          <table border="1" summary="" className="eChkTr">
            <caption>게시판 목록</caption>
            <colgroup>
              <col className="chk" />
              <col style={{ width: "110px" }} />
              <col style={{ width: "250px" }} />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">
                  <input
                    type="checkbox"
                    className="allChk"
                    checked={allChecked}
                    onChange={(e) => handleAllCheck(e)}
                  />
                </th>
                <th scope="col" style={{ fontWeight: "bold" }}>
                  게사판 카테고리 번호
                </th>
                <th scope="col" style={{ fontWeight: "bold" }}>
                  게시판 카테고리명
                </th>
              </tr>
            </thead>
            <tbody className="center">
              {list && list.length > 0 ? (
                list.map((ar, i) => (
                  <tr key={i}>
                    <td>
                      <input
                        type="checkbox"
                        className="rowChk"
                        name="use_board[]"
                        value={ar.value}
                        checked={checkedItems.includes(ar.value)}
                        onChange={(e) => handleRowCheck(e, ar.value)}
                      />
                    </td>
                    <td onClick={() => openModalForEdit(ar.key, ar.value)}>
                      {ar.key}
                    </td>
                    <td onClick={() => openModalForEdit(ar.key, ar.value)}>
                      {ar.value}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">게시판 카테고리가 없습니다.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* <span id="admngDebug"><script id="admngEffectScript" type="text/javascript" charset="utf-8" src="https://ad.cafe24.com/adManager/util/javascript/adMngEffect.js?ver=1.0.0"></script><script id="cookieScript" type="text/javascript" charset="utf-8" src="https://ad.cafe24.com/adManager/util/javascript/adMngCookie.js?ver=1.0.0"></script><script id="admngLayerScript" type="text/javascript" charset="utf-8" src="https://ad.cafe24.com/adManager/util/javascript/adMngLayer.js?ver=1.0.0"></script><link id="admngCSS" type="text/css" rel="stylesheet" href="https://ad.cafe24.com/adManager/util/javascript/admngCSS.css?ver=1.0.0"/><script id="admngURLLog" type="text/javascript" src="https://ad.cafe24.com/adManager/controller/ConclusionURLAD.php?siteType=malladmin&amp;url=https%3A%2F%2Fsist001.cafe24.com%2Fadmin%2Fphp%2Fshop1%2Fb%2Fboard_admin_l.php"></script><script type="text/javascript" src="https://ad.cafe24.com/adManager/controller/ConclusionAD.php?siteType_ADParam=malladmin&amp;userID_ADParam=sist001&amp;ckStr=&amp;ckAllStr=169,171&amp;ckByMulti=false&amp;ssl=true&amp;admngAreaView=false&amp;charset=utf-8&amp;admngValue=0&amp;dummy=1719812102044&amp;groupIdx_ADParam=2059"></script><script type="text/javascript" src="https://ad.cafe24.com/adManager/controller/ConclusionAD.php?siteType_ADParam=malladmin&amp;userID_ADParam=sist001&amp;ckStr=&amp;ckAllStr=169,171&amp;ckByMulti=false&amp;ssl=true&amp;admngAreaView=false&amp;charset=utf-8&amp;admngValue=0&amp;dummy=1719812102044&amp;groupIdx_ADParam=2060"></script></span><span id="admngSide_2"></span><script id="admng" type="text/javascript" src="//ad.cafe24.com/adManager/logic/WebAnalysis.js?siteType=malladmin&amp;userID=sist001&amp;groupIdx=2059"></script>
        <span id="admngDebug"></span><span id="admngSide_9"></span><script id="admng" type="text/javascript" src="//ad.cafe24.com/adManager/logic/WebAnalysis.js?siteType=malladmin&amp;userID=sist001&amp;groupIdx=2060"></script> */}
      </div>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-box">
          <Typography
            variant="h5"
            component="h2"
            className="modal-title"
            style={{ fontWeight: "bold" }}
          >
            {modalMode === "add" ? "카테고리 추가" : "카테고리 수정"}
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="modal-textfield"
            placeholder="카테고리명을 입력하세요"
          />
          <div className="modal-button-group">
            <Button
              variant="contained"
              color="primary"
              onClick={addOrEditBc}
              className="modal-button"
            >
              {modalMode === "add" ? "추가" : "수정"}
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setModalOpen(false)}
              className="modal-button"
            >
              닫기
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
