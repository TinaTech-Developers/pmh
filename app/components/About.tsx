import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full h-full bg-[url('/white.avif')] bg-scroll bg-cover py-10">
      <div className="col-span-2 flex flex-col items-start py-10 px-10">
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
        <h1 className="text-gray-700">
          Welcome to Pressletter Media House, the leading provider of custom
          signage solutions. With over 10 years of experience, we specialize in
          designing, fabricating, and installing premium signage tailored to
          meet the unique needs of your business. Our team combines industry
          expertise, innovative design, and top-quality materials to deliver
          impactful signage that enhances brand visibility, drives engagement,
          and creates lasting impressions. Whether you're looking for an
          attention-grabbing storefront sign, a comprehensive wayfinding system,
          or custom vehicle wraps, we have the expertise and resources to bring
          your vision to life.
        </h1>
      </div>
      <div className=" flex items-center justify-center md:mt-16 w-80 h-80  border px-10 bg-[#003366] rounded-full mx-auto">
        <Image src={"/des.jpeg"} alt="" height={300} width={300} />
      </div>
    </div>
  );
}
