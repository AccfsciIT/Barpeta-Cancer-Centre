"use client"
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HospitalID, API } from "../(components)/Global";

const Facilities = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [facilities, setFacilities] = useState([]);
    const [loading, setLoading] = useState(true);
    const charLimit = 396;

    useEffect(() => {
        const fetchFacilities = async () => {
            try {
                const response = await fetch(`${API}api/facilities?HospitalID=${HospitalID}`);
                const data = await response.json();
                if (response.ok) {
                    setFacilities(data.result);
                } else {
                    console.error("Error:", data.error);
                }
            } catch (error) {
                console.error("Failed to fetch hospital details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFacilities();
    }, []);

    if (loading) {
        return <>Loading...</>;
    }

    return (
        <Box>
            {facilities.map((Facility, index) => (
                <Box
                    key={index}
                    display="flex"
                    justifyContent="center"
                    marginBottom={1}
                    sx={{ cursor: "pointer" }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <Grid
                        container
                        display="flex"
                        width="95%"
                        borderRadius={2}
                        sx={index % 2 === 0
                            ? { borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", background: `linear-gradient(to right, ${Facility.colour1}, ${Facility.colour2})` }
                            : { borderTopRightRadius: "10px", borderBottomRightRadius: "10px", background: "linear-gradient(to right, #cbdae5, #ced0d2)", flexDirection: "row-reverse" }}
                    >
                        {/* Text Content */}
                        <Grid item display="flex" flexDirection="column" xs={8} padding={4}>
                            <Typography variant="h4">{Facility.title}</Typography>

                            {/* Animated Colored Bar */}
                            <Box
                                display="flex"
                                width={hoveredIndex === index ? "20%" : "5%"} // Expand on hover
                                sx={{
                                    backgroundColor: Facility.Loader,
                                    height: 10,
                                    borderRadius: 10,
                                    marginY: 1,
                                    transition: "width 0.4s ease-in-out",
                                    willChange: "width",
                                }}
                            ></Box>

                            <Typography>
                                {Facility.description.length > charLimit
                                    ? `${Facility.description.slice(0, charLimit)}...`
                                    : Facility.description}
                            </Typography>
                            <Typography fontSize="13px" marginTop={1}>Read More</Typography>
                        </Grid>

                        {/* Image with Smooth Zoom Effect */}
                        <Grid
                            item
                            xs={4}
                            sx={index % 2 === 0
                                ? { position: "relative", height: "auto", overflow: "hidden", clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 5% 100%)" }
                                : { position: "relative", width: "25%", height: "auto", overflow: "hidden", clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 0% 100%)" }}
                        >
                            <Box
                                sx={{
                                    transition: "transform 0.4s ease-in-out",
                                    transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)", // Smooth Zoom effect
                                    willChange: "transform",
                                    width: "100%",
                                    height: "100%"
                                }}
                            >
                                <Image
                                    src={`http://localhost:3001/${Facility.path}`}
                                    alt="facility-image"
                                    fill
                                    style={{
                                        objectFit: "cover",
                                        borderRadius: index % 2 === 0 ? "10px 0 0 10px" : "0 10px 10px 0"
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            ))}
        </Box>
    );
};

export default Facilities;
