"use client";

import { FiberManualRecord, LocationCity, Mail, Phone } from "@mui/icons-material";
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Link from "next/link";
import GoogleMapEmbed from "../../(components)/GoogleMap";
import SocialIcons from "../SocialIcons";
import { useHospital } from "../../(components)/HospitalProvider";

const Hospitals = [
    { name: "Barpeta Cancer Centre", link: "https://dibrugarhcancercentre.org/" },
    { name: "Dibrugarh Cancer Centre", link: "https://dibrugarhcancercentre.org/" }
];

const Facilities = [
    {
        Loader: "#0076bd",
        name: "PET-CT and Medical Cyclotron",
        image: "/Facilities/PET_CT.jpg",
        text: "The medical Cyclotron Machine can produce the radio-active substance (FDG) required for PET-CT investigation..."
    },
    {
        Loader: "#0076bd",
        name: "Bone Marrow Transplant",
        image: "/Facilities/bmt.jpg",
        text: "Bone marrow transplantation, also called as hematopoietic stem cell transplantation, is a sophisticated procedure..."
    },
    {
        Loader: "#0076bd",
        name: "PET-CT and Medical Cyclotron",
        image: "/Facilities/PET_CT.jpg",
        text: "The medical Cyclotron Machine can produce the radio-active substance (FDG) required for PET-CT investigation..."
    },
    {
        Loader: "#0076bd",
        name: "Bone Marrow Transplant",
        image: "/Facilities/bmt.jpg",
        text: "Bone marrow transplantation, also called as hematopoietic stem cell transplantation, is a sophisticated procedure..."
    }
];

const Footer = () => {
    const HospitalDetails = useHospital();

    if (!HospitalDetails) {
        return <Typography color="gray">Loading hospital details...</Typography>;
    }

    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "center",
                padding: 1,
                backgroundColor: "#f9f9f9", // Light background
            }}
        >
            <Grid container spacing={3} justifyContent="center" width={{ xs: "100%", md: "90%" }}>
                {/* Our Hospitals */}
                <Grid item xs={12} sm={6} lg={2}>
                    <Typography variant="h6" mb={1}>Our Hospitals</Typography>
                    {Hospitals.map((Hospital) => (
                        <Link href={Hospital.link} passHref legacyBehavior key={Hospital.name}>
                            <Typography color="gray" fontSize="14px" sx={{ "&:hover": { color: "#0076bd", cursor: "pointer" } }}>
                                {Hospital.name}
                            </Typography>
                        </Link>
                    ))}
                </Grid>

                {/* Facilities */}
                <Grid item xs={12} sm={6} lg={4}>
                    <Typography variant="h6" mb={1}>Facilities</Typography>
                    <Grid container display="flex" width="100%">
                        {/* <List sx={{ padding: 0 }}> */}
                            {Facilities.map((Facility) => (
                                <Grid item xs={6}>
                                    <Link href="/" passHref legacyBehavior key={Facility.name}>
                                        <ListItem sx={{ padding: "4px 0" }}>
                                            <ListItemIcon sx={{ minWidth: "10px", color: "gray" }}>
                                                <FiberManualRecord fontSize="small" sx={{ fontSize: "8px" }} />
                                            </ListItemIcon>
                                            <ListItemText secondary={Facility.name} sx={{ color: "gray", fontSize: "14px" }} />
                                        </ListItem>
                                    </Link>
                                </Grid>
                            ))}
                        {/* </List> */}
                    </Grid>
                </Grid>

                {/* Contact us */}
                <Grid item xs={12} sm={6} lg={3}>
                    <Typography variant="h6" mb={1}>Contact Us</Typography>
                    <Typography color="gray" fontSize="14px" display="flex" alignItems="center" mb={1}>
                        <Phone sx={{ color: "gray", mr: 1 }} />
                        {HospitalDetails.PhoneNumber || "Not Available"}
                    </Typography>
                    <Typography color="gray" fontSize="14px" display="flex" alignItems="center" mb={1}>
                        <Mail sx={{ color: "gray", mr: 1 }} />
                        info@accf.in
                    </Typography>
                    <Typography color="gray" fontSize="14px" display="flex" alignItems="center" mb={3}>
                        <LocationCity sx={{ color: "gray", mr: 1 }} />
                        {HospitalDetails.Address || "Not Available"}
                    </Typography>
                    <SocialIcons
                        Facebook={HospitalDetails.Facebook}
                        Twitter={HospitalDetails.Twitter}
                        LinkedIn={HospitalDetails.LinkedIN}
                        Instagram={HospitalDetails.Insta}
                    />
                </Grid>

                {/* Location */}
                <Grid item xs={12} sm={6} lg={3}>
                    <Typography variant="h6" mb={1}>Landmark</Typography>
                    <GoogleMapEmbed URL={HospitalDetails.Location || ""} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
