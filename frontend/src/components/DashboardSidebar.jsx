import React from "react";
import { Link } from "react-router-dom";
import {FaTachometerAlt,FaGem,FaMoneyCheckAlt,FaTasks,FaWallet,FaKey,} from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import "./SidebarStyle.css";

const DashboardSidebar = () => {
  const menuItems = [
    { icon: <FaTachometerAlt />, label: "Dashboard", path: "/dashboard", active: true },
    { icon: <FaGem />, label: "Plans", path: "/plans" },
    { icon: <FaMoneyCheckAlt />, label: "Deposit", path: "/plans" },
    { icon: <MdHistory />, label: "Deposit History", path: "/deposithestory" },
    { icon: <FaTasks />, label: "Task", path: "/task" },
    { icon: <FaTasks />, label: "Task History", path: "/taskhistory" },
    { icon: <FaWallet />, label: "Withdraw", path: "/withdrawmoney" },
    { icon: <MdHistory />, label: "Withdraw History", path: "/withdrawhistory" },
    { icon: <HiOutlineUserGroup />, label: "Referral", path: "/referrallink" },
    { icon: <FaKey />, label: "Referral Bounse", path: "/referralbounse" },
    { icon: <IoSettingsOutline />, label: "Settings", path: "/profilesetting" },
    { icon: <IoSettingsOutline />, label: "Change Password", path: "/changepassword" },
    { icon: <IoSettingsOutline />, label: "Logout", path: "/login" },
  ];

  return (
    <div className="h-full md:h-screen overflow-y-auto hide-scrollbar translate-x-0  md:w-64 transition duration-400 delay-100 ease-in-out bg-gradient-to-b from-[#ff512f] to-[#f09819] text-white p-4">
      {/* User Info Card */}
      <div className="bg-gradient-to-br from-cyan-400 via-yellow-300 to-orange-400 rounded-xl p-5 text-black shadow-md mb-6">
        <img
          src="/profit.png"
          alt="profit"
          className="w-12 h-12 mb-2"
        />
        <p className="font-bold text-white">Username: fakhar</p>
        <p className="text-sm break-words text-white">
          Email:<br />fakharabbasbhatti333@gmail.com
        </p>
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col space-y-3">
        {menuItems.map((item, index) => {
          const itemClasses = `flex items-center space-x-5 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
            item.active
              ? "bg-[#FB983F] bg-opacity-20 text-white font-semibold"
              : "hover:bg-[#FB983F] hover:bg-opacity-10 text-white"
          }`;

          return item.path ? (
            <Link key={index} to={item.path} className={itemClasses}>
              <div className="text-xl">{item.icon}</div>
              <span className="text-lg">{item.label}</span>
            </Link>
          ) : (
            <div key={index} className={itemClasses}>
              <div className="text-xl">{item.icon}</div>
              <span className="text-lg">{item.label}</span>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default DashboardSidebar;
