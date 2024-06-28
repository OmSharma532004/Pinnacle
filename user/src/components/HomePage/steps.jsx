import React, { useState } from 'react';
import Slider from 'react-slick';
import i1 from '../../assets/services/1.png';
import i2 from '../../assets/services/2.png';
import i3 from '../../assets/services/3.png';
import i4 from '../../assets/services/4.png';
import Section2 from './section2';
import { motion, AnimatePresence } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from 'react';

const services = [
  {
    title: "Residential",
    description: "Homes and More that are built to last, with quality materials and expert craftsmanship.",
    imgSrc: i1,
    extraInfo: "Extra information about Residential services..."
  },
  {
    title: "Commercial",
    description: "Offices, Retail Spaces, and more, built to meet your business needs.",
    imgSrc: i2,
    extraInfo: "Extra information about Commercial services..."
  },
  {
    title: "Enterprise / PSU Projects",
    description: "Customized solutions for large-scale projects, with a focus on quality and efficiency.",
    imgSrc: i3,
    extraInfo: "Extra information about Enterprise / PSU Projects services..."
  },
  {
    title: "Supervision",
    description: "On-Site Supervision Service to ensure quality, safety, and efficiency.",
    imgSrc: i4,
    extraInfo: "Extra information about Supervision services..."
  }
];

const ServiceSteps = () => {
  const [selectedService, setSelectedService] = useState(null);
  const overlayRef = useRef();

  const openServiceDetails = (service) => {
    setSelectedService(service);
  };

  const closeServiceDetails = () => {
    setSelectedService(null);
  };

  const handleClickOutside = (event) => {
    if (overlayRef.current && !overlayRef.current.contains(event.target)) {
      closeServiceDetails();
    }
  };

  useEffect(() => {
    if (selectedService) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedService]);

  return (
    <div className='bg-purple-900'>
      <div className='flex flex-col items-center justify-around text-yellow-300 py-12 w-full'>
        <h2 className="text-3xl text-white text-center mb-6">Our Services</h2>
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {services.map((service, index) => (
            <motion.div
              key={index}
             
              className="flex flex-col items-center p-6 bg-white text-purple-900 rounded-lg shadow-lg cursor-pointer "
              onClick={() => openServiceDetails(service)}
            >
              <img src={service.imgSrc} alt={`Illustration for ${service.title}`} className="w-20 h-20 mb-4" />
              <h3 className="text-lg sm:text-xl text-center">{service.title}</h3>
            </motion.div>
          ))}
          <AnimatePresence>
            {selectedService && (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="absolute top-0 left-0 right-0 bottom-0 bg-white text-purple-900 rounded-lg shadow-lg p-6"
                ref={overlayRef}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
                    <img src={selectedService.imgSrc} alt={`Illustration for ${selectedService.title}`} className=" w-40 h-40" />
                  </div>
                  <div className="md:w-1/2 md:ml-4">
                    <h3 className="text-2xl mb-4">{selectedService.title}</h3>
                    <p className="text-lg mb-4">{selectedService.description}</p>
                    <p className="text-gray-700">{selectedService.extraInfo}</p>
                  </div>
                  {/* Talk toOur Expert */}
                

                  
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div id="section2" className="w-full">
        <Section2 />
      </div>
    </div>
  );
};

export default ServiceSteps;