import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import experienceImage from "./serviceAssets/1.png";
import qualityImage from "./serviceAssets/2.png";
import serviceImage from "./serviceAssets/3.png";
import reliabilityImage from "./serviceAssets/4.png";
import satisfactionImage from "./serviceAssets/5.png";
import step1Image from "./stepsAssets/1.png";
import step2Image from "./stepsAssets/2.png";
import step3Image from "./stepsAssets/3.png";
import step4Image from "./stepsAssets/4.png";

const ServiceFeatures = () => {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
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

  const features = [
    {
      title: "Experience",
      description: "Benefit from our industry expertise.",
      image: experienceImage
    },
    {
      title: "Quality",
      description: "We ensure top-notch craftsmanship in every detail.",
      image: qualityImage
    },
    {
      title: "Personalized Service",
      description: "Work closely with our team to realize your vision.",
      image: serviceImage
    },
    {
      title: "Reliability",
      description: "Trust us to meet deadlines and deliver results.",
      image: reliabilityImage
    },
    {
      title: "Customer Satisfaction",
      description: "Your happiness is our priority; we exceed expectations.",
      image: satisfactionImage
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStepIndex((prevIndex) => (prevIndex + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [steps.length]);

  const handlePrev2 = () => {
    setCurrentStepIndex((prevIndex) => (prevIndex - 1 + steps.length) % steps.length);
  };

  const handleNext2 = () => {
    setCurrentStepIndex((prevIndex) => (prevIndex + 1) % steps.length);
  };
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [features.length]);

  const handlePrev = () => {
    setCurrentFeatureIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
  };

  const handleNext = () => {
    setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  return (
    <div className=" p-8 ">
       <div className=" bg-purple-900 mb-[50px] py-12">
      <div className="sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl  text-center text-pink-300 font-mono mb-6">Home Construction Steps</h2>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div key={index} className="p-2 sm:p-4 border bg-pink-300 hover:bg-gray-300 transition-all duration-200 hover:scale-105 text-purple-900 border-purple-950  border-4 rounded-lg shadow-lg">
              <img src={step.image} alt={`Illustration for ${step.title}`} className="mb-2 sm:mb-4" />
              <h3 className="text-lg font-mono mb-5 sm:text-xl ">{step.title}</h3>
              <p className="text-sm sm:text-base ">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="md:hidden relative text-center">
          <div className="p-4 border bg-pink-300 text-purple-900 h-[450px] w-[300px] mx-auto border-gray-200 rounded-lg shadow-lg">
            <img src={steps[currentStepIndex].image} alt={`Illustration for ${steps[currentStepIndex].title}`} className="w-full mb-4" />
            <h3 className="text-lg">{steps[currentStepIndex].title}</h3>
            <p className="text-sm ">{steps[currentStepIndex].description}</p>
          </div>
          <div className="flex justify-between mt-4">
            <button onClick={handlePrev2} className="bg-yellow-300 absolute top-[45%]  text-purple-800 py-2 px-4 rounded">
              <FaArrowLeft />
            </button>
            <button onClick={handleNext2} className="bg-yellow-300 absolute top-[45%] right-0 text-purple-800 py-2 px-4 rounded">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center text-purple-900 font-mono mb-[30px]">Why Choose Us for Your Construction Needs?</h2>
        <div className="hidden md:flex items-center justify-center  gap-4">
          {features.map((feature, index) => (
            <div key={index} className="p-4  h-[400px] w-[300px] border-4 hover:bg-white hover:text-purple-900 transition-all duration-200 hover:scale-105 bg-purple-900 text-pink-200 border-purple-950 rounded-lg shadow-lg">
              <img src={feature.image} alt={feature.title} className="w-full mb-4"/>
              <h3 className=" font-mono text-lg">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="md:hidden relative text-center">
          <div className="p-4 bg-purple-900 h-[450px] text-white w-[300px] mx-auto border border-purple-950 rounded-lg shadow-lg">
            <img src={features[currentFeatureIndex].image} alt={features[currentFeatureIndex].title} className="w-full mb-4"/>
            <h3 className="text-lg font-mono">{features[currentFeatureIndex].title}</h3>
            <p>{features[currentFeatureIndex].description}</p>
          </div>
          <div className="flex justify-between mt-4">
            <button onClick={handlePrev} className="bg-yellow-300 absolute top-[45%] text-purple-800 py-2 px-4 rounded">
              <FaArrowLeft />
            </button>
            <button onClick={handleNext} className="bg-yellow-300 absolute top-[45%] right-0 text-purple-800 py-2 px-4 rounded">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;



