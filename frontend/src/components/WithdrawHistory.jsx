import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const sampleData = [
  {
    gateway: "JazzCash | TXN123456",
    initiated: "2025-05-01",
    amount: "$100",
    conversion: "PKR 28,000",
    status: "Pending",
    action: "View"
  },
  {
    gateway: "EasyPaisa | TXN789101",
    initiated: "2025-04-25",
    amount: "$50",
    conversion: "PKR 14,000",
    status: "Completed",
    action: "View"
  },
  {
    gateway: "Bank Transfer | TXN112233",
    initiated: "2025-03-20",
    amount: "$150",
    conversion: "PKR 42,000",
    status: "Failed",
    action: "Retry"
  },
];

const WithdrawHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = sampleData.filter((item) =>
    item.gateway.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.transaction?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-400 to-orange-500 p-4 md:p-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Withdraw History</h1>
      </div>

      {/* Search Bar */}
<div className="relative mb-6 w-full max-w-md">
  <input
    type="text"
    placeholder="Search by transaction, gateway, status"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full pl-10 pr-4 py-2 border-2 rounded-lg text-white bg-transparent placeholder-white
               border-t-[#FFCAAD] border-r-[#FFCAAD] border-b-[#FFEBAC] border-l-[#FFEBAC] focus:outline-none"
  />
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <FiSearch className="text-white" />
  </div>
</div>


      {/* Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-orange-500 text-white rounded-t-md text-sm md:text-base">
          <thead>
            <tr className="bg-[#FD7E14]">
              <th className="px-4 py-2 text-left">Gateway | Transaction</th>
              <th className="px-4 py-2 text-left">Initiated</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">Conversion</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index} className="bg-[#212529] text-left">
                  <td className="px-4 py-2">{item.gateway}</td>
                  <td className="px-4 py-2">{item.initiated}</td>
                  <td className="px-4 py-2">{item.amount}</td>
                  <td className="px-4 py-2">{item.conversion}</td>
                  <td className="px-4 py-2">{item.status}</td>
                  <td className="px-4 py-2 underline cursor-pointer hover:text-orange-300">{item.action}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-4 text-center text-white" colSpan="6">
                  No matching records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WithdrawHistory;
