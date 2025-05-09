import React from "react";
import { FaArchway } from "react-icons/fa";

const ImgArray = [
  { id: 1, img: "/Home/rotate1.webp" },
  { id: 2, img: "/Home/rotate2.webp" },
  { id: 3, img: "/Home/rotate3.webp" },
  { id: 4, img: "/Home/rotate4.webp" },
  { id: 5, img: "/Home/rotate5.webp" },
  { id: 6, img: "/Home/rotate6.webp" },
  { id: 7, img: "/Home/rotate7.webp" },
];


const Brand = () => {
  return (
    <div className="w-full bg-blue-100 py-10 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8 px-4">
        <h1 className="text-lg font-bold">
          <span className="bg-pink-500 text-white px-2 py-1 rounded mr-2">Brand We</span>
          Work With
        </h1>
      </div>

      {/* Responsive Logo Grid on small screens, Carousel on md+ */}
      <div className="w-full px-4">
        {/* Grid (visible on small screens) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:hidden">
          {ImgArray.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg flex items-center justify-center p-2"
            >
              <img src={item.img} alt="Brand Logo" className="w-full h-full object-contain" />
            </div>
          ))}
        </div>

        {/* Carousel (visible on medium and larger screens) */}
        <div className="hidden md:block overflow-hidden w-full mt-4">
          <div className="flex w-max gap-6 animate-scroll">
            {[...ImgArray, ...ImgArray].map((item, index) => (
              <div
                key={index}
                className="w-36 h-24 md:w-40 md:h-28 bg-white shadow-md rounded-lg flex items-center justify-center p-2"
              >
                <img src={item.img} alt="Brand Logo" className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats and Background Image */}
      <div className="flex flex-col md:flex-row gap-6 px-4 mt-10">
        {/* Stats Grid */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { img: "/Home/icon_head.svg", text: "Years of Experience", value: "10+" },
            { img: "/Home/icon_check.svg", text: "Success Stories", value: "200+" },
            { img: "/Home/icon_like.svg", text: "Companies Trust Us", value: "12K+" },
            { icon: <FaArchway className="text-5xl text-blue-800" />, text: "Global Reach", value: "20+" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="mb-4">
                {item.img ? (
                  <img src={item.img} className="w-20 h-20" alt="icon" />
                ) : (
                  item.icon
                )}
              </div>
              <h3 className="text-4xl font-bold">{item.value}</h3>
              <p className="text-gray-600 font-medium mt-2">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Right Background Image */}
        <div
          className="w-full relative md:w-[30%] h-[60vh] md:h-[100vh] rounded-lg shadow-md overflow-hidden"
          style={{
            backgroundImage: "url('/Home/Brandbimg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-800 via-blue-500/40 to-transparent"></div>

          {/* Text */}
          <h1 className="text-white absolute bottom-10 left-1/2 -translate-x-1/2 text-2xl p-4 max-w-xs font-bold text-center z-10">
            12000 Employees in 30 Countries of Europe
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Brand;
