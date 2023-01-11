import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

import logo from "../assets/logo.png";
import lock from "../assets/lock.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full min-h-[50px] m-auto px-5 py-1 flex justify-between items-center z-10">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="hidden sm:flex justify-between items-center">
        <ul className="flex justify-between items-center space-x-6 p-4 text-sm text-accent font-medium">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Reviews</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>

        <div className="w-[130px] h-[39.82px] bg-primary flex justify-center items-center hover:bg-accent ease-in-out duration-300 md:py-2 md:text-lg md:px-2">
          <img
            src={lock}
            alt="lock icon"
            className="w-[10px] h-[14.35px] my-1"
          />
          <a href="/" className="pl-2 text-base font-normal text-white">
            Buy Now
          </a>
        </div>
      </div>

      {/* Hamburger Icon */}
      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer text-primary" />
      </div>

      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden sm:hidden ease-in duration-300 absolute text-accent left-0 top-0 h-screen w-full bg-black/90 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center text-2xl pt-12 space-y-8">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Reviews</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
