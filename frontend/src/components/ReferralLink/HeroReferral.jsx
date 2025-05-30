import React from 'react';

const HeroReferral = () => {
  return (
    <>
      <style>
        {`
          .hero-gradient {
            background: linear-gradient(to bottom, #ffcc00, #ff5e3a);
          }
        `}
      </style>

      <div className="hero-gradient flex items-center justify-center px-6 md:px-16 py-16 text-white">
        <div className="text-center">
          <h1 className="text-xl font-semibold">Referred Users
          </h1>
        </div>
      </div>
    </>
  );
};

export default HeroReferral;
