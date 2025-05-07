import React from 'react'
import BackButton from '../BackButton';

const ProfileHero = () => {
  return (
    <>
      <style>
        {`
          .hero-gradient {
            background: linear-gradient(to bottom, #ffcc00, #ff5e3a);
          }
        `}
      </style>

      <div className="hero-gradient flex flex-col items-center justify-center px-6 md:px-16 py-16 text-white">
      <span className="w-full"><BackButton/></span>
        
        <div className="text-center">
          <h1 className="text-xl font-semibold">
          Profile Setting
            </h1>
        </div>
      </div>
    </>
  )
}

export default ProfileHero;
