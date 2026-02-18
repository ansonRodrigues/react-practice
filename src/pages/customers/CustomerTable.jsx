import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Pagination,
  Stack,
} from "@mui/material";
import {
  Visibility as VisibilityIcon,
  ChatBubbleOutline as ChatIcon,
  DeleteOutline as DeleteIcon,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectAllCustomers } from "./customerSlice";

// Define table headers for cleaner code
const TABLE_HEADERS = [
  "Customer Id",
  "Name",
  "Phone",
  "Order Count",
  "Total Spend",
  "View Details",
  "Action",
];

const CustomerTable = () => {
  // Access data from Redux
  const customers = useSelector(selectAllCustomers);
  const [page, setPage] = useState(1);

  // Helper to handle page change
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Title Section */}
      <Typography
        variant="h5"
        sx={{ mb: 3, fontWeight: "bold", color: "#1a1a1a" }}
      >
        Customers
      </Typography>

      {/* Main Card */}
      <Paper
        elevation={0}
        sx={{ p: 2, borderRadius: "12px", border: "1px solid #E0E0E0" }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="customer table">
            {/* Table Header */}
            <TableHead sx={{ backgroundColor: "#F4F5F9" }}>
              <TableRow>
                {TABLE_HEADERS.map((header) => (
                  <TableCell
                    key={header}
                    sx={{ fontWeight: 600, color: "#555" }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {customers.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{ color: "#555" }}>
                    {row.id}
                  </TableCell>
                  <TableCell sx={{ fontWeight: 500 }}>{row.name}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell align="center">{row.orderCount}</TableCell>
                  <TableCell>{row.totalSpend.toFixed(2)}</TableCell>

                  {/* View Details Icon */}
                  <TableCell align="center">
                    <IconButton size="small">
                      <VisibilityIcon fontSize="small" />
                    </IconButton>
                  </TableCell>

                  {/* Action Icons */}
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <IconButton size="small">
                        <ChatIcon fontSize="small" />
                      </IconButton>
                      <IconButton size="small" color="error">
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 3,
            px: 2,
          }}
        >
          {/* In a real app, you'd add "Previous" button logic here */}
          <Typography variant="body2" color="text.secondary">
            Previous
          </Typography>

          <Pagination
            count={24}
            page={page}
            onChange={handlePageChange}
            shape="rounded"
            color="primary"
            hidePrevButton
            hideNextButton
          />

          <Typography variant="body2" color="text.secondary">
            Next &rarr;
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default CustomerTable;
