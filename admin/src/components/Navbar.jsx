import React from 'react';
import { Link } from 'react-router-dom';
//useSelector
import { useSelector } from 'react-redux';


const Navbar = () => {
   

   
    const auth = useSelector(state => state.auth);
    const token = auth.token;
    const user = auth.user;
    console.log(user);
    
   
   
    return (
        <nav className= " bg-white  text-purple-800 font-bold border-b-4 border-yellow-400 text-2xl w-screen p-4  ">
      <ul className="flex items-center  justify-between">
      <Link to={"/"}>   <li className="t hover:text-yellow-400">Home</li></Link>
               <span className=' flex flex-row items-center justify-center gap-4'>
               {
                token==null ?
                <>
                <Link to={"/login"}>   <li className=" hover:text-yellow-400">Login</li></Link>
                 </>
                :
                <>
                <Link to={"/dashboard"}>   <li className=" hover:text-yellow-400">Dashboard</li></Link>
                 <li onClick={()=>{
                    localStorage.clear();
                    window.location.reload();
                    window.location.href='/login';
               
                }} className="   hover:text-yellow-400">
                  Logout
                </li>
                </>

               }

              
               </span>
            </ul>
        </nav>
    );
};

export default Navbar;
