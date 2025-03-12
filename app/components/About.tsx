"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full h-full bg-[url('/white.avif')] bg-scroll bg-cover py-10">
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
        className="col-span-2 flex flex-col items-start py-10 px-10"
      >
        <h2 className=" text-blue-500 font-semibold">| overview</h2>
        <h1 className="text-2xl font-semibold text-[#003366] mt-4">
          Who Are We?
        </h1>
        <div className="flex items-center justify-between gap-1 mt-2  mb-10 inline-bloc">
          <span className="h-1 w-1 bg-blue-500 rounded-full"></span>
          <span className="h-1 w-1 bg-blue-500 rounded-full"></span>
          <span className="h-1 w-10 bg-blue-500 rounded-full"></span>
          <span className="h-1 w-20 bg-blue-500 rounded-full"></span>
        </div>
        <motion.h1
          // initial={{
          //   y: 100,

          //   opacity: 0,
          // }}
          // whileInView={{
          //   y: 0,

          //   opacity: 1,
          // }}
          // transition={{ duration: 1.8 }}
          className="text-gray-700 text-"
        >
          Welcome to Pressletter Media House, the leading provider of custom
          signage solutions. With over ten years of experience, we specialize in
          designing, fabricating, and installing premium signage using
          cutting-edge technologies like sublimation printing, laser cutting,
          DTF printing, Embroidery and CNC cutting. Our sublimation printing
          process ensures vibrant, durable, and full-color designs on various
          materials, while our laser cutting and CNC cutting services allow for
          intricate, precise, and customized designs.
        </motion.h1>
      </motion.div>
      <motion.div
        initial={{
          y: -100,

          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.8 }}
        className=" flex items-center justify-center md:mt-16 w-80 h-80  border px-10 bg-[#003366] rounded-full mx-auto"
      >
        <Image src={"/pmh logo.png"} alt="" height={300} width={300} />
      </motion.div>
    </div>
  );
}
