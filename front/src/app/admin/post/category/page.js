'use client'
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import "./modal.css";
import { Button, TextField } from "@mui/material";
export default function Page() {
  const API_URL = "/api/admin/category/list";
  const [categoryname, setCategoryname] = useState([]);
  const [categorykey, setCategorykey] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [uploadedImage, setUploadedImage] = useState("/img/admin/category/add_image.png");
  const [previewImage, setPreviewImage] = useState("/img/admin/category/add_image.png");
  const DEL_URL = "/api/admin/category/delete";
  const [allChecked, setAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [showingData, setShowingData] = useState(true);

  // 파일 입력 요소에 대한 참조
  const fileInputRef = useRef(null);

  // 카테고리 추가
  function sendData() {
    const formData = new FormData();
    formData.append("categoryname", categoryname); // 카테고리 이름 추가
    if (categoryname == null) {
      alert("카테고리 명을 입력해주세요.");
    }
    console.log(uploadedImage);
    if (uploadedImage instanceof FileList && uploadedImage.length > 0) {
      formData.append("file", uploadedImage[0]); // 선택된 파일 추가
      axios({
        url: "/api/admin/category/add",
        method: "post",
        data: formData,  // FormData 객체를 data로 설정
        headers: {
          "Content-Type": "multipart/form-data",  // 멀티파트 폼 데이터 설정
        },
      }).then((res) => {
        if (res.data.cnt === 1) {
          alert("저장완료");
          window.location.reload();
        }
        return res;
      }).catch((error) => {
        console.error("Error uploading file", error);
      });
    } else {
      axios({
        url: "/api/admin/category/add",
        method: "post",
        data: formData,
      }).then((res) => {
        if (res.data.cnt === 1) {
          alert("저장완료");
          window.location.reload();
        }
        return res;
      }).catch((error) => {
        console.error("Error uploading file", error);
      });

    }

  }
  // 카테고리 수정 함수
  function sendEditData() {
    const formData = new FormData();
    formData.append("categorykey", categorykey); // 카테고리 이름 추가
    formData.append("categoryname", categoryname); // 카테고리 이름 추가

    if (categoryname == null) {
      alert("카테고리 명을 입력해주세요.");
    }
    if (uploadedImage instanceof FileList && uploadedImage.length > 0) {
      formData.append("file", uploadedImage[0]); // 선택된 파일 추가
      axios({
        url: "/api/admin/category/edit",
        method: "post",
        data: formData,  // FormData 객체를 data로 설정
        headers: {
          "Content-Type": "multipart/form-data",  // 멀티파트 폼 데이터 설정
        },
      }).then((res) => {
        if (res.data.cnt === 1) {
          alert("저장완료");
          window.location.reload();
        }
        return res;
      }).catch((error) => {
        console.error("Error uploading file", error);
      });
    } else {
      axios({
        url: "/api/admin/category/edit",
        method: "post",
        data: formData,
      }).then((res) => {
        if (res.data.cnt === 1) {
          alert("저장완료");
          window.location.reload();
        }
        return res;
      }).catch((error) => {
        console.error("Error uploading file", error);
      });

    }
  }

  useEffect(() => {
    callData();
  }, []);

  function callData() {
    axios.get(API_URL).then((response) => {
      setCategoryList(response.data.category_list);
      setShowingData(true);
    });
  }

  function callDeletedData() {
    const API_URL = "/api/admin/category/deleted";
    axios.get(API_URL).then((response) => {
      setCategoryList(response.data.category_list);
      setShowingData(false);
    });
  }

  // 카테고리 이름 변경시 저장
  const handleCategoryNameChange = (e) => {
    setCategoryname(e.target.value);
  };

  // 모달 열기
  const openModal = () => {
    setIsModalOpen(true);
    setPreviewImage("/img/admin/category/add_image.png");
  };

  // 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 모달 열기
  const openEditModal = (category) => {
    setCategoryname(category.categoryname);
    setSelectedCategory(category);
    setPreviewImage(category.img_url);
    setUploadedImage(category.img_url);
    setCategorykey(category.categorykey);
    setIsEditModalOpen(true);
  };

  // 모달 닫기
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedCategory(null);
  };

  // 파일 업로드 버튼 클릭 시 파일 입력 요소 클릭 이벤트 발생
  const handleButtonClick = (e) => {
    fileInputRef.current.click();
  };

  // 파일 입력 요소의 값이 변경되면 호출되는 함수
  const handleChange = (e) => {
    // 선택한 파일 정보를 콘솔에 출력
    let file = e.target.files;
    setUploadedImage(file);
    let fileRead = new FileReader();
    fileRead.onload = function () {
      setPreviewImage(fileRead.result);
    };
    fileRead.readAsDataURL(file[0]);
  };

  // 전체 선택 체크박스 
  const handleAllCheck = (e) => {
    const checked = e.target.checked;
    setAllChecked(checked); // 전체 선택 상태 업데이트
    if (checked) {
      // 전체 선택 시, 모든 유저의 키를 checkedItems에 추가
      const allCheckedItems = categoryList.map((item) => item.categorykey);
      setCheckedItems(allCheckedItems);
    } else {
      // 전체 선택 해제
      setCheckedItems([]);
    }
  };

  // 개별 체크박스 핸들러
  const handleRowCheck = (e, categorykey) => {
    const checked = e.target.checked;
    let updatedCheckedItems = [...checkedItems];
    if (checked) {
      // 체크 시 해당 유저의 키를 checkedItems에 추가
      updatedCheckedItems.push(categorykey);
    } else {
      // 체크 해제 시 유저의 키 checkedItems에서 제거
      updatedCheckedItems = updatedCheckedItems.filter((key) => key !== categorykey);
    }
    setCheckedItems(updatedCheckedItems);
    // 모든 유저가 선택되었는지 확인> 전체 선택 상태 업데이트
    setAllChecked(updatedCheckedItems.length === categoryList.length);
  };

  // 선택 카테고리 삭제
  function delete_choice() {
    if (checkedItems.length === 0) {
      alert("삭제할 항목이 선택되지 않았습니다.");
      return;
    }
    axios.post(DEL_URL, checkedItems, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        alert("카테고리 삭제 완료.");// 체크박스 선택 해제
        setCheckedItems([]); // 개별 체크박스 해제
        setAllChecked(false); // 전체 선택 체크박스 해제
        window.location.reload();
      }).catch(error => {
        alert("카테고리 삭제 중 오류가 발생했습니다. 다시 시도해 주세요.");
      });
  }


  return (
    <>
      <div className="section" id="QA_profile2">
        <div className="mTitle">
          <h2>카테고리 목록</h2>
        </div>
        <div className="mCtrl typeHeader">
          <div className="gLeft">
            <button className="btnNormal" onClick={delete_choice} style={{ marginRight: '10px' }}>
              <span>
                <em className="icoDel"></em> 삭제
              </span>
            </button>
            <div onClick={openModal} className="btnNormal" style={{ marginRight: '10px' }}>
              <span>
                <em className="icoDel"></em> 추가
              </span>
            </div>
            <div onClick={showingData ? callDeletedData : callData} className="btnNormal">
              <span>
                <em className={showingData ? "icoDel" : "icoPublished"}></em>
                {showingData ? "삭제된 목록 보기" : "게시중인 목록 보기"}
              </span>
            </div>
          </div>
        </div>
        <div id="searchResult" className="searchResult">
          {/* <!-- 일반보기 --> */}
          <div className="mBoard gScroll gCellNarrow typeList">
            <table border="1" summary="" className="eChkColor">
              <caption>카테고리 목록</caption>
              <colgroup>
                <col className="chk" style={{ width: "30px" }} />
                <col style={{ width: "50px" }} />
                <col style={{ width: "199px" }} />
                <col style={{ width: "270px" }} />
                <col style={{ width: "60px" }} />
                <col style={{ width: "60px" }} />
                <col style={{ width: "70px" }} />
                <col style={{ width: "70px" }} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">
                    <input id="allChk" type="checkbox" className="allChk" checked={allChecked} onChange={handleAllCheck} />
                  </th>
                  <th scope="col">번호</th>
                  <th scope="col">카테고리명</th>
                  <th scope="col">이미지</th>
                  <th scope="col">생성일자</th>
                  <th scope="col">수정일자</th>
                  <th scope="col">삭제일자</th>
                  <th scope="col">삭제여부</th>
                </tr>
              </thead>
              <tbody className="center">
                {categoryList.length > 0 ? (
                  categoryList.map((category, index) => (
                    <tr key={category.categorykey}>
                      <td>
                        <input type="checkbox" name="use_check[]" checked={checkedItems.includes(category.categorykey)} onChange={(e) => handleRowCheck(e, category.categorykey)} />
                      </td>
                      <td onClick={() => openEditModal(category)}>{index + 1}</td>
                      <td onClick={() => openEditModal(category)}>{category.categoryname}</td>
                      <td onClick={() => openEditModal(category)}>
                        {category.img_url ? (<img src={category.img_url} alt="카테고리 이미지" style={{ width: '100px', height: 'auto' }} />) : ("이미지 없음")}
                      </td>
                      <td onClick={() => openEditModal(category)}>{category.create_dtm}</td>
                      <td onClick={() => openEditModal(category)}>{category.update_dtm}</td>
                      <td onClick={() => openEditModal(category)}>{category.delete_dtm || "-"}</td>
                      <td onClick={() => openEditModal(category)}>{category.isdeleted === "0" ? "게시중" : "삭제됨"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8">검색된 카테고리 내역이 없습니다.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="mCtrl typeFooter">
            <div className="gLeft">
              <button className="btnNormal" onClick={delete_choice}>
                <span>
                  <em className="icoDel"></em> 삭제
                </span>
              </button>
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
      {isModalOpen && (
        <>
          <div className="modal_bg" onClick={closeModal}></div>
          <div className="modal_wrap">
            <TextField id="categoryname" name="categoryname" onChange={handleCategoryNameChange} label="카테고리 이름을 입력해주세요." type="search" variant="standard" style={{ position: "relative", width: "450px" }} />
            <input type="file" ref={fileInputRef} name="file" onChange={handleChange} style={{ display: "none" }} />
            <Button variant="contained" className="modal_close" onClick={sendData} style={{ position: "absolute", top: "20px", right: "30px" }}>추가</Button>
            <Button variant="outlined" className="modal_close" onClick={closeModal} style={{ position: "absolute", top: "55px", right: "30px" }}>닫기</Button>
            <img src={previewImage} onClick={handleButtonClick} alt="Uploaded Preview" style={{ position: "absolute", width: "400px", height: "400px", left: "50%", top: "55%", transform: "translate(-50%, -50%)" }}></img>
          </div>
        </>
      )}
      {isEditModalOpen && (
        <>
          <div className="modal_bg" onClick={closeEditModal}></div>
          <div className="modal_wrap">
            <TextField id="categoryname" name="categoryname" onChange={handleCategoryNameChange} value={categoryname} label="카테고리 이름을 입력해주세요." type="search" variant="standard" style={{ position: "relative", width: "450px" }} />
            <input type="file" ref={fileInputRef} name="file" onChange={handleChange} style={{ display: "none" }} />
            <Button variant="contained" className="modal_close" onClick={sendEditData} style={{ position: "absolute", top: "20px", right: "30px" }}>수정</Button>
            <Button variant="outlined" className="modal_close" onClick={closeEditModal} style={{ position: "absolute", top: "55px", right: "30px" }}>닫기</Button>
            <img src={previewImage} onClick={handleButtonClick} alt="Uploaded Preview" style={{ position: "absolute", width: "400px", height: "400px", left: "50%", top: "55%", transform: "translate(-50%, -50%)" }}></img>
          </div>
        </>
      )}
    </>
  );
}
