import React from "react";
import "./TopBanner.css";
import {  RiArrowRightSLine } from "react-icons/ri";

const TopBanner = () => {
    return (
        <div className="text-white text-center flex gap-1 justify-center py-2 text-lg animate-gradient-x bg-gradient-custom pb-13">
            <p className="drop-shadow-sm">
                Joining Bonus <span className="font-semibold">20PKR</span>
            </p>
            <a
                href="/login" // Change this to your actual registration URL
                className=" underline hover:text-gray-300 transition cursor-pointer flex items-center"
            >
                Join now
                <RiArrowRightSLine
                    className="w-6 h-6 mt-1"
                />
            </a>
        </div>

    );
};

export default TopBanner;