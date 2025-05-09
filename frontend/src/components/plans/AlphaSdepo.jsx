import React, { useState } from "react";
import BackButton from "../BackButton";
import { useLocation, useNavigate } from "react-router-dom";

const AlphaSdepo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { price, source } = location.state || {};
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const MovetoHome = () => {
    setShowSuccessMessage(true);

    // Optional: Redirect to home after 2.5 seconds
    setTimeout(() => {
      navigate("/");
    }, 2500);


  };

  return (
    <>
      <div className="bg-[#FEB30C] py-12 px-4 sm:px-8 lg:px-16 min-h-screen relative">
        <div className="mx-auto text-2xl font-bold text-green-500 hover:text-blue-500 transition pt-3">
          <BackButton />
        </div>

        {/* ✅ Success Message */}
        {showSuccessMessage && (
          <div className="absolute inset-0 top-0 right-0 flex items-center justify-center bg-black/80 z-50">
            <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white text-3xl font-bold px-10 py-6 rounded-xl shadow-lg animate-pulse">
              ✅ Payment Successful!
            </div>
          </div>
        )}

        <div className="flex flex-col items-center">
          <div className="max-w-2xl rounded-sm bg-black text-gray-400 px-5 py-2 flex flex-col gap-10">
            <div>
              <h1 className="text-white p-2 font-semibold">Deposit Confirm</h1>
              <hr />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-center font-semibold">
                You have requested{" "}
                <span className="text-green-400">{price} Pkr</span>, Please pay{" "}
                <span className="text-green-400">{price} Pkr</span> RS for successful payment
              </h1>
              <h4 className="text-lg text-white font-semibold mt-5">
                Please follow the instruction below
              </h4>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-center">
              Hi Dear Members Please Send Money Our {source} Account And Upload Screen Shot Your Deposit Approved Within Next 10 to 20 Minutes
              </p>
              <p className="mt-10">Thank You For Joining Us...</p>
            </div>

            <div className="flex flex-col gap-8 items-center">
              <div>
                <h2 className="text-white">{source}</h2>
                <h3 className="text-gray-300">ACCOUNT NUMBER</h3>
                <h2 className="text-white">03008416669</h2>
              </div>
              <div>
                <h2 className="text-gray-300">ACCOUNT NAME</h2>
                <h3 className="text-white">Muhammad Yaqoob</h3>
              </div>
            </div>

            <div className="w-full flex flex-col gap-2">
              <label>Your Transaction ID</label>
              <input
                type="text"
                required
                className="w-full border py-2 px-2 focus:outline-gray-200 rounded-sm bg-white"
              />
              <label>Upload Screenshot</label>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                className="w-full text-black border py-2 px-2 focus:outline-gray-200 rounded-sm bg-white"
              />
              <p className="text-orange-400 text-sm mb-10">
                Supported mimes: jpg, jpeg, png, pdf, doc, docx
              </p>
              <button
                className="py-2 px-5 cursor-pointer mb-10 font-semibold bg-gradient-to-br from-[#e61942] to-[#af5d6d] rounded-md text-white hover:brightness-110 transition"
                onClick={MovetoHome}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlphaSdepo;
