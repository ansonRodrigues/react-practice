import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Sidebar from "./SideBar"; // (Make sure filename case matches your file system)
import AdminHeader from "./AdminHeader";
import StatCard from "./StatCard"; // Import the new component

// Icons
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import GroupIcon from "@mui/icons-material/Group";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const AdminDashboard = () => {
  // Mock Data mimicking the screenshot
  // In the future, this will come from Redux (useSelector)
  const statData = [
    {
      title: "Total Revenue",
      value: "$45,231",
      growth: "+12.5%",
      icon: <AttachMoneyIcon />,
      color: "#10B981", // Green
    },
    {
      title: "Total Products",
      value: "1,234",
      growth: "+5.2%",
      icon: <Inventory2Icon />,
      color: "#3B82F6", // Blue
    },
    {
      title: "Total Users",
      value: "8,549",
      growth: "+18.3%",
      icon: <GroupIcon />,
      color: "#8B5CF6", // Purple
    },
    {
      title: "Growth Rate",
      value: "23.8%",
      growth: "+3.1%",
      icon: <TrendingUpIcon />,
      color: "#F59E0B", // Orange
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      {/* 1. Sidebar */}
      <Sidebar />

      {/* 2. Main Content Wrapper */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#F4F7FE",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <AdminHeader />

        {/* Page Content */}
        <Box sx={{ p: 3 }}>
          <Typography
            variant="h6"
            sx={{ mb: 3, fontWeight: "bold", color: "#2B3674" }}
          >
            Dashboard Overview
          </Typography>

          {/* Grid Layout for Cards */}
          <Grid container spacing={4}>
            {statData.map((item, index) => (
              <Grid item size={5} xs={12} sm={6} md={3} key={index}>
                <StatCard
                  title={item.title}
                  value={item.value}
                  growth={item.growth}
                  icon={item.icon}
                  color={item.color}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
