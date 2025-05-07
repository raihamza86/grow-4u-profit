import React from "react";
import Hero from "../components/developer/Hero";

const Developer = () => {
  return (
    <div>
      <Hero />
      <a
        href="https://api.whatsapp.com/send/?phone=%2B92&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        Chat on WhatsApp
      </a>
    </div>
  );
};

export default Developer;
