import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Add from './pages/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
   
  <>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/add" element={<Add />} />
    <Route path='*' element={<div className='  flex flex-col items-center bg-gray-700 text-white justify-center h-screen w-screen'>
<h1 className=' animate-pulse text-3xl '>404</h1>
<h2 className=' animate-pulse text-4xl'>Page not found</h2>

</div>} />
   
  </Routes>
  </>
   
  )
}

export default App
