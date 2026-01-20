import { Card, CardContent, Typography, Stack, Box } from "@mui/material";

const StatCard = ({ title, value, percentage, icon, color }) => {
  return (
    <Card sx={{ borderRadius: 2, boxShadow: "0px 2px 10px rgba(0,0,0,0.05)" }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Box sx={{ bgcolor: `${color}.light`, p: 1, borderRadius: 1 }}>
            {icon}
          </Box>
          <Typography
            variant="caption"
            sx={{ color: "success.main", fontWeight: "bold" }}
          >
            {percentage}
          </Typography>
        </Stack>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 2 }}>
          {title}
        </Typography>
        <Typography variant="h5" fontWeight="bold">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard;
