import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const auth = useSelector(state => state.auth);
    const token = auth.token;
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav className="bg-purple-800   text-white text-xl w-screen p-6">
                <div className="container mx-auto flex items-center justify-between">
                    <button className="md:hidden absolute right-5   text-2xl" onClick={toggleMenu}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    <ul className="hidden md:flex justify-around w-full">
                        <span className="flex flex-row items-center justify-around w-full gap-4">
                            {token == null ? (
                                <>
                                    <li onClick={() => navigate('/')} className="hover:text-yellow-400">LogIn</li>
                                </>
                            ) : (
                                <>
                                    <Link to={"/add"}> <li className="hover:text-yellow-300">Add material</li></Link>
                                    <Link to={"/edit"}> <li className="hover:text-yellow-300">Edit material</li></Link>
                                    <Link to={"/estimate2"}> <li className="hover:text-yellow-300">Estimate</li></Link>
                                    <Link to={"/approve"}> <li className="hover:text-yellow-300">Approve</li></Link>
                                    <Link to={"/create"}> <li className="hover:text-yellow-300">CreateAdmin</li></Link>
                                    <li onClick={() => {
                                        localStorage.clear();
                                        window.location.href = '/';
                                    }} className="hover:text-yellow-400">Logout</li>
                                </>
                            )}
                        </span>
                    </ul>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu}></div>
                    <div className="fixed top-0 right-0 w-1/2 h-full bg-purple-800 text-white p-4 z-50">
                        <ul className="flex flex-col gap-4">
                            {token == null ? (
                                <>
                                    <li onClick={() => {
                                        navigate('/');
                                        closeMenu();
                                    }} className="hover:text-yellow-400">LogIn</li>
                                </>
                            ) : (
                                <>
                                    <Link to={"/add"} onClick={closeMenu}> <li className="hover:text-yellow-300">Add material</li></Link>
                                    <Link to={"/edit"} onClick={closeMenu}> <li className="hover:text-yellow-300">Edit material</li></Link>
                                    <Link to={"/estimate2"} onClick={closeMenu}> <li className="hover:text-yellow-300">Estimate</li></Link>
                                    <Link to={"/approve"} onClick={closeMenu}> <li className="hover:text-yellow-300">Approve</li></Link>
                                    <Link to={"/create"} onClick={closeMenu}> <li className="hover:text-yellow-300">CreateAdmin</li></Link>
                                    <li onClick={() => {
                                        localStorage.clear();
                                        window.location.href = '/';
                                    }} className="hover:text-yellow-400">Logout</li>
                                </>
                            )}
                        </ul>
                    </div>
                </>
            )}
        </>
    );
};

export default Navbar;
