"use client";
import React from "react";
import Hero from "./components/Hero";
import EmailnAddress from "./components/EmailnAddress";
import { motion } from "framer-motion";
import Promotion from "../components/Promotion";

function page() {
  return (
    <>
      <Hero />
      <div className="w-full bg-white">
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
          className="flex flex-col items-center justify-center bg-white px-10"
        >
          <div className="col-span-2 flex flex-col items-center pt-10 ">
            <h2 className=" text-blue-500 font-semibold ">| Reachout</h2>
            <h1 className="text-2xl font-semibold text-[#003366] mt-4">
              Find and Contact!
            </h1>
            <div className="flex items-center justify-between gap-1 mt-2  mb-10 inline-bloc">
              <span className="h-1 w-1 bg-blue-500 rounded-full"></span>
              <span className="h-1 w-4 bg-blue-500 rounded-full"></span>
              <span className="h-1 w-8 bg-blue-500 rounded-full"></span>
              <span className="h-1 w-14 bg-blue-500 rounded-full"></span>
              <span className="h-1 w-20 bg-blue-500 rounded-full"></span>
            </div>
          </div>
          <p className="text-gray-800 md:w-[80%] w-full">
            Explore our location on the map below to see where we are. If you
            have any questions or need assistance, feel free to fill out the
            contact form, and we'll get back to you as soon as possible!
          </p>
        </motion.div>
      </div>
      <EmailnAddress />
      <Promotion />
    </>
  );
}

export default page;
