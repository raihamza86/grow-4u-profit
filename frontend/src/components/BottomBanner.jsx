import React from 'react'
import "./TopBanner.css";
import { RiArrowRightSLine } from 'react-icons/ri'

const BottomBanner = () => {
    return (
        <div className="text-white text-center flex max-md:flex-col max-md:justify-center gap-1 justify-between  px-5 lg:px-20 pt-15 pb-4 text-lg font-semibold animate-gradient-x bg-gradient-custom text-nowrap ">
            <p>Copyright © 2025 , All rights reserved.</p>
            <p className="flex items-center gap-1 text-center md:text-right mt-2 md:mt-0">
                Developed by Grow 4U Profit 
                <a href="#" className="hover:underline text-gray-200 hover:text-white transtation flex items-center gap-1">
                    Creativity <RiArrowRightSLine className="w-6 h-6 mt-0.5" />
                </a>
            </p>
        </div>
    )
}

export default BottomBanner