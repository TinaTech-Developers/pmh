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

function ImageSliderBanner() {
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
            image={"/3.jpg"}
            link={"https:www.sanctuary.co.zw"}
            company={" Sanctuary"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NetworkingCard
            image={"/gazebo.jpg"}
            link={"/"}
            company={"Aviocean"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NetworkingCard
            image={"/IMG-20250311-WA0042.jpg"}
            link={"/"}
            company={"BMC"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NetworkingCard
            image={"/IMG-20250311-WA0054.jpg"}
            link={"/"}
            company={""}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NetworkingCard image={"/2.jpg"} link={""} company={""} />
        </SwiperSlide>
        <SwiperSlide>
          <NetworkingCard image={"/banaz.jpg"} link={""} company={""} />
        </SwiperSlide>
      </StyledSwiper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto mt-10">
        <div className="col-span-1 md:h-65 h-full border p-6 shadow-2xl">
          <div className="w-full">
            <h1 className="text-xl font-semibold ">Gazebo Tents</h1>
          </div>
          <p className="my-2">
            At PMH, we offer durable, customizable gazebo tents perfect for
            outdoor events, trade shows, and promotions. Our tents provide
            shelter and visibility while showcasing your brand with high-quality
            graphics. Easy to set up and built to last, they’re the ideal
            solution for any event or business.
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
            <h1 className="text-xl font-semibold ">Soccer Jerseys</h1>
          </div>

          <p className="my-2">
            At PMH, we create custom soccer jerseys that combine comfort, style,
            and durability. Whether for a team, league, or promotional event,
            our jerseys are fully customizable with your logo, colors, and
            designs. Made from high-quality materials, they offer a perfect fit
            and performance, ensuring your team looks and feels great on the
            field.
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
            <h1 className="text-xl font-semibold ">Teardrop Banners</h1>
          </div>

          <p className="my-2">
            At PMH, we offer custom teardrop banners that are perfect for
            outdoor events, promotions, and marketing. These eye-catching,
            flag-shaped banners are lightweight, durable, and easy to set up,
            making them ideal for attracting attention and showcasing your
            brand. With full customization options, you can design a teardrop
            banner that stands out and represents your business with style.
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
        href="/"
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

export default ImageSliderBanner;
