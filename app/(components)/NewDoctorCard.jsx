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
} from "@mui/material";
import { LocationOn, TaskAlt, Share as ShareIcon } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Link from "next/link";
import Image from "next/image";
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
        width: "100%",
        maxWidth: 480,
        mx: "auto",
        height: 550,
        display: "flex",
        flexDirection: "column",
        p: 1,
        overflow: "hidden",
        background: "hsla(210, 100%, 80%, 0.2)",
        backdropFilter: "blur(10px)",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
      }}
    >
      <CardHeader
        avatar={
          <Box
            sx={{
              position: "relative",
              width: 130,
              height: 130,
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <Image
              src={`${API}${image}`}
              alt={name}
              layout="fill"
              objectFit="cover"
              priority
            />
          </Box>
        }
        title={
          <Box mb={2}>
            <Box display="flex" width="100%" justifyContent="space-between">
              <Typography fontWeight="bold">{name}</Typography>
              <IconButton>
                <ShareIcon sx={{ fontSize: 32 }} />
              </IconButton>
            </Box>
            <Typography color="gray">{speciality}</Typography>
          </Box>
        }
        subheader={
          <>
            <LinearProgress
              variant="determinate"
              value={20}
              sx={{
                backgroundColor: "lightred",
                "& .MuiLinearProgress-bar": { backgroundColor: "#1976d2" },
              }}
            />
            <Box mt={2} display="flex" justifyContent="space-between">
              <Typography>Department</Typography>
              <Link href="/consultants/1" passHref>
                <Button>View Profile</Button>
              </Link>
            </Box>
            <Box display="flex" alignItems="center">
              <LocationOn sx={{ color: "red" }} />
              <Typography fontWeight="bold">Location</Typography>
            </Box>
          </>
        }
      />

      <CardContent sx={{ flex: 1, overflowY: "auto" }}>
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", display: "flex", justifyContent: "center" }}>
            <TabList onChange={handleChange} textColor="inherit" indicatorColor="primary">
              <Tab label="SPECIALIZATION & EXPERTISE" value="1" />
              <Tab label="QUALIFICATION" value="2" />
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
        <Button variant="contained" fullWidth>
          Meet the Doctor
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewDoctorCard;
