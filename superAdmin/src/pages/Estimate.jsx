// rebarEstimate page
import React, { useState } from 'react';
import ArchTable from '../components/Estimate/archData';

const Estimate = () => {
    const [dimensions, setDimensions] = useState(90);
    const [plot, setPlot] = useState({
        size: 947.22,
        Design:"3BHK",
    });
    const [estimate, setEstimate] = useState(4000000);
    const [materials, setMaterials] = useState({
        Steel: 1000,
        Cement: 5000,
        Sand: 2000,
        Gravel:3000,
    });
    const [rebarData, setRebarData] = useState([
        { diameter: '8mm', price: '₹ 387.00', quantity: 391, totalPrice: 151317.00 },
        { diameter: '10mm', price: '₹ 590.00', quantity: 70, totalPrice: 41300.00 },
        { diameter: '12mm', price: '₹ 833.00', quantity: 156, totalPrice: 129948.00 },
        { diameter: '16mm', price: '₹ 1482.00', quantity: 54, totalPrice: 80028.00 },
      ]);
      
      const totalEstimation = rebarData.reduce((acc, item) => acc + item.totalPrice, 0);

      const [arch,setArch]=useState();
      const [total,setTotal]=useState(totalEstimation);
      const totalWithoutDecimals = Math.trunc(arch + total);
    console.log(total);

    return(
        <>
        <div className=" flex flex-col overflow-hidden  justify-center bg-gray-100 w-scren min-h-screen text-black">
       <div className=' w-[80%] mt-[100px] mx-auto'>
       <h1 className=' text-5xl border-b-2 pb-4 font-semibold'>Estimate</h1>
        <div className=' gap-[50px] flex items-center justify-center mt-[100px]' >
            <div className=' p-2 font-extralight border-2 text-black bg-white  w-[200px] '>
                <h1 className=' text-sm'>Plot Dimensions</h1>
                <p>{dimensions}</p>
               
            </div>
            <div className=' p-2 font-extralight border-2 text-black bg-white  w-[200px] '>
                <h1 className=' text-sm'>Plot Details</h1>
                <p>{plot.size}, {plot.Design}</p>
               
            </div>
            <div className=' p-2 font-extralight border-2 text-black bg-white  w-[200px] '>
                <h1 className=' text-sm'>Estimate</h1>
                <p>{estimate}</p>
               
            </div>
        </div>

        <div className=' flex mt-[100px] flex-col  justify-center '>
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

        </div>

        <div className=' mt-[100px] mb-[100px]'>
        <h1 className=' border-b-2 pb-4 text-2xl mb-[50px] font-bold'>Steel Rebar Requirement</h1>
          
        <div className="table-responsive my-5 p-2 m-2">
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="py-2 px-4">Rebar Diameter</th>
            <th className="py-2 px-4">Price/Piece</th>
            <th className="py-2 px-4">Quantity</th>
            <th className="py-2 px-4">Total Price</th>
          </tr>
        </thead>
        <tbody className="divide-y  text-black divide-gray-200">
          {rebarData.map((item, index) => (
            <tr className='  ' key={index}>
              <td className="py-4   text-center font-semibold">{item.diameter}</td>
              <td className="py-4  text-center ">{item.price}</td>
              <td className="py-4  text-center ">{item.quantity}</td>
              <td className=" text-green-400 py-4 text-center ">{item.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          </div>


          <div>
            <h1 className=' border-b-2 pb-4  text-2xl mb-[50px] font-bold'>Architectural and Civil Items</h1>
            <ArchTable setArch={setArch}/>
            
          </div>
          <div className=' mt-[100px] p-4 flex w-[100%] bg-gray-200 items-center justify-around mb-[100px]'>
            <h1 className='  text-3xl '>Total Cost of Construction </h1>
            <div className=' text-green-500  p-4 text-3xl font-bold'>
              <p>₹ {totalWithoutDecimals}</p>
            </div>
            </div>
       </div>
     
        </div>

        </>
    )
}

export default Estimate;