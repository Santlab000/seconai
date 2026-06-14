const NavBar = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#1A1A1A", color: "#fff", height: 80 }}
      >
        <Toolbar>
          {/* Left Side (Menu Items for larger screens) */}
          <Box
            display={{ xs: "none", md: "flex" }}
            flexGrow={1}
            alignItems="center"
          >
            menu data
          </Box>






          {/* Centered Logo */}
          <Box
            onClick={() => router.push("/")}
            sx={{
              flexGrow: 9000008,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 28,
            }}
          >
            <img
              src="/images/logo2.png" // Replace with your logo's path
              alt="Logo"
              style={{
                height: 60,
                cursor: "pointer",
                borderRadius: "50%", // This makes it circular
                width: 60, // Ensure the width and height are equal to maintain the circular shape
              }}
            />
          </Box>





          {/* Right Side (Search, Notifications, Translate, and Sign In) */}
          <Box display="flex" alignItems="center">
            <IconButton
              sx={{ color: "#fff", display: { xs: "none", md: "block" } }}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              sx={{ color: "#fff", display: { xs: "none", md: "block" } }}
            >
              <NotificationsIcon />
            </IconButton>
            <IconButton
              sx={{ color: "#fff", display: { xs: "none", md: "block" } }}
            >
              <TranslateIcon />
            </IconButton>
            login
            {/* Hamburger Icon for Small Devices */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>

        {/* Drawer for Small Devices */}
        <Drawer anchor="left">
          <Box
            sx={{
              width: 250,
              backgroundColor: "#1A1A1A",
              height: "100%",
              color: "#fff",
            }}
            role="presentation"
          >
            <Box sx={{ padding: 2, borderTop: "1px solid #333" }}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#00796B",
                  "&:hover": { backgroundColor: "#005A4F" },
                }}
              >
                Sign In
              </Button>
            </Box>

            <List>menu items</List>
            {/* Login Button at the Bottom */}
          </Box>
        </Drawer>
      </AppBar>
    </>
  );
};

export default NavBar;