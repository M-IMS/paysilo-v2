import React from "react";
import group from "../assets/Group.png";

const Hero = () => {
  return (
    <div className="max-w-[1440px] flex justify-between m-auto my-5 p-5 items-center">
      <div className="flex flex-col gap-2 min-w-fit">
        <h1 className="text-4xl text-darktext font-bold ">
          Powering 30,000+ <br />
          Businesses like you <br /> in Australia
        </h1>
        <p className="text-sm text-lighttext font-normal">
          Get more than just a payment gateway. No setup fee.
          <br /> No maintenance fee. Use it the way you want!
        </p>
        <div>
          <input
            className="h-12 bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-3/5 border border-transparent focus:outline-none focus:border-gray-500"
            type="email"
            placeholder="Email Address Here"
          />
          <button className="w-[150px] h-12 bg-accent rounded-l-none hover:bg-primary rounded text-base font-medium leading-none text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primery">
            Sign Up Now
          </button>
        </div>
      </div>
      <div className="hidden sm:block w-auto">
        <img src={group} alt="" />
      </div>
    </div>
  );
};

export default Hero;
