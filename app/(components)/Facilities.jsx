"use client";
import { Box, Button, Grid, LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchFacilities } from "../../lib/fetchData";
import { API } from "./Global";

const Facilities = () => {
    const [facilities, setFacilities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadFacilities = async () => {
            const data = await fetchFacilities();
            setFacilities(data);
            setLoading(false);
        };
        loadFacilities();
    }, []);

    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography color="error">{error}</Typography>;
    if (!facilities.length) return <Typography>No facilities available</Typography>;

    return (
        <Box sx={{ width: "100%" }} paddingX={1} paddingY={2}>
            {facilities.map((facility, index) => (
                <Box
                    key={facility.id || `facility-${index}`}
                    marginBottom={2}
                    display="flex"
                    width="100%"
                    sx={{ height: { md: "300px", sm: "600px" } }}
                    justifyContent="center"
                >
                    <Grid
                        container
                        width="95%"
                        borderRadius={2}
                        padding={0}
                        display="flex"
                        flexDirection="row-reverse"
                        sx={{ overflow: "hidden", boxShadow: 3 }}
                    >
                        {/* Image Section */}
                        <Grid item xs={12} md={4}>
                            <Box
                                display="flex"
                                width="100%"
                                height="300px"
                                overflow="hidden"
                                sx={{
                                    borderRadius: { xs: "10px 10px 0px 0px", lg: "0px 10px 10px 0px" },
                                    position: "relative",
                                }}
                            >
                                <Image
                                    src={`${API}${facility.path}`}
                                    alt={facility.title}
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                    priority
                                />
                            </Box>
                        </Grid>

                        {/* Content Section */}
                        <Grid
                            item
                            xs={12}
                            md={8}
                            sx={{
                                borderRadius: { xs: "0px 0px 10px 10px", lg: "10px 0px 0px 10px" },
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                padding: 3,
                                backgroundColor: "white",
                            }}
                        >
                            <Typography variant="h5" sx={{ fontSize: { xs: "18px", md: "24px" }, fontWeight: "bold" }}>
                                {facility.title}
                            </Typography>
                            <LinearProgress sx={{ marginY: 1 }} variant="determinate" value={30} />
                            <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                                {facility.description.length > 300
                                    ? `${facility.description.slice(0, 300)}...`
                                    : facility.description}
                            </Typography>
                            <Button>Read More</Button>
                        </Grid>
                    </Grid>
                </Box>
            ))}
        </Box>
    );
};

export default Facilities;
