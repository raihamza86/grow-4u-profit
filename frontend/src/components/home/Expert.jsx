import React from "react";
import { FaUser } from "react-icons/fa";
import { MdHeadsetOff } from "react-icons/md";
import { LuCircleDollarSign } from "react-icons/lu";

const features = [
  {
    icon: <FaUser className="text-blue-600 w-8 h-8" />,
    title: "Expert Team Members",
    description: "We take pride in assembling a diverse and highly skilled.",
    bg: "bg-blue-100",
  },
  {
    icon: <MdHeadsetOff  className="text-orange-500 w-8 h-8" />,
    title: "Fastest Customer Service",
    description: "We pride ourselves on providing the fastest customer service.",
    bg: "bg-orange-100",
  },
  {
    icon: <LuCircleDollarSign className="text-pink-600 w-8 h-8" />,
    title: "Reasonable Pricing",
    description: "We believe in providing reasonable pricing that offers exceptional.",
    bg: "bg-pink-100",
  },
];

const Expert= () => {
  return (
    <div className="bg-white py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className={`p-5 rounded-xl ${feature.bg}`}>
              {feature.icon}
            </div>
            <div>
              <h3 className="text-xl md:text-xl font-bold text-[#0A0140]">
                {feature.title}
              </h3>
              <p className="text-sx text-gray-600 mt-1">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expert;
