import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ServiceCardProps {
  title: string;
  image: string;
  desc: string;
}

function ServiceCard({ title, image, desc }: ServiceCardProps) {
  return (
    <div className="w-80 md:w-96 h-[500px] border bg-[#003366] shadow-2xl">
      <Image
        className="relative w-full h-56 object-cover "
        src={image}
        alt=""
        height={200}
        width={400}
      />
      <p className="absolute p-2 top-0 bg-blue-400 shadow-2xl shadow-blue-950">
        {title}
      </p>

      <p className="p-4 text-sm">{desc}</p>
      <Link className="w-full h-10 border px-4 py-2 mx-4" href={"/"}>
        Read More
      </Link>
    </div>
  );
}

export default ServiceCard;
