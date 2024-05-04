import React, { useState, useEffect } from 'react';
import CategoryCard from './CategoryCard';
import ItemDialog from './ItemDialog';

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
    const [dialogOpen, setDialogOpen] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [dimensions, setDimensions] = useState(90);
    const [plot, setPlot] = useState({
        size: 947.22,
        Design:"3BHK",
    });
    const [estimate, setEstimate] = useState(4000000);
    useEffect(() => {
      const total = Object.values(selectedItems).reduce((sum, item) => sum + (item.price || 0), 0);
      setFinalCost(total);
    }, [selectedItems]);
  
    const handleCardClick = (category) => {
      setCurrentCategory(category);
      setDialogOpen(true);
    };
  
    const handleItemSelect = (item) => {
      setSelectedItems(prev => ({ ...prev, [currentCategory.id]: item }));
      setDialogOpen(false); // Close the dialog upon selection
    };
  
    return (
      <div className="flex flex-col items-center justify-center bg-gray-100 w-full min-h-screen py-10">
        <div className="container max-w-6xl mx-auto px-4">
            <div className=' mb-[100px]'>
            <h1 className=" text-5xl border-b-2 pb-4 font-semibold">
              Estimate
            </h1>
            <div className=" gap-[50px] flex items-center justify-center mt-[100px]">
              <div className=" p-2 font-extralight border-2 text-black bg-white  w-[200px] ">
                <h1 className=" text-sm">Plot Dimensions</h1>
                <p>{dimensions}</p>
              </div>
              <div className=" p-2 font-extralight border-2 text-black bg-white  w-[200px] ">
                <h1 className=" text-sm">Plot Details</h1>
                <p>
                  {plot.size}, {plot.Design}
                </p>
              </div>
              <div className=" p-2 font-extralight border-2 text-black bg-white  w-[200px] ">
                <h1 className=" text-sm">Estimate</h1>
                <p>{finalCost}</p>
              </div>
            </div>
            </div>
          <h1 className="text-5xl font-bold text-black mb-[50px] text-center">Construction Cost Estimator</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {Object.values(categories).map(category => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={() => handleCardClick(category)}
                selectedItem={selectedItems[category.id]?.name || 'Select'}
                price={selectedItems[category.id]?.price}
                color={category.color}
              />
            ))}
          </div>
          {currentCategory && (
            <ItemDialog
              isOpen={dialogOpen}
              onClose={() => setDialogOpen(false)}
              items={currentCategory.items}
              onItemSelect={handleItemSelect}
              color={currentCategory.color}
            />
          )}
          <div className="flex flex-col lg:flex-row justify-between items-center bg-white shadow-xl rounded-xl p-8 mt-8">
            <h2 className="text-4xl font-semibold text-dark-blue">Total Estimated Cost:</h2>
            <div className="text-4xl font-bold text-vibrant-purple mt-4 lg:mt-0">${finalCost}</div>
          </div>
        </div>
      </div>
    );
  };

export default Estimate2;
