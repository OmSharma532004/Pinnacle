import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   
   <div className='h-screen w-screen bg-black flex flex-col items-center justify-center '>
      <h1 className=' text-5xl text-white animate-pulse'>Super Admin</h1>
   </div>
   
  )
}

export default App
