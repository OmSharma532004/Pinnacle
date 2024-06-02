import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GoogleLogout } from 'react-google-login';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const logoutOnSuccess = () => {
        console.log('logout success');
    };

    const handleGoogleLogout = () => {
        // Implement Google logout logic here
    };
    const clientid = "646102159744-39spi62n4lc3orsasooie7je0uka1hc9.apps.googleusercontent.com";


    const auth = useSelector(state => state.auth);
    const token = auth.token;
    const user = auth.user;
    
    // Get initials
    const getInitials = (name) => {
        const [firstName, lastName] = name.split(' ');
        return `${firstName[0]}${lastName[0]}`.toUpperCase();
    };

    return (
        <nav className="bg-purple-800 text-white border-b-4 border-yellow-400 text-2xl w-screen p-4">
            <ul className="flex items-center justify-between">
                <Link to={"/"}>
                    <li className="hover:text-yellow-400">Home</li>
                </Link>
                <span className='flex flex-row items-center justify-center gap-4'>
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
