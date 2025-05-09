import React, { useState, useEffect } from "react";
import ProfileSection from "./ProfileSection";
import ProfitSection from "./ProfitSection";
import PriceSection from "./PriceSection";
import { IoIosMenu } from "react-icons/io";
import DashboardSidebar from "../DashboardSidebar";

const Dashboard = () => {
  const [rightDashNav, setRightDashNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDashNav = () => {
    setRightDashNav(!rightDashNav);
  };


  // ✅ Scroll effect to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setScrolled(scrollPercent > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[radial-gradient(circle,_#FFC107,_#F44336)] min-h-screen relative pb-16">
      {/* Sidebar Navigation */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-90 transform transition-transform duration-300 ease-in-out ${
          rightDashNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <DashboardSidebar />
      </div>

      {/* Main Dashboard Content */}
    
        {/* ✅ Navbar with scroll-based background */}
        <div
          className={`w-full flex flex-row justify-between items-center sticky top-0 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-gradient-to-r from-[#F26B30] via-[#FB9F14] to-[#F97D20]"
              : "bg-transparent"
          }`}
        >
          <div className="p-2 flex items-center space-x-3">
            <img
              src="/dashboardnavbar.jpg"
              alt="Logo"
              className="w-10 h-10 rounded-md object-cover"
            />
            <h2 className="text-sx font-semibold text-white">Grow 4U Profit</h2>
          </div>

          <div className="p-2">
            <span
              className="float-right py-3 px-3 text-xl cursor-pointer border border-white rounded-full m-2  text-white hover:bg-white hover:text-black transition "
              onClick={toggleDashNav}
            >
              <IoIosMenu />
            </span>
          </div>
        </div>
        <div className="w-full min-h-screen flex flex-col items-center px-8">
        {/* Other Dashboard Sections */}
        <ProfileSection />
        <ProfitSection />
        <PriceSection />
      </div>
    </div>
  );
};

export default Dashboard;
