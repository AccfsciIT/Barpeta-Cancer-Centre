"use client";

import { LocationCity, Mail, Phone } from "@mui/icons-material";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useHospital } from "../../(components)/HospitalProvider";

const ContactPage = () => {
    const HospitalDetails = useHospital();

    // Ensure HospitalDetails is not null before rendering
    if (!HospitalDetails) {
        return <Typography textAlign="center" marginTop={5}>Loading...</Typography>;
    }

    return (
        <Box display="flex" width="100%" justifyContent="center">
            <Box
                display="flex"
                width="70%"
                padding={2}
                sx={{ backgroundColor: "#eeebeb", borderRadius: "10px", height: "600px" }}
                flexDirection="column"
                alignItems="center"
            >
                <Typography variant="h5" marginY={1} fontWeight="bold">Contact Us</Typography>
                <Typography color="gray" marginY={1}>Any questions or remarks? Write us a message.</Typography>

                <Grid container width="90%" sx={{ backgroundColor: "#eeebeb", borderRadius: "10px", height: "600px" }}>
                    {/* Contact Information Section */}
                    <Grid item xs={5} backgroundColor="#3e2093" borderRadius="10px" padding={4}>
                        <Typography color="white" variant="h6">Contact Information</Typography>
                        <Typography color="gray" marginY={1}>
                            Fill up the form and our team will get back to you within 24 hours
                        </Typography>

                        <Typography color="gray" marginY={1} marginTop={2}>
                            <Phone sx={{ color: "yellow", marginRight: "5px" }} />
                            {HospitalDetails?.PhoneNumber || "Not Available"}
                        </Typography>
                        <Typography color="gray" marginY={1}>
                            <Mail sx={{ color: "yellow", marginRight: "5px" }} />
                            info@accf.in
                        </Typography>
                        <Typography color="gray" marginY={1}>
                            <LocationCity sx={{ color: "yellow", marginRight: "5px" }} />
                            {HospitalDetails?.Address || "Address Not Available"}
                        </Typography>
                    </Grid>

                    {/* Contact Form Section */}
                    <Grid item container xs={7} backgroundColor="white" borderRadius="10px" justifyContent="center" padding={5} spacing={2}>
                        <Grid item xs={6}>
                            <Typography>Name</Typography>
                            <TextField variant="standard" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>Last Name</Typography>
                            <TextField variant="standard" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>E-Mail</Typography>
                            <TextField variant="standard" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>Phone No</Typography>
                            <TextField variant="standard" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Message</Typography>
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                rows={4}
                                placeholder="Enter your message"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth size="small">Submit</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default ContactPage;
