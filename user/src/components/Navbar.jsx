import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const auth = useSelector(state => state.auth);
    const token = auth.token;
    const user = auth.user;

    // Get initials
    const getInitials = (name) => {
        const [firstName, lastName] = name.split(' ');
        return `${firstName[0]}${lastName[0]}`.toUpperCase();
    };

    // Smooth scroll to target section
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const location = useLocation();

    return (
        <nav className="bg-purple-800 text-white border-b-4 border-yellow-400 text-2xl w-screen p-4">
            <ul className="flex items-center justify-between">
                <Link to={"/"}>
                    <li className="hover:text-yellow-400">Home</li>
                </Link>
                <span className='flex flex-row items-center justify-center gap-4'>
                         {/* Add more navigation items here */}
                         {location.pathname === "/" && (
                 <div className=' flex gap-5 mr-7'>
                     <li onClick={() => scrollToSection('section1')} className="cursor-pointer hover:text-yellow-400">About Us</li>
                  <li onClick={() => scrollToSection('service-steps')} className="cursor-pointer hover:text-yellow-400">Service Steps</li>
                  <li onClick={() => scrollToSection('service-highlights')} className="cursor-pointer hover:text-yellow-400">Why Us?</li>
                  <li onClick={() => scrollToSection('footer')} className="cursor-pointer hover:text-yellow-400">Contact</li>
                 
                 </div>
                )}
                        {token == null ? (
                            <>
                                <Link to={"/login"}>
                                    <li className="hover:text-yellow-400">Login</li>
                                </Link>
                                <Link to={"/signup"}>
                                    <li className="hover:text-yellow-400">Signup</li>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to={"/profile"}>
                                    <li className="hover:text-yellow-400 flex items-center">
                                        <FaUserCircle className="mr-2" />
                                        {/* {user && getInitials(user.Name)} */}
                                    </li>
                                </Link>
                            </>
                        )}
                    </span>
                
            </ul>
        </nav>
    );
};

export default Navbar;
