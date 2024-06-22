import React, { useState } from 'react';
import image1 from './image.png';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

// Set the app element for accessibility
Modal.setAppElement('#root');

const HeroSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const handleCall = () => {
    window.location.href = 'tel:+1234567890'; // Replace with your phone number
  };

  return (
    <div className="relative w-full h-[500px]">
      <img src={image1}  alt="BuildWorX" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 md:bg-opacity-10 text-white">
        <div className="w-full lg:ml-9 md:ml-9 mx-auto text-start py-20 px-10">
          <h1 className="text-6xl mb-4">Build<b className=' text-yellow-300 font-light '>WorX</b></h1>
          <p className="mb-4 w-[40%]">XXXXXX</p>
          <ul className="mb-4">
            <li>100+ Executed Projects</li>
            <li>200+ Audit Checks</li>
            <li>100% Customer Satisfaction</li>
          </ul>
          <Link to="/demo">
            <button className="bg-yellow-400 hover:bg-purple-600 text-black py-2 px-4 rounded mb-4">
              Book Free Consultation
            </button>
          </Link>
        </div>
      </div>
      <button
        onClick={openModal}
        className="bg-yellow-400 hover:bg-purple-500 hover:text-white text-black md:py-5 md:w-[100px] p-4 w-[80px] md:px-5 fixed rounded top-96 right-0 z-10"
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
  );
};

export default HeroSection;
