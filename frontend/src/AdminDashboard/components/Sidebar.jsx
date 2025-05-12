import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    MdDashboard, MdPeople, MdAttachMoney, MdOutlineAdsClick,
    MdOutlineSettings, MdMenu, MdClose, MdTrendingUp, MdCardGiftcard
} from 'react-icons/md';
import { FaMoneyCheckAlt } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { motion, AnimatePresence } from 'framer-motion';
import "../../components/SidebarStyle.css";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { to: '/admin', label: 'Dashboard', icon: <MdDashboard /> },
        { to: '/admin/users', label: 'Users', icon: <MdPeople /> },
        { to: '/admin/packages', label: 'Packages', icon: <MdCardGiftcard /> },
        { to: '/admin/payments', label: 'Payments', icon: <FaMoneyCheckAlt /> },
        { to: '/admin/ads', label: 'Ads', icon: <MdOutlineAdsClick /> },
        { to: '/admin/referrals', label: 'Referrals', icon: <MdTrendingUp /> },
        { to: '/admin/reports', label: 'Reports', icon: <TbReportAnalytics /> },
        { to: '/admin/settings', label: 'Settings', icon: <MdOutlineSettings /> },
    ];

    const handleLinkClick = () => {
        if (window.innerWidth < 768) {
            setIsOpen(false);
        }
    };

    return (
        <>
            {/* Mobile Toggle Button */}
            <div className="md:hidden fixed top-3 left-2 z-50">
                <button
                    className="text-white bg-orange-600 p-2 rounded-md shadow-lg"
                    onClick={() => setIsOpen(true)}
                >
                    <MdMenu size={24} />
                </button>
            </div>

            {/* Desktop Sidebar */}
            <aside className="hidden md:flex flex-col justify-between w-64 h-screen overflow-y-scroll hide-scrollbar p-5 fixed left-0 top-0 shadow-lg z-20 bg-gradient-to-b from-[#ff512f] to-[#f09819] text-white">
                <div>
                    <h1 className="text-2xl font-bold mb-10 font-Fredoka text-white">Earnify Admin</h1>
                    <nav className="space-y-4">
                        {links.map(({ to, label, icon }) => (
                            <NavLink
                                key={to}
                                to={to}
                                end={to === '/admin'}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${isActive
                                        ? 'bg-[#FB983F] bg-opacity-20 font-semibold'
                                        : 'hover:bg-[#FB983F] hover:bg-opacity-10'
                                    }`
                                }
                            >
                                <span className="text-xl">{icon}</span> <span className="text-lg">{label}</span>
                            </NavLink>
                        ))}
                    </nav>
                </div>

                {/* Home Link */}
                <div className="pt-10">
                    <NavLink
                        to="/dashboard"
                        end
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${isActive
                                ? 'bg-white text-orange-700 font-semibold'
                                : 'hover:bg-white hover:text-orange-700 text-white'
                            }`
                        }
                    >
                        <MdDashboard /> Home
                    </NavLink>
                </div>
            </aside>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <motion.aside
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 left-0 h-full w-4/5 p-5 shadow-lg z-50 md:hidden flex flex-col justify-between bg-gradient-to-b from-[#ff512f] to-[#f09819] text-white overflow-y-scroll hide-scrollbar"
                    >
                        <div className="absolute top-12 right-4">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:text-yellow-200 transition"
                            >
                                <MdClose size={24} />
                            </button>
                        </div>

                        <div>
                            <h1 className="text-2xl font-bold mb-10 font-Fredoka text-white">Earnify Admin</h1>
                            <nav className="space-y-4">
                                {links.map(({ to, label, icon }) => (
                                    <NavLink
                                        key={to}
                                        to={to}
                                        end={to === '/admin'}
                                        onClick={handleLinkClick}
                                        className={({ isActive }) =>
                                            `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${isActive
                                                ? 'bg-[#FB983F] bg-opacity-20 font-semibold'
                                                : 'hover:bg-[#FB983F] hover:bg-opacity-10'
                                            }`
                                        }
                                    >
                                        <span className="text-xl">{icon}</span> <span className="text-lg">{label}</span>
                                    </NavLink>
                                ))}
                            </nav>
                        </div>

                        <div className="pt-10">
                            <NavLink
                                to="/dashboard"
                                end
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${isActive
                                        ? 'bg-white text-orange-700 font-semibold'
                                        : 'hover:bg-white hover:text-orange-700 text-white'
                                    }`
                                }
                            >
                                <MdDashboard /> Home
                            </NavLink>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    );
};

export default Sidebar;
