import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { East } from "@mui/icons-material";
import Link from "next/link";
import { Box } from "@mui/material";
import Image from "next/image";

const DoctorCard = ({ image, name, speciality, text }) => {
  const titleLimit = 47;
  const textLimit = 151;

  const doctorSlug = name?.toLowerCase().replace(/\s+/g, "-") || "doctor";

  return (
    <Card sx={{ width:"80%", height: 420, textAlign: "center", p: 2 }}>
      <CardActionArea>
        {/* Circular Image Centered Correctly */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%", // Ensure full width for centering
            mt: 2,
          }}
        >
          {image && (
            <Box
              sx={{
                width: 150, // Ensure square dimensions
                height: 150,
                borderRadius: "50%",
                overflow: "hidden", // Ensures the image stays within the circular boundary
                border: "3px solid #ddd",
              }}
            >
              <Image
                src={`http://localhost:3001/${image}`}
                alt={name}
                width={150} // Maintain 1:1 aspect ratio
                height={150}
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>
          )}
        </Box>

        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name ? `${name.slice(0, titleLimit)}` : "No Name"}
          </Typography>
          <Typography variant="body2" fontStyle="italic" color="primary">
            {speciality || "Speciality Not Available"}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
            {text ? `${text.slice(0, textLimit)}...` : "No Description"}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={`/doctors/${doctorSlug}`} passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
            <East sx={{ marginLeft: "auto", color: "primary.main" }} />
          </a>
        </Link>
      </CardActions>
    </Card>
  );
};

export default DoctorCard;
