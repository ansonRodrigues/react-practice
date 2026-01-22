import React from "react";
import { Paper, Box, Typography, Avatar } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const StatCard = ({ title, value, icon, color, growth }) => {
  return (
    <Paper
      elevation={0} // Flat design like the screenshot
      sx={{
        p: 5, // Padding inside the card
        borderRadius: 3, // Rounded corners
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%", // Ensures all cards in a row match height

        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)", // Custom subtle shadow
      }}
    >
      {/* TOP ROW: Icon and Growth % */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 2,
        }}
      >
        {/* The Icon Box */}
        <Avatar
          variant="rounded"
          sx={{
            bgcolor: color, // Dynamic background color prop
            width: 56,
            height: 56,
            borderRadius: "12px", // Soft square look
          }}
        >
          {/* We assume the icon passed is a React component, so we clone it to add color */}
          {React.cloneElement(icon, {
            sx: { color: "white", fontSize: "1.8rem" },
          })}
        </Avatar>

        {/* Growth Badge */}
        {growth && (
          <Box sx={{ display: "flex", alignItems: "center", color: "#10B981" }}>
            <Typography variant="body2" fontWeight="bold">
              {growth}
            </Typography>
          </Box>
        )}
      </Box>

      {/* BOTTOM ROW: Text Info */}
      <Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
          {title}
        </Typography>
        <Typography variant="h5" fontWeight="medium" color="text.primary">
          {value}
        </Typography>
      </Box>
    </Paper>
  );
};

export default StatCard;
