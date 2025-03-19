"use client";
import { Box } from "@mui/material";
import Image from "next/image";

const AnimatedImages = () => {
  return (
    <Box className="animation-container">
      {/* Background Image */}
      <Image
        src="/Footer/footer_bg.png"
        alt="background"
        fill
        priority
        className="background"
      />

      {/* Moving Car */}
      <Image
        src="/Footer/car.gif"
        alt="car"
        width={250}
        height={200}
        className="moving-car"
      />

      {/* Moving Cyclist */}
      <Image
        src="/Footer/cyclist.gif"
        alt="cyclist"
        width={100}
        height={70}
        className="moving-cyclist"
      />
    </Box>
  );
};

export default AnimatedImages;
