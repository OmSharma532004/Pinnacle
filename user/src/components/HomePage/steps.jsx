import React from 'react';
import step1Image from "./stepsAssets/1.png"
import step2Image from "./stepsAssets/2.png"
import step3Image from "./stepsAssets/3.png"
import step4Image from "./stepsAssets/4.png"

const ServiceSteps = () => {
  const steps = [
    {
      title: "Step 1: Choose Your Material",
      description: "Select from a wide range of quality materials.",
      image: step1Image
    },
    {
      title: "Step 2: Co-create Your Dream House",
      description: "Work with our architects to design your dream home.",
      image: step2Image
    },
    {
      title: "Step 3: Speak to Our Representative",
      description: "Discuss your plans and get professional advice.",
      image: step3Image
    },
    {
      title: "Step 4: Build Your Dream Home",
      description: "Watch as we bring your vision to life.",
      image: step4Image
    }
  ];

  return (
    <div className="bg-purple-800 text-yellow-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Home Construction Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div key={index} className="p-4 border bg-yellow-400 text-purple-900 border-gray-200 rounded-lg shadow-lg">
              <img src={step.image} alt={`Illustration for ${step.title}`} className="mb-4" />
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSteps;
