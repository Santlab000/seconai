import Navbar from "@/components/navbar/Navbar";
import { Box, Container, Typography } from "@mui/material";

export const metadata = {
  title: "Explore | Seconai",
};

export default function Explore() {
  return (
    <Box>
      <Navbar />
      <Container sx={{ py: 6 }}>
        <Typography variant="h3" gutterBottom>
          Explore
        </Typography>
        <Typography color="text.secondary">
          This page is coming soon.
        </Typography>
      </Container>
    </Box>
  );
}
