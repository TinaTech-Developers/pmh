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
  height: 200px; /* Adjust height as needed */
  border: 1px solid #ccc; /* Example border */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5; /* Example background */
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px; /* Space between pagination bullets */
  margin-top: 10px; /* Space above pagination */
`;

const StyledSwiper = styled(Swiper)`
  /* Ensure the Swiper has room for the pagination */
  padding-bottom: 40px; /* Adjust based on the pagination height */
`;

function ImageSliderRoadSigns() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <StyledSwiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        pagination={{ clickable: true }}
        onSlideChange={(swiper: SwiperClass) =>
          setActiveIndex(swiper.activeIndex)
        } // Type the 'swiper' parameter
        autoplay={{
          delay: 3000, // Auto slide every 3 seconds
          disableOnInteraction: false, // Allow auto-slide even when interacting
        }}
        loop={true} // Explicitly enable loop
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
            image={"/IMG-20250311-WA0057.jpg"}
            link={"https:www.zimplats.co.zw"}
            company={" Mining"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NetworkingCard
            image={"/road.png"}
            link={"/portfolio"}
            company={""}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NetworkingCard image={"/she.png"} link={"/portfolio"} company={""} />
        </SwiperSlide>
        <SwiperSlide>
          <NetworkingCard
            image={"/IMG-20250311-WA0014.jpg"}
            link={"/portfolio"}
            company={""}
          />
        </SwiperSlide>
      </StyledSwiper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto mt-10">
        <div className="col-span-1 md:h-65 h-full border p-6 shadow-2xl">
          <div className="w-full">
            <h1 className="text-xl font-semibold ">Speed Control Signs</h1>
          </div>
          <p className="my-2">
            At PMH, we provide custom speed control signs designed to regulate
            and enforce speed limits in various settings. Made from durable
            materials, our signs are fully customizable to meet local
            requirements and ensure clear, visible messaging. Whether for roads,
            parking lots, or construction zones, our speed control signs help
            maintain safety and promote compliance with speed regulations.
          </p>
          <Link
            href="/portfolio"
            className="text-sm py-2 w-28 border border-[#003366] relative px-4 bg-transparent text-gray-900 group transition-all"
          >
            Explore Our Services
            <span className="absolute inset-0 text-center py-2 text-white bg-blue-950 scale-x-0 group-hover:scale-x-100 transition-all duration-300">
              Explore Our Services
            </span>
          </Link>
        </div>
        <div className="col-span-1 md:h-65 h-full border p-6 shadow-2xl">
          <div className="w-full">
            <h1 className="text-xl font-semibold ">Railroad Crossing Signs</h1>
          </div>

          <p className="my-2">
            At PMH, we offer custom railroad crossing signs that ensure safety
            and compliance with traffic regulations. Made from durable,
            high-quality materials, our signs are designed to withstand harsh
            outdoor conditions while providing clear, visible warnings at
            railroad crossings. Fully customizable to meet local regulations,
            our railroad crossing signs help keep drivers and pedestrians
            informed and safe.
          </p>
          <Link
            href="/portfolio"
            className="text-sm py-2 w-28 border border-[#003366] relative px-4 bg-transparent text-gray-900 group transition-all"
          >
            Explore Our Services
            <span className="absolute inset-0 text-center py-2 text-white bg-blue-950 scale-x-0 group-hover:scale-x-100 transition-all duration-300">
              Explore Our Services
            </span>
          </Link>
        </div>
        <div className="col-span-1 md:h-65 h-full border p-6 shadow-2xl">
          <div className="w-full">
            <h1 className="text-xl font-semibold ">
              Informational (Guide) Signs
            </h1>
          </div>

          <p className="my-2">
            At PMH, we create custom informational (guide) signs that provide
            clear directions and essential information for any space. Whether
            for wayfinding, instructions, or public information, our durable
            signs are fully customizable to fit your needs. Designed for clarity
            and visibility, our guide signs help improve navigation and
            communication in buildings, events, and public areas.
          </p>
          <Link
            href="/portfolio"
            className="text-sm py-2 w-28 border border-[#003366] relative px-4 bg-transparent text-gray-900 group transition-all"
          >
            Explore Our Services
            <span className="absolute inset-0 text-center py-2 text-white bg-blue-950 scale-x-0 group-hover:scale-x-100 transition-all duration-300">
              Explore Our Services
            </span>
          </Link>
        </div>
        <div className="col-span-1 md:h-65 h-full border p-6 shadow-2xl">
          <div className="w-full">
            <h1 className="text-xl font-semibold ">Warning Signs</h1>
          </div>

          <p className="my-2">
            At PMH, we offer custom warning signs designed to enhance safety and
            alert people to potential hazards. Our high-quality, durable signs
            are fully customizable for a variety of applications, including
            workplaces, construction sites, and public spaces. Made to withstand
            harsh conditions, our warning signs provide clear, effective
            messages to ensure safety and compliance.
          </p>
          <Link
            href="/portfolio"
            className="text-sm py-2 w-28 border border-[#003366] relative px-4 bg-transparent text-gray-900 group transition-all"
          >
            Explore Our Services
            <span className="absolute inset-0 text-center py-2 text-white bg-blue-950 scale-x-0 group-hover:scale-x-100 transition-all duration-300">
              Explore Our Services
            </span>
          </Link>
        </div>
        <div className="col-span-1 md:h-65 h-full border p-6 shadow-2xl">
          <div className="w-full">
            <h1 className="text-xl font-semibold "> Regulatory Signs</h1>
          </div>

          <p className="my-2">
            We provide custom regulatory signs that help ensure safety and
            compliance with local regulations. Whether for parking, traffic
            control, or workplace safety, our durable, high-quality signs are
            fully customizable to meet your specific needs. Designed to
            withstand the elements, our regulatory signs offer clear,
            professional messaging to keep your space or business in line with
            necessary guidelines.
          </p>
          <Link
            href="/portfolio"
            className="text-sm py-2 w-28 border border-[#003366] relative px-4 bg-transparent text-gray-900 group transition-all"
          >
            Explore Our Services
            <span className="absolute inset-0 text-center py-2 text-white bg-blue-950 scale-x-0 group-hover:scale-x-100 transition-all duration-300">
              Explore Our Services
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
        href=""
        target="_blank"
        // rel="noopener noreferrer"
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

export default ImageSliderRoadSigns;
