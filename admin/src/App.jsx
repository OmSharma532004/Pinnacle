import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AdminUpload from './pages/adminFileUpload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Routes>
    <Route path="/upload" element={<AdminUpload />} />
   </Routes>
    </>
  )
}

export default App
