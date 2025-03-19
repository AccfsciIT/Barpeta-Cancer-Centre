"use client";
import Image from "next/image";
import { Box, createTheme } from "@mui/material";
import Navbar from "../Navbar";
import SocialIcons from "../SocialIcons";
import { useHospital } from "../../(components)/HospitalProvider";

const theme = createTheme({
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: "brown",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "1px solid brown",
                    padding: "3px",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                    "&:hover": {
                        backgroundColor: "#f0e6e6",
                    },
                },
            },
        },
    },
});

const Header = () => {
    const hospitalName = "abs";
    const HospitalDetails = useHospital();

    // Ensure HospitalDetails is defined before accessing properties
    if (!HospitalDetails) {
        return <h1>Loading...</h1>; // Prevents app crash
    }

    return (
        <>
            <Box sx={{ display: { xs: "none", md: "flex" }, width: "100%", justifyContent: "center" }}>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", width: "90%" }}>
                    <div style={{ display: "flex", alignItems: "end", width: "50%"}}>
                        <Image src="/logo/accf_logo.png" alt="logo" width={100} height={100} style={{ marginRight: "20px" }} />
                        <div >
                            <h1 style={{ fontSize: "20px", color: "brown", fontWeight: "bold" }}>{HospitalDetails?.name || "Default Hospital"}</h1>
                            <h5 style={{ fontSize: "12px", color: "brown" }}>A Unit Of Assam Cancer Care Foundation</h5>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                        <h1 className="gradient-text" style={{ fontSize: "20px", fontWeight: "bolder", fontStyle: "inherit" }}>
                            FOR QUERY & APPOINTMENT, CALL 18003454325
                        </h1>
                        <div style={{ display: "flex", gap: "10px", justifyContent: "end" }}>
                            <SocialIcons 
                                Facebook={HospitalDetails?.Facebook} 
                                Twitter={HospitalDetails?.Twitter} 
                                LinkedIn={HospitalDetails?.LinkedIN} 
                                Instagram={HospitalDetails?.Insta} 
                            />
                        </div>
                    </div>
                </div>
            </Box>
            <Navbar Title={hospitalName} />
            <Box display="flex" height="30px" width="100%">
                <Box display="flex" height="100%" paddingX="10px" sx={{ backgroundColor: "brown" }} justifyContent="center" alignItems="center" color="white" fontWeight="bold">
                    UPDATES
                </Box>
                <Box
                    sx={{
                        width: 0,
                        height: 0,
                        borderTop: "15px solid transparent",
                        borderBottom: "15px solid transparent",
                        borderLeft: "15px solid brown",
                        marginLeft: "5px",
                    }}
                />
            </Box>
        </>
    );
};

export default Header;
