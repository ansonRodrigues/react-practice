import { Grid, Box, Typography } from "@mui/material";
import StatCard from "./StatCard";
import AdminHeader from "./AdminHeader";
// Import icons here...

const AdminDashboard = () => {
  return (
    <div>
      <AdminHeader />
      <Box sx={{ p: 4 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
          Dashboard Overview
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Total Revenue"
              value="$45,231"
              percentage="+12.5%"
              color="success"
            />
          </Grid>
          {/* Add more Grid items for other cards */}
        </Grid>
      </Box>
    </div>
  );
};

export default AdminDashboard;
