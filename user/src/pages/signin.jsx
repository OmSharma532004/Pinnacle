import React, { useState } from 'react';
import { setSignupData } from '../reducer/slices/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const [formData,setFormData] = useState({
    Name:'',
    email:'',
    password:'',
    confirmPassword:'',
    phoneNo:'',
  

  })
  const apiUrl =import.meta.env.VITE_API_URL;



const register= async()=>{
    const {Name,email,password,phoneNo,confirmPassword}=formData;
    if(password!==confirmPassword){
        alert('Passwords do not match')
        return;
    }
    //check if password is 8 digits with one special character
    else if(!/(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)){
       toast.error('Password should have 8 digits with one special character')
        return;
    }

    //phone no should have 10 digits
    else if(!/^[0-9]{10}$/.test(phoneNo)){
        toast.error('Phone number should have 10 digits')
        return;
    }
    else{
      const toastId=toast.loading('Please wait...');
        dispatch(setSignupData(formData));
        //send otp api
        const otp= await fetch(`${apiUrl}/sendOTP`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email
            })
        });
        const data= await otp.json();
      if(otp.ok){
        navigate('/otp');
        console.log(data)
        toast.success('OTP sent successfully')
        //remove toast .loading
        toast.dismiss(toastId);

      }else{
        toast.error('Error sending OTP')

      }
    }
}



  const handleSubmit = (e) => {
    e.preventDefault();

   console.log(formData);
    register();

  };

  return (
   <div className=' flex flex-col gap-4 justify-center items-center min-h-screen w-screen bg-black '>
     <h1 className='text-3xl font-bold  text-white'>Welcome to Pinnacle </h1>
     <div className=" flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md flex flex-col gap-4 shadow-sm -space-y-px">
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
              {/* add password security 8 digits with on special character */}
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:"
                placeholder="Password"
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
                  {/* add that digits should be 10 */}
                <label htmlFor="phoneNo" className="sr-only">Phone Number</label>
                <input
                id="phoneNo"
                name="phoneNo"
                type="tel"
                autoComplete="phoneNo"
                required
                placeholder='Phone Number'
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:"
                onChange={(e) => setFormData({...formData,phoneNo:e.target.value})}
                />


                </div>
                {/* <div>
                <label htmlFor="address" className="sr-only">Address</label>
               <textarea
                id="address"
                name="address"
                type="text"
                autoComplete="address"
                required
                placeholder='Address'
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:"
                onChange={(e) => setFormData({...formData,address:e.target.value})}
                />
                </div> */}

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
