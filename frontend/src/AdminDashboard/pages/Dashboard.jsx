import React from 'react';
import DashboardStats from "../components/Dashboard";
import DashboardChart from "../components/DashboardChart";
import CategoryPieChart from '../components/CategoryPieChart';

const Dashboard = () => {
    return (
        <div className="md:pt-2 space-y-6 overflow-hidden">
             <DashboardStats />
            {/* <DashboardChart /> */}
            {/* <CategoryPieChart /> */}
        </div>
    );
};

export default Dashboard;
