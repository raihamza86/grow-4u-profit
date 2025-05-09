import React from 'react';
import BackButton from '../BackButton';

const Task = () => {
  const tags = [
    { reward: "Rs4,960.00", duration: "2s" },
    { reward: "Rs18,200.00", duration: "2s" },
    { reward: "Rs310.00", duration: "2s" },
    { reward: "Rs11,200.00", duration: "2s" },
    { reward: "Rs70.00", duration: "2s" },
    { reward: "Rs2,480.00", duration: "2s" },
    { reward: "Rs320.00", duration: "2s" },
    { reward: "Rs150.00", duration: "2s" },
    { reward: "Rs7,500.00", duration: "2s" },
    { reward: "Rs1,240.00", duration: "2s" },
  ];

  return (
    <div className="bg-gradient-to-b from-[#ff512f] to-[#f09819]">
      {/* Header Section */}
      <div className="flex items-center justify-between px-10 md:px-20 py-5">
        <div>
          <h2 className="text-2xl text-white font-bold">All Task</h2>
          <p className="text-sx mt-3 text-white font-semibold">
            Complete a task to make money.
          </p>
          <div>
          <BackButton/>
          <link rel="stylesheet" href="/dashboard" />
          </div>
           </div>
        
        <div>
          <img src="/public/dollar-car.png" alt="Dollar illustration" className="w-[120px]" />
        </div>
      </div>

      {/* Section Two */}
      <div className="bg-[#212529]">
        <div className="flex flex-col md:flex-row  items-center text-white px-10 md:px-20 py-6 border-b border-[#ccc] gap-4 text-center md:text-left">
          <p className='font-semibold text-sx'>
            آج جس وقت پر آپ نے ایڈ دیکھ کر اسکا منافع لیا ہوگا کل اسی وقت آُپکو دوبارہ ایڈ دیکھ کر اسکا منافع کمانا ہوگا
          </p>
         <p>
            اگر ایڈ نہیں آیا تو کل جس وقت پر دیکھا تھا اس وقت کا انتظار کریں
            </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-8 px-10 md:px-20 py-20">
          {tags.map((item, index) => (
            <div key={index} className="flex flex-col items-center ">
              <img src="/public/tag.png" className="w-[90px] mb-2" alt={`Reward tag ${index + 1}`} />
              <p className="text-white text-[15px] font-medium mb-1">Reward: {item.reward}</p>
              <p className="text-white text-[13px] font-medium mb-2">Duration: {item.duration}</p>
              <button className="text-white hover:bg-gray-600 border-2 border-white rounded-full px-4 py-1 text-sm transition duration-200 cursor-pointer">
                View Ad
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
