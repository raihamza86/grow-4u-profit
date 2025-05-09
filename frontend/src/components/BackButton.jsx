import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = ({ showDashNav  }) => {
  const navigate = useNavigate();

  const MovetoDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div
      className="text-green-500 text-xl hover:text-blue-500 font-bold mt-5 cursor-pointer"
      onClick={() => {
        showDashNav();  
        MovetoDashboard();      
      }}
    >
      Back Now
    </div>
  );
};


export default BackButton;
