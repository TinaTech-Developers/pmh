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

function ImageSliderVehicleBranding() {
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
            image={"/IMG-20250311-WA0010.jpg"}
            link={"https//:www.rammining.co.zw"}
            company={" RAM "}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NetworkingCard
            image={"/IMG-20250311-WA0023.jpg"}
            link={"/portfolio"}
            company={""}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NetworkingCard
            image={"/IMG-20250311-WA0047.jpg"}
            link={"/portfolio"}
            company={""}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NetworkingCard
            image={"/IMG-20250311-WA0049.jpg"}
            link={"/portfolio"}
            company={"RAM"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NetworkingCard
            image={"/IMG-20250311-WA0059.jpg"}
            link={"/portfolio"}
            company={"ESOL ENGINEERING"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NetworkingCard
            image={"/IMG-20250311-WA0017.jpg"}
            link={"/portfolio"}
            company={""}
          />
        </SwiperSlide>
      </StyledSwiper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto mt-10">
        <div className="col-span-1 md:h-65 h-full border p-6 shadow-2xl">
          <div className="w-full">
            <h1 className="text-xl font-semibold ">Full Vehicle Wraps</h1>
          </div>
          <p className="my-2">
            At PMH, we offer custom full vehicle wraps that turn your vehicle
            into a moving advertisement. Our high-quality wraps are designed to
            fit any vehicle, providing vibrant, full-color graphics that capture
            attention on the road. Durable and weather-resistant, our vehicle
            wraps are perfect for businesses looking to enhance brand visibility
            while protecting their vehicle’s paint. Let us help you create a
            bold and professional look for your fleet or company vehicle.
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
        <div className="col-span-1 md:h-65 h-full border p-6 shadow-2xl">
          <div className="w-full">
            <h1 className="text-xl font-semibold ">Partial Vehicle Wraps</h1>
          </div>

          <p className="my-2">
            At PMH, we provide custom partial vehicle wraps that deliver
            impactful branding without covering the entire vehicle. These wraps
            allow you to showcase your logo, message, or design on key areas,
            such as doors, windows, or panels, offering a cost-effective way to
            promote your business. Made from high-quality, durable materials,
            our partial wraps are designed to last and help your vehicle stand
            out on the road.
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
        <div className="col-span-1 md:h-65 h-full border p-6 shadow-2xl">
          <div className="w-full">
            <h1 className="text-xl font-semibold ">Magnetic Signs</h1>
          </div>

          <p className="my-2">
            At PMH, we offer custom magnetic signs that provide a versatile and
            portable solution for business advertising. Easily applied and
            removed, these signs are perfect for vehicles, storefronts, or
            temporary promotions. Fully customizable with your logo, message,
            and graphics, our magnetic signs are made from durable materials,
            ensuring long-lasting visibility and impact wherever you need them.
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
        <div className="col-span-1 md:h-65 h-full border p-6 shadow-2xl">
          <div className="w-full">
            <h1 className="text-xl font-semibold ">Truck Side Branding</h1>
          </div>

          <p className="my-2">
            At PMH, we offer custom truck side branding that transforms your
            vehicle into a powerful mobile advertisement. Our high-quality
            graphics are designed to fit seamlessly on the sides of trucks,
            ensuring maximum visibility and brand exposure while on the road.
            Durable and weather-resistant, our truck side branding solutions are
            perfect for businesses looking to promote their brand wherever their
            vehicles go.
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
        <div className="col-span-1 md:h-65 h-full border p-6 shadow-2xl">
          <div className="w-full">
            <h1 className="text-xl font-semibold ">
              Bus and Transit Advertising
            </h1>
          </div>

          <p className="my-2">
            At PMH, we specialize in bus and transit advertising that puts your
            brand in front of a large, diverse audience. Whether it's bus wraps,
            transit shelter ads, or interior posters, our custom solutions
            ensure your message stands out on public transportation. With
            high-visibility placements and durable materials, our advertising
            options provide effective exposure and reach, helping your business
            get noticed wherever people travel.
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

export default ImageSliderVehicleBranding;
