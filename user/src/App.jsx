import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/login'
import Signup from './pages/signin'
import EnterOtp from './pages/enterOtp'
import Dashboard from './pages/dashboard'
import {gapi} from 'gapi-script'
import Estimate2 from './pages/Estimate2'
import UserProfile from './pages/userProfile'





function App() {
  const clientId="646102159744-39spi62n4lc3orsasooie7je0uka1hc9.apps.googleusercontent.com";
  useEffect(() => {
   function start(){
    gapi.client.init({
      clientId:clientId,
      scope:''

    })
   };

   gapi.load('client:auth2',start);

  }, [])

  return (
  < >
<div className=' flex  flex-col items-center justify-center '>
<Navbar/>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/login' element={<Login/>} />
<Route path='/signup' element={<Signup/>} />
<Route path='/otp' element={<EnterOtp/>} />
<Route path='/dashboard' element={<Estimate2/>} />
<Route path='/profile'element={<UserProfile/>} />



<Route path='*' element={<div className=' flex flex-col items-center bg-gray-700 text-white justify-center h-screen w-screen'>
<h1 className=' text-3xl '>404</h1>
<h2 className=' text-4xl'>Page not found</h2>

</div>} />
</Routes>
</div>
  </>
  )
}

export default App
