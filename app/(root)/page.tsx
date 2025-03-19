"use client";
import { useEffect, useState, useMemo } from "react";
import ImageSlider from "../(components)/ImageSlider";
import DoctorCards from "../(components)/DoctorCard/DoctorCards";
import Facilities from "../(components)/Facilities";
import Accomplishments from "../(components)/Accomplishments";
import WhatsHappening from "../(components)/WhatsHappening";
import OurHospitals from "../(components)/OurHospitals";
import { Box, Typography } from "@mui/material";
import {HospitalID, API} from "../(components)/Global";

// Define Type for home content
interface HomeContentType {
  heading: string;
  description: string;
}

export default function Home() {
  const [homeContent, setHomeContent] = useState<HomeContentType | null>(null);
  const [loading, setLoading] = useState(true);

  // Memoize API URL
  const apiUrl = useMemo(() => `${API}api/home_text?HospitalID=${HospitalID}`, []);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchHome = async () => {
      try {
        const response = await fetch(apiUrl, { signal });
        const data = await response.json();

        if (response.ok && data.result?.length) {
          setHomeContent(data.result[0]);
        } else {
          console.error("Error:", data.error);
        }
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Failed to fetch home content:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchHome();

    return () => controller.abort(); // Cleanup on unmount
  }, [apiUrl]);

  if (loading) return <Typography>Loading...</Typography>;

  return (
    <>
      {/* Hero Section */}
      <Box display="flex" alignItems="end" flexDirection="column">
        <Box display="flex" width="100%" sx={{ flexDirection: { xs: "column", md: "row" } }}>
          <ImageSlider />
          <Box padding={2} sx={{ width: { xs: "100%", md: "40%" } }}>
            <Typography variant="h5">{homeContent?.heading || "Default Heading"}</Typography>
            <Typography textAlign="justify">{homeContent?.description || "Default description"}</Typography>
          </Box>
        </Box>
      </Box>

      {/* Consultants Section */}
      <Box margin={1}>
        <Typography variant="h5" fontWeight="bold" marginLeft={3}>
          Consultants
        </Typography>
        <DoctorCards />
      </Box>

      {/* Accomplishments */}
      <Box textAlign="center" marginY={2}>
        <Typography color="blue" fontWeight="bold" variant="h5">
          Our Accomplishments
        </Typography>
        <Typography>As on 1st February 2025</Typography>
      </Box>
      <Accomplishments />

      {/* Facilities Section */}
      <Typography variant="h5" fontWeight="bold" paddingX={4}>
        Facilities
      </Typography>
      <Facilities />

      {/* What's Happening */}
      <WhatsHappening />

      {/* Our Hospitals Section */}
      <Typography variant="h5" paddingX={4} fontWeight="bold" marginBottom={3}>
        OUR HOSPITALS
      </Typography>
      <OurHospitals />
    </>
  );
}
