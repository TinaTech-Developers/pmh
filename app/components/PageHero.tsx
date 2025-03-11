import Image from "next/image";
import React from "react";

interface PageHeroProps {
  title: string;
}
function PageHero({ title }: PageHeroProps) {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Image
        src={"/gazebo.jpg"}
        alt=""
        width={1024}
        height={800}
        className="relative w-full  h-[400px] md:h-[500px] object-cover"
      />
      <p className="absolute bottom-48 p-10 text-white font-semibold text-xl">
        Home |{" "}
        <span className="font-normal text-gray-300 text-lg">{title}</span>
      </p>
    </div>
  );
}

export default PageHero;
