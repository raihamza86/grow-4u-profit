import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import BottomBanner from "./BottomBanner";

const Footer = () => {
    return (
        <>
        <footer className="bg-[#0b0d39] text-white pt-10 pb-20 px-4 md:px-20 rounded-b-[3.5rem] relative ">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:justify-items-center border-b border-gray-600 pb-10">
                    <div className="flex items-start space-x-4">
                        <div className="bg-[#1a1c4f] p-3 rounded-full">
                            <FaEnvelope size={20} />
                        </div>
                        <div>
                            <p className="text-gray-300">Write to us</p>
                            <p className="font-bold text-lg">info@Grow4UProfit.com</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="bg-[#1a1c4f] p-3 rounded-full">
                            <FaPhoneAlt size={20} />
                        </div>
                        <div>
                            <p className="text-gray-300">Call Us</p>
                            <p className="font-bold text-lg">+923</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="bg-[#1a1c4f] p-3 rounded-full">
                            <FaMapMarkerAlt size={20} />
                        </div>
                        <div>
                            <p className="text-gray-300">Our Office</p>
                            <p className="font-bold text-lg">Pakistan</p>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-10">
                    <div>
                        <h4 className="text-lg text-gray-300 font-semibold mb-4">Information</h4>
                        <ul className="space-y-2 text-lg">
                            <li className="font-semibold hover:underline cursor-pointer">About Grow 4U Profit</li>
                            <li className="font-semibold hover:underline cursor-pointer">Investors</li>
                            <li className="font-semibold hover:underline cursor-pointer">Contact</li>
                            <li className="font-semibold hover:underline cursor-pointer">Affiliate Program</li>
                            <li className="font-semibold hover:underline cursor-pointer">Career</li>
                            <li className="font-semibold hover:underline cursor-pointer">Pricing Plan</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

        <div className="absoulte -z-100  mt-[-52px]">
            <BottomBanner/>
        </div>

        </>
    );
};

export default Footer;
