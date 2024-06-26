import React, { useState } from 'react';
import toast from 'react-hot-toast';
import logo2 from '../../assets/logo.png';
const apiUrl = import.meta.env.VITE_API_URL;
import sitemap from "../../../public/sitemap.pdf";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    city: ''
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

    if (Object.keys(newErrors).length === 0) {
      toast.loading("Sending Email...");

      const response = await fetch(`${apiUrl}/sendMail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: "City:-  "+formData.city+"  Message :-  "+formData.message
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
            city: '',
            message: ''
          });
        
         
         
    } else {
        toast.dismiss();
        toast.error(data.message);
      }
      toast.dismiss();
   
    };

 
    }
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            closeMenu();
        }
  };

  return (
    <footer className="bg-white -m-[20px] text-black pt-12">
      <div className="mx-auto flex flex-col items-center flex-wrap justify-center">
      <div className="w-full flex flex-col items-center  justify-center md:w-1/2 px-4 mt-12 md:mt-0">
            
            {Object.keys(errors).length > 0 && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <ul>
                  {Object.values(errors).map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <h2 className="text-3xl  text-purple-800 text-center mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6 md:min-w-[500px] mb-[50px]">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
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
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
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
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              {/* city */}
              <div>
                <label htmlFor="city" className="block text-sm font-medium">City*</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
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
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-purple-800 text-white text-2xl hover:bg-purple-600 py-2 px-4 rounded">
                  Send us a Query
                </button>
              </div>
            </form>
          
          </div>
          <div className=' flex bg-purple-950 gap-[40px] p-8 text-white  items-center justify-around flex-wrap w-full '>
          <div className="flex flex-col items-center justify-center ">
              <img src={logo2} alt="Logo" className=' w-[200px] md:w-[500px]' />
              <p className="text-lg mt-4">Contact us: 1234567890</p>
              <p className="text-lg">Email: <a href="mailto:contact@buildworx.co.in" className="text-purple-800 hover:underline">contact@buildworx.co.in</a></p>
            </div>
          <div className="  px-4">
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">Quick Links</h2>
            <ul className="mb-4">
              <li className="mb-2"><a href="/" className="hover:text-purple-600">Home</a></li>
              <li onClick={() => scrollToSection('section1')} className="cursor-pointer mb-2 hover:text-purple-600">About Us</li>
                              
              <li onClick={() => scrollToSection('footer')} className="cursor-pointer mb-2 hover:text-purple-600">Contact Us</li>
              <li onClick={() => scrollToSection('footer')} className="cursor-pointer mb-2 hover:text-purple-600">Resources</li>
                                </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">Our Services</h2>
            <ul>
                <li className="mb-2 mt-2"><a href="/dashboard" className="hover:text-purple-600">Construction</a></li>

                <li className="mb-2"><a href="/supervision" className="hover:text-purple-600">Consulting</a></li>
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">Legal</h2>
            <ul>
              <li className="mb-2">Copyright BuildWorX 2024, all rights reserved</li>
              <li className="mb-2">
  <a href="../../../public/Policy.pdf" target="_blank" className="hover:text-purple-600">Privacy Policy</a>
</li>
<li className="mb-2">
  <a href="../../../public/sitemap.pdf" target="_blank" className="hover:text-purple-600">Sitemap</a>
</li>
            </ul>
          </div>
        </div>
      
          </div>
      
       
      </div>
    </footer>
  );
};

export default Footer;
