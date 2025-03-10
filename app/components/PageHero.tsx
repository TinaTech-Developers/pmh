import Image from "next/image";
import React from "react";

function PageHero() {
  return (
    <div className="w-full h-full md:h-[600px]">
      <Image
        src={"/gazebo.jpg"}
        alt=""
        width={1024}
        height={800}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default PageHero;
