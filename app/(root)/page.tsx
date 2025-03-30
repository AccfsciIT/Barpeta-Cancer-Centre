import { Box, Typography } from "@mui/material";
import { Suspense, lazy } from "react";
import { fetchHomeContent, fetchImageSlider, fetchDoctors, fetchAccomplishments } from "../../lib/fetchData";
import Loader from "../(components)/Loader";

const ImageSlider = lazy(() => import("../(components)/ImageSlider"));
const DoctorSlider = lazy(() => import("../(components)/DoctorCard/DoctorSlider"));
const Facilities = lazy(() => import("../(components)/Facilities/FacilityData"));
const Accomplishments = lazy(() => import("../(components)/Accomplishments"));
const WhatsHappening = lazy(() => import("../(components)/WhatsHappening"));
const OurHospitals = lazy(() => import("../(components)/Hospitals/OurHospitalsPage"));

// ✅ Server Component
export default async function Home() {
  const homeContent = await fetchHomeContent();
  const images = await fetchImageSlider();
  const accomplishments = await fetchAccomplishments();
  const doctors = await fetchDoctors();
  // const doctors = await fetchDoctors();

  return (
    <>
      {/* Intro */}
      <Box display="flex" width="100%" sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Suspense fallback={<Loader/>}>
          <ImageSlider Images={images} />
        </Suspense>
        <Box padding={2} sx={{ width: { xs: "100%", md: "40%" } }}>
          {homeContent ? (
            <>
              <Typography variant="h5">{homeContent.heading}</Typography>
              <Typography textAlign="justify">{homeContent.description}</Typography>
            </>
          ) : (
            <Typography color="error"><Loader/></Typography>
          )}
        </Box>
      </Box>

      {/* Consultants Section */}
      <Box margin={1} display="flex" flexDirection='column' height="100vh" marginY={2}>
        <Typography variant="h4" fontWeight="bold" marginLeft={3} marginTop={3}>
          Consultants
        </Typography>
        <Suspense fallback={<Typography>Loading Doctors...</Typography>}>
          <DoctorSlider doctors={doctors} />
        </Suspense>
      </Box>

      {/* Accomplishments */}
      <Box marginY={4} textAlign="center" display="flex" justifyContent='center' flexDirection='column' height='80vh' paddingY={3} position="relative" sx={{
        backgroundImage: 'url(/accomp.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: "white", // Ensures text is visible on the dark overlay
        '&::before': {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Black overlay with 50% opacity
          zIndex: 1
        }
      }}>
        <Typography color="white" fontWeight="bolder" variant="h4" zIndex={2}>
          Our Accomplishments
        </Typography>
        <Typography zIndex={2}>As on 1st February 2025</Typography>
        <Box zIndex={2}>
          <Suspense fallback={<Typography >Loading Accomplishments...</Typography>}>
            <Accomplishments accomplishments={accomplishments} />
          </Suspense>
        </Box>
      </Box>


      {/* Facilities */}
      <Box display='flex' width='100%' justifyContent='center'>
        <Box display='flex' width='90%' flexDirection='column'>
          <Typography variant="h5" fontWeight="bold" marginY={2}>
            Facilities
          </Typography>
          <Suspense fallback={<Typography>Loading Facilities...</Typography>}>
            <Facilities />
          </Suspense>
        </Box>
      </Box>

      {/* What's Happening */}

      <Suspense fallback={<Typography>Loading latest events...</Typography>}>
        <WhatsHappening />
      </Suspense>

      {/* Our Hospitals */}
      <Box display='flex' width='100%' justifyContent='center'>
        <Box display='flex' width='90%' flexDirection='column'>
          <Typography variant="h5" fontWeight="bold" marginBottom={3}>
            OUR HOSPITALS
          </Typography>
          <Suspense fallback={<Typography>Loading hospital details...</Typography>}>
            <OurHospitals/>
          </Suspense>
        </Box>
      </Box>
    </>
  );
}
