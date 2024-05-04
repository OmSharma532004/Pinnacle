import React from 'react';

const ItemDialog = ({ isOpen, onClose, items, onItemSelect, color }) => {
  if (!isOpen) return null;

  const bgColor = `bg-${color}`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center px-4 animate-fade-in">
      <div className={`rounded-lg p-6 bg-white text-black space-y-4 transition duration-500 ease-in-out`}>
        <h3 className="text-xl font-semibold">Select an Item</h3>
        {items.map(item => (
          <div key={item.id} className="hover:bg-gray-700 hover:text-white p-2 rounded cursor-pointer"
               onClick={() => { onItemSelect(item); onClose(); }}>
            {item.name} - ${item.price}
          </div>
        ))}
        <button onClick={onClose} className="mt-4 py-2 px-4 bg-black text-white rounded hover:bg-gray-700 transition-colors">
          Close
        </button>
      </div>
    </div>
  );
};

export default ItemDialog;
