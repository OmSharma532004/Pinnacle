import React from 'react';
import section2 from './section2.png';
import { Link } from 'react-router-dom';

const Section2 = () => {
  return (
    <div className="bg-purple-800 w-full p-[50px] pb-[100px] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="">
          <div className="md:col-span-2">
            <h1 className="text-4xl flex-col items-center justify-center text-yellow-300 font-bold mb-3">"Planning to Build a Home? Build with Us!"</h1>
            <p className="mb-[50px] font-light text-xl"><b className='text-yellow-300 font-semibold text-2xl'>Building It</b>, where your vision becomes reality. Whether you're dreaming of a cozy residence or a sprawling estate, our team of experts is here to guide you every step of the way. Our commitment to quality and innovation ensures that your project is in the best hands.

From the initial blueprint to the final inspection, we manage every detail with precision and care. Trust in our expertise and experience to bring your dream home to life.

</p>
            <Link className=' bg-orange-500 text-white text-xl font-bold  p-4 rounded-xl' to={"/dashboard"}>Calculate Estimate</Link> </div>
       
        </div>
       
      </div>
    </div>
  );
};

export default Section2;
