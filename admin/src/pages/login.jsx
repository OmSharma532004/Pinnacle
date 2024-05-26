import React, { useState } from 'react';
import { toast } from "react-hot-toast";
import { GoogleLogin } from 'react-google-login';

const clientid = "646102159744-39spi62n4lc3orsasooie7je0uka1hc9.apps.googleusercontent.com";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    const res = await fetch('http://localhost:3000/api/admin/login', {
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
      console.log(data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user._id));
      window.location.href = '/dashboard';
    } else {
      toast.error("Invalid Credentials!");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };


  return (
    <div className='bg-black w-screen overflow-y-hidden gap-4 flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-3xl font-bold text-white'>Welcome to Pinnacle</h1>
      <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
            {/* <GoogleLogin
              clientId={clientid}
              buttonText='Sign in with Google'
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            /> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
