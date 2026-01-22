import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CategoryIcon from "@mui/icons-material/Category";
import GroupIcon from "@mui/icons-material/Group";

// Define width constant to keep layout consistent
const DRAWER_WIDTH = 240;

const Sidebar = () => {
  // We put menu items in an array so it's easy to add more later
  const menuItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      path: "/admin/dashboard",
      active: true,
    },
    {
      text: "Add Category",
      icon: <CategoryIcon />,
      path: "/admin/category",
      active: false,
    },
    {
      text: "Add Products",
      icon: <AddBoxIcon />,
      path: "/admin/products",
      active: false,
    },
    { text: "Users", icon: <GroupIcon />, path: "/admin/users", active: false },
  ];

  return (
    <Drawer
      variant="permanent" // Keeps sidebar always visible
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
          backgroundColor: "#0F172A", // Dark Navy Blue background
          color: "white", // Default text color
          borderRight: "none",
        },
      }}
    >
      {/* 1. Logo / Brand Section */}
      <Box sx={{ p: 3, display: "flex", alignItems: "center", gap: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          Admin Panel
        </Typography>
      </Box>

      {/* 2. Navigation List */}
      <List sx={{ px: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              sx={{
                borderRadius: 2,
                // Logic for the "Active" (Blue) button state
                backgroundColor: item.active ? "#3B82F6" : "transparent",
                "&:hover": {
                  backgroundColor: item.active
                    ? "#2563EB"
                    : "rgba(255,255,255,0.08)",
                },
              }}
            >
              <ListItemIcon
                sx={{ minWidth: 40, color: item.active ? "white" : "#94A3B8" }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: "0.95rem",
                  fontWeight: item.active ? "600" : "400",
                  color: item.active ? "white" : "#94A3B8",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
