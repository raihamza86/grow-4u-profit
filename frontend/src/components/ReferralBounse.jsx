import React from 'react';
import { FiSearch } from 'react-icons/fi';

// Mock data
const commissionData = [
  {
    transaction: 'TRX123456',
    from: 'user_01',
    level: 'Level 1',
    amount: '$5.00',
  },
  {
    transaction: 'TRX123457',
    from: 'user_09',
    level: 'Level 2',
    amount: '$3.50',
  },
  {
    transaction: 'TRX123458',
    from: 'user_14',
    level: 'Level 3',
    amount: '$2.00',
  },
  {
    transaction: 'TRX123459',
    from: 'user_05',
    level: 'Level 1',
    amount: '$6.25',
  },
];

const ReferralBonus = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ff512f] to-[#f09819] p-4 md:p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold text-white mb-16 text-center">Commissions</h1>

      {/* Filter Section */}
      <div className="bg-[#212529] rounded-lg shadow p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
          <div>
            <label className="block text-xl font-medium text-[#6478A5] mb-1">TRX/Username</label>
            <input
              type="text"
              placeholder="Enter TRX ID or Username"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none bg-white text-black"
            />
          </div>
          <div>
            <label className="block text-xl font-medium text-[#6478A5] mb-1">Remark</label>
            <select className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none bg-white text-black">
              <option value="">Any</option>
            </select>
          </div>
          <div>
            <label className="block text-xl font-medium text-[#6478A5] mb-1">Levels</label>
            <select className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none bg-white text-black">
              <option value="">Any</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-[50%] cursor-pointer text-white text-sx font-semibold py-3 px-4 rounded-lg transition flex items-center justify-center 
              bg-gradient-to-b from-[#F1A1B1] to-[#F8CFD7] 
              hover:from-[#F8CFD7] hover:to-[#F1A1B1]">
              <FiSearch className="mr-3" />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-orange-500 text-white rounded-t-md text-sm md:text-base">
          <thead>
            <tr className="bg-[#FD7E14]">
              <th className="px-4 py-2 text-left text-nowrap">Transaction</th>
              <th className="px-4 py-2 text-left text-nowrap">Commission From</th>
              <th className="px-4 py-2 text-left text-nowrap">Commission Level</th>
              <th className="px-4 py-2 text-left text-nowrap">Amount</th>
            </tr>
          </thead>
          <tbody>
            {commissionData.length > 0 ? (
              commissionData.map((item, index) => (
                <tr key={index} className="bg-[#212529] text-left hover:bg-[#1f1f1f]">
                  <td className="px-4 py-2 text-nowrap">{item.transaction}</td>
                  <td className="px-4 py-2 text-nowrap">{item.from}</td>
                  <td className="px-4 py-2 text-nowrap">{item.level}</td>
                  <td className="px-4 py-2 text-nowrap">{item.amount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-4 text-white">
                  Data not found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReferralBonus;
