const PriceSection = () => {
  const total = [
    { heading: "Total Deposit", price: "Pkr 0.00" },
    { heading: "Total Withdraw", price: "Pkr 0.00" },
    { heading: "Total Investment", price: "Pkr 0.00" },
    { heading: "Total Refer Bonus", price: "Pkr 0.00" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 w-full max-w-[1440px] mx-auto gap-4 py-6">
      {total.map((item, index) => (
        <div
          key={index}
          className="bg-[radial-gradient(circle,#FFC107,_#6dd5ed)] rounded-xl p-4 flex flex-col"
        >
          <p className="text-white text-lg font-semibold">{item.heading}</p>
          <p className="text-white text-xl font-bold">{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default PriceSection;
