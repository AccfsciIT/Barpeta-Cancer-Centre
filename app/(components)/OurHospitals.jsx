"use client";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchHospitals } from "../../lib/fetchData";
import Loader from "./Loader";

const OurHospitals = () => {
    const [ourHospitals, setOurHospitals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadHospitals = async () => {
            const data = await fetchHospitals();
            setOurHospitals(data);
            setLoading(false);
        };
        loadHospitals();
    }, []);

    if (loading) return <Loader />;
    if (error) return <Typography color="error">{error}</Typography>;
    if (ourHospitals.length === 0) return <Typography>No hospitals available</Typography>;

    return (
        <Box marginY={1} marginX={2}>
            <Grid container>
                {ourHospitals.map((hospital) => (
                    <Grid
                        key={hospital.id}
                        item md={4} lg={3} xs={12}
                        marginBottom={1}
                        sx={{
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                        }}
                    >
                        <a
                            href={hospital.domain}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                backgroundColor: "#0076bd",
                                color: "white",
                                borderRadius: "50px",
                                display: "flex",
                                width: "98%",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: 1,
                                textDecoration: "none", // ✅ Removed default underline
                            }}
                        >
                            <Typography paddingY={1} textAlign="center">
                                {hospital.name || "Unnamed Hospital"}
                            </Typography>
                        </a>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default OurHospitals;
