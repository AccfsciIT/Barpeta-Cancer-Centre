"use client";
import { Box, Grid, Pagination, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import DoctorCard from "../../(components)/DoctorCard";
import Loader from "../../(components)/Loader";
import { API, HospitalID } from "../../(components)/Global";
import { fetchDoctors } from "@/lib/fetchData";

const API_URL = `${API}api/doctors`;

const Page = () => {
  const [doctors, setDoctors] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const doctorsPerPage = 9; // Number of doctors per page
  const totalPages = Math.ceil(doctors.length / doctorsPerPage);

  useEffect(() => {
    const fetchDoctorsList = async () => {
      try {
              const data = await fetchDoctors();
              setDoctors(data || []); // ✅ Ensure it's an array
            } catch (error) {
              console.error("Error fetching About Us data:", error);
              setDoctors([]);
            } finally {
              setLoading(false);
            }
    };

    fetchDoctorsList();
  }, []);

  if (loading) return <Loader />;

  if (!doctors.length) {
    return (
      <Typography textAlign="center" color="error">
        No doctors available.
      </Typography>
    );
  }

  // Get doctors for current page
  const currentDoctors = doctors.slice((page - 1) * doctorsPerPage, page * doctorsPerPage);

  // Handle Pagination Change
  const handlePageChange = (_, newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box display="flex" flexDirection="column" width="100%" justifyContent="center" mt={5}>
      {/* Header Section */}
      <Box display="flex" flexDirection="column" alignItems="center" width="100%" p={1}>
        <Typography variant="h5" fontWeight="bold">OUR DOCTORS</Typography>
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

export default Page;
