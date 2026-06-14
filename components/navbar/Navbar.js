"use client";

import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TranslateIcon from "@mui/icons-material/Translate";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "About", href: "/about" },
];

const NavBar = () => {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        position="static"
        sx={{ bgcolor: "background.paper", height: 80 }}
      >
        <Toolbar sx={{ height: "100%" }}>
          {/* Left: nav links (desktop only) */}
          <Box
            sx={{
              flex: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.href}
                color="inherit"
                onClick={() => router.push(link.href)}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Center: logo */}
          <Box
            onClick={() => router.push("/")}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Image
              src="/logo.png"
              alt="SeconAI logo"
              width={64}
              height={64}
              style={{ borderRadius: 8 }}
              priority
            />
          </Box>

          {/* Right: actions */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="search"
              sx={{ display: { xs: "none", md: "inline-flex" } }}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="notifications"
              sx={{ display: { xs: "none", md: "inline-flex" } }}
            >
              <NotificationsIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="translate"
              sx={{ display: { xs: "none", md: "inline-flex" } }}
            >
              <TranslateIcon />
            </IconButton>
            <Button
              variant="contained"
              color="primary"
              sx={{ ml: 1, display: { xs: "none", md: "inline-flex" } }}
            >
              Login
            </Button>

            {/* Hamburger (mobile only) */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { xs: "inline-flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile navigation drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{ width: 250, bgcolor: "background.paper", height: "100%" }}
          role="presentation"
          onClick={() => setDrawerOpen(false)}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton onClick={() => router.push(link.href)}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box sx={{ p: 2, borderTop: "1px solid #333" }}>
            <Button variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;
