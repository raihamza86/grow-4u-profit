import React, { useState } from 'react';
import WithdrawEasyPaisa from './WithdrawEasyPaisa'; // Make sure path is correct
import BackButton from './BackButton';

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
    <div className='h-[100vh]'>
      {/* Header Section */}
      <div className="h-[50%] bg-gradient-to-b from-yellow-400 to-orange-600 flex items-center justify-start px-6 md:px-16 py-16 text-black">
        <div className="text-left max-w-xl">
          <h1 className="text-xl md:text-4xl font-bold">Withdraw Money</h1>
          <h3 className="text-[14px] md:text-sm font-semibold mt-3">You Can Withdraw From Home</h3>
          <BackButton /> {/* Assuming you have a BackButton component */}
        </div>
      </div>

      {/* Card Section */}
      <div className="h-[50%] bg-gradient-to-b from-yellow-400 via-orange-500 to-[#F54635] flex flex-col items-center justify-center py-8">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-6">
          {cards.map(({ id, img, buttonText, buttonColor, onClick }) => (
            <div
              key={id}
              className="bg-[#1a2024] rounded-2xl shadow flex flex-col items-center py-4 px-2 md:px-0 md:p-5 md:w-60"
            >
              <img
                src={img}
                alt=""
                className="rounded-xl mb-4 w-16 md:w-30 object-cover"
              />
              <button
                className={`${buttonColor} text-black px-2 py-1 md:px-4 md:py-2 rounded-full text-[10px] md:text-[14px]`}
                onClick={onClick}
              >
                {buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Render */}
      {showEasyPaisa && <WithdrawEasyPaisa onClose={() => setShowEasyPaisa(false)} title={"EasyPaisa"} />}
      {showjazcash && <WithdrawEasyPaisa onClose={() => setShowjazcash(false)} title={"JazzCash"} />}
    </div>
  );
};

export default WithdrawMoney;
