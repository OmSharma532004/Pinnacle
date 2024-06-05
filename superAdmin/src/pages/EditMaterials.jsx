
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const EditMaterials = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [cities, setCities] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editingMaterial, setEditingMaterial] = useState();
  const [editingCategory, setEditingCategory] = useState();
  const [category,setCategory]=useState();
  const [cityId, setCityId] = useState();
  const [deleteMaterial,setDeleteMaterial]=useState();
  const apiUrl = import.meta.env.VITE_API_URL;
  const user=useSelector(state=>state.auth.user);
  useEffect(() => {
    if(!user){
      window.location.href='/';
    }

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
    }
  };

  const fetchMaterialsAndCategories = async (cityId) => {
    
    try {
      toast.loading('Fetching materials and categories...');
      const response = await fetch(`${apiUrl}/getMaterial/${cityId}`);
      if (response.ok) {
        const result = await response.json();
        setMaterials(result.data);
        setCategories(result.data.map(categoryData => categoryData.category));
        toast.dismiss();
        toast.success('Materials and categories fetched successfully');
      } else {
        toast.dismiss();
        toast.error('Failed to fetch materials and categories');
        throw new Error('Failed to fetch materials and categories');
      }
    } catch (error) {
      toast.dismiss();
      toast.error('Failed to fetch materials and categories');
      console.error('Error:', error);
    }
  };

  const handleEditMaterial = (material) => {
    
    setEditingMaterial(material);
    
    
  };
  const handleDelete=(material)=>{
    handleDeleteMaterial(material);
  }

  const handleDeleteMaterial=async(material)=>{
   setDeleteMaterial(material);
    try{
       toast.loading('Deleting Material...');
      const response=await fetch(`${apiUrl}/deleteItem/${material.name}/${cityId}`,{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json'
        },
     
      });
      if(response.ok){
        fetchMaterialsAndCategories(selectedCity);
        setEditingMaterial(null);
        toast.dismiss();
        toast.success('Material Deleted Successfully');
      }
      else{
        toast.dismiss();
        toast.error('Failed to delete material');
        throw new Error('Failed to delete material');
      }
    }
    catch(error){
      console.error('Error:',error);
      // alert('Error:',error);
    }
  }

  const handleEditCategory = async () => {
    
    const body={
      name:editingCategory
    }
    toast.loading('Updating Category...');
    const response=await fetch(`${apiUrl}/updateCategory/${category}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    });
    if(response.ok){
      const result=await response.json();
      toast.dismiss();
      toast.success('Category Updated Successfully');
      setEditingCategory(null);

    }
    else{
      toast.dismiss();
      toast.error('Failed to update category');
      throw new Error('Failed to fetch category');
    }


  };

  const handleSaveMaterial = async () => {
    console.log('Saving Material:', editingMaterial); // Debugging line
   const body={
      price:editingMaterial.price,
      pricePerPiece:editingMaterial.pricePerPiece
    }
    toast.loading('Updating Material...');
    try {
      const response = await fetch(`${apiUrl}/updateItem/${editingMaterial.name}/${cityId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
       
      });
      if (response.ok) {
        fetchMaterialsAndCategories(selectedCity);
        setEditingMaterial(null);
        toast.dismiss();
        toast.success('Material updated successfully');
      } else {
        toast.dismiss();
        toast.error('Failed to update material');
        throw new Error('Failed to update material');
        alert('Failed to update material');
      }
    } catch (error) {
      toast.dismiss();
      console.error('Error:', error);
      alert('Error:', error);
    }
  };

  const handleDeleteCategory=async()=>{
  
    try{
      const response=await fetch(`${apiUrl}/deleteCategory/${editingCategory}`,{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json'
        },
     
      });
      if(response.ok){
        fetchMaterialsAndCategories(selectedCity);
        setEditingCategory(null);
        alert('Category Deleted Successfully');
      }
      else{
        throw new Error('Failed to delete category');
      }
    }
    catch(error){
      console.error('Error:',error);
    }
  }


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-purple-700">Edit Materials and Categories</h1>
      <div className="mb-4">
        <select
          value={selectedCity}
          onChange={(e) => {
            setSelectedCity(e.target.value);
            setCityId(e.target.value);
          }}
          className="p-2 border border-purple-300 rounded"
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
          <h2 className="text-xl font-bold mb-2 text-purple-700">Categories</h2>
          <table className="w-full border-collapse border border-purple-300">
            <thead>
              <tr>
                <th className="border border-purple-300 p-2 bg-purple-700 text-white">Category</th>
                <th className="border border-purple-300 p-2 bg-purple-700 text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id}>
                  <td className="border border-purple-300 p-2">{category}</td>
                  <td className="border border-purple-300 p-2">
                    <button
                      onClick={() => {
                        setEditingCategory(category);
                        setCategory(category);
                      }}
                      className="bg-purple-500 text-white px-4 py-2 rounded mr-2"
                    >
                      Edit
                    </button>
                    {/* <button
                      onClick={() => {
                        handleDeleteCategory(category);
                        setDeleteCategory(category);
                      }}
                      className="bg-yellow-500 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {materials.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-2 text-purple-700">Materials</h2>
          {materials.map((materialData) => (
            <div key={materialData.category} className="mb-4">
              <h3 className="text-lg font-bold text-purple-700">{materialData.category}</h3>
              <table className="w-full border-collapse border border-purple-300">
                <thead>
                  <tr>
                    <th className="border border-purple-300 p-2 bg-purple-700 text-white">Material</th>
                    <th className="border border-purple-300 p-2 bg-purple-700 text-white">Price</th>
                    <th className="border border-purple-300 p-2 bg-purple-700 text-white">Price Per Piece</th>
                    <th className="border border-purple-300 p-2 bg-purple-700 text-white">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {materialData.itemInThatCity.map((item) => (
                    <tr key={item.id}>
                      <td className="border border-purple-300 p-2">{item.name}</td>
                      <td className="border border-purple-300 p-2">₹{item.price}</td>
                      <td className="border border-purple-300 p-2">₹{item.pricePerPiece}</td>
                      <td className="border border-purple-300 p-2">
                        <button
                          onClick={() => handleEditMaterial(item)}
                          className="bg-purple-500 text-white px-4 py-2 rounded mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            setDeleteMaterial(item);
                            //setTimer before calling handleDelete
                            handleDeleteMaterial(item);



        
                         
                          }}
                          className="bg-yellow-500 text-white px-4 py-2 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
      {editingMaterial && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-purple-700">Edit Material</h2>
            <div className="mb-4">
              <label className="block mb-2">Name</label>
             <input 
              type="text"
              className="p-2 border border-gray-300 rounded w-full"
              value={editingMaterial.name}
              disabled
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
            <div className="mb-4">
              <label className="block mb-2">Price Per Piece</label>
              <input
                type="number"
                className="p-2 border border-gray-300 rounded w-full"
                value={editingMaterial.pricePerPiece}
                onChange={(e) =>
                  setEditingMaterial({ ...editingMaterial, pricePerPiece: e.target.value })
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
            <h2 className="text-xl font-bold mb-4 text-purple-700">Edit Category</h2>
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded w-full"
                value={editingCategory}
                onChange={(e) => setEditingCategory(e.target.value)}
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
                onClick={handleEditCategory}
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
