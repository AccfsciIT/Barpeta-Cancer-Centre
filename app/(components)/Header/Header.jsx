"use client";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import Navbar from "../Navbar";
import SocialIcons from "../SocialIcons";
import { useHospital } from "../../(components)/HospitalProvider";
import { API, HName } from "../Global";

const Header = () => {
    const HospitalDetails = useHospital();
    const HoName = HName();
    return (
        <>
            {/* Header Section */}
            <Box 
                sx={{ 
                    width: "100%", 
                    display:"flex",
                    backgroundColor: "#fff", 
                    py: 1, 
                    px: { xs: 2, md: 4 } ,
                    // border:"1px black solid",
                    justifyContent:"center"
                }}
            >
                <Grid 
                    container 
                    alignItems="center"
                    justifyContent="space-between" 
                    spacing={2} 
                    display="flex"
                    width="100%"
                    // sx={{ maxWidth: "1400px", margin: "auto" }}
                    // border="1px black solid"
                >
                    {/* Logo & Hospital Name */}
                    <Grid 
                        item 
                        xs={12} md={6} 
                        sx={{ display: "flex", flexDirection:{xs:"column",sm:"column", md:"row"},alignItems: {sm: "flex-start"}, justifyContent: { xs: "center", sm: "flex-start" } }}
                    >
                        <Image 
                            src={`${API}${HoName}logo/accf_logo.png`}
                            alt="logo" 
                            width={80} 
                            height={80} 
                            priority 
                            style={{ marginRight: "10px" }} 
                        />
                        <Box textAlign={{ xs: "center", sm: "left" }}>
                            <Typography 
                                variant="h6" 
                                sx={{ color: "brown", fontWeight: "bold", fontSize: { xs: "28px", sm: "18px", md: "20px" } }}
                                textAlign='start'
                            >
                                {HospitalDetails?.name || "Default Hospital"}
                            </Typography>
                            <Typography 
                                variant="body2" 
                                sx={{ color: "brown", fontSize: { xs: "12px", sm: "14px" } }}
                                textAlign='start'
                            >
                                A Unit Of Assam Cancer Care Foundation
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Contact Info & Social Icons */}
                    <Grid 
                        item 
                        xs={12} md={6} 
                        sx={{ textAlign: { xs: "center", sm: "right" } }}
                    >
                        <Typography 
                            variant="h6" 
                            sx={{ fontWeight: "bold", color: "#000", fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
                        >
                            FOR QUERY & APPOINTMENT, CALL 18003454325
                        </Typography>
                        <Box sx={{ display: "flex", gap: "10px", justifyContent: { xs: "center", sm: "end" }, mt: 1 }}>
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
            <Navbar Title={HospitalDetails?.name} />

            {/* Updates Section */}
            <Box display="flex" height="30px" width="100%">
                <Box 
                    display="flex" 
                    height="100%" 
                    px="10px" 
                    sx={{ backgroundColor: "brown", justifyContent: "center", alignItems: "center", color: "white", fontWeight: "bold" }}
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
        </>
    );
};

export default Header;
