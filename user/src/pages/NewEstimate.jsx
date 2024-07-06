import React, { useState } from 'react';
import { FaRupeeSign, FaTools, FaBuilding, FaRegSnowflake } from 'react-icons/fa';
import { GiSteelClaws, GiConcreteBag, GiBrickWall } from 'react-icons/gi';
import { RiBuilding3Fill } from 'react-icons/ri';
import { MdOutlineArchitecture } from 'react-icons/md';

const NewEstimate = () => {
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
            bg: 'bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 text-gray-800',
            icon: <MdOutlineArchitecture />,
            text: 'text-gray-800'
        },
        gold: {
            bg: 'bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-yellow-900',
            icon: <GiSteelClaws />,
            text: 'text-yellow-900'
        },
        diamond: {
            bg: 'bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 text-purple-900',
            icon: <RiBuilding3Fill />,
            text: 'text-purple-900'
        }
    };

    return (
        <div className="p-8 flex flex-col items-center justify-center w-full bg-gray-100">
            <h1 className="text-5xl text-purple-900 mb-6">Construction Cost Calculator</h1>
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
                <div className="w-full flex flex-col items-center justify-center ">
                    <h2 className="text-5xl mt-4 mb-8 text-purple-900 text-center">Your Cost Estimate</h2>
                    <h2 className="text-3xl mt-4 mb-8 text-black text-center">Please Select Your Plan</h2>
                    {estimate.map((item) => (
                        <div key={item.packageType} className={`border m-4 rounded-xl w-full ${packageStyles[item.packageType].bg} p-8 relative`}>
                            <div className="absolute top-4 right-4 text-4xl">
                                {packageStyles[item.packageType].icon}
                            </div>
                            <div className="text-center mb-6">
                                <h3 className={`text-3xl font-bold mb-4 flex items-center justify-center ${packageStyles[item.packageType].text}`}>
                                    {item.packageType.charAt(0).toUpperCase() + item.packageType.slice(1)} 
                                </h3>
                                <p className={`text-4xl font-extrabold mb-4 flex items-center justify-center ${packageStyles[item.packageType].text}`}>
                                    <FaRupeeSign className="" />
                                    {item.totalCost.toFixed(2)}
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
                            <div>
                                    <p className="mb-2 flex items-center"><FaTools className="mr-2" /> Rate per sqft: <span className="font-semibold ml-2">{item.rate}</span></p>
                                    <p className="mb-2 flex items-center"><GiSteelClaws className="mr-2" /> Steel: <span className="font-semibold ml-2">{item.packageType === 'silver' ? 'Rathi or equivalent' : 'Vizag or Sail or equivalent'}</span></p>
                                    <p className="mb-2 flex items-center"><GiConcreteBag className="mr-2" /> Cement: <span className="font-semibold ml-2">{item.packageType === 'silver' ? 'Ambuja or Dalmia or equivalent of 43 or 53 grade' : item.packageType === 'gold' ? 'Ambuja or Dalmia or equivalent of 43 or 53 grade' : 'Ultratech or equivalent of 43 or 53 grade'}</span></p>
                                    <p className="mb-2 flex items-center"><FaRegSnowflake className="mr-2" /> Aggregates: <span className="font-semibold ml-2">20mm & 40mm</span></p>
                                    <p className="mb-2 flex items-center"><GiBrickWall className="mr-2" /> Blocks: <span className="font-semibold ml-2">{item.packageType === 'silver' ? 'Standard Solid Concrete blocks. 6 inch & 4 inch' : 'Standard Red Bricks. 9 inch & 4 inch'}</span></p>
                                </div>
                                <div>
                                    <p className="mb-2 flex items-center"><MdOutlineArchitecture className="mr-2" /> RCC Design Mix: <span className="font-semibold ml-2">{item.packageType === 'silver' ? 'M20 / M25 or As per the structural designer recommendation' : item.packageType === 'gold' ? 'M20 / M25 or As per the structural designer recommendation' : 'ACC or Ultratech M20 / M25 or As per the structural designer recommendation'}</span></p>
                                    <p className="mb-2 flex items-center"><FaBuilding className="mr-2" /> Ceiling Height: <span className="font-semibold ml-2">10 feet (Finished Floor level to Finished Floor level)</span></p>
                                    <p className="mb-2 flex items-center"><FaTools className="mr-2" /> Scaffolding: <span className="font-semibold ml-2">Included</span></p>
                                    <p className="mb-2 flex items-center"><FaRegSnowflake className="mr-2" /> Waterproofing/ Conduiting/ Water Tank: <span className="font-semibold ml-2">As per requirement</span></p>
                                    <p className="mb-2 flex items-center"><FaRegSnowflake className="mr-2" /> Water & Electricity: <span className="font-semibold ml-2">Arranged by contractor</span></p>
                                    <p className="mb-2 flex items-center"><FaTools className="mr-2" /> Markup: <span className="font-semibold ml-2">Additional charges apply</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NewEstimate;
