import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import i1 from '../../assets/services/1.png';
import i2 from '../../assets/services/2.png';
import i3 from '../../assets/services/3.png';
import i4 from '../../assets/services/4.png';
import { Link } from 'react-router-dom';
import Section2 from './section2';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ServiceSteps = () => {
  const services = [
    {
      title: "Residential",
      description: "Homes and More that are built to last, with quality materials and expert craftsmanship.",
      imgSrc: i1
    },
    {
      title: "Commercial",
      description: "Offices, Retail Spaces, and more, built to meet your business needs.",
      imgSrc: i2
    },
    {
      title: "Enterprise / PSU Projects",
      description: "Customized solutions for large-scale projects, with a focus on quality and efficiency.",
      imgSrc: i3
    },
    {
      title: "Supervision",
      description: "On-Site Supervision Service to ensure quality, safety, and efficiency.",
      imgSrc: i4
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


 

  return (
    <div className='bg-purple-900'>
      <div className='flex flex-col items-center justify-around text-yellow-300 py-12 w-full'>
        <h2 className="text-3xl text-white text-center  mb-6">Our Services</h2>
        <div className="hidden w-[80%] md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
{services.map((step, index) => (
  <div key={index} className="p-2 sm:p-4 border hover:bg-gray-300 border-purple-900 transition-all duration-200 hover:scale-105 bg-white text-purple-900 rounded-lg shadow-lg">
    <img src={step.imgSrc} alt={`Illustration for ${step.title}`} className="mb-2 sm:mb-4" />
     <h3 className="text-lg text-center  mb-5 sm:text-xl text-gray-950">{step.title}</h3>
    <p className="text-sm sm:text-base text-gray-950">{step.description}</p>
  </div>
))}
</div>
        <div className="w-[80%] md:hidden lg:hidden">
          <Slider {...settings}>
            {services.map((step, index) => (
              <div key={index} className="p-2 sm:p-4 border bg-white text-purple-900 border-gray-200 rounded-lg shadow-lg">
                <img src={step.imgSrc} alt={`Illustration for ${step.title}`} className="mb-2 sm:mb-4 w-full h-auto" />
                <h3 className="text-lg sm:text-xl text-gray-950">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-950">{step.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div id="section2" className="w-full">
        <Section2 />
      </div>
      <div>
   
      </div>
    </div>
  );
};

export default ServiceSteps;




