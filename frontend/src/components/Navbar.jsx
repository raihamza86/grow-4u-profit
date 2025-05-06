import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import TopBanner from "./TopBanner";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Developer", path: "/developer" },
    { label: "Plans", path: "/plans" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  const [activeItem, setActiveItem] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsMobileMenuOpen(false); // Close menu on mobile after clicking
  };

  return (
    <>
      <div className="-z-100  mb-[-40px]">
        <TopBanner />
      </div>

      <nav className="w-full shadow bg-white rounded-t-[3rem] ">
        <div className="mx-auto px-4 sm:px-6 lg:px-14">
          <div className="flex items-center justify-between ">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" className="h-25" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-5 text-sm lg:text-base font-medium text-slate-900">
              {menuItems.map((item) => (
                <Link to={item.path}>
                  <div
                    key={item}
                    onClick={() => handleItemClick(item.label)}
                    className="relative group cursor-pointer"
                  >
                    <span
                      className={`flex items-center gap-1 transition-all duration-300
                                        ${activeItem === item.label
                          ? "text-blue-600"
                          : ""
                        }
                                        group-hover:text-blue-600`}
                    >
                      {item.label}
                      <RiArrowDownSLine className="w-6 h-6 transform transition-transform duration-300 group-hover:rotate-x-180" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <AiOutlineClose size={24} />
                ) : (
                  <AiOutlineMenu size={24} />
                )}
              </button>
            </div>

            {/* Desktop Login Button */}
            <div className="hidden md:block">
              {/* Login Button */}

              <div className="hidden md:flex">
                <Link to="/login" className="relative overflow-hidden bg-gradient-to-br from-green-400 via-orange-500 to-pink-400  h-12 w-32 rounded-full font-semibold transition-all duration-400 group hover:scale-105 hover:shadow-lg cursor-pointer">
                  {/* Static arrow on the right */}
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black transition duration-400 group-hover:text-white">
                    <FaArrowRight />
                  </div>

                  {/* Initial LOGIN text (slides up on hover) */}
                  <span className="absolute left-6 top-1/2 transform -translate-y-1/2 text-black transition-transform duration-400 group-hover:-translate-y-12">
                    LOGIN
                  </span>

                  {/* Hover LOGIN text (slides in from bottom, stays aligned with arrow) */}
                  <span className="absolute left-6 top-full transform -translate-y-1/8 text-white transition-all duration-400 group-hover:top-1/2 group-hover:translate-y-[-55%]">
                    LOGIN
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-2 space-y-2 pb-4">
              {menuItems.map((item) => (
                <Link to={item.path}>
                  <div
                    key={item.label}
                    onClick={() => handleItemClick(item.label)}
                    className={`cursor-pointer group px-3 py-2 rounded transition-all duration-300
                                    ${activeItem === item.label
                        ? "text-blue-600"
                        : "text-slate-900"
                      }
                                    hover:text-blue-600 flex items-center justify-between`}
                  >
                    {item.label}
                    <RiArrowDownSLine className="w-6 h-6 transform transition-transform  duration-300 group-hover:rotate-x-180" />
                  </div>
                </Link>
              ))}
              {/* Login Button */}

              <div className="mx-auto">
                <button className="relative overflow-hidden bg-gradient-to-br from-green-400 via-orange-500 to-pink-400  h-12 w-32 rounded-full font-semibold transition-all duration-400 group hover:scale-105 hover:shadow-lg cursor-pointer">
                  {/* Static arrow on the right */}
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black transition duration-400 group-hover:text-white">
                    <FaArrowRight />
                  </div>

                  {/* Initial LOGIN text (slides up on hover) */}
                  <span className="absolute left-6 top-1/2 transform -translate-y-1/2 text-black transition-transform duration-400 group-hover:-translate-y-12">
                    LOGIN
                  </span>

                  {/* Hover LOGIN text (slides in from bottom, stays aligned with arrow) */}
                  <span className="absolute left-6 top-full transform -translate-y-1/8 text-white transition-all duration-400 group-hover:top-1/2 group-hover:translate-y-[-55%]">
                    LOGIN
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
