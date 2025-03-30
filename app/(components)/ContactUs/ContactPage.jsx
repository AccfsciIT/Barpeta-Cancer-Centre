'use client'
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
// import { useHospital } from "../HospitalProvider";
import { LocationCity, Mail, Phone } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectHospitalDetails } from "@/redux/features/hospitalDetailSlice";

const ContactPage = () => {
    // const HospitalDetails = useHospital();
    const HospitalDetails = useSelector(selectHospitalDetails);
    if (!HospitalDetails) {
        return <Typography textAlign="center" mt={5}>Loading...</Typography>;
    }

    return (
        <Box
            display="flex"
            width="100%"
            sx={{
                backgroundColor: "#eeebeb",
                // borderRadius: {md: "10px"},
                p: { md: 2, xs: 0 },
            }}
            flexDirection="column"
            alignItems="center"
        >
            <Typography variant="h5" my={1} fontWeight="bold">Contact Us</Typography>
            <Typography color="gray" my={1} mx={1} textAlign="center">
                Any questions or remarks? Write us a message.
            </Typography>

            <Grid
                container
                width="100%"
                sx={{
                    backgroundColor: "#eeebeb",
                    // borderRadius: "10px",
                    display: "flex",
                    flexDirection: { xs: "column-reverse", md: "row" },
                    overflow: "hidden"
                }}
            >
                {/* Contact Information Section */}
                <Grid
                    item
                    md={5}
                    xs={12}
                    sx={{
                        backgroundColor: "#3e2093",
                        borderRadius: { md: "10px 0px 0px 10px" },
                        p: { md: 4, xs: 2 },
                        color: "white"
                    }}
                    display='flex'
                    flexDirection='column'
                >
                    <Typography variant="h6" fontWeight='bold'>Contact Information</Typography>
                    <Typography my={1} color="#d3d3d3">
                        Fill up the form and our team will get back to you within 24 hours.
                    </Typography>

                    <Box>

                        <Box display="flex" alignItems="center" my={2}>
                            <Phone sx={{ mr: 1 }} />
                            <Typography color="#d3d3d3">
                                {HospitalDetails?.PhoneNumber || "Not Available"}
                            </Typography>
                        </Box>

                        <Box display="flex" alignItems="center" my={2}>
                            <Mail sx={{ mr: 1 }} />
                            <Typography color="#d3d3d3">info@accf.in</Typography>
                        </Box>

                        <Box display="flex" alignItems="center" my={2}>
                            <LocationCity sx={{ mr: 1 }} />
                            <Typography color="#d3d3d3">
                                {HospitalDetails?.Address || "Address Not Available"}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                {/* Contact Form Section */}
                <Grid
                    item
                    container
                    md={7}
                    xs={12}
                    sx={{
                        backgroundColor: "white",
                        borderRadius: { md: "10px 10px 0px 0px", xs: "0px 0px 0px 0px" },
                        p: { md: 4, xs: 2 },
                        // gap: 2
                    }}
                    spacing={1}
                    // height='70vh'
                    justifyContent="center"
                >
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth label="First Name" variant="outlined" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth label="Last Name" variant="outlined" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth label="Email" variant="outlined" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth label="Phone No" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={4}
                            placeholder="Enter your message"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" fullWidth size="large" aria-label="Submit Form">Submit</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactPage;
