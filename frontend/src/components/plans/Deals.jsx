import React from 'react';
import BackButton from '../BackButton';

const Card = ({ title, price, validity, dailyTask, taskRate, dailyEarning, totalEarning, withdrawLimit, referrerBonus }) => {
    return (
        <div className="bg-[#212529] shadow-lg overflow-hidden w-full max-w-sm">
            {/* Title Section with Gradient Background */}
            <div className="bg-gradient-to-r from-[#F4B9C5] to-[#E8657F] p-6 text-center">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
            </div>

            {/* Price Button */}
            <div className="flex justify-center my-4 -mt-4">
                <button className="bg-[#212529] text-white border border-white px-16 py-3 rounded-lg text-2xl font-bold">
                    Rs. {price}
                </button>
            </div>

            {/* Features Section with Gradient BG */}
            <div className="bg-gradient-to-b from-[#FDAA0F] to-[#F6612B] text-black rounded-md mx-auto max-w-[90%] px-4 py-4 space-y-1 mb-4">
                <div className="flex justify-between items-center px-4 py-2 text-sm font-semibold border-b border-black">
                    <span>VALIDITY</span>
                    <span>{validity}</span>
                </div>
                <div className="flex justify-between items-center px-4 py-2 text-sm font-semibold border-b border-black">
                    <span>Daily Task</span>
                    <span>{dailyTask}</span>
                </div>
                <div className="flex justify-between items-center px-4 py-2 text-sm font-semibold border-b border-black">
                    <span>Task Rate</span>
                    <span>{taskRate} Pkr</span>
                </div>
                <div className="flex justify-between items-center px-4 py-2 text-sm font-semibold border-b border-black">
                    <span>Daily Earning</span>
                    <span>{dailyEarning} Pkr</span>
                </div>
                <div className="flex justify-between items-center px-4 py-2 text-sm font-semibold border-b border-black">
                    <span>Total Earning</span>
                    <span>{totalEarning} Pkr</span>
                </div>
                <div className="flex justify-between items-center px-4 py-2 text-sm font-semibold border-b border-black">
                    <span>Withdraw Limit</span>
                    <span>{withdrawLimit}</span>
                </div>
            </div>

            {/* Referrer Bonus Section */}
            <h4 className="text-center text-white mb-2">Referrer Bonus</h4>
            <div className="text-sm text-black bg-gradient-to-b from-[#FDAA0F] to-[#F6612B] rounded-md p-4 mb-4 mx-auto max-w-[90%]">
                <p><strong>Type:</strong> {referrerBonus.type}</p>
                <p><strong>Levels:</strong></p>
                <ul className="list-disc list-inside">
                    {referrerBonus.levels.map((level, index) => (
                        <li key={index}>{level.name} - {level.percentage}%</li>
                    ))}
                </ul>
            </div>

            {/* Buy Now Button */}
            <button className="block mx-auto max-w-[90%] bg-gradient-to-b from-[#EC7F95] to-[#E2395A] hover:opacity-90 text-white font-bold py-2 px-6 rounded-full transition mb-6 cursor-pointer">
                Buy Now
            </button>
        </div>
    );
};

