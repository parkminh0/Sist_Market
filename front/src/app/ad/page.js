"use client";
import { Grid, Box, Typography } from "@mui/material";
import PageContainer from "@/component/admin/container/PageContainer";
// components
import SalesOverview from "@/component/admin/dashboard/SalesOverview";
import YearlyBreakup from "@/component/admin/dashboard/YearlyBreakup";
import RecentTransactions from "@/component/admin/dashboard/RecentTransactions";
import ProductPerformance from "@/component/admin/dashboard/ProductPerformance";
import Blog from "@/component/admin/dashboard/Blog";
import MonthlyEarnings from "@/component/admin/dashboard/MonthlyEarnings";
import Top_Analytic from "@/component/admin/dashboard/Top_Analytic";

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sx={{ mb: -2.25 }}>
            <Typography variant="h5">Dashboard</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Top_Analytic
              title="Total Page Views"
              count="4,42,236"
              percentage={59.3}
              extra="35,000"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Top_Analytic
              title="Total Users"
              count="78,250"
              percentage={70.5}
              extra="8,900"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Top_Analytic
              title="Total Order"
              count="18,800"
              percentage={27.4}
              isLoss
              color="warning"
              extra="1,943"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Top_Analytic
              title="Total Sales"
              count="$35,078"
              percentage={27.4}
              isLoss
              color="warning"
              extra="$20,395"
            />
          </Grid>

          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
