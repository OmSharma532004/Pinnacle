import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');
    const auth = useSelector(state => state.auth);
    const token = auth.token;
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            closeMenu();
        }
    };

    return (
        <>
            <nav className="bg-purple-900 z-10 fixed top-0 text-white border-b-4 border-yellow-500 text-xl w-screen p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <Link to={"/"} className="hover:text-yellow-400">
                        <div><img src={logo} alt='logo' width={200} /></div>
                    </Link>
                    <button className="md:hidden text-2xl" onClick={toggleMenu}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    <ul className="hidden md:flex  items-center justify-between w-[75%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                            <div>
                                {location.pathname === "/" && (
                                    <div className='flex items-center justify-center flex-col md:flex-row md:gap-5'>
                                         <li className="relative ">
                                            <select
                                                value={selectedCity}
                                                onChange={handleCityChange}
                                                className="cursor-pointer rounded-xl bg-white text-black h-9 text-lg flex items-center"
                                            >
                                                <option value="">Select City</option>
                                                <option value="delhi">Delhi</option>
                                                <option value="noida">Noida</option>
                                                <option value="faridabad">Faridabad</option>
                                                <option value="gurugram">Gurugram</option>
                                            </select>
                                        </li>
                                        <li onClick={() => scrollToSection('service-steps')} className="cursor-pointer hover:text-yellow-400 text-lg">Services</li>
                                        <li onClick={()=>{
                                            window.location.href = '/estimate';
                                        }} className='cursor-pointer hover:text-yellow-400 text-lg'>
                                           Estimator
                                        </li>
                                        <li onClick={() => scrollToSection('blogs')} className="cursor-pointer text-lg hover:text-yellow-400">Blog</li>
                                        <li onClick={() => scrollToSection('resources')} className="cursor-pointer text-lg hover:text-yellow-400">Resources</li>
                                        <li onClick={() => scrollToSection('footer')} className="cursor-pointer text-lg hover:text-yellow-400">Contact Us</li>
                                        <li onClick={() => scrollToSection('section1')} className="cursor-pointer hover:text-yellow-400 text-lg">About Us</li>
                                       
                                    </div>
                                )}
                                   {location.pathname === "/dashboard" && (
                                    <div className='flex items-center justify-center flex-col md:flex-row md:gap-5'>
                                         <li className="relative ">
                                            <select
                                                value={selectedCity}
                                                onChange={handleCityChange}
                                                className="cursor-pointer rounded-xl bg-white text-black h-9 text-lg flex items-center"
                                            >
                                                <option value="">Select City</option>
                                                <option value="delhi">Delhi</option>
                                                <option value="noida">Noida</option>
                                                <option value="faridabad">Faridabad</option>
                                                <option value="gurugram">Gurugram</option>
                                            </select>
                                        </li>
                                        <li onClick={() => scrollToSection('service-steps')} className="cursor-pointer hover:text-yellow-400 text-lg">Services</li>
                                        <li onClick={()=>{
                                            window.location.href = '/estimate';
                                        }} className='cursor-pointer hover:text-yellow-400 text-lg'>
                                           Estimator
                                        </li>
                                        <li onClick={() => scrollToSection('blogs')} className="cursor-pointer text-lg hover:text-yellow-400">Blog</li>
                                        <li onClick={() => scrollToSection('resources')} className="cursor-pointer text-lg hover:text-yellow-400">Resources</li>
                                        <li onClick={() => scrollToSection('footer')} className="cursor-pointer text-lg hover:text-yellow-400">Contact Us</li>
                                        <li onClick={() => scrollToSection('section1')} className="cursor-pointer hover:text-yellow-400 text-lg">About Us</li>
                                       
                                    </div>
                                )}
                            </div>
                            <div>
                                {token == null ? (
                                    <>
                                       <div className=' flex  gap-[20px]'>
                                       <Link to={"/login"}>
                                            <li className="hover:text-yellow-400">Login</li>
                                        </Link>
                                        <Link to={"/signup"}>
                                            <li className="hover:text-yellow-400">Signup</li>
                                        </Link>
                                       </div>
                                    </>
                                ) : (
                                    <Link to={"/profile"}>
                                        <li className="hover:text-yellow-400">
                                            <FaUserCircle style={{ fontSize: "2rem" }} className="ml-4" />
                                        </li>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>

            {isOpen && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu}></div>
                    <div className="fixed top-0 right-0 text-xl flex flex-col items-center w-[40%] text-center h-full bg-purple-800 text-white p-4 z-50">
                        <ul className="flex flex-col gap-4">
                            {location.pathname === "/" && (
                                <>
                                    <li onClick={() => scrollToSection('service-steps')} className="cursor-pointer hover:text-yellow-400">Services</li>
                                    <li onClick={() => scrollToSection('blogs')} className="cursor-pointer hover:text-yellow-400">Blogs</li>
                                    <li onClick={() => scrollToSection('resources')} className="cursor-pointer hover:text-yellow-400">Resources</li>
                                    <li onClick={() => scrollToSection('footer')} className="cursor-pointer hover:text-yellow-400">Contact Us</li>
                                    <li onClick={() => scrollToSection('section1')} className="cursor-pointer hover:text-yellow-400">About Us</li>
                                    <li className="relative">
                                        <select
                                            value={selectedCity}
                                            onChange={handleCityChange}
                                            className="cursor-pointer rounded-xl bg-white text-black p-4 text-lg flex items-center"
                                        >
                                            <option value="">Select City</option>
                                            <option value="delhi">Delhi</option>
                                            <option value="noida">Noida</option>
                                            <option value="faridabad">Faridabad</option>
                                            <option value="gurugram">Gurugram</option>
                                        </select>
                                    </li>
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
                                    <li className="hover:text-yellow-400 flex items-center justify-center">
                                        <FaUserCircle />
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
