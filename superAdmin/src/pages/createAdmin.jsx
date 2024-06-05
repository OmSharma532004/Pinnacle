//create a signup page with wnteries name email password phone no as entries

import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Admin = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const apiUrl = import.meta.env.VITE_API_URL;
    const createAdmin=async()=>{
        //if password length is less than 8,one special character and phone number is not equal to 10
        
        if(password.length<8){
            toast.error('Password must be atleast 8 characters');
            return;
        }
        if(!/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)){
            toast.error('Password must contain a special character');
            return;
        }
        if(phone.length!==10){
            toast.error('Phone number must be 10 digits');
            return;
        }

        toast.loading('Creating Admin')
        const res=await fetch(`${apiUrl}/admin/signup`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name,email,password,phone
            })
        });
        const data=await res.json();
        if(res.ok){
            toast.dismiss();
            toast.success('Admin created successfully');
            console.log(data);
        }else{
            toast.dismiss();
            toast.error('Error creating admin');
            console.log('error');
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password, phone);
        createAdmin();
    }

    return (
        <div className="flex flex-col items-center justify-center bg-black w-screen h-screen text-white">
            <h1>Signup</h1>
            <form onSubmit={handleSubmit} className="flex flex-col text-black gap-4">
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <button className=' bg-white  p-4 mt-2 rounded-xl' type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Admin;