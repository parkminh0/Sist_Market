"use client";

import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import IconButton from '@mui/joy/IconButton';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';
import ImageNotSupportedRoundedIcon from '@mui/icons-material/ImageNotSupportedRounded';
import {
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  ImageList,
  ImageListItem,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import "/public/css/myPage.css";
import "/public/css/profile.css";
import Cookies from 'js-cookie';

export default function page() {
  const [category_list, setCategory_list] = useState([]);
  const [post_list, setPost_list] = useState([]);

  const router = useRouter();

  // 카테고리 파라미터 값
  const [categoryParam, setCategoryParam] = useState(null);
  // 정렬 파라미터 값
  const [sortParam, setSortParam] = useState(null);
  // 가격 파라미터 값
  const [minPriceParam, setMinPriceParam] = useState(null);
  const [maxPriceParam, setMaxPriceParam] = useState(null);

  // #region 비동기-카테고리 리스트
  function getCategory() {
    axios({
      url: "http://localhost:8080/category/all",
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setCategory_list(res.data.category_list);
    });
  }
  // #endregion

  // #region useEffect-카테고리, 파라미터 초기화
  useEffect(() => {
    getCategory();
    let currentUrl = window.location.href;
    let currentUrlObj = new URL(currentUrl);
    let params = new URLSearchParams(currentUrlObj.search);
    // 'category' 파라미터의 모든 값 가져오기
    let cateParam = params.get("category");
    let srtParam = params.get("sort");
    let minParam = params.get("minPrice");
    let maxParam = params.get("maxPrice");

    setCategoryParam(cateParam);
    setSortParam(srtParam);
    setMinPriceParam(minParam);
    setMaxPriceParam(maxParam);

    axios({
      url: "http://localhost:8080/adpost/search",
      method: "get",
      params: {
        category: cateParam,
        sort: srtParam,
        minPrice: minParam,
        maxPrice: maxParam,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setPost_list(res.data.res_search);
    });
  }, [router.query]);
  // #endregion

  // #region 시간표현
  function timeDifference(postTime) {
    const now = new Date(); // 현재 시간
    const postDate = new Date(postTime); // postVO.create_dtm 값을 Date 객체로 변환
  
    const timeDiff = now - postDate; // 두 시간의 차이를 밀리초로 계산
    const diffInSeconds = Math.floor(timeDiff / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYear = Math.floor(diffInDays / 365);
  
    // 차이에 따라 적절한 문자열을 반환
    if (diffInYear > 0) {
      return `${diffInYear}년 전`;
    } else if (diffInMonths > 0) {
      return `${diffInMonths}개월 전`;
    } else if (diffInDays > 0) {
      return `${diffInDays}일 전`;
    } else if (diffInHours > 0) {
      return `${diffInHours}시간 전`;
    } else if (diffInMinutes > 0) {
      return `${diffInMinutes}분 전`;
    } else {
      return '방금 전';
    }
  }
  // #endregion

  // #region 내 물건 팔기 버튼
  useEffect(() => {
    const container = document.querySelector(
      "div._1h4pbgy8jc._1h4pbgy9ug._1h4pbgy9vs"
    );
    const button = document.querySelector(".write-button");

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const buttonHeight = button.offsetHeight;

      if (containerRect.bottom < window.innerHeight + buttonHeight) {
        button.style.position = "absolute";
        button.style.bottom = "20px";
        button.style.right = "20px";
      } else if (containerRect.top < window.innerHeight) {
        button.style.position = "fixed";
        button.style.bottom = "20px";
        button.style.right = `${
          window.innerWidth - containerRect.right + 20
        }px`;
      } else {
        button.style.position = "absolute";
        button.style.bottom = "20px";
        button.style.right = "20px";
      }
    };

    handleScroll();

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // #endregion

  // #region 카테고리 선택
  function goPage(e, key) {
    // 현재 URL에서 경로와 쿼리 문자열을 가져옵니다.
    // URLSearchParams 객체를 사용하여 쿼리 파라미터를 조작합니다.
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);
    // 'category' 파라미터를 제거
    params.delete("category");
    // 경로와 수정된 쿼리 문자열을 조합하여 새로운 URL을 만듭니다.
    let newUrl = url.pathname + "?" + params.toString() + url.hash;
    if (e.dataset.selected !== "true") {
      newUrl += "&category=" + key;
    }

    // 페이지 이동
    router.push(newUrl);

    // 페이지가 새로 로드되지 않으면 강제로 리로드
    window.location.href = newUrl;
  }
  // #endregion

  // #region 정렬 선택
  function goSortPage(e, key) {
    // 현재 URL에서 경로와 쿼리 문자열을 가져옵니다.
    // URLSearchParams 객체를 사용하여 쿼리 파라미터를 조작합니다.
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);

    let tmp = params.get("sort");
    if (tmp == key) {
      return;
    } else {
      // 'sort' 파라미터를 제거
      params.delete("sort");
    }
    // 경로와 수정된 쿼리 문자열을 조합하여 새로운 URL을 만듭니다.
    let newUrl = url.pathname + "?" + params.toString() + url.hash;
    newUrl += "&sort=" + key;

    // 페이지 이동
    router.push(newUrl);

    // 페이지가 새로 로드되지 않으면 강제로 리로드
    window.location.href = newUrl;
  }
  // #endregion

  // #region 가격 선택
  function goPricePage(e, minp, maxp) {
    // 현재 URL에서 경로와 쿼리 문자열을 가져옵니다.
    // URLSearchParams 객체를 사용하여 쿼리 파라미터를 조작합니다.
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);

    let min = params.get("minPrice");
    let max = params.get("maxPrice");
    if (min == minp && max == maxp) return;

    // 가격 파라미터 제거
    params.delete("minPrice");
    params.delete("maxPrice");

    // 경로와 수정된 쿼리 문자열을 조합하여 새로운 URL을 만듭니다.
    let newUrl = url.pathname + "?" + params.toString() + url.hash;
    newUrl += "&minPrice=" + minp;
    newUrl += "&maxPrice=" + maxp;

    // 페이지 이동
    router.push(newUrl);

    // 페이지가 새로 로드되지 않으면 강제로 리로드
    window.location.href = newUrl;
  }
  // #endregion

  // #region 가격 입력
  function goPricePageBtn(e) {
    // 현재 URL에서 경로와 쿼리 문자열을 가져옵니다.
    // URLSearchParams 객체를 사용하여 쿼리 파라미터를 조작합니다.
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);

    let min = params.get("minPrice");
    let max = params.get("maxPrice");

    let minp = parseInt(document.getElementById("price-from").value, 10);
    let maxp = parseInt(document.getElementById("price-to").value, 10);

    if (min == minp && max == maxp) return;

    if (isNaN(minp) || minp === null || minp === "") minp = 0;
    if (isNaN(maxp) || maxp === null || maxp === "") maxp = 0;
    if (minp > maxp) {
      alert("최소가격이 최대가격보다 큽니다.");
      return;
    }

    // 가격 파라미터 제거
    params.delete("minPrice");
    params.delete("maxPrice");

    // 경로와 수정된 쿼리 문자열을 조합하여 새로운 URL을 만듭니다.
    let newUrl = url.pathname + "?" + params.toString() + url.hash;
    newUrl += "&minPrice=" + minp;
    newUrl += "&maxPrice=" + maxp;
    // 페이지 이동
    router.push(newUrl);
    // 페이지가 새로 로드되지 않으면 강제로 리로드
    window.location.href = newUrl;
  }
  // #endregion

  // #region 필터 삭제
  function deleteSearch(e) {
    // 현재 URL에서 경로와 쿼리 문자열을 가져옵니다.
    // URLSearchParams 객체를 사용하여 쿼리 파라미터를 조작합니다.
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);
    let tmp = e.dataset.deltype;
    switch (tmp) {
      case "category":
        params.delete("category");
        break;
      case "price":
        params.delete("minPrice");
        params.delete("maxPrice");
        break;
      case "all":
        params.delete("category");
        params.delete("minPrice");
        params.delete("maxPrice");
        break;
    }
    // 경로와 수정된 쿼리 문자열을 조합하여 새로운 URL을 만듭니다.
    let newUrl = url.pathname + "?" + params.toString() + url.hash;

    // 페이지 이동
    router.push(newUrl);

    // 페이지가 새로 로드되지 않으면 강제로 리로드
    window.location.href = newUrl;
  }
  // #endregion

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [method, setMethod] = useState("0");
  const [isFree, setIsFree] = useState(false);
  const [price, setPrice] = useState("");
  const [canBargain, setCanBargain] = useState(0);
  const [content, setContent] = useState("");
  const [savePostKey, setSavePostKey] = useState("");

  const handleClose = () => {
    setTitle("");
    setCategory("");
    setMethod("0");
    setPrice("");
    setCanBargain(0);
    setContent("");
    setIsFree(false);
    setOpen(false);
    setPreviewImages([]);
  };

  // #region 이미지업로드
  const fileInputRef = useRef(null);
  const [previewImages, setPreviewImages] = useState([]);

  // 파일 업로드 버튼 클릭 시 파일 입력 요소 클릭 이벤트 발생
  const uploadImg = (e) => {
    fileInputRef.current.click();
  };

  // 파일 입력 요소의 값이 변경되면 호출되는 함수
  const handleChange = (e) => {
    // 선택한 파일들을 배열로 가져옴
    let files = Array.from(e.target.files);

    if (previewImages.length + files.length > 10) {
      alert("10개를 초과할 수 없습니다.");
      return; // 10개를 초과할 경우 추가하지 않고 함수 종료
    }

    const newPreviewImages = [];

    // 파일들을 미리보기 이미지로 변환하여 저장
    files.forEach((file, index) => {
      let fileReader = new FileReader();
      fileReader.onload = function () {
        const newId = previewImages.length + index;
        newPreviewImages.push({ id: newId, src: fileReader.result, file });
        if (newPreviewImages.length === files.length) {
          setPreviewImages((prevImages) => [
            ...prevImages,
            ...newPreviewImages,
          ]);
        }
      };
      fileReader.readAsDataURL(file);
    });
  };

  const handleDelete = (index) => {
    setPreviewImages(previewImages.filter((_, i) => i !== index));
  };
  // #endregion

  // #region 내 물건 팔기(작성)
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // 유저 토큰 확인
    let tmpUserKey = Cookies.get('userkey');
    if (tmpUserKey == null || tmpUserKey == ''){
      alert("로그인 후 이용해주세요.");
      return;
    }
    formData.append("userkey", tmpUserKey);

    // 이미지 파일 FormData에 추가
    previewImages.forEach((image, index) => {
      const fileName = image.file.name;
      formData.append("post_img", image.file, `${tmpUserKey}-${fileName}`);
    });
    
    // 0: 임시저장  1: 판매중(작성완료)
    const mode = event.currentTarget.dataset.mode;
    formData.append("poststatus", mode === "save" ? 0 : 1);
    
    // price가 공백("")이면 null 또는 0으로 변환
    formData.set("price", price === "" ? 0 : price);

    // 임시저장 후 작성완료 누를 경우 수정해야 함
    if (savePostKey != null && savePostKey != "") {
      formData.append("postkey", savePostKey);
    }
    formData.set("canBargain", canBargain);
    formData.append("isPostPage", 1);
    axios
      .post(
        savePostKey == null || savePostKey == ""
          ? "http://localhost:8080/adpost/write"
          : "http://localhost:8080/adpost/edit",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        if (mode === "write") {
          setSavePostKey("");
          alert("게시글이 작성되었습니다.");
          window.location.reload();
        } else {
          setSavePostKey(response.data.savePostKey);
          alert("게시글이 저장되었습니다.");
        }
      })
      .catch((error) => {
        console.error("게시글 작성 오류", error);
      });
  };
  // #endregion

  // #region 이미지 드래그
  let dragIdx = null;
  const containerRef = useRef(null); // ref로 container 관리

  useEffect(() => {
    const container = containerRef.current;
  
    // 드래그 시작 시 실행될 함수
    const handleDragStart = (e) => {
      const draggable = e.target;
      draggable.classList.add("dragging");
      dragIdx = Array.prototype.indexOf.call(container.children, draggable) - 1;
    };
  
    // 드래그 종료 시 실행될 함수
    const handleDragEnd = (e) => {
      const draggable = e.target;
      draggable.classList.remove("dragging");
  
      const afterElement = getDragAfterElement(container, e.clientX);
      let toIndex;
      if (afterElement == null || afterElement == undefined) {
        toIndex = container.children.length - 2;
      } else {
        toIndex = Array.prototype.indexOf.call(container.children, afterElement);
        if (dragIdx >= toIndex) toIndex -= 1;
        else toIndex -= 2;
      }
  
      if (toIndex !== -1) {
        setPreviewImages((prevPreviewImages) => {
          const tmpImages = [...prevPreviewImages]; // 얕은 복사
  
          // 순서 변경 로직
          const [movedItem] = tmpImages.splice(dragIdx, 1);
          tmpImages.splice(toIndex, 0, movedItem);
  
          // 각 이미지의 id 값을 다시 설정
          tmpImages.forEach((img, index) => {
            img.id = index;
          });
  
          return [...tmpImages]; // 깊은 복사하여 새로운 배열로 반환
        });
      }
    };
  
    const handleDragOver = (e) => {
      e.preventDefault();
      // DOM 조작을 하지 않고 드래그 위치 계산만 수행
    };
  
    if (container) {
      container.addEventListener("dragover", handleDragOver);
  
      const draggables = container.querySelectorAll(".draggable");
      draggables.forEach((draggable) => {
        draggable.addEventListener("dragstart", handleDragStart);
        draggable.addEventListener("dragend", handleDragEnd);
      });
  
      return () => {
        container.removeEventListener("dragover", handleDragOver);
        draggables.forEach((draggable) => {
          draggable.removeEventListener("dragstart", handleDragStart);
          draggable.removeEventListener("dragend", handleDragEnd);
        });
      };
    }
  }, [previewImages]);
  
  // 드래그 위치를 계산하는 함수
  function getDragAfterElement(container, x) {
    const draggableElements = [
      ...container.querySelectorAll(".draggable:not(.dragging)"),
    ];
  
    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = x - box.left - box.width / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }
  // #endregion

  return (
    <>
      <article className="_1h4pbgy7wg _1h4pbgy7wz">
        <div className="_6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462">
          <section style={{ borderBottom: "1px solid #ebebeb" }} className="">
            <div className="_588sy41z _588sy421 _588sy42q _588sy415q _588sy417e">
              <nav className="iq86zf0">
                <ol className="iq86zf1 _588sy42q _588sy415q">
                  <li>
                    <Link href="/">
                      <span className="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf3 iq86zf2 _588sy41n">
                        <font style={{ verticalAlign: "inherit" }}>홈</font>
                      </span>
                    </Link>
                    <span className="_588sy4192 _588sy41w _588sy41b2 _588sy43 iq86zf4 _588sy4ze _588sy4w8">
                      <font style={{ verticalAlign: "inherit" }}> &gt;</font>
                    </span>
                  </li>
                </ol>
              </nav>
              <div className="_588sy41z _588sy421 _588sy42q _588sy415q">
                <span className="_588sy4192 _588sy41x _588sy41b2 _588sy43">
                  <font style={{ verticalAlign: "inherit" }}>중고거래</font>
                </span>
              </div>
            </div>
            <div className="_1h4pbgy7dk _1h4pbgy7j7 _1h4pbgy7j0 _1h4pbgy7il _1h4pbgy7w0">
              <h1 className="_1h4pbgy78o _1h4pbgy796 _1h4pbgy79g _1h4pbgy7ag _1h4pbgy7c8">
                <font style={{ verticalAlign: "inherit" }}>
                  맨해튼의 새제품과 중고품
                </font>
              </h1>
            </div>
          </section>
        </div>
        <div className="_6vo5t01 _6vo5t00 _588sy4n8 _588sy4nl _588sy4o4 _588sy4on _588sy4ou _588sy4p7 _588sy4k2 _588sy4kf _588sy4ky _588sy4lh _588sy4lo _588sy4m1 _588sy4n _588sy462">
          <section className="_1h4pbgy9ug _1h4pbgy8zc _1h4pbgy92j _1h4pbgy7y8 _1h4pbgy83s _1h4pbgy843 _1h4pbgy84k">
            <aside className="_1d991sp0 _1h4pbgy9u0 _1h4pbgy9uj _1h4pbgy9vs">
              <header className="_1h4pbgy9ug _1h4pbgy9xs _1h4pbgy9wo">
                <h2 className="_588sy419e _588sy41y _588sy41a8">
                  <font style={{ verticalAlign: "inherit" }}>분류</font>
                </h2>
                <button
                  className="seed-text-button seed-semantic-typography-label3-regular"
                  data-scope="button"
                  data-part="root"
                  id="button::R15j8p:"
                  type="button"
                  data-size="small"
                  data-variant="secondaryLow"
                  data-style="underlined"
                  data-deltype="all"
                  onClick={(e) => deleteSearch(e.currentTarget)}
                >
                  <span>
                    <font style={{ verticalAlign: "inherit" }}>
                      모두 지우기
                    </font>
                  </span>
                </button>
              </header>
              <section>
                <div className="_1h4pbgy7eo _1h4pbgy7jc _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy3rc">
                  <div className="_1h4pbgy9ug _1h4pbgy9xs _1h4pbgy9wo">
                    <h3 className="_588sy4198 _588sy41y _588sy41a2">
                      <font style={{ verticalAlign: "inherit" }}>동네</font>
                    </h3>
                  </div>
                  <div className="_1d991sp2 _1h4pbgya08">
                    <div className="_1h4pbgy7wo _1h4pbgy76o _1h4pbgy7ao _1h4pbgy7c0">
                      <font style={{ verticalAlign: "inherit" }}>뉴욕</font>
                    </div>
                    <div className="_1h4pbgy7w8">
                      <div
                        data-orientation="vertical"
                        data-size="medium"
                        className="_1vqth4d0 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9w8"
                      >
                        <Link
                          className="_1vqth4d2 _1h4pbgy9uw _1h4pbgy9wg _1h4pbgya0o _1h4pbgy9yw _1vqth4d1"
                          data-part="radio"
                          data-selected="true"
                          data-gtm="search_filter"
                          href="#"
                          style={{ marginInlineStart: "8px" }}
                        >
                          <input
                            type="radio"
                            data-part="radio-input"
                            aria-hidden="true"
                            tabIndex="-1"
                            className="_1vqth4d3"
                            value="7426"
                          />
                          <div
                            data-part="radio-control"
                            data-selected="true"
                            className="_1vqth4d4"
                          ></div>
                          <span className="_1vqth4d5" data-part="radio-label">
                            <font style={{ verticalAlign: "inherit" }}>
                              맨해튼
                            </font>
                          </span>
                        </Link>
                        <Link
                          className="_1vqth4d2 _1h4pbgy9uw _1h4pbgy9wg _1h4pbgya0o _1h4pbgy9yw _1vqth4d1"
                          data-part="radio"
                          data-selected="false"
                          data-gtm="search_filter"
                          href="#"
                          style={{ marginInlineStart: "16px" }}
                        >
                          <input
                            type="radio"
                            data-part="radio-input"
                            aria-hidden="true"
                            tabIndex="-1"
                            className="_1vqth4d3"
                            value="7438"
                          />
                          <div
                            data-part="radio-control"
                            data-selected="false"
                            className="_1vqth4d4"
                          ></div>
                          <span className="_1vqth4d5" data-part="radio-label">
                            <font style={{ verticalAlign: "inherit" }}>
                              어퍼 웨스트 사이드
                            </font>
                          </span>
                        </Link>
                        <Link
                          className="_1vqth4d2 _1h4pbgy9uw _1h4pbgy9wg _1h4pbgya0o _1h4pbgy9yw _1vqth4d1"
                          data-part="radio"
                          data-selected="false"
                          data-gtm="search_filter"
                          href="#"
                          style={{ marginInlineStart: "16px" }}
                        >
                          <input
                            type="radio"
                            data-part="radio-input"
                            aria-hidden="true"
                            tabIndex="-1"
                            className="_1vqth4d3"
                            value="15306"
                          />
                          <div
                            data-part="radio-control"
                            data-selected="false"
                            className="_1vqth4d4"
                          ></div>
                          <span className="_1vqth4d5" data-part="radio-label">
                            <font style={{ verticalAlign: "inherit" }}>
                              중앙 공원
                            </font>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="_1h4pbgy7w8">
                    <label
                      data-gtm="search_show_more_options"
                      className="_1h4pbgy76o _1h4pbgy7ao _1h4pbgy7c8 _1h4pbgy48 _1h4pbgy9yw"
                    >
                      <font style={{ verticalAlign: "inherit" }}>
                        자세히보기
                      </font>
                    </label>
                  </div>
                </div>
                <div className="_1h4pbgy7eo _1h4pbgy7jc _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy3rc">
                  <h3 className="_588sy4198 _588sy41y _588sy41a2">
                    <font style={{ verticalAlign: "inherit" }}>카테고리</font>
                  </h3>
                  <div className="_1h4pbgy7w8">
                    <div
                      data-orientation="vertical"
                      data-size="medium"
                      className="_1vqth4d0 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9w8"
                    >
                      {/* <!-- forEACH 쓰는곳 --> */}
                      {category_list.map((item, i) => (
                        <Link
                          href="#"
                          data-category_key={item.categorykey}
                          key={i}
                          className="_1vqth4d2 _1h4pbgy9uw _1h4pbgy9wg _1h4pbgya0o _1h4pbgy9yw _1vqth4d1"
                          data-part="radio"
                          data-selected={
                            categoryParam == item.categorykey ? "true" : "false"
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            goPage(e.currentTarget, `${item.categorykey}`);
                          }}
                        >
                          <input
                            type="radio"
                            data-part="radio-input"
                            aria-hidden="true"
                            tabIndex="-1"
                            className="_1vqth4d3"
                            value="1"
                          />
                          <div
                            data-part="radio-control"
                            data-selected={
                              categoryParam == item.categorykey
                                ? "true"
                                : "false"
                            }
                            className="_1vqth4d4"
                          ></div>
                          <span className="_1vqth4d5" data-part="radio-label">
                            <font style={{ verticalAlign: "inherit" }}>
                              {item.categoryname}
                            </font>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="_1h4pbgy7eo _1h4pbgy7jc _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy3rc">
                  <h3 className="_588sy4198 _588sy41y _588sy41a2">
                    <font style={{ verticalAlign: "inherit" }}>정렬</font>
                  </h3>
                  <div className="_1h4pbgy7w8">
                    <div
                      data-orientation="vertical"
                      data-size="medium"
                      className="_1vqth4d0 _1h4pbgy9ug _1h4pbgy9vs _1h4pbgy9w8"
                    >
                      <Link
                        href="#"
                        className="_1vqth4d2 _1h4pbgy9uw _1h4pbgy9wg _1h4pbgya0o _1h4pbgy9yw _1vqth4d1"
                        data-part="radio"
                        data-selected={sortParam == "recent" ? "true" : "false"}
                        onClick={(e) => {
                          e.preventDefault();
                          goSortPage(e.currentTarget, "recent");
                        }}
                      >
                        <input
                          type="radio"
                          data-part="radio-input"
                          aria-hidden="true"
                          tabIndex="-1"
                          className="_1vqth4d3"
                          value="recent"
                        />
                        <div
                          data-part="radio-control"
                          data-selected={
                            sortParam == "recent" ? "true" : "false"
                          }
                          className="_1vqth4d4"
                        ></div>
                        <span className="_1vqth4d5" data-part="radio-label">
                          <font style={{ verticalAlign: "inherit" }}>
                            최신순
                          </font>
                        </span>
                      </Link>
                      <Link
                        href="#"
                        className="_1vqth4d2 _1h4pbgy9uw _1h4pbgy9wg _1h4pbgya0o _1h4pbgy9yw _1vqth4d1"
                        data-part="radio"
                        data-selected={
                          !(sortParam == "recent") ? "true" : "false"
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          goSortPage(e.currentTarget, "popular");
                        }}
                      >
                        <input
                          type="radio"
                          data-part="radio-input"
                          aria-hidden="true"
                          tabIndex="-1"
                          className="_1vqth4d3"
                          value="hottest"
                        />
                        <div
                          data-part="radio-control"
                          data-selected={
                            !(sortParam == "recent") ? "true" : "false"
                          }
                          className="_1vqth4d4"
                        ></div>
                        <span className="_1vqth4d5" data-part="radio-label">
                          <font style={{ verticalAlign: "inherit" }}>
                            인기순
                          </font>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="_1h4pbgy7eo _1h4pbgy7jc _1h4pbgy9ug _1h4pbgy9vs">
                  <h3 className="_588sy4198 _588sy41y _588sy41a2">
                    <font style={{ verticalAlign: "inherit" }}>가격</font>
                  </h3>
                  <div className="_1h4pbgy7w8">
                    <div className="_1h4pbgy9ug _1h4pbgy9vs _1h4pbgy90o">
                      <Link
                        href="#"
                        data-selected={
                          minPriceParam == 0 && maxPriceParam == 0
                            ? "true"
                            : "false"
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          goPricePage(e.currentTarget, 0, 0);
                        }}
                        className={
                          minPriceParam == 0 && maxPriceParam == 0
                            ? "_1d991sp4 _1h4pbgy7nc _1h4pbgy7s0 _1h4pbgy7dk _1h4pbgy7i8 _1h4pbgy9uw _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy79s _1h4pbgy7ao _1h4pbgy7c0 _1h4pbgy900 _1h4pbgy980 _1d991sp5"
                            : "_1d991sp4 _1h4pbgy7nc _1h4pbgy7s0 _1h4pbgy7dk _1h4pbgy7i8 _1h4pbgy9uw _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy79s _1h4pbgy7ao _1h4pbgy7c0 _1h4pbgy900 _1h4pbgy980 _1d991sp6"
                        }
                      >
                        <font style={{ verticalAlign: "inherit" }}>나눔</font>
                      </Link>
                      <Link
                        href=""
                        data-selected={
                          minPriceParam == 0 && maxPriceParam == 10000
                            ? "true"
                            : "false"
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          goPricePage(e.currentTarget, 0, 10000);
                        }}
                        className={
                          minPriceParam == 0 && maxPriceParam == 10000
                            ? "_1d991sp4 _1h4pbgy7nc _1h4pbgy7s0 _1h4pbgy7dk _1h4pbgy7i8 _1h4pbgy9uw _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy79s _1h4pbgy7ao _1h4pbgy7c0 _1h4pbgy900 _1h4pbgy980 _1d991sp5"
                            : "_1d991sp4 _1h4pbgy7nc _1h4pbgy7s0 _1h4pbgy7dk _1h4pbgy7i8 _1h4pbgy9uw _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy79s _1h4pbgy7ao _1h4pbgy7c0 _1h4pbgy900 _1h4pbgy980 _1d991sp6"
                        }
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          1만원 이하
                        </font>
                      </Link>
                      <Link
                        href="#"
                        data-selected={
                          minPriceParam == 0 && maxPriceParam == 50000
                            ? "true"
                            : "false"
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          goPricePage(e.currentTarget, 0, 50000);
                        }}
                        className={
                          minPriceParam == 0 && maxPriceParam == 50000
                            ? "_1d991sp4 _1h4pbgy7nc _1h4pbgy7s0 _1h4pbgy7dk _1h4pbgy7i8 _1h4pbgy9uw _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy79s _1h4pbgy7ao _1h4pbgy7c0 _1h4pbgy900 _1h4pbgy980 _1d991sp5"
                            : "_1d991sp4 _1h4pbgy7nc _1h4pbgy7s0 _1h4pbgy7dk _1h4pbgy7i8 _1h4pbgy9uw _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy79s _1h4pbgy7ao _1h4pbgy7c0 _1h4pbgy900 _1h4pbgy980 _1d991sp6"
                        }
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          5만원 이하
                        </font>
                      </Link>
                      <Link
                        href=""
                        data-selected={
                          minPriceParam == 0 && maxPriceParam == 100000
                            ? "true"
                            : "false"
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          goPricePage(e.currentTarget, 0, 100000);
                        }}
                        className={
                          minPriceParam == 0 && maxPriceParam == 100000
                            ? "_1d991sp4 _1h4pbgy7nc _1h4pbgy7s0 _1h4pbgy7dk _1h4pbgy7i8 _1h4pbgy9uw _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy79s _1h4pbgy7ao _1h4pbgy7c0 _1h4pbgy900 _1h4pbgy980 _1d991sp5"
                            : "_1d991sp4 _1h4pbgy7nc _1h4pbgy7s0 _1h4pbgy7dk _1h4pbgy7i8 _1h4pbgy9uw _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy79s _1h4pbgy7ao _1h4pbgy7c0 _1h4pbgy900 _1h4pbgy980 _1d991sp6"
                        }
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          10만원 이하
                        </font>
                      </Link>
                    </div>
                  </div>
                  <div className="_1h4pbgy9ug _1h4pbgy9wo _1h4pbgy9xc _1h4pbgy908 _1h4pbgy7wo _1h4pbgy7x5">
                    <input
                      id="price-from"
                      className="_1d991sp3 _1h4pbgy7n4 _1h4pbgy7rs _1h4pbgy7dk _1h4pbgy7i8 _1h4pbgy8jc _1h4pbgy94w _1h4pbgy65k _1h4pbgy1u0 _1h4pbgy76o _1h4pbgy7ao _1h4pbgy7bs _1h4pbgy7aw"
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="최소가격"
                      defaultValue={minPriceParam}
                    />
                    <span className="_1h4pbgy780 _1h4pbgy7ao _1h4pbgy7c0">
                      <font style={{ verticalAlign: "inherit" }}>-</font>
                    </span>
                    <input
                      id="price-to"
                      className="_1d991sp3 _1h4pbgy7n4 _1h4pbgy7rs _1h4pbgy7dk _1h4pbgy7i8 _1h4pbgy8jc _1h4pbgy94w _1h4pbgy65k _1h4pbgy1u0 _1h4pbgy76o _1h4pbgy7ao _1h4pbgy7bs _1h4pbgy7aw"
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="최대가격"
                      defaultValue={maxPriceParam}
                    />
                  </div>
                  <div className="_1h4pbgy7w0">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        goPricePageBtn();
                      }}
                      className="seed-text-button seed-semantic-typography-label3-regular"
                      data-scope="button"
                      data-part="root"
                      id="button::Ri9j8p:"
                      type="button"
                      data-size="small"
                      data-variant="secondary"
                      data-style="underlined"
                    >
                      <span>
                        <font style={{ verticalAlign: "inherit" }}>적용</font>
                      </span>
                    </button>
                  </div>
                </div>
              </section>
            </aside>
            <div className="_1h4pbgy8jc _1h4pbgy9ug _1h4pbgy9vs">
              <div className="_1kbqy810 _1h4pbgy8jc _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy9x4 _1h4pbgy90g _1h4pbgya54 _1h4pbgy9zk _1h4pbgy7vc _1h4pbgy7x5 _1h4pbgy7vf">
                <div className="_1h4pbgy9ug _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy90g">
                  <ul className="_1h4pbgy9ug _1h4pbgy9x4 _1h4pbgy9wo _1h4pbgy90g">
                    <li className="_1h4pbgy7nc _1h4pbgy7s0 _1h4pbgy7dk _1h4pbgy7i8 _1h4pbgy9uw _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy79s _1h4pbgy7ao _1h4pbgy7c0 _1h4pbgy900 _1h4pbgy980 _1h4pbgy194 _1h4pbgy1q7 _1h4pbgy68">
                      <font style={{ verticalAlign: "inherit" }}>
                        {sortParam == "recent" ? "최신순" : "인기순"}
                      </font>
                    </li>
                    {categoryParam != null && (
                      <li className="_1h4pbgy7nc _1h4pbgy7s0 _1h4pbgy7dk _1h4pbgy7i8 _1h4pbgy9uw _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy79s _1h4pbgy7ao _1h4pbgy7c0 _1h4pbgy900 _1h4pbgy980 _1h4pbgy194 _1h4pbgy1q7 _1h4pbgy68">
                        {category_list.map((category) =>
                          category.categorykey == categoryParam ? (
                            <font
                              key={category.categorykey}
                              style={{ verticalAlign: "inherit" }}
                            >
                              {category.categoryname}
                            </font>
                          ) : (
                            ""
                          )
                        )}
                        <span
                          data-deltype="category"
                          onClick={(e) => deleteSearch(e.currentTarget)}
                          className="_1h4pbgy9uw _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy9yw"
                        >
                          <span
                            style={{
                              display: "inline-flex",
                              width: "14px",
                              height: "14px",
                            }}
                            data-seed-icon="icon_close_regular"
                            data-seed-icon-version="0.2.1"
                          >
                            <svg
                              id="icon_close_regular"
                              width="100%"
                              height="100%"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              data-karrot-ui-icon="true"
                            >
                              <g>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M3.72633 3.72633C4.0281 3.42456 4.51736 3.42456 4.81913 3.72633L12 10.9072L19.1809 3.72633C19.4826 3.42456 19.9719 3.42456 20.2737 3.72633C20.5754 4.0281 20.5754 4.51736 20.2737 4.81913L13.0928 12L20.2737 19.1809C20.5754 19.4826 20.5754 19.9719 20.2737 20.2737C19.9719 20.5754 19.4826 20.5754 19.1809 20.2737L12 13.0928L4.81913 20.2737C4.51736 20.5754 4.0281 20.5754 3.72633 20.2737C3.42456 19.9719 3.42456 19.4826 3.72633 19.1809L10.9072 12L3.72633 4.81913C3.42456 4.51736 3.42456 4.0281 3.72633 3.72633Z"
                                  fill="currentColor"
                                ></path>
                              </g>
                            </svg>
                          </span>
                        </span>
                      </li>
                    )}
                    {minPriceParam != null && maxPriceParam != null && (
                      <li className="_1h4pbgy7nc _1h4pbgy7s0 _1h4pbgy7dk _1h4pbgy7i8 _1h4pbgy9uw _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy79s _1h4pbgy7ao _1h4pbgy7c0 _1h4pbgy900 _1h4pbgy980 _1h4pbgy194 _1h4pbgy1q7 _1h4pbgy68">
                        <font style={{ verticalAlign: "inherit" }}>
                          {minPriceParam == 0 && maxPriceParam == 0
                            ? "나눔"
                            : minPriceParam == 0 && maxPriceParam == 10000
                              ? "1만원 이하"
                              : minPriceParam == 0 && maxPriceParam == 50000
                                ? "5만원 이하"
                                : minPriceParam == 0 && maxPriceParam == 100000
                                  ? "10만원 이하"
                                  : minPriceParam == null ||
                                      minPriceParam !== 0 ||
                                      maxPriceParam == null
                                    ? `${minPriceParam} - ${maxPriceParam}`
                                    : ""}
                        </font>
                        <span
                          data-deltype="price"
                          onClick={(e) => deleteSearch(e.currentTarget)}
                          className="_1h4pbgy9uw _1h4pbgy9xc _1h4pbgy9wo _1h4pbgy9yw"
                        >
                          <span
                            style={{
                              display: "inline-flex",
                              width: "14px",
                              height: "14px",
                            }}
                            data-seed-icon="icon_close_regular"
                            data-seed-icon-version="0.2.1"
                          >
                            <svg
                              id="icon_close_regular"
                              width="100%"
                              height="100%"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              data-karrot-ui-icon="true"
                            >
                              <g>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M3.72633 3.72633C4.0281 3.42456 4.51736 3.42456 4.81913 3.72633L12 10.9072L19.1809 3.72633C19.4826 3.42456 19.9719 3.42456 20.2737 3.72633C20.5754 4.0281 20.5754 4.51736 20.2737 4.81913L13.0928 12L20.2737 19.1809C20.5754 19.4826 20.5754 19.9719 20.2737 20.2737C19.9719 20.5754 19.4826 20.5754 19.1809 20.2737L12 13.0928L4.81913 20.2737C4.51736 20.5754 4.0281 20.5754 3.72633 20.2737C3.42456 19.9719 3.42456 19.4826 3.72633 19.1809L10.9072 12L3.72633 4.81913C3.42456 4.51736 3.42456 4.0281 3.72633 3.72633Z"
                                  fill="currentColor"
                                ></path>
                              </g>
                            </svg>
                          </span>
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              <div
                data-gtm="search_article"
                className="_13tpfox0 _1h4pbgy9vc _1h4pbgy8jc _13tpfox1"
                style={{ minWidth: '0' }}
              >
                {post_list.map((post, i) => (
                  <Link
                  key={i}
                  data-gtm="search_article"
                  className="_1h4pbgy9ug"
                  href={`/post/detail?postkey=${post.postkey}`}
                  style={{ minWidth: '0' }}
                >
                  <Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', minWidth: '0', padding:'5px', gap: '0.5rem', backgroundColor:'white'}}>
                    <div style={{ width: '100%',  minWidth: '0', marginLeft: '5px'}}>
                      <Typography component="span" level="title-lg" sx={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          maxWidth: '100%', // 제목이 있는 부모 요소의 너비에 맞춰서 제한
                          display: 'block',   
                          minWidth: '0',              // 텍스트가 줄어들지 않도록 설정
                          marginTop: '5px',
                        }}
                      >{post.title}</Typography>
                      <Typography level="body-sm">위치 · 동네 · {timeDifference(post.create_dtm)}
                  </Typography>
                    </div>
                  <AspectRatio minHeight="200px" maxHeight="200px" minWidth="200px" maxwidth="200px" margin="0" padding="0">
                  {post.pimg_list && post.pimg_list.length > 0 ? (
                    <span
                    className=" lazy-load-image-background opacity lazy-load-image-loaded"
                    style={{
                      color: "transparent",
                      display: "inlineBlock",
                    }}
                  >
                    <img
                      className="_1b153uwe _1h4pbgya3k"
                      src={post.pimg_list[0].imgurl}
                    />
                  </span>
                  ) : <ImageNotSupportedRoundedIcon style={{
                    width: '100%',  // 아이콘의 너비를 100%로 설정
                    height: '100%', // 아이콘의 높이를 100%로 설정
                    zIndex: 1      // 필요하면 z-index로 가시성을 확보
                  }}/>}
                  {post.poststatus == 2 ? (
                    <span className="_1b153uwj _1h4pbgy7ag _1h4pbgy788 _1b153uwl">
                      예약중
                    </span>
                  ) : post.poststatus == 3 ? (
                    <span className="_1b153uwj _1h4pbgy7ag _1h4pbgy788 _1b153uwm">
                      거래완료
                    </span>
                  ) : (
                    ""
                  )}
                  </AspectRatio>
                  <CardContent
                    orientation="horizontal"
                    sx={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}
                  >
                    <Typography sx={{ fontSize: 'lg', fontWeight: 'lg', flexGrow: 1, marginLeft: '5px', }}>
                      {post.price == 0
                        ? '나눔♥'
                        : new Intl.NumberFormat('ko-KR').format(post.price) + '원'}
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0' }}>
                      <IconButton variant="plain" size="sm" sx={{ padding: '4px' }}>
                        <RemoveRedEyeOutlinedIcon style={{ fontSize: '14px' }} />
                      </IconButton>
                      <span style={{ fontSize: '12px', marginLeft: '0' }}>{post.viewqty}</span>
                      <IconButton variant="plain" size="sm" sx={{ padding: '4px' }}>
                        <ChatBubbleOutlineOutlinedIcon style={{ fontSize: '14px' }} />
                      </IconButton>
                      <span style={{ fontSize: '12px', marginLeft: '0' }}>5</span>
                      <IconButton variant="plain" size="sm" sx={{ padding: '4px' }}>
                        <FavoriteBorderOutlinedIcon style={{ fontSize: '14px' }} />
                      </IconButton>
                      <span style={{ fontSize: '12px', marginLeft: '0' }}>10</span>
                    </div>
                  </CardContent>
                </Card>
                </Link>
                ))}
              </div>
              <div data-gtm="search_show_more_articles" className="_1h4pbgy7y8">
                <button
                  style={{ width: "100%" }}
                  className="seed-box-button"
                  data-scope="button"
                  data-part="root"
                  id="button::Rij8p:"
                  type="button"
                  data-size="medium"
                  data-variant="secondary"
                >
                  <span className="seed-semantic-typography-label3-bold">
                    <font style={{ verticalAlign: "inherit" }}>더보기</font>
                  </span>
                </button>
              </div>
              <Button
                className="write-button"
                style={{
                  position: "fixed",
                  bottom: "20px",
                  zIndex: "1000",
                  color: "white",
                  backgroundColor: "#ff6f0f",
                }}
                variant="contained"
                starticon={<AddIcon />}
                onClick={setOpen}
              >
                내 물건 팔기
              </Button>
            </div>
          </section>
        </div>
      </article>

      {/* <!-- 광고배너 --> */}
      <div className="_588sy4rk _588sy4rr _588sy4ry _588sy4s5">
        <div className="_1h4pbgy14w _1h4pbgy9ug _1h4pbgy9xc _1h4pbgya2w">
          <div className="a1nvr40 _1h4pbgy7nk _1h4pbgy7o1 _1h4pbgy7oy _1h4pbgy7pn _1h4pbgy7pw _1h4pbgy7qd _1h4pbgy7s8 _1h4pbgy7sp _1h4pbgy7tm _1h4pbgy7ub _1h4pbgy7uk _1h4pbgy7v1 _1h4pbgy14w _1h4pbgy8jc">
            <div className="a1nvr41">
              <div className="a1nvr42 _1h4pbgy9ug _1h4pbgy9wo _1h4pbgy9wi _1h4pbgy9vs _1h4pbgya0o">
                <div
                  className="a1nvr43 _1h4pbgy78g _1h4pbgy78p _1h4pbgy796 _1h4pbgy79n _1h4pbgy7ag _1h4pbgy7c8 _1h4pbgy7bk _1h4pbgy7az _1h4pbgy7b8 _1h4pbgy48 _1h4pbgya54 _1h4pbgya4i _19xafot0 _19xafot4 _19xafot5"
                  style={{
                    _19xafot2: "0ms",
                    _19xafot1: "500ms",
                    _19xafot3: "translateY(1rem)",
                  }}
                >
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      오늘 대단한 발견을 해보세요!
                    </font>
                  </font>
                </div>
                <div
                  className="a1nvr44 _1h4pbgy79c _1h4pbgy7a3 _1h4pbgy7ac _1h4pbgy7ag _1h4pbgy7c8 _1h4pbgy7bk _1h4pbgy7az _1h4pbgy7b8 _1h4pbgy8g _1h4pbgy81k _19xafot0 _19xafot4 _19xafot5"
                  style={{
                    _19xafot2: "50ms",
                    _19xafot1: "500ms",
                    _19xafot3: "translateY(1rem)",
                  }}
                >
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      앱을 받으세요
                    </font>
                  </font>
                </div>
                <div className="a1nvr45 _1h4pbgy9vc _1h4pbgy90g _1h4pbgy90r">
                  <Link
                    className="_19xafot0 _19xafot4 _19xafot5"
                    style={{
                      _19xafot2: "100ms",
                      _19xafot1: "500ms",
                      _19xafot3: "translateY(1rem)",
                    }}
                    href="#"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="_1h4pbgy8rk _1h4pbgy8rv _1h4pbgy8s4"
                      src="https://karrotmarket-com-sanity-cdn.krrt.io/production/49380c1c7e70e49f0f93baf0f790925eefc69082-120x40.svg"
                      alt="앱스토어에서 다운로드"
                    />
                  </Link>
                  <Link
                    className="_19xafot0 _19xafot4 _19xafot5"
                    style={{
                      _19xafot2: "150ms",
                      _19xafot1: "500ms",
                      _19xafot3: "translateY(1rem)",
                    }}
                    href="#"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="_1h4pbgy8rk _1h4pbgy8rv _1h4pbgy8s4"
                      src="https://karrotmarket-com-sanity-cdn.krrt.io/production/0d8f72b8e4cdb98af115a7c1f04c4abf19f5c419-180x53.svg"
                      alt="Google Play에서 받으세요"
                    />
                  </Link>
                </div>
              </div>
              <div className="a1nvr46">
                <img
                  src="https://karrotmarket-com-sanity-cdn.krrt.io/production/bff14eb869318da13eeb329ac060450dfe1ecadf-750x1624.png"
                  className="a1nvr49 a1nvr48 _1h4pbgy95k _1h4pbgya0o _19xafot0 _19xafot4 _19xafot5"
                  alt="홈 피드 화면의 스크린샷"
                  style={{
                    _19xafot2: "0ms",
                    _19xafot1: "1000ms",
                    _19xafot3: "translateY(1rem)",
                  }}
                />
                <img
                  src="https://karrotmarket-com-sanity-cdn.krrt.io/production/5cfdb708e8491051b4765819e796ca373e58fc44-753x1637.png"
                  className="a1nvr4a a1nvr48 _1h4pbgy95k _1h4pbgya0o _19xafot0 _19xafot4 _19xafot5"
                  alt="상세 페이지의 스크린샷"
                  style={{
                    _19xafot2: "0ms",
                    _19xafot1: "1000ms",
                    _19xafot3: "translateY(-1rem)",
                  }}
                />
                <img
                  src="https://karrotmarket-com-sanity-cdn.krrt.io/production/1da74f52dfcb54be6b1ec40af8d8480ed6abc4c0-900x339.png"
                  className="a1nvr4b _19xafot0 _19xafot4 _19xafot5"
                  alt="홈 피드 항목의 스크린샷"
                  style={{
                    _19xafot2: "300ms",
                    _19xafot1: "1000ms",
                    _19xafot3: "translateY(1rem)",
                  }}
                />
                <div className="a1nvr47"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 내 물건 팔기 모달 */}
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: handleSubmit,
          }}
        >
          <DialogTitle
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            내 물건 팔기
            <Button
              variant="outlined"
              size="small"
              type="submit"
              onClick={(e) =>
                (e.currentTarget.closest("form").dataset.mode = "save")
              }
              style={{
                marginLeft: "auto",
              }}
            >
              임시저장
            </Button>
          </DialogTitle>
          <DialogContent>
            <FormControl fullWidth margin="dense">
            <ImageList cols={11} gap={8} id="dragImageList" ref={containerRef}>
                <ImageListItem
                  style={{
                    width: 100,
                    height: 100,
                    position: "relative",
                  }}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    name="file"
                    onChange={handleChange}
                    style={{ display: "none" }}
                    multiple
                  />
                  <AddPhotoAlternateIcon
                    color="primary"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      cursor: "pointer",
                    }}
                    onClick={uploadImg}
                  />
                  <Typography
                    variant="caption"
                    style={{
                      position: "absolute",
                      bottom: 5, // 아이콘 아래에 배치
                      left: 0,
                      right: 0,
                      textAlign: "center",
                      color: "black",
                      backgroundColor: "rgba(255, 255, 255, 0.7)",
                      fontSize: "16px",
                    }}
                  >
                    {`${previewImages.length}/10`}
                  </Typography>
                </ImageListItem>
                {previewImages.map((img, i) => (
                  <ImageListItem
                    key={img.id}
                    style={{
                      width: 100,
                      height: 100,
                      border: "2px solid #ccc", // 이미지에 보더 추가
                      position: "relative",
                    }}
                    draggable="true"
                    className="draggable"
                  >
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDelete(i)}
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                        padding: 2,
                        zIndex: 10,
                      }}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                    <img
                      src={img.src}
                      alt={`Uploaded Preview ${i}`}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                    {i === 0 && (
                      <Typography
                        variant="caption"
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          textAlign: "center",
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          color: "white",
                          padding: "2px 0",
                        }}
                      >
                        대표 사진
                      </Typography>
                    )}
                  </ImageListItem>
                ))}
              </ImageList>
            </FormControl>
            <FormControl fullWidth margin="dense">
              <TextField
                autoFocus
                required
                margin="dense"
                id="title"
                name="title"
                label="제목"
                type="text"
                fullWidth
                size="small"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth margin="dense">
              <TextField
                autoFocus
                required
                margin="dense"
                id="categorykey"
                name="categorykey"
                label="카테고리"
                select
                fullWidth
                size="small"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {category_list.map((item) => (
                  <MenuItem key={item.categorykey} value={item.categorykey}>
                    {item.categoryname}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
            <FormControl fullWidth margin="dense">
              <FormLabel
                required
                id="demo-simple-row-radio-buttons-group-label"
              >
                거래 방식
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="method"
                value={method}
                onChange={(e) => {
                  setMethod(e.target.value);
                  setIsFree(e.target.value == 0 ? false : true);
                  setPrice(e.target.value == 0 ? "" : 0);
                }}
              >
                <FormControlLabel
                  value="0"
                  control={<Radio />}
                  label="판매하기"
                />
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="나눔하기"
                />
              </RadioGroup>
              <OutlinedInput
                size="small"
                id="price"
                name="price"
                placeholder="가격을 입력해주세요."
                disabled={isFree}
                value={isFree ? 0 : price}
                onChange={(e) => setPrice(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">원</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
              <FormControlLabel
                id="canbargain"
                name="canbargain"
                style={{ display: isFree ? "none" : "block" }}
                control={
                  <Checkbox
                    checked={canBargain === 1}
                    onChange={(e) => setCanBargain(e.target.checked ? 1 : 0)}
                  />
                }
                label="가격 제안 받기"
              />
            </FormControl>
            <FormControl fullWidth margin="dense">
              <TextField
                required
                id="content"
                name="content"
                label="자세한 설명"
                multiline
                rows={7}
                placeholder={`OO동에 올릴 게시글 내용을 작성해 주세요. (판매 금지 물품은 게시가 제한될 수 있어요.)\n\n신뢰할 수 있는 거래를 위해 자세히 적어주세요.`}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              onClick={(e) =>
                (e.currentTarget.closest("form").dataset.mode = "write")
              }
            >
              작성완료
            </Button>
            <Button onClick={handleClose}>취소</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </>
  );
}
