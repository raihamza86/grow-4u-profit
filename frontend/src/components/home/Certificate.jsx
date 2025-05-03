import React from "react";
import { GoDot } from "react-icons/go";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoPlay } from "react-icons/io5";

const Certificate = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-12 lg:px-16 bg-white">
      <h2 className="text-center text-xl sm:text-2xl mb-6">
        We are 😄
        <span className="ml-2 px-2 py-1 bg-pink-500 text-white rounded-sm font-semibold">
          Grow 4U Profit
        </span>
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12">
        {/* Certificate Image */}
        <div className="w-full lg:w-1/2 max-w-lg">
          <img
            className="w-full h-auto object-contain"
            src="/Home/certificate.png"
            alt="Certificate"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Our Commitment to Client Satisfaction
          </h1>
          <p className="text-md sm:text-lg text-gray-600 font-medium">
            At Grow 4U Profit, our commitment to client satisfaction is at the core of everything we do. We understand clients' success.
          </p>

          {/* Bullet Points */}
          <ul className="flex flex-col gap-2 text-md sm:text-lg">
            <li className="flex items-center gap-2">
              <GoDot className="text-blue-500" />
              Grow your business the right way.
            </li>
            <li className="flex items-center gap-2">
              <GoDot className="text-blue-500" />
              Let business growth help your business grow.
            </li>
            <li className="flex items-center gap-2">
              <GoDot className="text-blue-500" />
              Helping you to get better.
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="text-lg w-full sm:w-auto px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold flex items-center justify-center gap-2">
              EXPLORE PLANS <MdOutlineArrowOutward />
            </button>
            <button className="flex items-center gap-2 justify-center text-blue-600 hover:underline">
              <span className="p-3 border rounded-full hover:bg-blue-100 transition">
                <IoPlay className="text-lg" />
              </span>
              How We Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
