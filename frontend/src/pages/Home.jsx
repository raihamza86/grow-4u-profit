import React from "react";
import Hero from "../components/home/Hero";
import Brand from "../components/home/Brand";
import Certificate from "../components/home/Certificate";
import Expert from '../components/home/Expert';
import BusinessPlan from "../components/home/BusinessPlan";
import Experience from "../components/home/Experience";

const Home = () => {
  return (
    <div>
      <Hero />
      <Brand />
      <Certificate />
      <Expert />
      <BusinessPlan/>
      <Experience/>
    </div>
  );
};
export default Home;
