import React from "react";

const ProfitSection = () => {
  const images = [
    { src: "deposit.png", label: "Deposit" },
    { src: "invite friend.png", label: "Invite Friend" },
    { src: "withdraw.png", label: "Withdraw" },
    { src: "task.png", label: "Task" },
    { src: "whatsapp group.png", label: "Whatsapp Group" },
    { src: "whatsapp.png", label: "Admin" },
    { src: "download.png", label: "Download" },
    { src: "call.png", label: "Admin Call" },
    { src: "logout.png", label: "Logout" },
  ];
  return (
    <div className="w-full text-white">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {images.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full h-full py-8"
          >
            <div className="bg-[radial-gradient(circle,_#fceabb,_#f8b500)] p-[10px] rounded">
              <img
                src={item.src}
                alt={`item-${index}`}
                className="w-[70px] h-[70px] object-cover rounded-full"
              />
            </div>
            <p className="mt-2 text-white font-semibold text-center">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfitSection;
