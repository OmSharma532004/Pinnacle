import React, { useState } from 'react';

const NewEstimate = () => {
    const [estimate, setEstimate] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        phoneNo:'',
        builtUpArea: '',
        carParking: '',
        balconyArea: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const calculateEstimate = () => {
        const { builtUpArea, carParking, balconyArea } = formData;
        const costs = {
            royale: 2480,
            basic: 1810,
            classic: 1940,
            premium: 2250,
        };

        const estimates = Object.keys(costs).map((packageType) => {
            const rate = costs[packageType];
            const builtUpCost = (builtUpArea-carParking * 130- balconyArea) * rate;
            const carParkingCost = carParking * 130 * rate / 2;
            const balconyCost = balconyArea * rate / 2;

            return {
                packageType,
                totalCost: builtUpCost + carParkingCost + balconyCost,
                builtUpCost,
                carParkingCost,
                balconyCost,
                rate,
            };
        });

        setEstimate(estimates);
    };

    return (
        <div className="p-8 flex flex-col items-center justify-center">
            <h1 className="text-5xl text-purple-900 mb-6">Construction Cost Calculator</h1>
            <p className=' mb-6 '>Fill out the form below to get an estimate of house construction costs. Speak to our technical expert for a more accurate pricing</p>
            <div className="grid grid-cols-2 gap-4">
               <div className=' flex items-center justify-center gap-4'>
                <label>
                    Name
                </label>
               <input
                    type="text"
                    name="name"
                    
                    
                    value={formData.name}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
               </div>
               <div className=' flex items-center justify-center gap-4'>
               <label>
                    Phone No
                </label>
               <input
                    type="Number"
                    name="phoneNo"
                    
                    
                    value={formData.phoneNo}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />

               </div>
                <div className=' flex items-center justify-center gap-4'>
                <label>
                    Location
                </label>
                <input
                    type="text"
                    name="location"
                   
                    value={formData.location}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
                </div>
                <div className=' flex items-center justify-center gap-4'>
                <label>
                    Built Up Area (in sqft)
                </label>
                <input
                    type="number"
                    name="builtUpArea"
                    placeholder='Built Up Area in sqft'
                    value={formData.builtUpArea}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />

                </div>
                <div className=' flex items-center justify-center gap-4'>
                <label>
                    Car Parking
                </label>
                <input
                    type="number"
                    name="carParking"
                    placeholder='Car Parking in sqft'
                    value={formData.carParking}
                    onChange={handleChange}
                    className="p-2 border rounded"

                />
                </div>
                <div className=' flex items-center justify-center gap-4'>
                <label>
                    Balcony Area
                </label>
                <input
                    type="number"
                    name="balconyArea"
                    placeholder='Balcony Area in sqft'
                    value={formData.balconyArea}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
                </div>
            </div>
            <button
                onClick={calculateEstimate}
                className="mt-6 p-2 bg-purple-900 text-white rounded"
            >
                Estimate Cost
            </button>

            {estimate && (
                <div className="mt-6 flex flex-col items-center justify-center">
                    <h2 className="text-5xl mt04 mb-6 text-purple-900">Your Cost Estimate</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {estimate.map((item) => (
                            <div key={item.packageType} className=" border m-4  rounded-xl">
                                <h3 className="text-xl bg-purple-900 p-2 rounded text-yellow-300 w-full font-semibold">{item.packageType.charAt(0).toUpperCase() + item.packageType.slice(1)} Package</h3>
                               <div className=' p-4 text-lg hover:bg-white  flex flex-col gap-4 justify-center bg-purple-300'>
                               <p className=' '>Built Up Cost: ₹{item.builtUpCost.toFixed(2)}</p>
                                <p>Car Parking Cost: ₹{item.carParkingCost.toFixed(2)}</p>
                                <p>Balcony & Utility Cost: ₹{item.balconyCost.toFixed(2)}</p>
                                <p className="font-bold">Total Cost: ₹{item.totalCost.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewEstimate;
