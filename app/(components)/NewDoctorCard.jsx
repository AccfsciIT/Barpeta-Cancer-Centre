import React, { useState, useCallback } from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Box,
  Button,
  Grid,
  LinearProgress,
  Tab,
  Avatar,
} from "@mui/material";
import { LocationOn, TaskAlt, Share as ShareIcon } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Link from "next/link";
// import Image from "next/image";
import { API } from "./Global";

const ExpandMore = styled(IconButton)(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? "rotate(180deg)" : "rotate(0deg)",
}));

const NewDoctorCard = ({ name, speciality, image, text }) => {
  const [tabValue, setTabValue] = useState("1");

  const handleChange = useCallback((_, newValue) => {
    setTabValue(newValue);
  }, []);

  return (
    <Card
    sx={{
      width: 360, // Fixed width
      maxWidth: 360, // Ensures it does not expand
      mx: "auto",
      height: 550,
      display: "flex",
      flexDirection: "column",
      p: 2,
      overflow: "hidden",
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
    }}
    >
      <Box display='flex' flexDirection='column' width='100%' padding={1}>
        <Box display='flex' width='100%' justifyContent='space-between'>
          <Box display="flex" width="100%" justifyContent="space-between">
            <Typography fontWeight="bold" variant="h6">{name}</Typography>
            <IconButton>
              <ShareIcon sx={{ fontSize: 32 }} />
            </IconButton>
          </Box>
        </Box>
        <Box display='flex' width='100%' justifyContent='space-between'>
          <Box
            display="flex"
            width="120px"
            height="120px"
            overflow="hidden"
            borderRadius="50%"
            padding='5px'
          >
            <Avatar
              src={`${API}${image}`} // Replace with your image URL
              sx={{ width: "100%", height: "100%" }}
            />
          </Box>

          <Box display='flex' width='60%' flexDirection='column'>
            <Typography color="#0D47A1" noWrap
              overflow="hidden"
              textOverflow="ellipsis">{speciality}</Typography>
            <Box sx={{ width: '100%' }} marginY={1}>
              <LinearProgress variant="determinate" value={40} />
            </Box>
            <Box display='flex' width='100%' justifyContent='space-between'>
              <Typography>Department</Typography>
            </Box>
          </Box>
        </Box>
        <Box display="flex" width='100%' justifyContent='space-between' marginTop={2} alignItems='center'>
          <Box display='flex'>
            <LocationOn sx={{ color: "red" }} />
            <Typography fontWeight="bold">Location</Typography>
          </Box>

          <Link href="/consultants/1" passHref>
            <Button aria-label="profile">View Profile</Button>
          </Link>
        </Box>
      </Box>

      <CardContent sx={{ flex: 1, overflowY: "auto", padding:0, margin:0}}>
        <TabContext value={tabValue}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <TabList onChange={handleChange} textColor="inherit" indicatorColor="primary">
              <Tab label="Specialization" value="1" />
              <Tab label="Qualification" value="2" />
            </TabList>
          </Box>

          <TabPanel value="1">
            {["Endoportal Brain Surgery", "Endoscopic Skull Base Surgery"].map((item, index) => (
              <Typography key={index} sx={{ color: "gray" }}>
                <TaskAlt /> {item}
              </Typography>
            ))}
          </TabPanel>

          <TabPanel value="2">
            {["M.Ch (Neurosurgery)", "M.B.B.S."].map((item, index) => (
              <Typography key={index} sx={{ color: "gray" }}>
                <TaskAlt /> {item}
              </Typography>
            ))}
          </TabPanel>
        </TabContext>
      </CardContent>

      <CardActions>
        <Button variant="contained" fullWidth aria-label="meet">
          Meet the Doctor
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewDoctorCard;
