import React from 'react';
import i1 from "./serviceFolder/1.png";
import i2 from "./serviceFolder/2.png";
import i3 from "./serviceFolder/3.png";

const ServiceHighlights = () => {
  const services = [
    {
      title: "470+ Quality Checks",
      description: "We provide with 470+ quality checks conducted by our site engineers",
      icon: i1 // Replace with actual icon path or component
    },
    {
      title: "No Cost Overrun Policy",
      description: "No price escalations once the project starts. No Cost Overrun Policy.",
      icon: i2// Replace with actual icon path or component
    },
    {
      title: "5 Year Warranty",
      description: "5 years warranty covered on super and sub structure including underground sump",
      icon: i3 // Replace with actual icon path or component
    },
    {
      title: "Verified Contractors",
      description: "Only verified contractors are provided by us to ensure quality work",
      icon: i2 // Replace with actual icon path or component
    },
    {
      title: "Transparent Quotations",
      description: "Quotations are transparent & cover every detail that goes into construction",
      icon: i1 // Replace with actual icon path or component
    },
    {
      title: "Easy Material Purchase",
      description: "Buying building materials & supplies made easier, at just a tap of a finger",
      icon: i3 // Replace with actual icon path or component
    }
  ];

  return (
    <div className="bg-purple-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center">‘Best in class’ Service ensured</h2>
        <p className="text-center mb-10">Making construction reliable, simple, and transparent.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
          {services.map((service, index) => (
            <div key={index} className="p-4 border text-red-700 font-bold bg-yellow-400 border-gray-200 rounded-lg shadow-sm">
              <div className="flex justify-center items-center mb-4">
                {/* Icon component or image */}
                <img src={service.icon} alt={service.title} className="w-12 h-12"/>
              </div>
              <h3 className=" mb-[20px] text-black text-2xl">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-red-600 p-5 text-3xl font-bold  rounded">
            Book Free Consultation →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceHighlights;
