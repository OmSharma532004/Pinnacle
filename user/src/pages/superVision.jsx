import React, { useState } from 'react';
import toast from 'react-hot-toast';

function SuperVisionForm() {
    
    const apiUrl = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error on change
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
        toast.success('Thanks, Our team will contact you soon!')
        console.log(data);
        setFormData({
            name: '',
            email: '',
            phone: '',
          });
        
          window.location.href='/'
         
    }
    else{
        toast.dismiss();
        toast.success('Error sending mail')
        console.log(data);
        
    
    }
  };
  
}

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl text-center font-semibold text-purple-800 mb-8">
        Supervision request form
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-8 rounded shadow-md"
      >
        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name ? 'border-red-500' : ''
            }`}
          />
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
        </div>

        {/* Email Input */}

        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.email ? 'border-red-500' : ''
                }`}
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>


        {/* Phone Input */}
        
        <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone:</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.phone ? 'border-red-500' : ''
                }`}
            />
            {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
        </div>

        {/* Message Input */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Requirement:-</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-purple-800 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SuperVisionForm;
