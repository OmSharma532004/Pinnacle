import React, { useState } from 'react';
import { setSignupData } from '../reducer/slices/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const [formData,setFormData] = useState({
    Name:'',
    email:'',
    password:'',
    confirmPassword:'',
    phoneNo:'',
    address:''

  })



const register= async()=>{
    const {Name,email,password,phoneNo,address,confirmPassword}=formData;
    if(password!==confirmPassword){
        alert('Passwords do not match')
    }
    else{
        dispatch(setSignupData(formData));
        //send otp api
        const otp= await fetch('http://localhost:3000/api/sendOTP',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email
            })
        });
        const data= await otp.json();
        if(data.success){
            navigate('/otp')
        }
        else{
            alert('OTP could not be sent')

    }
    }
}



  const handleSubmit = (e) => {
    e.preventDefault();

   console.log(formData);
    register();

  };

  return (
   <div className=' flex flex-col justify-center items-center min-h-screen w-screen bg-black '>
     <div className=" flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="Name"
                name="Name"
                type="text"
                autoComplete="Name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
                value={formData.Name}
                onChange={(e) => setFormData({...formData,Name:e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({...formData,email:e.target.value})}
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({...formData,password:e.target.value})}
              />
            </div>
            <div>

              <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="current-password"
                placeholder='Confirm Password'
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:"
                onChange={(e) => setFormData({...formData,confirmPassword:e.target.value})}
                />
               
                </div>
                <div>
                <label htmlFor="phoneNo" className="sr-only">Phone Number</label>
                <input
                id="phoneNo"
                name="phoneNo"
                type="number"
                autoComplete="phoneNo"
                required
                placeholder='Phone Number'
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:"
                onChange={(e) => setFormData({...formData,phoneNo:e.target.value})}
                />


                </div>
                <div>
                <label htmlFor="address" className="sr-only">Address</label>
                <input
                id="address"
                name="address"
                type="text"
                autoComplete="address"
                required
                placeholder='Address'
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:"
                onChange={(e) => setFormData({...formData,address:e.target.value})}
                />
                </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
          </div>
        </form>
      </div>
    </div>
   </div>
  );
  
};

export default Signup;
