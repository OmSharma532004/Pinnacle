import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import step1Image from "./stepsAssets/1.png";
import step2Image from "./stepsAssets/2.png";
import step3Image from "./stepsAssets/3.png";
import step4Image from "./stepsAssets/4.png";
import { Link } from 'react-router-dom';

const ServiceSteps = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStepIndex((prevIndex) => (prevIndex + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [steps.length]);

  const handlePrev = () => {
    setCurrentStepIndex((prevIndex) => (prevIndex - 1 + steps.length) % steps.length);
  };

  const handleNext = () => {
    setCurrentStepIndex((prevIndex) => (prevIndex + 1) % steps.length);
  };

  return (
    <div>
       <div className="bg-white w-full p-[50px] pb-[100px] text-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="">
          <div className="md:col-span-2">
            <h1 className="text-4xl flex-col items-center justify-center text-purple-800 mb-3">On-Site Supervision Service</h1>
            <p className="mb-[50px] font-light text-xl">
              Our On-Site Supervision Service is a specialized service focused exclusively on overseeing construction activities directly on-site to ensure that the project aligns with the client’s standards and expectations. Our service provides vigilant, day-to-day supervision, ensuring quality, safety, and efficiency from ground-breaking to project completion.
            </p>
            <p className="mb-[50px] font-light text-xl">
              Our dedicated supervision team brings extensive experience, attention to detail, and a commitment to excellence, providing peace of mind and exceptional outcomes. With our On-Site Supervision Service, you’re not just hiring a supervisor; you’re gaining a steadfast partner committed to the success of your construction project.
            </p>
            <Link className='bg-yellow-300 text-gray-800 text-xl p-4 rounded-xl' to={"/supervision"}>Book Supervision</Link>
          </div>
         
        </div>
       
      </div>
    </div>
      <div className="bg-purple-800 text-yellow-300 py-12">
      <div className="sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center mb-6">Home Construction Steps</h2>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div key={index} className="p-2 sm:p-4 border bg-white text-purple-900 border-gray-200 rounded-lg shadow-lg">
              <img src={step.image} alt={`Illustration for ${step.title}`} className="mb-2 sm:mb-4" />
              <h3 className="text-lg sm:text-xl text-gray-950">{step.title}</h3>
              <p className="text-sm sm:text-base text-gray-950">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="md:hidden relative text-center">
          <div className="p-4 border bg-white text-purple-900 h-[450px] w-[300px] mx-auto border-gray-200 rounded-lg shadow-lg">
            <img src={steps[currentStepIndex].image} alt={`Illustration for ${steps[currentStepIndex].title}`} className="w-full mb-4" />
            <h3 className="text-lg text-gray-950">{steps[currentStepIndex].title}</h3>
            <p className="text-sm text-gray-950">{steps[currentStepIndex].description}</p>
          </div>
          <div className="flex justify-between mt-4">
            <button onClick={handlePrev} className="bg-yellow-300 absolute top-[45%]  text-purple-800 py-2 px-4 rounded">
              <FaArrowLeft />
            </button>
            <button onClick={handleNext} className="bg-yellow-300 absolute top-[45%] right-0 text-purple-800 py-2 px-4 rounded">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ServiceSteps;
