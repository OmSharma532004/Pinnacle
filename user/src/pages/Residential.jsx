import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUsers, FaClipboardCheck, FaSmile } from 'react-icons/fa';
import Footer from '../components/HomePage/Footer';

const whyBuildWorx = [
  {
    title: "Unmatched Expertise",
    description: "Our team brings years of experience and a deep understanding of residential construction, ensuring that every project is executed with precision and excellence.",
    icon: <FaUsers className="text-6xl text-purple-800" />,
  },
  {
    title: "Customer-Centric Approach",
    description: "At BuildWorx, our primary goal is customer satisfaction. We work closely with homeowners to understand their vision and deliver results that exceed expectations. Our dedication to quality, transparency, and timely delivery has resulted in numerous successful projects and satisfied clients.",
    icon: <FaSmile className="text-6xl text-purple-800" />,
  },
  {
    title: "Comprehensive Solutions",
    description: "From initial planning and design to final construction and finishing touches, BuildWorx offers comprehensive solutions tailored to meet the unique needs of each homeowner. We take pride in transforming ideas into beautifully crafted homes.",
    icon: <FaClipboardCheck className="text-6xl text-purple-800" />,
  },
  {
    title: "Join Our Satisfied Homeowners",
    description: "Join the growing list of satisfied homeowners who have trusted BuildWorx with their residential construction needs. Experience the difference of working with a team that is committed to making your dream home a reality.",
    icon: <FaHome className="text-6xl text-purple-800" />,
  },
];

const ResidentialPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [position, setPosition] = useState(0);
  const [startX, setStartX] = useState(0);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    setCurrentIndex(0); // Reset to the first item
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
    if (currentIndex === whyBuildWorx.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleFilter = (index) => {
    setCurrentIndex(index);
    setAnimateCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
    }, 500);
  };

  const item = whyBuildWorx[currentIndex];

  return (
   <div>
     <div className="bg-white w-full p-6 md:p-12 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Introduction Section */}
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="md:col-span-2 w-full md:w-[60%]">
            <h2 className="text-3xl md:text-5xl font-light text-purple-800 mb-3">
              BuildWorx: Your Trusted Partner for Residential Construction Solutions
            </h2>
            <p className="mb-6 md:mb-12 font-light text-lg md:text-xl">
              BuildWorx specializes in providing top-quality residential construction solutions for homeowners. With a proven track record of successfully completing over 100 major projects across Delhi NCR, we have earned the trust and satisfaction of countless homeowners.
            </p>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <FaHome className="text-6xl md:text-8xl text-purple-800" />
            </div>
          </div>
        </div>

        {/* Why BuildWorx Section */}
        <div className="mt-6 md:mt-12">
          <h3 className="text-3xl md:text-5xl font-light text-purple-800 mb-5 text-center">
            Why BuildWorx?
          </h3>

          <div className="flex flex-wrap justify-center mb-8">
            {whyBuildWorx.map((_, index) => (
              <div
                key={index}
                onClick={() => handleFilter(index)}
                className={`cursor-pointer px-4 py-2 m-2 text-sm md:text-lg rounded-lg ${
                  currentIndex === index ? 'bg-purple-800 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                {_.title}
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
              {whyBuildWorx.length > 0 && item && (
                <div className="flex flex-col font-light justify-center items-center text-center gap-4">
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl">{item.title}</h4>
                    <p className="mt-2 text-lg md:text-xl text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          <div className="flex justify-center mt-8">
            {whyBuildWorx.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 mx-1 rounded-full ${currentIndex === index ? 'bg-purple-800' : 'bg-gray-300'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
     
    </div>
    <Footer/>
   </div>
  );
};

export default ResidentialPage;
