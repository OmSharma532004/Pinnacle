import React, { useState, useEffect } from 'react';
import { IoIosClose } from "react-icons/io";
import toast from 'react-hot-toast';
import AnimatedCard from '../components/Estimate/animatedCard';
import WhatsAppButton from '../components/HomePage/WhatsAppButton';
import ConstructionMaterials from '../components/Estimate/construction';

const colorPalette = ["#3b327f", "#d6cdce", "#8c54fb", "#7758b4", "#664ca7", "#141c5c", "#0c1653", "#9b9dbc", "#6b6d9b"];

const Estimate2 = () => {
  const [selectedItems, setSelectedItems] = useState({});
  const [finalCost, setFinalCost] = useState(0);
  const [allCategories, setAllCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(allCategories[0]);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [showMessagePanel, setShowMessagePanel] = useState(false);
  const [plotSize, setPlotSize] = useState(0);
  const [materialCosts, setMaterialCosts] = useState({});
  const [showCalculation, setShowCalculation] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  const calculateFinalCost = (items) => {
    return Object.values(items).reduce((sum, item) => sum + (item.price || 0), 0);
  };

  const toggleMessagePanel = () => {
    setShowMessagePanel(!showMessagePanel);
  };

  useEffect(() => {
    fetchAllCities();
    if (cities.length > 0) {
      getAllCategories(cities[0]);
    }
  }, []);

  const calculate = () => {
    setMaterialCosts((prevMaterialCosts) => {
      const updatedMaterialCosts = { ...prevMaterialCosts };
      Object.keys(selectedItems).forEach((category) => {
        const item = selectedItems[category];
        updatedMaterialCosts[category] = {
          price: item.price * plotSize,
          name: item.name,
        };
      });
      return updatedMaterialCosts;
    });
    setShowCalculation(true);
  };

  useEffect(() => {
    if (selectedCity) {
      getAllCategories(selectedCity);
    }
    setCurrentCategory(allCategories.Cement);
  }, [selectedCity]);

  const fetchAllCities = async () => {
    try {
      toast.loading('Fetching cities...');
      const response = await fetch(`${apiUrl}/cities`);
      if (response.ok) {
        const result = await response.json();
        toast.dismiss();
        toast.success('Cities fetched successfully');
        setCities(result.cities);
      } else {
        toast.dismiss();
        toast.error('Failed to fetch cities');
        throw new Error('Failed to fetch cities');
      }
    } catch (error) {
      toast.dismiss();
      toast.error('Failed to fetch cities');
      console.error('Error:', error);
    }
  };

  const getAllCategories = async () => {
    try {
      toast.loading('Fetching categories...');
      const response = await fetch(`${apiUrl}/getMaterial/${selectedCity}`);
      if (response.ok) {
        const result = await response.json();
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
        toast.dismiss();
        toast.success('Categories fetched successfully');
        setAllCategories(convertedCategories);
        setCurrentCategory(convertedCategories.Cement);
      } else {
        toast.dismiss();
        toast.error('Failed to fetch categories');
        throw new Error('Failed to fetch categories');
      }
    } catch (error) {
      toast.dismiss();
      toast.error('Failed to fetch categories');
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
    <div className="flex flex-col items-center min-w-full overflow-auto h-screen bg-white text-black">
      <div className="w-full p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl text-purple-800">Construction Cost Estimator</h1>
          <div className='p-4 flex gap-[50px] justify-center'>
            <p className='text-2xl text-gray-800'>Enter your Plot size</p>
            <div>
              <input value={plotSize} onChange={(e) => [
                setPlotSize(e.target.value)
              ]} type="number" className='p-2 border bg-gray-200 text-black h-[50px] text-center rounded shadow-lg w-full max-w-xs md:max-w-md lg:max-w-sm' />
              <p className='text-black text-lg'>Sq Ft.</p>
            </div>
          </div>
          <div className="p-4 flex justify-center">
            <select
              className="p-2 border bg-gray-200 text-black h-[50px] rounded shadow-lg w-full max-w-xs md:max-w-md lg:max-w-lg"
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.target.value);
              }}
            >
              <option value="">Select City</option>
              {cities.map(city => (
                <option key={city.id} value={city.id}>{city.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {Object.values(allCategories).map((category) => (
            <div key={category.id} className=" md:hidden category-card">
              <div
                onClick={() => handleCardClick(category)}
                className="flex items-center justify-around text-red-600 rounded-3xl shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                <div className="flex flex-grow">
                  <div className="w-1/2 bg-purple-700 text-white rounded-l-3xl flex items-center justify-center p-4">
                    <h2 className=" text-lg">{category.id}</h2>
                  </div>
                  <div className="w-1/2 bg-white text-gray-800 rounded-r-3xl flex items-center justify-center p-4">
                    <div>
                      <p>Selected: {selectedItems[category.id]?.name || "None"}</p>
                      <p>Price: ₹{selectedItems[category.id]?.price || 0}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`items-container ${currentCategory && currentCategory.id === category.id ? '' : 'hidden md:block'}`}>
                {currentCategory && currentCategory.id === category.id && (
                  <div className="mt-4 p-4 rounded-lg shadow-md bg-gray-200">
                    <h2 className="w-full font-semibold text-lg text-black mb-4">You Can Choose From :</h2>
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
            </div>
          ))}
        </div>
        <div className=' hidden md:flex flex-col'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {Object.values(allCategories).map((category) => (
            <div
              key={category.id}
              onClick={() => handleCardClick(category)}
              className="flex items-center justify-around text-red-600 rounded-3xl shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <div className="flex flex-grow">
                <div className="w-1/2 bg-purple-700 text-white rounded-l-3xl flex items-center justify-center p-4">
                  <h2 className=" text-lg">{category.id}</h2>
                </div>
                <div className="w-1/2 bg-white text-gray-800 rounded-r-3xl flex items-center justify-center p-4">
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
          <div className="mt-8 p-4 rounded-lg shadow-md bg-gray-200">
            <h2 className="w-full font-semibold text-lg text-black mb-4">You Can Choose From :</h2>
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
      </div>
      <div className="w-full mt-4">
        <WhatsAppButton />
      </div>
      <div className="fixed bottom-5 right-5">
        <div className="mt-4  right-0 top-[20%] sm:fixed">
          {selectedCity ? (
            <>
              {/* Additional Content if city is selected */}
            </>
          ) : (
            <div onClick={toggleMessagePanel} className="bg-yellow-300 text-black text-center py-2 px-4 rounded-lg cursor-pointer">
              City not listed? Send us a request
            </div>
          )}
        </div>
      </div>
      {showMessagePanel && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white p-4 rounded-lg shadow-xl">
            <h2 className="text-xl font-bold mb-4">Request a City</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Email</label>
                <input type="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">City Name</label>
                <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows="4"></textarea>
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={toggleMessagePanel}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <button className='bg-black text-white p-4 rounded-lg m-4' onClick={calculate}>Calculate</button>
      {showCalculation && materialCosts && (
        <ConstructionMaterials costs={materialCosts} city={selectedCity} area={plotSize} />
      )}
    </div>
  );
};

export default Estimate2;
