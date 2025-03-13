import Link from "next/link";
import React from "react";

function Button() {
  return (
    <div className="col-span-1 md:h-65 h-full border p-6 shadow-2xl">
      <Link
        href="/portfolio"
        className="text-sm py-2 w-28 border border-[#003366] relative px-4 bg-transparent text-gray-900 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-950 before:transition-all before:duration-300 before:content-[''] hover:text-white hover:before:scale-x-100"
      >
        Explore Our Laser Services
      </Link>
    </div>
  );
}

export default Button;
