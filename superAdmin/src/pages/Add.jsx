import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
const Add = () => {
    const [category, setCategory] = useState('');
    const [existingCategories, setExistingCategories] = useState([]);
    const handleCategorySearch = (e) => {
        const query = e.target.value;
        setCategory(query);
        const filtered = categories.categories.filter((category) =>
          category.name.toLowerCase().includes(query.toLowerCase())
        );
        setExistingCategories(filtered.map((category) => category.name));

      };
      const [selectedCategory, setSelectedCategory] = useState(''); 
      
    const [item, setItem] = useState(
       { name: '',
        price: '',
        city:'',
        description: '',
        category: '',}
    );

   useEffect(() => {

    getAllCategories();
    console.log('Categories:', categories);
    }, []);
    const [categories, setCategories] = useState([]);

  
    const [filteredCategories, setFilteredCategories] = useState([]);

    const handleSearch = (searchQuery) => {
        const filtered = categories.categories.filter((category) =>
          category.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCategories(filtered);
      };
    const fetchAddCategory = async (category) => {
        try{
            const response = await fetch('http://localhost:3000/api/category/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: category }),
        });
        const data = await response.json();
       if(response.ok){
            toast.success('Category added successfully');
         }
         else{
            toast.error('Error adding category');
         }
        console.log(data);
        }
        catch(error){
            alert('Error adding category');
            console.log(error);
        }
    };
    const handleAddCategory = () => {
        // Add logic to handle adding a new category
        console.log('Adding category:', category);
        fetchAddCategory(category);
      
    };

    const getAllCategories = async () => {
        try{
            const response = await fetch('http://localhost:3000/api/categories');
            const data = await response.json();
            if(response.ok){
                console.log('Categories:', data);
                setCategories(data);
            }
            else{
                console.log('Error fetching categories');
            }
            console.log(data);
            

        }
        catch(error){
            console.log(error);
        }
    }

    const addItem = async (item) => {
        try{
            const response = await fetch('http://localhost:3000/api/item/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        });
        const data = await response.json();
        if(response.ok){
            toast.success('Item added successfully');
        }
        else{
            toast.error('Error adding item');
        }
        console.log(data);
        }
        catch(error){
            alert('Error adding item');
            console.log(error);
        }
    };


    const handleAddItem = () => {
        // Add logic to handle adding a new item to a category
        addItem(item);
        console.log('Adding item:', item, 'to category:', category);
    };

    return (
       <div className=' flex flex-col items-center justify-center w-screen min-h-screen p-8 bg-gray-100'>
         <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Add Items</h1>
            <div className="mb-6">
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
    {
        console.log('Existing categories:', existingCategories) 
    }
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
            <div>
                <h2 className="text-xl font-bold mb-2">Add Item to Category</h2>

                <input
                    type="text"
                    value={item.name}
                    onChange={(e) => setItem({ ...item, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2 focus:outline-none focus:border-blue-500"
                    placeholder="Enter item name"
                />
                {/* some cities already there and select among them */}
                <select 
                className=' m-4 w-[400px]'
                onChange={(e) => setItem({ ...item, city: e.target.value })}
                >

                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>

                </select>

                <input
                    type="number"
                    value={item.price}
                    onChange={(e) => setItem({ ...item, price: e.target.value })}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2 focus:outline-none focus:border-blue-500"
                    placeholder="Enter item price"
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
    {filteredCategories.length > 0 ? (
      <div className="border border-gray-300 rounded-md py-2 px-3 mb-2">
      {filteredCategories.map((category) => (
        <div
          key={category._id}
          onClick={() => {
            setItem({ ...item, category: category._id });
            setSelectedCategory(category.name)
            setFilteredCategories([]);
          }}
          className="cursor-pointer hover:bg-gray-200 py-1 px-2"
        >
          {category.name}
        </div>
      ))}
    </div>
    ) : (
<></>
    )}
  </div>
                <button
                    onClick={handleAddItem}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Add Item
                </button>
            </div>
        </div>
       </div>
    );
};

export default Add;
