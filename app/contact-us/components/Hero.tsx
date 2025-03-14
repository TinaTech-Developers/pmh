"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
function Hero() {
  return (
    <div className="w-full h-[500px] md:h-[530px]">
      <Image
        src={"/contact.png"}
        alt=""
        width={1024}
        height={800}
        className="relative w-full h-[500px] md:h-[530px]  object-cover"
      />
      <div className="absolute text-white  lg:bottom-64 bottom-72  p-4 md:px-10">
        <h1 className="text-2xl font-bold md:text-5xl">Get in Touch with Us</h1>
        <div className="mt-1 text-sm">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: [
                "We're here to help. Whether you have a question, feedback, or need assistance, feel free to contact",
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
