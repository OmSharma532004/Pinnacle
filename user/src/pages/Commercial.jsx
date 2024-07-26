import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaUsers, FaClipboardCheck, FaSmile, FaHospital, FaHotel, FaUtensils, FaShoppingCart, FaBriefcase } from 'react-icons/fa';
import Footer from '../components/HomePage/Footer';

const whyBuildWorxCommercial = [
  {
    title: "Diverse Expertise",
    description: "Our team possesses a wealth of experience in handling various commercial construction projects. Whether it's a state-of-the-art hospital, a luxury hotel, a trendy restaurant, a bustling mall, or a functional SCO, we have the skills and knowledge to deliver outstanding results.",
    icon: <FaUsers className="text-6xl text-purple-800" />,
  },
  {
    title: "Client-Centric Approach",
    description: "We prioritize our clients' visions and requirements, working closely with them to understand their specific needs and goals. This collaborative approach ensures that each project is tailored to meet and exceed expectations, resulting in functional, aesthetically pleasing, and efficient commercial spaces.",
    icon: <FaSmile className="text-6xl text-purple-800" />,
  },
  {
    title: "Quality and Compliance",
    description: "At BuildWorx, quality is non-negotiable. We adhere to the highest standards of construction, utilizing premium materials and advanced techniques to ensure durability and excellence. Additionally, we ensure full compliance with all relevant regulations and standards, providing peace of mind to our clients.",
    icon: <FaClipboardCheck className="text-6xl text-purple-800" />,
  },
  {
    title: "Timely Delivery",
    description: "We understand the importance of time in commercial projects. Our efficient project management and streamlined processes enable us to deliver projects on time without compromising on quality. This commitment to timely delivery helps our clients to commence their operations as planned.",
    icon: <FaBuilding className="text-6xl text-purple-800" />,
  },
  {
    title: "Innovative Solutions",
    description: "Embracing the latest trends and technologies in construction, we bring innovative solutions to every project. Our forward-thinking approach ensures that our commercial spaces are not only functional but also equipped to meet future demands.",
    icon: <FaClipboardCheck className="text-6xl text-purple-800" />,
  },
];

const CommercialPage = () => {
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
    if (currentIndex === whyBuildWorxCommercial.length - 1) {
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

  const item = whyBuildWorxCommercial[currentIndex];

  return (
   <div>
      <div className="bg-white w-full p-6 md:p-12 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Introduction Section */}
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="md:col-span-2 w-full md:w-[60%]">
            <h2 className="text-3xl md:text-5xl font-light text-purple-800 mb-3">
              BuildWorx: Comprehensive Commercial Construction Solutions
            </h2>
            <p className="mb-6 md:mb-12 font-light text-lg md:text-xl">
              BuildWorx is your go-to partner for top-tier commercial construction solutions, specializing in a wide range of projects including hospitals, hotels, restaurants, malls, and SCOs (Shop-Cum-Office complexes) across Delhi NCR. Our commitment to excellence and extensive experience in the commercial sector ensure that every project we undertake is a testament to quality, reliability, and innovation.
            </p>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <FaBuilding className="text-6xl md:text-8xl text-purple-800" />
            </div>
          </div>
        </div>

        {/* Why BuildWorx Section */}
        <div className="mt-6 md:mt-12">
          <h3 className="text-3xl md:text-5xl font-light text-purple-800 mb-5 text-center">
            Why BuildWorx for Commercial Projects?
          </h3>

          <div className="flex flex-wrap justify-center mb-8">
            {whyBuildWorxCommercial.map((_, index) => (
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
              {whyBuildWorxCommercial.length > 0 && item && (
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
            {whyBuildWorxCommercial.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 mx-1 rounded-full ${currentIndex === index ? 'bg-purple-800' : 'bg-gray-300'}`}
              ></div>
            ))}
          </div>
        </div>

        {/* Our Portfolio Section */}
        <div className="mt-6 md:mt-12">
          <h3 className="text-3xl md:text-5xl font-light text-purple-800 mb-5 text-center">
            Our Portfolio
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <FaHospital className="text-6xl text-purple-800 mb-4" />
              <h4 className="text-xl md:text-2xl">Hospitals</h4>
              <p className="mt-2 text-lg md:text-xl text-gray-600 text-center">
                Designing and constructing modern healthcare facilities that are patient-centric and equipped with advanced medical infrastructure.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaHotel className="text-6xl text-purple-800 mb-4" />
              <h4 className="text-xl md:text-2xl">Hotels</h4>
              <p className="mt-2 text-lg md:text-xl text-gray-600 text-center">
                Creating luxurious and comfortable spaces that offer an exceptional guest experience.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaUtensils className="text-6xl text-purple-800 mb-4" />
              <h4 className="text-xl md:text-2xl">Restaurants</h4>
              <p className="mt-2 text-lg md:text-xl text-gray-600 text-center">
                Building vibrant and inviting dining spaces that enhance the culinary experience.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaShoppingCart className="text-6xl text-purple-800 mb-4" />
              <h4 className="text-xl md:text-2xl">Malls</h4>
              <p className="mt-2 text-lg md:text-xl text-gray-600 text-center">
                Developing dynamic retail environments that attract shoppers and enhance the retail experience.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaBriefcase className="text-6xl text-purple-800 mb-4" />
              <h4 className="text-xl md:text-2xl">SCOs</h4>
              <p className="mt-2 text-lg md:text-xl text-gray-600 text-center">
                Constructing versatile Shop-Cum-Office complexes that cater to both retail and business needs.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaClipboardCheck className="text-6xl text-purple-800 mb-4" />
              <h4 className="text-xl md:text-2xl">Office Spaces</h4>
              <p className="mt-2 text-lg md:text-xl text-gray-600 text-center">
                Creating functional and aesthetically pleasing office spaces that enhance productivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
   </div>
  );
};

export default CommercialPage;
