"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HeroCard from "./HeroCard";

export default function HeroSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className=" bg-white"
      >
        <SwiperSlide>
          <HeroCard
            image="/gra.jpg"
            title="Banners"
            description="At PMH, banner printing services offer customized, high-quality banners for marketing, events, promotions, and outdoor signage. Using advanced techniques like digital and screen printing on materials such as vinyl, fabric, and mesh, PMH delivers vibrant, durable banners that effectively convey your message."
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard
            image="/bana.jpg"
            title="Fabric Printing"
            description="At PMH, fabric printing services allow for custom designs on textiles using methods like screen printing, heat transfer, sublimation, and DTG printing. These techniques are ideal for creating unique clothing, home decor, and fabric products, with options for both mass production and small-batch designs."
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard
            image="/cutting.webp"
            title="Laser Cutting"
            description="Laser cutting is a precise method that uses a focused laser to cut or engrave materials like metal, wood, and acrylic. It's known for its accuracy, speed, and ability to create intricate designs with minimal waste."
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard
            image="/gazebo.jpg"
            title="Banners"
            description="At PMH, banner printing services offer customized, high-quality banners for marketing, events, promotions, and outdoor signage. Using advanced techniques like digital and screen printing on materials such as vinyl, fabric, and mesh, PMH delivers vibrant, durable banners that effectively convey your message."
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
