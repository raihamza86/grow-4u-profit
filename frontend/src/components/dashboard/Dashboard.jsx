import React, { useState } from "react";
import ProfileSection from "./ProfileSection";
import ProfitSection from "./ProfitSection";
import PriceSection from "./PriceSection";
import { IoIosMenu } from "react-icons/io";
import DashboardNavbar from "../DashboardNavbar";
import BackButton from "../BackButton";

const Dashboard = () => {
  const [rightDashNav, setrightDashNav] = useState(false);
  const showDashNav = () => {
    setrightDashNav(!rightDashNav);
  };

  const openRightNav = () => {
    setrightDashNav(true); // ✅ always set to true
  };

  return (
    <div className="bg-[radial-gradient(circle,_#FFC107,_#F44336)] flex min-h-screen">
      {rightDashNav && <DashboardNavbar />}

      <div className="w-full min-h-screen flex flex-col items-center px-4">
        <div className="w-full">
          <span
            className="float-right py-3 px-3 text-xl cursor-pointer border border-white rounded-full m-2 "
            onClick={showDashNav}
          >
            <IoIosMenu />
          </span>
        </div>
        <ProfileSection />
        <ProfitSection />
        <PriceSection />
        <BackButton showDashNav={openRightNav}  />
      </div>
    </div>
  );
};

export default Dashboard;
