"use client";
import {
  Grid,
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  TextField,
  RadioGroup,
  FormControlLabel,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Pagination,
  TablePagination,
} from "@mui/material";
import PageContainer from "@/component/admin/container/PageContainer";
// components
import { useEffect, useState } from "react";
import DashboardCard from "@/component/admin/shared/DashboardCard";
import axios from "axios";
import PieChart from "@/component/admin/statistic/PieChart";

const Page = () => {
  // #region 기간
  const [start_dtm, setStart_dtm] = useState(new Date());
  const [end_dtm, setEnd_dtm] = useState(new Date());

  // 일자 선택
  const handleDateClick = (value, type) => {
    if (type == "start") {
      setStart_dtm(value);
    } else {
      setEnd_dtm(value);
    }
    setSelectedValue("");
  };
  const [selectedValue, setSelectedValue] = useState(1);
  const handleButtonClick = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    setDateByBtn();
  }, [selectedValue]);

  function setDateByBtn() {
    const today = new Date();
    if (selectedValue == 1) {
      setStart_dtm(today);
      setEnd_dtm(today);
    }
    if (selectedValue == 2) {
      const newday = new Date(today);
      newday.setDate(today.getDate() - 1);
      setStart_dtm(newday);
      setEnd_dtm(newday);
    }
    if (selectedValue == 3) {
      const newday = new Date(today);
      newday.setDate(today.getDate() - 3);
      setStart_dtm(newday);
      setEnd_dtm(today);
    }
    if (selectedValue == 4) {
      const newday = new Date(today);
      newday.setDate(today.getDate() - 7);
      setStart_dtm(newday);
      setEnd_dtm(today);
    }
    if (selectedValue == 5) {
      const newday = new Date(today);
      newday.setMonth(today.getMonth() - 1);
      setStart_dtm(newday);
      setEnd_dtm(today);
    }
    if (selectedValue == 6) {
      const newday = new Date(today);
      newday.setMonth(today.getMonth() - 3);
      setStart_dtm(newday);
      setEnd_dtm(today);
    }
    if (selectedValue == 7) {
      const newday = new Date(today);
      newday.setMonth(today.getMonth() - 6);
      setStart_dtm(newday);
      setEnd_dtm(today);
    }
  }
  // #endregion

  // #region 검색
  const [resList, setResList] = useState([]);
  const [cntList, setCntList] = useState([]);
  const [priceList, setPriceList] = useState([]);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2); // 월을 2자리로 맞추기
    const day = ("0" + date.getDate()).slice(-2); // 일을 2자리로 맞추기
    return `${year}-${month}-${day}`;
  };

  function doSrchFrm() {
    let tmpS = start_dtm;
    let tmpE = end_dtm;
    if (tmpS.length > 10) {
      tmpS = formatDate(start_dtm);
      tmpE = formatDate(end_dtm);
    }

    axios({
      url: "/ad/analpostcatepie",
      method: "get",
      params: {
        start_dtm: tmpS,
        end_dtm: tmpE,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setResList(res.data.res_resList);
      setCntList(res.data.res_cntList);
      setPriceList(res.data.res_priceList);
    });
  }
  // #endregion
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="stretch"
          style={{ marginBottom: "50px" }}
        >
          {/* 타이틀 */}
          <Grid item xs={12} sx={{ mb: 0.3 }}>
            <Typography variant="h5">게시글 분석</Typography>
          </Grid>
          {/* 검색 폼 */}
          <Grid item xs={12}>
            <DashboardCard>
              <form name="mform">
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <span style={{ width: "120px" }}>분석 유형 선택</span>
                    <FormControl sx={{ minWidth: 120, mr: 2 }} size="small">
                      <Select
                        className="fSelect category eCategory"
                        id="analType"
                        name="analType"
                        defaultValue="1"
                      >
                        <MenuItem value="1">카테고리 분석</MenuItem>
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
                    <span style={{ width: "120px" }}>기간</span>
                    <RadioGroup
                      row
                      defaultValue="1"
                      name="date2"
                      className="fChk"
                      sx={{ marginLeft: 1 }}
                    >
                      {[1, 2, 3, 4, 5, 6, 7].map((value, index) => {
                        const labels = [
                          "오늘",
                          "어제",
                          "3일",
                          "7일",
                          "1개월",
                          "3개월",
                          "6개월",
                        ];
                        return (
                          <FormControlLabel
                            key={value}
                            value={value}
                            control={
                              <Button
                                size="small"
                                variant={
                                  selectedValue === value
                                    ? "contained"
                                    : "outlined"
                                }
                                onClick={() => handleButtonClick(value)}
                              >
                                {labels[index]}
                              </Button>
                            }
                            label=""
                          />
                        );
                      })}
                    </RadioGroup>
                    <TextField
                      id="start_date"
                      type="date"
                      className="fText gDate"
                      name="start_date"
                      size="small"
                      sx={{ marginLeft: 2 }}
                      value={
                        start_dtm && typeof start_dtm.toISOString === "function"
                          ? start_dtm.toISOString().split("T")[0]
                          : start_dtm
                      }
                      onChange={(e) => handleDateClick(e.target.value, "start")}
                    />
                    <span style={{ margin: "0 10px" }}>~</span>
                    <TextField
                      id="end_date"
                      type="date"
                      className="fText gDate"
                      name="end_date"
                      size="small"
                      value={
                        end_dtm && typeof end_dtm.toISOString === "function"
                          ? end_dtm.toISOString().split("T")[0]
                          : end_dtm
                      }
                      defaultValue={new Date().toISOString().split("T")[0]}
                      onChange={(e) => handleDateClick(e.target.value, "end")}
                    />
                  </li>
                  {/* 검색 버튼 */}
                  <li style={{ textAlign: "center", marginTop: "20px" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={doSrchFrm}
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
        <Grid item xs={12} lg={12} style={{ marginBottom: "50px" }}>
          <Grid item xs={12} sx={{ mb: 0.3 }}>
            <Typography variant="h5">통계 그래프</Typography>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6} lg={6}>
              <PieChart
                title="상위 TOP 10 (거래수)"
                label={cntList.map((item) => item.categoryname)}
                data={cntList.map((item) => item.cnt)}
              />
            </Grid>
            <Grid item xs={6} lg={6}>
              <PieChart
                title="상위 TOP 10 (거래금액)"
                label={priceList.map((item) => item.categoryname)}
                data={priceList.map((item) => item.price)}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* 카테고리 검색결과 */}
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="stretch"
          style={{ marginBottom: "50px" }}
        >
          <Grid item xs={12} sx={{ mb: 0.3 }}>
            <Typography variant="h5" flexGrow={1}>
              순위 목록
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <DashboardCard>
              <TableContainer sx={{ overflowX: "auto", width: "100%" }}>
                <Table sx={{ tableLayout: "auto" }}>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">순위</TableCell>
                      <TableCell align="center">분류명</TableCell>
                      <TableCell align="center">거래수</TableCell>
                      <TableCell align="center">거래금액</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {resList && resList.length > 0 ? (
                      resList.map((item, i) => (
                        <TableRow key={i} hover tabIndex={-1}>
                          <TableCell align="center">{i + 1}</TableCell>
                          <TableCell component="th" scope="row">
                            <Box gap={2} display="flex" alignItems="center">
                              {item.img_url && (
                                <Avatar
                                  alt={item.categoryname}
                                  src={item.img_url}
                                />
                              )}
                              {item.categoryname}
                            </Box>
                          </TableCell>
                          <TableCell align="center">{item.cnt}</TableCell>
                          <TableCell align="right">{item.price}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell align="center" colSpan={10}>
                          <Box sx={{ py: 15, textAlign: "center" }}>
                            <Typography variant="h6" sx={{ mb: 1 }}>
                              검색 결과가 없습니다.
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
            </DashboardCard>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Page;
