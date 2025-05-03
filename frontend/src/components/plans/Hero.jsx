import React from "react";
import moneyBagImage from "/logo2.png"; // Update path as needed

const HeroSection = () => {
  return (
    <>
      <style>
        {`
          .hero-gradient {
            background: linear-gradient(to bottom, #ffcc00, #ff5e3a);
          }
        `}
      </style>

      <div className="hero-gradient flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 text-black">
        <div className="text-left space-y-4 max-w-md">
          <h1 className="text-3xl font-bold">Membership Plan</h1>
          <p className="text-lg md:text-xl">Join with us.</p>
        </div>
        <div className="mt-6 md:mt-0">
          <img
            src={moneyBagImage}
            alt="Membership Icon"
            className="w-40 md:w-56 h-auto mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
