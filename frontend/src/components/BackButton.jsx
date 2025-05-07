import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = ({ showDashNav  }) => {
  const navigate = useNavigate();

  const MovetoDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div
      className="text-green-500 text-2xl hover:text-blue-500 font-bold mb-8 cursor-pointer"
      onClick={() => {
        showDashNav();  // cleanly show right navbar again (or reset state)
        MovetoDashboard();      // then navigate
      }}
    >
      Back Now
    </div>
  );
};


export default BackButton;
