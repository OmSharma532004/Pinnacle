
import React, { useState, useEffect } from 'react';

const EditMaterials = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [cities, setCities] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editingMaterial, setEditingMaterial] = useState();
  const [editingCategory, setEditingCategory] = useState();
  const [cityId, setCityId] = useState();
  const [deleteMaterial,setDeleteMaterial]=useState();

  useEffect(() => {
    fetchCities();
   // Debugging line
  }, []);

  useEffect(() => {
    if (selectedCity) {
      fetchMaterialsAndCategories(selectedCity);
      
    }
  }, [selectedCity]);

  const fetchCities = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/cities');
      if (response.ok) {
        const result = await response.json();
        setCities(result.cities);
      } else {
        throw new Error('Failed to fetch cities');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchMaterialsAndCategories = async (cityId) => {
    console.log(cityId); 
    try {
      const response = await fetch(`http://localhost:3000/api/getMaterial/${cityId}`);
      if (response.ok) {
        const result = await response.json();
        setMaterials(result.data);
        setCategories(result.data.map(categoryData => categoryData.category));
        console.log('Materials:', result.data); // Debugging line
      } else {
        throw new Error('Failed to fetch materials and categories');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEditMaterial = (material) => {
    console.log('Selected City:', cityId); // Debugging line
    console.log('Editing Material:', material); // Debugging line
    setEditingMaterial(material);
    
    console.log('Editing Material:', editingMaterial); // Debugging line
  };
  const handleDelete=(material)=>{
    setDeleteMaterial(material);
    handleDeleteMaterial();
  }

  const handleDeleteMaterial=async()=>{
    try{
      const response=await fetch(`http://localhost:3000/api/deleteItem/${deleteMaterial.name}/${cityId}`,{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(editingMaterial)
      });
      if(response.ok){
        fetchMaterialsAndCategories(selectedCity);
        setEditingMaterial(null);
      }
      else{
        throw new Error('Failed to delete material');
      }
    }
    catch(error){
      console.error('Error:',error);
    }
  }

  const handleEditCategory = (category) => {
    setEditingCategory(category);
  };

  const handleSaveMaterial = async () => {
    console.log('Saving Material:', editingMaterial); // Debugging line
    if (!editingMaterial ) {
      console.error('No material or material ID found for editing');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/api/updateItem/${editingMaterial.name}/${cityId}/${editingMaterial.price}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingMaterial),
      });
      if (response.ok) {
        fetchMaterialsAndCategories(selectedCity);
        setEditingMaterial(null);
      } else {
        throw new Error('Failed to update material');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  

  const handleSaveCategory = async () => {
    console.log('Saving Category:', editingCategory); // Debugging line
    // if (!editingCategory || !editingCategory.id) {
    //   console.error('No category or category ID found for editing');
    //   return;
    // }

    try {
      const response = await fetch(`http://localhost:3000/api/categories/${editingCategory.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingCategory),
      });
      if (response.ok) {
        fetchMaterialsAndCategories(selectedCity);
        setEditingCategory(null);
      } else {
        throw new Error('Failed to update category');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Materials and Categories</h1>
      <div className="mb-4">
       
        <select
          value={selectedCity}
          onChange={(e) => {
            setSelectedCity(e.target.value);
            setCityId(e.target.value);
          }}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
      {categories.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-2">Categories</h2>
          <ul>
            {categories.map((category) => (
              <li key={category.id} className="mb-2">
                <div className="flex justify-between items-center">
                  <span>{category.name}</span>
                  <button
                    onClick={() => handleEditCategory(category)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Edit
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {materials.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-2">Materials</h2>
          {materials.map((materialData) => (
            <div key={materialData.category} className="mb-4">
              <h3 className="text-lg font-bold">{materialData.category}</h3>
              <ul>
                {materialData.itemInThatCity.map((item) => (
                  <li key={item.id} className="mb-2">
                    <div className="flex justify-between items-center">
                      <span>{item.name} - ₹{item.price}</span>
                      <button
                        onClick={() => handleEditMaterial(item)}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                      >
                        Edit
                      </button>

                      <button   onClick={() => handleDelete(item)}
                        className="bg-red-500 text-white px-4 py-2 rounded">
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      {editingMaterial && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Material</h2>
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded w-full"
                value={editingMaterial.name}
                onChange={(e) =>
                  setEditingMaterial({ ...editingMaterial, name: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Price</label>
              <input
                type="number"
                className="p-2 border border-gray-300 rounded w-full"
                value={editingMaterial.price}
                onChange={(e) =>
                  setEditingMaterial({ ...editingMaterial, price: e.target.value })
                }
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setEditingMaterial(null)}
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveMaterial}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {editingCategory && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Category</h2>
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded w-full"
                value={editingCategory.name}
                onChange={(e) =>
                  setEditingCategory({ ...editingCategory, name: e.target.value })
                }
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setEditingCategory(null)}
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveCategory}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditMaterials;
