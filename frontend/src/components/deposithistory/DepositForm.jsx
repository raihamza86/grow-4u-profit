import React from 'react';
import BackButton from '../BackButton';

const DepositForm = () => {
  const sampleData = [
    {
      gateway: "JazzCash | #TX123",
      initiated: "2025-05-01",
      amount: "$100",
      conversion: "PKR 28,000",
      status: "Success",
      details: "View",
    },
    {
      gateway: "EasyPaisa | #TX124",
      initiated: "2025-05-02",
      amount: "$200",
      conversion: "PKR 56,000",
      status: "Pending",
      details: "View",
    },
    {
      gateway: "Bank | #TX125",
      initiated: "2025-05-03",
      amount: "$150",
      conversion: "PKR 42,000",
      status: "Failed",
      details: "View",
    },
    {
      gateway: "PayPal | #TX126",
      initiated: "2025-05-04",
      amount: "$250",
      conversion: "PKR 70,000",
      status: "Success",
      details: "View",
    },
    {
      gateway: "Stripe | #TX127",
      initiated: "2025-05-05",
      amount: "$300",
      conversion: "PKR 84,000",
      status: "Pending",
      details: "View",
    },
  ];

  return (
    <div className=" bg-gradient-to-b from-yellow-400 via-orange-500 to-[#F54635] p-4 md:p-8 text-white">
    <div className="mx-auto max-w-7xl">
      <BackButton/>
      {/* Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-orange-500 text-white rounded-t-md text-sm md:text-base">
          <thead>
            <tr className="bg-[#FD7E14]">
              <th className="px-4 py-2 text-left text-nowrap">Gateway | Transaction</th>
              <th className="px-4 py-2 text-left text-nowrap">Initiated</th>
              <th className="px-4 py-2 text-left text-nowrap">Amount</th>
              <th className="px-4 py-2 text-left text-nowrap">Conversion</th>
              <th className="px-4 py-2 text-left text-nowrap">Status</th>
              <th className="px-4 py-2 text-left text-nowrap">Details</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((item, index) => (
              <tr key={index} className="bg-[#212529] text-left">
                <td className="px-4 py-2 text-nowrap">{item.gateway}</td>
                <td className="px-4 py-2 text-nowrap">{item.initiated}</td>
                <td className="px-4 py-2 text-nowrap">{item.amount}</td>
                <td className="px-4 py-2 text-nowrap">{item.conversion}</td>
                <td className="px-4 py-2 text-nowrap">{item.status}</td>
                <td className="px-4 py-2 underline cursor-pointer hover:text-orange-300 text-nowrap">{item.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default DepositForm;
