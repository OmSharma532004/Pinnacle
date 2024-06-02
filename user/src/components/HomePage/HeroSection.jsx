import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './image.png';
import image2 from '../../assets/loginPage/i2.png';
import image3 from '../../assets/loginPage/i3.png';
import { Link } from 'react-router-dom';


const slides = [
  {
    image: image1,
    content: (
      <>
        <h1 className="text-6xl  mb-4">BuildingIt</h1>
        <p className="mb-4">Step into the home you've always dreamed of, built to the highest standard of quality.</p>
        <ul className="mb-4">
          <li>4500+ Homes</li>
          <li>470+ Quality Checks</li>
          <li>100% Money Safety</li>
        </ul>
        <button className="bg-purple-500 hover:bg-orange-600 text-white  py-2 px-4 rounded">Learn More</button>
      </>
    ),
  },
  {
    image: image2,
    content: (
      <>
         <div className=" w-full p-[50px] pb-[100px] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h1 className="sm:text-4xl  flex-col text-xl items-center justify-center   mb-3">"Constructing Dreams, Shaping Futures"</h1>
            <p className="mb-[50px] font-light sm:text-xl">Welcome to <b className='  sm:text-2xl'>Building It</b>, where construction isn't just about building structures; it's about constructing dreams and shaping futures. Our ethos is rooted in reliability, professionalism, and a commitment to excellence that sets us apart in the construction industry.</p>
            
            <Link className=' bg-yellow-300 text-gray-800 sm:text-xl   p-4 rounded-xl' to={"/dashboard"}>Calculate Estimate</Link> </div>
          <div>
           
            
            
          </div>
        </div>
       
      </div>
    </div></>
    ),
  },
  {
    image: image3,
    content: (
      <>
        <h1 className="text-6xl  mb-4">Your Dream Home</h1>
        <p className="mb-4">We make your vision a reality with our expert team.</p>
        <form>
          <div className="mb-4">
            <input type="text" placeholder="Name*" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <input type="tel" placeholder="Mobile Number*" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <button type="submit" className="bg-purple-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-full">
            BOOK FREE CONSULTATION
          </button>
        </form>
      </>
    ),
  }
];

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  
  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[500px]">
            <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-20 text-white">
              <div className="max-w-6xl mx-auto py-20 px-10">
                {slide.content}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
