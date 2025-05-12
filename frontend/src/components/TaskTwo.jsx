import { Link } from 'react-router-dom';
const TaskTwo = () => {
  return (
    <div className="bg-gradient-to-b from-[#ff512f] to-[#f09819] min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-6">
        <div className="text-center md:text-left">
          <h2 className="text-3xl text-white font-bold">All Tasks</h2>
          <p className="text-sm mt-2 text-white font-medium">
            Complete a task to make money.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <img
            src="/dollar-car.png"
            alt="Dollar and car illustration"
            className="w-[100px] md:w-[120px]"
          />
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-[#212529] text-white px-6 md:px-20 py-10 border-b border-[#ccc]">
        <div className="flex flex-col md:flex-row gap-6 mb-6 text-center md:text-left">
          <p className="font-semibold text-lg">
            آج جس وقت پر آپ نے ایڈ دیکھ کر اس کا منافع لیا ہوگا، کل اسی وقت آپ کو دوبارہ ایڈ دیکھ کر اس کا منافع کمانا ہوگا۔
          </p>
          <p className="text-lg">
            اگر ایڈ نہیں آیا تو کل جس وقت پر دیکھا تھا، اس وقت کا انتظار کریں۔
          </p>
        </div>

        {/* Styled Button */}
        <div className="text-center">
          <Link to="/dashboard" className="bg-gradient-to-br from-[#e61942] to-[#e64c6b] hover:from-[#e64c6b] hover:to-[#e61942] rounded-md text-white font-semibold px-10 py-3 transition duration-200 cursor-pointer">
            Data Not Found
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskTwo;
