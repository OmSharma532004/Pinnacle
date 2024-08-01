import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaClipboardCheck, FaHardHat, FaSearch, FaBullhorn, FaListAlt, FaTools, FaClock, FaFileAlt, FaUser } from 'react-icons/fa';
import {FaHandshake} from 'react-icons/fa';
import Footer from '../components/HomePage/Footer';
import { MdSupervisorAccount } from "react-icons/md";

const whyBuildWorxSupervision = [
  {
    title: "Expert Oversight",
    description: "Our team of experienced professionals provides expert oversight for ongoing projects, ensuring that every aspect of the construction meets the highest standards of quality and safety. We meticulously monitor the progress and execution of your project to prevent and address potential issues before they become catastrophic.",
    icon: <FaHardHat className="text-6xl text-purple-800" />,
  },
  {
    title: "Quality Assurance",
    description: "We conduct thorough audits to identify any discrepancies, defects, or subpar workmanship that could compromise the integrity of your project. Our detailed inspections and evaluations ensure that all work adheres to industry standards and your specific requirements.",
    icon: <FaClipboardCheck className="text-6xl text-purple-800" />,
  },
  {
    title: "Timely Interventions",
    description: "Addressing issues at the right time is crucial to preventing long-term damage and costly repairs. Our timely interventions help maintain the quality and structural soundness of your dream home or commercial space, giving you peace of mind.",
    icon: <FaBullhorn className="text-6xl text-purple-800" />,
  },
  {
    title: "Trusted Partnership",
    description: "BuildWorx is your reliable partner, committed to ensuring the success of your project. Our dedicated team works closely with you, providing transparent communication and actionable insights to keep your project on track and aligned with your vision.",
    icon: <FaHandshake className="text-6xl text-purple-800" />,
  },
  {
    title: "Comprehensive Reports",
    description: "We provide comprehensive audit reports that detail our findings, along with recommendations for corrective actions. These reports serve as valuable tools for you to make informed decisions and hold your vendors accountable.",
    icon: <FaFileAlt className="text-6xl text-purple-800" />,
  },
];

const SupervisionPage = () => {
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
    if (currentIndex === whyBuildWorxSupervision.length - 1) {
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

  const item = whyBuildWorxSupervision[currentIndex];

  return (
    <div>
       <div className="bg-white w-full p-6 md:p-12 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Introduction Section */}
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="md:col-span-2 w-full md:w-[60%]">
            <h2 className="text-3xl md:text-5xl font-light text-purple-800 mb-3">
              BuildWorx: Expert Supervision and Audit Services for Ongoing Projects
            </h2>
            <p className="mb-6 md:mb-12 font-light text-lg md:text-xl">
              At BuildWorx, we understand that clients, especially homeowners and commercial project owners, are not always fully satisfied with the work being delivered by their vendors. Quality issues can arise, posing significant risks to the structural integrity and overall success of your project. This is where our specialized Supervision and Audit services come into play.
            </p>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <FaUser  className="text-6xl md:text-9xl text-purple-800" />
            </div>
          </div>
        </div>

        {/* Why BuildWorx Section */}
        <div className="mt-6 md:mt-12">
          <h3 className="text-3xl md:text-5xl font-light text-purple-800 mb-5 text-center">
            Why Choose BuildWorx for Supervision and Audit Services?
          </h3>

          <div className="flex flex-wrap justify-center mb-8">
            {whyBuildWorxSupervision.map((_, index) => (
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
              {whyBuildWorxSupervision.length > 0 && item && (
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
            {whyBuildWorxSupervision.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 mx-1 rounded-full ${currentIndex === index ? 'bg-purple-800' : 'bg-gray-300'}`}
              ></div>
            ))}
          </div>
        </div>

        {/* Our Supervision and Audit Services Section */}
        <div className="mt-6 md:mt-12">
          <h3 className="text-3xl md:text-5xl font-light text-purple-800 mb-5 text-center">
            Our Supervision and Audit Services Include:
          </h3>

          <div className=" flex my-[40px] md:flex-row lg:flex-row flex-col items-start justify-center gap-8">
            <div className="flex flex-col items-center">
              <FaSearch className="text-6xl text-purple-800 mb-4" />
              <h4 className="text-xl md:text-2xl">Regular Inspections</h4>
              <p className="mt-2 text-lg md:text-xl text-gray-600 text-center">
                Frequent on-site visits to monitor ongoing work and ensure compliance with quality standards.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaListAlt className="text-6xl text-purple-800 mb-4" />
              <h4 className="text-xl md:text-2xl">Detailed Audits</h4>
              <p className="mt-2 text-lg md:text-xl text-gray-600 text-center">
                Thorough examinations of all construction activities, materials, and processes.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaTools className="text-6xl text-purple-800 mb-4" />
              <h4 className="text-xl md:text-2xl">Quality Control</h4>
              <p className="mt-2 text-lg md:text-xl text-gray-600 text-center">
                Implementation of stringent quality control measures to maintain the highest standards.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaBullhorn className="text-6xl text-purple-800 mb-4" />
              <h4 className="text-xl md:text-2xl">Issue Resolution</h4>
              <p className="mt-2 text-lg md:text-xl text-gray-600 text-center">
                Prompt identification and resolution of any issues or defects found during inspections.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaClock className="text-6xl text-purple-800 mb-4" />
              <h4 className="text-xl md:text-2xl">Progress Tracking</h4>
              <p className="mt-2 text-lg md:text-xl text-gray-600 text-center">
                Monitoring project progress to ensure timely completion and adherence to the project timeline.
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

export default SupervisionPage;
