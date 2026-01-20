import React from "react";
import {
  AppBar,
  Toolbar,
  InputBase,
  Box,
  IconButton,
  Badge,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const AdminHeader = () => {
  return (
    <AppBar
      position="sticky"
      elevation={0} // 1. Removes the default shadow for a cleaner "flat" look
      sx={{
        backgroundColor: "white",
        borderBottom: "1px solid #E0E0E0",
        color: "text.primary",
        width: "100%", // Ensures it spans the full width of the main content area
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
        {/* --- LEFT: Search Bar --- */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#F5F6FA", // Light grey background like Figma
            borderRadius: 2,
            px: 2,
            width: "400px", // Fixed width or use '30%'
            height: "45px",
          }}
        >
          <SearchIcon sx={{ color: "text.secondary", mr: 1 }} />
          <InputBase
            placeholder="Search..."
            fullWidth
            sx={{ fontSize: "0.95rem" }}
          />
        </Box>

        {/* --- RIGHT: Actions & Profile --- */}
        <Stack direction="row" alignItems="center" spacing={2}>
          {/* Notification Icon */}
          <IconButton>
            <Badge variant="dot" color="error">
              <NotificationsNoneIcon sx={{ color: "text.secondary" }} />
            </Badge>
          </IconButton>

          {/* User Profile Section */}
          <Stack direction="row" alignItems="center" spacing={1.5}>
            {/* Text Info (Hidden on very small screens if needed) */}
            <Box sx={{ textAlign: "right" }}>
              <Typography
                variant="body2"
                fontWeight="bold"
                sx={{ lineHeight: 1.2 }}
              >
                Admin User
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Administrator
              </Typography>
            </Box>

            {/* Avatar */}
            <Avatar
              sx={{
                bgcolor: "#3B82F6", // The blue color from your screenshot
                width: 40,
                height: 40,
              }}
            >
              <PersonOutlineIcon sx={{ color: "white" }} />
            </Avatar>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;
