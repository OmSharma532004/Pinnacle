import React, { useEffect, useState } from 'react';
import uploadCSV from './upload';
import toast from 'react-hot-toast';
import CSVUpload from './upload';

const Add = () => {
    const [selectedOption, setSelectedOption] = useState('Upload from CSV');
    const [category, setCategory] = useState('');
    const [existingCategories, setExistingCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [item, setItem] = useState({ name: '', price: '', cityId: '', description: '', categoryId: '' ,pricePerPiece:''});
    const [cities, setCities] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [city, setCity] = useState('');
    const [existingCities, setExistingCities] = useState([]);

    useEffect(() => {
        getAllCategories();
        getAllCities();
    }, []);

    const handleCategorySearch = (e) => {
        const query = e.target.value;
        setCategory(query);
        const filtered = categories.categories.filter((category) =>
            category.name.toLowerCase().includes(query.toLowerCase())
        );
        setExistingCategories(filtered.map((category) => category.name));
    };

    const handleCitySearch = (e) => {
        const query = e.target.value;
        const filtered = cities.filter((city) =>
            city.name.toLowerCase().includes(query.toLowerCase())
        );
        setExistingCities(filtered.map((city) => city.name));
    };

    const handleSearch = (searchQuery) => {
        const filtered = categories.categories.filter((category) =>
            category.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCategories(filtered);
    };

    const fetchAddCategory = async (category) => {
        try {
            const response = await fetch('http://localhost:3000/api/category/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: category }),
            });
            const data = await response.json();
            if (response.ok) {
                toast.success('Category added successfully');
            } else {
                toast.error('Error adding category');
            }
        } catch (error) {
            alert('Error adding category');
            alert(error);
        }
    };

    const handleAddCategory = () => {
        fetchAddCategory(category);
    };

    const getAllCategories = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/categories');
            const data = await response.json();
            if (response.ok) {
                setCategories(data);
            } else {
                console.log('Error fetching categories');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const addItem = async (item) => {
        try {
            const response = await fetch('http://localhost:3000/api/item/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
            });
            const data = await response.json();
            if (response.ok) {
                toast.success('Item added successfully');
            } else {
                toast.error('Error adding item');
            }
        } catch (error) {
            alert('Error adding item');
            alert(error);
        }
    };

    const handleAddItem = () => {
        addItem(item);
        console.log(item);
    };

    const getAllCities = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/cities');
            const data = await response.json();
            if (response.ok) {
                setCities(data.cities);
            } else {
                console.log('Error fetching cities');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const fetchAddCity = async (city) => {
        try {
            const response = await fetch('http://localhost:3000/api/city/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: city }),
            });
            const data = await response.json();
            if (response.ok) {
                toast.success('City added successfully');
            } else {
                toast.error('Error adding city');
            }
        } catch (error) {
            alert('Error adding city');
        }
    };

    const handleAddCity = () => {
        fetchAddCity(city);
    };

    return (
        <div className="flex w-screen min-h-screen bg-purple-800">
            <div className="w-1/4 bg-purple-800 text-white  p-6">
                <ul>
                    {['Upload from CSV', 'Add Item', 'Add City','Add Category'].map((option) => (
                        <li
                            key={option}
                            onClick={() => setSelectedOption(option)}
                            className={`p-2 cursor-pointer ${selectedOption === option ? 'bg-purple-900' : ''}`}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-3/4 p-8 flex  bg-gray-200">
                {selectedOption === 'Upload from CSV' && (
                    <div>
                        <h1 className="text-2xl font-bold mb-4">Upload from CSV</h1>
                        <CSVUpload />
                    </div>
                )}
                {selectedOption === 'Add City' && (
                    <div>
                        <h2 className="text-xl font-bold mb-2">Add City</h2>
                        <input
                            type="text"
                            onChange={(e) => {
                                handleCitySearch(e);
                                setCity(e.target.value);
                            }}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            placeholder="Enter city name"
                        />
                        <button onClick={handleAddCity} className="bg-blue-500 text-white py-2 px-4 rounded-md ml-2">
                            Add City
                        </button>
                        {existingCities.length > 0 && (
                            <div className="mt-2">
                                <p className="font-bold">Cities Already created:</p>
                                <ul>
                                    {existingCities.map((result) => (
                                        <li key={result}>{result}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
                  {selectedOption === 'Add Category' && (
                    <div>
                        <h2 className="text-xl font-bold mb-2">Add Category</h2>
                        <input
                            type="text"
                            value={category}
                            onChange={handleCategorySearch}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            placeholder="Enter category name"
                        />
                        <button onClick={handleAddCategory} className="bg-blue-500 text-white py-2 px-4 rounded-md ml-2">
                            Add Category
                        </button>
                        {existingCategories.length > 0 && (
                            <div className="mt-2">
                                <p className="font-bold">Categories Already created:</p>
                                <ul>
                                    {existingCategories.map((result) => (
                                        <li key={result}>{result}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
                {selectedOption === 'Add Item' && (
                    <div>
                        <h2 className="text-xl font-bold mb-2">Add Item to Category</h2>
                        <input
                            type="text"
                            value={item.name}
                            onChange={(e) => setItem({ ...item, name: e.target.value })}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2 focus:outline-none focus:border-blue-500"
                            placeholder="Enter item name"
                        />
                        <select
                            className="m-4 w-[400px]"
                            onChange={(e) => setItem({ ...item, cityId: e.target.value })}
                        >
                            <option value="">Select city</option>
                            {cities.length > 0 && cities.map((city) => (
                                <option key={city._id} value={city._id}>{city.name}</option>
                            ))}
                        </select>
                        <input
                            type="number"
                            value={item.price}
                            onChange={(e) => setItem({ ...item, price: e.target.value })}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2 focus:outline-none focus:border-blue-500"
                            placeholder="Enter item price"
                        />
                        <input
                            type="number"
                            value={item.pricePerPiece}
                            onChange={(e) => setItem({ ...item, pricePerPiece: e.target.value })}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2 focus:outline-none focus:border-blue-500"
                            placeholder="Enter item price per piece"
                        />
                        
                        <textarea
                            value={item.description}
                            onChange={(e) => setItem({ ...item, description: e.target.value })}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2 focus:outline-none focus:border-blue-500"
                            placeholder="Enter item description"
                        ></textarea>
                        <div>
                            <input
                                type="text"
                                value={selectedCategory}
                                placeholder="Search category"
                                onChange={(e) => {
                                    handleSearch(e.target.value);
                                    setSelectedCategory(e.target.value);
                                }}
                                className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2 focus:outline-none focus:border-blue-500"
                            />
                            {filteredCategories.length > 0 && (
                                <div className="border border-gray-300 rounded-md py-2 px-3 mb-2">
                                    {filteredCategories.map((category) => (
                                        <div
                                            key={category._id}
                                            onClick={() => {
                                                setItem({ ...item, categoryId: category._id });
                                                setSelectedCategory(category.name);
                                                setFilteredCategories([]);
                                            }}
                                            className="cursor-pointer hover:bg-gray-200 py-1 px-2"
                                        >
                                            {category.name}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <button
                            onClick={handleAddItem}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Add Item
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Add;
