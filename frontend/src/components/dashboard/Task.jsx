import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Ensure Link is imported
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
    <div className="bg-gradient-to-b from-[#ff512f] to-[#f09819] min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-6">
        <div className="text-center md:text-left">
          <h2 className="text-3xl text-white font-bold">All Task</h2>
          <p className="text-sm mt-2 text-white font-medium">
            Complete a task to make money.
          </p>
          <div className="mt-4">
            <BackButton />
          </div>
        </div>

        <div className="mt-6 md:mt-0">
          <img src="/dollar-car.png" alt="Dollar illustration" className="w-[100px] md:w-[120px]" />
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-[#212529] text-white px-6 md:px-20 py-6 border-b border-[#ccc] text-center md:text-left">
        <div className="flex flex-col md:flex-row gap-6 mb-6 text-center md:text-left">
          <p className="font-semibold text-lg">
            آج جس وقت پر آپ نے ایڈ دیکھ کر اس کا منافع لیا ہوگا، کل اسی وقت آپ کو دوبارہ ایڈ دیکھ کر اس کا منافع کمانا ہوگا۔
          </p>
          <p className="text-lg">
            اگر ایڈ نہیں آیا تو کل جس وقت پر دیکھا تھا، اس وقت کا انتظار کریں۔
          </p>
        </div>
      </div>

      {/* Tasks Grid */}
      <div className="bg-[#212529] px-6 md:px-20 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {tags.map((item, index) => (
            <div key={index} className="flex flex-col items-center bg-[#2c2f33] p-4 rounded-xl shadow-md">
              <img src="/tag.png" className="w-[80px] mb-3" alt={`Reward tag ${index + 1}`} />
              <p className="text-white text-base font-medium mb-1 text-center">Reward: {item.reward}</p>
              <p className="text-white text-sm mb-3">Duration: {item.duration}</p>
              <Link
                to="/taskprogress"
                className="text-white border border-white px-4 py-1 rounded-full text-sm hover:bg-white hover:text-black transition"
              >
                View Ad
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
