import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/login'
import Signup from './pages/signin'

function App() {


  return (
  < >
<div className=' flex  flex-col items-center justify-center '>
<Navbar/>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/login' element={<Login/>} />
<Route path='/signup' element={<Signup/>} />
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
