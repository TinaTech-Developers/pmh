"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientSlider from "./ClientSlider";

function Clients() {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="flex flex-col w-full bg-white text-gray-600 items-center justify-center p-10">
      <div className="flex flex-col items-center justify-center bg-white">
        <div className="col-span-2 flex flex-col items-center pt-10 ">
          <h2 className=" text-blue-500 font-semibold ">| Collaborators</h2>
          <h1 className="text-2xl font-semibold text-[#003366] mt-4">
            Our Partners
          </h1>
          <div className="flex items-center justify-between gap-1 mt-2  mb-10 inline-bloc">
            <span className="h-1 w-1 bg-blue-500 rounded-full"></span>
            <span className="h-1 w-2 bg-blue-500 rounded-full"></span>
            <span className="h-1 w-4 bg-blue-500 rounded-full"></span>
            <span className="h-1 w-6 bg-blue-500 rounded-full"></span>
            <span className="h-1 w-20 bg-blue-500 rounded-full"></span>
          </div>
        </div>
      </div>
      <p className="w-full md:w-[60%] text-center">
        Together, we are designing innovative signage solutions that not only
        enhance businesses but also contribute to a brighter future and make a
        positive impact on communities.
      </p>
      {/* <ClientSlider /> */}
    </div>
  );
}

export default Clients;
