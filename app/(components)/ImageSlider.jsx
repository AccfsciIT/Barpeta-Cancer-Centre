"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Import fade effect CSS
import { memo } from "react";
import { API } from "../(components)/Global";

const ImageSlider = ({ Images = [] }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: { xs: "100%", md: "60%" },
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Smooth shadow effect
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]} // Added EffectFade
        effect="fade" // Smooth fade effect between slides
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto slide with smooth transition
        speed={1000} // Smooth transition speed
        pagination={{ clickable: true }}
        navigation={false} // Default: No navigation
        breakpoints={{
          768: {
            navigation: true, // Enable navigation for screens >= 768px
          },
        }}
        style={{ borderRadius: "10px" }} // Round corners
      >
        {Images.length > 0 ? (
          Images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={`${API}${image.path}`}
                alt='img'
                width={600}
                height={300}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  transition: "transform 1.5s ease-in-out",
                }}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <Image
              src="/placeholder.jpg" // Replace with an actual placeholder image
              alt="No Image Available"
              width={600}
              height={300}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                opacity: 0.5, // Slight dim effect
              }}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </SwiperSlide>
        )}
      </Swiper>
    </Box>
  );
};

export default memo(ImageSlider);
