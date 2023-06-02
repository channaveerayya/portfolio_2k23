import * as React from "react"
import {
  AppBar,
  useTheme,
  Button,
  MenuItem,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import AdbIcon from "@mui/icons-material/Adb"
import { useIsLargeView } from "hooks/useIsLargeView"
import { navigationItems } from "../../constants"
import Link from "next/link"
import { useRouter } from "next/router"

function ResponsiveAppBar() {
  const router = useRouter()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const isLarge = useIsLargeView()
  const theme = useTheme()
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  const title = "Channu"

  const mobileUI = (
    <>
      <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          sx={{
            color: theme.palette.text.primary,
          }}
        >
          <MenuIcon
            sx={{
              color: theme.palette.text.primary,
            }}
          />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
            color: theme.palette.text.primary,
          }}
        >
          {navigationItems.map((page) => (
            <MenuItem
              key={page.title}
              onClick={handleCloseNavMenu}
              href={page.path}
              component={Link}
            >
              <Typography
                textAlign="center"
                sx={{
                  color: theme.palette.text.primary,
                }}
              >
                {page.title}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          justifyContent: { xs: "flex-end", md: "flex-end" },
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: theme.palette.text.primary,
          textDecoration: "none",
        }}
      >
        {title}
      </Typography>
    </>
  )
  const desktopUI = (
    <>
      <AdbIcon
        sx={{
          display: { xs: "none", md: "flex" },
          mr: 1,
          color: theme.palette.text.primary,
        }}
      />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontWeight: 900,
          letterSpacing: ".3rem",
          color: theme.palette.text.primary,
          textDecoration: "none",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: { xs: "flex-end", md: "flex-end" },
        }}
      >
        {navigationItems.map((page) => (
          <Button
            key={page.title}
            onClick={handleCloseNavMenu}
            sx={{
              m: 2,
              fontWeight: 700,
              color: theme.palette.text.primary,
              display: "block",
              "&:hover": {
                backgroundColor: theme.palette.color.background,
              },
            }}
            href={page.path}
            component={Link}
            color="primary"
            variant={router.pathname === page.path ? "outlined" : "text"}
          >
            {page.title}
          </Button>
        ))}
      </Box>
    </>
  )
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{ backgroundColor: theme.palette.nav?.main }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>{isLarge ? desktopUI : mobileUI}</Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
