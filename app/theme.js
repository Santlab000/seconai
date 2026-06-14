"use client";

import { createTheme } from "@mui/material/styles";

// Central app theme. Define colors once here instead of hardcoding
// hex values across components.
const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#1A1A1A",
    },
    primary: {
      main: "#00796B",
      dark: "#005A4F",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "var(--font-geist-sans), Roboto, sans-serif",
  },
});

export default theme;
