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
      {/* Top Navbar (Fixed on large screens, Visible on larger screens) */}
      <nav className="bg-white text-blue-950 p-4 lg:fixed top-0 left-0 w-full h-20 z-50 shadow-md hidden lg:flex justify-between items-center">
        <div className="flex justify-between items-center w-[100%]">
          <Image
            src="/logo.png"
            alt="PMH Logo"
            width={200}
            height={100}
            className="w-20 h-16"
          />
          <ul className="flex space-x-6">
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
            src="/logo.png"
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
