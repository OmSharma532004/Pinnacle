import React, { useState, useEffect } from 'react';

import AnimatedCard from '../components/Estimate/animatedCard';

const colorPalette = ["#3b327f", "#d6cdce", "#8c54fb", "#7758b4", "#664ca7", "#141c5c", "#0c1653", "#9b9dbc", "#6b6d9b"];



  
  const Estimate2 = () => {
    const [selectedItems, setSelectedItems] = useState({});
    const [finalCost, setFinalCost] = useState(0);
    const [allCategories,setAllCategories]=useState([]);
    const [currentCategory, setCurrentCategory] = useState(allCategories[0]);
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(cities[0]);
    const [show,setShow]=useState(false);
    const [showDrawer, setShowDrawer] = useState(false);
    const [plotSize, setPlotSize] = useState(0);

    const calculateFinalCost = (items) => {
        return Object.values(items).reduce((sum, item) => sum + (item.price || 0), 0);
    };
    const toggleDrawer = () => {
      setShowDrawer(!showDrawer);
  };
    useEffect(() => {
        fetchAllCities();
        console.log(cities);
        getAllCategories(cities[0 ]);
    }, []);

    useEffect(() => {

        if (selectedCity) {
            getAllCategories(selectedCity);
        }
        console.log(allCategories);

        setCurrentCategory(allCategories.Cement);
        
    }, [selectedCity]);

    const fetchAllCities = async () => {

        try {
            const response = await fetch('http://localhost:3000/api/cities');
            if (response.ok) {

                const result = await response.json();
                console.log(result);
                setCities(result.cities);
            } else {

                throw new Error('Failed to fetch cities');
            }
        } catch (error) {

            console.error('Error:', error);
        }
    };

    const getAllCategories = async () => {
      try {
          const response = await fetch(`http://localhost:3000/api/getMaterial/${selectedCity}`);
          if (response.ok) {
              const result = await response.json();
              console.log(result);

              // Convert data from the backend into the specified format
              const convertedCategories = {};
              result.data.forEach(categoryData => {
                  const { category, itemInThatCity } = categoryData;

                  const items = itemInThatCity.map((item, index) => ({
                      id: `${index + 1}`,
                      name: item.name,
                      price: item.price,
                      brand: item.name.split(' ')[0]
                  }));

                  let color = '';
                  switch (category) {
                      case 'Cement':
                          color = 'bg-bright-purple';
                          break;
                      case 'Steel':
                          color = 'bg-dark-purple';
                          break;
                      case 'Wood':
                          color = 'bg-green-500';
                          break;
                      case 'Paint':
                          color = 'bg-blue-500';
                          break;
                      case 'Wire':
                          color = 'bg-red-500';
                          break;
                      case 'Switch':
                          color = 'bg-green-500';
                          break;
                      case 'UPS_Wiring':
                          color = 'bg-blue-500';
                          break;
                      default:
                          color = 'bg-gray-500';
                          break;
                  }

                  convertedCategories[category] = {
                      id: category.toLowerCase().replace(/\s/g, '_'),
                      items: items,
                      color: color
                  };
              });

              // Set the converted categories to state
              setAllCategories(convertedCategories);
              setCurrentCategory(convertedCategories.Cement);
          } else {
              throw new Error('Failed to fetch categories');
          }
      } catch (error) {
          console.error('Error:', error);
      }
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
  <div className="flex flex-col items-center min-w-full overflow-auto h-screen  bg-purple-950 text-white">
    <div className="w-full p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-400">Construction Cost Estimator</h1>
        <div className='p-4 flex gap-[50px] justify-center'>
          <p className=' text-2xl text-yellow-400 font-bold '>Enter your Plot size</p>
          <div>
          <input value={plotSize} onChange={(e)=>[
            setPlotSize(e.target.value)
          ]} type="number" className='p-2 border border-yellow-500 bg-yellow-400 text-black h-[50px] text-center rounded shadow-lg w-full max-w-xs md:max-w-md lg:max-w-sm'/>
          <p className=' text-yellow-300 text-lg'>Sq Ft.</p>
          </div>
        </div>
        <div className="p-4 flex justify-center">
          <select
            className="p-2 border border-yellow-500 bg-yellow-400 text-black h-[50px] rounded shadow-lg w-full max-w-xs md:max-w-md lg:max-w-lg"
            value={selectedCity}
            onChange={(e) => {
              setSelectedCity(e.target.value);
            }}
          >
            {cities.map(city => (
              <option key={city.id} value={city.id}>{city.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
      {Object.values(allCategories).map((category) => (
                    <div 
                    key={category.id}
                    onClick={() => handleCardClick(category)}
                    className="flex items-center justify-around text-red-600 rounded-3xl shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                >
                    <div className="flex flex-grow">
                        <div className="w-1/2 bg-yellow-400 rounded-l-3xl flex items-center justify-center p-4">
                            <h2 className="font-semibold text-lg">{category.id}</h2>
                        </div>
                        <div className="w-1/2 bg-purple-700 text-white rounded-r-3xl flex items-center justify-center p-4">
                            <div>
                                <p>Selected: {selectedItems[category.id]?.name || "None"}</p>
                                <p>Price: ₹{selectedItems[category.id]?.price || 0}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                  ))}
      </div>
      {currentCategory && (
        <div className="mt-8 p-4 rounded-lg shadow-md bg-purple-500">
          <h2 className="w-full font-semibold text-lg text-black mb-4">{currentCategory.id} Items:</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {currentCategory.items.map(item => (
              <AnimatedCard
                key={item.id}
                item={item}
                isSelected={selectedItems[currentCategory.id]?.id === item.id}
                onAddOrRemove={handleAddToCart}
              />
            ))}
          </div>
        </div>
      )}
    </div>
    <button
      onClick={toggleDrawer}
      className="fixed bottom-5 right-5 bg-purple-600 hover:bg-yellow-500 text-xl font-bold py-3 px-6 rounded-xl shadow-lg transition duration-300"
    >
      Cart ₹{finalCost}
    </button>
    {showDrawer && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4">
        <div className="bg-purple-500 p-4 rounded-lg shadow-xl font-extrabold text-white">
          <h2 className="text-xl font-bold mb-4">Selected Items</h2>
          <ul>
            {Object.entries(selectedItems).map(([categoryId, item]) => (
              <li key={categoryId} className="p-2 border text-red-600 font-bold bg-yellow-500 border-yellow-300 rounded my-2 flex gap-[50px] justify-between items-center">
                {item.name} - ₹{item.price}
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => handleRemoveFromCart(categoryId)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className=' text-yellow-300'>Fort Plot Size: {plotSize} sqM</p>
          <p className="text-lg">Total Cost:   ₹{finalCost*plotSize}</p>
          <button
            onClick={toggleDrawer}
            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </div>
    )}
  </div>
);

  
    
};

export default Estimate2;