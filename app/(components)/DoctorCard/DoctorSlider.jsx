"use client";
import { Box, IconButton, Grid, useMediaQuery, TextField } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { useSwipeable } from "react-swipeable";
import NewDoctorCard from "../../(components)/NewDoctorCard";

const DoctorSlider = ({ doctors }) => {
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    // Responsive doctorsPerPage settings
    const isXs = useMediaQuery("(max-width:600px)"); // Mobile
    const isSm = useMediaQuery("(min-width:601px) and (max-width:960px)"); // Tablet
    const isMd = useMediaQuery("(min-width:961px)"); // Desktop

    const doctorsPerPage = isXs ? 1 : isSm ? 2 : 3; // Mobile: 1, Tablet: 2, Desktop: 3

    // Filter doctors based on search query
    const filteredDoctors = doctors.filter((doctor) =>
        doctor.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalDoctors = filteredDoctors.length;
    const totalPages = Math.max(1, Math.ceil(totalDoctors / doctorsPerPage));

    // Adjust doctor list for pagination
    const startIdx = (page - 1) * doctorsPerPage;
    const displayedDoctors = filteredDoctors.slice(startIdx, startIdx + doctorsPerPage);

    // Reset page to 1 when searchQuery changes
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setPage(1);
    };

    // Handle next and previous page navigation
    const handleNext = () => {
        setPage((prev) => (prev < totalPages ? prev + 1 : prev));
    };

    const handlePrev = () => {
        setPage((prev) => (prev > 1 ? prev - 1 : prev));
    };

    // Swipe handlers
    const handlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    return (
        <>
            {/* Search Field */}
            <TextField
                sx={{ marginX: 2, marginBottom: 5 }}
                placeholder="Search for doctors"
                value={searchQuery}
                onChange={handleSearchChange}
            />

            <Box
                {...handlers}
                position="relative"
                display="flex"
                width="100%"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                // paddingY={5}
                // border='1px black solid'
                sx={{ touchAction: "pan-y", minHeight: "400px" }} // Ensures minimum height consistency
            >
                <Box
                    sx={{
                        width: "95%",
                        minHeight: "350px", // Ensures consistent height for content
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {/* Previous Button */}
                    <IconButton
                        onClick={handlePrev}
                        disabled={page === 1}
                        sx={{
                            position: "absolute",
                            left: "0%",
                            top: "50%",
                            zIndex: 1,
                            fontSize: "3rem",
                            color: "primary.main",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.2)" },
                            display: isMd ? "flex" : "none",
                        }}
                    >
                        <ArrowBackIosNew sx={{ fontSize: "3rem" }} />
                    </IconButton>

                    {/* Doctor Cards with Animation */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={page}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.1, ease: "easeInOut" }}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                width: "90%",
                                // border:'1px black solid',
                                // paddingY:'10px'
                            }}
                        >
                            <Grid
                                container
                                spacing={3}
                                justifyContent="center"
                                // border='1px black solid'
                                // marginY={4}
                                sx={{ minHeight: "320px" }} // Ensures consistent grid height
                            >
                                {displayedDoctors.length > 0 ? (
                                    displayedDoctors.map((doctor) => (
                                        <Grid
                                            key={doctor.id}
                                            item
                                            xs={12}
                                            sm={6}
                                            md={4}
                                            display="flex"
                                            // marginY={5}
                                            justifyContent="center"
                                            alignItems="stretch" // Ensures equal card height
                                        >
                                            <NewDoctorCard
                                                image={doctor.path}
                                                name={doctor.name}
                                                speciality={doctor.qualification}
                                                text={doctor.description}
                                            />
                                        </Grid>
                                    ))
                                ) : (
                                    <Box sx={{ textAlign: "center", padding: "20px", fontSize: "18px" }}>
                                        No doctors found
                                    </Box>
                                )}
                            </Grid>
                        </motion.div>
                    </AnimatePresence>

                    {/* Next Button */}
                    <IconButton
                        onClick={handleNext}
                        disabled={page === totalPages}
                        sx={{
                            position: "absolute",
                            right: "0%",
                            top: "50%",
                            fontSize: "3rem",
                            color: "primary.main",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.2)" },
                            display: isMd ? "flex" : "none",
                        }}
                    >
                        <ArrowForwardIos sx={{ fontSize: "3rem" }} />
                    </IconButton>
                </Box>
            </Box>
        </>
    );
};

export default DoctorSlider;
