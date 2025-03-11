"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* <div className="w-full h-8 p-4 lg:fixed top-0 left-0 bg-white text-red-700">
        hi
      </div> */}
      <nav className="bg-white text-blue-950 p-4 lg:fixed top-0 left-0 w-full h-20 z-50 shadow-md hidden lg:flex justify-between items-center">
        <div className="flex justify-between items-center w-[100%]">
          <Link href={"/"}>
            <Image
              src="/pmh logo.png"
              alt="PMH Logo"
              width={200}
              height={100}
              className="w-20 h-16"
            />
          </Link>
          <ul className="flex items-center space-x-6">
            <li className="group">
              <Link href="/" className="text-blue-950">
                Home
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-900"></span>
              </Link>
            </li>
            <li className="group">
              <Link href="/about-us" className="text-blue-950">
                About Us
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-900"></span>
              </Link>
            </li>
            <li className="group">
              <Link href="/services" className="text-blue-950">
                Services
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-900"></span>
              </Link>
            </li>
            <li className="group">
              <Link href="/portfolio" className="text-blue-950">
                Portfolio
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-900"></span>
              </Link>
            </li>
            <li className="group">
              <Link href="/contact-us" className="text-blue-950">
                Contact
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-900"></span>
              </Link>
            </li>
            {/* <div className="border  border-blue-950 w-full text-center "> */}
            <Link
              href={"/contact-us"}
              type="submit"
              className="text-sm py-2 w-28 border border-[#003366] relative px-4 bg-transparent text-gray-900 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-950 before:transition-all before:duration-300 before:content-[''] hover:text-white hover:before:scale-x-100"
            >
              Get Qoute
            </Link>
            {/* </div> */}
          </ul>
        </div>
      </nav>

      {/* Sidebar (Visible on small screens) */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-gray-800 opacity-80 text-white p-6 transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } z-40`}
      >
        <div className="flex justify-between items-center">
          <Image
            src="/pmh logo.png"
            alt="PMH Logo"
            width={200}
            height={100}
            className="w-20 h-16"
          />
          <button onClick={toggleSidebar} className="text-3xl">
            &times;
          </button>
        </div>
        <ul className="mt-8 space-y-6">
          <li className="group">
            <Link href="/" className="text-white">
              Home
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
            </Link>
          </li>
          <li className="group">
            <Link href="/about-us" className="text-white">
              About Us
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
            </Link>
          </li>
          <li className="group">
            <Link href="/services" className="text-white">
              Services
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
            </Link>
          </li>
          <li className="group">
            <Link href="/portfolio" className="text-white">
              Portfolio
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
            </Link>
          </li>
          <li className="group">
            <Link href="/contact-us" className="text-white">
              Contact
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu (Visible on small screens) */}
      <div className="lg:hidden p-4 absolute top-4 right-4 z-50">
        <button onClick={toggleSidebar} className="text-3xl text-white">
          &#9776;
        </button>
      </div>
    </>
  );
};

export default Navbar;
