import React, { useState } from 'react';
import Slider from 'react-slick';
import i1 from '../../assets/services/1.png';
import i2 from '../../assets/services/2.png';
import i3 from '../../assets/services/3.png';
import i4 from '../../assets/services/4.png';
import Section2 from './section2';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const services = [
  {
    title: "Residential",
    description: "Homes and More that are built to last, with quality materials and expert craftsmanship.",
    imgSrc: i1,
    extraInfo: "Extra information about Residential services..."
  },
  {
    title: "Commercial",
    description: "Offices, Retail Spaces, and more, built to meet your business needs.",
    imgSrc: i2,
    extraInfo: "Extra information about Commercial services..."
  },
  {
    title: "Enterprise / PSU Projects",
    description: "Customized solutions for large-scale projects, with a focus on quality and efficiency.",
    imgSrc: i3,
    extraInfo: "Extra information about Enterprise / PSU Projects services..."
  },
  {
    title: "Supervision",
    description: "On-Site Supervision Service to ensure quality, safety, and efficiency.",
    imgSrc: i4,
    extraInfo: "Extra information about Supervision services..."
  }
];

const ServiceSteps = () => {
  const [sliderView, setSliderView] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleCardClick = (index) => {
    setSelectedIndex(index);
    setSliderView(true);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    initialSlide: selectedIndex,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    beforeChange: (current, next) => setSelectedIndex(next),
  };

  return (
    <div className="bg-purple-900">
      <div className="flex flex-col items-center justify-around text-yellow-300 py-12 w-full">
        <h2 className="text-3xl text-white text-center mb-6">Our Services</h2>
        {!sliderView ? (
          <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white text-purple-900 rounded-lg shadow-lg cursor-pointer"
                onClick={() => handleCardClick(index)}
                style={{ height: 'auto' }}
              >
                <img src={service.imgSrc} alt={`Illustration for ${service.title}`} className="w-full mb-4" />
                <h3 className="text-lg sm:text-xl text-center mb-4">{service.title}</h3>
                {/* <p className="text-center mb-4">{service.description}</p> */}
              </div>
            ))}
          </div>
        ) : (
          <div className="w-[80%] slider-wrapper">
            <Slider {...sliderSettings}>
              {services.map((service, index) => (
                <div key={index} className={`flexflex-col items-center p-4 bg-white text-purple-900 rounded-lg shadow-lg service-slide ${selectedIndex === index ? 'active' : ''}`}>
                  <img src={service.imgSrc} alt={`Illustration for ${service.title}`} className="w-full mb-4" />
                  <h3 className="text-lg sm:text-xl text-center mb-4">{service.title}</h3>
                  <p className="text-center mb-4">{service.description}</p>
                  <p className="text-center mb-4">{service.extraInfo}</p>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
      <div id="section2" className="w-full">
        <Section2 />
      </div>
    </div>
  );
};

export default ServiceSteps;
