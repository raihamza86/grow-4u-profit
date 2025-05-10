const PriceSection = () => {
  const total = [
    { heading: "Total Deposit", price: "Pkr 0.00" },
    { heading: "Total Withdraw", price: "Pkr 0.00" },
    { heading: "Total Investment", price: "Pkr 0.00" },
    { heading: "Total Refer Bonus", price: "Pkr 0.00" },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 w-full max-w-6xl mx-auto gap-2 md:gap-4 py-6">
      {total.map((item, index) => (
        <div
          key={index}
          className="bg-[radial-gradient(circle,#FFC107,_#6dd5ed)] rounded-xl p-2 md:p-4 flex flex-col"
        >
          <p className="text-white text-[12px] md:text-lg font-semibold text-nowrap">{item.heading}</p>
          <p className="text-white text-[16px] md:text-xl font-bold text-nowrap">{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default PriceSection;
