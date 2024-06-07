import React from 'react';
import section2 from './section2.png';
import { Link } from 'react-router-dom';

const Section1 = () => {
  return (
    <div className="bg-white w-full p-[50px] pb-[100px] text-gray-800">

      
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h1 className="text-4xl flex-col items-center justify-center text-purple-800  mb-3">"Constructing Dreams, Shaping Futures"</h1>
            <p className="mb-[50px] font-light text-xl">Welcome to <b className='text-purple-800  text-2xl'>Building It</b>, where construction isn't just about building structures; it's about constructing dreams and shaping futures. Our ethos is rooted in reliability, professionalism, and a commitment to excellence that sets us apart in the construction industry.</p>
            
            <Link className=' bg-yellow-300 text-gray-800 text-xl p-4 rounded-xl' to={"/demo"}>Book A Demo</Link> </div>
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
