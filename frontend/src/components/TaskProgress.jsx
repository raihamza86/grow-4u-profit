import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TaskProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = 20;
    const increment = 100 / (2000 / interval); // 2 seconds to 100%

    const timer = setInterval(() => {
      start += increment;
      if (start >= 100) {
        start = 100;
        clearInterval(timer);
      }
      setProgress(Math.round(start));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Background Container */}
      <div className="bg-gradient-to-b from-yellow-400 to-orange-500 py-12 px-4">
        <div className="max-w-md mx-auto text-center">
          {/* Progress Bar */}
          <div className="relative mb-4 w-full bg-gray-300 rounded-full h-6 overflow-hidden">
            <div
              className="bg-gradient-to-r from-orange-700 to-yellow-600 h-full flex items-center justify-center text-white text-sm font-bold transition-all duration-100"
              style={{ width: `${progress}%` }}
            >
              {progress}%
            </div>
          </div>

          {/* Progress Text */}
          <p className="mb-4 font-medium text-white">Progress: {progress}%</p>

          {/* Action Button */}
          {progress < 100 ? (
            <button
              disabled
              className="bg-pink-500 text-white font-bold py-2 px-6 rounded-full cursor-pointer"
            >
              Loading Adds...
            </button>
          ) : (
            <Link to="/tasktwo" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 cursor-pointer rounded-full">
              Confirm Adds
            </Link>
          )}
        </div>
      </div>

      {/* Picture Section */}
      <div className="mt-6 px-4 max-w-2xl mx-auto">
        <img
          src="/Home/add.jpg"
          alt="add picture"
          className="w-full h-auto"
        />
      </div>
    </>
  );
};

export default TaskProgress;
