import * as React from "react"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import Link from "next/link"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import Logo from "./Logo"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { SvgIcon } from "@mui/material"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

const pages = [
    {
        href: "/",
        name: "Home",
        icon: null,
    },
    {
        href: "/services",
        name: "Services",
        icon: null,
    },
    {
        href: "/zeronetenergy",
        name: "Zero Net Energy",
        icon: null,
    },
    {
        href: "/buildingcertification",
        name: "Building Certification",
        icon: null,
    },
    {
        href: "/aboutus",
        name: "About Us",
        icon: null,
    },
    {
        href: "/contact",
        name: "Contact",
        icon: null,
    },
]

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            flexGrow: 0,
                            height: 80,
                            display: { xs: "none", md: "none", lg: "flex" },
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "40px",
                        }}
                    >
                        <a href="/">
                            <SvgIcon component={Logo} viewBox="0 0 2000 200" />
                        </a>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { sm: "flex", md: "flex", lg: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { sm: "flex" },
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <SvgIcon component={Logo} viewBox="0 0 2000 200" />
                        </Box>
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
                                display: {
                                    xs: "block",
                                    md: "block",
                                    lg: "none",
                                },
                            }}
                        >
                            {pages.map((page, i) => (
                                <MenuItem key={i} onClick={handleCloseNavMenu}>
                                    <Link href={page.href}>
                                        <Typography variant="navDropDown" textAlign="center">
                                            {page.name}
                                        </Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "none", lg: "flex", fontFamily: "Roboto" },
                        }}
                    >
                        {pages.map((page, i) => (
                            <Button
                                href={page.href}
                                key={i}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                }}
                            >
                                <Typography variant="nav">{page.name}</Typography>
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton
                            aria-label="Linkedin.com"
                            onClick={() =>
                                window.open(
                                    "https://www.linkedin.com/company/griffin-energ-consulting/",
                                    "_blank"
                                )
                            }
                            sx={{ p: 0 }}
                        >
                            <LinkedInIcon fontSize="large" sx={{ color: "#0e76a8" }} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default ResponsiveAppBar
