import React from 'react';
import image1 from './image.png';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Ticker from './Ticker'; // Import the custom Ticker component

// Set the app element for accessibility
Modal.setAppElement('#root');

const HeroSection = () => {
  const offers = [
    "Get 20% off on all projects!",
    "Free consultation for first-time clients!",
    "Audit checks at discounted rates!",
    "Free project evaluation!",
    "Get a free project plan!",
    "Discounted rates on long-term projects!",
    "Free maintenance for the first year!",
    "Exclusive offers for referrals!",
    "Get a free cost estimate!",
    "Priority support for all clients!"
  ];

  return (
    <div className="relative w-full h-[500px]">
      <img src={image1} alt="BuildWorX" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 md:bg-opacity-0 text-white">
        <div className="w-full lg:ml-9 md:ml-9 mx-auto text-start py-20 px-10">
          <h1 className="text-6xl mb-4">
            Build<b className="text-yellow-300 font-light">WorX</b>
          </h1>
          <p className="mb-4 w-[40%]">Turning Visions into Reality, constructing excellence</p>
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
      <div className="absolute bottom-0 text-xl py-6 w-full bg-purple-900 bg-opacity-90 text-white">
        <Ticker messages={offers} />
      </div>
    </div>
  );
};

export default HeroSection;
