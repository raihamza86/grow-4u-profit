import React, { useState } from 'react';
import WithdrawEasyPaisa from './WithdrawEasyPaisa'; // Make sure path is correct

const WithdrawMoney = () => {
  const [showEasyPaisa, setShowEasyPaisa] = useState(false);
  const [showjazcash, setShowjazcash] = useState(false);

  const cards = [
    {
      id: 1,
      img: "/Home/easypaisa.jpg",
      buttonText: "WithdrawNow",
      buttonColor: "bg-gradient-to-tr from-[#E23C5D] to-[#F4B4C1] hover:from-[#F4B4C1] hover:to-[#E23C5D] transition-all duration-300 cursor-pointer",
      onClick: () => setShowEasyPaisa(true), // Show modal on click
    //   title: 'Easypaisa'
    },
    {
      id: 2,
      img: "/Home/jazzcash-logo.jpg",
      buttonText: "WithdrawNow",
      buttonColor: "bg-gradient-to-tr from-[#E23C5D] to-[#F4B4C1] hover:from-[#F4B4C1] hover:to-[#E23C5D] transition-all duration-300 cursor-pointer",
      onClick: () => setShowjazcash(true),
    //   title: 'Jazzcash'
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="bg-gradient-to-b from-yellow-400 to-orange-600 flex items-center justify-start px-6 md:px-16 py-16 text-black">
        <div className="text-left max-w-xl">
          <h1 className="text-4xl font-bold">Withdraw Money</h1>
          <h3 className="text-sm font-semibold mt-3">You Can Withdraw From Home</h3>
        </div>
      </div>

      {/* Card Section */}
      <div className="min-h-screen bg-gradient-to-b from-yellow-400 via-orange-500 to-[#F54635] flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map(({ id, img, buttonText, buttonColor, onClick }) => (
            <div
              key={id}
              className="bg-[#1a2024] rounded-2xl shadow flex flex-col items-center p-5 w-72"
            >
              <img
                src={img}
                alt=""
                className="rounded-xl mb-4 w-42 object-cover"
              />
              <button
                className={`${buttonColor} text-black px-4 py-2 rounded-full`}
                onClick={onClick}
              >
                {buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Render */}
      {showEasyPaisa && <WithdrawEasyPaisa onClose={() => setShowEasyPaisa(false)} title={"EasyPaisa"}/>}
      {showjazcash && <WithdrawEasyPaisa onClose={() => setShowjazcash(false)} title={"JazzCash"}/>}
    </>
  );
};

export default WithdrawMoney;
