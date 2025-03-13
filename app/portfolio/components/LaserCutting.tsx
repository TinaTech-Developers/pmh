"use client";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import styled from "@emotion/styled";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Slide = styled.div`
  height: 200px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 10px;
`;

const StyledSwiper = styled(Swiper)`
  padding-bottom: 40px;
`;

function ImageSliderLaserCutting() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <StyledSwiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        pagination={{ clickable: true }}
        onSlideChange={(swiper: SwiperClass) =>
          setActiveIndex(swiper.activeIndex)
        }
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <NetworkingCard
            image={"/bindura.jpg"}
            link={"https:www.buse.co.zw"}
            company={"BUSE"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NetworkingCard
            image={"/IMG-20250311-WA0022.jpg"}
            link={"/portfolio"}
            company={"THE COOPORATE CONSULTANCY"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NetworkingCard
            image={"/IMG-20250311-WA0027.jpg"}
            link={"/portfolio"}
            company={"MidNight Glow"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NetworkingCard
            image={"/IMG-20250311-WA0029.jpg"}
            link={"/portfolio"}
            company={"MidNight Glow"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NetworkingCard
            image={"/IMG-20250311-WA0031.jpg"}
            link={"/portfolio"}
            company={"MidNight Glow"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NetworkingCard
            image={"/IMG-20250311-WA0034.jpg"}
            link={"/portfolio"}
            company={"MidNight Glow"}
          />
        </SwiperSlide>
      </StyledSwiper>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto mt-10">
        <div className="col-span-1 md:h-65 h-full border p-6 shadow-2xl">
          <div className="w-full">
            <h1 className="text-xl font-semibold">Laser Engraving:</h1>
          </div>
          <p className="my-4">
            Laser engraving uses a high-powered laser to carve or etch deeper
            marks into a material, while laser marking alters the surface with
            heat to create high-contrast, permanent marks without removing
            material. Engraving creates deeper, more visible designs, while
            marking results in subtle surface-level changes. Both are used for
            branding, personalization, and industrial applications.
          </p>
          <Link
            href="/portfolio"
            className="text-sm py-2 w-28 border border-[#003366] relative px-4 bg-transparent text-gray-900 group transition-all"
          >
            Explore Our Laser Services
            <span className="absolute inset-0 text-center py-2 text-white bg-blue-950 scale-x-0 group-hover:scale-x-100 transition-all duration-300">
              Explore Our Laser Services
            </span>
          </Link>
        </div>
        <div className="col-span-1 md:h-65 h-full border px-6 shadow-2xl py-2">
          <div className="w-full">
            <h1 className="text-xl font-semibold">3D Signage</h1>
          </div>
          <p className="my-2">
            At PMH, we offer custom 3D sign services that bring your brand to
            life with depth and dimension. Our expertly crafted 3D signs are
            perfect for storefronts, logos, interior décor, and branding, making
            a lasting impression with their modern and dynamic look. Whether
            illuminated or non-illuminated, we use high-quality materials like
            acrylic, wood, metal, and foam to create precise, eye-catching
            designs tailored to your needs. Let us help you stand out with a
            custom 3D sign that elevates your business.
          </p>
          <Link
            href="/portfolio"
            className="text-sm py-2 w-28 border border-[#003366] relative px-4 bg-transparent text-gray-900 group transition-all"
          >
            Explore Our Laser Services
            <span className="absolute inset-0 text-center py-2 text-white bg-blue-950 scale-x-0 group-hover:scale-x-100 transition-all duration-300">
              Explore Our Laser Services
            </span>
          </Link>
        </div>
        <div className="col-span-1 md:h-65 h-full border px-6 py-2 shadow-2xl">
          <div className="w-full">
            <h1 className="text-xl font-semibold">Pylon Banners</h1>
          </div>
          <p className="my-2">
            At PMH, we specialize in creating high-quality pylon banners that
            provide impactful, eye-catching signage for your business or event.
            Pylon banners are large, freestanding signs perfect for outdoor use,
            offering excellent visibility from a distance. Whether for a
            storefront, shopping center, or event space, our custom pylon
            banners are made with durable materials to withstand the elements
            while promoting your brand effectively. Let us help you design a
            pylon banner that makes a bold statement and attracts attention.
          </p>
          <Link
            href="/portfolio"
            className="text-sm py-2 w-28 border border-[#003366] relative px-4 bg-transparent text-gray-900 group transition-all"
          >
            Explore Our Laser Services
            <span className="absolute inset-0 text-center py-2 text-white bg-blue-950 scale-x-0 group-hover:scale-x-100 transition-all duration-300">
              Explore Our Laser Services
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

interface NetworkingCardProps {
  image: any;
  link: any;
  company: any;
}

function NetworkingCard({ image, link, company }: NetworkingCardProps) {
  return (
    <motion.div
      initial={{
        x: 0,
        scale: 0,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        scale: 1,
        opacity: 1,
      }}
      transition={{ duration: 0.8 }}
      className="w-[300px] h-80 md:h-64 md:w-96 border relative group"
    >
      <Image
        src={image}
        alt="Website Image"
        height={100}
        width={200}
        className="w-80 h-72 md:h-56 md:w-96 object-cover"
      />
      <Link
        href={link}
        target="_blank"
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-blue-800 text-lg font-semibold transition-opacity duration-300"
      >
        Explore
      </Link>
      <h1 className="text-center font-semibold hover:z-20 hover:text-white">
        {company}
      </h1>
    </motion.div>
  );
}

export default ImageSliderLaserCutting;
