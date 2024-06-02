import React, { useState, useEffect } from 'react';

const products = [
  {
    category: 'Wire',
    types: [
      { name: 'xys', price: 80 },
      { name: 'ABS', price: 100 },
      { name: 'ABH', price: 120 },
    ],
  },
  {
    category: 'Switch',
    types: [
      { name: 'XYZ', price: 1000 },
      { name: 'ABC', price: 1500 },
    ],
  },
  {
    category: 'UPS_Wiring',
    types: [
      { name: 'Any', price: 1000 },
      { name: 'Any2', price: 1500 },
      { name: 'Tata', price: 2000 },
    ],
  },
];

const Electrical = ({setAllCosts,allCosts}) => {
    const [selectedType, setSelectedType] = useState('');
    const [finalCost, setFinalCost] = useState(
     { Cement: 0,
      Aggregate: 0,
      Steel: 0,
      RCCBlocks: 0,}
  
    );
    const [totalCost, setTotalCost] = useState(0);
    const [cost,setCost]=useState(0);
    const handleTypeChange = (event) => {
      const selectedTypeName = event.target.value;
      const selectedCategory=products.find(
          (product) =>
  
          product.types.find((type) => type.name === selectedTypeName) !==
          undefined
      ).category;
  
      const selectedTypePrice = products.find(
        (product) =>
          product.types.find((type) => type.name === selectedTypeName) !==
          undefined
      ).types.find((type) => type.name === selectedTypeName).price;
      setSelectedType(selectedTypeName);
      setFinalCost({ ...finalCost, [selectedCategory]: selectedTypePrice });
      setAllCosts({...allCosts,[selectedCategory]:selectedTypePrice});
      setCost(selectedTypePrice);
    };
   
    useEffect(() => {
      setTotalCost
      (Object.values(finalCost).reduce((acc, cost) => acc + cost, 0));
  
  
    
  
    }, [selectedType, products]);
  
    return (
      <div className="container mx-auto p-6">
        {/* <h1 className="text-2xl font-bold mb-4">Product Selection</h1> */}
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border py-2 px-4 text-left">Category</th>
              <th className="border py-2 px-4 text-left">Type</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.category}>
                <td className="border py-2 px-4">{product.category}</td>
                <td className="border py-2 px-4">
                  <select 
                    onChange={handleTypeChange} 
                    className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select...</option>
                    {product.types.map((type) => (
                      <option key={type.name} value={type.name}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6"> 
          {/* <p className="text-lg font-semibold">Selected Type: {selectedType}</p>
          <p className="text-lg font-semibold"> Cost: ₹{cost}</p>
          <p className="text-lg font-semibold">Total Cost: ₹{totalCost }</p>  */}
        </div> 
      </div>
    );
  };

export default Electrical;
