import React from 'react';
import image from './image.png';

const HeroSection = () => {
  return (
    <div className="bg-cover w-full bg-center" style={{ backgroundImage: `url(${image})` }}>
      <div className=" flex justify-center gap-[70px] min-w-[100%] items-center max-w-6xl mx-auto py-20 px-10 bg-black bg-opacity-10 text-white">
        <div>
          <h1 className="text-4xl font-bold mb-4">BuildingIt</h1>
          <p className="mb-4">Step into the home you've always dreamed of, built to the highest standard of quality.</p>
          <ul className="mb-4">
            <li>4500+ Homes</li>
            <li>470+ Quality Checks</li>
            <li>100% Money Safety</li>
          </ul>
          <p>India’s No.1 Tech-Enabled Construction Company</p>
        </div>
        <div className="bg-white text-black p-8">
          <h2 className="text-2xl font-semibold mb-4">Talk to our Expert</h2>
          <form>
            <div className="mb-4">
              <input type="text" placeholder="Name*" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <input type="tel" placeholder="Mobile Number*" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <input type="text" placeholder="Location of your plot*" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-full">
              BOOK FREE CONSULTATION
            </button>
          </form>
          <p className="text-xs mt-2">*By submitting this form, I confirm that I have read and agreed to accept BuildingIt's privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
