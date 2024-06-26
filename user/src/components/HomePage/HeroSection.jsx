import React, { useState } from 'react';
import image1 from './image.png';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

// Set the app element for accessibility
Modal.setAppElement('#root');

const HeroSection = () => {
 

  return (
    <div className="relative w-full h-[500px]">
      <img src={image1}  alt="BuildWorX" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 md:bg-opacity-0 text-white">
        <div className="w-full lg:ml-9 md:ml-9 mx-auto text-start py-20 px-10">
          <h1 className="text-6xl mb-4">Build<b className=' text-yellow-300 font-light '>WorX</b></h1>
          <p className="mb-4 w-[40%]">Turning Visions into Reality, constructing excellence
</p>
          <ul className="mb-4">
            <li>100+ Executed Projects</li>
            <li>200+ Audit Checks</li>
            <li>100% Customer Satisfaction</li>
          </ul>
          <Link to="/demo">
            <button className="bg-yellow-400 hover:bg-purple-600 text-black py-2 px-4 rounded mb-4">
              Book Free Consultation
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
