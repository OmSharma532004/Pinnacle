import React from 'react';
import { Link } from 'react-router-dom';
//useSelector
import { useSelector } from 'react-redux';

const Navbar = () => {
    const auth = useSelector(state => state.auth);
    const token = auth.token;
    console.log(token);
    return (
        <nav className= " bg-zinc-700  text-white text-xl w-screen p-4  ">
      <ul className="flex justify-between">
      <Link to={"/"}>   <li className="t hover:text-yellow-400">Home</li></Link>
               <span className=' flex flex-row items-center justify-center gap-4'>
               {
                token==null ?
                <>
                <Link to={"/login"}>   <li className=" hover:text-yellow-400">Login</li></Link>
                <Link to={"/signup"}>   <li className=" hover:text-yellow-400">Signup</li></Link>
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
