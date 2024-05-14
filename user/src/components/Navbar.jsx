import React from 'react';
import { Link } from 'react-router-dom';
//useSelector
import { useSelector } from 'react-redux';
import { GoogleLogout } from 'react-google-login';

const Navbar = () => {

    const logoutOnSuccess = () => {
        console.log('logout success');
    }

    const handleGoogleLogout = () => {
      
     
    }
    const auth = useSelector(state => state.auth);
    const token = auth.token;
    const user = auth.user;
    console.log(user);
    
   
   
    return (
        <nav className= " bg-purple-600  text-white border-b-4 text-xl w-screen p-4  ">
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
                <Link to={"/dashboard"}>   <li className=" hover:text-yellow-400">Dashboard</li></Link>
                 <li onClick={()=>{
                    localStorage.clear();
                    window.location.reload();
                    window.location.href='/login';
                    handleGoogleLogout();
                }} className="   hover:text-yellow-400">
                  <GoogleLogout
            clientId="646102159744-39spi62n4lc3orsasooie7je0uka1hc9.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logoutOnSuccess}
            
        />
                </li>
                </>

               }

              
               </span>
            </ul>
        </nav>
    );
};

export default Navbar;
