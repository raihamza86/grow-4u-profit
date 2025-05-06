import React from "react";
import { Link } from "react-router-dom";
import { PiHandWithdrawFill, PiHandshakeFill } from "react-icons/pi";
import {
  FaTasks,
  FaHome,
  FaUser,
  FaMoneyCheckAlt,
  FaUserClock,
} from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { RiBattery2ChargeFill, RiTeamFill } from "react-icons/ri";
import {
  MdProductionQuantityLimits,
  MdSecurity,
  MdHistory,
  MdDownload,
} from "react-icons/md";
import { LuChartColumnIncreasing } from "react-icons/lu";

const GrowProfit = () => {
  const menuItems = [
    {
      icon: <MdSecurity className="text-[#FFC402] text-5xl" />,
      label: "Security center",
    },
    {
      icon: <MdHistory className="text-[#FFC402] text-5xl" />,
      label: "Deposit History",
    },
    {
      icon: <FaMoneyCheckAlt className="text-[#FFC402] text-5xl" />,
      label: "Withdrawal History",
    },
    {
      icon: <PiHandshakeFill className="text-[#FFC402] text-5xl" />,
      label: "Help Center",
    },
    {
      icon: <FaUserClock className="text-[#FFC402] text-5xl" />,
      label: "Earning History",
    },
    {
      icon: <MdDownload className="text-[#FFC402] text-5xl" />,
      label: "Download App",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-400 to-orange-500 text-gray-900 font-sans pb-28">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl text-center font-bold text-white pt-8">
        Grow 4U Profit
      </h1>
      <h2 className="text-2xl md:text-4xl text-center font-semibold text-white mt-2">
        Uid: fakhar
      </h2>

      {/* Top Navigation Icons */}
      <div className="grid grid-cols-4 gap-4 text-center py-8 text-white">
        <Link to="/plans" className="flex flex-col items-center">
          <RiBattery2ChargeFill className="text-5xl" />
          <span className="mt-2 text-sm font-medium">Recharge</span>
        </Link>
        <Link to="/profilesetting" className="flex flex-col items-center">
          <PiHandWithdrawFill className="text-5xl" />
          <span className="mt-2 text-sm font-medium">Withdraw</span>
        </Link>
        <Link to="/" className="flex flex-col items-center">
          <FaTasks className="text-5xl" />
          <span className="mt-2 text-sm font-medium">Task</span>
        </Link>
        <Link to="/" className="flex flex-col items-center">
          <GrSend className="text-5xl" />
          <span className="mt-2 text-sm font-medium">Hotline</span>
        </Link>
      </div>

      {/* Card with balance and menu */}
      <div className="bg-white max-w-5xl mx-auto mt-8 rounded-3xl shadow-md px-6 pt-12 pb-24">
        {/* Balance */}
        <div className="text-center mb-6">
          <div className="text-5xl font-bold">Pkr 20.00</div>
          <div className="text-sm text-gray-500 mt-4">Total balance</div>
        </div>

        {/* Menu items */}
        <div className="space-y-4">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-[#F1F6FA] rounded-xl py-3 px-4"
            >
              <div className="flex items-center space-x-3 font-semibold text-gray-700">
                {item.icon}
                <span className="text-xl">{item.label}</span>
              </div>
              <span className="text-4xl text-gray-400">›</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sign out */}
      <div className="-mt-8 flex justify-center">
        <Link to="/login"
          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-md hover:opacity-90 text-3xl cursor-pointer
          border-t-[5px] border-r-[5px] border-b-[5px] border-l-[5px]
          border-t-[#FFCAAD] border-r-[#FFCAAD] border-b-[#FFEBAC] border-l-[#FFEBAC]"
        >
          Sign out
        </Link>
      </div>

      {/* Footer */}
      <div className="text-2xl text-gray-800 mt-20 text-center">
        © 2025 Grow 4U Profit company Limited.
      </div>

     {/* Fixed Bottom Navigation */}
<div className="fixed bottom-0 left-0 right-0 bg-white grid grid-cols-5 text-center text-xs py-4 border-t border-gray-300 z-50">
  <Link to="/dashboard" className="flex flex-col items-center group cursor-pointer">
    <FaHome className="text-3xl md:text-5xl text-[#C7C7C7] group-hover:text-[#ffa802]" />
    <div className="md:text-2xl text-[#C7C7C7] group-hover:text-[#ffa802]">Home</div>
  </Link>

  <Link to="/plans" className="flex flex-col items-center group cursor-pointer">
    <MdProductionQuantityLimits className="text-3xl md:text-5xl text-[#C7C7C7] group-hover:text-[#ffa802]" />
    <div className="md:text-2xl text-[#C7C7C7] group-hover:text-[#ffa802]">Production</div>
  </Link>

  <div className="flex flex-col items-center group cursor-pointer">
    <LuChartColumnIncreasing className="text-3xl md:text-5xl text-[#C7C7C7] group-hover:text-[#ffa802]" />
    <div className="md:text-2xl text-[#C7C7C7] group-hover:text-[#ffa802]">Finance</div>
  </div>

  <Link to="/referrallink" className="flex flex-col items-center group cursor-pointer">
    <RiTeamFill className="text-3xl md:text-5xl text-[#C7C7C7] group-hover:text-[#ffa802]" />
    <div className="md:text-2xl text-[#C7C7C7] group-hover:text-[#969086]">Team</div>
  </Link>

  <Link to="/" className="flex flex-col items-center group cursor-pointer text-[#FFA802] hover:text-[#C7C7C7]">
    <FaUser className="text-3xl md:text-5xl" />
    <div className="md:text-2xl">Mine</div>
  </Link>
</div>

    </div>
  );
};

export default GrowProfit;
