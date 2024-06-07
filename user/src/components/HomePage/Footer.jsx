import React, { useState } from 'react';
import toast from 'react-hot-toast';

const apiUrl = import.meta.env.VITE_API_URL;
const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
  
        e.preventDefault();
        const newErrors = {};
    
        if (!formData.name.trim()) {
          newErrors.name = 'Name is required';
        }
    
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Valid email is required';
        }
    
        if (!formData.phone.trim() || !/^[0-9]{10}$/.test(formData.phone)) {
          newErrors.phone = 'Valid 10-digit phone number is required';
        }
    
        setErrors(newErrors);
    
        // If no errors, proceed with form submission (replace with your backend logic)
        if (Object.keys(newErrors).length === 0) {
            toast.loading("Sending Email...");
        //   console.log('Submitting form data:', formData);
          const response=await fetch(`${apiUrl}/sendMail`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:formData.name,
                email:formData.email,
                phone:formData.phone,
                message:formData.message
            }),
        });
        const data= await response.json();
        if(data.success){
            toast.dismiss();
            toast.success('Mail sent successfully')
            console.log(data);
            setFormData({
                name: '',
                email: '',
                phone: '',
              });
        }
        else{
            toast.dismiss();
            toast.success(data.message)
            console.log(data);
    
        
        }
      };
    }

    return (
        <footer className=" bg-white flex text-black py-12">
            <div className=' w-[50%]'>
                {/* create a component which will display my company logo and details of contact phone no and email id */}

                <div className="flex items-center w-[100%] h-full  justify-center">
                    <div className="ml-4">
                        <h3 className="text-2xl font-bold">BuildingIT</h3>
                        <p className="text-lg">Contact us: 1234567890</p>
                        <p className="text-lg">Email:
                            <a href="mailto: ">abc@gmail.com</a>
                        </p>
                        </div>

                    </div>
            </div>
            <div className="max-w-6xl mx-auto bg-white p-6 w-[40%] px-4 sm:px-6 lg:px-8">
                {
                    Object.keys(errors).length > 0 && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <ul>
                                {Object.values(errors).map((error, index) => (
                                    <li key={index}>{error}</li>
                                ))}
                            </ul>
                        </div>
                    )

                }
                <h2 className="text-3xl  text-purple-800 text-center mb-6">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium">Name*</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">Email ID*</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium">Mobile Number*</label>
                        <input
                            type="tel"
                            id="mobile"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium">Comment*</label>
                        <textarea
                            id="comment"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="bg-yellow-400 text-2xl hover:bg-yellow-600 text-black py-2 px-4 rounded">
                            Send us a Query
                        </button>
                    </div>
                </form>
            </div>
        </footer>
    );
};

export default Footer;
