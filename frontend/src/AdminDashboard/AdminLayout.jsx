import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const AdminLayout = () => {
    return (
        <div className="flex bg-light-color min-h-screen">
            {/* Sidebar */}
            <ToastContainer />
            <Sidebar />

            {/* Main Content Area */}
            <div className=" w-full sm:w-[75%] absolute right-0 h-full">
                {/* Topbar stays static above */}
                <Topbar />

                {/* Animated page content */}
                <motion.div
                    className="p-2 md:p-6"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Outlet />
                </motion.div>
            </div>
        </div>
    );
};

export default AdminLayout;

