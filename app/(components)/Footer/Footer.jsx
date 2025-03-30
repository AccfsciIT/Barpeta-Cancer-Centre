"use client";

import { useEffect, useState } from "react";
import { FiberManualRecord, LocationCity, Mail, Phone } from "@mui/icons-material";
import { Box, Grid, ListItem, ListItemIcon, Typography } from "@mui/material";
import Link from "next/link";
import GoogleMapEmbed from "../Google_Map/GoogleMap";
import SocialIcons from "../SocialIcons";
import { useSelector } from "react-redux";
import { selectHospitals } from "@/redux/features/hospitalSlice";
import { selectFacilities } from "@/redux/features/facilitiesSlice";
import { selectHospitalDetails } from "@/redux/features/hospitalDetailSlice";

const Footer = () => {
    const hospitalData = useSelector(selectHospitalDetails);
    const hospitalList = useSelector(selectHospitals);
    const facilityList = useSelector(selectFacilities);

    // Ensure hydration happens only on the client
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    // 🔹 Wait until hydration is complete to prevent mismatch
    if (!hydrated) {
        return null;
    }

    // If data is still not available after hydration
    if (!hospitalData || !hospitalList.length || !facilityList.length) {
        return <Typography color="gray">Loading hospital details...</Typography>;
    }

    // 🔹 Reusable ListItem Component
    const RenderListItem = ({ text }) => (
        <ListItem sx={{ padding: "4px 0", display: "flex", alignItems: "center" }}>
            <ListItemIcon sx={{ minWidth: "16px", color: "gray" }}>
                <FiberManualRecord fontSize="small" sx={{ fontSize: "8px" }} />
            </ListItemIcon>
            <Typography sx={{ color: "gray", fontSize: "14px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {text}
            </Typography>
        </ListItem>
    );

    return (
        <Box sx={{ display: "flex", width: "100%", flexDirection: "column", alignItems: "center", padding: 1, backgroundColor: "#f9f9f9", color: 'black' }}>
            <Grid container spacing={3} justifyContent="center" width={{ xs: "100%", md: "90%" }}>

                {/* Our Hospitals */}
                <Grid item xs={12} sm={6} lg={2}>
                    <Typography variant="h6" mb={1}>Our Hospitals</Typography>
                    {hospitalList.map((hospital, index) => (
                        <RenderListItem key={hospital.id || index} text={hospital.name} />
                    ))}
                </Grid>

                {/* Facilities */}
                <Grid item xs={12} sm={6} lg={4}>
                    <Typography variant="h6" mb={1}>Facilities</Typography>
                    <Grid container spacing={1}>
                        {facilityList.map((facility, index) => (
                            <Grid item xs={6} key={facility.id || index}>
                                <Link href="/" passHref legacyBehavior>
                                    <RenderListItem text={facility.title} />
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                {/* Contact Us */}
                <Grid item xs={12} sm={6} lg={3}>
                    <Typography variant="h6" mb={1}>Contact Us</Typography>
                    {[
                        { icon: <Phone sx={{ color: "gray", mr: 1 }} />, text: hospitalData.PhoneNumber || "Not Available" },
                        { icon: <Mail sx={{ color: "gray", mr: 1 }} />, text: "info@accf.in" },
                        { icon: <LocationCity sx={{ color: "gray", mr: 1 }} />, text: hospitalData.Address || "Not Available" }
                    ].map((item, index) => (
                        <Typography key={index} color="gray" fontSize="14px" display="flex" alignItems="center" mb={1}>
                            {item.icon} {item.text}
                        </Typography>
                    ))}

                    <SocialIcons
                        Facebook={hospitalData.Facebook}
                        Twitter={hospitalData.Twitter}
                        LinkedIn={hospitalData.LinkedIN}
                        Instagram={hospitalData.Insta}
                    />
                </Grid>

                {/* Location */}
                <Grid item xs={12} sm={6} lg={3}>
                    <Typography variant="h6" mb={1}>Landmark</Typography>
                    <GoogleMapEmbed URL={hospitalData.Location || ""} />
                </Grid>

            </Grid>
        </Box>
    );
};

export default Footer;
