import React from "react";
import { TbClipboardCopy } from "react-icons/tb";
import { IoIosMailOpen } from "react-icons/io";
import { FaUserPlus, FaGift } from "react-icons/fa6";

const ReferralLink = () => {
  const referralLink = "https://grow-4u-profit.com?reference=fakhar";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied!");
  };

  const sampleData = [
    {
      fullName: "BHATTI",
      userName: "ali123",
      email: "ali@example.com",
      mobile: "03001234567",
      plan: "Basic",
    },
    {
      fullName: "RANA",
      userName: "ayeshaK",
      email: "ayesha@example.com",
      mobile: "03111234567",
      plan: "Premium",
    },
    {
      fullName: "SHAH",
      userName: "fahadA",
      email: "fahad@example.com",
      mobile: "03221234567",
      plan: "Gold",
    },
    {
      fullName: "RAI",
      userName: "saraM",
      email: "sara@example.com",
      mobile: "03331234567",
      plan: "Standard",
    },
    {
      fullName: "JUTT",
      userName: "usmanT",
      email: "usman@example.com",
      mobile: "03441234567",
      plan: "VIP",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-400 via-orange-500 to-[#F54635] p-4 md:p-8 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Back Button */}
        <div className="text-green-500 text-2xl hover:text-blue-500 font-bold mb-8 cursor-pointer">
          Back Now
        </div>

        {/* Icon Menu */}
        <div className="flex flex-col md:flex-row justify-around items-center bg-[#212529] rounded-lg p-4 mb-6 space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex flex-col items-center">
            <IoIosMailOpen size={24} className="text-[#FD7E14]" />
            <span className="mt-1">Send Invitation</span>
          </div>
          <div className="flex flex-col items-center">
            <FaUserPlus size={24} className="text-[#FD7E14]" />
            <span className="mt-1">Upgrade VIP</span>
          </div>
          <div className="flex flex-col items-center">
            <FaGift size={24} className="text-[#FD7E14]" />
            <span className="mt-1">Earn Rewards</span>
          </div>
        </div>

        {/* Referral Link Section */}
        <div className="bg-[#212529] rounded-xl p-6 mb-6">
          <h2 className="text-center text-2xl font-bold text-[#FD7E14] mb-4">
            Referral Link
          </h2>
          <input
            type="text"
            readOnly
            value={referralLink}
            className="w-full bg-gray-100 text-gray-800 px-4 py-3 rounded-full mb-4 font-semibold"
          />
          <button
            onClick={copyToClipboard}
            className="w-full py-2 rounded-full font-bold flex items-center justify-center space-x-2
              bg-gradient-to-tr from-[#E23C5D] to-[#F4B4C1]
              hover:from-[#F4B4C1] hover:to-[#E23C5D]
              transition-all duration-300 cursor-pointer"
          >
            <TbClipboardCopy size={18} />
            <span>Copy</span>
          </button>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto bg-orange-500 text-white rounded-t-md text-sm md:text-base">
            <thead>
              <tr className="bg-[#FD7E14]">
                <th className="px-4 py-2 text-left">Full Name</th>
                <th className="px-4 py-2 text-left">User Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Mobile</th>
                <th className="px-4 py-2 text-left">Plan</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((user, index) => (
                <tr key={index} className="bg-[#212529] text-left">
                  <td className="px-4 py-2">{user.fullName}</td>
                  <td className="px-4 py-2">{user.userName}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.mobile}</td>
                  <td className="px-4 py-2">{user.plan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReferralLink;
