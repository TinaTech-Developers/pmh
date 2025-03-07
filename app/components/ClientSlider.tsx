"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function ClientSlider() {
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
    <div className=" hidden md:block  px-10  bg-white text-black ">
      <Slider {...settings}>
        <div className="bg-no-repeat flex justify-center items-center h-32 w-auto">
          <Image
            src="https://www.justgo.co.za/upload/carrier_logos/ExtraCityLuxury%20logo.jpg"
            alt=""
            height={200}
            width={300}
            className="w-36 h-16 object-cover mx-auto"
          />
        </div>
        <div className="bg-no-repeat flex justify-center items-center h-32 w-auto">
          <Image
            src="https://www.zse.co.zw/wp-content/uploads/2019/03/Masimba_holdings-46.png"
            alt=""
            height={200}
            width={300}
            className="w-36 h-16 object-cover mx-auto"
          />
        </div>
        <div className="bg-no-repeat flex justify-center items-center h-32 w-auto">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNLulOCOt6DOaopMoq25U6kkPj_vfc8z_icw&s"
            alt=""
            height={200}
            width={300}
            className="w-36 h-16 object-cover mx-auto"
          />
        </div>
        <div className="bg-no-repeat flex justify-center items-center h-32 w-auto">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Logo_The_BOC_Group.svg/2560px-Logo_The_BOC_Group.svg.png"
            alt=""
            height={200}
            width={300}
            className="w-36 h-16 object-contain mx-auto"
          />
        </div>
        <div className="bg-no-repeat flex justify-center items-center h-32 w-auto">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yaairds49jTVQpjNE-bhx5CjNQbOW0EuFA&s"
            alt=""
            height={200}
            width={300}
            className="w-36 h-16 object-contain mx-auto"
          />
        </div>
      </Slider>
    </div>
  );
}

export default ClientSlider;
