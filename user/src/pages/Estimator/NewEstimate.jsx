import React, { useState } from 'react';
import Footer from '../../components/HomePage/Footer';
import WhatsAppButton from '../../components/HomePage/WhatsAppButton';

const ConstructionCostCalculator = () => {
    const [estimate, setEstimate] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        phoneNo: '',
        builtUpArea: '',
    });
    const [errors, setErrors] = useState({});
    const [suggestions, setSuggestions] = useState([]);

    const cities = ["Delhi", "Ghaziabad", "Noida", "Faridabad", "Gurugram"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'location') {
            const matches = cities.filter(city => city.toLowerCase().includes(value.toLowerCase()));
            setSuggestions(matches);
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!/^\d{10}$/.test(formData.phoneNo)) {
            newErrors.phoneNo = "Phone number must be exactly 10 digits";
        }
        if (!formData.location) {
            newErrors.location = "Location is required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const calculateEstimate = () => {
        if (!validateForm()) {
            return;
        }

        const { builtUpArea } = formData;
        const costs = {
            silver: 1770,
            gold: 2040,
            diamond: 2290,
        };

        const estimates = Object.keys(costs).map((packageType) => {
            const rate = costs[packageType];
            const totalCost = builtUpArea * rate;

            return {
                packageType,
                totalCost,
                rate,
            };
        });

        setEstimate(estimates);
    };

    const packageStyles = {
        silver: {
            border: 'border-gray-400',
            text: 'text-gray-800',
            background: 'bg-gray-300'
        },
        gold: {
            border: 'border-yellow-400',
            text: 'text-yellow-900',
            background: 'bg-yellow-300'
        },
        diamond: {
            border: 'border-purple-400',
            text: 'text-purple-900',
            background: 'bg-purple-300'
        }
    };

    return (
       <div>
         <div className="p-8 mb-[50px] flex flex-col mt-[90px] items-center justify-center w-full ">
            <h1 className="text-5xl text-purple-900 font-light mb-6">Construction Cost Calculator</h1>
            <p className='mb-6 text-lg'>Fill out the form below to get an estimate of house construction costs. Speak to our technical expert for more accurate pricing.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 w-full max-w-screen-lg">
                <div className='flex flex-col items-start justify-center gap-2'>
                    <label className="text-purple-900 text-lg">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="p-2 border rounded w-full"
                    />
                </div>
                <div className='flex flex-col items-start justify-center gap-2'>
                    <label className="text-purple-900 text-lg">Phone No</label>
                    <input
                        type="text"
                        name="phoneNo"
                        value={formData.phoneNo}
                        onChange={handleChange}
                        className="p-2 border rounded w-full"
                    />
                </div>
                <div className='flex flex-col items-start justify-center gap-2'>
                    <label className="text-purple-900 text-lg">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="p-2 border rounded w-full"
                        list="citySuggestions"
                    />
                    <datalist id="citySuggestions">
                        {suggestions.map((city, index) => (
                            <option key={index} value={city} />
                        ))}
                    </datalist>
                </div>
                <div className='flex flex-col items-start justify-center gap-2'>
                    <label className="text-purple-900 text-lg">Built Up Area (in sqft)</label>
                    <input
                        type="number"
                        name="builtUpArea"
                        placeholder='Built Up Area in sqft'
                        value={formData.builtUpArea}
                        onChange={handleChange}
                        className="p-2 border rounded w-full"
                    />
                </div>
            </div>
            <button
                onClick={calculateEstimate}
                className="p-3 bg-purple-900 text-white rounded mb-6 text-lg"
            >
                Estimate Cost
            </button>

            {errors.phoneNo && <p className="text-red-500 mb-4">{errors.phoneNo}</p>}
            {errors.location && <p className="text-red-500 mb-4">{errors.location}</p>}

            {estimate && (
                <div className="w-full mb-[50px] flex flex-col items-center justify-center">
                    <h2 className="text-5xl mt-4 mb-8 text-purple-900 font-light text-center">Your Cost Estimate</h2>
                    <h2 className="text-3xl mt-4 mb-8 text-purple-900 text-center font-light">Please Select Your Plan</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                        {estimate.map((item) => (
                            <div key={item.packageType} className={`relative border-4 rounded-xl shadow-lg flex flex-col justify-between ${packageStyles[item.packageType].border} ${packageStyles[item.packageType].text} before:absolute before:w-full before:h-full before:z-[-1] before:bg-white before:border-2 before:border-current before:border-dashed before:border-x-0 before:top-[-6px] before:left-[-6px] before:right-[-6px] before:bottom-[-6px]`}>
                                <div className={`text-center p-5 ${packageStyles[item.packageType].background}`}>
                                    <h3 className="text-3xl mb-4">{item.packageType.charAt(0).toUpperCase() + item.packageType.slice(1)}</h3>
                                    
                                </div>
                                <div className='p-5 flex flex-col items-center justify-center gap-4 flex-grow'>
                                    <ul className="text-lg mb-4">
                                        <li className="mb-2">Rate per sqft: <span className="font-light ml-2">{item.rate}</span></li>
                                        <li className="mb-2">Steel: <span className="font-light ml-2">{item.packageType === 'silver' ? 'Rathi or equivalent' : 'Vizag or Sail or equivalent'}</span></li>
                                        <li className="mb-2">Cement: <span className="font-light ml-2">{item.packageType === 'silver' ? 'Ambuja or Dalmia or equivalent of 43 or 53 grade' : item.packageType === 'gold' ? 'Ambuja or Dalmia or equivalent of 43 or 53 grade' : 'Ultratech or equivalent of 43 or 53 grade'}</span></li>
                                        <li className="mb-2">Aggregates: <span className="font-light ml-2">20mm & 40mm</span></li>
                                        <li className="mb-2">Blocks: <span className="font-light ml-2">{item.packageType === 'silver' ? 'Standard Solid Concrete blocks. 6 inch & 4 inch' : 'Standard Red Bricks. 9 inch & 4 inch'}</span></li>
                                        <li className="mb-2">RCC Design Mix: <span className="font-light ml-2">{item.packageType === 'silver' ? 'M20 / M25 or As per the structural designer recommendation' : item.packageType === 'gold' ? 'M20 / M25 or As per the structural designer recommendation' : 'ACC or Ultratech M20 / M25 or As per the structural designer recommendation '}</span></li>
                                        <li className="mb-2">Ceiling Height: <span className="font-light ml-2">10 feet (Finished Floor level to Finished Floor level)</span></li>
                                        <li className="mb-2">Scaffolding: <span className="font-light ml-2">Included</span></li>{
                                            item.packageType === 'gold' && (
                                                <li className="mb-2 text-white"> .</li>
                                            )
                                        }
                                        {
                                             item.packageType === 'diamond' && (
                                                <li className="mb-2 text-white"> .</li>
                                            )
                                        }
                                    </ul>
                                    <p className="text-4xl font-light mb-4">
                                        ₹{item.totalCost.toFixed(2)}
                                    </p>
                                    <div className="text-center">
                                        <a href="tel:+918448830213" className="px-6 py-2  bg-orange-500 text-white rounded inline-block">Call For Construction</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
          
        </div>
        <Footer />
        <div className="w-full mt-4">
                <WhatsAppButton />
            </div>
       </div>
    );
};

export default ConstructionCostCalculator;
