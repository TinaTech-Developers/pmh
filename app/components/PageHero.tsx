import Image from "next/image";
import React from "react";

interface PageHeroProps {
  title: string;
}
function PageHero({ title }: PageHeroProps) {
  return (
    <div className="w-full h-[500px] md:h-[530px]">
      <Image
        src={"/gazebo.jpg"}
        alt=""
        width={1024}
        height={800}
        className="relative w-full  h-[500px] md:h-[530px] object-cover"
      />
      <p className="absolute lg:bottom-64 bottom-72 p-10 text-white font-semibold text-xl">
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

export default PageHero;
