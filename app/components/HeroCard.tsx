import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

interface HeroCardProps {
  image: string;
  title: string;
  description: string;
}

export default function HeroCard({ image, title, description }: HeroCardProps) {
  return (
    <div className="w-full h-[500px] md:h-[700px] relative">
      <Image
        className="relative w-full h-[500px] md:h-[700px] object-cover" 
        src={image}
        height={600}
        width={800}
        alt="Hero Background"
        quality={100} 
        priority 
      />

      <div className=" hidden md:block absolute bottom-48 left-1/2 md:left-1/4 transform -translate-x-1/2  h-full w-64 md:w-96 md:h-60 bg-blue-950 shadow-2xl">
        <div className=" border-white border-2 h-full w-64 md:w-96 md:h-60">
          <h1 className="text-center text-2xl font-semibold p-2">{title}</h1>
          <div className="text-white  px-4">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: [`${description}`],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
