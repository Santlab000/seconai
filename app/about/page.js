import Navbar from "@/components/navbar/Navbar";
import { Box, Container, Typography } from "@mui/material";

export const metadata = {
  title: "About | Seconai",
};

export default function About() {
  return (
    <Box>
      <Navbar />
      <Container sx={{ py: 6 }}>
        <Typography variant="h3" gutterBottom>
          About
        </Typography>
        <Typography color="text.secondary">
          This page is coming soon.
        </Typography>
      </Container>
    </Box>
  );
}
