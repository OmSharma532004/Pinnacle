import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Section2 from './section2';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images for Resources
import r1 from '../../assets/resources/1.png';
import r2 from '../../assets/resources/2.png';
import r3 from '../../assets/resources/3.png';
import r4 from '../../assets/resources/4.png';
import r5 from '../../assets/resources/5.png';
import r6 from '../../assets/resources/6.png';

const Resources = () => {
  const resources = [
    {
      title: "Loans For Construction",
      description: "Flexible loans tailored for construction projects, designed to meet your financial needs.",
      imgSrc: r1
    },
    {
      title: "Packages",
      description: "Tailored service packages to fit your specific requirements and budget.",
      imgSrc: r2
    },
    {
      title: "Trust And Security",
      description: "Emphasis on trust and security in every aspect of our services and partnerships.",
      imgSrc: r3
    },
    {
      title: "Interiors",
      description: "Expert interior design services to enhance functionality and aesthetic appeal.",
      imgSrc: r4
    },
    {
      title: "Architects",
      description: "Experienced architects providing innovative design solutions for your projects.",
      imgSrc: r5
    },
    {
      title: "Audit Services",
      description: "Comprehensive audit services to ensure compliance and operational efficiency.",
      imgSrc: r6
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
    <div className=''>
      <div className='flex flex-col items-center justify-around text-yellow-300 py-12 w-full'>
        <h2 className="text-4xl mb-9 text-purple-900  text-center font-mono ">Resources</h2>
        <div className="hidden w-[80%] md:grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {resources.map((resource, index) => (
            <div key={index} className="p-2 mb-9 w-[350px] sm:p-4 hover:bg-white hover:scale-105 hover:text-purple-900 transition-all duration-200  bg-purple-900 border-4 border-purple-900 text-white  rounded-lg shadow-lg">
              <img src={resource.imgSrc} alt={`Illustration for ${resource.title}`} className="mb-2 sm:mb-4" />
              <h3 className="text-lg font-mono sm:text-xl ">{resource.title}</h3>
              <p className="text-sm  sm:text-base ">{resource.description}</p>
            </div>
          ))}
        </div>
        <div className="w-[80%] md:hidden lg:hidden">
          <Slider {...settings}>
            {resources.map((resource, index) => (
              <div key={index} className="p-2 sm:p-4 border bg-white text-purple-900 border-gray-200 rounded-lg shadow-lg">
                <img src={resource.imgSrc} alt={`Illustration for ${resource.title}`} className="mb-2 sm:mb-4 w-full h-auto" />
                <h3 className="text-lg sm:text-xl text-gray-950">{resource.title}</h3>
                <p className="text-sm sm:text-base text-gray-950">{resource.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
    </div>
  );
};

export default Resources;
