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
    const [allCategories,setAllCategories]=useState([]);
    const [currentCategory, setCurrentCategory] = useState(allCategories[0]);
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(cities[0]);
    const [show,setShow]=useState(false);
    const [showDrawer, setShowDrawer] = useState(false);
   

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
      <div className="flex flex-col items-center min-h-screen justify-center bg-yellow-50">
       
    
       <div className="flex-col w-full min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-200">
            <div className="  p-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-yellow-800">Construction Cost Estimator</h1>
                <div className="w-full p-4 flex items-center justify-center mx-auto ">
          <select
            className="p-2 border border-yellow-300 text-center w-[600px] shadow-xl h-[40px] bg-yellow-300 rounded text-yellow-900"
            value={selectedCity}
            onChange={(e) => {
              setSelectedCity(e.target.value);
              setShow(true);
            }}
          >
            {cities.map(city => (
              <option className='' key={city.id} value={city.id}>{city.name}</option>
            ))}
          </select>
        </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.values(allCategories).map((category, index) => (
                  <CategoryCard
                      key={category.id}
                      category={category}
                      onClick={() => handleCardClick(category)}
                      selectedItem={selectedItems[category.id]?.name}
                      price={selectedItems[category.id]?.price}
                  />  
))}
              </div>
    
              {currentCategory && (
                  <div className="mt-8 p-4 rounded-lg shadow-md  bg-yellow-400">
                      <h2 className="w-full font-semibold text-lg mb-4 text-gray-700">{currentCategory.id} Items:</h2>
                      <div className="flex items-center justify-center gap-4">
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
    
           
            <button onClick={toggleDrawer} className="fixed flex justify-between items-center bottom-5 w-[1000px] right-[200px] h-[100px] rounded-xl bg-yellow-300 hover:bg-yellow-500 text-2xl text-red-500 hover:text-white font-bold py-2 px-8 ">
                   <p>
                   Cart
                   </p>
                   <p className=' '>  ₹{finalCost}</p>
                </button>
                <div className={`fixed inset-x-0 bottom-0 p-4 bg-white transform transition-transform duration-300 ${showDrawer ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
    <h2 className="text-xl font-bold">Selected Items</h2>
    <ul>
        {Object.entries(selectedItems).map(([categoryId, item]) => (
            <li key={categoryId} className="p-2 border border-yellow-300 rounded my-2 flex justify-between items-center bg-yellow-100">
                {item.name} - ₹{item.price}
                <button
                  className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  onClick={() => handleRemoveFromCart(categoryId)}
                >
                  Remove
                </button>
            </li>
        ))}
    </ul>
    <p>Total Cost: ₹{finalCost}</p>
    <button onClick={toggleDrawer} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Close
    </button>
</div>
           
          </div>
      </div>
    );
    
};

export default Estimate2;