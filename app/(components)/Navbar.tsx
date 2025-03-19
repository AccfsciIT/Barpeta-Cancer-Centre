"use client";

import { useEffect, useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import { ExpandMore } from "@mui/icons-material";
import {HospitalID, API} from "../(components)/Global";

const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about_us" },
    { name: "Our Doctors", link: "/consultants" },
    { name: "Facilities", link: "/facilities" },
    { name: "Hospitals", link: "/" },
    { name: "News & Events", link: "/newsAndEvents" },
    { name: "Contact Us", link: "/contact" }
];

export default function Navbar({ Title }: { Title: string }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [ourHospitals, setOurHospitals] = useState<{ name: string; domain: string }[]>([]);
    const [loading, setLoading] = useState(true);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Dropdown menu functions
    const handleHospitalsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const fetchHospitals = async () => {
        try {
            const response = await fetch(`${API}api/our_hospitals?HospitalID=${HospitalID}`);
            const data = await response.json();
            if (response.ok) {
                setOurHospitals(data.result);
            } else {
                console.error("Error:", data.error);
            }
        } catch (error) {
            console.error("Failed to fetch hospital details:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchHospitals();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <AppBar position="static" sx={{ backgroundColor: { xs: "none", md: "#0076bd" } }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {/* Logo & Title */}
                    <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
                        <Image src="http://localhost:3001/logo/accf_logo.png" alt="logo" width={50} height={50} />
                    </Box>
                    <Typography sx={{ display: { xs: "flex", md: "none" }, fontSize: "1rem", fontWeight: "bold" }}>
                        {Title}
                    </Typography>

                {/* Desktop Menu */}
                <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
                    {navItems.map((item) =>
                        item.name === "Hospitals" ? (
                            <Box key={item.name}>
                                <Button
                                    sx={{ color: "#fff" }}
                                    onClick={handleHospitalsClick}
                                    aria-controls={Boolean(anchorEl) ? "hospitals-menu" : undefined}
                                    aria-haspopup="true"
                                >
                                    {item.name} <ExpandMore />
                                </Button>
                                {/* Dropdown Menu */}
                                <Menu id="hospitals-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                                    {ourHospitals.map((hospital) => (
                                        <MenuItem key={hospital.name} onClick={handleClose}>
                                            <Link href={hospital.domain} passHref legacyBehavior>
                                                <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                                                    {hospital.name}
                                                </a>
                                            </Link>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        ) : (
                            <Link key={item.name} href={item.link} passHref legacyBehavior>
                                <Button sx={{ color: "#fff" }}>{item.name}</Button>
                            </Link>
                        )
                    )}
                </Box>

                {/* Mobile Menu Button */}
                <IconButton edge="end" sx={{ display: { xs: "block", md: "none" }, color: "#fff" }} onClick={handleDrawerToggle}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle}>
                    <List>
                        {navItems.map((item) => (
                            <Link key={item.name} href={item.link} passHref legacyBehavior>
                                <ListItem component="div">
                                    <ListItemText primary={item.name} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </AppBar>
    );
}
