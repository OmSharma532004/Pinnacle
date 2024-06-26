import React from 'react';
import { FaTools, FaBoxOpen, FaShieldAlt, FaCouch, FaDraftingCompass, FaClipboardCheck } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Resources = () => {
  const resources = [
    {
      title: "Loans For Construction",
      description: "Flexible loans tailored for construction projects, designed to meet your financial needs.",
      icon: <FaTools />
    },
    {
      title: "Packages",
      description: "Tailored service packages to fit your specific requirements and budget.",
      icon: <FaBoxOpen />
    },
    {
      title: "Trust And Security",
      description: "Emphasis on trust and security in every aspect of our services and partnerships.",
      icon: <FaShieldAlt />
    },
    {
      title: "Interiors",
      description: "Expert interior design services to enhance functionality and aesthetic appeal.",
      icon: <FaCouch />
    },
    {
      title: "Architects",
      description: "Experienced architects providing innovative design solutions for your projects.",
      icon: <FaDraftingCompass />
    },
    {
      title: "Audit Services",
      description: "Comprehensive audit services to ensure compliance and operational efficiency.",
      icon: <FaClipboardCheck />
    }
  ];

  return (
    <div className='flex flex-col bg-white items-center justify-around w-full'>
      <h2 className="text-4xl mb-9 text-purple-900 text-center">Resources</h2>
      <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 gap-4">
        {resources.map((resource, index) => (
          <div key={index} className="flex items-start p-4 bg-white text-purple-900 ">
            <div className="text-4xl mr-4 bg-purple-900 text-yellow-300 p-4">
              {resource.icon}
            </div>
            <div>
              <h3 className="text-lg sm:text-xl">{resource.title}</h3>
              <p className="text-sm sm:text-base">{resource.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
