"use client";
import { Box, Grid, Typography } from "@mui/material";
import DoctorCard from "../../(components)/DoctorCard";
import { useState, useEffect } from "react";
import { HospitalID } from "../../(components)/Global";
import axios from "axios";
import Loader from "../../(components)/Loader";

const Page = () => {
    const [doctors, setDoctors] = useState([]); // Initial state as an empty array
    const [loading, setLoading] = useState(true);

    const fetchDoctors = async () => {
        try {
            setLoading(true);
            const response = await axios.post(
                "https://barpetacancercentre.org/api/get-doctor-for-center",
                { ccode: "Barpeta" }
            );

            // Ensure response.data is valid before setting state
            if (response.data && Array.isArray(response.data)) {
                setDoctors(response.data);
            } else {
                console.error("Invalid API response:", response.data);
            }
        } catch (error) {
            console.error("Failed to fetch doctor details:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDoctors();
    }, []);

    return (
        <Box display="flex" width="100%" flexDirection="column" justifyContent="center" marginTop={5}>
            <Box display="flex" flexDirection="column" alignItems="center" width="100%" padding={1}>
                <Typography variant="h5" fontWeight="bold">OUR DOCTORS</Typography>
                <Typography variant="h6" textAlign="center" fontSize={14}>
                    The best way to find yourself is to lose yourself in the service of others
                </Typography>
            </Box>

            {loading ? (
                <Loader/>
            ) : (
                <Grid container spacing={3} justifyContent="center" marginY={3}>
                    {doctors.map((doctor, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4} display="flex" justifyContent="center">
                            <DoctorCard
                                image={doctor.doctor_image} // Ensure the correct field from API response
                                name={doctor.name}
                                profile={doctor.profile_details}
                                text={doctor.designation}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default Page;
