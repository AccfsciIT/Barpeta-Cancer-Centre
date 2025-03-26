import { Box, Typography } from "@mui/material";
import { Suspense, lazy } from "react";
import { fetchHomeContent, fetchImageSlider, fetchDoctors } from "../../lib/fetchData";

// Lazy load components
const ImageSlider = lazy(() => import("../(components)/ImageSlider"));
const DoctorSlider = lazy(() => import("../(components)/DoctorCard/DoctorSlider"));
const Facilities = lazy(() => import("../(components)/Facilities"));
const Accomplishments = lazy(() => import("../(components)/Accomplishments"));
const WhatsHappening = lazy(() => import("../(components)/WhatsHappening"));
const OurHospitals = lazy(() => import("../(components)/OurHospitals"));

// ✅ Server Component
export default async function Home() {
  const homeContent = await fetchHomeContent();
  const images = await fetchImageSlider();
  // const doctors = await fetchDoctors();

  return (
    <>
      {/* Hero Section */}
      <Box display="flex" width="100%" sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Suspense fallback={<Typography>Loading Slider...</Typography>}>
          <ImageSlider Images={images} />
        </Suspense>
        <Box padding={2} sx={{ width: { xs: "100%", md: "40%" } }}>
          {homeContent ? (
            <>
              <Typography variant="h5">{homeContent.heading}</Typography>
              <Typography textAlign="justify">{homeContent.description}</Typography>
            </>
          ) : (
            <Typography color="error">Error loading content</Typography>
          )}
        </Box>
      </Box>

      {/* Consultants Section */}
      <Box margin={1} height="100vh" paddingY={3}>
        <Typography variant="h4" fontWeight="bold" marginLeft={3} marginY={3}>
          Consultants
        </Typography>
        <Suspense fallback={<Typography>Loading Doctors...</Typography>}>
          <DoctorSlider/>
        </Suspense>
      </Box>

      {/* Accomplishments */}
      <Box textAlign="center">
        <Typography color="#1976d2" fontWeight="bold" variant="h5">
          Our Accomplishments
        </Typography>
        <Typography>As on 1st February 2025</Typography>
      </Box>
      <Suspense fallback={<Typography>Loading Accomplishments...</Typography>}>
        <Accomplishments />
      </Suspense>

      {/* Facilities */}
      <Typography variant="h5" fontWeight="bold" paddingX={2}>
        Facilities
      </Typography>
      <Suspense fallback={<Typography>Loading Facilities...</Typography>}>
        <Facilities />
      </Suspense>

      {/* What's Happening */}
      <Typography variant="h5" fontWeight="bold" paddingX={2}>
        What's Happening
      </Typography>
      <Suspense fallback={<Typography>Loading latest events...</Typography>}>
        <WhatsHappening />
      </Suspense>

      {/* Our Hospitals */}
      <Typography variant="h5" paddingX={2} fontWeight="bold" marginBottom={3}>
        OUR HOSPITALS
      </Typography>
      <Suspense fallback={<Typography>Loading hospital details...</Typography>}>
        <OurHospitals />
      </Suspense>
    </>
  );
}
