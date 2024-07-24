import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { gapi } from 'gapi-script';
import Modal from 'react-modal';
import toast from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/login';
import Signup from './pages/signin';
import EnterOtp from './pages/enterOtp';
import Estimate2 from './pages/Estimate2';
import UserProfile from './pages/userProfile';
import UpdatePassword from './pages/updatePassword';
import ForgotPassword from './pages/enterEmail';
import BookDemoForm from './pages/Demo';
import SuperVisionForm from './pages/superVision';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import NewEstimate from './pages/Estimator/NewEstimate';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [leaveDialogIsOpen, setLeaveDialogIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    comment: '',
  });
  const [errors, setErrors] = useState({});
  const apiUrl = import.meta.env.VITE_API_URL;
  let leaveEventListenerAdded = false;

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleCall = () => {
    window.location.href = 'tel:+1234567890'; // Replace with your phone number
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }

    if (!formData.phone.trim() || !/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Valid 10-digit phone number is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      toast.loading("Sending Email...");
      const response = await fetch(`${apiUrl}/sendMail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: "City:- " + formData.city + " Comment:- " + formData.comment
        }),
      });
      const data = await response.json();
      toast.dismiss();
      if (data.success) {
        toast.success('Thanks, Our team will contact you soon!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          comment: '',
        });
        closeModal();
      } else {
        toast.error('Error sending mail');
      }
    }
  };

  const clientId = "646102159744-39spi62n4lc3orsasooie7je0uka1hc9.apps.googleusercontent.com";
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      })
    };

    gapi.load('client:auth2', start);
  }, []);

  const handleMouseLeave = (e) => {
    if (e.clientY <= 0) {
      setLeaveDialogIsOpen(true);
      document.removeEventListener('mouseleave', handleMouseLeave);
    }
  };

  useEffect(() => {
    if (!leaveEventListenerAdded) {
      document.addEventListener('mouseleave', handleMouseLeave);
      leaveEventListenerAdded = true;
    }
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      leaveEventListenerAdded = false;
    };
  }, []);

  const closeLeaveDialog = () => {
    setLeaveDialogIsOpen(false);
  };

  Modal.setAppElement('#root');

  return (
    <div>
      <div className='flex -mb-[120px] flex-col items-center justify-center'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/estimate' element={<NewEstimate />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/otp' element={<EnterOtp />} />
          <Route path='/dashboard' element={<Home />} />
          <Route path='/profile' element={<UserProfile />} />
          <Route path='/update-password/:id' element={<UpdatePassword />} />
          <Route path='/reset-password' element={<ForgotPassword />} />
          <Route path='/demo' element={<BookDemoForm />} />
          <Route path='/supervision' element={<SuperVisionForm />} />
          <Route path='*' element={<div className='flex flex-col items-center bg-gray-700 text-white justify-center h-screen w-screen'>
            <h1 className='text-3xl'>404</h1>
            <h2 className='text-4xl'>Page not found</h2>
          </div>} />
        </Routes>
        <button
          onClick={() => {
            window.location.href = "/demo"
          }}
          className="bg-yellow-400 hover:bg-purple-500 hover:text-white text-black py-4 md:py-5 md:w-[100px] w-[80px] md:px-5 fixed rounded top-1/2 right-0 transform -translate-y-1/2 z-10"
          style={{ backdropFilter: 'blur(10px)' }}
        >
          Talk to Our Expert
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Contact Modal"
          className="modal md:w-[40%] w-[80%] flex flex-col items-center justify-center mx-auto p-8 bg-white rounded shadow-2x"
          overlayClassName="overlay"
        >
          {Object.keys(errors).length > 0 && (
            <div className="text-red-700 px-4 py-3 rounded relative" role="alert">
              <ul>
                {Object.values(errors).map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
          <h2 className="text-2xl text-center mb-4">Talk to Our Expert</h2>
          <form onSubmit={handleSubmit} className="flex items-center md:w-[90%] justify-center flex-col">
            <label className="mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mb-4 p-2 w-[70%] border-black border-2 rounded"
              required
            />
            <label className="mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mb-4 p-2 w-[70%] border-black border-2 rounded"
              required
            />
            <label className="mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mb-4 w-[70%] border-black border-2 p-2 rounded"
              required
            />
            <label className="mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mb-4 p-2 w-[70%] border-black border-2 rounded"
              required
            />
            <div className="flex w-[50%] justify-end">
              <button
                type="submit"
                className="bg-purple-900 rounded-xl w-[100%] mt-[20px] text-white font-bold py-2 px-4 mr-2"
              >
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <Modal
          isOpen={leaveDialogIsOpen}
          onRequestClose={closeLeaveDialog}
          contentLabel="Leave Page Dialog"
          className="modal md:w-[40%] w-[80%] flex flex-col items-center justify-center mx-auto p-8 bg-white rounded shadow-2x"
          overlayClassName="overlay"
        >
          <h2 className="text-2xl text-center mb-4">Why leaving so soon?</h2>
          <p className="text-center mb-4">Explore our offers before you go!</p>
          <button
            onClick={() => {
              closeLeaveDialog();
              openModal();
            }}
            className="bg-purple-900 rounded-xl w-[50%] text-white font-bold py-2 px-4"
          >
            Talk To Our Expert
          </button>
        </Modal>
      </div>
    </div>
  );
}

export default App;
