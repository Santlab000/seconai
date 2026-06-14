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
      // Brand blue, matching the logo's navy-to-blue gradient
      main: "#2563EB",
      dark: "#1E40AF",
      light: "#3B82F6",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "var(--font-geist-sans), Roboto, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // Filled brand buttons use the logo's navy-to-blue gradient
        containedPrimary: {
          backgroundImage: "linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)",
          boxShadow: "none",
          "&:hover": {
            backgroundImage:
              "linear-gradient(135deg, #16234E 0%, #2563EB 100%)",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

export default theme;
