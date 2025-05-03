import { GoArrowUpRight } from "react-icons/go";
const Offers = () => {
  let offers = [
    {
      price: "Rs 325",
      vip: "VIP 1",
    },
    {
      price: "Rs 325",
      vip: "VIP 2",
    },
    {
      price: "Rs 325",
      vip: "VIP 3",
    },
    {
      price: "Rs 325",
      vip: "VIP 4",
    },
    {
      price: "Rs 325",
      vip: "VIP 5",
    },
    {
      price: "Rs 325",
      vip: "VIP 6",
    },
    {
      price: "Rs 325",
      vip: "VIP 7",
    },
    {
      price: "Rs 325",
      vip: "VIP 8",
    },
    {
      price: "Rs 325",
      vip: "VIP 9",
    },
    {
      price: "Rs 325",
      vip: "VIP 10",
    },
    {
      price: "Rs 325",
      vip: "VIP 11",
    },
    {
      price: "Rs 325",
      vip: "VIP 12",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1440px] mx-auto px-4 py-10">
      {offers.map((card, i) => (
        <div
          key={i}
          className="bg-[linear-gradient(45deg,_#4CAF50,_#CDDC39,_#ffffff,_#ffffff,_#ffffff,_#ffffff,_#5A71F1,_#439EFF)] p-10 rounded-xl text-black flex flex-col gap-6"
        >
          <div className="flex justify-between lg:flex-row flex-col items-start gap-10 ">
            <div className="bg-[#CDDC39] rounded-2xl py-[34px] px-[15px] w-full items-center flex items-center flex-col">
              <p className=" font-bold text-[30px] sm:text-[50px]">{card.price}</p>
              <p className="text-sm mt-1">Plan Amount</p>
            </div>

            {/* VIP Info */}
            <div className="max-w-sm">
              <h2 className="text-[26px] font-bold">{card.vip}</h2>
              <p className="text-[15px] mt-2">
                جیسے ہی اپنا پلان ایکٹو کرو گے تو فوری آپکو منافع مل جائے گا
                جیسے آپ جاز کیش اور ایزی پیسہ میں نکلوا سکتے ہیں
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="text-sm space-y-2">
              <p>
                <strong>Daily Profit:</strong> Pkr.70 Every Day
              </p>
              <p>
                <strong>Plan Valid:</strong> 90 Days
              </p>
              <p>
                <strong>Daily Task:</strong> 1 TASK
              </p>
            </div>

            <div className="text-sm space-y-2">
              <p>
                <strong>Refer Bonus Level 1:</strong> 12%
              </p>
              <p>
                <strong>Refer Bonus Level 2:</strong> 4%
              </p>
              <p>
                <strong>Total Profit:</strong> 6300 Pkr
              </p>
            </div>
          </div>

          <div className="mt-6">
            <button className="text-white px-6 py-4 w-[200px] rounded-lg flex items-center justify-around font-semibold transition hover:opacity-90 bg-[linear-gradient(45deg,_#4CAF50,_#4CAF50,_#4CAF50,_#009688,_#4CAF50,_#4CAF50,_#5A71F1,_#439EFF)]">
              Purchase Now <GoArrowUpRight />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offers;
