"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Fab, Grid, Typography } from "@mui/material";
import { Call } from "@mui/icons-material";
// import { useSelector } from "react-redux";
import Navbar from "../Navbar";
import SocialIcons from "../SocialIcons";
import ContactUs from "../ContactUs/ContactUs";
import { API, HName } from "../Global";
import Loader from '../Loader'

const Header = (props) => {
    const { HospitalDetails, OurHospitals } = props;
    const HoName = HName(); // Ensure HName() is a function; if it's a variable, remove ()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            {/* Header Section */}
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    backgroundColor: "#fff",
                    // py: 1,
                    position: { xs: "relative", lg: "fixed" },
                    top: 0,
                    zIndex: 1000,
                    px: { xs: 2, md: 4 },
                    justifyContent: "center",
                    backgroundColor: '#ffffff', color: 'black'
                }}
            >
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={2}
                    width="100%"
                >
                    {/* Logo & Hospital Name */}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            alignItems: { md: "center", xs: "flex-start" },
                        }}
                    >
                        <Image
                            src={`${API}${HoName}logo/accf_logo.png`}
                            alt="logo"
                            width={80}
                            height={80}
                            priority
                            style={{
                                marginRight: "10px",
                                width: "80px",  // Ensure both width and height are defined
                                height: "80px",
                                objectFit: "contain" // Ensures the image fits within the dimensions
                            }}
                            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <Box textAlign={{ xs: "center", md: "left" }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: "brown",
                                    fontWeight: "bold",
                                    fontSize: { xs: "24px", sm: "18px", md: "20px" },
                                }}
                            >
                                {HospitalDetails?.name || "Hospital Name"}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: "brown", fontSize: { xs: "12px", sm: "14px" } }}
                            >
                                A Unit Of Assam Cancer Care Foundation
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Contact Info & Social Icons */}
                    <Grid item xs={12} md={6} marginBottom={1} sx={{ textAlign: { xs: "center", md: "right" } }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 800, // Ultra bold text
                                color: "#000",
                                fontSize: { xs: "14px", sm: "16px", md: "14px" },
                                animation: "color-change 1s infinite"
                            }}
                        >
                            FOR QUERY & APPOINTMENT, CALL 18003454325
                        </Typography>
                        <Box sx={{ display: "flex", gap: "10px", justifyContent: { xs: "center", md: "end" }, mt: 1 }}>
                            <SocialIcons
                                Facebook={HospitalDetails?.Facebook}
                                Twitter={HospitalDetails?.Twitter}
                                LinkedIn={HospitalDetails?.LinkedIN}
                                Instagram={HospitalDetails?.Insta}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* Navbar */}
            <Box
                sx={{
                    width: "100%",
                    position: "sticky",
                    top: { xs: 0, md: "80px" },
                    zIndex: 1001,
                    backgroundColor: "#fff",
                }}
            >
                <Navbar Title={HospitalDetails?.name} OurHospitals={OurHospitals} />
            </Box>

            {/* Updates Section */}
            <Box display="flex" height="30px" sx={{ marginTop: { md: "80px", sm: 0 }, backgroundColor: '#ffffff', color: 'black' }} width="100%">
                <Box
                    display="flex"
                    height="100%"
                    px="10px"
                    sx={{
                        backgroundColor: "brown",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        fontWeight: "bold",
                    }}
                >
                    UPDATES
                </Box>
                <Box
                    sx={{
                        width: 0,
                        height: 0,
                        borderTop: "15px solid transparent",
                        borderBottom: "15px solid transparent",
                        borderLeft: "15px solid brown",
                        ml: "5px",
                    }}
                />
            </Box>

            {/* Contact Us Modal */}
            <Box display="flex" width="100%" justifyContent="center">
                <ContactUs open={open} handleClose={handleClose} />
            </Box>

            {/* Floating Action Button (FAB) */}
            <Fab
                color="secondary"
                aria-label="contact"
                sx={{
                    position: "fixed",
                    bottom: 16,
                    right: 16,
                    zIndex: 1000,
                }}
                onClick={handleOpen}
            >
                <Call />
            </Fab>
        </>
    );
};

export default Header;