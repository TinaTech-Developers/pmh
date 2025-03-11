"use client";
import React from "react";
import { FaBuilding } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

function ImpactStories() {
  return (
    <div className="flex flex-col bg-white  px-10 items-center justify-center">
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
        className="flex flex-col items-center justify-center bg-white"
      >
        <div className="col-span-2 flex flex-col items-center pt-10 ">
          <h2 className=" text-blue-500 font-semibold ">| Impressions</h2>
          <h1 className="text-2xl font-semibold text-[#003366] mt-4">
            Impact Stories
          </h1>
          <div className="flex items-center justify-between gap-1 mt-2  mb-10 inline-bloc">
            <span className="h-1 w-1 bg-blue-500 rounded-full"></span>
            <span className="h-1 w-2 bg-blue-500 rounded-full"></span>
            <span className="h-1 w-4 bg-blue-500 rounded-full"></span>
            <span className="h-1 w-10 bg-blue-500 rounded-full"></span>
            <span className="h-1 w-20 bg-blue-500 rounded-full"></span>
          </div>
        </div>
      </motion.div>

      <motion.p
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.8 }}
        className="text-gray-600 text-center md:w-[60%]"
      >
        At PMH, we provide impactful signage solutions that enhance businesses
        and communities. For instance, a local restaurant chain saw a 40%
        increase in foot traffic with our custom outdoor signage, while a large
        office complex improved navigation and workplace safety with our
        directional signage, reducing complaints and helping people find their
        way. Our solutions effectively transform brands and spaces.
      </motion.p>
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
        className="grid grid-cols-1 md:grid-cols-3 p-10 gap-5 mx-auto"
      >
        <div className=" col-span-1 flex flex-col w-80 h-80 bg-blue-300 border mx-auto py-6 p-4">
          <FaAward size={54} color="white" />
          <h1 className="text-8xl font-bold text-white">
            10<span className="text-lg text-blue-950"> Years+</span>
          </h1>
          <hr className="text-blue-950 w-[30%] " />
          <p className="text-[#003366] text-xl font-bold mt-4">
            of experience in <br />
            signage
          </p>
          <p className="text-sm text-gray-600">
            10 years of expert signage solutions, enhancing businesses and
            communities.
          </p>
        </div>
        <div className=" col-span-1 w-80 h-80 bg-blue-300 border mx-auto py-6 p-4">
          <FaUsers size={54} color="white" />
          <h1 className="text-8xl font-bold text-white">
            102<span className="text-lg text-blue-950"> Clients+</span>
          </h1>
          <hr className="text-blue-950 w-[30%] " />
          <p className="text-[#003366] text-xl font-bold mt-4">
            served: <br />
            signs that deliver results!
          </p>
          <p className="text-sm text-gray-600">
            creating cffective signs that drive business results for 102
            clients!
          </p>
        </div>
        <div className=" col-span-1 w-80 h-80 bg-blue-300 border mx-auto py-6 p-4">
          <FaBuilding size={54} color="white" />
          <h1 className="text-8xl font-bold text-white">
            2<span className="text-lg text-blue-950"> Branches</span>
          </h1>
          <hr className="text-blue-950 w-[30%] " />
          <p className="text-[#003366] text-xl font-bold mt-4">
            expanding our reach <br />
          </p>
          <p className="text-sm text-gray-600">
            {
              "with two branches, we’re expanding our reach to serve you better!"
            }
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default ImpactStories;
