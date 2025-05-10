import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';

const WithdrawEasyPaisa = ({ onClose,title }) => {
  const [price, setPrice] = useState("");

  const MovetoConfirmDeposit = () => {
    alert("Proceeding to confirmation...");
    // add your real logic here
  };

  return (
    <div className="w-full fixed top-0 left-0 min-h-screen bg-black/60 z-50 flex justify-center items-start p-4 sm:p-6">
      <div className="w-full max-w-xs sm:max-w-lg bg-[#292211] rounded-xl shadow-xl p-5 space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <p className="text-white text-sm sm:text-base">
            Withdraw with {title}
          </p>
          <RxCross1
            className="text-white text-xl cursor-pointer"
            onClick={onClose}
          />
        </div>

        <hr className="border-white" />

        {/* Limit Info */}
        <div className="bg-gradient-to-b from-[#ff512f] to-[#f09819] rounded-md p-3 space-y-1">
          <div className="flex justify-between text-black text-sm sm:text-base font-semibold">
            <span>Limit: 500 PKR</span>
            <span>500,000 PKR</span>
          </div>
          <hr className="border-black" />
          <div className="flex justify-between text-black text-sm sm:text-base font-semibold">
            <span>1 PKR =</span>
            <span>1 Rs</span>
          </div>
        </div>

        {/* Amount Input */}
        <div>
          <label className="text-white text-sm block mb-2 mt-2">Amount</label>
          <div className="flex">
            <input
              className="w-full border border-white border-r-0 rounded-l-md bg-transparent text-gray-300 px-3 py-2 focus:outline-none"
              type="text"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
                console.log(e.target.value);
              }}
            />
            <span className="rounded-r-md border border-white bg-gradient-to-br from-[#e61942] to-[#af5d6d] text-white px-4 flex items-center">
              PKR
            </span>
          </div>
        </div>

        <hr className="border-gray-600" />

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            className="w-full py-3 bg-gradient-to-br from-[#e61942] to-[#af5d6d] rounded-xl text-black hover:brightness-110 transition text-xl cursor-pointer"
            onClick={MovetoConfirmDeposit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawEasyPaisa;
