"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { navLinks } from "@/app/constant/Constant";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-[100] h-[10vh] transition-all duration-300 ${
        navBg
          ? "bg-gradient-to-r from-[rgba(0,0,0,0.3)] to-[rgba(54,54,54,0.02)]"
          : "bg-gradient-to-r from-[rgba(0,0,0,0.3)] to-[rgba(54,54,54,0.02)]"
      }`}
    >
      <div className="flex items-center justify-between w-[95%] sm:w-[80%] mx-auto h-full">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="md:w-10 md:h-10 w-7 h-7 rounded-full flex items-center justify-center">
            <Image src="/images/logo.png" alt="Logo" width={60} height={40} />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-14 text-white">
          {navLinks.map((navlink) => (
            <Link key={navlink.id} href={navlink.url}>
              <p className="font-medium hover:text-yellow-300">{navlink.label}</p>
            </Link>
          ))}
        </div>

        {/* Login and Burger Menu */}
        <div className="flex items-center space-x-4">
          {/* Login Button */}
          <div className="w-40 h-8 bg-white rounded-lg flex justify-center items-center cursor-pointer">
            <h3 className="text-black font-medium">Post Property</h3>
          </div>
          <div className="text-2xl cursor-pointer text-blue-500">
            <AiOutlineMenu />
          </div>
          <div className="text-2xl cursor-pointer text-blue-500">
            <FaUserCircle />
          </div>

          {/* Burger Menu for Mobile */}
          <HiBars3BottomRight
            onClick={openNav}
            className="sm:w-8 sm:h-8 w-6 h-6 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
