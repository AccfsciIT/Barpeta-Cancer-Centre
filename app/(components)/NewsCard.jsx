import React from "react";
import { Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";
import Link from "next/link";

const NewsCard = ({ image, title = "No Title", text = "No Description", loading }) => {
  const truncateText = (str, limit) => (str.length > limit ? `${str.slice(0, limit)}...` : str);

  return (
    <Card sx={{ maxWidth: 345, height: 345 }}>
      <CardActionArea component={Link} href="/newsAndEvents/details" sx={{ display: "block", height: "100%" }}>
        {image && (
          <CardMedia component="img" height="140" image={`http://localhost:3001/${image}`} alt={title} />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {truncateText(title, 47)}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {truncateText(text, 151)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewsCard;
