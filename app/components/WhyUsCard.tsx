import React from "react";

interface WhyUsCardProps {
  icon: any;
  title: string;
  desc: string;
}

function WhyUsCard({ icon, title, desc }: WhyUsCardProps) {
  return (
    <div className="col-span-1 w-[95%] mx-auto">
      <div className="flex items-center justify-between w-full h-28 border bg-gray-400 hover:bg-[#003366] hover:text-white">
        <div className="w-28 h-[110px] bg-blue-950">{icon}</div>
        <div className="flex flex-col pl-2 text-[#003366] hover:text-white gap-2">
          <h1 className="font-semibold">{title}</h1>
          <p className="text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default WhyUsCard;
