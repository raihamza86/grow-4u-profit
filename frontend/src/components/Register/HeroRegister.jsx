import React from 'react';

const HeroRegister = () => {
  return (
    <div className="relative h-[60vh] md:h-[90vh] max-h-[600px] flex justify-center items-center z-10">
      <img
        src="/register/login.png"
        alt="Visa Consultancy & Travel Solutions"
        className="w-full h-full "
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center px-4 text-center">
        <div className="text-white max-w-4xl space-y-4">
          <h1 className="text-5xl md:text-8xl font-bold leading-tight uppercase">
            Register
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroRegister;
