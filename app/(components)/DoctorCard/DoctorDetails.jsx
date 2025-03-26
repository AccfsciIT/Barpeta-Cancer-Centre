import { LocationOn } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

export const DoctorDetails = ({ path, name, qualification, description }) => {
  const textLimit = 50;
  return (
    <Grid item>
      <Box sx={{ boxShadow: 1, borderRadius: 1, overflow: "hidden", bgcolor: "background.paper" }}>
        <Image 
          src={`${API}${path}` || "/Doctors/doctor_image.webp"} 
          alt="Doctor's Image" 
          width={385} 
          height={380} 
          style={{ width: "100%", display: "block" }} 
        />
        <Box p={2}>
          {/* <Typography color="black"><LocationOn sx={{ color: "red" }} />Guwahati</Typography> */}
          <Typography fontWeight="bold" fontSize={16} color="text.primary">
            {name || "No Name Available"}
          </Typography>
          <Typography fontSize={16} color="text.secondary">
            {/* {qualification || "No Qualification Provided"} */}
            {qualification ? `${qualification.slice(0, textLimit)}...` : "No Description"}
          </Typography>
          {/* <Typography fontSize={14} color="text.secondary" sx={{ minHeight: "10vh" }}>
            {description ? `${description.slice(0, textLimit)}...` : "No Description"}
          </Typography> */}
          {/* <Button variant="contained" fullWidth sx={{ borderRadius: 0, mt: 2 }}>
            Book an Appointment
          </Button> */}
        </Box>
      </Box>
    </Grid>
  );
};

// export default DoctorDetails;
