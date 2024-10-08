import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import DashboardCard from "../shared/DashboardCard";
import { useState } from "react";

export default function PieChart({ title, label, data }) {
  const [postStatusCnt, setPostStatusCnt] = useState([]);
  const [total, setTotal] = useState(0);

  // chart color
  const theme = useTheme();
  const c1 = "#2c3e50";
  const c2 = "#2ecc71";
  const c3 = "#f1c40f";
  const c4 = "#e67e22";
  const c5 = "#c0392b";
  const c6 = "#9b59b6";
  const c7 = "#1abc9c";
  const c8 = "#e74c3c";
  const c9 = "#ecf0f1";
  const c10 = "#95a5a6";

  const seriesNames = label || [];
  const seriescolumnchart = data || [];

  // chart
  const optionscolumnchart = {
    chart: {
      type: "donut",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      height: 155,
    },
    colors: [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: "75%",
          background: "transparent",
          labels: {
            show: true,
          },
        },
      },
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: true,
      labels: {
        colors: undefined, // 텍스트 색상
        useSeriesColors: false, // 시리즈의 색상을 레전드에 사용 여부
      },
    },
    labels: seriesNames.length > 0 ? seriesNames : [""],
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
    ],
  };

  return (
    <DashboardCard title={title}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <Chart
            options={optionscolumnchart}
            series={
              seriescolumnchart && seriescolumnchart.length > 0
                ? seriescolumnchart
                : [0]
            }
            type="donut"
            height={300}
            width={"100%"}
          />
        </Grid>
      </Grid>
    </DashboardCard>
  );
}
