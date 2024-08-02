import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Ticker from '../components/HomePage/Ticker';
import Footer from '../components/HomePage/Footer';

function BookDemoForm() {
  const offers = [
    "Get your free consultation today",
    " Contact our team for preferred pricing",
    "Early bird offers for July 2024 - get in touch with our team!",
    "Get your free consultation today",
    " Contact our team for preferred pricing",
    "Early bird offers for July 2024 - get in touch with our team!",
  ];

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
          message: formData.message
        }),
      });
      const data = await response.json();
      if (data.success) {
        toast.dismiss();
        toast.success('Thanks, Our team will contact you soon!')
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });

        window.location.href = '/'
      } else {
        toast.dismiss();
        toast.error('Error sending mail')
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <section className="bg-white  p-10 w-full rounded-lg mb-12">
        <h2 className="text-3xl font-semibold text-purple-800 mb-8 text-center">Book a Free Consultation</h2>
        <form onSubmit={handleSubmit} className="flex-col flex items-center justify-around gap-6">
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
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="p-2 border rounded w-full"
              />
            </div>
            <div className='flex flex-col items-start justify-center gap-2'>
              <label className="text-purple-900 text-lg">Email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border rounded w-full"
                list="citySuggestions"
              />
            </div>
            <div className='flex flex-col items-start justify-center gap-2'>
              <label className="text-purple-900 text-lg">Location</label>
              <input
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="p-2 border rounded w-full"
              />
            </div>
          </div>
          <div>
            <button type="submit" className="bg-purple-800 text-white p-2 px-4 rounded">Submit</button>
          </div>
        </form>
        <div className='flex flex-col items-center justify-center w-full md:mt-[80px] mt-[40px]'>
          <p className="text-3xl text-purple-900">"Building your dreams with precision and quality."</p>
          <p className="text-3xl text-purple-900">"Your vision, our expertise."</p>
        </div>
      </section>
      <div className="py-6 text-xl opacity-0 md:opacity-100 lg:opacity-100 absolute bottom-0 w-full bg-purple-900 bg-opacity-90 text-white">
        <Ticker messages={offers} />
      </div>
      <section className="pb-10 md:mt-[120px] lg:mt-[120px] p-5 w-screen">
        <h2 className="text-4xl text-center font-semibold text-black mb-12">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
          <div className="bg-white p-8 rounded-lg custom-card transform transition duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Ranveer and Ria's Dream Home</h3>
            <p className="text-gray-700">Ranveer and Ria, a happy old couple, got their dream house constructed by BuildWorX. They wanted a cozy place to spend their golden years with their grandchildren. BuildWorX delivered a perfect home where they now enjoy their retirement, surrounded by the laughter of their grandchildren.</p>
          </div>
          <div className="bg-white p-8 rounded-lg custom-card transform transition duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Yash and Reema's Urban Retreat</h3>
            <p className="text-gray-700">Yash and Reema, a young couple in the fast-paced city, had no time to oversee the construction of their new home. They entrusted the project to BuildWorX, who managed everything from start to finish. Now, they have a beautiful urban retreat where they can unwind after their busy days.</p>
          </div>
          <div className="bg-white p-8 rounded-lg custom-card transform transition duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Raj's Holiday Home</h3>
            <p className="text-gray-700">Raj, an NRI residing in the US, dreamed of having a holiday home in Delhi. He outsourced the entire turnkey project to BuildWorX. From planning to execution, BuildWorX handled it all, and now Raj has a perfect getaway spot in India where he can relax during his visits.</p>
          </div>
        </div>
      </section>
      <button
          onClick={() => {
       
          }}
          className="bg-yellow-400 hover:bg-purple-500 hover:text-white md:w-[200px] w-[100px] text-black py-4 md:py-5 md:px-5 fixed rounded top-[200px] right-0 transform -translate-y-1/2 z-10"
          style={{ backdropFilter: 'blur(10px)' }}
        >
               Call Us +91 9958827520
        </button>
        <Footer/>
    </div>
  );
}

export default BookDemoForm;
