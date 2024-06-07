import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import experienceImage from "./serviceAssets/1.png";
import qualityImage from "./serviceAssets/2.png";
import serviceImage from "./serviceAssets/3.png";
import reliabilityImage from "./serviceAssets/4.png";
import satisfactionImage from "./serviceAssets/5.png";

const ServiceFeatures = () => {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

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
    <div className="bg-purple-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl text-center text-yellow-300 mb-6">Why Choose Us for Your Construction Needs?</h2>
        <div className="hidden md:flex items-center justify-center  gap-4">
          {features.map((feature, index) => (
            <div key={index} className="p-4 bg-white h-[350px] w-[200px] border border-purple-500 rounded-lg shadow-lg">
              <img src={feature.image} alt={feature.title} className="w-full mb-4"/>
              <h3 className="text-lg">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="md:hidden relative text-center">
          <div className="p-4 bg-white h-[450px] w-[300px] mx-auto border border-purple-500 rounded-lg shadow-lg">
            <img src={features[currentFeatureIndex].image} alt={features[currentFeatureIndex].title} className="w-full mb-4"/>
            <h3 className="text-lg">{features[currentFeatureIndex].title}</h3>
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



