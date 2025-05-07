import React, { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { PiCalendarStarFill } from "react-icons/pi";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full min-h-screen pb-20">
      <div className="w-[95%] mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 p-4">
        {/* Left Section */}
        <div className="flex flex-col gap-10 bg-blue-100 rounded-md px-6 py-10 lg:py-20 w-full lg:w-[60%]">
          {/* Title */}
          <h2 className="text-xl font-medium">
            <span className="block lg:inline">👋MP</span>
            <span className="ml-2 text-sm p-1 bg-[#F44380] text-white font-semibold rounded-sm">
              Signup Bonus 20 Rupees
            </span>
          </h2>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl max-w-xl font-bold">
            Grow your Business With Grow 4U Profit
          </h1>

          {/* Description */}
          <p className="text-lg max-w-xl text-gray-600">
            In today's competitive business world, the demand for efficient and cost-effective profitable companies is increasing.
          </p>

          {/* CTA Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Button with animated text switch */}
            <button
              className="text-lg lg:w-60 w-full px-8 py-4 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold flex items-center justify-center relative overflow-hidden h-14"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative flex flex-col justify-center  items-center transition-transform duration-300 ease-in-out">
                <span
                  className={`absolute top-0  transition-all duration-300 ${
                    isHovered ? "-translate-y-10 opacity-0" : "translate-y-0 opacity-100"
                  }`}
                >
                  LOGIN
                </span>
                <span
                  className={`absolute transition-all duration-300 ${
                    isHovered ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  LOGIN
                </span>
              </div>
                  <span>             
                     <MdOutlineArrowOutward className="ml-10" /></span>
            </button>

            <button className="text-lg lg:w-60 w-full px-8 py-4 gap-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold flex items-center justify-center">
              EXPLORE PLANS <MdOutlineArrowOutward />
            </button>
            <button className="text-lg lg:w-60 w-full px-8 py-2 gap-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold flex items-center justify-center">
              CONTACT US <MdOutlineArrowOutward />
            </button>

            {/* Rating Section */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3 text-2xl">
                <span className="flex text-3xl text-green-500">
                  <PiCalendarStarFill />
                  <PiCalendarStarFill />
                  <PiCalendarStarFill />
                  <PiCalendarStarFill />
                  <PiCalendarStarFill />
                </span>
                <span className="text-blue-600 text-4xl font-semibold">4.8</span>
              </div>
              <p className="text-xl">
                From <span className="font-semibold text-black">200+</span> reviews
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[40%] flex flex-col">
          <div className="w-full">
            <img src="/Home/hero1.webp" alt="Homehero" className="w-full h-auto rounded-md" />
          </div>

          <div className="flex flex-col">
            <div className="text-lg font-semibold mb-4 text-gray-600">
              <h1 className="text-3xl text-black">150+</h1>
              <p>Worldwide Countries have trusted clients</p>
            </div>

            {/* Avatars */}
            <div className="flex relative mb-1 items-center h-10">
              <div className="w-10 h-10 absolute left-0 z-10">
                <img
                  src="/Home/heroavt1.webp"
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="w-10 h-10 absolute left-7 z-20">
                <img
                  src="/Home/heroavt2.webp"
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="w-10 h-10 absolute left-[56px] z-30">
                <img
                  src="/Home/heroavt3.webp"
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute left-[92px] px-2 py-2 bg-blue-800 text-white font-semibold rounded-full z-40 text-sm">
                5k+
              </div>
            </div>

            <div className="max-w-md bg-blue-600 py-3 rounded-md text-white px-2">
              Get 88% of the best service and growth business
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
