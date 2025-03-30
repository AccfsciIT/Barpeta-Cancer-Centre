import React from "react";
import { Card, CardContent, Typography, CardActionArea, Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const NewsCard = ({ image, title = "No Title", text = "No Description", date = "No Date" }) => {
  const truncateText = (str = "", limit) => (str.length > limit ? `${str.slice(0, limit)}...` : str);

  return (
    <Card
      sx={{
        height: 420,
        width: "100%",
        display: "flex",
        m: 3,
        overflow: "hidden",
        position: "relative",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.01)",
          boxShadow: 3,
        },
      }}
    >
      <CardActionArea component={Link} href="/newsAndEvents/details" sx={{ height: "100%" }}>
        {/* Image Section */}
        <Box sx={{ position: "relative", height: 200 }}>
          <Image
            src={image}
            alt='img'
            fill
            objectFit="cover"
            priority={false} // Lazy load for better performance
            style={{ borderRadius: "4px" }}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Date Overlay */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              background: "rgba(0, 0, 0, 0.5)",
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
