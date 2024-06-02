// rebarEstimate page
import React, { useState,useEffect } from 'react';
import ArchTable from '../components/Estimate/archData';
import Structure from './Structure';
import Electrical from './Electrical';


const Estimate = () => {
    const [dimensions, setDimensions] = useState(90);
    const [plot, setPlot] = useState({
        size: 947.22,
        Design:"3BHK",
    });
    const [estimate, setEstimate] = useState(4000000);
      const [select, setSelect] = useState(1);
      const [allCosts, setAllCosts] = useState(
        {
          Cement: 0,
          Aggregate: 0,
          Steel: 0,
          RCCBlocks: 0,
          Wire: 0,
          Switch: 0,
          UPS_Wiring: 0,
        }
      );
      const[finalCost,setFinalCost]=useState(0);
      {
        console.log(allCosts);
       
      }
      useEffect(() => {
        setFinalCost(
          allCosts.Cement +
            allCosts.Aggregate +
            allCosts.Steel +
            allCosts.RCCBlocks +
            allCosts.Wire +
            allCosts.Switch +
            allCosts.UPS_Wiring
        );
      }
      ,[allCosts]);

    return (
      <>
        <div className=" flex flex-col overflow-hidden  justify-center bg-gray-100 w-scren min-h-screen text-black">
          <div className=" w-[80%] mt-[100px] mx-auto">
            <h1 className=" text-5xl border-b-2 pb-4 font-semibold">
              Estimate
            </h1>
            <div className=" gap-[50px] flex items-center justify-center mt-[100px]">
              <div className=" p-2 font-extralight border-2 text-black bg-white  w-[200px] ">
                <h1 className=" text-sm">Plot Dimensions</h1>
                <p>{dimensions}</p>
              </div>
              <div className=" p-2 font-extralight border-2 text-black bg-white  w-[200px] ">
                <h1 className=" text-sm">Plot Details</h1>
                <p>
                  {plot.size}, {plot.Design}
                </p>
              </div>
              <div className=" p-2 font-extralight border-2 text-black bg-white  w-[200px] ">
                <h1 className=" text-sm">Estimate</h1>
                <p>{finalCost}</p>
              </div>
            </div>

            {/* <div className=' flex mt-[100px] flex-col  justify-center '>
            <h1 className=' border-b-2 pb-4  font-bold text-3xl '>
            Material : Bill Of Quantity
            </h1>
            <div className=' gap-[50px] flex items-center justify-center mt-[100px] '>
            <div className=' p-2 flex justify-around font-extralight border-2 text-black bg-white  w-[250px] '>
              <img src='../assets/steel.png' alt='rebar' className=' w-[80px] h-[80px]' />
              <div className='text-xl font-bold'>
                <h1 className=' text-lg'>Steel(Tone)</h1>
                <p className=' font-light'>{materials.Steel}</p>
              </div> 
            </div>
            <div className=' p-2 flex justify-around font-extralight border-2 text-black bg-white  w-[250px] '>
              <img src='../assets/cement.png' alt='rebar' className='  w-[80px] h-[80px]' />
              <div className='text-xl font-bold'>
                <h1 className=' text-lg'>Cement(kg)</h1>
                <p className=' font-light'>{materials.Cement}</p>
              </div> 
            </div>
            <div className=' p-2 flex justify-around font-extralight border-2 text-black bg-white  w-[250px] '>
              <img src='../assets/sand.png' alt='rebar' className='  w-[80px] h-[80px]' />
              <div className='text-xl font-bold'>
                <h1 className=' '>Sand(m^3)</h1>
                <p className=' font-light'>{materials.Sand}</p>
              </div> 
            </div>
            <div className=' p-2 flex justify-around font-extralight border-2 text-black bg-white  w-[250px] '>
              <img src='../assets/gravel.png' alt='rebar' className='  w-[80px] h-[80px]' />
              <div className='text-xl font-bold'>
                <h1 >Gravel(m^3)</h1>
                <p className=' font-light'>{materials.Gravel}</p>
              </div> 
            </div>
            </div>

        </div> */}
            

            <div className=' mt-[50px]'>
            <h1 className=" text-3xl border-b-2 pb-4 font-semibold">
              Structure
            </h1>
            <Structure setAllCosts={setAllCosts} allCosts={allCosts}/>
            </div>
            <div className=' mt-[50px]'>
            <h1 className=" text-3xl border-b-2 pb-4 font-semibold">
              Electrical
            </h1>
            <Electrical  setAllCosts={setAllCosts} allCosts={allCosts} />
            </div>

            <div className=" mt-[100px] p-4 flex w-[100%] bg-gray-200 items-center justify-around mb-[100px]">
              <h1 className="  text-3xl ">Total Cost of Construction </h1>
              <div className=" text-green-500  p-4 text-3xl font-bold">{finalCost}</div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Estimate;