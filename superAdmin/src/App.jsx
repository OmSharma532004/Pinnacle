import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Add from './pages/Add'
import RebarEstimate from './pages/Estimate'
import Estimate from './pages/Estimate'
import Structure from './pages/Structure'
import Estimate2 from './pages/Estimate2'
import CSVUpload from './pages/upload'
import SuperAdminApproval from './pages/Approval'
import EditMaterials from './pages/EditMaterials'


function App() {
  const [count, setCount] = useState(0)

  return (
   
  <div className=' min-h-screen overflow-hidden'>
      <Navbar />
  <Routes>
    <Route path="/" element={<SuperAdminApproval />} />
    <Route path="/add" element={<Add />} />
    <Route path="/estimate" element={<Estimate />} />
    {/* <Route path="/structure" element={<Structure />} /> */}
    <Route path="/estimate2" element={<Estimate2 />} />
    <Route path='/edit' element={<EditMaterials/>} />
    <Route path="/upload" element={<CSVUpload />} />
    <Route path="/approve" element={<SuperAdminApproval />} />
    <Route path='*' element={<div className='  flex flex-col items-center bg-gray-700 text-white justify-center h-screen w-screen'>
<h1 className=' animate-pulse text-3xl '>404</h1>
<h2 className=' animate-pulse text-4xl'>Page not found</h2>

</div>} />
   
  </Routes>
  </div>
   
  )
}

export default App
