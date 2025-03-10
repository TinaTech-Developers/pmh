"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
function Hero() {
  return (
    <div className="w-full h-full md:h-[600px]">
      <Image
        src={"/contact.png"}
        alt=""
        width={1024}
        height={800}
        className="relative w-full h-full object-cover"
      />
      <div className="absolute text-white bottom-20 p-4 md:px-10">
        <h1 className="text-2xl font-bold md:text-5xl">Get in Touch with Us</h1>
        <p className="mt-1"></p>
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
  );
}

export default Hero;
