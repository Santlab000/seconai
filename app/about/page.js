import Navbar from "@/components/navbar/Navbar";
import { Box, Container, Typography, Link } from "@mui/material";

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
        <Typography gutterBottom>
          SeconAI is a technology company that deals in AI automation.
        </Typography>
        <Typography gutterBottom>
          <strong>Contact person:</strong> Santosh Labade
        </Typography>
        <Typography gutterBottom>
          <strong>Email:</strong>{" "}
          <Link href="mailto:seconai.official@gmail.com" color="primary">
            seconai.official@gmail.com
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
