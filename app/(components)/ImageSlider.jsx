"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import {HospitalID, API} from "../(components)/Global";

export default function ImageSlider() {
  const [Images, setImages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImageSlider = async () => {
      try {
        const response = await fetch(`${API}api/home_image_slider?HospitalID=${HospitalID}`);
        const data = await response.json();
        if (response.ok) {
          setImages(data.result);
          console.log("Images=", data.result);
        } else {
          console.error("Error:", data.error);
        }
      } catch (error) {
        console.error("Failed to fetch hospital details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImageSlider();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (

    <Box sx={{ display: "flex", width: { xs: "100%", md: "60%" } }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {Images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={`http://localhost:3001/${image.path}`}
              alt={`Slide ${index + 1}`}
              width={600}
              height={200}
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
