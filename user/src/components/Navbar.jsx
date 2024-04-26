import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-black text-xl w-screen p-4  ">
      <ul className="flex justify-between">
      <Link to={"/"}>   <li className="text-white hover:text-yellow-400">Home</li></Link>
               <span className=' flex flex-row items-center justify-center gap-4'>
              <Link to={"/login"}>
              <li className="text-white hover:text-yellow-400">Login</li>
              </Link>
             <Link to={"/signup"}>
                <li className="text-white hover:text-yellow-400">Register</li>
                </Link>
              
               </span>
            </ul>
        </nav>
    );
};

export default Navbar;
