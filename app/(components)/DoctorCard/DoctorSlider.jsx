import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Grid, IconButton, useMediaQuery } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { DoctorDetails } from "./DoctorDetails";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import {HospitalID, API} from "../Global";
import Loader from "../Loader";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const DoctorSlider = () => {
  const [doctors, setDoctors] = useState({});
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchDoctors = async () => {
        try {
          const response = await fetch(`${API}api/doctors?HospitalID=${HospitalID}`);
          const data = await response.json();
          if (response.ok) {
            setDoctors(data.result);
            // console.log("Images=", data.result);
          } else {
            console.error("Error:", data.error);
          }
        } catch (error) {
          console.error("Failed to fetch hospital details:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchDoctors();
    }, []);
    
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const columns = isMobile ? 1 : 4;

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = doctors.length;

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => (prevStep - 1 + maxSteps) % maxSteps);
  };

  if (loading) {
    return <><Loader/></>;
  }
  return (
    <Box sx={{ position: "relative", maxWidth: "100%", flexGrow: 1 }}>
      {/* Left Button */}
      <IconButton
        onClick={handleBack}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          zIndex: 10,
          bgcolor: "rgba(255, 255, 255, 0.6)",
          "&:hover": { bgcolor: "white" }
        }}
      >
        <ArrowBackIos />
      </IconButton>

      {/* Swipeable Views */}
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={setActiveStep}
        enableMouseEvents
        interval={5000}
      >
        {doctors.map((_, index) => (
          <Grid key={index} container spacing={3} paddingX={3}>
            {Array.from({ length: columns }).map((_, i) => {
              const doctor = doctors[(index + i) % doctors.length];
              return (
                <Grid key={doctor.name} item xs={12} sm={6} md={3}>
                  <DoctorDetails {...doctor} />
                </Grid>
              );
            })}
          </Grid>
        ))}
      </AutoPlaySwipeableViews>

      {/* Right Button */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          zIndex: 10,
          bgcolor: "rgba(255, 255, 255, 0.6)",
          "&:hover": { bgcolor: "white" }
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
}

export default DoctorSlider;