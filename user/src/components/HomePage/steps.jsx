import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaBuilding, FaIndustry, FaTools } from 'react-icons/fa';

const services = [
  {
    title: "Residential",
    description: "Homes and More that are built to last, with quality materials and expert craftsmanship.",
    icon: <FaHome className="text-6xl text-purple-800" />,
    extraInfo: "We offer a variety of residential construction services, from new home builds to renovations. Our team ensures high-quality workmanship and attention to detail in every project."
  },
  {
    title: "Commercial",
    description: "Offices, Retail Spaces, and more, built to meet your business needs.",
    icon: <FaBuilding className="text-6xl text-purple-800" />,
    extraInfo: "Our commercial construction services include office buildings, retail spaces, and industrial facilities. We focus on creating functional and aesthetically pleasing spaces that cater to your business requirements."
  },
  {
    title: "Enterprise / PSU Projects",
    description: "Customized solutions for large-scale projects, with a focus on quality and efficiency.",
    icon: <FaIndustry className="text-6xl text-purple-800" />,
    extraInfo: " We handle large-scale projects for enterprises and public sector units (PSUs), delivering customized solutions that prioritize quality and efficiency. Our expertise spans various industries and project types."
  },
  {
    title: "Supervision",
    description: "On-Site Supervision Service to ensure quality, safety, and efficiency.",
    icon: <FaTools className="text-6xl text-purple-800" />,
    extraInfo: "Our supervision services ensure that all construction activities meet the highest standards of quality, safety, and efficiency. We provide on-site supervisors to oversee every aspect of your project."
  }
];

const ServiceSteps = () => {
  const [servicesData, setServicesData] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [activeFilter, setActiveFilter] = useState('Residential');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [position, setPosition] = useState(0);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    setServicesData(services);
    setFilteredServices(services);
  }, []);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    setPosition(-diff);
  };

  const handleTouchEnd = () => {
    setPosition(0);
    if (currentIndex === filteredServices.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
    }, 500);

    if (item === 'All') {
      setFilteredServices(servicesData);
    } else {
      const filtered = servicesData.filter((service) => service.title.includes(item));
      setFilteredServices(filtered);
    }
    setCurrentIndex(0); // Reset to the first item of the filtered results
  };

  const service = filteredServices[currentIndex];

  return (
    <div className="my-8 px-4 sm:px-8 lg:px-16">
      <h2 className="text-5xl font-light text-center mb-8">
        Explore Our <span className="text-purple-800">Services</span>
      </h2>

      <div className="flex flex-wrap justify-center mb-8">
        {['Residential', 'Commercial', 'Enterprise / PSU Projects', 'Supervision'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleFilter(item)}
            className={`cursor-pointer px-4 py-2 m-2 text-xl rounded-lg ${
              activeFilter === item ? 'bg-purple-800 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="flex overflow-hidden w-full sm:w-2/3 md:w-1/2 lg:w-1/3"
          style={{ transform: `translateX(${position}px)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {filteredServices.length > 0 && service && (
            <div className="flex flex-col font-light justify-center items-center text-center gap-4">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <div>
                <h4 className="text-2xl">{service.title}</h4>
                <p className="mt-2 text-xl text-gray-600">
                  {service.description}
                </p>
                <p className="mt-2 text-xl text-gray-500">
                  {service.extraInfo}
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <div className="flex justify-center mt-8">
        {filteredServices.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${currentIndex === index ? 'bg-purple-800' : 'bg-gray-300'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSteps;
