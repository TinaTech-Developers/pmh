"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { UserIcon } from "@heroicons/react/16/solid";

interface Testimonial {
  name: string;
  title: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Tinashe Phiri",
    title: "CEO, TinaSoft Nexus.",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/470666615_1794087254753300_6398371680762667658_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=O4vDHgAJ3ewQ7kNvgHIHPci&_nc_oc=AdgAiglRH4r9mjxMscQZnRFTXzSfA9DcSAOLRJ2RI-GXA4aKt6_ebeQgxQBvuFpsySZ1ia0eJmT0nhS2Dvwgr2Ux&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=Aijrniiphjee4xXSMkVsmF-&oh=00_AYHfjL4fKnDtjCo__dUytyCZ66qkj1Dj4rzWaMb8d8HUKQ&oe=67D72DE4",
    quote:
      "Pressletter Media House helped us transform our brand's visibility with their exceptional signage solutions. Highly recommend them!",
  },
  {
    name: "Jane Smith",
    title: "Marketing Director, ABC Ltd.",
    image: "", // Test case with image
    quote:
      "The custom vehicle wraps they created for us were beyond our expectations. Our fleet looks fantastic and gets noticed everywhere!",
  },
  {
    name: "Michael Brown",
    title: "Founder, XYZ Studios",
    image: "", // Test case with no image, should use icon
    quote:
      "Their attention to detail and dedication to quality is second to none. Our storefront sign has attracted so many new customers!",
  },
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 1.8 }}
          className="col-span-2 flex flex-col items-center py-10 "
        >
          <h2 className=" text-blue-500 font-semibold">| Trustworthiness</h2>
          <h1 className="text-2xl font-semibold text-[#003366] mt-4">
            Why Choose Us?
          </h1>
          <div className="flex items-center justify-between gap-1 mt-2 mb-10 inline-bloc">
            <span className="h-1 w-1 bg-blue-500 rounded-full"></span>
            <span className="h-1 w-2 bg-blue-500 rounded-full"></span>
            <span className="h-1 w-4 bg-blue-500 rounded-full"></span>
            <span className="h-1 w-14 bg-blue-500 rounded-full"></span>
            <span className="h-1 w-24 bg-blue-500 rounded-full"></span>
          </div>
        </motion.div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex flex-col items-center space-y-6">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-950"
                  />
                ) : (
                  // If there's no image, render the icon
                  <UserIcon className="w-32 h-32 rounded-full object-cover border-4 border-blue-950" />
                )}
                <p className="text-lg text-gray-800 italic">
                  "{testimonial.quote}"
                </p>
                <div className="text-center">
                  <p className="font-semibold text-blue-950">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
