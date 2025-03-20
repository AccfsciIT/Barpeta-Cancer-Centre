import React from "react";
import { Card, CardContent, CardMedia, Typography, CardActionArea, Box } from "@mui/material";
import Link from "next/link";

const NewsCard = ({ image, title = "No Title", text = "No Description", date }) => {
  const truncateText = (str, limit) => (str.length > limit ? `${str.slice(0, limit)}...` : str);

  return (
    <Card
      sx={{
        height: 420,
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.3s ease-in-out", // Smooth transition
        "&:hover": {
          transform: "scale(1.01)", // Slightly increase size on hover
          boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.3)", // Add shadow on hover
        },
      }}
    >
      <CardActionArea component={Link} href="/newsAndEvents/details" sx={{ height: "100%" }}>
        {/* Image with Fixed Height */}
        <Box sx={{ position: "relative" }}>
          <CardMedia component="img" image={image} alt={title} sx={{ height: 200, objectFit: "cover" }} />

          {/* Overlay Text */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              background: "rgba(0, 0, 0, 0.5)", // Darker transparent background
              color: "white",
              textAlign: "center",
              py: 1,
            }}
          >
            <Typography variant="subtitle1">{date}</Typography>
          </Box>
        </Box>

        {/* Card Content */}
        <CardContent>
          <Typography variant="h6">{truncateText(title, 47)}</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {truncateText(text, 151)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewsCard;
