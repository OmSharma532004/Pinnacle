import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaTools, FaCheckCircle, FaHandHoldingUsd, FaClock, FaSmile } from 'react-icons/fa';
import step1Image from "./stepsAssets/1.png";
import step2Image from "./stepsAssets/2.png";
import step3Image from "./stepsAssets/3.png";
import step4Image from "./stepsAssets/4.png";
import { Link } from 'react-router-dom';

const ServiceFeatures = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const steps = [
    {
      title: "Connect With Our Experts",
      description: "Schedule a consultation with our team to discuss your project",
      code :<Link to="/demo">Book Free Consultation</Link>,
      image: step1Image
    },
    {
      title: "Get Your Free Consultation",
      description: " Share your ideas and requirements with us.",
      image: step2Image
    },
    {
      title: "Engage With Us",
      description: " Collaborate with our team to plan your project.",
      image: step3Image
    },
    {
      title: "Start Construction",
      description: " Watch your vision come to life with our expert team.",
      image: step4Image
    }
  ];
  
  const features = [
    {
      title: "Experience",
      description: "Benefit from our industry expertise.",
      icon: <FaTools className="w-12 h-12 text-purple-900 mb-4"/>
    },
    {
      title: "Quality",
      description: "We ensure top-notch craftsmanship in every detail.",
      icon: <FaCheckCircle className="w-12 h-12 text-purple-900 mb-4"/>
    },
    {
      title: "Personalized Service",
      description: "Work closely with our team to realize your vision.",
      icon: <FaHandHoldingUsd className="w-12 h-12 text-purple-900 mb-4"/>
    },
    {
      title: "Reliability",
      description: "Trust us to meet deadlines and deliver results.",
      icon: <FaClock className="w-12 h-12 text-purple-900 mb-4"/>
    },
    {
      title: "Customer Satisfaction",
      description: "Your happiness is our priority; we exceed expectations.",
      icon: <FaSmile className="w-12 h-12 text-purple-900 mb-4"/>
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

  const handleStepClick = (index) => {
    setCurrentStepIndex(index);
  };

  return (
    <div className="p-8 bg-white">
      <div className="py-7 pb-4">
        <div className="max-w-7xl bg-purple-900 rounded-xl py-4  mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-white mb-6">How It Works</h2>
          <div className="flex justify-center items-center mb-12">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className={`md:w-10 md:h-10 lg:h-10 lg:w-10 w-5 h-5 rounded-full flex items-center justify-center text-black cursor-pointer ${currentStepIndex === index ? 'bg-white' : 'bg-yellow-300'}`} 
                  onClick={() => handleStepClick(index)}
                >
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-8 h-0.5 bg-yellow-300 mx-2"></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mb-8">
            <div className="w-full md:w-1/3 flex flex-col items-center">
              {/* <img src={steps[currentStepIndex].image} alt={`Illustration for ${steps[currentStepIndex].title}`} className="w-4/5 mb-4 object-contain" /> */}
              <div className="bg-white p-5 font-light rounded-xl border-2 border-purple-900 flex flex-col items-center text-center">
                <h3 className="text-2xl text-purple-900 ">{steps[currentStepIndex].title}</h3>
                <p className="text-xl text-purple-900">{steps[currentStepIndex].description}</p>
                {
                  steps[currentStepIndex].code&&
                  <div className="mt-4 bg-purple-900 p-4 text-xl text-white rounded-lg">
                    {steps[currentStepIndex].code}
                  </div>
                }
              </div>
            </div>
          </div>
          {/* <div className="flex justify-center mt-4">
            <button onClick={handlePrev} className="bg-yellow-300 text-purple-800 py-2 px-4 rounded mx-2">
              <FaArrowLeft />
            </button>
            <button onClick={handleNext} className="bg-yellow-300 text-purple-800 py-2 px-4 rounded mx-2">
              <FaArrowRight />
            </button>
          </div> */}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center text-black mt-12 mb-8">Why Choose BuildWorX</h2>
          <div className="flex items-center justify-center flex-wrap gap-4">
            {features.map((feature, index) => (
              <div key={index} className="p-4 md:p-2 font-light w-[200px] h-[300px] lg:p-4 border bg-white transition-all duration-200 hover:scale-105 border-purple-950 rounded-lg shadow-lg mb-4 md:mb-2 lg:mb-4">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="mb-2 text-center text-2xl">{feature.title}</h3>
                <p className="text-center text-xl">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;
