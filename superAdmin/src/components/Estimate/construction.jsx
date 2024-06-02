import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const ConstructionMaterials = ({ costs, city, area = 1000 }) => {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const fetchPrices = async (category, brand) => {
      const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };

      try {
        const response = await axios.post('http://localhost:3000/api/getPerPiece', {
          category: capitalizeFirstLetter(category),
          brand,
          city,
        });
        return response.data.pricePerPiece;
      } catch (error) {
        console.error(`Error fetching price for ${category} (${brand}):`, error);
        return 0; // Default price in case of error
      }
    };

    const fetchAllPrices = async () => {
      const newPrices = {};
      for (const [category, item] of Object.entries(costs)) {
        const price = await fetchPrices(category, item.name);
        newPrices[category] = price;
      }
      setPrices(newPrices);
    };

    fetchAllPrices();
  }, [costs, city]);

  const quantityCalculation = (category, cost) => {
    const price = prices[category];
    return price ? cost / price : 0;
  };

  const totalMaterialCost = Object.values(costs).reduce((total, item) => total + item.price, 0);

  const pieChartData = {
    labels: Object.keys(costs),
    datasets: [
      {
        data: Object.values(costs).map((item) => item.price),
        backgroundColor: [
          '#ff6384',
          '#36a2eb',
          '#ffce56',
          '#4bc0c0',
          '#9966ff',
          '#ff9f40',
          '#c9cbcf',
          '#e7e9ed',
          '#b3e5fc',
          '#ffccbc',
        ],
      },
    ],
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">Material Quantity and Cost for {area} ft²</h2>
      <div className=" flex flex-wrap gap-8 justify-center">
        <div className="bg-gray-100 p-6 shadow-lg rounded-lg border-2 border-purple-700 overflow-x-auto" style={{ width: '80%' }}>
          <h3 className="text-2xl font-bold mb-4 text-center text-purple-700">Quantity of Materials</h3>
          <table className="w-full text-left border-collapse text-lg">
            <thead className="bg-purple-500 text-white">
              <tr>
                <th className="border border-gray-400 p-4">Material</th>
                <th className="border border-gray-400 p-4">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(costs).map(([category, item]) => (
                <tr key={category} className="bg-white hover:bg-purple-100">
                  <td className="border border-gray-400 p-4">{category}</td>
                  <td className="border border-gray-400 p-4">
                    {quantityCalculation(category, item.price).toFixed(0) || 'N/A'}
                    {category === 'cement' ? ' bags' : (category === 'bricks' ? ' bricks' : (
                      category === 'sand' ? ' cubic feet' : (category === 'aggregate' ? ' cubic feet' : (
                      category === 'steel' ? ' kg' : (category === 'paint' ? ' litres' : (
                      category === 'tiles' ? ' sqft' : (category === 'wood' ? ' cubic feet' : (
                      category === 'pipes' ? ' pieces' : (category === 'fittings' ? ' pieces' : (
                      category === 'sanitary' ? ' pieces' : (category === 'electrical' ? ' pieces' : (
                      category === 'plumbing' ? ' pieces' : (category === 'painting' ? ' sqft' : (
                      category === 'flooring' ? ' sqft' : (category === 'roofing' ? ' sqft' : (
                      category === 'windows' ? ' pieces' : (category === 'doors' ? ' pieces' : (
                      category === 'furniture' ? ' pieces' : (category === 'kitchen' ? ' pieces' : "units"
                    )))))))))))))))))))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-gray-100 p-6 shadow-lg rounded-lg border-2 border-purple-700" style={{ width: '80%' }}>
          <h3 className="text-2xl font-bold mb-4 text-center text-purple-700">Approximate Cost of Materials</h3>
          <div className="flex justify-center">
          <table className="w-full text-left border-collapse text-lg">
                <thead className="bg-purple-500 text-white">
                  <tr>
                    <th className="border border-gray-400 p-4">Material</th>
                    <th className="border border-gray-400 p-4">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(costs).map(([category, item]) => (
                    <tr key={category} className="bg-white hover:bg-purple-100">
                      <td className="border border-gray-400 p-4">{category}</td>
                      <td className="border border-gray-400 p-4">{item.price.toFixed(2)} Rs.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
        </div>
        <div className="bg-gray-100 p-6 flex flex-col items-center justify-center shadow-lg rounded-lg border-2 border-purple-700" style={{ width: '80%' }}>
          <h3 className="text-2xl font-bold mb-4 text-center text-purple-700">Cost Breakdown</h3>
          <div style={{ width: '500px', height: '500px' }}>
              <Pie data={pieChartData} />
            </div>
        </div>
        <div className="bg-gray-100 p-6 shadow-lg rounded-lg border-2 border-purple-700" style={{ width: '80%' }}>
          <h3 className="text-2xl font-bold mb-4 text-center text-purple-700">Total Cost</h3>
          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              <div className="flex justify-between items-center mb-2 bg-white p-2 rounded shadow">
                <span className="font-semibold text-purple-700">Total</span>
                <span className="text-right text-purple-700">{totalMaterialCost.toFixed(2)} Rs.</span>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default ConstructionMaterials;
