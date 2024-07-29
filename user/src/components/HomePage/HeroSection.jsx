import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import image1 from './image.webp';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Ticker from './Ticker'; // Import the custom Ticker component

// Set the app element for accessibility
Modal.setAppElement('#root');

const HeroSection = () => {
  const offers = [
    "Get your free consultation today",
    "Contact our team for preferred pricing",
    "For early bird offers, please get in touch with us",
    
    "Get your free consultation today",
    "Contact our team for preferred pricing",
    "For early bird offers, please get in touch with us",
    "Get your free consultation today",
    "Contact our team for preferred pricing",
    "For early bird offers, please get in touch with us",
  
  ];

  return (
    <div className="relative w-full h-[500px]">
      <LazyLoadImage
        src={image1}
        alt="BuildWorX"
        effect="blur"
        className="w-[1440px] h-[500px] object-cover"
      />
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 md:bg-opacity-0 text-white">
        <div className="w-full lg:ml-9 md:ml-9 mx-auto text-start py-20 px-10">
          <h1 className="text-5xl mb-4">
            Build<b className="text-yellow-300 font-light">WorX</b>
          </h1>
          <p className="mb-4 w-[40%] text-lg">Turning Visions into Reality, constructing excellence</p>
          <ul className="mb-4 text-lg">
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
