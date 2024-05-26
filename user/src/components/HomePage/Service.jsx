import React from 'react';
import experienceImage from "./serviceAssets/1.png";
import qualityImage from "./serviceAssets/2.png";
import serviceImage from "./serviceAssets/3.png";
import reliabilityImage from "./serviceAssets/4.png";
import satisfactionImage from "./serviceAssets/5.png";

const ServiceFeatures = () => {
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

  return (
    <div className="bg-purple-800 py-12 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl text-center text-yellow-300 mb-6">Why Choose Us for Your Construction Needs?</h2>
        <div className=" flex items-center justify-center flex-wrap gap-4">
          {features.map((feature, index) => (
            <div key={index} className="p-4 bg-white h-[450px] w-[200px] border border-purple-500 rounded-lg shadow-lg">
              <img src={feature.image} alt={feature.title} className="w-full mb-4"/>
              <h3 className="text-lg ">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;
