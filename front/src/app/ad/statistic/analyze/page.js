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
  useTheme,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
} from "@mui/material";
import PageContainer from "@/component/admin/container/PageContainer";
// components
import { useEffect, useState } from "react";
import DashboardCard from "@/component/admin/shared/DashboardCard";
import axios from "axios";
import dynamic from "next/dynamic";
import PieChart from "@/component/admin/statistic/PieChart";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Page = () => {
  const [date1, setDate1] = useState("1");
  const [start_dtm, setStart_dtm] = useState(new Date());
  const [end_dtm, setEnd_dtm] = useState(new Date());

  // 일자 선택
  const handleDateClick = (value, type) => {
    if (type && type == "start") {
      setStart_dtm(value);
    } else {
      setEnd_dtm(value);
    }
    setSelectedValue("");
  };

  useEffect(() => {
    setSelectedValue(1);
    setDateByBtn();
  }, [date1]);

  // #region 일별
  const [selectedValue, setSelectedValue] = useState(1);
  const handleButtonClick = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    setDateByBtn();
  }, [selectedValue]);
  // #endregion

  // #region 주별
  // #endregion

  function setDateByBtn() {
    const today = new Date();
    // 일별
    if (date1 == "1") {
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
    // 주별
    else if (date1 == "2") {
      const newday = new Date(today);
      newday.setDate(today.getDate() - 7 * selectedValue);
      setStart_dtm(newday);
      setEnd_dtm(today);
    }
    // 월별
    else if (date1 == "3") {
      const newday = new Date(today);
      newday.setMonth(today.getMonth() - 2);

      const yearMonthFormat = (date) => {
        const year = date.getFullYear();
        const month = ("0" + (date.getMonth() + 1)).slice(-2); // 월을 2자리로 맞추기
        //const day = "01"; // 월을 2자리로 맞추기
        return `${year}-${month}`;
      };

      setStart_dtm(yearMonthFormat(newday));
      setEnd_dtm(yearMonthFormat(today));
    }
  }

  // #region 검색
  function getLastDayOfMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  const [dealchart, setDealchart] = useState([]);
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

    if (analTypeValue == 1 && date1 == "3") {
      tmpS = tmpS + "-01";
      tmpE = tmpE + "-" + getLastDayOfMonth(tmpE.slice(0, 4), tmpE.slice(5, 7));
    }

    if (analTypeValue == 1) {
      axios({
        url: "/ad/dealchart",
        method: "get",
        params: {
          start_dtm: tmpS,
          end_dtm: tmpE,
          type: date1,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        setDealchart(res.data.res_dealchart);
      });
    } else if (analTypeValue == 2) {
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
  }

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  const [seriescolumnchart, setSeriescolumnchart] = useState([]);
  const [optionscolumnchart, setOptionscolumnchart] = useState([]);
  useEffect(() => {
    if (dealchart && dealchart.length > 0) {
      setSeriescolumnchart([
        {
          name: "거래 가격", // 시리즈 이름
          type: "bar",
          data: dealchart.map((item) => item.price), // 데이터 값 배열
        },
        {
          name: "거래 건수", // 시리즈 이름
          type: "line",
          data: dealchart.map((item) => item.cnt), // 데이터 값 배열
        },
      ]);
      setOptionscolumnchart({
        chart: {
          type: "mixed",
          fontFamily: "'Plus Jakarta Sans', sans-serif;",
          foreColor: "#adb0bb",
          toolbar: {
            show: true,
          },
          height: 370,
        },
        stroke: {
          width: [0, 2], // 꺾은선 그래프는 두께 2, 막대 그래프는 0
          curve: "smooth", // 꺾은선 그래프의 선을 부드럽게 처리
        },
        markers: {
          size: 5, // 포인트 크기 설정
          colors: secondary, // 포인트 색상 설정
          strokeColors: "#fff", // 포인트 테두리 색상
          strokeWidth: 1, // 포인트 테두리 두께
          hover: {
            sizeOffset: 3, // 마우스를 올렸을 때 포인트 크기 증가
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            barHeight: "60%",
            columnWidth: "42%",
            borderRadius: [6],
            borderRadiusApplication: "end",
            borderRadiusWhenStacked: "all",
          },
        },
        yaxis: [
          {
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: primary,
            },
            labels: {
              style: {
                colors: primary,
              },
            },
            title: {
              text: "가격",
              style: {
                color: primary,
              },
            },
          },
          {
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: secondary,
            },
            labels: {
              style: {
                colors: secondary,
              },
            },
            title: {
              text: "건수",
              style: {
                color: secondary,
              },
            },
          },
        ],
        colors: [primary, secondary],
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: true,
        },
        grid: {
          borderColor: "rgba(0,0,0,0.1)",
          strokeDashArray: 3,
          xaxis: {
            lines: {
              show: false,
            },
          },
        },
        // x축
        xaxis: {
          categories: dealchart.map((item) => item.dtm),
          axisBorder: {
            show: false,
          },
        },
        tooltip: {
          theme: "dark",
          fillSeriesColor: false,
        },
      });
    }
  }, [dealchart]);
  // #endregion

  const [analTypeValue, setAnalTypeValue] = useState("1");

  function analTypeChange(value) {
    setAnalTypeValue(value);
  }

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
            <Typography variant="h5">거래 분석</Typography>
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
                        onChange={(e) => analTypeChange(e.target.value)}
                      >
                        <MenuItem value="1">거래 분석</MenuItem>
                        <MenuItem value="2">카테고리 분석</MenuItem>
                      </Select>
                    </FormControl>
                  </li>
                  {analTypeValue == 1 ? (
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <span style={{ width: "120px" }}>분류</span>
                      <FormControl size="small" sx={{ minWidth: 120 }}>
                        <Select
                          defaultValue="1"
                          className="fSelect"
                          name="date1"
                          onChange={(e) => setDate1(e.target.value)}
                        >
                          <MenuItem value="1">일별</MenuItem>
                          <MenuItem value="2">주별</MenuItem>
                          <MenuItem value="3">월별</MenuItem>
                        </Select>
                      </FormControl>
                    </li>
                  ) : (
                    ""
                  )}
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ width: "120px" }}>기간</span>
                    {analTypeValue == 1 ? (
                      date1 == "1" ? (
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
                      ) : date1 == 2 ? (
                        <>
                          최근{" "}
                          <TextField
                            type="number"
                            size="small"
                            sx={{ width: 80 }}
                            inputProps={{ min: 1 }}
                            value={selectedValue}
                            onChange={(e) => handleButtonClick(e.target.value)}
                          />
                          주
                        </>
                      ) : (
                        ""
                      )
                    ) : analTypeValue == 2 ? (
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
                    ) : (
                      ""
                    )}
                    <TextField
                      id="start_date"
                      type={date1 && date1 == "3" ? "month" : "date"}
                      className="fText gDate"
                      name="start_date"
                      size="small"
                      sx={{ marginLeft: date1 == "3" ? 0 : 2 }}
                      inputProps={{
                        readOnly: date1 == "2" ? true : false,
                      }}
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
                      type={date1 && date1 == "3" ? "month" : "date"}
                      className="fText gDate"
                      name="end_date"
                      size="small"
                      inputProps={{
                        readOnly: date1 == "2" ? true : false,
                      }}
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
        <Grid item xs={12} lg={12}>
          <Grid item xs={12} sx={{ mb: 0.3 }}>
            <Typography variant="h5">
              통계 그래프
              {analTypeValue == 1 ? "(거래분석)" : "(카테고리 분석)"}
            </Typography>
          </Grid>
          {analTypeValue == 1 ? (
            <DashboardCard>
              {optionscolumnchart && seriescolumnchart.length > 0 && (
                <Chart
                  options={optionscolumnchart}
                  series={seriescolumnchart}
                  type="bar"
                  height={370}
                  width={"100%"}
                />
              )}
            </DashboardCard>
          ) : (
            <>
              <Grid container spacing={2} style={{ marginBottom: "50px" }}>
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
                                  <Box
                                    gap={2}
                                    display="flex"
                                    alignItems="center"
                                  >
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
                                <TableCell align="right">
                                  {item.price}
                                </TableCell>
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
            </>
          )}
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Page;
