import React, { useState, useEffect } from 'react';
import CategoryCard from './CategoryCard';
import ItemDialog from './ItemDialog';
import AnimatedCard from '../components/Estimate/animatedCard';

const colorPalette = ["#3b327f", "#d6cdce", "#8c54fb", "#7758b4", "#664ca7", "#141c5c", "#0c1653", "#9b9dbc", "#6b6d9b"];


const categories = {
    Cement: {
      id: 'cement',
      items: [
        { id: '1', name: 'ACC Concrete', price: 100, brand: 'ACC' },
        { id: '2', name: 'Dalmia DSP', price: 150, brand: 'Dalmia' },
        { id: '3', name: 'UltraTech Premium', price: 120, brand: 'UltraTech' },
        { id: '4', name: 'Ambuja Plus', price: 130, brand: 'Ambuja' }
      ],
      color: 'bg-bright-purple'
    },
    Steel: {
      id: 'steel',
      items: [
        { id: '5', name: 'Tata Tiscon', price: 200, brand: 'Tata' },
        { id: '6', name: 'JSW Neosteel', price: 250, brand: 'JSW' },
        { id: '7', name: 'Kamdhenu Next', price: 220, brand: 'Kamdhenu' }
      ],
      color: 'bg-dark-purple'
    },
    Wood: {
      id: 'wood',
      items: [
        { id: '8', name: 'Teak Wood', price: 500, brand: 'Burmese' },
        { id: '9', name: 'Red Cedar', price: 350, brand: 'Western' },
        { id: '10', name: 'Mahogany', price: 400, brand: 'African' }
      ],
      color: 'bg-green-500'
    },
    Paint: {
      id: 'paint',
      items: [
        { id: '11', name: 'Asian Paints Royale', price: 300, brand: 'Asian Paints' },
        { id: '12', name: 'Berger Easy Clean', price: 250, brand: 'Berger' },
        { id: '13', name: 'Dulux Velvet Touch', price: 350, brand: 'Dulux' }
      ],
      color: 'bg-blue-500'
    },
    Wire: {
        id: 'wire',
        items: [
          { id: '14', name: 'xys', price: 80, brand: 'Generic' },
          { id: '15', name: 'ABS', price: 100, brand: 'Generic' },
          { id: '16', name: 'ABH', price: 120, brand: 'Generic' },
        ],
        color: 'bg-red-500' // Assign a relevant Tailwind CSS color class
      },
      Switch: {
        id: 'switch',
        items: [
          { id: '17', name: 'XYZ', price: 1000, brand: 'Generic' },
          { id: '18', name: 'ABC', price: 1500, brand: 'Generic' },
        ],
        color: 'bg-green-500' // Assign a relevant Tailwind CSS color class
      },
      UPS_Wiring: {
        id: 'ups_wiring',
        items: [
          { id: '19', name: 'Any', price: 1000, brand: 'Generic' },
          { id: '20', name: 'Any2', price: 1500, brand: 'Generic' },
          { id: '21', name: 'Tata', price: 2000, brand: 'Tata' },
        ],
        color: 'bg-blue-500' // Assign a relevant Tailwind CSS color class
      }
    
  };
  
  const Estimate2 = () => {
    const [selectedItems, setSelectedItems] = useState({});
    const [finalCost, setFinalCost] = useState(0);
    const [currentCategory, setCurrentCategory] = useState(categories.Cement);

    const calculateFinalCost = (items) => {
        return Object.values(items).reduce((sum, item) => sum + (item.price || 0), 0);
    };

    const handleCardClick = (category) => {
        setCurrentCategory(category);
    };

    const handleAddToCart = (item) => {
        setSelectedItems(prevItems => {
            const updatedItems = { ...prevItems, [currentCategory.id]: item };
            const newFinalCost = calculateFinalCost(updatedItems);
            setFinalCost(newFinalCost);
            return updatedItems;
        });
    };
    const handleAddOrRemoveFromCart = (item) => {
      setSelectedItems(prevItems => {
          if (prevItems[currentCategory.id]?.id === item.id) {
              // If the item is already selected, remove it from the cart
              const updatedItems = { ...prevItems };
              delete updatedItems[currentCategory.id];
              const newFinalCost = calculateFinalCost(updatedItems);
              setFinalCost(newFinalCost);
              return updatedItems;
          } else {
              // Add the new item or replace the existing one in the same category
              const updatedItems = { ...prevItems, [currentCategory.id]: item };
              const newFinalCost = calculateFinalCost(updatedItems);
              setFinalCost(newFinalCost);
              return updatedItems;
          }
      });
  };

    const handleRemoveFromCart = (categoryId) => {
        setSelectedItems(prevItems => {
            const updatedItems = { ...prevItems };
            delete updatedItems[categoryId];
            const newFinalCost = calculateFinalCost(updatedItems);
            setFinalCost(newFinalCost);
            return updatedItems;
        });
    };

    return (
      <div className="flex w-screen min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
          {/* Left Section: Categories and Items */}
          <div className="w-[70%] p-8">
              <div className="text-center mb-12">
                  <h1 className="text-4xl font-bold text-gray-800">Construction Cost Estimator</h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {Object.values(categories).map((category, index) => (
                      <CategoryCard
                          key={category.id}
                          category={category}
                          onClick={() => handleCardClick(category)}
                          selectedItem={selectedItems[category.id]?.name || 'Select'}
                          color={colorPalette[index % colorPalette.length]}
                          price={selectedItems[category.id]?.price || 0}
                      />
                  ))}
              </div>

              {/* Item Display for Current Category */}
              {currentCategory && (
                  <div className="mt-8 p-4 rounded-lg shadow-md bg-white">
                      <h2 className="w-full font-semibold text-lg mb-4 text-gray-700">{currentCategory.id} Items:</h2>
                      <div className="flex items-center justify-center gap-4">
                          {currentCategory.items.map(item => (
                              <AnimatedCard
                                  key={item.id}
                                  item={item}
                                  isSelected={selectedItems[currentCategory.id]?.id === item.id}
                                  onAddOrRemove={handleAddOrRemoveFromCart}
                              />
                          ))}
                      </div>
                  </div>
              )}
          </div>

          {/* Right Section: Cart */}
          <div className="w-[30%] p-8 bg-white rounded-l-lg shadow-lg">
              <h2 className="font-semibold text-xl mb-4 text-gray-800">Cart</h2>
              <ul>
                  {Object.entries(selectedItems).map(([categoryId, item]) => (
                      <li key={categoryId} className="p-2 border rounded my-2 flex justify-between items-center">
                          {item.name} - ₹{item.price}
                          <button
                              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                              onClick={() => handleRemoveFromCart(categoryId)}
                          >
                              Remove
                          </button>
                      </li>
                  ))}
              </ul>
              <div className="mt-4 p-2 bg-white rounded shadow">
                  <h3 className="font-bold text-lg">Total Cost: ₹{finalCost}</h3>
              </div>
          </div>
      </div>
  );
};

export default Estimate2;