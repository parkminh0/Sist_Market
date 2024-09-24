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
  //유저 카운트
  const API_URL = "/user/api/usercount";
  const [count, setCount] = useState({});
  const [del, setDel] = useState(0);
  const [act, setAct] = useState(0);

  const [search_type, setSearch_type] = useState("name");
  const [type, setType] = useState("");
  const [regist_start_date, setRegist_start_date] = useState("");
  const [regist_end_date, setRegist_end_date] = useState("");
  const [isdeleted, setIsdeleted] = useState(0);
  const [isauthorized, setIsauthorized] = useState(0);
  const [recent_login_start_date, setRecent_login_start_date] = useState("");
  const [recent_login_end_date, setRecent_login_end_date] = useState("");

  //유저 검색
  const API_URL_2 = "/user/api/search_user_admin";
  const [userlist, setUserlist] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  //페이징
  const [totalPage, setTotalPage] = useState(0);
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
      updatedCheckedItems = updatedCheckedItems.filter(
        (key) => key !== userkey
      );
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
      method: "post",
      params: {
        search_type: search_type,
        type: type,
        regist_start_date: regist_start_date,
        regist_end_date: regist_end_date,
        isdeleted: isdeleted,
        recent_login_start_date: recent_login_start_date,
        recent_login_end_date: recent_login_end_date,
        isauthorized: isauthorized,
      },
    })
      .then((response) => {
        setUserlist(response.data.ar);
        setTotalPage(response.data.totalPage);
        setTotalRecords(response.data.totalRecord);
        setPage(response.data.page);
      })
      .catch((error) => {
        console.error("Error during search:", error);
      });
  }

  function delete_choice() {
    console.log("delete_choice 함수 호출됨");
    console.log("DEL_URL:", DEL_URL);
    axios
      .post(DEL_URL, checkedItems)
      .then((response) => {
        alert("회원 탈퇴가 완료되었습니다.");
        // 체크박스 선택 해제
        setCheckedItems([]); // 개별 체크박스 해제
        setAllChecked(false); // 전체 선택 체크박스 해제
        doSrchFrm(0);
        getCount();
      })
      .catch((error) => {
        console.error("Error deleting users:", error);
        alert("회원 탈퇴 중 오류가 발생했습니다. 다시 시도해 주세요.");
      });
  }

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
            <Typography variant="h5">사용자 현황</Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Top_Analytic
              title="전체 회원"
              count={count.cntAll}
              percentage={59.3}
              extra="35,000"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Top_Analytic
              title="회원"
              count={act}
              percentage={70.5}
              extra="8,900"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Top_Analytic
              title="탈퇴회원"
              count={del}
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
            <Typography variant="h5">사용자 조회</Typography>
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
                    <span style={{ width: "120px" }}>개인정보</span>
                    <FormControl sx={{ minWidth: 120 }} size="small">
                      <Select
                        defaultValue="name"
                        className="fSelect"
                        name="search_type"
                        onChange={(e) => setSearch_type(e.target.value)}
                      >
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
                      onChange={(e) => {
                        setType(e.target.value);
                      }}
                      sx={{ marginLeft: 2 }}
                      size="small"
                    />
                  </li>
                  {/* 가입일 & 탈퇴 여부 */}
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <Grid container spacing={2}>
                      {/* 가입일 */}
                      <Grid item xs={6}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span style={{ width: "120px" }}>가입일</span>
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
                              onChange={(e) =>
                                setRegist_start_date(e.target.value)
                              }
                            />
                            <span style={{ margin: "0 10px" }}>~</span>
                            <TextField
                              id="regist_end_date"
                              type="date"
                              className="fText gDate"
                              name="regist_end_date"
                              size="small"
                              onChange={(e) =>
                                setRegist_end_date(e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </Grid>
                      {/* 탈퇴 여부 */}
                      <Grid item xs={6}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span style={{ width: "120px" }}>탈퇴여부</span>
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
                              label="탈퇴 X"
                            />
                            <FormControlLabel
                              value="1"
                              control={<Radio size="small" />}
                              label="탈퇴 O"
                            />
                          </RadioGroup>
                        </div>
                      </Grid>
                    </Grid>
                  </li>
                  {/* 최근접속일, 본인인증 여부 */}
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <Grid container spacing={2}>
                      {/* 최근접속일 */}
                      <Grid item xs={6}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span style={{ width: "120px" }}>최근접속일</span>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <TextField
                              id="recent_login_start_date"
                              type="date"
                              className="fText gDate"
                              name="regist_start_date"
                              size="small"
                              onChange={(e) =>
                                setRecent_login_start_date(e.target.value)
                              }
                            />
                            <span style={{ margin: "0 10px" }}>~</span>
                            <TextField
                              id="recent_login_end_date"
                              type="date"
                              className="fText gDate"
                              name="regist_end_date"
                              size="small"
                              onChange={(e) =>
                                setRecent_login_end_date(e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </Grid>
                      {/* 본인인증 여부 */}
                      <Grid item xs={6}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span style={{ width: "120px" }}>본인인증여부</span>
                          <RadioGroup
                            row
                            defaultValue="2"
                            name="isauthorized"
                            className="fChk"
                            onChange={(e) => setIsauthorized(e.target.value)}
                          >
                            <FormControlLabel
                              value="2"
                              control={<Radio size="small" />}
                              label="전체"
                            />
                            <FormControlLabel
                              value="0"
                              control={<Radio size="small" />}
                              label="인증 X"
                            />
                            <FormControlLabel
                              value="1"
                              control={<Radio size="small" />}
                              label="인증 O"
                            />
                          </RadioGroup>
                        </div>
                      </Grid>
                    </Grid>
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
        {/* 사용자 목록 */}
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="stretch"
          style={{ marginBottom: "50px" }}
        >
          <Grid item xs={12} sx={{ mb: 0.3 }}>
            <Typography variant="h5" flexGrow={1}>
              사용자 목록
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
                  sx={{ ml: 1 }}
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
                  수정
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
                <Table sx={{ minWidth: 1000 }}>
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
                      <TableCell align="center">이름</TableCell>
                      <TableCell
                        align="center"
                        // align="center"
                        //   sx={{
                        //     width: '',
                        //     minWidth: '',
                        //   }}
                      >
                        등록일
                      </TableCell>
                      <TableCell align="center">아이디</TableCell>
                      <TableCell align="center">닉네임</TableCell>
                      <TableCell align="center">전화번호</TableCell>
                      <TableCell align="center">이메일</TableCell>
                      <TableCell align="center">탈퇴여부</TableCell>
                      <TableCell align="center">인증여부</TableCell>
                      <TableCell align="center">최근 접속일</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(userlist || []).map((item, i) => (
                      <TableRow key={i} hover tabIndex={-1} role="checkbox">
                        <TableCell padding="checkbox">
                          <Checkbox
                            disableRipple
                            name="use_check[]"
                            className="rowChk"
                            checked={checkedItems.includes(item.userkey)} // 개별 체크박스 상태 관리
                            onChange={(e) => handleRowCheck(e, item.userkey)} // 개별 체크박스 핸들러 연결
                          />
                        </TableCell>
                        <TableCell component="th" scope="row">
                          <Link
                            href={`/admin/user/userEdit?userkey=${item.userkey}`}
                          >
                            <Box gap={2} display="flex" alignItems="center">
                              <Avatar alt={item.name} src={item.imgurl} />
                              {item.name}
                            </Box>
                          </Link>
                        </TableCell>
                        <TableCell align="right">
                          {
                            new Date(item.create_dtm)
                              .toISOString()
                              .split("T")[0]
                          }
                        </TableCell>
                        <TableCell>
                          <Link
                            href={`/admin/user/userEdit?userkey=${item.userkey}`}
                          >
                            {item.id}
                          </Link>
                        </TableCell>
                        <TableCell align="center">{item.nickname}</TableCell>
                        <TableCell align="center">{item.phone}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell align="center">{item.isdeleted}</TableCell>
                        <TableCell align="center">
                          {item.isauthorized}
                        </TableCell>
                        <TableCell align="right">
                          {new Date(item.login_dtm).toISOString().split("T")[0]}
                        </TableCell>
                      </TableRow>
                    ))}

                    {userlist == null ||
                      (userlist.length == 0 && (
                        <TableRow>
                          <TableCell align="center" colSpan={10}>
                            <Box sx={{ py: 15, textAlign: "center" }}>
                              <Typography variant="h6" sx={{ mb: 1 }}>
                                검색된 사용자 목록이 없습니다.
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
              {/* Pagination을 가운데에 배치 */}
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
