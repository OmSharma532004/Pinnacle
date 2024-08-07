import React from 'react';
import section2 from './section2.png';
import { Link } from 'react-router-dom';
import cover  from '../../assets/image.png'

const Section1 = () => {
  return (
    <div className="bg-white w-full p-[50px]  text-gray-800">

      
      <div className="max-w-6xl mx-auto">
       <div className=' flex md:flex-row flex-col lg:flex-row items-center justify-center'>
       <div className=" gap-10">
          <div className="md:col-span-2">
            <h2 className="text-5xl flex-col font-light items-center justify-center text-purple-800  mb-3">Constructing Dreams, Shaping Futures</h2>
            <p className="mb-[50px] font-light text-xl">Welcome to Build<b className='text-yellow-500  text-xl'>WorX</b>, where construction isn't just about building structures; it's about constructing dreams and shaping futures. Our ethos is rooted in reliability, professionalism, and a commitment to excellence that sets us apart in the construction industry.</p>
            
            <Link className=' bg-yellow-300 text-gray-800 text-xl p-4 rounded-xl' to={"/demo"}>Book A Demo</Link> </div>
         
      
        </div>
        <img src={cover
          } className="md:w-[500px] lg:w-[500px] hidden md:flex lg:flex "  alt="section2" />
      </div>
      <div className=' mt-[40px]'>
          <p className="text-xl font-light">At BuildWorX, we believe in the power of collaboration and the strength of expertise. With a team of seasoned professionals and industry veterans, we bring decades of experience to every project we undertake. From residential homes to commercial complexes, our portfolio speaks volumes about our dedication to quality craftsmanship and attention to detail.</p>
           </div>
      </div>
    </div>
  );
};

export default Section1;
