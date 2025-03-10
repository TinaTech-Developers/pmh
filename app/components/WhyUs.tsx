"use client";
import React from "react";
import { GiTrophyCup } from "react-icons/gi";
import { MdBuild } from "react-icons/md";
import { GiDiamonds } from "react-icons/gi";
import { GiRollingDices } from "react-icons/gi";

import WhyUsCard from "./WhyUsCard";
import { motion } from "framer-motion";

function WhyUs() {
  return (
    <div className=" flex flex-col items-center justify-center w-full px-10 bg-white">
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
        <div className="flex items-center justify-between gap-1 mt-2  mb-10 inline-bloc">
          <span className="h-1 w-1 bg-blue-500 rounded-full"></span>
          <span className="h-1 w-2 bg-blue-500 rounded-full"></span>
          <span className="h-1 w-4 bg-blue-500 rounded-full"></span>
          <span className="h-1 w-14 bg-blue-500 rounded-full"></span>
          <span className="h-1 w-24 bg-blue-500 rounded-full"></span>
        </div>
      </motion.div>
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
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 "
      >
        <WhyUsCard
          icon={
            <MdBuild className="p-4  text-white hover:text-white" size={94} />
          }
          title={"Tailored Solutions"}
          desc={
            " Every sign is custom-designed to match your brand’s identity and business objectives."
          }
        />
        <WhyUsCard
          icon={
            <GiDiamonds
              className="p-4  text-white hover:text-white"
              size={94}
            />
          }
          title="Premium Quality"
          desc="We use only the highest quality materials to ensure your signs are both durable and visually striking."
        />
        <WhyUsCard
          icon={
            <GiRollingDices
              className="p-4  text-white hover:text-white"
              size={94}
            />
          }
          title="Seamless Process"
          desc="From initial consultation to final installation, our team ensures a smooth and efficient experience."
        />
        <WhyUsCard
          icon={
            <GiTrophyCup
              className="p-4  text-white hover:text-white"
              size={94}
            />
          }
          title="Proven Results"
          desc="Our signage helps businesses enhance visibility, attract customers, and create memorable brand experiences."
        />
      </motion.div>
    </div>
  );
}

export default WhyUs;
