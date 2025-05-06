import React from 'react';

const sampleData = [
  { date: '2025-05-01', totalclick: 120, totalearn: '$15.00' },
  { date: '2025-05-02', totalclick: 95, totalearn: '$11.40' },
  { date: '2025-05-03', totalclick: 143, totalearn: '$18.75' },
  { date: '2025-05-04', totalclick: 88, totalearn: '$9.80' },
  { date: '2025-05-05', totalclick: 100, totalearn: '$12.50' },
];

const TaskHistory = () => {
  return (
    <div className=" bg-gradient-to-b from-yellow-400 via-orange-500 to-[#F54635] p-4 md:p-8 text-white">
      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-orange-500 text-white rounded-t-md text-sm md:text-base">
          <thead>
            <tr className="bg-[#FD7E14]">
              <th className="px-4 py-2 text-left text-nowrap">Date</th>
              <th className="px-4 py-2 text-left text-nowrap">Total Click</th>
              <th className="px-4 py-2 text-left text-nowrap">Total Earn</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((item, index) => (
              <tr key={index} className="bg-[#212529] text-left">
                <td className="px-4 py-2 text-nowrap">{item.date}</td>
                <td className="px-4 py-2 text-nowrap">{item.totalclick}</td>
                <td className="px-4 py-2 text-nowrap">{item.totalearn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default TaskHistory;
