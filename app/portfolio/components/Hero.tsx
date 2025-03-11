import Image from "next/image";
import React from "react";

interface PageHeroProps {
  title: string;
}
function Hero({ title }: PageHeroProps) {
  return (
    <div className="w-full h-[500px] md:h-[500px]">
      <Image
        src={"/bana.jpg"}
        alt=""
        width={1024}
        height={800}
        className="relative w-full  h-[500px] md:h-[500px] object-cover"
      />
      <p className="absolute bottom-44 p-10 text-white font-semibold text-xl">
        Home |{" "}
        <span className="font-normal text-gray-200 text-lg">{title}</span>
        <hr
          className="mt-3"
          style={{
            background: "linear-gradient(to right, lightblue, darkblue)",
            height: "2px",
            border: "none",
          }}
        />
      </p>
    </div>
  );
}

export default Hero;
