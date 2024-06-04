import React, { useState } from 'react';
import { toast } from "react-hot-toast";
import { GoogleLogin } from 'react-google-login';
import { FaGoogle } from 'react-icons/fa';
import i1 from "../components/HomePage/image.png"
import i2 from "../assets/loginPage/i2.png"
import i3 from "../assets/loginPage/i3.png"
import { useEffect } from 'react';
import {Link} from 'react-router-dom';


const images = [
  i1,
  i2,
  i3
 
 
 ];
const clientid = "646102159744-39spi62n4lc3orsasooie7je0uka1hc9.apps.googleusercontent.com";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const apiUrl = import.meta.env.VITE_API_URL;

const [currentImageIndex, setCurrentImageIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 5000);
  return () => clearInterval(interval);
}, []);
  const login = async () => {
    const res = await fetch(`${apiUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email, password
      })
    });
    const data = await res.json();
    if (res.ok) {
      toast.success("Login Successful!");
      setEmail('');
      setPassword('');
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      window.location.href = '/';
    } else {
      toast.error("Invalid Credentials!");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  const onSuccess = async (res) => {
    console.log("login successfully", res.profileObj);
    const userProfile = res.profileObj;
    const response = await fetch(`${apiUrl}/google-signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        googleId: userProfile.googleId,
        email: userProfile.email,
        name: userProfile.name,
        imageUrl: userProfile.imageUrl,
        tokenId: res.tokenId
      })
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', res.tokenId);
      localStorage.setItem('user', JSON.stringify(userProfile));
      window.location.href = '/';
      toast.success("Google Login Successful!");
    } else {
      toast.error("Google Login Failed!");
    }
  }

  const onFailure = (res) => {
    console.log("login failed", res);
    toast.error("Google Login Failed!");
  }

  return (
    <div className='relative w-screen h-screen flex justify-between overflow-hidden'>
    <div>
    <div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`House ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
      </div> 
      <div className=' h-screen flex items-center justify-center'>
      <div className="relative z-10 flex flex-col bg-purple-300 h-screen pr-8 items-center justify-center p-8 rounded-md shadow-md w-full max-w-md space-y-8">
        <div>
          <h1 className='text-3xl font-bold text-black text-center'>Welcome to Pinnacle</h1>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-black">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md flex flex-col gap-4 shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-black rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-black rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center">
          <GoogleLogin
            clientId={clientid}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            render={renderProps => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <FaGoogle className="mr-2" />
                Sign in with Google
              </button>
            )}
          />
          
        </div>
        <div>
          <p className="mt-4 text-center text-sm text-gray-600">Don't have an account? <a href="/signup" className="font-medium text-gray-900 hover:text-gray-700">Sign up</a></p>
        </div>
        <div>
          
          <p className="mt-4 text-center text-sm text-gray-600">Forgot your password?<Link to={"/reset-password"} > <button>Reset Password</button> </Link></p>

                  </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
