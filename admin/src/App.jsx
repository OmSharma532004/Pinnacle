import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AdminUpload from './pages/adminFileUpload'
import Signup from './pages/signup'
import Login from './pages/login'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
   <Routes>
    <Route path="/upload" element={<AdminUpload />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Login />} />
    <Route path='/dashboard'element={<Dashboard/>}/>
    <Route path='*' element={<div className=' flex flex-col items-center bg-gray-700 text-white justify-center h-screen w-screen'>
<h1 className=' animate-pulse text-3xl '>404</h1>
<h2 className=' animate-pulse text-4xl'>Page not found</h2>
</div>}/>
   </Routes>
    </>
  )
}

export default App
