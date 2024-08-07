import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { gapi } from 'gapi-script';
import Modal from 'react-modal';
import toast from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MetaTags from './components/MetaTag';
import CookieConsent from './components/CookieConsent/CookieConsent';
import './App.css';
import ResidentialPage from './pages/Residential';
import CommercialPage from './pages/Commercial';
import SupervisionPage from './pages/SupervisionPage';
import BlogPage from './pages/Blog';
import FaqPage from './pages/FaqPage';

const Login = lazy(() => import('./pages/login'));
const Signup = lazy(() => import('./pages/signin'));
const EnterOtp = lazy(() => import('./pages/enterOtp'));
const NewEstimate = lazy(() => import('./pages/Estimator/NewEstimate'));
const UserProfile = lazy(() => import('./pages/userProfile'));
const UpdatePassword = lazy(() => import('./pages/updatePassword'));
const ForgotPassword = lazy(() => import('./pages/enterEmail'));
const BookDemoForm = lazy(() => import('./pages/Demo'));
const SuperVisionForm = lazy(() => import('./pages/superVision'));
const DisclaimerPolicy = lazy(() => import('./pages/DisclaimerPolicy'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Sitemap = lazy(() => import('./pages/Sitemap'));

function App() {
  const [cookieConsent, setCookieConsent] = useState(null);
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

  const handleConsent = (consentType) => {
    setCookieConsent(consentType);
    if (consentType === 'all') {
      // Load Google Analytics script
      (function() {
        var ga = document.createElement('script');
        ga.src = 'https://www.googletagmanager.com/gtag/js?id=G-LEF3BV4929';
        document.head.appendChild(ga);
        ga.onload = function() {
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LEF3BV4929');
        };
      })();
    }
  };

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
      <MetaTags/>
      <CookieConsent onConsent={handleConsent} />
      <div className='flex -mb-[120px] flex-col items-center justify-center'>
        <Navbar />
        <div className=' mt-[90px]'></div>
        <Suspense fallback={<div>Loading...</div>}>
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
            <Route path='/disclaimer' element={<DisclaimerPolicy />} />
            <Route path='/privacy' element={<PrivacyPolicy/>} />
            <Route path='/sitemap' element={<Sitemap />} />
            <Route path='/residential' element={<ResidentialPage/>} />
            <Route path='/commercial' element={<CommercialPage/>} />
            <Route path='/supervisionPage' element={<SupervisionPage/>} />
            <Route path='/blogs' element={<BlogPage/>} />
            <Route path='/faq' element={<FaqPage/>} />
            <Route path='*' element={<div className='flex flex-col items-center bg-gray-700 text-white justify-center h-screen w-screen'>
              <h1 className='text-3xl'>404</h1>
              <h2 className='text-4xl'>Page not found</h2>
            </div>} />
          </Routes>
        </Suspense>
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
            <label className="mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mb-4 p-2 w-[70%] border-black border-2 rounded"
              required
            />
            <label className="mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mb-4 p-2 w-[70%] border-black border-2 rounded"
              required
            />
            <label className="mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mb-4 p-2 w-[70%] border-black border-2 rounded"
            />
            <label className="mb-2">Comment</label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              className="mb-4 p-2 w-[70%] border-black border-2 rounded"
            />
            <button type="submit" className="bg-yellow-400 hover:bg-purple-500 hover:text-white text-black font-bold py-2 px-4 rounded">
              Submit
            </button>
          </form>
        </Modal>
        <Modal
          isOpen={leaveDialogIsOpen}
          onRequestClose={closeLeaveDialog}
          contentLabel="Leave Modal"
          className="modal w-[40%] flex flex-col items-center justify-center mx-auto p-8 bg-white rounded shadow-2x"
          overlayClassName="overlay"
        >
          <h2 className="text-2xl mb-4">Why leaving so soon?</h2>
          <p className="mb-4">Explore our offers before you go!</p>
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
