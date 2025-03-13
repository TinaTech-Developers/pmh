"use client";
import Link from "next/link";
import React, { useState } from "react";
import ImageSliderBanner from "./ImageSliderBanner";
import ImageSliderLaserCutting from "./LaserCutting";
import ImageSliderVehicleBranding from "./ImageSliderVehicleBranding";
import ImageSliderRoadSigns from "./ImageSliderRoadSigns";

function MiniHeader() {
  const [toggle, setToggle] = useState(1);

  // TypeScript: Define id as a number and e as React.MouseEvent
  function updateToggle(
    id: number,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    e.preventDefault();
    setToggle(id);
  }

  return (
    <div className="pb-10 text-blue-950 bg-white">
      <h1 className="px-4 py-10 text-2xl md:text-4xl font-bold">Explore us</h1>
      <div className="grid md:flex items-start gap-6 mt-2 cursor-pointer list-none px-4">
        <Link
          onClick={(e) => updateToggle(1, e)}
          href={""}
          className="text- hover:bg-blue-700 focus:bg-blue-700 mx-1 text-white border border-blue-600 bg-blue-950 px-4 py-2 rounded-lg "
        >
          Fabric Printing
        </Link>
        <Link
          onClick={(e) => updateToggle(2, e)}
          href={""}
          className="text- hover:bg-blue-500 focus:bg-blue-500 mx-1 text-white border border-blue-600 bg-blue-950 px-4 py-2 rounded-lg"
        >
          Laser Cutting
        </Link>
        <Link
          onClick={(e) => updateToggle(3, e)}
          href={""}
          className="hover:text-black border border-blue-600 hover:bg-blue-200 focus:bg-blue-200 mx-1 text-white bg-blue-950 px-4 py-2 rounded-lg"
        >
          Vehicle Branding
        </Link>
        <Link
          onClick={(e) => updateToggle(4, e)}
          href={""}
          className=" hover:text-black border border-blue-600 hover:bg-blue-100 focus:bg-blue-100 mx-1 text-white bg-blue-950 px-4 py-2 rounded-lg"
        >
          Road Signs
        </Link>
      </div>
      <div className="p-6 mx-0">
        <div className={toggle == 1 ? "block" : "hidden"}>
          <h1 className="text-xl font-semibold mb-10">Fabric Printing</h1>
          <ImageSliderBanner />
        </div>
        <div className={toggle == 2 ? "block" : "hidden"}>
          <h1 className="text-xl font-semibold mb-10"> Laser Cutting</h1>

          <ImageSliderLaserCutting />
        </div>
        <div className={toggle == 3 ? "block" : "hidden"}>
          <h1 className="text-xl font-semibold mb-10">Vehicle Branding</h1>
          <ImageSliderVehicleBranding />
        </div>
        <div className={toggle == 4 ? "block" : "hidden"}>
          {" "}
          <h1 className="text-xl font-semibold mb-10"> Road Signs</h1>
          <ImageSliderRoadSigns />
        </div>
      </div>
    </div>
  );
}

export default MiniHeader;
