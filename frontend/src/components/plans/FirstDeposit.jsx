import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const FirstDeposit = ({ price }) => {
  const JENarray = [
    {
      id: 1,
      img: "/Home/easypaisa.jpg",
      value: "EASYPAISA",
    },
    {
      id: 2,
      img: "/Home/jazzcash.png",
      value: "JAZZCASH",
    },
    {
      id: 3,
      img: "/Home/Navyapay.jpg",
      value: "NAYA PAY",
    },
  ];

  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [visibi, setvisibi] = useState(true);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    setShowCheckout(value === "checkout");
  };

  const MovetoConfirmDeposit = () => {
    if (selectedImageIndex !== null) {

      // Powerfull LInes 
      const selectedSource = JENarray[selectedImageIndex].value;

      navigate("/SecondDepPg", { state: { price, source: selectedSource } });
    } else {
      alert("Please select a wallet image before proceeding.");
    }
  };

  const handleImageSelect = (index) => {
    setSelectedImageIndex(index);
  };

  const Invisible = () => {
    setvisibi(false);
  };

  return (
    <div className="w-full fixed top-0 min-h-screen bg-black/50  -left-0 z-10 flex justify-center items-start p-4 sm:p-6">
      {visibi && (
        <div className="w-full max-w-xs sm:max-w-lg bg-[#292211] rounded-xl shadow-xl p-5">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-400 text-sm sm:text-base">
              Confirmation to purchase VIP 2
            </p>
            <RxCross1
              className="text-white text-xl cursor-pointer"
              onClick={Invisible}
            />
          </div>
          <hr className="border-gray-600 mb-4" />

          {/* Plan Details */}
          <div className="flex flex-col items-center gap-1 mb-6">
            <h5 className="text-white text-sm sm:text-base">
              Daily Ads limit:{" "}
              <span className="text-rose-500 font-semibold">1</span>
            </h5>
            <h6 className="text-gray-400 text-sm">
              Referral Level:{" "}
              <span className="text-rose-500 font-semibold">0</span>
            </h6>
            <h6 className="text-gray-400 text-sm">
              Plan Validity:{" "}
              <span className="text-rose-500 font-semibold">90 Days</span>
            </h6>
          </div>

          {/* Wallet Selector */}
          <div className="mb-6">
            <label className="text-white text-sm mb-2 block">Select Wallet</label>
            <select
              className="w-full border border-white bg-transparent text-rose-500 font-semibold rounded-md py-2 px-3 focus:outline-none"
              onChange={handleSelectChange}
            >
              <option value="">Select One</option>
              <option value="deposit">Deposit Wallet - Rs.20.00</option>
              <option value="checkout">Checkout</option>
            </select>

            {/* Checkout Images */}
            {showCheckout && (
              <div className="flex flex-wrap gap-3 mt-4">
                {JENarray.map((imo, i) => (
                  <div
                    key={i}
                    onClick={() => handleImageSelect(i)}
                    className={`rounded-md p-3 w-[30%] flex justify-center items-center cursor-pointer transition-colors duration-300
                      ${
                        selectedImageIndex === i
                          ? "border-2 border-yellow-300 "
                          : "border-2 border-white"
                      }`}
                  >   
                    <img
                      src={imo.img}
                      alt={imo.value}
                      className="w-20 h-auto hover:scale-115 transition transform duration-300 object-contain"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Amount Input */}
            <label className="text-white text-sm mt-6 block mb-2">
              Invest Amount
            </label>
            <div className="flex">
              <input
                className="w-full border border-white border-r-0 rounded-l-md bg-transparent text-gray-300 px-3 py-2 focus:outline-none"
                type="text"
                value={price}
                readOnly
              />
              <span className="rounded-r-md border border-white bg-gradient-to-br from-[#e61942] to-[#af5d6d] text-white px-4 flex items-center">
                PKR
              </span>
            </div>
          </div>
          <hr className="border-gray-600 mb-5" />

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <button
              className="py-2 px-5 bg-gray-600 rounded-md text-white cursor-pointer"
              onClick={Invisible}
            >
              No
            </button>
            <button
              className="py-2 px-5 bg-gradient-to-br cursor-pointer from-[#e61942] to-[#af5d6d] rounded-md text-white hover:brightness-110 transition"
              onClick={MovetoConfirmDeposit}
            >
              Yes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FirstDeposit;
