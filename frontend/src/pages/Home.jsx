import React from "react";
import Hero from "../components/home/Hero";
import Brand from "../components/home/Brand";
import Certificate from "../components/home/Certificate";
import Expert from "../components/home/Expert";
import Offers from "../components/Offers";

const Home = () => {
  return (
    <div>
      <Hero />
      <Brand />
      <Certificate />
      <Expert />
      <Offers />
    </div>
  );
};

export default Home;
