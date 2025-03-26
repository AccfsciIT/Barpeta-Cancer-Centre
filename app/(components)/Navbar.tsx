"use client";
import { useEffect, useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, Menu, MenuItem, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import { ExpandMore } from "@mui/icons-material";
import { HospitalID, API, HName } from "../(components)/Global";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about_us" },
  { name: "Our Doctors", link: "/consultants" },
  { name: "Facilities", link: "/facilities" },
  { name: "Hospitals", link: "/" },
  { name: "News & Events", link: "/newsAndEvents" },
  { name: "Academics", link: "/academics" },
  { name: "Contact Us", link: "/contact" },
];

export default function Navbar({ Title }: { Title: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ourHospitals, setOurHospitals] = useState<{ name: string; domain: string }[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const HoName = HName();

  // Toggle mobile drawer
  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  // Dropdown menu functions
  const handleHospitalsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await fetch(`${API}api/our_hospitals?HospitalID=${HospitalID}`);
        const data = await response.json();
        if (response.ok && Array.isArray(data.result)) {
          setOurHospitals(data.result);
        }
      } catch (error) {
        console.error("Failed to fetch hospital details:", error);
      }
    };

    fetchHospitals();
  }, []);

  return (
    <AppBar position="static" sx={{ backgroundColor: { xs: "none", md: "#0076bd" } }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo & Title */}
        <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
          <Image src={`${API}${HoName}logo/accf_logo.png`} alt="logo" width={50} height={50} />
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
                  aria-controls={anchorEl ? "hospitals-menu" : undefined}
                  aria-haspopup="true"
                >
                  {item.name} <ExpandMore />
                </Button>
                {/* Dropdown Menu */}
                <Menu id="hospitals-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                  {ourHospitals.length > 0 ? (
                    ourHospitals.map((hospital) => (
                      <MenuItem key={hospital.name} onClick={handleClose}>
                        <a href={hospital.domain} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                          <Typography>{hospital.name}</Typography>
                        </a>
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem disabled>
                      <Typography>No hospitals available</Typography>
                    </MenuItem>
                  )}
                </Menu>
              </Box>
            ) : (
              <Link key={item.name} href={item.link} passHref legacyBehavior>
                <Button sx={{ color: "#fff" }}>{item.name}</Button>
              </Link>
            )
          )}
        </Box>

        {/* Social Infrastructure */}
        <Link href="/social_infra" passHref legacyBehavior>
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            <Button sx={{ color: "#fff" }}>
              <Avatar alt="Social Infrastructure" sx={{ backgroundColor: "white", marginRight: "2px" }} src="/SocialInfra/soc_inf.png" />
              Social Infrastructure
            </Button>
          </Box>
        </Link>

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
