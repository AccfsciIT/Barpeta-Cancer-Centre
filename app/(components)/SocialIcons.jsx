"use client"; // ✅ This makes it a Client Component

import { Facebook, Instagram, LinkedIn, Twitter, X } from "@mui/icons-material";
import { Box } from "@mui/material";

const SocialIcons = (props) => {
  const icons = [
    { component: Facebook, url: props.Facebook },
    { component: X, url: props.Twitter }, // Add Twitter link here
    { component: LinkedIn, url: props.LinkedIn }, // Add LinkedIn link here
    { component: Instagram, url: props.Instagram }, // Add Instagram link here
  ];

  return (
    <Box sx={{ display: "flex", gap: "10px"}}>
      {icons.map(({ component: Icon, url }, index) => (
        <Icon
          key={index}
          onClick={() => window.open(url, "_blank")}
          sx={{
            color: "brown",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 30,
            height: 30,
            borderRadius: "50%",
            border: "1px solid brown",
            padding: "3px",
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "brown",
              color: "white",
            },
          }}
        />
      ))}
    </Box>
  );
};

export default SocialIcons;
