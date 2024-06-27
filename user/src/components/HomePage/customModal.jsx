import React, { useEffect } from 'react';

const CustomModal = ({ isOpen, onClose, service }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50" 
      onClick={handleBackgroundClick}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <div className="bg-white p-4 flex flex-col items-center justify-center rounded-lg shadow-lg w-[70%] animate-modal-slide-up">
        <img 
          src={service.imgSrc} 
          alt={`Illustration for ${service.title}`} 
          className="w-[200px] h-auto rounded-lg" 
        />
        <h2 className="text-2xl mb-4">{service.title}</h2>
        <p className="mb-4">{service.description}</p>
        <p>{service.extraInfo}</p>
        {/* <button className="mt-4 p-2 bg-purple-900 text-white rounded" onClick={onClose}>
          Close
        </button> */}
      </div>
    </div>
  );
};

export default CustomModal;
