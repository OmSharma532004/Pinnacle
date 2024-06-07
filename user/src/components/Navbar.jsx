import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const auth = useSelector(state => state.auth);
    const token = auth.token;
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    // Smooth scroll to target section
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            closeMenu();
        }
    };

    return (
        <>
            <nav className="bg-purple-800 text-white border-b-4 border-yellow-400 text-2xl w-screen p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <Link to={"/"} className="hover:text-yellow-400">
                        <div>Home</div>
                    </Link>
                    <button className="md:hidden text-2xl" onClick={toggleMenu}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    <ul className="hidden md:flex items-center justify-between w-full md:w-auto">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-4">
                            {location.pathname === "/" && (
                                <div className='flex flex-col md:flex-row md:gap-5'>
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
                                <Link to={"/profile"}>
                                    <li className="hover:text-yellow-400 ">
                                        <FaUserCircle className="ml-4" />
                                        {/* {user && getInitials(user.Name)} */}
                                    </li>
                                </Link>
                            )}
                        </div>
                    </ul>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu}></div>
                    <div className="fixed top-0 right-0 text-xl flex flex-col items-center  w-[30%] text-center h-full bg-purple-800 text-white p-4 z-50">
                        <ul className="flex flex-col gap-4">
                            {location.pathname === "/" && (
                                <>
                                    <li onClick={() => scrollToSection('section1')} className="cursor-pointer hover:text-yellow-400">About Us</li>
                                    <li onClick={() => scrollToSection('service-steps')} className="cursor-pointer hover:text-yellow-400">Service Steps</li>
                                    <li onClick={() => scrollToSection('service-highlights')} className="cursor-pointer hover:text-yellow-400">Why Us?</li>
                                    <li onClick={() => scrollToSection('footer')} className="cursor-pointer hover:text-yellow-400">Contact</li>
                                </>
                            )}
                            {token == null ? (
                                <>
                                    <Link to={"/login"} onClick={closeMenu}>
                                        <li className="hover:text-yellow-400">Login</li>
                                    </Link>
                                    <Link to={"/signup"} onClick={closeMenu}>
                                        <li className="hover:text-yellow-400">Signup</li>
                                    </Link>
                                </>
                            ) : (
                                <Link to={"/profile"} onClick={closeMenu}>
                                    <li className="hover:text-yellow-400 flex items-center justify-center   ">
                                        <FaUserCircle className="" />
                                        {/* {user && getInitials(user.Name)} */}
                                    </li>
                                </Link>
                            )}
                        </ul>
                    </div>
                </>
            )}
        </>
    );
};

export default Navbar;
