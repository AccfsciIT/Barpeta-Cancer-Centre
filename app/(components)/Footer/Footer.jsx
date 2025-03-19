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
    }
];

const Footer = () => {
    const HospitalDetails = useHospital();

    // ✅ Ensure HospitalDetails exists before using its properties
    if (!HospitalDetails) {
        return <Typography color="gray">Loading hospital details...</Typography>;
    }

    return (
        <Box display="flex" width="100%" flexDirection="column" alignItems="center">
            <Grid container justifyContent="center" width="90%">
                {/* Our Hospitals */}
                <Grid item xs={2}>
                    <Typography variant="h6" marginBottom={1}>Our Hospitals</Typography>
                    {Hospitals.map((Hospital) => (
                        <Link href={Hospital.link} passHref legacyBehavior key={Hospital.name}>
                            <Typography color="gray" fontSize="12">{Hospital.name}</Typography>
                        </Link>
                    ))}
                </Grid>

                {/* Facilities */}
                <Grid item xs={4}>
                    <Typography variant="h6" marginBottom={1} width="100%" display="flex">Facilities</Typography>
                    <List sx={{ padding: 0, display: "flex" }}>
                        <Grid container>
                            {Facilities.map((Facility) => (
                                <Grid item xs={6} key={Facility.name}>
                                    <Link href="/" passHref legacyBehavior>
                                        <ListItem sx={{ padding: 0 }}>
                                            <ListItemIcon sx={{ minWidth: "10px", color: "gray" }}>
                                                <FiberManualRecord fontSize="small" sx={{ fontSize: "8px" }} />
                                            </ListItemIcon>
                                            <ListItemText secondary={Facility.name} />
                                        </ListItem>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </List>
                </Grid>

                {/* Contact us */}
                <Grid item xs={2}>
                    <Typography variant="h6" marginBottom={1}>Contact Us</Typography>
                    <Typography color="gray" marginY={1} marginTop={2} fontSize={12}>
                        <Phone sx={{ color: "gray", marginRight: "5px" }} />
                        {HospitalDetails.PhoneNumber || "Not Available"}
                    </Typography>
                    <Typography color="gray" marginY={1} fontSize={12}>
                        <Mail sx={{ color: "gray", marginRight: "5px" }} />
                        info@accf.in
                    </Typography>
                    <Typography color="gray" marginY={1} fontSize={12}>
                        <LocationCity sx={{ color: "gray", marginRight: "5px", textAlign: "justify" }} />
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
                <Grid item xs={3}>
                    <Typography variant="h6" marginBottom={1}>Landmark</Typography>
                    <GoogleMapEmbed URL={HospitalDetails.Location || ""} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
