import React from 'react';
import section2 from './section2.png';
import { Link } from 'react-router-dom';

const Section1 = () => {
  return (
    <div className="bg-purple-800 w-full p-[50px] pb-[100px] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h1 className="text-4xl flex-col items-center justify-center text-yellow-300 font-bold mb-3">"Constructing Dreams, Shaping Futures"</h1>
            <p className="mb-[50px] font-light text-xl">Welcome to <b className='text-yellow-300 font-semibold text-2xl'>Building It</b>, where construction isn't just about building structures; it's about constructing dreams and shaping futures. Our ethos is rooted in reliability, professionalism, and a commitment to excellence that sets us apart in the construction industry.</p>
            
            <Link className=' bg-orange-500 text-white text-xl font-bold  p-4 rounded-xl' to={"/dashboard"}>Calculate Estimate</Link> </div>
          <div>
            <div className="flex flex-col items-center">
              
              <p className="text-sm">Different stages of construction</p>
            </div>
            <div className="mt-3">
              <img src={section2} alt="Final Project Image" />
            </div>
            
          </div>
        </div>
        <div className="mt-10">
          <p className="text-xl font-light">At Building It, we believe in the power of collaboration and the strength of expertise. With a team of seasoned professionals and industry veterans, we bring decades of experience to every project we undertake. From residential homes to commercial complexes, our portfolio speaks volumes about our dedication to quality craftsmanship and attention to detail.</p>
           </div>
      </div>
    </div>
  );
};

export default Section1;
