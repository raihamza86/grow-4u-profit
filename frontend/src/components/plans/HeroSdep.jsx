import React from "react";
import atmCardimg from "/Home/atmCard.png"; // Update path as needed

const HeroSdep = () => {
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
        <div className="text-left space-y-1 max-w-md">
          <h1 className="text-3xl font-bold">Deposit Confirm</h1>
          <p className="text-sm md:text-sm">You can Deposit here</p>
          <p className="text-lg md:text-sm">for Purchasing a Plan.</p>
        </div>
        <div className="mt-6 md:mt-0">
          <img
            src={atmCardimg}
            alt="Membership Icon"
            className="w-40 md:w-36 h-auto mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSdep;








