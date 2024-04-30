import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSignupData } from "../reducer/slices/authSlice";
import toast from "react-hot-toast";
const EnterOtp = () => {
    const dispatch = useDispatch();
    const {signupData}= useSelector(state=>state.auth);
    console.log(signupData);
    
    const [otp, setOtp] = useState("");

    const register = async () => {
        console.log(signupData);
        const { Name, email, password, phoneNo, address, confirmPassword } = signupData;
        if (password !== confirmPassword) {
            alert('Passwords do not match')
        }
        else {
            console.log("otp",otp);
            //register
            const response=await fetch('http://localhost:3000/api/signup',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    Name,
                    email,
                    password,
                    phoneNo,
                    address,
                    otp
                })
            });
            const data= await response.json();
            if(data.success){
                toast.success('User registered successfully')
                console.log(data);
                window.location.href='/login'
            }
            else{
                toast.error('Error registering user')
                console.log(data);


        }
    }
    }

    function submitHandler(e) {
        e.preventDefault();
        // setSignupData({ ...signupData, Otp });
        
        console.log(otp);
        
        register();
       
        
    }

    return (
        <div className=" w-screen h-screen bg-black flex flex-col items-center justify-center ">
          <div className=" bg-black p-7 rounded-2xl text-white flex flex-col items-center justify-center gap-10" >
          <div className="  text-3xl">Enter the OTP sent to your email address</div>
            <form className=" flex-col flex items-center justify-center gap-4" onChange={(e) => { setOtp(e.target.value) }} onSubmit={submitHandler}>
                <input className=" w-[200px] h-[40px] text-black " type="text" name="otp" 
               ></input>
                <button className=" bg-white text-black p-4 rounded-lg" type="submit">Submit</button>
            </form>
          </div>
        </div>
    )
}

export default EnterOtp;
