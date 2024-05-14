import React from 'react';
import section2 from './section2.png';

const Section1 = () => {
  return (
    <div className="bg-purple-600 w-full p-[50px] pb-[100px] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-3">We construct your dream home. You track progress on app.</h1>
            <p className="mb-5">We construct homes and ensure peace of mind you deserve with our project tracking service.</p>
            <ul className="mb-5">
              <li><span className="text-red-500">✔</span> 4500+ Homes</li>
              <li><span className="text-red-500">✔</span> 470+ Quality Checks</li>
              <li><span className="text-red-500">✔</span> 100% Safe Money Transaction</li>
            </ul>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-200">Talk To Our Expert →</button>
          </div>
          <div>
            <div className="flex flex-col items-center">
              
              <p className="text-sm">Different stages of construction</p>
            </div>
            <div className="mt-3">
              <img src={section2} alt="Final Project Image" />
            </div>
            
          </div>
        </div>
        <div className="mt-10">
          <p className="text-sm">Looking to build a home of your dreams? Look no further, Brick&Bolt, India's No.1 tech-enabled building construction company, specializes in building construction in 10+ cities across India.</p>
          <p className="mt-2 text-sm">Our expert team offers a range of modern house design plans to suit your style and preferences, with a focus on sleek, stylish, and innovative designs. Whether you're looking to Construct a building or have a small Residential building Construction We have you covered.</p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
