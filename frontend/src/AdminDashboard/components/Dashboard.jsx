import React from 'react';

const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Total Users', 'Total Earnings', 'Pending Withdrawals'].map((item, i) => (
                <div key={i} className="p-6 rounded-xl shadow bg-gradient-to-b from-[#ff512f] to-[#f09819] text-white">
                    <h4 className="text-xl font-semibold">{item}</h4>
                    <p className="text-2xl mt-2">12345</p>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;
