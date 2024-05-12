import React from 'react';

const CategoryCard = ({ category, onClick, selectedItem, price }) => {
  const bgColor = `bg-${category.color}`;

  return (
    <div
      className={`transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer shadow-lg rounded-xl p-6 bg-yellow-400 text-black`}
      onClick={onClick}
    >
      <h3 className="text-lg font-bold">{category.id}</h3>
      <p className="mt-1">Selected: {selectedItem}</p>
      <p className="mt-1">Price: ₹{price}</p>
    </div>
  );
};

export default CategoryCard;
