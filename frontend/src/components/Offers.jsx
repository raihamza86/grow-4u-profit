import { FaCheckCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { MdArrowOutward } from "react-icons/md";


// Plan data
const plans = [
  { amount: 325, profit: 70, total: 6300, name: 'VIP 1' },
  { amount: 1100, profit: 150, total: 13500, name: 'VIP 2' },
  { amount: 2200, profit: 300, total: 27000, name: 'VIP 3' },
  { amount: 4400, profit: 600, total: 54000, name: 'VIP 4' },
  { amount: 8800, profit: 1200, total: 108000, name: 'VIP 5' },
  { amount: 17600, profit: 2500, total: 225000, name: 'VIP 6' },
  { amount: 35200, profit: 4960, total: 446400, name: 'VIP 7' },
  { amount: 66200, profit: 7500, total: 675000, name: 'VIP 8' },
  { amount: 91200, profit: 11200, total: 1008000, name: 'VIP 9' },
  { amount: 165500, profit: 20400, total: 1836000, name: 'VIP 10' },
  { amount: 200000, profit: 25000, total: 2250000, name: 'VIP 11' },
  { amount: 250000, profit: 30000, total: 2700000, name: 'VIP 12' },
];

// Background gradients
const gradients = [
  'from-[#052c65] via-white to-pink-500',
  'from-[#664d03] via-white to-yellow-500',
  'from-[#055160] via-white to-pink-500',
  'from-[#58151c] via-white to-yellow-500',
  'from-[#2b2f32] via-white to-green-500',
  'from-[#cfe2ff] via-white to-indigo-500',
];

// 💡 Color cycling box
const ColorCyclingBox = ({ amount }) => {
  const styles = [
    { bg: '#23BABF', text: '#FFFFFF' },
    { bg: '#020842', text: '#FFFFFF' },
    { bg: '#F44380', text: '#FFFFFF' },
    { bg: '#E3F0FF', text: '#020842' },
    { bg: '#dc3545', text: '#FFFFFF' },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % styles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentStyle = styles[index];

  return (
    <div
      className="py-10 px-8 rounded-lg lg:text-5xl md:text-4xl text-3xl font-bold text-center text-nowrap transition-all duration-1000"
      style={{ backgroundColor: currentStyle.bg, color: currentStyle.text }}
    >
      Rs {amount}
      <div className="text-xs font-medium">Plan Amount</div>
    </div>
  );
};

// 💡 Main component
export default function PricingSection() {
  const [gradientIndex, setGradientIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prev) => (prev + 1) % gradients.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#E3F0FF] pb-16">
      <div className="py-3 px-4 flex flex-col justify-center items-center">
        <div className="flex gap-1 text-center mt-2">
          <span className="text-2xl text-[#020842]">Our</span>
          <div className="bg-pink-500 text-white px-2 rounded-[3px] text-2xl">pricing😍</div>
        </div>

        <h2 className="text-2xl md:text-5xl font-bold text-center mt-6 text-[#020842]">
          Best Plan for Business
        </h2>

        <button className="flex items-center gap-2 bg-white border-6 border-[#CCE3FF] py-2 px-6 rounded-full mt-3">
          <span className="font-bold text-lg">MP</span>
          <span className="bg-red-500 text-white text-sm rounded-full px-2 py-0.5">Plans</span>
        </button>

        <div className="grid gap-8 mt-12 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-lg p-5 relative flex flex-col gap-4 pb-10 
                bg-gradient-to-tr ${gradients[gradientIndex]} transition-all duration-1000`}
            >
              <div className="flex items-center md:flex-row flex-col-reverse mt-12 gap-4">
                <ColorCyclingBox amount={plan.amount} />
                <div>
                  <h3 className="text-2xl font-bold text-[#020842]">{plan.name}</h3>
                  <p className="text-lg text-[#020842] max-w-[80%] p-2">
                    جیسے ہی اپنا پلان ایکٹو کرو گے فردی اگر منافع مل جائے گا جیسے آپ جوائن اور ادائیگی سب سسٹم میں نکل سکتے ہیں
                  </p>
                </div>
              </div>

              <div className="mt-8 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3">
                <div className="flex flex-col gap-3">
                  <p className="flex items-center"><FaCheckCircle className="mr-2" /> Daily Profit</p>
                  <p className="ml-6"><sup>Pkr.</sup> <strong>{plan.profit} Every Day</strong></p>
                  <p className="flex items-center"><FaCheckCircle className="mr-2" /> Plan Valid - 90 Days</p>
                  <p className="flex items-center"><FaCheckCircle className="mr-2" /> Daily Task - 1TASK</p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="flex items-center"><FaCheckCircle className="mr-2" /> Refer Bonus Level 1 - 12%</p>
                  <p className="flex items-center"><FaCheckCircle className="mr-2" /> Refer Bonus Level 2 - 4%</p>
                  <p className="flex items-center"><FaCheckCircle className="mr-2" /> Total Profit {plan.total} Pkr</p>
                </div>
              </div>

              <button
  className="mt-6 md:w-[40%] p-5 rounded-full font-semibold text-[#020842] shadow 
    bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 
    animate-pulse cursor-pointer text-lg md:text-xl border border-white flex items-center justify-center gap-2"
>
  PURCHASE NOW <span><MdArrowOutward /></span>
</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
