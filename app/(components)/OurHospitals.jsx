"use client";
import { Box, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import {HospitalID, API} from "../(components)/Global";

const Hospitals = [{ name: "Barpeta Cancer Centre" }, { name: "Dibrugarh Cancer Centre" }];

const OurHospitals = () => {
    const [ourHospitals, setOurHospitals] = useState({});
    const [loading, setLoading] = useState(true);
    const fetchHospitals = async () => {
        try {
            const response = await fetch(`${API}api/our_hospitals?HospitalID=${HospitalID}`);
            const data = await response.json();
            if (response.ok) {
                setOurHospitals(data.result);
                // console.log("Images=", data.result);
            } else {
                console.error("Error:", data.error);
            }
        } catch (error) {
            console.error("Failed to fetch hospital details:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchHospitals();
    }, [])

    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <Box paddingLeft={4} marginY={5}>
            <Grid container spacing={2}>
                {ourHospitals.map((hospital, index) => (
                    <Grid
                        key={index}
                        item md={4} lg={3} xs={12}
                        sx={{
                            backgroundColor: "#0076bd",
                            color: "white",
                            paddingY: 2,
                            paddingX: 5,
                            borderRadius: 10,
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex"
                        }}
                    >
                        <Typography textAlign="center">{hospital.name}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default OurHospitals;
