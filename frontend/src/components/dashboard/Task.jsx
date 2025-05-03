const Task = () => {
  const tags = [
    {
      reward: "Rs4,960.00",
      duration: "2s",
    },
    {
      reward: "Rs18,200.00",
      duration: "2s",
    },
    {
      reward: " Rs310.00",
      duration: "2s",
    },
    {
      reward: "Rs11,200.00",
      duration: "2s",
    },
    {
      reward: " Rs70.00",
      duration: "2s",
    },
    {
      reward: "Rs2,480.00",
      duration: "2s",
    },
    {
      reward: "Rs320.00",
      duration: "2s",
    },
    {
      reward: "Rs150.00",
      duration: "2s",
    },
    {
      reward: "Rs7,500.00",
      duration: "2s",
    },
    {
      reward: " Rs1,240.00",
      duration: "2s",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-between px-20">
        <div>
          <h2>All Task</h2>
          <p>Complete a task to make money.</p>
        </div>
        <div>
          <img src="/public/dollar-car.png" alt="" />
        </div>
      </div>
      <div className="bg-black">
        <div className="flex px-20 border-b-1 border-[#ccc] py-6 items-center justify-between  text-white">
          <p>
            آج جس وقت پر آپ نے ایڈ دیکھ کر اسکا منافع لیا ہوگا کل اسی وقت آُپکو
            دوبارہ ایڈ دیکھ کر اسکا منافع کمانا ہوگا
          </p>
          <p>
            اگر ایڈ نہیں آیا تو کل جس وقت پر دیکھا تھا اس وقت کا انتظار کریں
          </p>
        </div>

        <div className="flex px-20 mt-1.5 flex-wrap w-[78%] m-auto gap-[60px] py-20">
          {tags.map((item, index) => {
            return (
              <div key={index} className="flex items-center flex-col">
                <img src="/public/tag.png" className="w-[50px]" alt="" />
                <p className="text-white text-[11px] font-medium">
                  Reward: {item.reward}
                </p>
                <p className="text-white text-[11px] font-medium">
                  Duration: {item.duration}
                </p>
                <button className="text-white border-2 cursor-pointer border-white rounded-4xl px-[10px] mt-2">
                  View Ad
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Task;