const Deals = () => {
    const plans = [
        // Existing Plans
        {
            title: "VIP 1",
            price: "325",
            validity: "90 Days",
            dailyTask: "1 TASK",
            taskRate: "70",
            dailyEarning: "70",
            totalEarning: "6300",
            withdrawLimit: "Min: Rs50 , Max: Rs500000000",
            referrerBonus: {
                type: "PTC view commission",
                levels: [
                    { name: "Level 1", percentage: 12 },
                    { name: "Level 2", percentage: 4 }
                ]
            }
        },
        {
            title: "VIP 2",
            price: "1100",
            validity: "90 Days",
            dailyTask: "1 TASK",
            taskRate: "150",
            dailyEarning: "150",
            totalEarning: "13500",
            withdrawLimit: "Min: Rs50 , Max: Rs500000000",
            referrerBonus: {
                type: "PTC view commission",
                levels: [
                    { name: "Level 1", percentage: 12 },
                    { name: "Level 2", percentage: 4 }
                ]
            }
        },
        {
            title: "VIP 3",
            price: "2200",
            validity: "90 Days",
            dailyTask: "1 TASK",
            taskRate: "310",
            dailyEarning: "310",
            totalEarning: "27900",
            withdrawLimit: "Min: Rs50 , Max: Rs500000000",
            referrerBonus: {
                type: "PTC view commission",
                levels: [
                    { name: "Level 1", percentage: 12 },
                    { name: "Level 2", percentage: 4 }
                ]
            }
        },
        {
            title: "VIP 4",
            price: "4400",
            validity: "90 Days",
            dailyTask: "1 TASK",
            taskRate: "320",
            dailyEarning: "320",
            totalEarning: "28800",
            withdrawLimit: "Min: Rs50 , Max: Rs500000000",
            referrerBonus: {
                type: "PTC view commission",
                levels: [
                    { name: "Level 1", percentage: 12 },
                    { name: "Level 2", percentage: 4 }
                ]
            }
        },
        // New Plans
        {
            title: "VIP 5",
            price: "5000",
            validity: "90 Days",
            dailyTask: "1 TASK",
            taskRate: "400",
            dailyEarning: "400",
            totalEarning: "36000",
            withdrawLimit: "Min: Rs50 , Max: Rs500000000",
            referrerBonus: {
                type: "PTC view commission",
                levels: [
                    { name: "Level 1", percentage: 15 },
                    { name: "Level 2", percentage: 5 }
                ]
            }
        },
        {
            title: "VIP 6",
            price: "7000",
            validity: "90 Days",
            dailyTask: "1 TASK",
            taskRate: "500",
            dailyEarning: "500",
            totalEarning: "45000",
            withdrawLimit: "Min: Rs50 , Max: Rs500000000",
            referrerBonus: {
                type: "PTC view commission",
                levels: [
                    { name: "Level 1", percentage: 15 },
                    { name: "Level 2", percentage: 5 }
                ]
            }
        },
        {
            title: "VIP 7",
            price: "9000",
            validity: "90 Days",
            dailyTask: "1 TASK",
            taskRate: "600",
            dailyEarning: "600",
            totalEarning: "54000",
            withdrawLimit: "Min: Rs50 , Max: Rs500000000",
            referrerBonus: {
                type: "PTC view commission",
                levels: [
                    { name: "Level 1", percentage: 15 },
                    { name: "Level 2", percentage: 5 }
                ]
            }
        },
        {
            title: "VIP 8",
            price: "11000",
            validity: "90 Days",
            dailyTask: "1 TASK",
            taskRate: "700",
            dailyEarning: "700",
            totalEarning: "63000",
            withdrawLimit: "Min: Rs50 , Max: Rs500000000",
            referrerBonus: {
                type: "PTC view commission",
                levels: [
                    { name: "Level 1", percentage: 15 },
                    { name: "Level 2", percentage: 5 }
                ]
            }
        },
        {
            title: "VIP 9",
            price: "13000",
            validity: "90 Days",
            dailyTask: "1 TASK",
            taskRate: "800",
            dailyEarning: "800",
            totalEarning: "72000",
            withdrawLimit: "Min: Rs50 , Max: Rs500000000",
            referrerBonus: {
                type: "PTC view commission",
                levels: [
                    { name: "Level 1", percentage: 15 },
                    { name: "Level 2", percentage: 5 }
                ]
            }
        },
        {
            title: "VIP 10",
            price: "15000",
            validity: "90 Days",
            dailyTask: "1 TASK",
            taskRate: "900",
            dailyEarning: "900",
            totalEarning: "81000",
            withdrawLimit: "Min: Rs50 , Max: Rs500000000",
            referrerBonus: {
                type: "PTC view commission",
                levels: [
                    { name: "Level 1", percentage: 15 },
                    { name: "Level 2", percentage: 5 }
                ]
            }
        },
        {
            title: "VIP 11",
            price: "17000",
            validity: "90 Days",
            dailyTask: "1 TASK",
            taskRate: "1000",
            dailyEarning: "1000",
            totalEarning: "90000",
            withdrawLimit: "Min: Rs50 , Max: Rs500000000",
            referrerBonus: {
                type: "PTC view commission",
                levels: [
                    { name: "Level 1", percentage: 15 },
                    { name: "Level 2", percentage: 5 }
                ]
            }
        },
        {
            title: "VIP 12",
            price: "19000",
            validity: "90 Days",
            dailyTask: "1 TASK",
            taskRate: "1100",
            dailyEarning: "1100",
            totalEarning: "99000",
            withdrawLimit: "Min: Rs50 , Max: Rs500000000",
            referrerBonus: {
                type: "PTC view commission",
                levels: [
                    { name: "Level 1", percentage: 15 },
                    { name: "Level 2", percentage: 5 }
                ]
            }
        }
    ];

    return (
        <>
               
            <div className="bg-[#FEB30C] py-12 px-4 sm:px-8 lg:px-16">
            <div className='mx-auto bg-body bg-[#FEB30C]  text-2xl font-bold text-green-500 hover:text-blue-500 transition pt-3'>
                    <BackButton  />
                </div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {plans.map((plan, index) => (
                        <Card key={index} {...plan} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Deals;