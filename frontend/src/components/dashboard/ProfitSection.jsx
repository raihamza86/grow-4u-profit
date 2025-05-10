import React from "react";
import { useNavigate } from "react-router-dom";

const ProfitSection = () => {
  const navigate = useNavigate();

  const images = [
    { src: "deposit.png", label: "Deposit", path: "/plans" },
    {
      src: "invite friend.png",
      label: "Invite Friend",
      path: "/referrallink",
    },
    { src: "withdraw.png", label: "Withdraw", path: "/withdraw" },
    { src: "task.png", label: "Task", path: "/task" },
    {
      src: "whatsapp group.png",
      label: "Whatsapp Group",
      path: "https://chat.whatsapp.com/EcivXLkcMIlFGqQi5LhpC7",
    },
    { src: "whatsapp.png", label: "Admin", path: "https://api.whatsapp.com/send/?phone=%2B9203497534369&text&type=phone_number&app_absent=0" },
    { src: "download.png", label: "Download", path: "https://grow-4u-profit.com/app.apk" },
    { src: "call.png", label: "Admin Call", path: "/admin-call" },
    { src: "logout.png", label: "Logout", path: "/logout" },
  ];

  const handleClick = (path) => {
    if (path.startsWith("http")) {
      window.open(path, "_blank");
    } else {
      navigate(path);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto text-white">
      <div className="grid grid-cols-3 w-full">
        {images.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item.path)}
            className="flex flex-col items-center justify-center w-full h-full py-8"
          >
            <div className="bg-[radial-gradient(circle,_#fceabb,_#f8b500)] p-[10px] rounded hover:cursor-pointer">
              <img
                src={item.src}
                alt={`item-${index}`}
                className="w-[40px] h-[40px] md:w-[70px] md:h-[70px] object-cover rounded-full"
              />
            </div>
            <p className="mt-2 text-white text-[15px] md:text-sx font-semibold text-center hover:cursor-pointer">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfitSection;
