"use client";
import { Box, IconButton, Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import NewDoctorCard from "../../(components)/NewDoctorCard";
import Loader from "../Loader";
import { fetchDoctors } from "../../../lib/fetchData"; // Import fetch function

const DoctorSlider = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [doctorsPerPage, setDoctorsPerPage] = useState(3);

    useEffect(() => {
        const loadDoctors = async () => {
            const data = await fetchDoctors();
            setDoctors(data);
            setLoading(false);
        };
        loadDoctors();
    }, []);

    if (loading) return <Loader />;

    const totalDoctors = doctors.length;
    const totalPages = Math.ceil(totalDoctors / doctorsPerPage);

    // Adjust doctor list for pagination
    let displayedDoctors = [];
    let startIdx = (page - 1) * doctorsPerPage;
    if (startIdx + doctorsPerPage <= totalDoctors) {
        displayedDoctors = doctors.slice(startIdx, startIdx + doctorsPerPage);
    } else {
        displayedDoctors = [
            ...doctors.slice(startIdx),
            ...doctors.slice(0, doctorsPerPage - (totalDoctors - startIdx)),
        ];
    }

    return (
        <Box position="relative" display="flex" width="100%" flexDirection="column" justifyContent="center" alignItems="center">
            <Box sx={{ width: "100%" }} display="flex" alignItems="center" justifyContent="center">
                {/* Previous Button */}
                <IconButton
                    onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : totalPages))}
                    sx={{
                        position: "absolute", left: "0%", top: "50%", zIndex: 1,
                        fontSize: "3rem", color: "primary.main", backgroundColor: "rgba(0, 0, 0, 0.1)",
                        "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.2)" },
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
                    >
                        <Grid container spacing={3} justifyContent="center">
                            {displayedDoctors.map((doctor, index) => (
                                <Grid key={index} item xs={12} sm={6} md={4} display="flex" justifyContent="center">
                                    <NewDoctorCard
                                        image={doctor.path}
                                        name={doctor.name}
                                        speciality={doctor.qualification}
                                        text={doctor.description}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </AnimatePresence>

                {/* Next Button */}
                <IconButton
                    onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : 1))}
                    sx={{
                        position: "absolute", right: "0%", top: "50%",
                        fontSize: "3rem", color: "primary.main", backgroundColor: "rgba(0, 0, 0, 0.1)",
                        "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.2)" },
                    }}
                >
                    <ArrowForwardIos sx={{ fontSize: "3rem" }} />
                </IconButton>
            </Box>
        </Box>
    );
};

export default DoctorSlider;
