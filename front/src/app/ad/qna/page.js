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
import { useRouter } from "next/navigation";

export default function Page() {
  const ALL_URL = "/qna/all";
  const SELECT_URL = "/qna/select";
  const CHKDEL_URL = "/qna/chkDelete";

  const router = useRouter();
  const [list, setList] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [page, setPage] = useState({});
  const [isanswered, setIsAnswered] = useState(""); // 추가된 상태

  function getData(cPage, selectedData = "") {
    const url =
      selectedData !== ""
        ? `${SELECT_URL}?cPage=${cPage}&isanswered=${selectedData}`
        : `${ALL_URL}?cPage=${cPage}`;
    axios({
      url,
      method: "get",
    })
      .then((res) => {
        setList(res.data.q_ar);
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
    getData(1);
  }, []);

  function changePage(pNum) {
    getData(pNum, isanswered);
  }

  const handleAllCheck = (e) => {
    const checked = e.target.checked;
    setAllChecked(checked);
    if (checked) {
      const allCheckedItems = list.map((item) => item.qnakey);
      setCheckedItems(allCheckedItems);
    } else {
      setCheckedItems([]);
    }
  };

  const handleRowCheck = (e, qnakey) => {
    const checked = e.target.checked;
    let updatedCheckedItems = [...checkedItems];
    if (checked) {
      updatedCheckedItems.push(qnakey);
    } else {
      updatedCheckedItems = updatedCheckedItems.filter(
        (item) => item !== qnakey
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
      .post(CHKDEL_URL, checkedItems)
      .then((res) => {
        alert("삭제 완료");
        getData(1);
      })
      .catch((error) => {
        console.error("삭제 중 오류가 발생했습니다.", error);
      });
  }

  const handleSelect = (e) => {
    const selectedData = e.target.value;
    setIsAnswered(selectedData);
    getData(1, selectedData);
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
            <Typography variant="h5">문의사항 현황</Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Top_Analytic
              title="전체"
              count={0}
              percentage={59.3}
              extra="35,000"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Top_Analytic
              title="답변 완료"
              count={0}
              percentage={70.5}
              extra="8,900"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Top_Analytic
              title="답변 대기"
              count={0}
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
            <Typography variant="h5">문의사항 조회</Typography>
          </Grid>

          {/* 검색 폼 */}
          <Grid item xs={12}>
            <DashboardCard>
              <form name="mform" method="post" action="/search_user_admin">
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {/* 개인정보 */}
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <span style={{ width: "120px" }}>사용자</span>
                    <FormControl sx={{ minWidth: 120 }} size="small">
                      <Select
                        defaultValue="null"
                        className="fSelect"
                        name="search_type"
                      >
                        <MenuItem value="null">--선택--</MenuItem>
                        <MenuItem value="name">이름</MenuItem>
                        <MenuItem value="id">아이디</MenuItem>
                        <MenuItem value="email">이메일</MenuItem>
                        <MenuItem value="phone">전화번호</MenuItem>
                        <MenuItem value="nickname">닉네임</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      label="검색어"
                      type="text"
                      name="type"
                      className="fText"
                      style={{ width: "auto" }}
                      sx={{ marginLeft: 2 }}
                      size="small"
                    />
                  </li>
                  {/* 제목 */}
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <span style={{ width: "120px" }}>제목</span>
                    <TextField
                      label="제목"
                      type="text"
                      name="type"
                      className="fText"
                      style={{ width: "auto" }}
                      size="small"
                    />
                  </li>
                  {/* 작성일 */}
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span style={{ width: "120px" }}>작성일</span>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <TextField
                          id="regist_start_date"
                          type="date"
                          className="fText gDate"
                          name="regist_start_date"
                          size="small"
                          onChange={(e) => setRegist_start_date(e.target.value)}
                          onKeyDown={(e) => e.preventDefault()}
                        />
                        <span style={{ margin: "0 10px" }}>~</span>
                        <TextField
                          id="regist_end_date"
                          type="date"
                          className="fText gDate"
                          name="regist_end_date"
                          size="small"
                          onChange={(e) => setRegist_end_date(e.target.value)}
                          onKeyDown={(e) => e.preventDefault()}
                        />
                      </div>
                    </div>
                  </li>
                  {/* 답변완료일 */}
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span style={{ width: "120px" }}>답변완료일</span>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <TextField
                          id="regist_start_date"
                          type="date"
                          className="fText gDate"
                          name="regist_start_date"
                          size="small"
                          onChange={(e) => setRegist_start_date(e.target.value)}
                          onKeyDown={(e) => e.preventDefault()}
                        />
                        <span style={{ margin: "0 10px" }}>~</span>
                        <TextField
                          id="regist_end_date"
                          type="date"
                          className="fText gDate"
                          name="regist_end_date"
                          size="small"
                          onChange={(e) => setRegist_end_date(e.target.value)}
                          onKeyDown={(e) => e.preventDefault()}
                        />
                      </div>
                    </div>
                  </li>
                  {/* 가입일 & 탈퇴 여부 */}
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <span style={{ width: "120px" }}>답변여부</span>
                    <RadioGroup
                      row
                      defaultValue="2"
                      name="del"
                      className="fChk"
                      onChange={(e) => setIsdeleted(e.target.value)}
                    >
                      <FormControlLabel
                        value="2"
                        control={<Radio size="small" />}
                        label="전체"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio size="small" />}
                        label="답변 X"
                      />
                      <FormControlLabel
                        value="1"
                        control={<Radio size="small" />}
                        label="답변 O"
                      />
                    </RadioGroup>
                  </li>
                  {/* 검색 버튼 */}
                  <li style={{ textAlign: "center", marginTop: "20px" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => doSrchFrm(0)}
                      className="btnSearch"
                    >
                      검색
                    </Button>
                  </li>
                </ul>
              </form>
            </DashboardCard>
          </Grid>
        </Grid>
        {/* 문의사항 목록 */}
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="stretch"
          style={{ marginBottom: "50px" }}
        >
          <Grid item xs={12} sx={{ mb: 0.3 }}>
            <Typography variant="h5" flexGrow={1}>
              문의사항 목록
            </Typography>
          </Grid>
          {/* 검색 폼 */}
          <Grid item xs={12}>
            <DashboardCard>
              <Box display="flex" justifyContent="flex-end" alignItems="center">
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={delete_choice}
                  className="btnNormal"
                  sx={{ ml: 1, display: "none" }}
                  startIcon={<AddIcon />}
                >
                  추가
                </Button>
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={delete_choice}
                  className="btnNormal"
                  sx={{ ml: 1 }}
                  startIcon={<EditIcon />}
                >
                  답변하기
                </Button>
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={delete_choice}
                  className="btnNormal"
                  sx={{ ml: 1 }}
                  startIcon={<ClearIcon />}
                >
                  삭제
                </Button>
              </Box>
              <TableContainer sx={{ overflowX: "auto", width: "100%" }}>
                <Table sx={{ tableLayout: "auto" }}>
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
                      <TableCell align="center">번호</TableCell>
                      <TableCell align="center">사용자번호</TableCell>
                      <TableCell align="center">제목</TableCell>
                      <TableCell align="center">작성일</TableCell>
                      <TableCell align="center">답변 완료일</TableCell>
                      <TableCell align="center">답변 여부</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {list && list.length > 0 ? (
                      list.map((ar, i) => (
                        <TableRow key={i} hover tabIndex={-1} role="checkbox">
                          <TableCell padding="checkbox">
                            <Checkbox
                              disableRipple
                              name="use_board[]"
                              className="rowChk"
                              value={ar.qnakey}
                              checked={checkedItems.includes(ar.qnakey)} // 개별 체크박스 상태 관리
                              onChange={(e) => handleRowCheck(e, ar.qnakey)}
                            />
                          </TableCell>
                          <TableCell
                            align="center"
                            component="th"
                            scope="row"
                            onClick={() =>
                              router.push(`/admin/qna/detail/${ar.qnakey}`)
                            }
                            style={{ cursor: "pointer" }}
                          >
                            {(page.nowPage - 1) * page.numPerPage + i + 1}
                          </TableCell>
                          <TableCell align="right">{ar.userkey}</TableCell>
                          <TableCell
                            onClick={() =>
                              router.push(`/admin/qna/detail/${ar.qnakey}`)
                            }
                            style={{ cursor: "pointer" }}
                          >
                            {ar.title ? ar.title : "-"}
                          </TableCell>
                          <TableCell align="center">
                            {
                              new Date(ar.create_dtm)
                                .toISOString()
                                .split("T")[0]
                            }
                          </TableCell>
                          <TableCell align="center">
                            {ar.answer_dtm
                              ? new Date(ar.answer_dtm)
                                  .toISOString()
                                  .split("T")[0]
                              : "-"}
                          </TableCell>
                          <TableCell align="center">
                            {ar.isanswered == 1 ? "O" : "X"}
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell align="center" colSpan={10}>
                          <Box sx={{ py: 15, textAlign: "center" }}>
                            <Typography variant="h6" sx={{ mb: 1 }}>
                              검색된 문의사항 목록이 없습니다.
                            </Typography>

                            <Typography variant="body2">
                              검색 조건을 확인해주세요.
                            </Typography>
                          </Box>
                        </TableCell>
                      </TableRow>
                    )}
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
                <Typography sx={{ mr: 2 }}>Page: {page.nowPage}</Typography>
                <Pagination
                  count={page.totalPage}
                  showFirstButton
                  showLastButton
                  onChange={(e, newPage) => changePage(newPage)}
                />
              </Box>
            </DashboardCard>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
