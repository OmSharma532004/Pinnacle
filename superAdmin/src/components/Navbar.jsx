import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
//useSelector
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {

    const auth = useSelector(state => state.auth);
    const user=useSelector(state=>state.auth.user);
    const token=auth.token;
    const navigate=useNavigate();
  
    console.log(token);
    return (
        <nav className= "  bg-purple-800 text-white text-xl w-screen p-4  ">
      <ul className="flex justify-around">
     
               <span className=' flex flex-row items-center justify-around w-full gap-4'>
               {
                token==null ?
                <>
           <li onClick={()=>{
                    navigate('/');
                    
                }} className="  hover:text-yellow-400">LogIn</li>
                </>
                :
                <>
               

<Link to={"/add"}>   <li className=" hover:text-yellow-300">Add material</li></Link>
              <Link to={"/edit"}>   <li className=" hover:text-yellow-300">Edit material</li></Link>
         
              <Link to={"/estimate2"}>   <li className=" hover:text-yellow-300">Estimate</li></Link>
              <Link to={"/approve"}>   <li className=" hover:text-yellow-300">Approve</li></Link>
              <Link to={"/create"}>   <li className=" hover:text-yellow-300">createAdmin</li></Link>
             
              <li onClick={()=>{
                    localStorage.clear();
                    window.location.href='/';
                    
                }} className="  hover:text-yellow-400">Logout</li>
       
                </>

               }

              
               </span>
            </ul>
        </nav>
    );
};

export default Navbar;
