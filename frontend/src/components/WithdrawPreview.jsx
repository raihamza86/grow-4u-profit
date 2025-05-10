import React, { useState } from 'react';

const WithdrawPreview = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');

  const MovetoHome = () => {
    console.log('Account Number:', accountNumber);
    console.log('Account Name:', accountName);

    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
      // Add navigation logic here if needed
    }, 3000);
  };

  return (
    <div className="bg-[#FEB30C] py-12 px-4 sm:px-8 lg:px-16 min-h-screen relative">
      {showSuccessMessage && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-50">
          <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white text-3xl font-bold px-10 py-6 rounded-xl shadow-lg animate-pulse">
            ✅ Payment Successful!
          </div>
        </div>
      )}

      <div className="flex flex-col items-center">
        <div className="w-full max-w-2xl rounded-sm bg-black text-gray-400 px-5 py-6 flex flex-col gap-10 shadow-lg">
          <div>
            <h1 className="text-white p-2 font-semibold">Withdraw Via EASYPAISA</h1>
            <hr />
          </div>

          <div className="flex flex-col items-center gap-3 text-sm sm:text-base">
            <p className="text-center">
              Hi Dear Members, please send your EasyPaisa account number and account name. Your withdrawal will be approved within the next 10 to 20 minutes.
            </p>
            <p className="text-center">
              (Sometimes, using the same account repeatedly may cause suspension. Please be careful.)
            </p>
            <p className="mt-6">Thank You For Joining us...</p>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div>
              <label className="text-white block mb-1">Account Number</label>
              <input
                type="text"
                required
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="w-full border py-2 px-3 text-black focus:outline-gray-200 rounded-sm bg-white"
              />
            </div>

            <div>
              <label className="text-white block mb-1">Account Name</label>
              <input
                type="text"
                required
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                className="w-full border text-black py-2 px-3 focus:outline-gray-200 rounded-sm bg-white"
              />
            </div>

            <button
              type="button"
              className="py-2 px-5 cursor-pointer font-semibold bg-gradient-to-br from-[#e61942] to-[#af5d6d] rounded-md text-white hover:brightness-110 transition mt-4"
              onClick={MovetoHome}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawPreview;
