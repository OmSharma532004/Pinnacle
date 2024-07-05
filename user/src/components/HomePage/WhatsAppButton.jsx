import React from "react";
import whatsappLogo from './whatsapp-logo.svg'; // Add your WhatsApp logo here

const WhatsAppButton = () => {
  const handleWhatsAppLogin = () => {
    const phoneNumber = "8448830213";
    const message = "Hello, I would like to get in touch with you.";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  return (
    <button
      onClick={handleWhatsAppLogin}
      className="fixed bottom-[80px] right-4 bg-purple-800 text-white p-3 rounded-full shadow-lg hover:bg-green-700"
      style={{ zIndex: 1000 }}
    >
      <img src={whatsappLogo} alt="WhatsApp" className="w-8 h-8" />
    </button>
  );
};

export default WhatsAppButton;
