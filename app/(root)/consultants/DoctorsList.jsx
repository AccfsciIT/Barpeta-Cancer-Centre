"use client";
import { Box, Grid, Pagination, Typography, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import DoctorCard from "../../(components)/DoctorCard";
// import { useDispatch } from "react-redux";
// import { setHospitals } from "@/redux/features/hospitalSlice";

const DoctorsList = (props) => {
  // const dispatch = useDispatch();
  const {doctors} = props;
  const [page, setPage] = useState(1);

  // Responsive breakpoints
  const isXs = useMediaQuery("(max-width:600px)"); // Mobile
  const isSm = useMediaQuery("(min-width:601px) and (max-width:960px)"); // Tablet
  const isMd = useMediaQuery("(min-width:961px)"); // Desktop

  // Determine doctorsPerPage based on screen size
  const doctorsPerPage = isXs ? 3 : isSm ? 6 : 9; // Mobile: 3, Tablet: 6, Desktop: 9

  // Calculate total pages
  const totalPages = Math.ceil(doctors.length / doctorsPerPage);

  // Get doctors for the current page
  const currentDoctors = doctors.slice((page - 1) * doctorsPerPage, page * doctorsPerPage);

  // Handle Pagination Change
  const handlePageChange = (_, newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!doctors.length) {
    return <Typography textAlign="center" color="error">No doctors available.</Typography>;
  }

  return (
    <Box display="flex" flexDirection="column" width="100%" justifyContent="center" mt={5}>
      {/* Header Section */}
      <Box display="flex" flexDirection="column" alignItems="center" width="100%" p={1}>
        {/* <Typography variant="h5" fontWeight="bold">OUR DOCTORS</Typography> */}
        <Typography variant="h6" textAlign="center" fontSize={14}>
          The best way to find yourself is to lose yourself in the service of others
        </Typography>
      </Box>

      {/* Doctors Grid */}
      <Grid container spacing={3} justifyContent="center" my={3}>
        {currentDoctors.map((doctor) => (
          <Grid key={doctor.id} item xs={12} sm={6} md={4} display="flex" justifyContent="center">
            <DoctorCard
              image={doctor.path}
              name={doctor.name}
              speciality={doctor.Designation}
              text={doctor.description}
            />
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      {totalPages > 1 && (
        <Box display="flex" justifyContent="center" mt={3}>
          <Pagination count={totalPages} color="secondary" page={page} onChange={handlePageChange} />
        </Box>
      )}
    </Box>
  );
};

export default DoctorsList;
