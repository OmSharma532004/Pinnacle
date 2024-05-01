import React from 'react';
import { Link } from 'react-router-dom';
//useSelector
import { useSelector } from 'react-redux';

const Navbar = () => {
    const auth = useSelector(state => state.auth);
    const token = auth.token;
    console.log(token);
    return (
        <nav className= "  bg-white text-black text-xl w-screen p-4  ">
      <ul className="flex justify-between">
      <Link to={"/"}>   <li className="t hover:text-yellow-400">Home</li></Link>
               <span className=' flex flex-row items-center justify-center gap-4'>
               {
                token==null ?
                <>
              <Link to={"/add"}>   <li className=" hover:text-yellow-400">Raw material</li></Link>
              <Link to={"/estimate"}>   <li className=" hover:text-yellow-400">Estimate</li></Link>
       
                </>
                :
                <>
                 <li onClick={()=>{
                    localStorage.clear();
                    window.location.reload();
                    window.location.href='/login';
                }} className="  hover:text-yellow-400">Logout</li>
                </>

               }

              
               </span>
            </ul>
        </nav>
    );
};

export default Navbar;
