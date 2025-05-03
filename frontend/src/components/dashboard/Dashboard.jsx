import React from "react";
import ProfileSection from "./ProfileSection";
import ProfitSection from "./ProfitSection";
import PriceSection from "./PriceSection";

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4">
      <ProfileSection />
      <ProfitSection />
      <PriceSection />
    </div>
  );
};

export default Dashboard;
