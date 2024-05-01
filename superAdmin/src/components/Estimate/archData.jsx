import React, { useState } from 'react';

const ArchTable = ({setArch}) => {
  const [archData, setArchData] = useState([
    { item: 'Bricks(nos)', quantity: 38725, localPriceUnit: '₹ 6.55', estimation: '₹ 253648.75' },
    { item: 'Plaster(Sq. m)', quantity: 328.18, localPriceUnit: '₹ 1262.00', estimation: '₹ 414163.16' },
    { item: 'Paint Work(Sq. m)', quantity: 328.18, localPriceUnit: '₹ 188.30', estimation: '₹ 61796.29' },
    { item: 'Flooring(Sq. m)', quantity: 271.13, localPriceUnit: '₹ 2184.00', estimation: '₹ 592147.92' },
    { item: 'Door(nos)', quantity: 16, localPriceUnit: '₹ 4867.00', estimation: '₹ 77872.00' },
    { item: 'Windows(nos)', quantity: 15, localPriceUnit: '₹ 2905.00', estimation: '₹ 43575.00' },
    { item: 'PCC(Cu.m)', quantity: 6.64, localPriceUnit: '₹ 8918.00', estimation: '₹ 59215.52' },
    { item: 'Sand(Cu.m)', quantity: 38.68, localPriceUnit: '₹ 2168.00', estimation: '₹ 83858.24' },
    { item: 'Cement(kg)', quantity: 37118.91, localPriceUnit: '₹ 6.28', estimation: '₹ 233106.75' },
    { item: 'Gravel(Cu.m)', quantity: 77.21, localPriceUnit: '₹ 2065.00', estimation: '₹ 159438.65' },
  ]);
  const totalEstimation = archData.reduce((acc, item) => acc + parseFloat(item.estimation.split('₹')[1]), 0);

    setArch(totalEstimation);

  return (
    <div className="col-md-20 mb-[100px]">
      <div className="">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 px-4">Items</th>
              <th className="py-2 px-4">Quantity</th>
              <th className="py-2 px-4">Local price/unit</th>
              <th className="py-2 px-4">Estimation</th>
            </tr>
          </thead>
          <tbody>
            {archData.map((item, index) => (
              <tr key={index} className="divide-y text-black divide-x divide-gray-200 ">
                <td className="py-4 border-b text-center">{item.item}</td>
                <td className="py-4  text-center">{item.quantity}</td>
                <td className="py-4  text-center text-nowrap">{item.localPriceUnit}</td>
                <td className="py-4 text-green-500 text-center text-nowrap">{item.estimation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArchTable;
