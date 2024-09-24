"use client";
import React, { useEffect, useState } from "react";
import "/public/css/admin/user.css";
import Link from "next/link";
import axios from "axios";
import PageContainer from "@/component/admin/container/PageContainer";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Radio,
  RadioGroup,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import Top_Analytic from "@/component/admin/dashboard/Top_Analytic";
import DashboardCard from "@/component/admin/shared/DashboardCard";

export default function Page() {
  const [list, setList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [filteredList, setFilteredList] = useState([]); // 필터링된 게시글 리스트

  // 게시판 현황 카운트
  const API_URL = "/adpost/postcount";
  const [all, set_all_posts] = useState(0); // 전체 게시글 수
  const [tem_save, set_tem_save_posts] = useState(0); // 임시 저장 게시글 수
  const [sale, set_sale_posts] = useState(0); // 판매중 게시글 수
  const [saleing, set_saleing_posts] = useState(0); // 예약중(거래중) 게시글 수
  const [saled, set_saled_posts] = useState(0); // 거래완료 게시글 수
  const [hide, set_hide_posts] = useState(0); // 숨김 게시글 수

  // 상태 관리 추가
  const [postStatus, setPostStatus] = useState("all");
  const [method, setMethod] = useState("0");
  const [canBargain, setCanBargain] = useState("0");

  const baseUrl = "https://dtxw8q4qct0d4.cloudfront.net"; // 서버의 기본 URL

  function searchpost() {
    let frm = document.getElementById("frmSearch");
    let formData = new FormData(frm);

    // 검색 조건을 URLSearchParams로 변환
    let searchParams = Object.fromEntries(new URLSearchParams(formData));

    // 검색 조건을 처리하여 서버에 데이터를 요청
    axios({
      url: "/adpost/searchpost", // 실제 검색 API
      method: "post",
      data: JSON.stringify(searchParams), // JSON 문자열로 변환
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.data); // 서버 응답 확인
        setList(res.data.post_list); // 데이터 업데이트
      })
      .catch((error) => {
        console.error("There was an error with the search request:", error);
      });
  }

  // 게시글 현황
  function getCount() {
    axios
      .get(API_URL)
      .then((response) => {
        // 받아온 데이터를 각 상태에 맞게 설정
        const data = response.data.pcvo;
        set_all_posts(data.all_posts); // 전체 게시글 수
        set_tem_save_posts(data.tem_save_posts); // 임시 저장 게시글 수
        set_sale_posts(data.sale_posts); // 판매중 게시글 수
        set_saleing_posts(data.saleing_posts); // 예약중(거래중) 게시글 수
        set_saled_posts(data.saled_posts); // 거래완료 게시글 수
        set_hide_posts(data.hide_posts); // 숨김 게시글 수
      })
      .catch((error) => {
        console.error("Error fetching post counts:", error);
      });
  }

  function callData() {
    axios.get("/category/all").then((response) => {
      setCategoryList(response.data.category_list);
    });
  }

  useEffect(() => {
    getCount();
    callData();
    // fetchPostList();
  }, []);

  // 게시글 체크
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
      updatedCheckedItems = updatedCheckedItems.filter(
        (key) => key !== userkey
      );
    }
    setCheckedItems(updatedCheckedItems);
    // 모든 유저가 선택되었는지 확인> 전체 선택 상태 업데이트
    setAllChecked(updatedCheckedItems.length === userlist.length);
  };

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="stretch"
          style={{ marginBottom: "50px" }}
        >
          <Grid item xs={12} sx={{ mb: -2.25 }}>
            <Typography variant="h5">게시글 현황</Typography>
          </Grid>
          <Grid item xs={12} sm={2} md={2} lg={2}>
            <Top_Analytic
              title="전체"
              count={all}
              percentage={59.3}
              extra="35,000"
            />
          </Grid>
          <Grid item xs={12} sm={2} md={2} lg={2}>
            <Top_Analytic
              title="임시 저장"
              count={tem_save}
              percentage={70.5}
              extra="8,900"
            />
          </Grid>
          <Grid item xs={12} sm={2} md={2} lg={2}>
            <Top_Analytic
              title="판매중"
              count={sale}
              percentage={27.4}
              isLoss
              color="warning"
              extra="1,943"
            />
          </Grid>
          <Grid item xs={12} sm={2} md={2} lg={2}>
            <Top_Analytic
              title="예약중"
              count={saleing}
              percentage={27.4}
              isLoss
              color="warning"
              extra="1,943"
            />
          </Grid>
          <Grid item xs={12} sm={2} md={2} lg={2}>
            <Top_Analytic
              title="거래완료"
              count={saled}
              percentage={27.4}
              isLoss
              color="warning"
              extra="1,943"
            />
          </Grid>
          <Grid item xs={12} sm={2} md={2} lg={2}>
            <Top_Analytic
              title="숨김"
              count={hide}
              percentage={27.4}
              isLoss
              color="warning"
              extra="1,943"
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="stretch"
          style={{ marginBottom: "50px" }}
        >
          {/* 타이틀 */}
          <Grid item xs={12} sx={{ mb: 0.3 }}>
            <Typography variant="h5">게시글 조회</Typography>
          </Grid>

          {/* 검색 폼 */}
          <Grid item xs={12}>
            <DashboardCard>
              <form id="frmSearch">
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <span style={{ width: "120px" }}>검색분류</span>
                    <FormControl sx={{ minWidth: 120 }} size="small">
                      <Select
                        defaultValue="title"
                        className="fSelect eSearch"
                        id="searchCategory"
                        name="searchCategory"
                      >
                        <MenuItem value="title">게시글명</MenuItem>
                        <MenuItem value="postkey">게시글 번호</MenuItem>
                        <MenuItem value="hope_place">거래 장소명</MenuItem>
                        <MenuItem value="townkey">동네명</MenuItem>
                        <MenuItem value="userkey">회원번호</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      id="searchCategoryText"
                      label="검색어 입력"
                      type="text"
                      name="searchCategoryText"
                      style={{ width: "auto" }}
                      sx={{ marginLeft: 2 }}
                      size="small"
                    />
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <span style={{ width: "120px" }}>카테고리</span>
                    <FormControl sx={{ minWidth: 120 }} size="small">
                      <Select
                        className="fSelect category eCategory"
                        id="categorykey"
                        name="categorykey"
                        defaultValue="null"
                      >
                        <MenuItem value="null">- 분류 선택 -</MenuItem>
                        {categoryList.map((cate, i) => (
                          <MenuItem value={cate.categorykey} key={i}>
                            {cate.categoryname}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <span style={{ width: "120px" }}>게시글 상태</span>
                    <RadioGroup
                      row
                      defaultValue="all"
                      className="poststatus"
                      name="poststatus"
                      onChange={(e) => setPostStatus(e.target.value)}
                    >
                      <FormControlLabel
                        value="all"
                        control={<Radio size="small" />}
                        label="전체"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio size="small" />}
                        label="임시저장"
                      />
                      <FormControlLabel
                        value="1"
                        control={<Radio size="small" />}
                        label="판매중"
                      />
                      <FormControlLabel
                        value="2"
                        control={<Radio size="small" />}
                        label="예약중"
                      />
                      <FormControlLabel
                        value="3"
                        control={<Radio size="small" />}
                        label="거래완료"
                      />
                      <FormControlLabel
                        value="4"
                        control={<Radio size="small" />}
                        label="숨김"
                      />
                    </RadioGroup>
                  </li>
                  {/* 판매 or 나눔 */}
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <span style={{ width: "120px" }}>거래구분</span>
                    <RadioGroup
                      row
                      defaultValue="all"
                      className="method"
                      name="method"
                      onChange={(e) => setMethod(e.target.value)}
                    >
                      <FormControlLabel
                        value="all"
                        control={<Radio size="small" />}
                        label="전체"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio size="small" />}
                        label="판매"
                      />
                      <FormControlLabel
                        value="1"
                        control={<Radio size="small" />}
                        label="나눔"
                      />
                    </RadioGroup>
                  </li>
                  {/* 가격 */}
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <span style={{ width: "120px" }}>가격</span>
                    <FormControl sx={{ minWidth: 120 }} size="small">
                      <Select
                        defaultValue="price"
                        className="price"
                        name="price"
                        id="price"
                      >
                        <MenuItem value="price">등록 가격</MenuItem>
                        <MenuItem value="last_price">판매 가격</MenuItem>
                      </Select>
                    </FormControl>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: 16,
                      }}
                    >
                      <TextField
                        id="minPrice"
                        label="최소 가격"
                        type="number"
                        className="minPrice"
                        name="minPrice"
                        size="small"
                        sx={{ width: "120px" }} // 고정 너비 적용
                      />
                      <span style={{ margin: "0 10px" }}>~</span>
                      <TextField
                        id="maxPrice"
                        label="최대 가격"
                        type="number"
                        className="maxPrice"
                        name="maxPrice"
                        size="small"
                        sx={{ width: "120px" }} // 고정 너비 적용
                      />
                    </div>
                  </li>
                  {/* 흥정 */}
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <span style={{ width: "120px" }}>흥정가능여부</span>
                    <RadioGroup
                      row
                      defaultValue="all"
                      className="canbargain"
                      name="canbargain"
                      onChange={(e) => setCanBargain(e.target.value)}
                    >
                      <FormControlLabel
                        value="all"
                        control={<Radio size="small" />}
                        label="전체"
                      />
                      <FormControlLabel
                        value="1"
                        control={<Radio size="small" />}
                        label="흥정 가능"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio size="small" />}
                        label="흥정 불가능"
                      />
                    </RadioGroup>
                  </li>
                  {/* 일자 검색 */}
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <span style={{ width: "120px" }}>일자 검색</span>
                    <FormControl sx={{ minWidth: 120 }} size="small">
                      <Select className="dtm" name="dtm" id="dtm">
                        <MenuItem value="create_dtm">게시글 생성일</MenuItem>
                        <MenuItem value="update_dtm">게시글 수정일</MenuItem>
                        <MenuItem value="delete_dtm">게시글 삭제일</MenuItem>
                        <MenuItem value="remind_dtm">끌어올리기 일자</MenuItem>
                        <MenuItem value="deal_dtm">거래완료 일자</MenuItem>
                      </Select>
                    </FormControl>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: 16,
                      }}
                    >
                      <TextField
                        id="create_dtm_a"
                        type="date"
                        className="create_dtm_a"
                        name="create_dtm_a"
                        size="small"
                      />
                      <span style={{ margin: "0 10px" }}>~</span>
                      <TextField
                        id="create_dtm_b"
                        type="date"
                        className="create_dtm_b"
                        name="create_dtm_b"
                        size="small"
                      />
                    </div>
                  </li>

                  {/* 검색 버튼 */}
                  <li style={{ textAlign: "center", marginTop: "20px" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={searchpost}
                      className="btnSearch"
                      id="productSearchBtn"
                    >
                      검색
                    </Button>
                  </li>
                </ul>
              </form>
            </DashboardCard>
          </Grid>
        </Grid>
        {/* 게시글 목록 */}
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="stretch"
          style={{ marginBottom: "50px" }}
        >
          <Grid item xs={12} sx={{ mb: 0.3 }}>
            <Typography variant="h5" flexGrow={1}>
              게시글 목록
            </Typography>
          </Grid>
          {/* 검색 폼 */}
          <Grid item xs={12}>
            <DashboardCard>
              <Box display="flex" justifyContent="flex-end" alignItems="center">
                <Button
                  variant="contained"
                  color="inherit"
                  //onClick={delete_choice}
                  className="btnNormal"
                  sx={{ ml: 1 }}
                  startIcon={<AddIcon />}
                >
                  추가
                </Button>
                <Button
                  variant="contained"
                  color="inherit"
                  //onClick={delete_choice}
                  className="btnNormal"
                  sx={{ ml: 1 }}
                  startIcon={<EditIcon />}
                >
                  수정
                </Button>
                <Button
                  variant="contained"
                  color="inherit"
                  //onClick={delete_choice}
                  className="btnNormal"
                  sx={{ ml: 1 }}
                  startIcon={<ClearIcon />}
                >
                  삭제
                </Button>
              </Box>
              <TableContainer sx={{ overflowX: "auto", width: "100%" }}>
                <Table sx={{ minWidth: 1500 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell padding="checkbox">
                        <Checkbox
                          id="allChk"
                          type="checkbox"
                          className="allChk"
                          checked={allChecked}
                          onChange={handleAllCheck} // 전체 선택 체크박스 핸들러 연결
                        />
                      </TableCell>
                      <TableCell align="center">No</TableCell>
                      <TableCell
                        align="center"
                        //   sx={{ width: '', minWidth: '', }}
                      >
                        회원번호
                      </TableCell>
                      <TableCell align="center">도시번호</TableCell>
                      <TableCell align="center">카테고리 번호</TableCell>
                      <TableCell align="center">제목</TableCell>
                      <TableCell align="center">거래방식</TableCell>
                      <TableCell align="center">가격</TableCell>
                      <TableCell align="center">변동후 가격</TableCell>
                      <TableCell align="center">거래장소명</TableCell>
                      <TableCell align="center">흥정가능여부</TableCell>
                      <TableCell align="center">생성일자</TableCell>
                      <TableCell align="center">수정일자</TableCell>
                      <TableCell align="center">삭제일자</TableCell>
                      <TableCell align="center">끌어올리기일자</TableCell>
                      <TableCell align="center">거래완료일자</TableCell>
                      <TableCell align="center">게시글상태</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {list &&
                      list.map((prod, i) => (
                        <TableRow
                          key={i}
                          hover
                          tabIndex={-1}
                          role="checkbox"
                          onDoubleClick={() =>
                            window.open(`/admin/post/detail/${prod.postkey}`)
                          }
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              disableRipple
                              name="use_check[]"
                              className="rowChk"
                              checked={checkedItems.includes(prod.postkey)} // 개별 체크박스 상태 관리
                              onChange={(e) => handleRowCheck(e, prod.userkey)} // 개별 체크박스 핸들러 연결
                            />
                          </TableCell>
                          <TableCell align="center">{prod.postkey}</TableCell>
                          <TableCell align="center">{prod.userkey}</TableCell>
                          <TableCell align="center">{prod.townkey}</TableCell>
                          <TableCell align="center">
                            {prod.categorykey}
                          </TableCell>
                          {/* 이미지 */}
                          <TableCell component="th" scope="row">
                            <Box gap={2} display="flex" alignItems="center">
                              {prod.pImg_list && prod.pImg_list.length > 0 && (
                                <Avatar
                                  alt={prod.name}
                                  src={prod.pImg_list[0].imgurl}
                                />
                              )}
                              {prod.title}
                            </Box>
                          </TableCell>
                          <TableCell align="center">{prod.method}</TableCell>
                          <TableCell align="center">{prod.price}</TableCell>
                          <TableCell align="center">{prod.lastprice}</TableCell>
                          <TableCell align="center">
                            {prod.hope_place}
                          </TableCell>
                          <TableCell align="center">
                            {prod.canbargain}
                          </TableCell>
                          <TableCell align="right">
                            {
                              new Date(prod.create_dtm)
                                .toISOString()
                                .split("T")[0]
                            }
                          </TableCell>
                          <TableCell align="right">
                            {
                              new Date(prod.update_dtm)
                                .toISOString()
                                .split("T")[0]
                            }
                          </TableCell>
                          <TableCell align="right">
                            {
                              new Date(prod.delete_dtm)
                                .toISOString()
                                .split("T")[0]
                            }
                          </TableCell>
                          <TableCell align="right">
                            {
                              new Date(prod.remind_dtm)
                                .toISOString()
                                .split("T")[0]
                            }
                          </TableCell>
                          <TableCell align="right">
                            {
                              new Date(prod.deal_dtm)
                                .toISOString()
                                .split("T")[0]
                            }
                          </TableCell>
                          <TableCell align="center">
                            {prod.poststatus}
                          </TableCell>
                        </TableRow>
                      ))}

                    {list == null ||
                      (list.length == 0 && (
                        <TableRow>
                          <TableCell align="center" colSpan={16}>
                            <Box sx={{ py: 15, textAlign: "center" }}>
                              <Typography variant="h6" sx={{ mb: 1 }}>
                                검색된 게시글 목록이 없습니다.
                              </Typography>

                              <Typography variant="body2">
                                검색 조건을 확인해주세요.
                              </Typography>
                            </Box>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 3,
                }}
              >
                {/* <Typography sx={{ mr: 2 }}>Page: {page.nowPage}</Typography>
                <Pagination
                  count={page.totalPage}
                  showFirstButton
                  showLastButton
                  onChange={(e, newPage) => changePage(newPage)}
                /> */}
              </Box>
            </DashboardCard>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
