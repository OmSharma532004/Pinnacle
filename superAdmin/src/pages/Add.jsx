import React, { useEffect, useState } from 'react';

const Add = () => {
    const [category, setCategory] = useState('');
    const [item, setItem] = useState(
       { name: '',
        price: '',
        description: '',
        category: '',}
    );

   useEffect(() => {

    getAllCategories();
    console.log('Categories:', categories);
    }, []);
    const [categories, setCategories] = useState([]);

  

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
           alert('Category added successfully');
         }
         else{
            alert('Error adding category');
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
            alert('Item added successfully');
        }
        else{
            alert('Error adding item');
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
       <div className=' flex flex-col items-center justify-center w-screen h-screen bg-black'>
         <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Add Items</h1>
            <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">Add Category</h2>
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    placeholder="Enter category name"
                />
                <button
                    onClick={handleAddCategory}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Add Category
                </button>
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
                <select
                    value={item.category}
                    onChange={(e) => setItem({ ...item, category: e.target.value })}
                 
                    className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2 focus:outline-none focus:border-blue-500"
                >
                  {
                    
                   categories.categories?(<>
                   {
                          categories.categories.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.name}
                            </option>
                        ))
                   }
                   </>):(<></>)
              
                  }
                </select>
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
