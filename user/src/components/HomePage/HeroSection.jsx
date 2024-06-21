import React from 'react';
import image1 from './image.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[500px]">
      <img src={image1} alt="BuildWorX" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 md:bg-opacity-10 text-white">
        <div className="w-full lg:ml-9 md:ml-9 mx-auto text-start py-20 px-10">
          <h1 className="text-6xl mb-4">BuildWorX</h1>
          <p className="mb-4 w-[40%]">Step into the home you've always dreamed of, built to the highest standard of quality.</p>
          <ul className="mb-4">
            <li>4500+ Homes</li>
            <li>470+ Quality Checks</li>
            <li>100% Money Safety</li>
          </ul>
          <Link to="/demo">
            <button className="bg-purple-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
              Book Free Consultation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
