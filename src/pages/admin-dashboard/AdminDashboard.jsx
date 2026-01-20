import React from "react";
import { Box, Toolbar } from "@mui/material";
import Sidebar from "./SideBar";
import AdminHeader from "./AdminHeader";
import { Grid, Typography } from "@mui/material"; // Assuming you have your StatCards here

const AdminDashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* 1. The Sidebar (Left) */}
      <Sidebar />

      {/* 2. The Main Content Wrapper (Right) */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#F4F7FE", // Light background for content area
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header goes inside the main wrapper so it sits next to sidebar */}
        <AdminHeader />

        {/* The Actual Page Content */}
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
            Dashboard Overview
          </Typography>

          {/* Your Grid of Cards */}
          <Grid container spacing={3}>
            {/* <StatCard ... /> components go here */}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
