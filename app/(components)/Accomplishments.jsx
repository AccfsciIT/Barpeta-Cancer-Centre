'use client'
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { API } from "./Global";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Accomplishments = ({ accomplishments }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md")); // True for mobile screens

    return (
        <Box display="flex" width="100%" justifyContent="center">
            {isMobile ? (
                // Mobile View - Swiper Carousel (1 item per slide)
                <Swiper slidesPerView={1} spaceBetween={10} pagination={{ clickable: true }}>
                    {accomplishments.map((entry, index) => (
                        <SwiperSlide key={index}>
                            <Box 
                                display="flex" 
                                flexDirection="column" 
                                alignItems="center" 
                                justifyContent="center" 
                                padding={2}
                            >
                                <Box sx={{ backgroundColor: "white", padding: "30px", display: "flex", borderRadius: "50%" }}>
                                    <Image src={`${API}${entry.path}`} alt='img' width={100} height={100} sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                                </Box>
                                <Typography variant="h3" fontWeight="bold" color="orange" sx={{ textshadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}>
                                    {entry.count}
                                </Typography>
                                <Typography borderTop="1px solid gray" padding={1} variant="h5" margin={1} width="100%" textAlign="center" fontWeight="bold">
                                    {entry.category}
                                </Typography>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                // Desktop View - Grid Layout (4 items per row)
                <Grid container justifyContent="center" width="80%" padding={2} marginY={3} spacing={3}>
                    {accomplishments.map((entry, index) => (
                        <Grid key={index} item xs={12} sm={6} md={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "end" }}>
                            <Box sx={{ backgroundColor: "white", padding: "30px", display: "flex", borderRadius: "50%" }}>
                                <Image src={`${API}${entry.path}`} alt='img' width={100} height={100} sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                            </Box>
                            <Typography variant="h3" fontWeight="bold" color="orange" sx={{ textshadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}>
                                {entry.count}
                            </Typography>
                            <Typography borderTop="1px solid gray" padding={1} variant="h5" margin={1} width="100%" textAlign="center" fontWeight="bold">
                                {entry.category}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default Accomplishments;
