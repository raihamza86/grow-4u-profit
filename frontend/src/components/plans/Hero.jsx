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

      <div className="hero-gradient flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-12 text-black">
        <div className="text-left space-y-3">
          <h1 className="text-3xl md:text-5xl font-bold">Membership Plan</h1>
          <p className="text-base md:text-lg">Join with us.</p>
        </div>
        <div className="mt-8 md:mt-0">
          <img
            src={moneyBagImage}
            alt="Membership Icon"
            className=""
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
