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
import UpdatePassword from './pages/updatePassword'
import ForgotPassword from './pages/enterEmail'
import BookDemoForm from './pages/Demo'

import SuperVisionForm from './pages/superVision'
import Modal from 'react-modal'




function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const handleCall = () => {
    window.location.href = 'tel:+1234567890'; // Replace with your phone number
  };

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
  Modal.setAppElement('#root');

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
<Route path='/update-password/:id' element={<UpdatePassword/>} />
<Route path='/reset-password' element={<ForgotPassword/>} />
<Route path='/demo' element={<BookDemoForm/>} />
<Route path='/supervision' element={<SuperVisionForm/>} />



<Route path='*' element={<div className=' flex flex-col items-center bg-gray-700 text-white justify-center h-screen w-screen'>
<h1 className=' text-3xl '>404</h1>
<h2 className=' text-4xl'>Page not found</h2>

</div>} />

</Routes>
<button
  onClick={openModal}
  className="bg-yellow-400 hover:bg-purple-500 hover:text-white text-black py-4 md:py-5 md:w-[100px] w-[80px] md:px-5 fixed rounded top-1/2 right-0 transform -translate-y-1/2 z-10"
  style={{ backdropFilter: 'blur(10px)' }}
>
  Talk to Our Expert
</button>


      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Contact Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h2 className="text-2xl mb-4">Contact Us</h2>
        <p className="mb-4">Call us at: +1234567890</p>
        <div className="flex justify-end">
          <button
            onClick={handleCall}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Call
          </button>
          <button
            onClick={closeModal}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </Modal>
</div>
  </>
  )
}

export default App
