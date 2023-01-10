import React from "react";

import logo from "../assets/logo.png";
import lock from "../assets/lock.png";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#" },
  { name: "Reviews", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Contact", href: "#" },
];

const NavBar = () => {
  return (
    <div className="flex justify-evenly mt-5">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 text-accent">
        {navigation.map((item) => (
          <a key={item.name} href={item.href} className="font-medium">
            {item.name}
          </a>
        ))}
      </div>
      <div className="hidden md:block ml-10">
        <div className="w-[130px] h-[39.82px] bg-primary flex justify-center hover:bg-accent md:py-2 md:text-lg md:px-2">
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
    </div>
  );
};

export default NavBar;
